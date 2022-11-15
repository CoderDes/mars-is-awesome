import { useState, useEffect } from 'react';

import './styles.css';

export default function Printer({text}) {
    const [output, setOutput] = useState('');

    const calcTempo = () => {
        const x = Math.random() * 10;
        if (x > 0 && x < 4) {
            return 1;
        }
        else if (x >= 4 && x < 7) {
            return 2;
        }
        else if (x >= 7 && x <= 10) {
            return 3;
        }
    }

    const procceedText = (text) => {
        let i = 0;
        let result = '';
        setTimeout(function chunk() {
        if (i >= text.length) {
            return;
        }
        const charPerTime = calcTempo();
        result = result.concat(text.slice(i, i + charPerTime));
        setOutput(result);
        i += charPerTime;
        setTimeout(chunk, 300);
        }, 0);
    }

    useEffect(() => {
        procceedText(text);
    }, []);

    return <span className="printer">{output}</span>;
}