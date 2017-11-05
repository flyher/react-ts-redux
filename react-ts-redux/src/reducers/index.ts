/*
 * @Author: 水痕 
 * @Date: 2017-11-04 22:58:38 
 * @Last Modified by: 水痕
 * @Last Modified time: 2017-11-04 23:01:49
 * @version:1.0
 * @describe:定义中英文翻译的reducer
 */

import { combineReducers } from 'redux';
import ch2en from './ch2en';

// 利用combineReducers合并项目中多个reducer
const ch2enReducer = combineReducers({
    ch2en
});
export default ch2enReducer;
