/*Store creation*/
import { createStore, combineReducers} from "redux";
import postsReducer from '../reducers/reduxPractice';

export default () => {
	const store = createStore(
		combineReducers({
			posts:postsReducer
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	return store;
};