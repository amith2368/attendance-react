import React, {useState, useEffect} from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

function Home() {

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        console.log(name + value);
        setUser((prevUser) => {
            return {
                ...prevUser,
                [name]: value
            };
        });
    }

    function checkLogin(event) {
        event.preventDefault();
        axios.post(`/loginCheck`, { user })
        .then(response => {
            if (response.data.redirect === '/') {
                window.location = "/dashboard";
            } else if (response.data.redirect === '/login') {
                window.location = "/login";
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    return (
        <div className="home">
        <div class="container">
            <div class="row align-items-center my-5">
            <div class="col-lg-7">
                <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
                />
            </div>
            <div class="col-lg-5">
                <h1 class="font-weight-light">Login in to your Account {user.username}</h1>
                <form onSubmit={checkLogin}>
                    <input 
                    class="form-control"
                    name="username" 
                    onChange={handleChange}
                    placeholder="Enter your username"
                    value={user.username}></input>
                    <br />
                    <input 
                    class="form-control"
                    type="password" 
                    name="password" 
                    placeholder="Enter your password"
                    onChange={handleChange}
                    value={user.password}></input>
                    <br />
                <button class="btn btn-primary" type="submit">Login</button>
                </form>
            </div>
        </div>
        </div>
        </div>
    );
}

export default withRouter(Home);