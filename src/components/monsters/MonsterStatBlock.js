import React from 'react';
import './MonsterStatBlock.css';
import Box from '@material-ui/core/Box';
import { MonsterActionSection } from './MonsterActionSection';
import { MonsterStat } from './MonsterStat';
import { MonsterDivider } from './MonsterDivider';
import { MonsterAbilityScore } from './MonsterAbilityScore';


export class MonsterStatBlock extends React.Component {
    constructor(props) {
        super(props);
        if (props.monster in this.props.monsterList) {
            this.state = { monsterStats: this.props.monsterList[props.monster] };
        } else {
            this.state = { monsterStats: null };
        }

        this.retrieve = this.retrieve.bind(this);
    }

    // returns the value for a given monster stat (such as size)
    retrieve(stat) {
        return this.state.monsterStats[stat];
    }


    render() {
        if (this.state.monsterStats !== null) {
            return (
                <Box className="MonsterStatBlock">
                    <Box className="name">
                        {this.props.monster}
                    </Box>
                    <Box className="category">
                        {this.retrieve("size") + " "}
                        {this.retrieve("type") + ", "}
                        {this.retrieve("allignment")}
                    </Box>
                    <MonsterDivider />
                    <Box className="basic-stats">
                        <MonsterStat stat={this.retrieve("armorClass")} identifier="Armor Class" />
                        <MonsterStat stat={this.retrieve("hitpoints")} identifier="Hit Points" />
                        <MonsterStat stat={this.retrieve("speed")} identifier="Speed" />
                    </Box>
                    <MonsterDivider />
                    <Box className="ability-scores">
                        <MonsterAbilityScore abilityScore={this.retrieve("str")} identifier="STR" />
                        <MonsterAbilityScore abilityScore={this.retrieve("dex")} identifier="DEX" />
                        <MonsterAbilityScore abilityScore={this.retrieve("con")} identifier="CON" />
                        <MonsterAbilityScore abilityScore={this.retrieve("int")} identifier="INT" />
                        <MonsterAbilityScore abilityScore={this.retrieve("wis")} identifier="WIS" />
                        <MonsterAbilityScore abilityScore={this.retrieve("cha")} identifier="CHA" />
                    </Box>
                    <MonsterDivider />
                    <Box className="advanced-stats">
                        <MonsterStat stat={this.retrieve("savingThrows")} identifier="Saving Throws" />
                        <MonsterStat stat={this.retrieve("skills")} identifier="Skills" />
                        <MonsterStat stat={this.retrieve("vulnerabilities")} identifier="Damage Vulnerabilities" />
                        <MonsterStat stat={this.retrieve("resistances")} identifier="Damage Resistences" />
                        <MonsterStat stat={this.retrieve("damageImmunities")} identifier="Damage Immunities" />
                        <MonsterStat stat={this.retrieve("conditionImmunities")} identifier="Condition Immunities" />
                        <MonsterStat stat={this.retrieve("senses")} identifier="Senses" />
                        <MonsterStat stat={this.retrieve("passivePerception")} identifier="Passive perception" />
                        <MonsterStat stat={this.retrieve("languages")} identifier="Languages" />
                        <MonsterStat stat={this.retrieve("challenge")} identifier="Challenge" />
                    </Box>
                    <MonsterActionSection sectionType="abilities" actionList={this.retrieve("abilities")} />
                    <MonsterActionSection sectionType="actions" actionList={this.retrieve("actions")} />
                    <MonsterActionSection sectionType="reactions" actionList={this.retrieve("reactions")} />
                    <MonsterActionSection sectionType="legendaryActions" actionList={this.retrieve("legendaryActions")} />
                </Box>
            );
        } else {
            return (
                <Box className="MonsterStatBlock">
                    <Box>
                        {this.props.monster} not found.
                    </Box>
                </Box>
            );
        }
    }
}
