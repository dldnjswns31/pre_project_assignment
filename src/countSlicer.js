const INCREMENT = 'count/INCREASE';
const DECREMENT = 'count/DECREASE';

const count = 0;

export const increase = () => {
  return { type: INCREMENT };
};
export const decrease = () => {
  return { type: DECREMENT };
};

export default function countReducer(state = count, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
