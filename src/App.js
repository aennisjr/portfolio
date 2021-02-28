import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Kebanas from './components/Kebanas'

import Landing from './components/Landing'

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />

                <Route exact path="/" component={Landing} />

                <div className="site-content">
                	<Route exact path="/contact" component={Contact} />
                	<Route exact path="/kebanas" component={Kebanas} />
                </div>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
