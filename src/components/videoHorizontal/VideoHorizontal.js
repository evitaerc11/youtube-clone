import React from 'react'
import { AiFillEye } from 'react-icons/ai'

import moment from 'moment'
import numeral from 'numeral'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import './_videoHorizontal.scss'
import { Col, Row } from 'react-bootstrap'

const VideoHorizontal = ({ id, snippet }) => {
  console.log(id, snippet)
  const seconds = moment.duration('100').asSeconds()
  const _duration = moment.utc(seconds * 1000).format('mm:ss')
  return (
    <Row className='videoHorizontal m-1 py-2 align-items-center'>
      <Col xs={6} md={4} className='videoHorizontal__left'>
        <LazyLoadImage
          src={snippet?.thumbnails?.high?.url}
          alt=''
          effect='blur'
          className='videoHorizontal__thumbnail'
          wrapperClassName='videoHorizontal__thumbnail-wrapper'
        />
        <span className='video__top__duration'>{_duration}</span>
      </Col>
      <Col xs={6} md={8} className='videoHorizontal__right p-0'>
        <p className='videoHorizontal__title mb-1'>{snippet?.channelTitle}</p>
        <div className='videoHorizontal__details'>
          <AiFillEye /> {numeral(100000).format('0.a')} Views •
          {moment('2022-01-2').fromNow()}
        </div>
        <div className='videoHorizontal__channel d-flex align-items-center my-1 '>
          {/* <LazyLoadImage
            src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
            alt=''
            effect='blur'
          /> */}
        </div>
        <p>Username</p>
      </Col>
    </Row>
  )
}

export default VideoHorizontal
