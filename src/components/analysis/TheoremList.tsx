import React, { useState, useEffect } from 'react';
import { TheoremPanel } from './TheoremPanel';
import { Theorem } from '../../types/theorem';
import { getTheorems } from '../../services/theoremService';
import './TheoremList.scss';

export function TheoremList() {
    const [ theorems, setTheorems ] = useState<Theorem[]>([]);

    useEffect(() => {
        (async () => {
            setTheorems(await getTheorems());
        })();
    }, []);

    const theoremList = theorems.map(theorem => (
        <TheoremPanel key={theorem.key} theorem={theorem}></TheoremPanel>
    ));

    return (
        <div className="TheoremList">
            <div className="TheoremList-list">
                { theoremList }
            </div>
        </div>
    );
}