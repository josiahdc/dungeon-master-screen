import React from 'react';
import Autosuggest from 'react-autosuggest';
import './MonsterSearchBar.css';
import Box from '@material-ui/core/Box';



export class MonsterSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            suggestions: []
        }
        this.trimSuggestions = this.trimSuggestions.bind(this);
        this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
        this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
        this.getSuggestionValue = this.getSuggestionValue.bind(this);
        this.renderSuggestion = this.renderSuggestion.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    }

    trimSuggestions(value) {
        let input = value.trim().toLowerCase();
        let trimmedList = this.props.monsterNames.filter((monster) => {
            let lowerCaseMonsterName = monster.name.toLowerCase();
            return lowerCaseMonsterName.includes(input);
        });
        return trimmedList.slice(0, 10);
    }

    onSuggestionsFetchRequested(value) {
        this.setState({ suggestions: this.trimSuggestions(value.value) });
    }

    onSuggestionsClearRequested() {
        this.setState({ suggestions: [] });
    }

    getSuggestionValue(value) {
        return value.name;
    }

    renderSuggestion(suggestion) {
        return (
            <div>
                {suggestion.name}
            </div>
        );
    }

    onChange(event, { newValue }) {
        this.setState({ value: newValue })
    }

    onSuggestionSelected(event, {suggestion}) {
        this.props.addMonsterFunction(suggestion.name);
        this.setState({value: ""});
    }

    render() {
        const inputProps = {
            value: this.state.value,
            onChange: this.onChange
        }

        return (
            <Box className="MonsterSearchBar">
                <Autosuggest
                    suggestions={this.state.suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={this.getSuggestionValue}
                    renderSuggestion={this.renderSuggestion}
                    inputProps={inputProps}
                    onSuggestionSelected={this.onSuggestionSelected}
                    highlightFirstSuggestion={true}
                />
            </Box>
        );
    }
}
