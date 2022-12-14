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
import Welcome from './welcome';
import Login2 from './login2';
import Profile from './profile';
import Popup from './popup';
import Attandance from './attandance';
import Test from './test';
import Forgitpassword from './forgitpassword';
import Newpassword from './newpassword';



export default class Routercontainer extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Form />}> </Route>
                    <Route path="/test" element={<Test />}> </Route>

                    <Route path="/newpass" element={<Newpassword />}> </Route>
                    <Route path="/newpass/:id" element={<Newpassword />}> </Route>

                    {/* <Route path="/forgot/:id" element={<Forgitpassword />}> </Route> */}
                    <Route path="/forgot" element={<Forgitpassword />}> </Route>


                    <Route path="/popup" element={<Popup />}> </Route>
                    <Route path="/attandance" element={<Attandance />}> </Route>
                    <Route path="/profile" element={<Profile />}> </Route>
                    <Route path="/login2" element={<Login2 />}> </Route>
                    <Route path="/login" element={<Login />}> </Route>
                    <Route path="/view/:id" element={<View />}> </Route>
                    <Route path="/form/:id" element={<Form />}> </Route>
                    <Route path="/form" element={<Form />}> </Route>
                    <Route path="/table" element={<Table />}> </Route>
                    <Route path="/welcome" element={<Welcome />}> </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}
