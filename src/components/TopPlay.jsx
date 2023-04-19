import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import "swiper/css";
import "swiper/css/free-mode";

const TopPlay = () => {
    const { data } = useGetTopChartsQuery();
    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    });

    const topPlays = data?.slice(0, 5);

    return (
        <div
            ref={divRef}
            className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[400px] max-w-full flex flex-col"
        >
            <div className="w-full flex flex-col">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="text-white font-bold text-2xl">Top Charts</h2>
                    <Link to="/top-charts">
                        <p className="text-gray-300 text-base cursor-pointer">See more</p>
                    </Link>
                </div>
                <div className="w-full flex flex-col mt-8">
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="text-white font-bold text-2xl">Top Artists</h2>
                        <Link to="/top-artists">
                            <p className="text-gray-300 text-base cursor-pointer">See more</p>
                        </Link>
                    </div>
                    <Swiper
                        slidesPerView="auto"
                        spaceBetween={15}
                        freeMode
                        centeredSlides
                        centeredSlidesBounds
                        modules={[FreeMode]}
                        className="mt-4 "
                    >
                        {topPlays?.map((song) => (
                            <SwiperSlide
                                key={song.key}
                                style={{ width: '25%', height: 'auto' }}
                                className="shadow-lg rounded-full animate-slideright"
                            >
                                <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : ''}>
                                    <img
                                        src={song?.images?.background}
                                        alt="name"
                                        className="rounded-full w-full object-cover"
                                    />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TopPlay;
