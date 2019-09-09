import React from 'react';
import './Header.css';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



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