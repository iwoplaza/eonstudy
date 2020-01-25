import React from 'react';
import './App.scss';
import { AnalysisQuiz } from './components/analysis/quiz/analysisQuiz';
import { Footer } from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="App">
            <main className="App-main-content">
                <AnalysisQuiz></AnalysisQuiz>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;
