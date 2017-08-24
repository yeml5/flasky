import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


class PageBar extends React.Component{
    pageUp(){}
    pageDown(){}
    render(){
        return  <div>
            <RaisedButton type="button" onTouchTap={this.pageUp.bind(this)}>PageUp</RaisedButton>
            <RaisedButton type="button" onTouchTap={this.pageDown.bind(this)}>PageDown</RaisedButton>
        </div>
    }
}
export default PageBar;
