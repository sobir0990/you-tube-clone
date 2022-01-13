import React from 'react';
import {AiFillEye} from 'react-icons/ai'
import './_video.scss';

function Video() {
    return (
        <>
            <div className="video">
                <div className="video__top">
                    <img src="https://i.ytimg.com/vi/hnAIgloozxI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIWpsaIVZ5IzBei5Op2g-EYyjhkQ" alt=""/>
                    <span>05:43</span>
                </div>
                <div className="video__title">
                    Create app in 5 minutes
                </div>
                <div className="video__details">
                    <span>
                        <AiFillEye/> 5m Views
                    </span>
                    <span>5 days ago</span>
                </div>
                <div className="video__channel">
                    <img src="https://yt3.ggpht.com/CdQ9n5dx6FqLmioEflJ5Dtmjfk8n9RfM2NNJ40lpX7HFWiJKWSM6V0PKRYhgCnUwJoOqOm6J9g=s68-c-k-c0x00ffffff-no-rj" alt=""/>
                    <p>Rainbow Hat Jr</p>
                </div>
            </div>
        </>
    );
}

export default Video;
