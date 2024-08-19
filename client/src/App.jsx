import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import AdminPanel from './components/Admin';

const App = () => {
    return (
        <Router>
            <div className="App">
                <header className="bg-gray-900 p-4 text-white text-center">
                    <h1 className="text-4xl font-bold">My Portfolio</h1>
                </header>
                <main className="p-4">
                    <Routes>
                        <Route path="/admin" element={<AdminPanel />} />
                        <Route path="/" element={<Portfolio />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
