import React from 'react';
import './MonsterStatBlockWrapper.css';
import { MonsterStatBlock } from './MonsterStatBlock';
import Box from '@material-ui/core/Box';


export class MonsterStatBlockWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveButtonClick = this.handleRemoveButtonClick.bind(this);
    }

    handleRemoveButtonClick() {
        this.props.removeMonsterFunction(this.props.monster);
    }

    render() {
        return (
            <Box className="MonsterStatBlockWrapper">
                <Box className="gold-border">
                    <Box className="color-overlay"></Box>
                </Box>
                <MonsterStatBlock monster={this.props.monster}
                    monsterList={this.props.monsterList} />
                <Box className="gold-border">
                    <Box className="color-overlay"></Box>
                </Box>
                <button onClick={this.handleRemoveButtonClick}>
                    Remove
                </button>
            </Box>
        );
    }
}
