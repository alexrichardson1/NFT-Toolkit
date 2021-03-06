import { TokenT } from "@models/collection";
import { check, CustomValidator, ValidationChain } from "express-validator";

const areTokensValid: CustomValidator = (value: TokenT[]) => {
  return value.length > 0;
};

export const invalidAddress = (address: string): ValidationChain =>
  check(address).isEthereumAddress().withMessage("Invalid address");

export const invalidChainId = check("chainId")
  .isNumeric()
  .withMessage("Invalid chainId");

export const invalidTokens: ValidationChain = check("tokens")
  .custom(areTokensValid)
  .withMessage("Must have at least one NFT in collection.");

export const invalidLayers = check("layers").isArray();

export const collectionValidator: ValidationChain[] = [
  check("name")
    .notEmpty()
    .isAlphanumeric(void 0, { ignore: " " })
    .withMessage("Invalid name, must be only alphanumeric"),
  check("symbol").notEmpty().isAlphanumeric(),
  check("description").notEmpty().escape(),
  check("price").isNumeric(),
  invalidAddress("creator"),
  invalidChainId,
];

export const deployedValidator: ValidationChain[] = [
  invalidAddress("creator"),
  invalidChainId,
  invalidAddress("address"),
  invalidAddress("marketAddress").optional({ nullable: true }),
];

export const getCollectionsValidator: ValidationChain[] = [
  invalidAddress("creator"),
];

export const getCollectionValidator: ValidationChain[] = [
  invalidAddress("address"),
  check("chainId").isNumeric().withMessage("Invalid chainId"),
];
