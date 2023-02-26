import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { usePersistedState } from './hooks/usePersistedState';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.titleTheme === 'dark' ? light : dark)
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <GlobalStyle />
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home toggleTheme={toggleTheme} />}/>
            <Route path="/rooms/new" element={<NewRoom toggleTheme={toggleTheme} />}/>
            <Route path="/rooms/:id" element={<Room toggleTheme={toggleTheme}/>}/>
            <Route path="/admin/rooms/:id" element={<AdminRoom toggleTheme={toggleTheme} />}/>
          </Routes>
        </AuthContextProvider>  
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
