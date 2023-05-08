import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import myImage from './myImage.png';

function NavBar() {
  return (
    <Navbar  bg='light' variant='light'  expand="md" sticky='top' style={{height:'55px'}} >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div><a href='/'><img src={myImage} alt="MyImage" / ></a></div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="me-auto" style={{fontSize:'18px'}}>
            <Link to="/">Home</Link>
            <Link to="/history">History</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;