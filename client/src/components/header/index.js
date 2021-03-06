import React from "react";
import { Header, Icon, Divider } from 'semantic-ui-react'

const HeaderUsers = () => (
  <div>
    <Divider hidden />
    <Header color='teal'as='h2' icon textAlign='center'>
    <Icon circular inverted color='teal' name='users' />
      <Header.Content>Employee Directory</Header.Content>
    </Header>
    <Divider segment />
  </div>
)

export default HeaderUsers;