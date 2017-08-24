import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import MessageList from '../components/MessageList'
import PageBar from '../components/PageBar/PageBar'


class MessagePage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <MessageList/>
            <PageBar/>
        </div>
    }
}

function mapStateToProps(state) {
    return{Message:state.Message}
}


export default withRouter(connect(mapStateToProps)(MessagePage));
