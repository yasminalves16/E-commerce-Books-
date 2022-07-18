import { Route, Switch } from "react-router-dom";

import Signup from "../pages/signupPage"
import CartPage from "../pages/cartPage"
import DashboardPage from "../pages/dashboardPage"
import HomePage from "../pages/homePage"
import LoginPage from "../pages/loginPage"


const Routes = () => {

    return (

        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>

            <Route exact path="/cart">
                <CartPage />
            </Route>

            <Route exact path="/signup">
                <Signup />
            </Route>

            <Route exact path="/dashboard">
                <DashboardPage />
            </Route>

            <Route exact path="/login">
                <LoginPage />
            </Route>

        </Switch>
    )
}

export  default Routes