import React from 'react';
import './MonsterStat.css';
import Box from '@material-ui/core/Box';


export class MonsterStat extends React.Component {
    render() {
        if (this.props.stat !== null) {
            return (
                <Box className="stat-wrapper">
                    <Box className="stat-identifier" component="span">
                        {this.props.identifier + " "}
                    </Box>
                    <Box className="stat" component="span">
                        {this.props.stat}
                    </Box>
                </Box>
            );
        } else {
            return null;
        }
    }
}
