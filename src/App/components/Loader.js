import { useEffect, useState } from 'react';

import { createObscuredStrOfLen } from '../services/stringService'; 
import { LOADER } from '../constants';

export default function Loader() {
    const [counter, setCounter] = useState(LOADER.len);

    useEffect(() => {
        let loaderCounter = LOADER.len;
        let intervalId = setInterval(() => {
            if (loaderCounter === 0) {
                loaderCounter = LOADER.len;
            }
            setCounter(--loaderCounter);
        }, LOADER.intervalMs);

        return () => {
            clearInterval(intervalId);
            intervalId = null;
        }
    }, []);

    return (
        <section>
            <p style={{fontSize: '40px'}}>
                {createObscuredStrOfLen(counter)}
            </p>
        </section>
    );
}