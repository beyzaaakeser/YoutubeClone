import SideBar from '../components/SideBar.jsx';
import { VideoContext } from '../context/videoContext.jsx';
import { useContext } from 'react';
import VideoCard from '../components/VideoCard.jsx';

const Feed = () => {
  const { video, error, isLoading } = useContext(VideoContext);
  console.log(video);
  return (
    <div className="flex">
      <SideBar />
      <div className="videos">
        {isLoading ? (
          <p>Yukleniyor ...</p>
        ) : error ? (
          <p>error</p>
        ) : (
          video?.map(
            (item) =>
              item.type === 'video' && (
                <VideoCard key={item.videoId} video={item} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
