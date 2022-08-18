import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { homeRoutes } from "./HomeRoutes";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templetes/HeaderLayout"
import { LoginUserProvider } from "../providers/LoginUserProvider"


export const Router = memo(() => {
    return(
        <>
        <LoginUserProvider>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/home" render={({ match: { url } }) => (
                        <Switch>
                            {homeRoutes.map((route) => (
                                <Route 
                                    key={route.path} 
                                    exact={route.exact} 
                                    path={`${url}${route.path}`}
                                >
                                        <HeaderLayout>{route.children}</HeaderLayout>
                                </Route>
                            ))}
                        </Switch>
                    )}
                />
            </Switch>
        </LoginUserProvider>
        </>
        )
})

export {}