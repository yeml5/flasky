import React from 'react';
import {List,ListItem} from 'material-ui/List';
import {getMessage} from '../actions/Message'

class MessageList extends React.Component{
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        getMessage()
    }
    render(){
        return <div>
            <List>
                <ListItem
                    secondaryText={"text"}
                    secondaryTextLine={2}
                />
            </List>
        </div>;
    }
}

export default MessageList
