import React from 'react';
import { Route } from './router/Route';
import { SectionLink } from './SectionLink';
import { SubjectDescription } from '../subjects';
import './SubjectPage.scss';


export interface SubjectPageProps extends SubjectDescription {}

export function SubjectPage(props: SubjectPageProps) {
    return (
        <div className="SubjectPage">
            <Route page={props.pageKey} component={(
                <div className="SubjectPage__subpage-links">
                    {props.subPages.length === 0 ? (
                        <p>Brak zasobów :(</p>
                    ) : props.subPages.map(subPage => (
                        <SectionLink to={`${props.pageKey}/${subPage.key}`}>{subPage.name}</SectionLink>
                    ))}
                </div>
            )} />

            {props.subPages.map(subPage => (
                <Route page={`${props.pageKey}/${subPage.key}`} component={subPage.component} />
            ))}
        </div>
    );
}