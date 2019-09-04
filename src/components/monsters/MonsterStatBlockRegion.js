import React from 'react';
import './MonsterStatBlockRegion.css';
import { MonsterStatBlockWrapper } from './MonsterStatBlockWrapper';
import Box from '@material-ui/core/Box';


export class MonsterStatBlockRegion extends React.Component {
    render() {
        return (
            <Box className="MonsterStatBlockRegion">
                {this.props.activeMonsters.map((monsterName) =>
                    <MonsterStatBlockWrapper monster={monsterName} key={monsterName}
                        removeMonsterFunction={this.props.removeMonsterFunction}
                        monsterList={this.props.monsterList} />
                )}
            </Box>
        );
    }
}
