import React from 'react';
import { TheoremList } from './components/analysis/TheoremList';
import { IntegralList } from './components/analysis/IntegralList';
import { AnalysisQuiz } from './components/analysis/quiz/AnalysisQuiz';
import { CYKAlgorytmPage } from './components/automata/CYKAlgorytmPage';


export interface SubPageDescription {
    key: string;
    name: string;
    component: JSX.Element;
}

export interface SubjectDescription {
    pageKey: string;
    name: string;
    subPages: SubPageDescription[];
}

export const subjects: SubjectDescription[] = [
    {
        pageKey: 'analysis',
        name: 'Analiza',
        subPages: [
            {
                key: 'theorems',
                name: 'Lista twierdzeń',
                component: <TheoremList />,
            },
            {
                key: 'integrals',
                name: 'Podstawowe całki',
                component: <IntegralList />,
            },
            {
                key: 'quiz',
                name: 'Quiz',
                component: <AnalysisQuiz />,
            },
        ],
    },
    {
        pageKey: 'algebra',
        name: 'Algebra',
        subPages: [
        ],
    },
    {
        pageKey: 'automata',
        name: 'Automaty',
        subPages: [
            {
                key: 'cyk',
                name: 'Algorytm CYK',
                component: <CYKAlgorytmPage />,
            }
        ],
    },
];