import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import ScrollToTop from './pages/ScrollToTop';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

const App = () => {
    return (
        <Router>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/hotels" element={<List />} />
                    <Route path="/hotels/:id" element={<Hotel />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </ScrollToTop>
        </Router>
    )
}

export default App