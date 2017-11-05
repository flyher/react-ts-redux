import * as React from 'react';

export interface Props {
    // tslint:disable-next-line:no-any
    toCH: any;
    // tslint:disable-next-line:no-any
    toEN: any;
    msg: string;
}

export default class Hello extends React.Component<Props, object> {
    render() {
        // 接受父组件传递进来的
        const { toCH, toEN, msg } = this.props;
        return (
            <div>
                <button onClick={toCH}>翻译成中文</button>
                <p>{msg}</p>
                <button onClick={toEN}>翻译成英文</button>
            </div>
        );
    }
}