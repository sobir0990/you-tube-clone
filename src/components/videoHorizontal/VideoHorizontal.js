import React, {useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import './_videoHorizontal.scss';
import {LazyLoadImage} from "react-lazy-load-image-component";
import moment from 'moment';
import numeral from 'numeral';
import {AiFillEye} from "react-icons/ai";
import request from "../../api";

const VideoHorizontal = ({video}) => {

    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            description,
            title,
            publishedAt,
            thumbnails: {medium}
        }
    } = video;

    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);

    const seconds = moment.duration(duration).asSeconds();
    const _duration = moment.utc(seconds * 1000).format('mm:ss');


    useEffect(() => {
        const get_video_details = async () => {
            const {
                data: {items},
            } = await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: id.videoId,
                },
            });
            setDuration(items[0].contentDetails.duration);
            setViews(items[0].statistics.viewCount);
        }
        get_video_details()
    }, [id]);


    useEffect(() => {
        const get_channel_icon = async () => {
            const {
                data: {items},
            } = await request('/channels', {
                params: {
                    part: 'snippet',
                    id: channelId,
                },
            });
            setChannelIcon(items[0].snippet.thumbnails.default);
        };
        get_channel_icon();
    }, [channelId]);
    return (
        <Row className='videoHorizontal m-1 py-2 align-items-center'>
            <Col xs={6} md={6} className='videoHorizontal__left'>
                <LazyLoadImage
                    src={medium.url}
                    effect='blur'
                    className='videoHorizontal__thumbnail'
                    wrapperClassName='videoHorizontal__thumbnail-wrapper'
                />
                <span className='video__duration'>{_duration}</span>
            </Col>

            <Col xs={6} md={6} className='videoHorizontal__right p-0'>
                <p className='videoHorizontal__title mb-1'>{title}</p>
                <div className="videoHorizontal_details">
                    <AiFillEye/> {numeral(views).format('0.a')} Views
                    {moment(publishedAt).fromNow()}

                </div>

                <div className='videoHorizontal__channel d-flex align-items-center my-1'>
                    <p className='mb-0'>{channelTitle}</p>
                </div>
            </Col>
        </Row>
    )
};

export default VideoHorizontal;