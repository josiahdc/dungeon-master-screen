import React from 'react';
import './MonsterDivider.css';
import Box from '@material-ui/core/Box';


export class MonsterDivider extends React.Component {
    render() {
        return (
            <Box className="Divider">
                <svg viewBox="0 0 100 1">
                    <polygon points="0,0 0,1 100,0.5" />
                </svg>
            </Box>
        );
    }
}
