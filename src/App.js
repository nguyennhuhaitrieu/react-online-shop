import React, {Component} from 'react';
import Footer from './Components/Footer';
import MainMenu from './Components/MainMenu';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import Home from './pages/Home/index';
import About from './pages/About/index';
import Products from './pages/Products/index';
import ProductDetail from './pages/Products/ProductDetail';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/:id?" component={PageRoute}/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/product/:id" component={ProductDetailRoute}/>
                    <Route path="/about" component={About}/>
                    <Footer/>
                </div>

            </Router>
        );
    }
}

const ProductDetailRoute = ({match}) => (
    <div>
        <ProductDetail id={match.params.id}/>
    </div>
)


const PageRoute = ({match}) => (
    <div>
        <MainMenu activeItem={match.params.id != null ? match.params.id : "home"}/>
    </div>
)

export default App;
