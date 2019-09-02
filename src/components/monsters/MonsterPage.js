import React from 'react';
import './MonsterPage.css';
import { MonsterMenu } from './MonsterMenu';
import { MonsterStatBlockRegion } from './MonsterStatBlockRegion';
const monsterNames = require('./../../monsterstats/monsterNames.json')
const monsterList = require('./../../monsterstats/monsters.json')


export class MonsterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeMonsters: ["Owlbear", "Cultist"] }
        this.removeActive = this.removeActive.bind(this);
        this.addActive = this.addActive.bind(this);
    }

    addActive(monsterName) {
        if (this.state.activeMonsters.indexOf(monsterName) === -1) {
            let newActiveMonsters = this.state.activeMonsters.concat([monsterName]);
            this.setState({activeMonsters: newActiveMonsters});
        }
    }

    removeActive(monsterName) {
        let newActiveMonsters = this.state.activeMonsters.filter((monsterInState) => {
            return monsterInState !== monsterName;
        });
        this.setState({ activeMonsters: newActiveMonsters });
    }

    render() {
        return (
            <div className="MonsterPage">
                <MonsterMenu addMonsterFunction={this.addActive}
                    monsterNames={monsterNames} />
                <MonsterStatBlockRegion activeMonsters={this.state.activeMonsters}
                    removeMonsterFunction={this.removeActive}
                    monsterList={monsterList} />
            </div>
        );
    }
}
