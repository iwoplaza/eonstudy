import React, { useState, useEffect } from 'react';
import MathJax from 'react-mathjax2';
import { QuizQuestion, generateQuestion } from '../../../quiz/questionGenerator';
import { ComplexText } from '../../ComplexText';
import { QuizOptionComponent } from './QuizOptionComponent';
import './QuizQuestionPanel.scss';

export function QuizQuestionPanel() {
    const [ question, setQuestion ] = useState<QuizQuestion>();
    const [ selectedAnswer, setSelectedAnswer ] = useState<number>(-1);
    const [ questionsAnswered, setQuestionsAnswered ] = useState<number>(0);
    const [ score, setScore ] = useState<number>(0);

    const onAnswerSelected = (option: number) => {
        if (selectedAnswer === -1) {
            setSelectedAnswer(option);
            setQuestionsAnswered(questionsAnswered + 1);

            if (option === question?.correctOption) {
                setScore(score + 1);
            }
        }
    };

    const onNextQuestion = () => {
        if (selectedAnswer === -1) {
            setQuestionsAnswered(questionsAnswered + 1);
        }
        setSelectedAnswer(-1);

        (async () => {
            setQuestion(await generateQuestion());
        })();
    };

    const displayedScore = () => questionsAnswered === 0 ? '' : `${score} / ${questionsAnswered} (${Math.floor(score/questionsAnswered*100)}%)`;

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
                            correct={selectedAnswer !== -1 && index === question.correctOption}
                            wrong={selectedAnswer === index && selectedAnswer !== question.correctOption}
                        />
                    ))
                }
            </div>
            <div className="QuizQuestionPanel-score">
                { displayedScore() }
            </div>
            <button type="button" className="QuizQuestionPanel-next-button" onClick={onNextQuestion}>Następne pytanie</button>
        </div>
        </MathJax.Context>
    );
}