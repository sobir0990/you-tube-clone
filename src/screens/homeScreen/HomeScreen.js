import React, {useEffect} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Video from "../../components/video/Video";
import {useDispatch, useSelector} from "react-redux";
import {getPopularVideos, getVideosByCategory} from "../../redux/actions/videos.action";
import InfiniteScroll from 'react-infinite-scroll-component';
import Skeleton,{SkeletonTheme } from 'react-loading-skeleton'

import SkeleteionVideo from "../../components/skeletions/SkeletionVideo";

const HomeScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch]);

    const {videos, activeCategory, loading} = useSelector(state => state.homeVideos);

    const fetchData = () => {
        if (!videos) {
            if (activeCategory === 'All') {
                dispatch(getPopularVideos())
            } else {
                dispatch(getVideosByCategory(activeCategory))
            }
        }
    };

    return (
        <>
            <Container>
                <CategoriesBar/>
                <InfiniteScroll
                    dataLength={videos.length}
                    next={fetchData}
                    hasMore={true}
                    Loader={<div className='spinner-border text-danger d-block mx-auto'></div>}
                    className='row'
                >
                    {
                        !loading ? videos.map((video) => (
                            <Col lg={3} md={4}>
                                <Video video={video} key={video.id}/>
                            </Col>
                        )) :
                            [...Array(20)].map(() => <Col lg={3} md={4}>
                            <SkeleteionVideo/>
                        </Col>)
                    }
                </InfiniteScroll>
            </Container>
        </>
    )
};

export default HomeScreen;