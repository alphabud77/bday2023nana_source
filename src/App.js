// import logo from './logo.svg';
import './App.css';

import { default as Container_bs } from 'react-bootstrap/Container';
import { Container as Container_mui } from '@mui/material';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import BdayModal from './components/BdayModal';
import Carousels from './components/Carousels';
import LatestTweets from './components/LatestTweets';
import NavbarPC from './components/NavHeader';
import PinnedTweet from './components/PinnedTweet';


import 'bootstrap/dist/css/bootstrap.min.css';
import LatestTweetsArtTag from './components/LatestTweetsArtTag';
import ArtsBackground from './components/ArtsBackground';
import NavFooter from './components/NavFooter';


function App() {


  return (
    <div className='bg-dark bg-gradient'>
      <BdayModal ></BdayModal>


      <NavbarPC ></NavbarPC>
      <ArtsBackground className='position-sticky'></ArtsBackground>
<br/>
      <Container_mui maxWidth="md">
        <Carousels ></Carousels>
      </Container_mui>

      {/* <Container_mui maxWidth="md">
        <Container_bs>
          <Row>
            <Col>
              <LatestTweets></LatestTweets>
            </Col>
            <Col>
              <LatestTweetsArtTag></LatestTweetsArtTag>
            </Col>
          </Row>
          <PinnedTweet></PinnedTweet>
          nana official site
        </Container_bs>
      </Container_mui> */}

      <br />



      <div id='content'>
        <Container_mui maxWidth="md">
          <LatestTweets></LatestTweets>
        </Container_mui>
      </div>

      <NavFooter></NavFooter>

    </div >
  );
}

export default App;
