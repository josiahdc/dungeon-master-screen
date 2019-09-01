import React from 'react';
import './MonsterStatBlockRegion.css';
import { MonsterStatBlock } from './MonsterStatBlock';


export class MonsterStatBlockRegion extends React.Component {
    render() {
        return (
            <div className="MonsterStatBlockRegion">
                Monster Stat Block Region
                <MonsterStatBlock />
			</div>
        );
    }
}
