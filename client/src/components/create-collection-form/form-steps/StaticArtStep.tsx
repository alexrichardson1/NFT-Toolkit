import PageHeader from "components/common/PageHeader";
import { wrongStepStatic } from "utils/pages";
import ImageUploadWithTabs from "../ImageUploadWithTabs";

const STATIC_ART_STEP_NUMBER = 1;

interface PropsT {
  stepNumber: number;
  generative: boolean;
  state: FormStateI;
  isLoading: boolean;
  handleImgDelete: (deleteId: string) => void;
  handleImgDescChange: (e: InputEventT, id: string) => void;
  handleImgNameChange: (e: InputEventT, id: string) => void;
  handleImgDrop: (
    e: React.DragEvent<HTMLLabelElement> | React.ChangeEvent<HTMLInputElement>,
    imgObjs: FileList | null
  ) => void;
}

/**
 * Step of the form which the user can only reach if they chose to upload static
 * images rather than using generative art
 *
 * @param stepNumber - current step the form is on (must equal
 * STATIC_ART_STEP_NUMBER for this step to render)
 * @param generative - false if the user wants to upload static art, True
 * otherwise (must be true for this step to render)
 * @param state - state of the form
 * @param handleImgDelete - handle deletion of Static Images
 * @param handleImgDrop - handle drop of images into image upload area
 * @param handleImgNameChange - handle name change for uploaded static images
 * @param handleImgDescChange - handle description change for uploaded images
 * @param isLoading - true if the form is in a loading state, False otherwise
 */
const StaticArtStep = ({
  stepNumber,
  generative,
  state,
  handleImgDelete,
  handleImgDrop,
  handleImgNameChange,
  handleImgDescChange,
  isLoading,
}: PropsT): JSX.Element => {
  if (wrongStepStatic(generative, stepNumber, STATIC_ART_STEP_NUMBER)) {
    return <></>;
  }

  const props = {
    NUMBER_OF_IMAGES: state.static.numberOfImages,
    imgObjs: state.static.images,
    isLoading,
    handleImgDelete,
    handleImgDrop,
    handleImgNameChange,
    handleImgDescChange,
  };

  return (
    <>
      <PageHeader text="Upload your Static Images" />
      <ImageUploadWithTabs {...props} />
    </>
  );
};

export default StaticArtStep;
