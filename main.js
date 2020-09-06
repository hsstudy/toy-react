/*
 * @Date: 2020-09-06 08:53:08
 * @Author: Hansion
 * @version: 1.0
 */
import { createElement, Component, render } from './toy-react';

class MyComponent extends Component {
    render() {
        return (
            <div>
                <h1>123123</h1>
                {this.children}
            </div>
        );
    }
}


render(<MyComponent id="a" class="c" >
    <div>abc</div>
    <div></div>
    <div></div>
</MyComponent>, document.body)