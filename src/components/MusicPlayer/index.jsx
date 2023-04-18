import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { playPause } from '../../redux/features/playerSlice';
import Track from './Track';

const MusicPlayer = () => {
    const { activeSong, currentSongs, currentIndex, isActive, isPlaying } = useSelector((state) => state.player);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentSongs.length) dispatch(playPause(true));
    }, [currentIndex]);

    return (
        <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
            <Track isPlaying={isPlaying} isActive={isActive} activeSong={activeSong} />
        </div>
    );
};

export default MusicPlayer;
