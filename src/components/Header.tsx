import React from 'react';
import { Link } from './router/Link';
import './Header.scss';

export function Header() {
    return (
        <header className="Header">
            <Link to="">Home</Link>
            <Link to="analysis">Analiza</Link>
        </header>
    );
}