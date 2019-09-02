import React from 'react';
import './MonsterPage.css';
import { MonsterMenu } from './MonsterMenu';
import { MonsterStatBlockRegion } from './MonsterStatBlockRegion';


export class MonsterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeMonsters: ["Owlbear", "Cultist"] }
        this.removeActive = this.removeActive.bind(this);
        this.addActive = this.addActive.bind(this);
    }

    addActive(monsterName) {
        if (this.state.activeMonsters.indexOf(monsterName) === -1) {
            this.state.activeMonsters.append(monsterName);
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
                <MonsterMenu addMonsterFunction={this.addActive} />
                <MonsterStatBlockRegion activeMonsters={this.state.activeMonsters}
                    removeMonsterFunction={this.removeActive} />
            </div>
        );
    }
}
