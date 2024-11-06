import { useAppDispatch, useAppSelector } from "../../hooks";
import { factsCount } from "../../redux/slices/factsCountSlice";

export const Input = () => {
  const curValue = useAppSelector((state) => state.factsCount.value);
  const dispatch = useAppDispatch();

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? Number(e.target.value) : 0;
    if (value > 0 && value <= 6) {
      dispatch(factsCount(value));
    }
    if (value === 0) {
      dispatch(factsCount(""));
    }
  };
  return (
    <div>
      <input value={curValue} type="number" onChange={onHandleChange} />
    </div>
  );
};
