import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'
import * as IssueData from './IssueData'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionList: IssueData.issueList()
    };
    this.getDescription = this.getDescription.bind(this)
  }
 
  getDescription(issueId){
    var selectedItem = this.state.descriptionList.find((item)=>{return item.id == issueId})
    return selectedItem;
  }

  render() {
    var issueId = this.props.match && this.props.match.params.number;
    var selectedItem = this.getDescription(issueId)
    console.log(this.props.match)
    return (
      <div className="content">
        <div className="container">
          <section className="section">
                <b>{selectedItem.name}</b>
                <br/>
                <code>{selectedItem.description}</code>
          </section>
          <hr />
          <Link to='/issue'>Back</Link>
        </div>
      </div>
    );
  }
}

export default Description;