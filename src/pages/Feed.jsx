import React, { useContext } from 'react';
import SideBar from '../components/SideBar';
import { VideoContext } from '../context/videoContext';

const Feed = () => {
  const { video, isLoading } = useContext(VideoContext);
  console.log(video);
  console.log(isLoading);
  return (
    <div className="flex">
      <SideBar />
      <div>Vido</div>
    </div>
  );
};

export default Feed;
