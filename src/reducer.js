export const initSate = {
  user: null,
  playList: null,
  playing: false,
  item: null,
  token: null,
};

export const actionType = {
  SET_USER: 'SET_USER',
  SET_TOKEN: 'SET_TOKEN',
  SET_PLAYLIST: 'SET_PLAYLIST',
  SET_DISCOVER_WEEKLY: 'SET_DISCOVER_WEEKLY',
};

export default function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case actionType.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case actionType.SET_PLAYLIST:
      return {
        ...state,
        playList: action.payload,
      };
    case actionType.SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discover_weekly: action.payload,
      };
    default:
      return state;
  }
}
