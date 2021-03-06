import { model, Schema } from "mongoose";

export interface UserCollectionI {
  address: string;
  marketAddress?: string;
  marketURL: string;
  chainId: number;
  image: string;
}

export interface UserT {
  _id: string;
  collections: UserCollectionI[];
}

const userCollectionSchema = new Schema<UserCollectionI>({
  address: String,
  marketAddress: String,
  marketURL: String,
  chainId: Number,
  image: String,
});

const userSchema = new Schema<UserT>({
  _id: String,
  collections: [userCollectionSchema],
});

export const User = model("User", userSchema);
export const UserCollection = model("UserCollection", userCollectionSchema);
