import React from 'react';
import './App.css';
import ComponentSearch from './components/ComponentSearch'; // Importar o componente que você criou
import RepositoryList from './components/RepositoryList';


function App() {
  return (
    <div >
      <h1>GitHub Repository Search</h1>
      <ComponentSearch />
      <RepositoryList />
    </div>
  );
}

export default App;