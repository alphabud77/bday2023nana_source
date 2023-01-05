import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import i18n from "i18next";
import { useTranslation } from "react-i18next";


export default function NavFooter() {

    const { t } = useTranslation()


    return (
        <div bg="bg-dark bg-gradient" expand="lg" id='NavFooter' className='text-center'>
            <Container >
                <br/>
                <br/>
                <div>
                        NANAHOSHINANA OFFICIAL? SITE 2023 Jan 5th, by  AphaBud, Matahari & Keichupiko
                </div>
                <a href="https://twitter.com/Stephen42166653" target="_blank"> Tech Support </a>
                <br/>
                <a href="https://twitter.com/Stephen42166653" target="_blank"> Claim ownership of this site/repository & domain </a>
                <br/>
            </Container>
            <style>
                {`
                #NavFooter{
                    color: white;
                }
                `}
            </style>
        </div>
    );
}
