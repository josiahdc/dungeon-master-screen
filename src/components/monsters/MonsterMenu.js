import React from 'react';
import './MonsterMenu.css';
import Box from '@material-ui/core/Box';
import { MonsterSearchBar } from './MonsterSearchBar';



export class MonsterMenu extends React.Component {
    render() {
        return (
            <Box className="MonsterMenu">
                Monster Menu
                <MonsterSearchBar addMonsterFunction={this.props.addMonsterFunction}
                    monsterNames={this.props.monsterNames} />
            </Box>
        );
    }
}
