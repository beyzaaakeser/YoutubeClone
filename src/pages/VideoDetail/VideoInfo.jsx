import millify from 'millify';
import React, { useState } from 'react';

const VideoInfo = ({ video }) => {
  console.log(video);
  const [expand, setExpand] = useState(false);
  const text = expand
    ? video.description
    : video.description.slice(0, 300) + '...daha fazla';
  console.log(text);
  return (
    <div className="mt-4 bg-[#272727] p-2 cursor-pointer rounded hover:bg-opacity-70">
      <div className="flex gap-4 mb-2 ">
        <p className="font-bold">{millify(video.viewCount)} Goruntulenme</p>
        <p className="font-bold">
          {new Date(video.publishDate).toLocaleDateString('tr', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}
        </p>
      </div>
    </div>
  );
};

export default VideoInfo;
