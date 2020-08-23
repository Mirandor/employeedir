import React from 'react';
import BasicTable from './components/table/index';
import HeaderUsers from './components/header/index';
import SearchStandard from './components/search/index';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { Container, Divider } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
    <HeaderUsers />
    <Divider hidden />
    <SearchStandard />
    <Divider hidden />
    <Container>

      <BasicTable />

    </Container>
    </div>
  );
}

export default App;
