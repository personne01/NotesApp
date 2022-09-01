import React from "react";

class Search extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchKey : '' 
        }
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }
    
    onSearchHandler(event){
        this.setState(() => {
            return{
                searchKey : event.target.value
            }
        })
        this.props.onSearch(event.target.value)
    }

    render(){
        return (
            <div className="search">
                <input type="text" placeholder="Find Your Notes" onChange={this.onSearchHandler}></input>
            </div>
        )
    }
}

export default Search;