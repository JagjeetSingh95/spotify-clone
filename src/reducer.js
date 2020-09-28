export const initialState = {
//   token: 'BQAI1ZMSjRLev8B0Xko9ziTyUXWQYNdUgIr55ln6NJY9nBML0uzBQeBYJw6w5SnLD5X8-gJeVYfWZ9EM2oNoGYR1wpUgYF1ME-wxFm5ytC113XoBzTGFFysWkp5jvFczdRYMpQhvpDjjTUsUEVBjlIX8Nvi0dNaQpPS6PDWruKAUkxzn',
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  spotify: null,
  discover_weekly: null,
  top_artists: null,
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    case 'SET_PLAYLISTS': 
      return {
        ...state,
        playlists: action.payload 
      }
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    default: 
      return state;
  }
}

export default reducer;