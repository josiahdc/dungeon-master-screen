import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {PageContent} from "./components/PageContent"
import { Box } from '@material-ui/core';


export class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Box className="App">
                    <PageContent />
                </Box>
            </React.Fragment>
        );
    }
}
