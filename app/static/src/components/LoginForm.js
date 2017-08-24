import React from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {Field,reduxForm,formValueSelector} from 'redux-form'
import {renderTextField,renderPasswordField,renderCheckbox} from './form/renderField'
import {loginUser} from '../actions/auth'

const validate = values => {
    const errors = {};
    const requiredFields = [
        'email',
        'password',
        'remember'
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    });
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }
    return errors
};

class LoginForm extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <form>
            <div>
                <Field name="email" component={renderTextField} label="email"/>
            </div>
            <div>
                <Field name="password" component={renderPasswordField} label="password"/>
            </div>
            <div>
                <Field name="remember" component={renderCheckbox} label="remember"/>
            </div>
            <div>
                <RaisedButton type="button" onTouchTap={this.handleSubmit.bind(this)}>Submit</RaisedButton>
            </div>
        </form>
    }
    handleSubmit(event) {
        const {email,password,remember,dispatch,history}=this.props;
        const loginform={email:email,password:password,remember:remember};
        console.log(loginform);
        loginUser(loginform,dispatch,history);
    }
}

const selector= formValueSelector("LoginForm");
const form=reduxForm({form:"LoginForm",validate})(LoginForm);

function mapStateToProps(state) {
    return selector(state,"email","password","remember");
}

export default connect(mapStateToProps)(form) ;