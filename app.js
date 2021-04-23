import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import PageIndex from './src/containers/PageIndex/PageIndex'

const App = () => (
    <div id="app">
        <PageIndex />
    </div>
)


ReactDOM.render(<App />, document.getElementById('root'))
