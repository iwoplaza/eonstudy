import React, { useState, useEffect } from 'react';
import { TheoremPanel } from './TheoremPanel';
import { Theorem } from '../../types/theorem';
import { getTheorems, getCategories } from '../../services/theoremService';
import './TheoremList.scss';
import { TheoremFilter } from './TheoremFilter';

interface TheoremListFilter {
    categories: { [key: string]: boolean }
}

interface CategoryFilter {
    name: string
    checked: boolean
}

export function TheoremList() {
    const [ theorems, setTheorems ] = useState<Theorem[]>([]);
    const [ categories, setCategories ] = useState<CategoryFilter[]>([]);

    useEffect(() => {
        (async () => {
            const [ t, c ] = await Promise.all([ getTheorems(), getCategories() ]);
            setTheorems(t);
            setCategories(c.map(c => ({ name: c, checked: false })));
        })();
    }, []);

    const handleCategoryChecked = (name: string, checked: boolean) => {
        setCategories(categories.map(c => c.name === name ? ({ name, checked}) : c));
    };

    const applyFilter = (theorems: Theorem[]) => {
        return theorems.filter(t => {
            return categories.every(c => !c.checked || t.category.includes(c.name));
        });
    };

    const theoremList = applyFilter(theorems).map(theorem => (
        <TheoremPanel key={theorem.key} theorem={theorem}></TheoremPanel>
    ));

    return (
        <div className="TheoremList">
            <TheoremFilter categories={categories} onCategoryChecked={handleCategoryChecked} />
            <div className="TheoremList-list">
                { theoremList }
            </div>
        </div>
    );
}