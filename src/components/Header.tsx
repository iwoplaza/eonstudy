import React, { useState } from 'react';
import { Link } from './router/Link';
import './Header.scss';
import { combineClasses } from '../helpers/classNameHelper';
import { subjects } from '../subjects';


export function Header() {
    const [ droppedDown, setDroppedDown ] = useState(false);

    return (
        <header className="Header">
            <h1>Eon<strong>Study</strong></h1>
            <button type="button" className={combineClasses({
                "Header-burger-toggle": true,
                'toggled': droppedDown,
            })} onClick={() => setDroppedDown(!droppedDown)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="Header-menu">
                <div className="Header-links" onClick={ () => setDroppedDown(false) }>
                    <Link to="">Home</Link>
                    {subjects.map(s => (
                        <Link to={s.pageKey}>{s.name}</Link>
                    ))}
                </div>
            </div>
        </header>
    );
}