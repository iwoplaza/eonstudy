import React from 'react';
import MathJax from 'react-mathjax2';

export interface ComplexTextParams {
    text: string,
}

export function ComplexText({ text }: ComplexTextParams) {
    let content: React.ReactNode[] = [];

    let textMode = true;
    let mathNodeKey = 0;
    while (text !== '') {
        let deliPos = text.indexOf('$$');
        if (deliPos === -1) {
            deliPos = text.length;
        }

        if (textMode) {
            content.push(text.substr(0, deliPos));
        } else {
            content.push(<MathJax.Node inline key={mathNodeKey++}>{ text.substr(0, deliPos) }</MathJax.Node>);
        }

        text = text.substr(deliPos + 2);

        textMode = !textMode;
    }


    return <p className="ComplexText">{ content }</p>;
}