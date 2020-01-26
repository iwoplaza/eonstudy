import React from 'react';
import MathJax from 'react-mathjax2';
import './formulaSection.scss';
import { Canvas } from '../canvas';

// const ascii = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))';
const color1 = '\\color{#00aaff}';
const color2 = '\\color{#00ffaa}';
const ascii = `${color1}{V} + ${color2}{U} = (${color1}{x_(V)} + ${color2}{x_(U)}, ${color1}{y_(V)} + ${color2}{y_(U)}, ${color1}{z_(V)} + ${color2}{z_(U)})`;

export function FormulaSection() {
    return (
        <div className="FormulaSection">
            <div className="FormulaSection-header">
                <h1>Vector addition</h1>
            </div>
            <Canvas />
            <div className="FormulaSection-formula">
                <MathJax.Context input="ascii">
                        <MathJax.Node inline>{ ascii }</MathJax.Node>
                </MathJax.Context>
            </div>
        </div>
    );
}