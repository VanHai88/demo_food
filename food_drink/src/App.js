import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import routes from "./routes"
import Footer from "./components/Footer/Footer"

class App extends React.Component {
    render() {
        return (
            <Router>
                <Menu />
                {this.showContentMenus(routes)}
                <Footer />
            </Router>
        );
    }

    showContentMenus = routes => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return <Route
                    key={index}
                    path={route.path}
                    exact
                    component={route.main}
                />
            })
        }
        return <Switch>{result}</Switch>
    }
}

export default App;
