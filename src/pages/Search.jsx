import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Search = () => {
    const { searchTerm } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    return (
        <div className="flex flex-col ">
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10 ">
                Showing results for <span className="font-black">{searchTerm}</span>
            </h2>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                    <SongCard
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        i={i}
                    />
            </div>
        </div>
    );
};

export default Search;
