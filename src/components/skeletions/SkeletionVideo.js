import React from 'react';
import Skeletion, {SkeletonTheme} from "react-loading-skeleton";

const SkeleteionVideo = () => {
    return(
        <div style={{width:'100%', margin:'1rem 0'}}>
            <SkeletonTheme color='#858c93' highlightColor='white'>
                <Skeletion height={100}/>
                <div>
                    <Skeletion style={{margin:'0.5rem'}} circle height={40} width={40}/>
                    <Skeletion height={40} width='75%'/>
                </div>
            </SkeletonTheme>
        </div>
    )
};

export default SkeleteionVideo;