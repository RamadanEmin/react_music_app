import { useState, useEffect } from 'react';
import axios from 'axios';

import { Error, Loader } from '../components';

const AroundYou = () => {
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('https://geo.ipify.org/api/v2/country?apiKey=at_PMWacEVViKHzZUqDNmaZQxr55DIQM')
            .then((res) => setCountry(res?.data?.location?.country))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [country]);

    if (loading) {
        return <Loader title="Loading songs around you" />;
    }

    if (country) return <Error />;

    return (
        <div className="flex flex-col ">
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10 ">
                Around You
                <span className="font-black">  - {country}</span>
            </h2>
        </div>
    );
};

export default AroundYou;
