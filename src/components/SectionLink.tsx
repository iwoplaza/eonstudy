import React from 'react';
import './SectionLink.scss';
import { Link } from './router/Link';

export interface SectionLinkParams {
    to: string
    children: React.ReactChild
}

export function SectionLink({ to, children }: SectionLinkParams) {
    return (
        <Link className="SectionLink" to={to}>{children}</Link>
    );
}