import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from '../src/reducers/reducers';
import { BrowserRouter,Route,Redirect} from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import UserPage from'./containers/UserPage'
import MessagePage from './containers/MessagePage'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import TopAppBar from './containers/TopAppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';
import createBrowserHistory from 'history/createBrowserHistory';

injectTapEventPlugin();

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}
export let store= createStore(reducers,applyMiddleware(...middleware));

function UserRoute({ component: Component,...rest}){
            return <Route {...rest} render={props => (
                store.getState().Auth.isAuthenticated ? (
                    <Component {...props}/>
                ):(
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}/>
                )
            )}/>;
}

function MessageRoute({ component: Component,...rest}){
            return <Route {...rest} render={props => (
                store.getState().Auth.isAuthenticated ? (
                    <Component {...props}/>
                ):(
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}/>
                )
            )}/>;
}

const history = createBrowserHistory();
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <div>
                <MuiThemeProvider>
                    <div>
                        <TopAppBar/>
                        <Route path="/login" component={LoginPage}/>
                        <UserRoute path="/user" component={UserPage}/>
                        <MessageRoute path="/message" component={MessagePage}/>
                    </div>
                </MuiThemeProvider>
            </div>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

