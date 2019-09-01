import React from 'react';
import './MonsterMenu.css';
import { MonsterSearchBar } from './MonsterSearchBar';


export class MonsterMenu extends React.Component {
    render() {
        return (
            <div className="MonsterMenu">
                Monster Menu
                <MonsterSearchBar />
			</div>
        );
    }
}
