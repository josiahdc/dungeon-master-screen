import React from 'react';
import './MonsterStatBlockWrapper.css';
import { MonsterStatBlock } from './MonsterStatBlock';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';


export class MonsterStatBlockWrapper extends React.Component {
    render() {
        return (
            <Box className="MonsterStatBlockWrapper">
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
