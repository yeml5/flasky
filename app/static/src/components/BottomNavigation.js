import React from 'react'
import Paper from 'material-ui/Paper'
import {BottomNavigation,BottomNavigationItem} from 'material-ui/BottomNavigation'

class BottomNavigation extends React.Component{
    constructor(props){
        super(props);
        state={selectedIndex:0};
    }
    render(){
        return <Paper zDepth={1}>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
                <BottomNavigationItem />
            </BottomNavigation>
        </Paper>
    }
}

export default BottomNavigation