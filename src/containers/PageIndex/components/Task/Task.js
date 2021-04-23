import React, { Component } from 'react';
import ContainerBox from './../ContainerBox/ContainerBox'
import ContainerTag from './../ContainerTag/ContainerTag'


const Task = () => (
    <div className="container">
        <ContainerBox />
        {/* <!-- 第一個標籤 --> */}
        <ContainerTag />
        {/* <!-- 第二個標籤  --> */}
    </div>
)



export default Task