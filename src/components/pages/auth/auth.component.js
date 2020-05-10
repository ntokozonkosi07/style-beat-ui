import React, { Component } from "react";

import './auth.component.css';

const AuthComponent = (WrappedComponent) => {
    return class extends Component {
        render() {
            return <div className="container">

                <section className="clip__art"></section>
                <section className="login__panel">
                    <WrappedComponent {...this.props} />
                </section>
            </div>;
        }
    }
}

export { AuthComponent };