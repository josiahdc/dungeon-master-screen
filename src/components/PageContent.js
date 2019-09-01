import React from 'react';
import './PageContent.css';
import { MonsterPage } from './monsters/MonsterPage';


export class PageContent extends React.Component {
    render() {
        return (
            <div className="PageContent">
                Page Content
                <MonsterPage />
			</div>
        );
    }
}
