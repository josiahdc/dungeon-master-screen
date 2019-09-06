import React from 'react';
import './MonsterStatBlockRegion.css';
import { MonsterStatBlockWrapper } from './MonsterStatBlockWrapper';
import { Box } from '@material-ui/core';
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";

const ReactGridLayout = WidthProvider(RGL);


export class MonsterStatBlockRegion extends React.Component {
    render() {
        return (
            <Box className="MonsterStatBlockRegion">
                <ReactGridLayout className="layout" layout={this.props.monsterlayout} cols={90} rowHeight={10}
                    onLayoutChange={this.props.layoutChange}>
                    {this.props.activeMonsters.map((monsterName) =>
                        <div key={monsterName}>
                            <MonsterStatBlockWrapper id={monsterName} monster={monsterName} key={monsterName}
                                monsterList={this.props.monsterList} />
                            <span className="remove-button"
                            onClick={() => this.props.removeMonsterFunction(monsterName)}></span>
                        </div>
                    )}
                </ReactGridLayout>
            </Box>
        );
    }
}
