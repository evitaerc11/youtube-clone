import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesBar from '../../components/categoriesBar/CategoriesBar';
import Video from '../../components/video/Video';
import { getPopularVideos } from '../../redux/actions/videos.action';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { videos } = useSelector((state) => state.homeVideos);

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);
  return (
    <Container>
      <CategoriesBar />
      <Row>
        {videos.map((video) => (
          <Col lg={3} md={4} key={video.id}>
            <Video video={video} key={video.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
