"use strict";

var React = require('react');

var Home = React.createClass({
    render: function () { 
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administratoion </h1>
                <p>React, react router, and Flux for ultra reponsive web apps.</p>            
            </div>
        );
    }
});
module.exports = Home;