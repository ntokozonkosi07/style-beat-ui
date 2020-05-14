import React, { Component } from "react";

import './auth.component.css';

const AuthComponent = (WrappedComponent) => {
    return class extends Component {
        constructor(){
            super();
            this.state = {};
        }

        onAttrubuteChanged(prop, value){
            this.setState({ [prop]: value })
        }

        render() {
            return <div className="container">

                <section className="clip__art"></section>
                <section className="login__panel">
                    <WrappedComponent 
                        {...{...this.props, onAttrubuteChanged:this.onAttrubuteChanged.bind(this)}}
                        {...this.state}/>
                </section>
            </div>;
        }
    }
}

export { AuthComponent };