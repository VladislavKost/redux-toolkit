import { useAppDispatch, useAppSelector } from "../../hooks";
import uploadImg from "../../assets/uploadImg.png";
import "./PhotoInput.css";
import { photos } from "../../redux/slices/photosSlice";

export const PhotoInput = () => {
  // const curValue = useAppSelector((state) => state.factsCount.value);
  const dispatch = useAppDispatch();

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileData = e.target?.result;
        if (typeof fileData === "string") {
          dispatch(photos(fileData));
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="parent">
      <div className="file-upload">
        <img src={uploadImg} alt="upload" />
        <h3>Click box to upload</h3>
        <input type="file" onChange={onHandleChange} />
      </div>
    </div>
  );
};
