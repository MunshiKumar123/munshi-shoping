import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Style from "./Style.css";
import Footer from "./Footer";
import Products from "./Products";
import ProductDetail from "./ProductDetail";

import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {

    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route path="/products" component={Products} />
                <Route path="/productdetail/:n" component={ProductDetail} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/navbar" component={Navbar} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </>
    )
}

export default App;