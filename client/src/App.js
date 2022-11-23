import './App.css';
import { createContext, useState } from 'react'
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('dark');
  //toggles the theme when it is called
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>  
    <div id={theme}>
      <h1>helloworld</h1>
      <div className='switch'>
        <label> {theme === 'light' ? 'Light Mode' : 'Dark Mode'} </label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
