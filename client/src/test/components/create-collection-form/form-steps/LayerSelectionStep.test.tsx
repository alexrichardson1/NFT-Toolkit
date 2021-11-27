import LayerSelectionStep from "components/create-collection-form/form-steps/LayerSelectionStep";
import ThemeProvider from "context/theme/ThemeProvider";
import { mount } from "enzyme";

const INITIAL_STATE: FormStateI = {
  collectionName: "",
  description: "",
  symbol: "",
  mintingPrice: "",
  static: { images: {}, numberOfImages: 0 },
  generative: { tiers: [], numberOfTiers: 0, layers: [], numberOfLayers: 0 },
};

describe("LayerSelectionStep snapshots", () => {
  test("Step Number and generative matche", () => {
    const tree = mount(
      <ThemeProvider>
        <LayerSelectionStep
          generative={true}
          state={{
            ...INITIAL_STATE,
            generative: {
              numberOfTiers: 0,
              tiers: [],
              numberOfLayers: 1,
              layers: [
                {
                  name: "test-name",
                  numberOfImages: 0,
                  images: {},
                },
              ],
            },
          }}
          stepNumber={3}
          handleLayerAddition={jest.fn()}
          handleLayerRemoval={jest.fn()}
          handleLayerReorder={jest.fn()}
        />
      </ThemeProvider>
    );
    expect(tree).toMatchSnapshot();
  });

  test("Step Number does not match", () => {
    const tree = mount(
      <ThemeProvider>
        <LayerSelectionStep
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
          generative={false}
          state={{ ...INITIAL_STATE }}
          stepNumber={3}
          handleLayerAddition={jest.fn()}
          handleLayerRemoval={jest.fn()}
          handleLayerReorder={jest.fn()}
        />
      </ThemeProvider>
    );
    expect(tree).toMatchSnapshot();
  });
});