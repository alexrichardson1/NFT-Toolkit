import Paper from "@mui/material/Paper";
import ImageUpload from "components/create-collection-form/custom-image-upload/ImageUpload";
import Tabs from "components/create-collection-form/tabs/Tabs";

interface PropsT {
  imgObjs: ImageT;
  NUMBER_OF_IMAGES: number;
  isLoading: boolean;
  handleImgDelete: (deleteId: string) => void;
  handleImgNameChange: (e: InputEventT, id: string) => void;
  handleImgDrop: (
    e: React.DragEvent<HTMLLabelElement> | React.ChangeEvent<HTMLInputElement>,
    imgObjs: FileList | null
  ) => void;
}

const ImageUploadWithTabs = ({
  NUMBER_OF_IMAGES,
  imgObjs,
  handleImgDelete,
  handleImgDrop,
  handleImgNameChange,
  isLoading,
}: PropsT): JSX.Element => {
  return (
    <>
      <Paper>
        <ImageUpload
          handleImageDrop={handleImgDrop}
          NUMBER_OF_IMAGES={NUMBER_OF_IMAGES}
        />
      </Paper>

      {NUMBER_OF_IMAGES > 0 && (
        <Paper>
          <Tabs
            NUMBER_OF_IMAGES={NUMBER_OF_IMAGES}
            isLoading={isLoading}
            handleImageDelete={handleImgDelete}
            handleNameChange={handleImgNameChange}
            imgObjs={imgObjs}
          />
        </Paper>
      )}
    </>
  );
};

export default ImageUploadWithTabs;