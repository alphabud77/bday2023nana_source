import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function NavbarPC() {
    return (
        <Navbar bg="dark" expand="lg" id='NavBarPC' className='sticky-top'>
            <Container>
                <Navbar.Brand href="./" >NANAHOSHINANA OFFICIAL SITE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="https://www.youtube.com/channel/UCncsOsnMBAAaYb6WidBYIDw" target="_blank"> YouTube </Nav.Link>
                        <Nav.Link href="https://www.twitch.tv/nanahoshinana77" target="_blank"> Twitch </Nav.Link>
                        <Nav.Link href="https://streamlabs.com/nanach2/tip" target="_blank"> Tips </Nav.Link>
                        <Nav.Link href="https://twitter.com/nanahoshinana77" target="_blank"> Twitter </Nav.Link>
                        <Nav.Link href="https://www.youtube.com/channel/UCncsOsnMBAAaYb6WidBYIDw/join?sub_confirmation=1" target="_blank"> Membership {/* メンバーシップ  */}</Nav.Link>
                        <Nav.Link href="https://nanahoshinana.fanbox.cc/" target="_blank"> FANBOX </Nav.Link>
                        <Nav.Link href="https://nanahoshinana77.booth.pm/" target="_blank"> Merchandise </Nav.Link>
                        <Nav.Link href="https://www.amazon.co.jp/hz/wishlist/ls/2VC9Q9SXVXB8O?ref_=wl_share" target="_blank"> Wantings </Nav.Link>

                        <DropdownButton
                            id="dropdown-button-dark-example2"
                            variant="secondary"
                            menuVariant="dark"
                            title="Language 言語"
                            // className="mt-2"
                        >
                            <Dropdown.Item href="#/action-3">日本語 </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">English</Dropdown.Item>
                        </DropdownButton>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarPC;