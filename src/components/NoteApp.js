import React from "react";
import NoteList from "./NoteList";
import ArchieveList from "./ArchieveList";
import Header from "./Header";
import InputForm from "./InputForm";
import { getInitialData } from "../utils/data";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allnotes: getInitialData(),
            notes: getInitialData().filter((dt) => dt.archived === false),
            archieve: getInitialData().filter((dt) => dt.archived === true),
        };
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddHandler = this.onAddHandler.bind(this);
        this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
        const archieve = this.state.archieve.filter(
            (archieved) => archieved.id !== id
        );
        this.setState({ archieve });
    }

    onAddHandler({ title, createdAt, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        createdAt,
                        body,
                        archived: false,
                    },
                ],
            };
        });
    }

    onArchiveEventHandler(id) {
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

    render() {
        return (
            <div className="note-app">
                <Header />
                <InputForm addNote={this.onAddHandler} />
                <NoteList
                    notes={this.state.notes}
                    onArchive={this.onArchiveEventHandler}
                    onDelete={this.onDeleteHandler}
                />
                <ArchieveList
                    notes={this.state.archieve}
                    onDelete={this.onDeleteHandler}
                />
            </div>
        );
    }
}
export default NoteApp;
