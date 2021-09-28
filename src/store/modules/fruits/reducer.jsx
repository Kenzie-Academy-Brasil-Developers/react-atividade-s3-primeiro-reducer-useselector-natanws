const initialState = [
  { name: "Banana", image: "../../assets/img/banana.png" },
  { name: "Maçã", image: "src/assets/img/apple.png" },
  { name: "Morango", image: "src/assets/img/strawberry.png" },
];

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default fruitsReducer;
