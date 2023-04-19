import { useParams } from 'react-router-dom';
import { Loader } from '../components';

import { useGetSongDetailsQuery } from '../redux/services/shazamCore';

const SongDetails = () => {
    const { songid } = useParams();
    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery(songid);
  
    if (isFetchingSongDetails) {
        return <Loader title="Searching song details" />;
    }

    return (
        <div className="flex flex-col">

            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

                <div className="mt-5">
                    {songData?.sections[1].type === 'LYRICS' ? (
                        songData?.sections[1].text.map((line, i) => (
                            <p
                                key={`lyrics-${line}-${i}`}
                                className="text-gray-400 text-base my-1"
                            >
                                {line}
                            </p>
                        ))
                    ) : (
                        <p className="text-gray-400 text-base">Sorry, no lyrics found!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SongDetails;
