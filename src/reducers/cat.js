import { 
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_ERROR,
  ADOPT_CAT_REQUEST, 
  ADOPT_CAT_SUCCESS,
  ADOPT_CAT_ERROR 
} from '../actions/cat';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CAT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_CAT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.cat,
        error: null
      }
    case FETCH_CAT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case ADOPT_CAT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ADOPT_CAT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.cat,
        error: null
      }
    case ADOPT_CAT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state;
  }
}