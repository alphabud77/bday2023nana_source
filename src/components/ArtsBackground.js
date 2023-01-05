import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


export default function ArtsBackground() {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Art by <a href='https://twitter.com/Keichupiko' target='_blank'>@Keichupiko </a>
        </Tooltip>
    );

    return <div className='art_bg'>


        <OverlayTrigger
            placement="top"
            delay={{ show: 0, hide: 800 }}
            overlay={renderTooltip}
        >
            <div id='art_bg_1'><img src={require('../imgs/FullbodyKei_flip.png')}></img></div>

        </OverlayTrigger>

        <OverlayTrigger
            placement="top"
            delay={{ show: 0, hide: 800 }}
            overlay={renderTooltip}
        >

            <div id='art_bg_2'><img src={require('../imgs/BustUpKei.png')}></img></div>

        </OverlayTrigger>

        <p className='art_caption' id='art_caption1'>
            Art by <a href='https://twitter.com/Keichupiko' target='_blank'>@Keichupiko </a>
        </p>
        <p className='art_caption' id='art_caption2'>
            Art by <a href='https://twitter.com/Keichupiko' target='_blank'>@Keichupiko </a>
        </p>


    </div >
};