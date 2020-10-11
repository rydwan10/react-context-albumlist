import React, { createContext, useReducer } from 'react'
import {v4 as uuidv4} from 'uuid';
import {albumReducer} from '../reducers/albumReducer';

export const AlbumContext = createContext();

const AlbumContextProvider = (props) => {
    const [albums, dispatch] = useReducer(albumReducer, [
        { id: uuidv4(), title: 'Sempiternal', artist: 'Bring Me The Horizon' },
        // { id: uuidv4(), title: 'Fever', artist: 'Bullet For My Valentine' },
    ])

    return (
        <AlbumContext.Provider value={{ albums, dispatch }}>
            { props.children }
        </AlbumContext.Provider>
    )
}

export default AlbumContextProvider
