import React from 'react';
import { Route } from '../router/Route';
import { AnalysisQuiz } from './quiz/AnalysisQuiz';
import { TheoremList } from './TheoremList';
import './AnalysisHome.scss';
import { SectionLink } from '../SectionLink';
import { IntegralList } from './IntegralList';

export function AnalysisHome() {
    return (
        <div className="AnalysisHome">
            <Route page="analysis" component={(<div className="AnalysisHome-subpage-links">
                <SectionLink to="analysis/theorems">Lista twierdzeń</SectionLink>
                <SectionLink to="analysis/integrals">Podstawowe całki</SectionLink>
                <SectionLink to="analysis/quiz">Quiz</SectionLink>
            </div>)} />
            <Route page="analysis/theorems" component={<TheoremList />} />
            <Route page="analysis/integrals" component={<IntegralList />} />
            <Route page="analysis/quiz" component={<AnalysisQuiz />} />
        </div>
    );
}