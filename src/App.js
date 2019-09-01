import React from 'react';
import './App.css';
import {PageContent} from "./components/PageContent"


export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <PageContent />
			</div>
        );
    }
}
