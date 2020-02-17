import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import { Login } from "./components/Login";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import PersistentDrawerLeft from './components/NavigationDrawe'
import {ListaDeActividades} from './components/ListaDeActividades'
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        this.setState({
            isLoggedIn: true
        });
    }
    render() {

        const LoginView = () => (
            <Login handleLogin={this.handleLogin} />
        );

        const TodoAppView = () => (
            <div>
            <PersistentDrawerLeft />
            <ListaDeActividades />
            </div>
        );
        var redirect;
        this.state.isLoggedIn===false && localStorage.getItem("isLoggedIn") === null ? redirect = <Redirect to="/" /> : redirect = <Redirect to="/todo" />;
        return (
            <Router>
                <div className="App">
                    <div>
                        {redirect}
                        <Route path="/todo" component={TodoAppView} />
                        <Route exact path="/" component={LoginView} />
                    </div>
                </div>
            </Router >
        );
    }
}
export default App;
