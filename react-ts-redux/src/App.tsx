import * as React from 'react';
import Hello from './containers/Hello';
import Item from './components/Item';
export default class App extends React.Component<object, object> {
    render() {
        return (
            <div>
                <Hello />
                <Item name="张三"/>
            </div>
        );
    }
}
