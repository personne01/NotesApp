import React from "react";

class InputForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title : '',
            createdAt : '',
            body : '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onDateChangeEventHandler = this.onDateChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        this.setState(() => {
            return {
                title : event.target.value
            }
        })
    }
    onDateChangeEventHandler(event){
        this.setState(() => {
            return{
                createdAt : event.target.value
            }
        })
    }
    onBodyChangeEventHandler(event){
        this.setState(() => {
            return{
                body : event.target.value
            }
        })
    }
    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render(){
        return(
            <div className="form">
                <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <h1>Add Your Note</h1>
                    <input type="text" placeholder="Add your Note title" autoFocus value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                    <input type="date" value={this.state.createdAt} onChange={this.onDateChangeEventHandler} />
                    <textarea type="text" placeholder="Describe your notes" value={this.state.body} onChange={this.onBodyChangeEventHandler} /><br/>
                    <button type="submit">Tambah</button>
                </form>
            </div>
        )
    }
}

export default InputForm;