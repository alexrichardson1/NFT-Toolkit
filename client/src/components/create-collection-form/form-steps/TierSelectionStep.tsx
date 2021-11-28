import { DragEndEvent } from "@dnd-kit/core";
import OrderableList from "components/common/OrderableList";
import OrderableListInput from "components/common/OrderableListInput";
import OrderableListItem from "components/common/OrderableListItem";
import PageHeader from "components/common/PageHeader";
import { useState } from "react";
import { wrongStepGenerative } from "utils/pages";

const TIER_SELECTION_STEP_NUMBER = 2;
const MINIMUM_TIERS_REQUIRED = 1;

interface PropsT {
  state: FormStateI;
  stepNumber: number;
  generative: boolean;
  handleTierAdd: (newTierName: string) => void;
  handleTierReorder: (event: DragEndEvent) => void;
  handleTierRemoval: (tierName: string) => void;
  handleTierProbChange: (tierName: string) => (e: InputEventT) => void;
}

const TierSelectionStep = ({
  state,
  generative,
  stepNumber,
  handleTierReorder,
  handleTierRemoval,
  handleTierAdd,
  handleTierProbChange,
}: PropsT) => {
  const [text, setText] = useState("");

  if (wrongStepGenerative(generative, stepNumber, TIER_SELECTION_STEP_NUMBER)) {
    return <></>;
  }

  const handleListAdd = () => {
    if (text !== "") {
      handleTierAdd(text);
      setText("");
    }
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleListAdd();
    }
  };

  return (
    <>
      <PageHeader text="Add Rarity Tiers For Your Collection" />
      <OrderableList
        handleItemReorder={handleTierReorder}
        items={state.generative.tiers}>
        {state.generative.tiers.map((tier) => (
          <OrderableListItem
            itemName={tier.name}
            id={tier.name}
            handleItemRemoval={handleTierRemoval}
            numericInput={{
              tooltipText:
                "Add a likelihood value ranging from 0 (Impossible) to 100 (Guaranteed) for the chance an NFT from this rarity tier is randomly minted",
              numberInputLabel: "Chance",
              numberInputValue: tier.probability,
              handleNumberInputChange: handleTierProbChange(tier.name),
            }}
          />
        ))}
      </OrderableList>

      <OrderableListInput
        onKeyPress={handleInputKeyPress}
        text={text}
        placeholder={"Add a tier for your NFT e.g Legendary"}
        label={"Type Tier Name Here"}
        required={state.generative.numberOfTiers < MINIMUM_TIERS_REQUIRED}
        onChange={(e) => setText(e.target.value)}
        onClick={handleListAdd}
      />
    </>
  );
};

export default TierSelectionStep;