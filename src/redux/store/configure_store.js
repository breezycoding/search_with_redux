/*Store creation*/
import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import reduxThunk from "redux-thunk";
import Async from ".././../middlewares/async";
import postsReducer from '../reducers/SearchWithRedux';
import SearchStringReducer from '../reducers/SearchString';
import postsDataReducer from "../reducers/getPostsDataApi";
import usersReducer from "../reducers/getAllUsers";
import selectedUserReducer from "../reducers/selectedUser";
import getAllTodosReducer from "../reducers/getAllTodos";

export default () => {
	const middleware = applyMiddleware(Async, reduxThunk);
	const store = createStore(
		combineReducers({
			posts: postsReducer,
			searchStringObj: SearchStringReducer,
			users: usersReducer,
			postsData: postsDataReducer,
			currentUser: selectedUserReducer,
			getAllTodos: getAllTodosReducer
		}),
		compose(middleware)
	);
	return store;
};