import React, { Component } from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Form from './form';
import Table from './table';
import View from './view';
import Login from './login';

export default class Routercontainer extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Form />}> </Route>
                    <Route path="/login" element={<Login />}> </Route>
                    <Route path="/view/:id" element={<View />}> </Route>
                    <Route path="/form/:id" element={<Form />}> </Route>
                    <Route path="/form" element={<Form />}> </Route>
                    <Route path="/table" element={<Table />}> </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}