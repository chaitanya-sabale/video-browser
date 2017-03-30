import React from 'react';

const VideoDetails = ( {video} ) => {
  //check for null props
  if(!video)
  {
    return <div>Loading...</div>
  }

  const videoId=video.id.videoId; //in the case of embed video, only thing which gets changed is id of the video
  const url=`https://www.youtube.com/embed/${videoId}`;
  // ES6: backtick entireString${string2} backtick;(Template Strings) alternative to ES5: url = "https://www.youtube.com/embed/"+videoId;

  return(
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}> </iframe>;
        </div>

        <div className="details">
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
        </div>
      </div>
  );
}

export default VideoDetails;
