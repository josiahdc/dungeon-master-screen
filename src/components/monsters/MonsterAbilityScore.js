import React from 'react';
import './MonsterAbilityScore.css';
import Box from '@material-ui/core/Box';


export class MonsterAbilityScore extends React.Component {
    constructor(props) {
        super(props);

        this.format = this.format.bind(this);
    }

    format(abilityScore) {
        let rawModifier = Math.floor((abilityScore - 10) / 2);
        let modifierString = rawModifier >= 0 ? "+" + rawModifier : rawModifier;
        return abilityScore + " (" + modifierString + ")";
    }

    render() {
            return (
                <Box className="ability-score">
                    <Box className="ability-score-identifier">
                        {this.props.identifier}
                    </Box>
                    <Box className="score">
                        {this.format(this.props.abilityScore)}
                    </Box>
                </Box>
            );
    }
}
