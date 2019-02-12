/*Store creation*/
import { createStore, combineReducers} from "redux";
import postsReducer from '../reducers/SearchWithRedux';
import SearchStringReducer from '../reducers/SearchString';

export default () => {
	const store = createStore(
		combineReducers({
			posts:postsReducer,
			searchStringObj:SearchStringReducer
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	return store;
};