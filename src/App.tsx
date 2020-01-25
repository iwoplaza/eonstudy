import React from 'react';
import './App.scss';
import { Footer } from './components/Footer';
import { Router } from './components/router/Router';
import { Route } from './components/router/Route';
import { Header } from './components/Header';
import { AnalysisHome } from './components/analysis/AnalysisHome';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <main className="App-main-content">
                    <Route page="analysis*" component={<AnalysisHome />} />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
