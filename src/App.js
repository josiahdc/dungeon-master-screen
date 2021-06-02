import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { PageContent } from "./components/PageContent"
import { Box } from '@material-ui/core';
import { Header } from './components/header/Header';


export class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Box className="App">
                    <Header />
                    <PageContent />
                </Box>
            </React.Fragment>
        );
    }
}
