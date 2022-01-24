import React from 'react';
import {Col, Row} from 'react-bootstrap';
import './_videoHorizontal.scss';
import {LazyLoadImage} from "react-lazy-load-image-component";
import moment from 'moment';
import numeral from 'numeral';
import {AiFillEye} from "react-icons/ai";

const VideoHorizontal = () => {

    const seconds = moment.duration(100).asSeconds();
    const _duration = moment.utc(seconds * 1000).format('mm:ss');

    return (
        <Row className='videoHorizontal m-1 py-2 align-items-center'>
            <Col xs={6} md={4} className='videoHorizontal__left'>
                <LazyLoadImage
                    src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
                    effect='blur'
                    className='videoHorizontal__thumbnail'
                    wrapperClassName='videoHorizontal__thumbnail-wrapper'
                />
                <span className='video__top__duration'>{_duration}</span>
            </Col>

            <Col xs={6} md={4} className='videoHorizontal__right p-0'>
            <p className='videoHorizontal__title mb-1'>test</p>
                <div className="videoHorizontal_details">
                        <AiFillEye/> {numeral(10000).format('0.a')} Views
                    {moment('2020-04-04').fromNow()}

                </div>

                <div className='videoHorizontal__channel d-flex align-items-center my-1'>
                    <p>Koder</p>
                </div>
            </Col>
        </Row>
    )
};

export default VideoHorizontal;