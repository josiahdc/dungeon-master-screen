import React from 'react';
import './Header.css';
import Box from '@material-ui/core/Box';


export class Header extends React.Component {
    render() {
        return (
            <Box className="Header">
                <Box className="title">
                    Helping Homunculus
                </Box>
            </Box>
        );
    }
}
