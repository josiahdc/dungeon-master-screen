import React from 'react';
import './MonsterAction.css';
import Box from '@material-ui/core/Box';
import { capitalize } from "../../Utils";


export class MonsterAction extends React.Component {
    render() {
        let description = ""
        if (this.props.action.attackType !== undefined) {
            description += this.props.action.type + " "
            description += this.props.action.attackType + ": +"
            description += this.props.action.hitBonus + " to hit, reach "
            description += this.props.action.reach + ", "
            description += this.props.action.target + ". Hit: "
            for (let i = 0; i < this.props.action.damage.length; i++) {
                description += this.props.action.damage[i] + " "
                description += this.props.action.damageType[i] + " damage"
                if (i < this.props.action.damage.length - 1) {
                    description += " plus "
                }
            }
            description += "."
        } else {
            description = this.props.action.description;
        }
        return (
            <Box className="action">
                <Box component="span" className="action-name">
                    {capitalize(this.props.action.name) + ". "}
                </Box>
                <Box component="span" className="action-description">
                    {description}
                </Box>
            </Box>
        );
    }
}
