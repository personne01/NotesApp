import React from "react";
import NoteList from "./NoteList";
import ArchieveList from "./ArchieveList";
import Header from "./Header";
import InputForm from "./InputForm";
import { getInitialData, showFormattedDate } from "../utils/data";
import Search from "./Search";
class NoteApp extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            
            allnotes: getInitialData(),
            notes: getInitialData().filter((dt) => dt.archived === false)
            .map((note) => ({
                ...note,
                createdAt: showFormattedDate(note.createdAt)
            })
            ),
            archieve: getInitialData().filter((dt) => dt.archived === true),
            keyword : ''
        };
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddHandler = this.onAddHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onMoveHandler = this.onMoveHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
        const archieve = this.state.archieve.filter(
            (archieved) => archieved.id !== id
        );
        this.setState({ archieve });
           
    }

    onAddHandler({ title, body }) {
        this.setState((prevState) => {
                return {
                    notes: [
                        ...prevState.notes,
                        {
                            id: +new Date(),
                            title,
                            createdAt: showFormattedDate(new Date().toISOString()),
                            body,
                            archived: false,
                        },
                    ],
                };
        });    
    }

    onArchiveHandler(id) {
        this.setState((prevState) => {
            const notesCopy = [...prevState.notes];
            const selectedNoteIdx = notesCopy.findIndex(
                (note) => note.id === id
            );

            const selectedNote = notesCopy.splice(selectedNoteIdx, 1)[0];
            selectedNote.archived = true;

            return {
                notes: [...prevState.notes.filter((note) => note.id !== id)],
                archieve: [...prevState.archieve, selectedNote],
            };
        });
    }
    onMoveHandler(id) {
        this.setState((prevState) => {
            const notesCopy = [...prevState.archieve];
            const selectedNoteIdx = notesCopy.findIndex(
                (note) => note.id === id
            );

            const selectedNote = notesCopy.splice(selectedNoteIdx, 1)[0];
            selectedNote.archived = false;

            return {
                archieve: [...prevState.archieve.filter((note) => note.id !== id)],
                notes: [...prevState.notes, selectedNote],
            };
        });
    }
    onSearchHandler(SearchKey){
        this.setState((prevState) => {
            return {
                ...prevState,
                keyword : SearchKey
            }
       })
       this.updateSearch(this.state.keyword);
    }
    updateSearch(keyword){
        const getNotes= this.state.notes.filter((dt) => dt.title.includes(keyword) === true);
        const getArchieve= this.state.archieve.filter((dt) => dt.title.includes(keyword) === true);
        console.log(getNotes);
        console.log(getArchieve);
    }

    render() {
        return (
            <div className="note-app">
                <Header />
                <InputForm
                    addNote={this.onAddHandler} 
                />
                <Search onSearch = {this.onSearchHandler} value={this.state.keyword}/>
                <NoteList
                    notes={this.state.notes.filter((dt) => dt.title.toLowerCase().includes(this.state.keyword.toLowerCase()) === true)}
                    onArchive={this.onArchiveHandler}
                    onDelete={this.onDeleteHandler}
                />
                <ArchieveList
                    notes={this.state.archieve.filter((dt)=> dt.title.toLowerCase().includes(this.state.keyword.toLowerCase()) === true)}
                    onDelete={this.onDeleteHandler}
                    onMove={this.onMoveHandler}
                />
            </div>
        );
    }
}
export default NoteApp;
