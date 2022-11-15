import { useEffect, useState } from 'react';

import { createObscuredStrOfLen } from '../services/stringService'; 

export default function Loader() {
    const LOADER_LEN = 3;
    const INTERVAL_MS = 500;
    const [counter, setCounter] = useState(LOADER_LEN);

    useEffect(() => {
        let loaderCounter = LOADER_LEN;
        let intervalId = setInterval(() => {
            if (loaderCounter === 0) {
                loaderCounter = LOADER_LEN;
            }
            setCounter(--loaderCounter);
        }, INTERVAL_MS);

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