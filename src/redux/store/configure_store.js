/*Store creation*/
import { createStore, combineReducers} from "redux";
import postsReducer from '../reducers/SearchWithRedux';
import SearchStringReducer from '../reducers/SearchString';
import postsDataReducer from "../reducers/getPostsDataApi";

export default () => {
	const store = createStore(
		combineReducers({
			posts: postsReducer,
			searchStringObj: SearchStringReducer,
			postsData: postsDataReducer
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	return store;
};