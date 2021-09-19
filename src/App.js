import logo from './logo.svg';
import './App.css';
import 'bootstrap';
import ReactBootstrap, {Container, Jumbotron, Button, Row, Col, Grid, Panel,Form, FormGroup, FormLabel, FormText,FormControl} from 'react-bootstrap'
import Header from './components/Header.jsx';
import Nav from './components/nav.jsx';
import Contact from './components/contact';
import Photo from './components/photo';
import Skills from './components/skills';
import Name from './components/name';

function App() {
  return (
    <div className="App">
      <Nav/>
      <br/>
      <br/>
      <Header/>
      <br/>
      <br/>
      <Photo/>
      <br/>
      <br/>
      <Name/>
      <br/>
      <br/>
      <Skills/>
      <br/>
      <br/>
     <Contact/>
    </div>
  );
}

export default App;
