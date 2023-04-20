import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, RelatedSongs } from '../components';


const ArtistDetails = () => {
    const { id: artistId } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
   

    return (
        <div className="flex flex-col">
            <DetailsHeader artistId={artistId} />

            <RelatedSongs
                artistId={artistId}
                isPlaying={isPlaying}
                activeSong={activeSong}
            />
        </div>
    );
};

export default ArtistDetails;
