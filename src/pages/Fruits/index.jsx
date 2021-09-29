import { useSelector } from "react-redux";
import { FruitContainer } from "../../components/Styled";

const FruitsPage = () => {
  const fruits = useSelector((state) => state.fruits);

  return (
    <div>
      {fruits.map((fruit) => (
        <FruitContainer key={fruit.name}>
          <p>{fruit.name}</p>
          <img src={fruit.image} alt={fruit.name} />
        </FruitContainer>
      ))}
    </div>
  );
};

export default FruitsPage;
