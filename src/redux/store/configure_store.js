/*Store creation*/
import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import Async from ".././../middlewares/async";
import postsReducer from '../reducers/SearchWithRedux';
import SearchStringReducer from '../reducers/SearchString';
import postsDataReducer from "../reducers/getPostsDataApi";
import usersReducer from "../reducers/getAllUsers";

export default () => {
	const middleware = applyMiddleware(Async);
	const store = createStore(
		combineReducers({
			posts: postsReducer,
			searchStringObj: SearchStringReducer,
			users: usersReducer,
			postsData: postsDataReducer
			
		}),
		compose(middleware)
	);
	return store;
};