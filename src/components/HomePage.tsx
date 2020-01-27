import React, { useState, useEffect } from 'react';
import { Link } from './router/Link';
import './HomePage.scss';

export function HomePage() {
    const [ hue, setHue ] = useState(0);

    useEffect(() => {
        let frameRequest: number = 0;
        const handler = () => {
            setHue(Date.now() * 0.02);
            frameRequest = requestAnimationFrame(() => handler());
        };
        frameRequest = requestAnimationFrame(() => handler());
        return () => cancelAnimationFrame(frameRequest);
    }, [ hue ]);

    return (
        <div className="HomePage" style={{
            backgroundColor: `hsl(${hue}, 70%, 50%)`
        }}>
            <h1 className="HomePage-title">Eon<strong>Study</strong></h1>
            <p className="HomePage-message">Powodzenia na Sesji!</p>
            <div className="HomePage-subpages">
                <Link to="analysis">Analiza</Link>
                <Link to="algebra">Algebra</Link>
            </div>
        </div>
    );
}