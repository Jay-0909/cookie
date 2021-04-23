import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    // lifeCycle 生命週期
    componentDidMount() {
        console.log('元件要被掛上拉')
    
    }
    componentWillUnmount() {
        console.log('元件要被拔拉')
    }
    render() { 
        return ( 
            <div id="testDIV">888ttt</div>
         );
    }
}
 
export default Test;




