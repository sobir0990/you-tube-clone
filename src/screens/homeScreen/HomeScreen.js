import React, {useEffect} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Video from "../../components/video/Video";
import {useDispatch, useSelector} from "react-redux";
import {getPopularVideos, getVideosByCategory} from "../../redux/actions/videos.action";
import InfiniteScroll from 'react-infinite-scroll-component';

const HomeScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch]);

    const {videos, activeCategory} = useSelector(state => state.homeVideos);


    const fetchData = () => {
        if (activeCategory === 'All'){
            dispatch(getPopularVideos())
        } else {
            dispatch(getVideosByCategory(activeCategory))
        }
    }

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
                        videos && videos.map((video) => (
                            <Col lg={3} md={4}>
                                <Video video={video} key={video.id} />
                            </Col>
                        ))
                    }
                    </InfiniteScroll>
            </Container>
        </>
    )
};

export default HomeScreen;