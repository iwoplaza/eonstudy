import React, { useState, useEffect } from 'react';
import './IntegralList.scss';
import { Integral } from '../../types/integral';
import { getIntegrals } from '../../services/integralService';
import MathJax from 'react-mathjax2';

export function IntegralList() {
    const [ integrals, setIntegrals ] = useState<Integral[]>([]);

    useEffect(() => {
        (async () => {
            setIntegrals(await getIntegrals());
        })();
    }, []);

    const integralList = integrals.map((x, index) => (
        <div key={index}>
            <MathJax.Node inline>{ `int ${x[0]}dx = ${x[1]}` }</MathJax.Node>
        </div>
    ));

    return (
        <MathJax.Context input="ascii" options={ {
            asciimath2jax: {
                useMathMLspacing: true,
                delimiters: [[ "$$","$$" ]],
                preview: "none",
            }
        } }>
        <div className="IntegralList">
            <div className="IntegralList-list">
                { integralList }
            </div>
        </div>
        </MathJax.Context>
    );
}