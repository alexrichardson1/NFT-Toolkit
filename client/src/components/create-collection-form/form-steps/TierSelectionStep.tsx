import { DragEndEvent } from "@dnd-kit/core";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Collapse, Stack, Typography } from "@mui/material";
import OrderableList from "components/common/OrderableList";
import OrderableListInput from "components/common/OrderableListInput";
import OrderableListItem from "components/common/OrderableListItem";
import PageHeader from "components/common/PageHeader";
import RarityProgressBar from "components/common/RarityProgressBar";
import { useState } from "react";
import { wrongStepGenerative } from "utils/pages";

const TIER_SELECT_STEP_NUMBER = 1;
const MINIMUM_TIERS_REQUIRED = 1;
const CHANCE_INPUT_INFO =
  "Add a likelihood value ranging from 1 (Highly Unlikely) to 100 (Guaranteed) for the chance an NFT from this rarity tier is randomly minted";

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
}: PropsT): JSX.Element => {
  const [text, setText] = useState("");

  if (wrongStepGenerative(generative, stepNumber, TIER_SELECT_STEP_NUMBER)) {
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
      <Collapse in={state.generative.numberOfTiers > 0}>
        <RarityProgressBar totalRarity={state.generative.totalTierRarity} />
      </Collapse>
      <Collapse in={state.generative.numberOfTiers > 1}>
        <Stack
          justifyContent="center"
          spacing={1}
          direction="row"
          alignItems="center">
          <ArrowDownwardIcon />
          <Typography variant="h5">Rarest Tier</Typography>
          <ArrowDownwardIcon />
        </Stack>
      </Collapse>
      <OrderableList
        handleItemReorder={handleTierReorder}
        items={state.generative.tiers}>
        {state.generative.tiers.map((tier) => (
          <OrderableListItem
            key={tier.name}
            itemName={tier.name}
            id={tier.name}
            handleItemRemoval={handleTierRemoval}
            numericInput={{
              tooltipText: CHANCE_INPUT_INFO,
              numberInputLabel: "Chance (%)",
              numberInputValue: tier.probability,
              handleNumberInputChange: handleTierProbChange(tier.name),
            }}
          />
        ))}
      </OrderableList>
      <Collapse in={state.generative.numberOfTiers > 1}>
        <Stack
          justifyContent="center"
          spacing={1}
          direction="row"
          alignItems="center">
          <ArrowUpwardIcon />
          <Typography variant="h5">Most Common Tier</Typography>
          <ArrowUpwardIcon />
        </Stack>
      </Collapse>
      <OrderableListInput
        onKeyPress={handleInputKeyPress}
        text={text}
        placeholder="Add a tier for your NFT e.g Legendary"
        label="Type Tier Name Here"
        required={state.generative.numberOfTiers < MINIMUM_TIERS_REQUIRED}
        onChange={(e) => setText(e.target.value)}
        onClick={handleListAdd}
      />
    </>
  );
};

export default TierSelectionStep;
