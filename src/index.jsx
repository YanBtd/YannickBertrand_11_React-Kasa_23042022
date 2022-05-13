import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Fiche from './pages/Fiche-logement/Fiche.js';
import Header from './components/Header';
import Footer from './components/Footer';
import APropos from './pages/A-Propos';
import NotFound from './components/NotFound';
import { createGlobalStyle } from 'styled-components';

const container = document.getElementById('root');
const root = createRoot(container);

const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    /* font-family: 'DM Sans', sans-serif; */
}

*,
*:before,
*:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

root.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/logement/:id" element={<Fiche />} />
                <Route path="/a-propos" element={<APropos />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);
