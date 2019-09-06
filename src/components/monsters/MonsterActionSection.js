import React from 'react';
import './MonsterActionSection.css';
import Box from '@material-ui/core/Box';
import { unCamelCase, capitalize } from "../../Utils";
import { MonsterAction } from './MonsterAction';


export class MonsterActionSection extends React.Component {
    render() {
        if (this.props.actionList.length > 0) {
            let actions = this.props.actionList.map((action) => {
                return (<MonsterAction key={action.name} action={action} />);
            });

            return (
                <Box className={this.props.sectionType}>
                    <Box className="header">
                        {unCamelCase(capitalize(this.props.sectionType))}
                    </Box>
                    {actions}
                </Box>
            );
        } else {
            return null;
        }
    }
}
