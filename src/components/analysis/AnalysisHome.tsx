import React from 'react';
import { Route } from '../router/Route';
import { AnalysisQuiz } from './quiz/AnalysisQuiz';
import { TheoremList } from './TheoremList';
import { Link } from '../router/Link';
import './AnalysisHome.scss';
import { SectionLink } from '../SectionLink';

export function AnalysisHome() {
    return (
        <div className="AnalysisHome">
            <Route page="analysis" component={(<div className="AnalysisHome-subpage-links">
                <SectionLink to="analysis/list">Lista twierdzeń</SectionLink>
                <SectionLink to="analysis/quiz">Quiz</SectionLink>
            </div>)} />
            <Route page="analysis/list" component={<TheoremList />} />
            <Route page="analysis/quiz" component={<AnalysisQuiz />} />
        </div>
    );
}