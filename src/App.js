import React from 'react';
import MealList from './components/MealList';
import Header from './components/Header';
import Router from './pages/Router';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="App flex flex-col h-screen ">
            <div className='container mx-auto p-2 flex flex-col flex-1'>
                <Header />
                <MealList />
                <Router />
            </div>

            <Footer />
        </div>
    );
};

export default App;