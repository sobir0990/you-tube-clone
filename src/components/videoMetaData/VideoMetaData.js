import React, {useEffect} from 'react';
import moment from 'moment';
import numeral from 'numeral';
import {MdThumbUp, MdThumbDown} from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import './_videoMetaData.scss';
import {useDispatch, useSelector} from "react-redux";
import {getVideoById} from "../../redux/actions/videos.action";
import {checkSubscriptionStatus, getChannelDetails} from "../../redux/actions/channel.action";

const VideoMetaData = ({video:{snippet, statistics}}, videoId) => {

    const { channelId, channelTitle, description, title, publishedAt } = snippet;
    const { viewCount, likeCount, dislikeCount } = statistics;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getChannelDetails(channelId));
        dispatch(checkSubscriptionStatus(channelId))
    }, [dispatch, channelId]);

    const {snippet: channelSnippet, statistics: channelStatistics} = useSelector(state => state.channelDetails.channel);
    const {subscriptionStatus} = useSelector(state => state.channelDetails.subscriptionStatus);

    return (
        <>
            <div className="videoMetaData py-2">
                <div className="videoMetaData__top">
                    <h5>{title}</h5>
                    <div className="d-flex justify-content-between align-items-center py-1">
                        <span>
                            {numeral(viewCount).format('0.a')} Views *
                            {moment(publishedAt).fromNow()}
                        </span>
                    </div>

                    <div>
                    <span className='mr-3'>
                        <MdThumbUp size={26}/> {numeral(likeCount).format('0.a')} Like *
                    </span>

                        <span className='mr-3'>
                        <MdThumbDown size={26}/> {numeral(dislikeCount).format('0.a')} DisLike *
                    </span>
                    </div>
                </div>

                <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
                    <div className="d-flex">
                        <img
                            src={channelSnippet?.thumbnails?.default?.url}
                            className='rounded-circle mr-3'
                            alt=""/>
                        <div className="d-flex flex-column">
                            <span>{channelTitle}</span>
                            <span>{numeral(channelStatistics?.subscriberCount).format('0.a')} Subscribers</span>
                        </div>
                        <button className={`btn border-0 p-2 m-2 ${subscriptionStatus && 'btn-gray'}`}>{subscriptionStatus? 'Subscribed': 'Subscribe'}</button>
                    </div>
                </div>
                <div className="videoMetaData__description">
                    <ShowMoreText
                        lines={3}
                        more="Show more"
                        less="Show less"
                        className="content-css"
                        anchorClass="my-anchor-css-class"
                        width={280}
                        expanded={false}
                    >
                        {description}
                    </ShowMoreText>
                </div>
            </div>
        </>
    )
};

export default VideoMetaData;