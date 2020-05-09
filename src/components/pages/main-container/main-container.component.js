import React, { Component } from "react";

import './main-container.component.scss';

const MainContainer = (WrappedComponent) => {
    return class extends Component {
        render(){
            return <di className="main-container">
                <div className="sidebar"><h2>Sidebar...</h2></div>
                <div className="content">
                    <WrappedComponent {...this.props} />
                </div>                
            </di>
        }
    };
}

export { MainContainer };