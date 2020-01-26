import React from 'react';
import './TheoremPanel.scss';
import { Theorem } from '../../types/theorem';
import { ComplexText } from '../ComplexText';
import MathJax from 'react-mathjax2';

export interface TheoremPanelParams {
    theorem: Theorem,
}

export function TheoremPanel({ theorem }: TheoremPanelParams) {
    const prereqElements = theorem.prereqs ? theorem.prereqs.map((prereq, index) => (
        <li key={index}>
            <ComplexText text={typeof(prereq) === 'string' ? prereq : prereq[0]} />
        </li>
    )) : [];
    
    return (
        <MathJax.Context input="ascii" options={ {
            asciimath2jax: {
                useMathMLspacing: true,
                delimiters: [[ "$$","$$" ]],
                preview: "none",
            }
        } }>
            <div className="TheoremPanel">
                <h1 className="TheoremPanel-name">
                    { theorem.name }
                </h1>
                <div className="TheoremPanel-prereqs-header">Zał:</div>
                <ul className="TheoremPanel-prereqs">
                    { prereqElements }
                </ul>
                <div className="TheoremPanel-thesis-header">Teza:</div>
                <div className="TheoremPanel-thesis">
                    {
                        theorem.thesis.map((line, index) => (<div key={index}>
                            <ComplexText text={line} />
                        </div>))
                    }
                </div>
            </div>
        </MathJax.Context>
    )
};