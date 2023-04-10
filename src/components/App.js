import '../App.css';
import NavLinks from './nav';
import Banner from './Banner';
import { Fragment } from 'react';

function App() {
  // return <Banner />
  // return <NavLinks />
  return (
    <Fragment>
      <Banner />
      <NavLinks />
    </Fragment>
  )
}

export default App;