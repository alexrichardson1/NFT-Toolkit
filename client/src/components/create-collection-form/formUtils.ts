import axios from "axios";
import { UnsignedTransaction } from "ethers";

export const startLoading = (
  setLoadingMessage: React.Dispatch<React.SetStateAction<string>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  message = "Loading..."
): void => {
  setLoadingMessage(message);
  setIsLoading(true);
};

export const stopLoading = (
  setLoadingMessage: React.Dispatch<React.SetStateAction<string>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  setIsLoading(false);
  setLoadingMessage("");
};

export const uploadImages = async (
  images: ImageT[],
  account: string,
  collectionName: string
): Promise<void> => {
  const formData = new FormData();

  images.forEach((img, index) => {
    const fileName = img.image.name;
    const ext = fileName.split(".").pop();
    const newFile = new File([img.image], `${index + 1}.${ext}`, {
      type: img.image.type,
    });
    formData.append(`${account}/${collectionName}`, newFile);
  });

  await axios.post("http://localhost:5000/collection/images", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

interface StateT {
  collectionName: string;
  description: string;
  images: ImageT[];
  mintingPrice: number;
}

interface TransactionT {
  transaction: UnsignedTransaction;
}

export const uploadCollection = async (
  state: StateT,
  account: string,
  chainId: number
): Promise<UnsignedTransaction> => {
  const tokens = state.images.map((image, index) => ({
    name: image.name,
    description: "",
    image: `https://nft-toolkit-collections.s3.eu-west-2.amazonaws.com/${account}/${
      state.collectionName
    }/images/${index + 1}.${image.image.name.split(".").pop()}`,
  }));

  const collection = {
    name: state.collectionName,
    symbol: "TODO",
    description: state.description,
    price: `${state.mintingPrice}`,
    chainId: chainId,
    tokens: tokens,
    fromAddress: account,
  };

  const res = await axios.post(
    "http://localhost:5000/collection/save",
    collection
  );
  const tx: TransactionT = res.data;
  return tx.transaction;
};
