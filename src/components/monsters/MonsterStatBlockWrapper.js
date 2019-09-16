import React from 'react';
import './MonsterStatBlockWrapper.css';
import { MonsterStatBlock } from './MonsterStatBlock';
import Box from '@material-ui/core/Box';


export class MonsterStatBlockWrapper extends React.Component {
    render() {
        return (
            <Box className="monster-stat-block-wrapper">
                <Box className="monster-card">
                    <Box className="gold-border">
                        <Box className="color-overlay"></Box>
                    </Box>
                    <MonsterStatBlock monster={this.props.monster}
                        monsterList={this.props.monsterList} />
                    <Box className="gold-border">
                        <Box className="color-overlay"></Box>
                    </Box>
                </Box>
            </Box>
        );
    }
}
