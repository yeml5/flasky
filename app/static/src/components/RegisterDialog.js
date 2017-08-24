import React from 'react'
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Field,reduxForm,formValueSelector} from'redux-form'
import {renderTextField,renderPasswordField,registervalidate} from './form/renderField'
import {registerUser} from '../actions/auth'

export const validate=values=>{
    const errors = {};
    const requiredFields = [
        'email',
        'username',
        'password',
        'confirm',
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'}
        });
    if (values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {errors.email = 'Invalid email address'}
    else if(values.password!==values.confirm
    ){errors.confirm='password must be same'}
    return errors;
};

class RegisterDialog extends  React.Component{
    constructor(props){
        super(props);
        this.state={open:false};
    }
    handleOpen() {
        this.setState({open: true});
    }
    handleCancel(){
        this.setState({open: false});
    }
    handleSubmit(){
        const {email,username,password,dispatch}=this.props;
        console.log(email+''+username+''+password);
        const registerdialog={email:email,username:username,password:password};
        registerUser(registerdialog,dispatch);
        this.setState({open:false});
    }
    render(){
        const actions = [
            <FlatButton label="Cancel" primary={true} onTouchTap={this.handleCancel.bind(this)}/>,
            <FlatButton label="Submit" primary={true} onTouchTap={this.handleSubmit.bind(this)}/>];
        return <div>
            <RaisedButton label="Register" onClick={this.handleOpen.bind(this)}/>
            <Dialog title="Register" actions={actions} modal={true} open={this.state.open}>
                <form >
                    <div>
                        <Field name="email" component={renderTextField} label="email"/>
                    </div>
                    <div>
                        <Field name="username" component={renderTextField} label="username" />
                    </div>
                    <div>
                        <Field name="password" component={renderPasswordField} label="password" />
                    </div>
                    <div>
                        <Field name="confirm" component={renderPasswordField} label="confirm"/>
                    </div>
                </form>
            </Dialog>
        </div>;
    }
}
const selector= formValueSelector("RegisterDialog");
const form=reduxForm({form:"RegisterDialog",validate})(RegisterDialog);

function mapStateToProps(state) {
    return selector(state,"email","username","password");
}

export default connect(mapStateToProps)(form);
