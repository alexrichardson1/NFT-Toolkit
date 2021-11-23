import { Collection } from "@models/collection";
import { User, UserCollection } from "@models/user";
import { RequestHandler } from "express";

export const addDeployedAddress: RequestHandler = async (req, res, next) => {
  const { creator, chainId, address } = req.params;
  if (!creator || !chainId || !address) {
    return next(new Error("Invalid params"));
  }

  try {
    const collection = await Collection.findOneAndUpdate(
      { creator },
      { address },
      { sort: { _id: -1 } }
    ).exec();
    if (!collection) {
      throw new Error("Collection not found");
    }
    const userCollection = new UserCollection({
      address,
      chainId: parseInt(chainId),
    });
    const user = await User.findByIdAndUpdate(creator, {
      $push: { collections: userCollection },
    }).exec();
    if (!user) {
      throw new Error("User not found");
    }
  } catch (error) {
    return next(error);
  }

  return res.json({ success: true });
};
