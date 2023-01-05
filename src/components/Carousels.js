import Carousel from 'react-bootstrap/Carousel';


export default function Carousels() {


    return (
        <Carousel className='mx-auto s-1' id='carousel-main' >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../img_bio/FixtSc2VUAAoSwL.jpg')}
                    alt=" ../img_bio/FixtSc2VUAAoSwL.jpg "
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../img_bio/FixtTtrVIAINPlE.jpg')}
                    alt=" ../img_bio/FixtTtrVIAINPlE.jpg "
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../img_bio/FixtU18UUAEnGoM.jpg')}
                    alt=" ../img_bio/FixtU18UUAEnGoM.jpg "
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../img_bio/FixtVtaVEAAEdKp.jpg')}
                    alt=" ../img_bio/FixtVtaVEAAEdKp.jpg "
                />
            </Carousel.Item>
        </Carousel>
    );
}
