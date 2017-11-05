/*
 * @Author: 水痕 
 * @Date: 2017-11-04 23:02:42 
 * @Last Modified by: 水痕
 * @Last Modified time: 2017-11-04 23:04:19
 * @version:1.0
 * @describe:创建Hello的容器组件
 */

import { connect } from 'react-redux';
import Hello from './../components/Hello';
import { toCH, toEN } from './../actions/index';
export default connect(
    state => ({ msg: state.ch2en }),
    dispatch => ({
        toCH: () => dispatch(toCH()),
        toEN: () => dispatch(toEN())
    })
)(Hello);
