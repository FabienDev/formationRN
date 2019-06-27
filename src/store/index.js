import { combineReducers, createStore } from 'redux'
import defaultReducer from '../reducers/defaultReducer';
import storage from 'redux-persist/lib/storage';
import velibReducerStore from '../reducers/velibReducer';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';


const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: autoMergeLevel2
}

const velibReducer = persistReducer(persistConfig, velibReducerStore);

export default() => {
	const rootReducer = combineReducers({
		defaultReducer,
		velibReducer
	});

	let store = createStore(rootReducer, composeWithDevTools());
	let persiststore = persistStore(store);

	return {store, persiststore};
}