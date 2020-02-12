import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Users from './components/Users'
import UserDetail from './components/UserDetail'



const App = () => {

    return (
        <>

            <Router>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Users" component={Users} />
                        <Route exact path="/UserDetail/:id" component={UserDetail} />
                    </Switch>
                </Router>
            
        </>
    )
}

export default App;