export const initSate = {
  user: null,
  playList: [],
  playing: false,
  item: null,
};

export const actionType = {
  SET_USER: 'SET_USER',
};

export default function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
