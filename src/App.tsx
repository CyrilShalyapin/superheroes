import React, { ReactElement } from 'react';
import { Card } from './components';
import { heroConfigs } from './configs';
import { HeroConfig } from './models';
import './App.less';

export default function App(): ReactElement {
    return (
        <div className="wrapper">
            {
                heroConfigs.map((heroConfig: HeroConfig) => <Card key={ heroConfig.id } heroConfig={ heroConfig } />)
            }
        </div>
    )
}