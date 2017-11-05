import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Hello extends Component{
    render(){
        // 接受父组件传递进来的
        const {toCH,toEN,msg} = this.props;
        return(
            <div>
                <button onClick={toCH}>翻译成中文</button>
                <p>{msg}</p>
                <button onClick={toEN}>翻译成英文</button>
            </div>
        )
    }
}

// 约束数据类型
Hello.propTypes = {
    toCH:PropTypes.func.isRequired,
    toEN:PropTypes.func.isRequired,
    msg:PropTypes.string.isRequired
}