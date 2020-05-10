import React, { Component } from 'react';

import { MainContainer } from './../main-container.component';
import './salons.component.scss';

class salonsComponent extends Component {
    render() {
        return <div className="salonsComponent"><h1>Conglomorate</h1></div>;
    }
}

const SalonsComponent = MainContainer(salonsComponent);

export { SalonsComponent };