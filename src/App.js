import React from 'react';
import MealList from './components/MealList';
import Header from './components/Header';
import Router from './pages/Router';

const App = () => {
    return (
        <div className="App">
            <div className='container mx-auto p-2 flex flex-col h-screen'>
                <Header />
                <MealList />
                <Router />
            </div>
        </div>
    );
};

export default App;