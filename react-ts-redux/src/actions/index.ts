/*
 * @Author: 水痕 
 * @Date: 2017-11-04 22:52:47 
 * @Last Modified by:   水痕 
 * @Last Modified time: 2017-11-04 22:52:47
 * @version:1.0
 * @describe:定义actions 
 */
export const TOCHINE: string = 'TOCHINE';
export const TOENGLISH: string = 'TOENGLISH';

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