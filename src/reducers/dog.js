import { 
  FETCH_DOG_REQUEST,
  FETCH_DOG_SUCCESS,
  FETCH_DOG_ERROR,
  ADOPT_DOG_REQUEST, 
  ADOPT_DOG_SUCCESS,
  ADOPT_DOG_ERROR 
} from '../actions/dog';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DOG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_DOG_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.dog,
        error: null
      }
    case FETCH_DOG_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case ADOPT_DOG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ADOPT_DOG_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      }
    case ADOPT_DOG_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}