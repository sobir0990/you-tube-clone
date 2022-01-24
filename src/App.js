import React, {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import {Route, Switch, Redirect, useHistory} from "react-router-dom";
import './_app.scss';
import {useSelector} from "react-redux";
import WatchScreen from "./screens/watchScreen/WatchScreen";


const Layout = ({children}) => {
    const [sidebar, toggleSidebar] = useState(false);
    const {accessToken, loading} = useSelector(state => state.auth);
    const history = useHistory();

    const handleToggleSidebar = () => toggleSidebar(value => !value);

    useEffect(() => {

        if (!loading && !accessToken) {
            history.push('/auth')
        }
    }, [accessToken, loading, history]);

    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar}/>
            <div className="app__container border border-info">
                <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
                <Container fluid className="app__main border border-warning">
                    {children}
                </Container>
            </div>
        </>
    )
};

const App = () => {

    return (
        <Switch>
            <Route path='/' exact>
                <Layout>
                    <HomeScreen/>
                </Layout>
            </Route>

            <Route path='/auth'>
                <LoginScreen/>
            </Route>

            <Route path='/search'>
                <h1>Search Results</h1>
            </Route>

            <Route path='/watch/:id'>
                <Layout>
                    <WatchScreen/>
                </Layout>
            </Route>

            <Route>
                <Redirect to='/'/>
            </Route>
        </Switch>
    );
};

export default App;
