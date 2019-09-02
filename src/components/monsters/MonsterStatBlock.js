import React from 'react';
import './MonsterStatBlock.css';
const monstersList = require('./../../monsterstats/monsters.json')


export class MonsterStatBlock extends React.Component {
    constructor(props) {
        super(props);
        if (props.monster in monstersList) {
            this.state = { monsterStats: monstersList[props.monster] };
        } else {
            this.state = { monsterStats: null };
        }
    }


    render() {
        if (this.state.monsterStats !== null) {
            return (
                <div className="MonsterStatBlock">
                    <div className="gold-border"></div>
                    <div className="name">
                        {this.props.monster}
                    </div>
                    <div className="category">
                        {this.state.monsterStats.size + " "}
                        {this.state.monsterStats.type + ", "}
                        {this.state.monsterStats.allignment}
                    </div>
                    <div className="divider"></div>
                    <div className="basic-stats">
                        Armor Class {this.state.monsterStats.armorClass}<br></br>
                        Hit Points {this.state.monsterStats.hitpoints}<br></br>
                        Speed {this.state.monsterStats.speed}
                    </div>
                    <div className="divider"></div>
                    <div className="ability-scores">
                        STR {this.state.monsterStats.str}<br></br>
                        DEX {this.state.monsterStats.dex}<br></br>
                        CON {this.state.monsterStats.con}<br></br>
                        INT {this.state.monsterStats.int}<br></br>
                        WIS {this.state.monsterStats.wis}<br></br>
                        CHA {this.state.monsterStats.cha}
                    </div>
                    <div className="divider"></div>
                    <div className="advanced-stats">
                        Saving Throws {this.state.monsterStats.savingThrows}<br></br>
                        Skills {this.state.monsterStats.skills}<br></br>
                        Damage Vulnerabilities {this.state.monsterStats.vulnerabilities}<br></br>
                        Damage Resistences {this.state.monsterStats.resistances}<br></br>
                        Damage Immunities {this.state.monsterStats.damageImmunities}<br></br>
                        Condition Immunities {this.state.monsterStats.conditionImmunities}<br></br>
                        Senses {this.state.monsterStats.senses + " Passive Perception: " + this.state.monsterStats.passivePerception}<br></br>
                        Languages {this.state.monsterStats.languages}<br></br>
                        Challenge {this.state.monsterStats.challenge}
                    </div>
                    <div className="divider"></div>
                    <div className="abilities">
                        {JSON.stringify(this.state.monsterStats.abilities, null, 4)}
                    </div>
                    <div className="divider"></div>
                    <div className="actions">
                        {JSON.stringify(this.state.monsterStats.actions, null, 4)}
                    </div>
                    <div className="divider"></div>
                    <div className="reactions">
                        {JSON.stringify(this.state.monsterStats.reactions, null, 4)}
                    </div>
                    <div className="divider"></div>
                    <div className="legendary-actions">
                        {JSON.stringify(this.state.monsterStats.legendaryActions, null, 4)}
                    </div>
                    <div className="gold-border"></div>
                </div>
            );
        } else {
            return (
                <div className="MonsterStatBlock">
                    <div className="gold-border"></div>
                    <div>
                        {this.props.monster} not found.
                </div>
                    <div className="gold-border"></div>
                </div>
            );
        }
    }
}
