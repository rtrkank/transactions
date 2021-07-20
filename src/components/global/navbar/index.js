import {Nav, Navbar, Container} from 'react-bootstrap';

function NavbarComponent() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Premium Brand</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#new-release">New Releases</Nav.Link>
                <Nav.Link href="#shop">Shop</Nav.Link>
                <Nav.Link href="#sale">Sale</Nav.Link>
                <Nav.Link href="#customer-support">Customer Support</Nav.Link>
                <Nav.Link href="#find-a-store">Find a store</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link eventKey={2} href="#rewards">
                    Welcome, Jane Doe
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;