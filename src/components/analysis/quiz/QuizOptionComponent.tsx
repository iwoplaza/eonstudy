import React from 'react';
import { ComplexText } from '../../ComplexText';
import './QuizOptionComponent.scss';
import { combineClasses } from '../../../helpers/classNameHelper';

export interface QuizOptionParams {
    desc: string[]
    onClick?: () => void
    correct: boolean
    wrong: boolean
}

export function QuizOptionComponent({ desc, onClick, correct, wrong }: QuizOptionParams) {
    return (
        <div className={combineClasses({
            QuizOptionComponent: true,
            correct,
            wrong,
        })} onClick={onClick}>
            { desc.map((line, index) => <ComplexText key={index} text={line} />) }
        </div>
    );
}