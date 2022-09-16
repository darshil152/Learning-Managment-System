import React, { Component } from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Form from './form';
import Table from './table';

export default class Routercontainer extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Form />}> </Route>
                    <Route path="/form/:id" element={<Form />}> </Route>
                    <Route path="/form" element={<Form />}> </Route>
                    <Route path="/table" element={<Table />}> </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}