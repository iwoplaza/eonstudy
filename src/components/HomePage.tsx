import React, { useState, useEffect } from 'react';
import { Link } from './router/Link';
import './HomePage.scss';
import { subjects } from '../subjects';


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
            <h1 className="HomePage__title">Eon<strong>Study</strong></h1>
            <p className="HomePage__message">Powodzenia na Sesji!</p>
            <div className="HomePage__subpages">
                {subjects.map(s => (
                    <Link to={s.pageKey}>{s.name}</Link>
                ))}
            </div>
        </div>
    );
}