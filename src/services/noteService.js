import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/notes';

const getNotes = () => axios.get(API_URL);
const createNote = (note) => axios.post(API_URL, note);
const deleteNote = (id) => axios.delete(`${API_URL}/${id}`);

export { getNotes, createNote, deleteNote };