import React, { Component } from "react";
import FeatherIcon from 'feather-icons-react';

import './sidebar.component.scss';

export class SidebarComponent extends Component {

    constructor(){
        super();

        this.state = {
            menus:[]
        };
    }

    componentDidMount(){
        this.setState({
            ...this.state,
            menus: [...this.state.menus,{
                icon: 'map-pin',
                label: 'Salons',
                active: true
            },{
                icon: 'clock',
                label: 'Appointments',
                active: false
            },{
                icon: 'bell',
                label: 'Notification',
                active: false
            },{
                icon: 'scissors',
                label: 'Stylists',
                active: false
            },{
                icon: 'user',
                label: 'Profile',
                active: false
            }]
        })
    }

    menuClick(menu){
        debugger;
        this.setState({
            ...this.state,
            menus: this.state.menus.map(m => ({ ...m, active: m.label === menu.label }))
        })
    }

    render(){

        return <div className={`sidebarComponent${this.props.isSidebarCollapsed? '-toggled': ''}`}>
            <div className="header" >
                <span className="icon" onClick={()=> this.props.sidebarToggle(!this.props.isSidebarCollapsed)}></span>
                <span className="logo-icon"></span>
            </div>
            <div className="menus">
                {
                    this.state.menus.map(menu => {
                        return <div className={`menu ${menu.active? 'active': ''}`} onClick={this.menuClick.bind(this, menu)}>
                            <FeatherIcon class="menu-icon" icon={menu.icon} />
                            <span className="menu-text">{ menu.label }</span>
                        </div>
                    })
                }
            </div>
        </div>
    }
}