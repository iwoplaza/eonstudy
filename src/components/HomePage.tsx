import React from 'react';
import { Link } from './router/Link';
import './HomePage.scss';

export function HomePage() {
    return (
        <div className="HomePage">
            <h1 className="HomePage-title">Eon<strong>Study</strong></h1>
            <div className="HomePage-subpages">
                <Link to="analysis">Analiza</Link>
                <Link to="algebra">Algebra</Link>
            </div>
        </div>
    );
}