import {Routes, Route} from "react-router-dom";
import Home from "./routes/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
    return (<div>I am a Shop page</div>)
}

const App = () => {
    return(
        <Routes>
            <Route path="/"  element={<Navigation />}>
                <Route index={true} element={<Home/>} />
                <Route path="shop" element={<Shop />} />
                <Route path="sign-in" element={<SignIn />} />
            </Route>
        </Routes>
    )
}

export default App;