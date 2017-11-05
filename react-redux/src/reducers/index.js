/*
 * @Author: 水痕 
 * @Date: 2017-11-04 22:27:48 
 * @Last Modified by: 水痕
 * @Last Modified time: 2017-11-04 22:46:11
 * @version:1.0
 * @describe:关于中英翻译的reducers
 */
import { combineReducers } from 'redux';
import ch2en from './ch2en';

const ch2enReducer = combineReducers({
    ch2en
})

export default ch2enReducer;