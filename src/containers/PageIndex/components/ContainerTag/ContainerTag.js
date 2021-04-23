import React, { Component } from 'react';

class ContainerTag extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="card">
                <div className="card_top">
                    <div className="card_checkbox">
                        <input type="checkbox" id="my_checkbox1" />
                    </div>
                    <div className="card_textContainer">
                        <label htmlFor="my_checkbox1">
                            Type Something Here
                    </label>
                    </div>
                    <div className="card_tool">
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="card_down">
                    <div>
                        <i className="fa fa-calendar" aria-hidden="true"> 5/14</i>
                        <i className="fa fa-commenting-o" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

        );
    }
}

export default ContainerTag;