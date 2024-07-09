import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from './Pages/Welcome';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { GlobalContextProvider } from './Context/GlobalContext';

function App() {

  return (
    <div className={styles.welcomePageLayout}>
      <GlobalContextProvider>
        <Router>
          <Routes>
            <Route path = "/" element = {<Welcome/>}></Route>
            <Route path = "/register" element = {<Register/>}></Route>
            <Route path = "/login" element = {<Login/>}></Route>
            <Route path = "/home" element = {<Home/>}></Route>
          </Routes>
        </Router>
      </GlobalContextProvider>
    </div>
  )
}

export default App
