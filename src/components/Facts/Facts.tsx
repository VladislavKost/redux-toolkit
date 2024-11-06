import { useAppSelector } from "../../hooks";

export const Facts = () => {
  const factsAmount = useAppSelector((state) => state.factsCount.value);
  const facts = useAppSelector((state) => state.facts);
  return (
    <ul>
      {factsAmount &&
        facts &&
        facts
          .slice(0, Number(factsAmount))
          .map((fact, index) => <li key={index}>{fact}</li>)}
    </ul>
  );
};
