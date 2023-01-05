import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { mapping } from '../constants/i18n_mappings';
i18n.use(initReactI18next).init(mapping)


export default function NavHeader() {

    const { t } = useTranslation()
    const [currentLan, setCurrentLan] = useState('jp');
    const lanChangeHandler = (eventKey) => {
        // event.preventDefault();
        console.log('eventKey selected as: ', eventKey);
        i18n.changeLanguage(eventKey)
            .then(
                r => console.log(r + 'language change success to : ', eventKey),
                r => console.log(r + 'language change failed')
            );
        setCurrentLan(eventKey)
    };

    return (
        <Navbar bg="dark bg-gradient" expand="lg" id='NavBarPC' className='sticky-top'>
            <Container>
                <Navbar.Brand href="./" >NANAHOSHINANA OFFICIAL? SITE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="https://www.youtube.com/channel/UCncsOsnMBAAaYb6WidBYIDw" target="_blank"> {t('YouTube')} </Nav.Link>
                        <Nav.Link href="https://www.twitch.tv/nanahoshinana77" target="_blank"> {t('Twitch')} </Nav.Link>
                        <Nav.Link href="https://streamlabs.com/nanach2/tip" target="_blank"> {t('Tips')} </Nav.Link>
                        <Nav.Link href="https://twitter.com/nanahoshinana77" target="_blank"> {t('Twitter')} </Nav.Link>
                        <Nav.Link href="https://www.youtube.com/channel/UCncsOsnMBAAaYb6WidBYIDw/join?sub_confirmation=1" target="_blank"> {t('Membership')} </Nav.Link>
                        <Nav.Link href="https://nanahoshinana.fanbox.cc/" target="_blank"> {t('FANBOX')} </Nav.Link>
                        <Nav.Link href="https://nanahoshinana77.booth.pm/" target="_blank"> {t('Merchandise')} </Nav.Link>
                        <Nav.Link href="https://www.amazon.co.jp/hz/wishlist/ls/2VC9Q9SXVXB8O?ref_=wl_share" target="_blank"> {t('Wantings')} </Nav.Link>

                        <DropdownButton
                            id="dropdown-button-dark-example2"
                            variant="secondary"
                            menuVariant="dark"
                            title="Language 言語"
                            // className="mt-2"
                            onSelect={lanChangeHandler}
                        >
                            <Dropdown.Item eventKey='jp' >日本語 </Dropdown.Item>
                            <Dropdown.Item eventKey='en' >English</Dropdown.Item>
                        </DropdownButton>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
