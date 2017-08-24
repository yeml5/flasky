import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toggle from 'material-ui/Toggle'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import {Link,withRouter,NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginToggle} from '../actions/auth'
import {logoutUser} from '../actions/auth'

class Login extends React.Component{
    render(){
        return <Link to="/login">Login</Link>
    }
}

class Logged extends React.Component{
    constructor(props){
        super(props);
        this.handleRefresh=this.handleRefresh.bind(this);
        this.handleHelp=this.handleHelp.bind(this);
        this.handleSignOut=this.handleSignOut.bind(this);
    }
    handleRefresh(event){
    }
    handleHelp(event){
    }
    handleSignOut(event){
        this.props.logout();
    }
    render(){
        return <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
            <MenuItem primaryText="Refresh" onTouchTap={this.handleRefresh}/>
            <MenuItem primaryText="Help" onTouchTap={this.handleHelp}/>
            <MenuItem primaryText="SignOut" onTouchTap={this.handleSignOut}/>
        </IconMenu>
    }}


class TopAppBar extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event,isInputChecked){
        const {dispatch,Auth }=this.props;
        this.setState({logged:isInputChecked});
        dispatch(loginToggle(isInputChecked));
        console.log(Auth.isAuthenticated);
    };
    render(){
        const {dispatch,history,Auth}=this.props;
        return <div>
            <Toggle label="logged"
                    defaultToggled={true}
                    onToggle={this.handleChange}
                    labelPosition="right"
                    style={{margin:20}}/>
            <AppBar title="Redux-learn"
                    iconElementLeft={<ul>
                        <NavLink to="/user">User</NavLink>
                        <NavLink to="/message">Message</NavLink>
                    </ul>}
                    iconElementRight={Auth.isAuthenticated?<Logged logout={()=>logoutUser(dispatch,history)}/>:<Login/>}/>
        </div>
    }
}

function mapStateToProps(state) {
    return {Auth:state.Auth}
}

export default withRouter(connect(mapStateToProps)(TopAppBar))

