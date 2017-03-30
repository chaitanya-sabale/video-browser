import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
//assigning map function <li> to VideoItems so that it can be displayed through <ul>
  const VideoItems=
//array.map function
  props.videos.map((video) => {
    return (
    <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video ={video} />
  );
})



  return(
  <ul className= "col-md-4 list-group" >
  {VideoItems}
  </ul>
  );
}

export default VideoList;
