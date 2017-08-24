import React from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class UserPage extends React.Component{
    render(){
        const {Auth}=this.props;
        if(Auth.data){
        return <div>
            <p>{Auth.data.token.email}</p>
            <p>{Auth.data.token.username}</p>
            <p>{Auth.data.token.name}</p>
        </div>}
        else {
            return null;
        }
    }
}
function mapStateToProps(state){
    return {Auth:state.Auth};
}

export default withRouter(connect(mapStateToProps)(UserPage));