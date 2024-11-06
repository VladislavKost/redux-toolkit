import { useAppSelector } from "../../hooks";
import "./Photos.css";

export const Photos = () => {
  const photos = useAppSelector((state) => state.photos);
  return (
    <div className="user-photos">
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt="photo" />
      ))}
    </div>
  );
};
