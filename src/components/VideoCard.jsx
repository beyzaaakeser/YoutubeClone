import React, { useState } from 'react';
import millify from 'millify';

const VideoCard = ({ video }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="cursor-pointer">
      {/* Video Part */}
      <div>
        <img
          src={
            isHover && video.richThumbnail
              ? video.richThumbnail[0].url
              : video.thumbnail[0].url
          }
          className="w-full h-full rounded-lg"
          alt=""
        />
      </div>

      {/* Videos information Part */}
      <div className="flex gap-4 mt-5 ">
        <img
          className="w-14 h-14 rounded-full cursor-pointer"
          src={video.channelThumbnail && video.channelThumbnail[0].url}
          alt="channel logo"
        />
        <div className="">
          <h4 className="font-bold line-clamp-2">{video.title}</h4>
          <p>{video.channelTitle}</p>
          <div className="flex gap-2">
            <p className="flex gap-1">
              <span>{millify(video.viewCount)}</span>
              <span> Goruntulenme</span>
            </p>
            |<p>{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;