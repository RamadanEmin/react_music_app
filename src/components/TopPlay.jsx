import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import "swiper/css";
import "swiper/css/free-mode";

const TopPlay = () => {
    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    });

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
                </div>
            </div>
        </div>
    );
};

export default TopPlay;
