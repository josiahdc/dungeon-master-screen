import React from 'react';
import './PageContent.css';
import { MonsterPage } from './monsters/MonsterPage';
import Box from '@material-ui/core/Box';


export class PageContent extends React.Component {
    render() {
        return (
            <Box className="page-content">
                <MonsterPage />
            </Box>
        );
    }
}
