/*
 * @Author: 水痕 
 * @Date: 2017-11-04 22:29:02 
 * @Last Modified by: 水痕
 * @Last Modified time: 2017-11-04 22:47:48
 * @version:1.0
 * @describe:中英翻译的reducer
 */

import { TOCHINE, TOENGLISH } from './../actions/index';
const initState = 'hello word';
const ch2en = (state = initState, action) => {
    switch (action.type) {
        case TOCHINE:
            return '你好世界';
        case TOENGLISH:
            return 'hello word';
        default:
            return state;
    }
}

export default ch2en;