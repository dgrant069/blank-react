import React from 'react';
import Axios from 'axios';

function getRepos(){
    Axios.get("./data.json")
        .then(function(data){
            console.log(data);
        })
        .catch(function(error) {
            console.log(error);
        })
}
getRepos();

const Home = () => (
    <h1>Hello world!</h1>
);

export default Home;