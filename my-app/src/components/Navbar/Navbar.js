import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbarr from 'react-bootstrap/Navbar';

export default function Navbar() {
    return (
        <>
            <Navbarr expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbarr.Brand href="/">Travel Destination</Navbarr.Brand>
                    <Navbarr.Toggle aria-controls="basic-navbar-nav" />
                    <Navbarr.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                    </Navbarr.Collapse>
                </Container>
            </Navbarr>

        </>
    )
}