import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listActive: 111,
        }
    }
    onChangeMyTab = (e, tabName)=>{
        e.preventDefault();
        console.log(tabName)
        console.log(this.props.myAge)
        this.props.myAge(tabName)

    }
   
    render() {


        return (
            <div className="header">
                <div>{this.state.tabIndex}</div>
                <div className="header_box">
                    <ul>
                        <li onClick={(e) => {
                            this.onChangeMyTab(e, 'Task')
                        }}><a href="">My Tasks</a> </li>
                        <li onClick={(e) => {
                            this.onChangeMyTab(e, 'Progress')
                        }}><a href="">In Progress</a> </li>
                        <li onClick={(e) => {
                            this.onChangeMyTab(e, 'Completed')
                        }}><a href="">Completed</a> </li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Header;