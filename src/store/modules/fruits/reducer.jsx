import Banana from "../../../assets/img/banana.png";
import Morango from "../../../assets/img/strawberry.png";
import Maca from "../../../assets/img/apple.png";

const initialState = [
  { name: "Banana", image: Banana },
  { name: "Maçã", image: Maca },
  { name: "Morango", image: Morango },
];

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default fruitsReducer;
