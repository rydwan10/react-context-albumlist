import React, { useContext, Fragment } from 'react';
import AlbumDetail from './AlbumDetail.js';
import './css/AlbumList.css';

import { AlbumContext } from '../contexts/AlbumContext';

const AlbumList = () => {

    const { albums, dispatch } = useContext(AlbumContext);

    const handleClearAll = () => {
        if(window.confirm('Clear all album list?')) {
            dispatch({ type: 'CLEAR_ALL_ALBUM' });
        }
    }
    

    return albums.length <= 0 ? (
        <div className="no-album">
            No albums yet...
        </div>
    ) : (
            <Fragment>
                <div className="button-wrapper">
                    <button onClick={handleClearAll} className="clear-all-button">Clear All</button>
                </div>
                <div className="list-wrapper">
                    {
                        albums.map(album => {
                            return <AlbumDetail album={album} key={album.id} />
                        })
                    }
                </div>
            </Fragment>
        )
}

export default AlbumList
