import React from 'react';
import './App.css';
import AddAlbum from './components/AddAlbum';
import AlbumList from './components/AlbumList';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AlbumContextProvider from './contexts/AlbumContext';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <AlbumContextProvider>
        <AlbumList />
        <AddAlbum />
      </AlbumContextProvider>
    </div>
  );
}

export default App;
