import React, { useState, useContext } from 'react'
import './css/AddAlbum.css'
import { AlbumContext } from '../contexts/AlbumContext';

const AddAlbum = () => {

    const { dispatch } = useContext(AlbumContext);
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');

    const capitalized = (string) => {
        let lowercased = string.toLowerCase();
        let arrString = lowercased.split(' ');

        let output = "";

        arrString.forEach(el => {
            output += el.charAt(0).toUpperCase() + el.slice(1) + ' ';
        });
        return output;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.trim() === '' || artist.trim() === '') {
            alert('Album title and artist must not empty!');
        } else {
            dispatch({ type: 'ADD_ALBUM', album: { title: capitalized(title), artist: capitalized(artist) } })
            setTitle('');
            setArtist('');
        }
    }

    return (
        <div className="form-wrapper">
            <div className="add-title">
                <h3>Add Album</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="artist">Artist</label>
                <input type="text" value={ artist } onChange={ (e) => setArtist(e.target.value) }/>
                <input type="submit" value="Add Album" />
            </form>
        </div>

    )
}

export default AddAlbum
