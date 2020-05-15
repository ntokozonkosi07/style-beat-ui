import React, { Component } from "react";
import { Subject } from 'rxjs';

import { SidebarComponent } from './../../sidebar';
import './main-container.component.scss';

const MainContainer = (WrappedComponent) => {
    return class extends Component {

        constructor(){
            super();
            this.state = {
                isSidebarCollapsed: false
            }
        }

        sidebarToggle(event){
            this.setState({
                ...this.state,
                isSidebarCollapsed: event
            });
        }

        render(){
            const { isSidebarCollapsed } = this.state; 
            return <div className={`main-container${isSidebarCollapsed ? '-toggled': ''}`}>
                <div className="sidebar">
                    <SidebarComponent sidebarToggle={(e)=> this.sidebarToggle(e)} { ...this.state } {...this.props} />
                </div>
                <div className="content">
                    <WrappedComponent {...this.props} />
                </div>                
            </div>
        }
    };
}

export { MainContainer };