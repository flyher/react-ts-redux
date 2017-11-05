/*
 * @Author: 水痕 
 * @Date: 2017-11-04 22:58:05 
 * @Last Modified by: 水痕
 * @Last Modified time: 2017-11-04 23:14:15
 * @version:1.0
 * @describe:定义中英文的reducer
 */
import { TOCHINE, TOENGLISH } from './../actions/index';
const initState = 'hello word';
// tslint:disable-next-line:no-any
const ch2en = (state = initState, action: any) => {
    switch (action.type) {
        case TOCHINE:
            return '你好世界!';
        case TOENGLISH:
            return 'hello word';
        default:
            return state;
    }
};

export default ch2en;