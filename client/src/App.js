import './App.css';
import { createContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { NavBar } from "./components/NavBar"
import { SideBar } from "./components/SideBar"



export const ThemeContext = createContext(null);



function App() {
  const [theme, setTheme] = useState('dark');
  //toggles the theme when it is called
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }
  return (

    <Router>
      <div>

        <NavBar />
        <SideBar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>

      </div>
    </Router>


    // <ThemeContext.Provider value={{ theme, toggleTheme }}>  
    // <div id={theme}>
    //   <div className='switch'>
    //     <label> {theme === 'light' ? 'Light Mode' : 'Dark Mode'} </label>
    //     <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
    //   </div>
    // </div>
    // </ThemeContext.Provider>
  );
}

export default App;
