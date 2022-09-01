import React from "react";
class InputForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title : '',
            body : ''
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        const getTitle = event.target.value
        if (getTitle.length <= 50) { 
            this.setState(() => {
                return {
                    title : getTitle
                }
            })      
        }
    
            
    }
    onBodyChangeEventHandler(event){
        const getBody = event.target.value

        if (getBody.length <= 250) {
            this.setState(() => {
                return{
                    body : event.target.value
                }
            })   
        }   
        
    }
    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState(() => {
            return {
                title : '',
                createdAt : '',
                body : ''
            }
        })
    }

    render(){
        return(
            <div className="form">
                <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <h1>Add Your Note</h1>
                    <p>Character Left : {50- this.state.title.length}</p>
                    <input type="text" placeholder="Add your Note title" value={this.state.title} onChange={this.onTitleChangeEventHandler} autoFocus required/> <br/>
                    <p>Character Left : {250- this.state.body.length}</p>
                    <textarea type="text" placeholder="Describe your notes" value={this.state.body} onChange={this.onBodyChangeEventHandler}  required/><br/>
                    <button type="submit">Tambah</button>
                </form>
            </div>
        )
    }
}

export default InputForm;