import React from 'react';
import './MonsterPage.css';
import { MonsterMenu } from './MonsterMenu';
import { MonsterStatBlockWrapper } from './MonsterStatBlockWrapper';
import Cookies from 'js-cookie';
import Box from '@material-ui/core/Box';
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";


const ReactGridLayout = WidthProvider(RGL);
const monsterNames = require('./../../monsterstats/monsterNames.json')
const monsterList = require('./../../monsterstats/monsters.json')


export class MonsterPage extends React.Component {
    constructor(props) {
        super(props);
        let activeMonsterCookie = Cookies.get("activeMonsters");
        let activeMonsters = [];
        let layout = [{i: 'search-bar', x: 0, y: 0, w: 30, h: 1, static: true}];
        if (activeMonsterCookie !== undefined) {
            activeMonsters = JSON.parse(activeMonsterCookie);
            layout = JSON.parse(Cookies.get("layout"));
        }
        this.state = {
            "activeMonsters": activeMonsters,
            "layout": layout
        }

        this.calculateLayout = this.calculateLayout.bind(this);
        this.removeActive = this.removeActive.bind(this);
        this.addActive = this.addActive.bind(this);
        this.onLayoutChange = this.onLayoutChange.bind(this);
    }

    calculateLayout(activeMonsters, oldLayout) {
        let newLayout = oldLayout.slice(0);
        let existingMonsters = [];
        oldLayout.forEach((item) => {
            existingMonsters.push(item.i);
        })
        let newMonsters = activeMonsters.filter((monster) => { return !existingMonsters.includes(monster) })
        newMonsters.forEach((monsterName, index) => {
            newLayout.push({ i: monsterName, x: 0, y: Infinity, w: 30, h: 35 });
        });
        return newLayout;
    }

    addActive(monsterName) {
        if (this.state.activeMonsters.indexOf(monsterName) === -1) {
            let newActiveMonsters = this.state.activeMonsters.concat([monsterName]);
            Cookies.set("activeMonsters", JSON.stringify(newActiveMonsters));
            this.setState({
                activeMonsters: newActiveMonsters,
                layout: this.calculateLayout(newActiveMonsters, this.state.layout)
            });
        }
    }

    removeActive(monsterName) {
        let newActiveMonsters = this.state.activeMonsters.filter((monsterInState) => {
            return monsterInState !== monsterName;
        });
        Cookies.set("activeMonsters", JSON.stringify(newActiveMonsters));
        this.setState({
            activeMonsters: newActiveMonsters
        });
    }

    onLayoutChange(layout) {
        this.setState({ "layout": layout });
        Cookies.set("layout", JSON.stringify(layout));
    }

    render() {
        return (
            <Box className="MonsterPage">
                <ReactGridLayout className="layout" layout={this.state.layout} cols={90} rowHeight={10}
                    onLayoutChange={this.onLayoutChange}>
                    <div key="search-bar" className="search-bar">
                        <MonsterMenu addMonsterFunction={this.addActive}
                            monsterNames={monsterNames} />
                    </div>
                    <MonsterMenu addMonsterFunction={this.addActive}
                        monsterNames={monsterNames} />
                    {this.state.activeMonsters.map((monsterName) =>
                        <div key={monsterName}>
                            <MonsterStatBlockWrapper id={monsterName} monster={monsterName} key={monsterName}
                                monsterList={monsterList} />
                            <span className="remove-button"
                                onClick={() => this.removeActive(monsterName)}></span>
                        </div>
                    )}
                </ReactGridLayout>
            </Box>
        );
    }
}
