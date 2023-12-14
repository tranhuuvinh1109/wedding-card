import { useState } from 'react';
import { Howl } from 'howler';
import { FaPlay, FaPause } from 'react-icons/fa6';
import music from '../../assets/music/Nothings.mp3';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound] = useState(new Howl({ src: [music] }));

  const togglePlay = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-10 left-10 ">
      <button className="p-4 bg-primary rounded-full hover:text-content-supper text-white" onClick={togglePlay}>
        {isPlaying ? <FaPause fontSize={24} /> : <FaPlay fontSize={24} />}
      </button>
    </div>
  );
};

export default MusicPlayer;
