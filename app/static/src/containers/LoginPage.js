import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import LoginForm from '../components/LoginForm'
import RegisterDialog from '../components/RegisterDialog'

class LoginPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {history}=this.props;
        return <div>
            <h1>abcd</h1>
                <LoginForm history={history}/>
                <RegisterDialog/>
            </div>
    }
}

export default LoginPage;
