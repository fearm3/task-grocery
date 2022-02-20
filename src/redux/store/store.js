import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

//! async fonksiyon kullandığımızda yan etkileri önlemek adına veri kaybını engellemk maksadıyla REDUX THUNK kullanıyoruz.
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
