import { Route, Redirect } from "react-router-dom"
import { useStateValue } from "./StateProvider"

function PrivateRoute({component : Component, ...rest}) {
    const [{user}, dispatch] = useStateValue() 
    return (
        <Route
            {...rest}
            render={(props) => user ? <Component {...props} />
                                    : <Redirect to='/login' />
            }
        />
    )
}

export default PrivateRoute
