import { assert } from "console";
import sharp from "sharp";

interface ImageI {
  name: string;
  rarity: number;
  image?: Buffer;
}

interface LayerI {
  name: string;
  images: ImageI[];
  rarity: number;
}

interface GenCollectionI {
  name: string;
  symbol: string;
  description: string;
  quantity: number;
  layers: LayerI[];
}

interface GeneratedImageI {
  hash: string;
  images: ImageI[];
  rarity: number;
}

interface CompiledImageI {
  hash: string;
  image: Buffer;
  rarity: number;
}

interface GeneratedCollectionI {
  name: string;
  symbol: string;
  description: string;
  quantity: number;
  images: GeneratedImageI[];
}

function generateRandomPercentage() {
  const MAX_RAND = 100;
  return Math.random() * MAX_RAND;
}

function chooseLayerImage(images: ImageI[]): ImageI {
  const randomValue = generateRandomPercentage();
  let rarityCumulative = 0;
  for (const image of images) {
    rarityCumulative += image.rarity;
    if (randomValue <= rarityCumulative) {
      return image;
    }
  }
  return {
    name: "fail",
    rarity: 0,
  };
}

function generateOneCombination(collection: GenCollectionI): GeneratedImageI {
  const chosenLayerImages: ImageI[] = [];
  let hash = "";
  let layerIndex = 0;
  let rarity = 1;
  const oneHundred = 100;
  collection.layers.forEach((layer) => {
    const includeLayer = generateRandomPercentage() <= layer.rarity;
    if (includeLayer) {
      const chosenImage: ImageI = chooseLayerImage(layer.images);

      hash += `${layer.name}/${chosenImage.name},`;
      chosenLayerImages[layerIndex++] = chosenImage;
      rarity *= layer.rarity;
      rarity *= chosenImage.rarity / (oneHundred * oneHundred);
    } else {
      rarity *= (oneHundred - layer.rarity) / oneHundred;
    }
  });

  return {
    hash: hash,
    images: chosenLayerImages,
    rarity: rarity * oneHundred,
  };
}

/**
 * PRE: Layer images are assumed to be of equal dimensions, so that we don't
 * have to positition any features ourselves
 * @param collection - Collection of picture layers
 */
function generate(collection: GenCollectionI): GeneratedCollectionI {
  let numPossibleCombinations = 1;
  collection.layers.forEach((layer) => {
    numPossibleCombinations *= layer.images.length;
  });

  if (numPossibleCombinations < collection.quantity) {
    throw new Error(
      "There are less possible combinations than quantity requested"
    );
  }

  const generatedImages: GeneratedImageI[] = [];
  const generatedHashes = new Set();

  for (let i = 0; i < collection.quantity; i++) {
    const generatedImage = generateOneCombination(collection);

    if (generatedHashes.has(generatedImage.hash)) {
      // Duplicate made - repeat loop
      i--;
      continue;
    }

    generatedImages.push(generatedImage);
    generatedHashes.add(generatedImage.hash);
  }
  return {
    name: collection.name,
    symbol: collection.symbol,
    description: collection.description,
    quantity: collection.quantity,
    images: generatedImages,
  };
}

async function compileOneImage(
  generatedImage: GeneratedImageI
): Promise<CompiledImageI> {
  let resultImage = null;

  const composites = [];
  for (let i = 0; i < generatedImage.images.length; i++) {
    const image = generatedImage.images[i];
    if (!image?.image) {
      throw new Error("Cannot compile image when none is given");
    }
    if (resultImage) {
      composites.push({ input: image.image });
    } else {
      resultImage = sharp(image.image);
    }
  }

  assert(resultImage !== null);
  if (resultImage) {
    resultImage.composite(composites);
    const buffer = await resultImage.toBuffer({ resolveWithObject: true });
    return {
      hash: generatedImage.hash,
      image: buffer.data,
      rarity: generatedImage.rarity,
    };
  }

  throw new Error("Result image is null");
}

export {
  generate,
  GenCollectionI,
  compileOneImage,
  GeneratedImageI,
  ImageI,
  GeneratedCollectionI,
};
