import React from 'react';
import Box from '@material-ui/core/Box';
import { MonsterSearchBar } from './MonsterSearchBar';


export class MonsterMenu extends React.Component {
    render() {
        return (
            <Box className="monster-menu">
                <MonsterSearchBar addMonsterFunction={this.props.addMonsterFunction}
                    monsterNames={this.props.monsterNames} />
            </Box>
        );
    }
}
