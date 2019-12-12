import React from 'react';
import './App.css'
import * as IssueData from './IssueData'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Description from './Description';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: IssueData.issueList(),
            filtered: [],
            showList: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.showList = this.showList.bind(this)
        this.hideList = this.hideList.bind(this)
    }

    componentDidMount() {
        this.setState({
            filtered: this.state.list
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filtered: nextProps.list
        });
    }

    handleChange(e) {
        // Variable to hold the original version of the list
        let currentList = [];
        // Variable to hold the filtered list before putting into state
        let newList = [];

        // If the search bar isn't empty
        if (e.target.value !== "") {
            // Assign the original list to currentList
            currentList = this.state.list;

            // Use .filter() to determine which items should be displayed
            // based on the search terms
            newList = currentList.filter(item => {
                // change current item to lowercase
                const lc = item.name.toLowerCase();
                // change search term to lowercase
                const filter = e.target.value.toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
                return lc.includes(filter);
            });
        } else {
            // If the search bar is empty, set newList to original task list
            newList = this.state.list;
        }
        // Set the filtered state based on what our rules added to newList
        this.setState({
            filtered: newList
        });
    }

    showList(){
        this.setState({
            showList: true
        })
    }

    hideList(){
        this.setState({
            showList:false
        })
    }

    render() {
        var listStyle = { width: '400px', border: '1px solid'}
        listStyle = this.state.showList ? {...listStyle, ...{display:"block"}} : {...listStyle, ...{display:"none"}}
        return (
            <div>
                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..."  onFocus={this.showList} onBlur={this.hideList}/>
                <ul style={listStyle}>
                    {this.state.filtered && this.state.filtered.map((item, index) => {
                        var style = (index == 0) ? { background: 'cyan' } : {};
                        return (
                            <div style={style}>
                                <Link to={`/issue/${item.id}`} key={item.id} id={item.id} onMouseDown={(e)=>{e.stopPropagation();e.preventDefault();}}>
                                    {item.name}
                                </Link>
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default List