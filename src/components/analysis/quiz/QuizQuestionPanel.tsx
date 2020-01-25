import React, { useState, useEffect } from 'react';
import { getTheorems } from '../../../services/quizService';
import { Theorem } from '../../../types/theorem';
import { TheoremPanel } from '../TheoremPanel';

export function QuizQuestionPanel() {
    const [ theorems, setTheorems ] = useState<Theorem[]>([]);

    useEffect(() => {
        (async () => {
            const array = await getTheorems();
            // setTheorems(array);
            setTheorems(array.slice(array.length - 4));
        })();
    }, []);

    const theoremList = theorems.map(theorem => (
        <TheoremPanel key={theorem.key} theorem={theorem}></TheoremPanel>
    ));

    return (
        <div>
            <div>
                { theoremList }
            </div>
        </div>
    );
}