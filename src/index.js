import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Se você tiver um arquivo de estilo
import App from './App'; // O componente principal do seu aplicativo

// Renderiza o componente App no elemento com id 'root'
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// Se você quiser medir o desempenho da sua aplicação, passe uma função
// para registrar os resultados (por exemplo: reportWebVitals(console.log))

