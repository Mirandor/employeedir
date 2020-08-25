import React, {Component} from "react";
import Axios from "axios";
import BasicTable from '../table/index';
import { Input } from 'semantic-ui-react';

class SearchContacts extends Component {

  state = {
    search: "",
    employees: [],
    results: [],
    error: ""
  };

  onchange = e => {
    this.setState({ search : e.target.value })
  }

  render(){
    const {search} = this.state;
    var {items, loading} = this.state
    if(search !== "" && items.indexOf ( search ) === -1) {
        return null
      }

    return (
      <div>
        <Input label="Search Employees" icon="search" onChange={this.onchange}/>
        <BasicTable />
      </div>
    )
    }

  // componentDidMount() {
  //   Axios.get("https://randomuser.me/api/?results=200&nat=us")
  // }

}

export default SearchContacts;