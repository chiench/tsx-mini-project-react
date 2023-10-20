import React from 'react'
import { Spin } from "antd";
const loadingPage = () => {
    return (
        <div className="loading-container">
            <Spin />
        </div>
    )
}

export default loadingPage