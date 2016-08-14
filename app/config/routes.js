/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 14/06/2016
 * Time: 15:23
 */
import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import Main  from '../components/App.js'
import Signup from '../components/Auth/Signup'
import Login from '../components/Auth/Login'
import Password from '../components/Auth/Password'
import PasswordReset from '../components/Auth/PasswordReset'
import ActorList from '../components/ActorList/ActorList'
import Home from '../components/Home'
import EditProfile from '../components/Profile/EditProfile'
import EditImages from '../components/Profile/EditImages'


module.exports = (
    <Route path="/" component={Main}>

        /* Auth Routes*/
        <Route path="/login" component={Login}/>
        <Route path="/signup" router={Router} component={Signup}/>
        <Route path="/password/reset/:userId/:code" component={PasswordReset}/>
        <Route path="/password" component={Password}/>
        <Route path="/profile/edit" component={EditProfile} />
        <Route path="/profile/edit/images" component={EditImages} />
       

        <IndexRoute component={ActorList}/>

    </Route>
);

