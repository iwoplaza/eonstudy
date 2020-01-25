import React, { useState, useEffect } from 'react';
import MathJax from 'react-mathjax2';
import { QuizQuestion, generateQuestion } from '../../../quiz/questionGenerator';
import { ComplexText } from '../../ComplexText';
import { QuizOptionComponent } from './QuizOptionComponent';
import './QuizQuestionPanel.scss';

export function QuizQuestionPanel() {
    const [ question, setQuestion ] = useState<QuizQuestion>();
    const [ selectedAnswer, setSelectedAnswer ] = useState<number>(-1);

    const onAnswerSelected = (option: number) => {
        setSelectedAnswer(option);
    };

    const onNextQuestion = () => {
        setSelectedAnswer(-1);
        (async () => {
            setQuestion(await generateQuestion());
        })();
    };

    useEffect(() => {
        (async () => {
            setQuestion(await generateQuestion());
        })();
    }, []);

    if (!question)
        return (<div className="QuizQuestionPanel"></div>);

    return (
        <MathJax.Context input="ascii" options={ {
            asciimath2jax: {
                useMathMLspacing: true,
                delimiters: [[ "$$","$$" ]],
                preview: "none",
            }
        } }>
        <div className="QuizQuestionPanel">
            <div className="QuizQuestionPanel-question">
                { question.desc.map((line, index) => <ComplexText key={index} text={line} />) }
            </div>
            <div className="QuizQuestionPanel-options">
                {
                    question.options.map((q, index) => (
                        <QuizOptionComponent
                            key={index}
                            desc={q.desc}
                            onClick={() => onAnswerSelected(index)}
                            correct={selectedAnswer != -1 && index == question.correctOption}
                            wrong={selectedAnswer == index && selectedAnswer != question.correctOption}
                        />
                    ))
                }
            </div>
            <button type="button" className="QuizQuestionPanel-next-button" onClick={onNextQuestion}>Następne pytanie</button>
        </div>
        </MathJax.Context>
    );
}