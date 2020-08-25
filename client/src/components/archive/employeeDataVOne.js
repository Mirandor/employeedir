import React, { Component } from "react";
import { Table, Input } from 'semantic-ui-react';

class BasicTable extends Component {

  // state = {
  //   search: ""
  // }

  constructor(props){
    super(props)
    this.state = {
      items: [],
      loading: false
    }
  }

  componentDidMount(){
    fetch("https://randomuser.me/api/?results=200&nat=us")
    .then((response) => response.json())
    .then ((response) => {
      this.setState({
        items:response.results,
        loading:true
      })
    })
  }

  // onchange = e => {
  //   this.setState({ search : e.target.value })
  // }

  render(){
    const {search} = this.state;
    var {items, loading} = this.state

    // const itemsFiltered = items.filter( user => {
    //   return items.name.first.toLowerCase().indexOf (search.toLowerCase()) !== -1
    //  } )

    if(search !== "" && items.name.first.indexOf ( search ) === -1) {
      return null
    }
    if (!loading) {
      return (
        <div>Loading ... </div>
      )
    }
    else {

      return (
        <div>
          <Input label="Search Employees" icon="search" onChange={this.onchange}/>
        <Table basic='very'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Image</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Phone</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>DOB</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items.map(item => (
        <Table.Row>
        <Table.Cell><img src={item.picture.medium} alt={item.name.first}/></Table.Cell>
        <Table.Cell>{item.name.first} {item.name.last}</Table.Cell>
        <Table.Cell>{item.phone}</Table.Cell>
        <Table.Cell>{item.email}</Table.Cell>
        <Table.Cell>{item.dob.date}</Table.Cell>
        </Table.Row>

        ))}
      </Table.Body>
    </Table>
      </div>
    );
  }
  }
}

export default BasicTable;