import React from 'react';
import './MonsterPage.css';
import { MonsterMenu } from './MonsterMenu';
import { MonsterStatBlockRegion } from './MonsterStatBlockRegion';


export class MonsterPage extends React.Component {
    render() {
        return (
            <div className="MonsterPage">
                <MonsterMenu />
                <MonsterStatBlockRegion />
			</div>
        );
    }
}
