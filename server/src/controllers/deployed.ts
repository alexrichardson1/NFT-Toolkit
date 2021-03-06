import { shuffleTokens } from "@controllers/common";
import { Collection } from "@models/collection";
import { User, UserCollection } from "@models/user";
import { RequestHandler } from "express";

interface DeployedI {
  marketAddress?: string;
}

export const addDeployedAddress: RequestHandler = async (req, res, next) => {
  const { creator, chainId, address } = req.params;
  const { marketAddress }: DeployedI = req.body;
  if (!creator || !chainId || !address) {
    return next(new Error("Invalid params"));
  }

  try {
    const collection = await Collection.findOneAndUpdate(
      { creator },
      { address, marketAddress },
      { sort: { _id: -1 } }
    ).exec();
    if (!collection) {
      throw new Error("Collection not found");
    }
    const { tokens } = collection;
    const randomTokens = shuffleTokens(tokens);
    if (!randomTokens[0]) {
      throw new Error("Tokens must include at least one");
    }
    const userCollection = new UserCollection({
      address,
      marketAddress,
      chainId: parseInt(chainId),
      image: randomTokens[0].image,
    });
    const user = await User.findByIdAndUpdate(creator, {
      $push: { collections: userCollection },
    }).exec();
    if (!user) {
      const newUser = new User({ _id: creator, collections: [userCollection] });
      await newUser.save();
    }
  } catch (error) {
    return next(error);
  }

  return res.json({ success: true });
};
