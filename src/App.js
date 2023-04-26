import {Routes, Route} from "react-router-dom";
import Home from "./routes/home.component";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
    return (<div>I am a Shop page</div>)
}

const App = () => {
    return(
        <Routes>
            <Route path="/"  element={<Navigation />}>
                <Route index={true} element={<Home/>} />
                <Route path="shop" element={<Shop />} />
            </Route>
        </Routes>
    )
}

export default App;