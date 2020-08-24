import React, { Component } from "react";
import { Table } from 'semantic-ui-react';

class BasicTable extends Component {
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

  render(){

    var {items, loading} = this.state

    if (!loading) {
      return (
        <div>Loading ... </div>
      )
    }
    else {

      return (
        <div>
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