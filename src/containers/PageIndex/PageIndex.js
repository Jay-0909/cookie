import React, { Component } from 'react';
import Test from '../../../Test'
import Header from './components/Header/Header'
import Task from './components/Task/Task'
import ContainerTag from './components/ContainerTag/ContainerTag'

class PageIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testVisible: true,
            tabIndex: 'Task',

        }
    }
    onChangeTab = (tabName) => {
        console.log('set tab')
        this.setState({
            tabIndex: tabName
        })
    }

    render() {
        return (
            <div>
                <Header myAge={this.onChangeTab} myName="jimmy" />
                {/* <p>{this.state.tabIndex}</p> */}
                {this.state.tabIndex === 'Task' && <Task />}
                {this.state.tabIndex === 'Progress' &&
                    <div>
                        <ContainerTag />
                        <ContainerTag />
                        <ContainerTag />
                    </div>
                }

                {this.state.tabIndex === 'Completed' &&
                    <div>
                        {this.state.testVisible && <Test />}
                        <div onClick={() => {
                            this.setState({
                                testVisible: !this.state.testVisible
                            })
                        }}>把Test狀態給切換</div>

                    </div>
                }

            </div>
        );
    }
}

export default PageIndex;