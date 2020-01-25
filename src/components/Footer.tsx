import React from 'react';
import './Footer.scss';

export const Footer: React.FC = () => (
    <footer className="Footer">
        <p className="Footer-made-by">
            Made by&nbsp;
            <a
                href="https://github.com/iwoplaza"
                target="_blank"
                rel="noopener noreferrer"
            >
                Iwo Plaza
            </a>
        .
        </p>
    </footer>
);