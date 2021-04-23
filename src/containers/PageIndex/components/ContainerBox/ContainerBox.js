import React, { Component } from 'react';

class ContainerBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: ''
        }
    }
    render() {
        return (
            <div>
                <div className="box">
                    <input type="checkbox" />
                    <label>Type Something Here...</label>
                    <button><i className="fa fa-pencil" aria-hidden="true"></i></button>
                    <button><i className="fa fa-star-o" aria-hidden="true"></i></button>
                </div>
                <div className="box-body">

                    <form action="">
                        <div className="box-body-group">
                            <label htmlFor=""><i className="fa fa-calendar" aria-hidden="true"></i>
            Deadline</label>
                            <div className="box-body-group-input">
                                <input className="box-body-text" type="text" placeholder="yyyy/mm/dd" />
                                <input type="text" placeholder="hh:mm" />
                            </div>
                        </div>

                        <div className="box-body-group">
                            <label htmlFor=""><i className="fa fa-file-o" aria-hidden="true"></i>
            File</label>
                            <div className="box-body-group-input plus">
                                <i className="fa fa-plus-square" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="box-body-group">
                            <label htmlFor=""><i className="fa fa-commenting-o" aria-hidden="true"></i>
            Comment</label>
                            <div className="box-body-group-input">
                                <div>
                                    <textarea placeholder="Typs your memo here"
                                        value={this.state.textValue}
                                        onChange={(e) => {
                                            this.setState({
                                                textValue: e.target.value
                                            })
                                        }}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="box-body-end">
                    <button className="Cancel"><i className="fa fa-times" aria-hidden="true"></i>Cancel</button>
                    <button className="Add"><i className="fa fa-plus" aria-hidden="true"></i> Add Task</button>
                </div>
            </div>

        );
    }
}

export default ContainerBox;