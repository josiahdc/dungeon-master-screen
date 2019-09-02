import React from 'react';
import './MonsterStatBlockRegion.css';
import { MonsterStatBlockWrapper } from './MonsterStatBlockWrapper';


export class MonsterStatBlockRegion extends React.Component {
    render() {
        return (
            <div className="MonsterStatBlockRegion">
                {this.props.activeMonsters.map((monsterName) =>
                    <MonsterStatBlockWrapper monster={monsterName} key={monsterName}
                        removeMonsterFunction={this.props.removeMonsterFunction}
                        monsterList={this.props.monsterList} />
                )}
            </div>
        );
    }
}
