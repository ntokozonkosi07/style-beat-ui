import React, { Component } from "react";
import { Subject } from 'rxjs';

import { SidebarComponent } from './../../sidebar';
import './main-container.component.scss';

const MainContainer = (WrappedComponent) => {
    return class extends Component {

        constructor(){
            super();
        }

        sidebarToggle(event){
            debugger;
        }

        render(){
            return <div className="main-container">
                <div className="sidebar">
                    <SidebarComponent sidebarToggle={(e)=> this.sidebarToggle(e)} {...this.props} />
                </div>
                <div className="content">
                    <WrappedComponent {...this.props} />
                </div>                
            </div>
        }
    };
}

export { MainContainer };