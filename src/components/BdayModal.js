import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function BdayModal() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Art by <a href='https://twitter.com/mataharigoreng' target='_blank'>@Matahari_goreng</a>
        </Tooltip>
    );

    return (
        <>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Happy birthday Nana!</Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-5'>
                    <p style={{ textAlign: "left" }}  >
                        &nbsp;&nbsp;&nbsp;&nbsp;Thank you for bringing us joy and great streams! Hope you have a splendid year of 2023!
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;Happy birthday and happy new year!
                        <br />
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;配信をありがとうございました ! お誕生日おめでとう と ​あけおめ!
                        <br />
                    </p>
                    <p style={{ textAlign: "right" }} >
                        --- &nbsp;🐞 &nbsp;&nbsp; &nbsp;&nbsp;
                    </p>

                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 0, hide: 800 }}
                        overlay={renderTooltip}
                    >
                        <img
                            className="d-block w-75 mx-auto"
                            src={require('../imgs/art_Matahari.png')}
                            alt=" ../imgs/art_Matahari.png "
                        />
                    </OverlayTrigger>
                    
                    <p className='text-center'>
                        Art by <a href='https://twitter.com/mataharigoreng' target='_blank'>@Matahari_goreng</a>
                    </p>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Thank you!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}