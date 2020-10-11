import React, { useContext } from 'react'
import './css/AlbumDetail.css';
import x from './svg/x.svg';

import { AlbumContext } from '../contexts/AlbumContext';

const AlbumDetail = ({ album }) => {
    const { dispatch } = useContext(AlbumContext);
    
    const handleDelete = () => {
        dispatch({type: 'DELETE_ALBUM', id: album.id})
    }
    return (
        <div className="album-card">
            <div className="album-title">
                <h3>{album.title}</h3>
                <p>{album.artist}</p>
            </div>
            <div className="delete-button" onClick={handleDelete}>
                <img src={x} alt="x" />
            </div>
        </div>
    )
}

export default AlbumDetail
