import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../../utils/api';
import ReactPlayer from 'react-player';
import ChannelInfo from './ChannelInfo';
import VideoInfo from './VideoInfo';
import Comments from './Comments';
import VideoCard from '../../components/VideoCard';

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null);

  // Arama yapilan parametrelere erisim icin kullanilir
  const [searchParams] = useSearchParams();

  // URL'den "v" isimli parametreye eristik
  const id = searchParams.get('v');

  // id'si bilinen videonun bilgilerini apiden al
  useEffect(() => {
    api.get(`/video/info?id=${id}&extend=1`).then((res) => setVideo(res.data));
    api.get(`/comments?id=${id}`).then((res) => setComments(res.data));
  }, []);

  return (
    <div className="detail-page">
      <div className="h-[50vh] lg:h-[60vh] rounded-md overflow-hidden">
        <ReactPlayer
          controls
          width={'100%'}
          height={'100%'}
          url={`https://www.youtube.com/watch?v=${id}`}
        />
      </div>

      {!video && <p>Yukleniyor...</p>}
      {video && (
        <>
          <h1 className="my-3 text-xl font-bold">{video.title}</h1>
          <ChannelInfo />
          <VideoInfo />
          <Comments />
        </>
      )}

      <div>
        {video?.relatedVideos.data.map(
          (item) =>
            item.type === 'video' && (
              <VideoCard key={item.videoId} video={item} />
            )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
