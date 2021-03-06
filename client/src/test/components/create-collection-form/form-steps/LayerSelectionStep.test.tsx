import LayerSelectionStep from "components/create-collection-form/form-steps/LayerSelectionStep";
import ThemeProvider from "context/theme/ThemeProvider";
import { mount } from "enzyme";

const INITIAL_STATE: FormStateI = {
  twitterHandle: "",
  redditHandle: "",
  collectionName: "",
  description: "",
  symbol: "",
  mintingPrice: "",
  static: { images: {}, numberOfImages: 0 },
  generative: {
    numberOfTiers: 0,
    totalTierRarity: 0,
    tiers: [],
    layers: [],
    numberOfLayers: 0,
    quantity: "1",
  },
  marketplace: { wanted: false, royalty: "", allMint: false },
  predictions: { collections: [], hype: -1, price: "0" },
};

describe("LayerSelectionStep snapshots", () => {
  test("Step Number does not match", () => {
    const tree = mount(
      <ThemeProvider>
        <LayerSelectionStep
          handleLayerProbChange={jest.fn()}
          generative={true}
          state={{ ...INITIAL_STATE }}
          stepNumber={0}
          handleLayerAddition={jest.fn()}
          handleLayerRemoval={jest.fn()}
          handleLayerReorder={jest.fn()}
        />
      </ThemeProvider>
    );
    expect(tree).toMatchSnapshot();
  });

  test("generative does not match", () => {
    const tree = mount(
      <ThemeProvider>
        <LayerSelectionStep
          handleLayerProbChange={jest.fn()}
          generative={false}
          state={{ ...INITIAL_STATE }}
          stepNumber={2}
          handleLayerAddition={jest.fn()}
          handleLayerRemoval={jest.fn()}
          handleLayerReorder={jest.fn()}
        />
      </ThemeProvider>
    );
    expect(tree).toMatchSnapshot();
  });
});
