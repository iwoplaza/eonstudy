import React from 'react';
import './TheoremFilter.scss';

export interface TheoremFilterParams {
    categories: { name: string, checked: boolean }[]
    onCategoryChecked?: (name: string, checked: boolean) => void
}

export function TheoremFilter({ categories, onCategoryChecked }: TheoremFilterParams) {
    const handleCategoryChecked = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        if (onCategoryChecked) {
            onCategoryChecked(name, e.target.checked);
        }
    };

    const categoriesList = categories.map(cat => (
        <label key={cat.name}>
            <input type="checkbox" checked={cat.checked} onChange={e => handleCategoryChecked(e, cat.name)} />
            {cat.name}
        </label>
    ));

    return (
        <div className="TheoremFilter">
            <h1>Filtr:</h1>
            <div className="TheoremFilter-categories">
                { categoriesList }
            </div>
        </div>
    );
}