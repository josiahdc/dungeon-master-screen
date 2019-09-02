import React from 'react';
import './MonsterStatBlockWrapper.css';
import { MonsterStatBlock } from './MonsterStatBlock';


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
            <div className="MonsterStatBlockWrapper">
                <MonsterStatBlock monster={this.props.monster} />
                <button onClick={this.handleRemoveButtonClick}>
                    Remove
                </button>
            </div>
        );
    }
}
