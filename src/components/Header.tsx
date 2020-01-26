import React from 'react';
import { Link } from './router/Link';
import './Header.scss';

export function Header() {
    return (
        <header className="Header">
            <h1>EonStudy</h1>
            <Link to="">Home</Link>
            <Link to="analysis">Analiza</Link>
            <Link to="algebra">Algebra</Link>
        </header>
    );
}