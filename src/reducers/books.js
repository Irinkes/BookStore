import {
  LOAD_BOOKS,
  SET_QUERY,
  SET_QUERYTYPE,
  SET_STARTINDEX,
  CLEAR_BOOKS,
} from '../actions/actionTypes';

const initialState = {
  books: [],
  booksByAuthor: [],
  booksBySubject: [],
  query: '',
  queryType: 'intitle',
  startIndex: 0,
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOOKS:
      return { ...state, books: [...state.books, ...action.books] };

    case CLEAR_BOOKS:
      return { ...state, books: [] };

    case SET_QUERY:
      return { ...state, query: action.query };

    case SET_QUERYTYPE:
      return { ...state, queryType: action.queryType };

    case SET_STARTINDEX:
      return { ...state, startIndex: state.startIndex + 10 };

    default:
      return state;
  }
}
