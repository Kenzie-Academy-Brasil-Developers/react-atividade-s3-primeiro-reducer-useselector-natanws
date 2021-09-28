import { useSelector } from "react-redux";

const FruitsPage = () => {
  const fruits = useSelector((state) => state.fruits);

  return (
    <div>
      {fruits.map((fruit) => (
        <div key={fruit.name}>
          <p>{fruit.name}</p>
          <img src={fruit.image} alt={fruit.name} />
        </div>
      ))}
    </div>
  );
};

export default FruitsPage;
