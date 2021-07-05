import React from 'react';
import './App.scss';
import { Footer } from './components/Footer';
import { Router } from './components/router/Router';
import { Route } from './components/router/Route';
import { Header } from './components/Header';
import { SubjectPage } from './components/SubjectPage';
import { HomePage } from './components/HomePage';
import { subjects } from './subjects';


function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main className="App-main-content">
                    <Route page="" component={<HomePage />} />
                    {subjects.map(s => (
                        <Route key={s.pageKey} page={`${s.pageKey}*`} component={<SubjectPage {...s} />} />
                    ))}
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;