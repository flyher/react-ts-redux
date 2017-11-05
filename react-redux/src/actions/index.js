/*
 * @Author: 水痕 
 * @Date: 2017-11-04 22:22:10 
 * @Last Modified by: 水痕
 * @Last Modified time: 2017-11-04 22:52:30
 * @version:1.0
 * @describe:创建中英文翻译的action
 */

export const TOCHINE = 'TOCHINE';
export const TOENGLISH = 'TOENGLISH';

export function toCH() {
    return {
        type: TOCHINE,
    };
}

export function toEN() {
    return {
        type: TOENGLISH,
    };
}
