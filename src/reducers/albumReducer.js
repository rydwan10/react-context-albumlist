import { v4 as uuidv4 } from 'uuid';

export const albumReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ALBUM':
            return [...state, { id: uuidv4(), title: action.album.title, artist: action.album.artist}];
        case 'DELETE_ALBUM':
            return state.filter(album => album.id !== action.id);
        case 'CLEAR_ALL_ALBUM':
            return []
        default:
            return state;
    }
}
