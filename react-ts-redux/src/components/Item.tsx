import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface Props {
    name: string,
}

export default class Item extends React.Component<Props, object> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        let { name } = this.props;
        return (
            <div>
                <span ref="mycontainer">{name}</span>
            </div>
        );
    }

    componentDidMount() {
        let container = ReactDOM.findDOMNode(this.refs['mycontainer']) as HTMLInputElement;
        console.log(container.innerHTML);
    }
}