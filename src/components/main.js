import React, { Component } from 'react';
import Header from './widgets/header/header'
import Footer from './widgets/footer/footer'

let test = fetch("./data.json").then(function(response) {
    return response.clone().json().catch(function() {
        return response.text();
    });
});

const Main = ({children}) => {
    return (
        <div className="app-wrapper">
            <Header />
            <section className="main-content">
                {children}
            </section>
            <Footer />
        </div>
    )
};

export default Main;