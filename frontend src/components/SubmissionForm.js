import React from 'react';
import BookService from '../services/BookService';

class SubmissionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: '',
            author: '',
            description: ''
        };
        
        this.editTitle = this.editTitle.bind(this);
        this.editAuthor = this.editAuthor.bind(this);
        this.editDescription = this.editDescription.bind(this);
        
        this.addBook = this.addBook.bind(this);
        this.editBook = this.editBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.dataFromParent !== null && prevProps.dataFromParent.id !== this.props.dataFromParent.id) {
            this.setState({
                id: this.props.dataFromParent.id,
                title: this.props.dataFromParent.title,
                author: this.props.dataFromParent.author,
                description: this.props.dataFromParent.description
            });
        } 
    }
    
    //Event Handlers for text field changes
    editTitle(event) {
        this.setState({title: event.target.value});
    }
    
    editAuthor(event) {
        this.setState({author: event.target.value});
    }
    
    editDescription(event) {
        this.setState({description: event.target.value});
    }
    
    
    //Event handlers for submitting the form
    addBook(event) {
        BookService.newBook(this.state.title, this.state.author, this.state.description).then((response) => {
            console.log(response);
        }).catch(function(error) {
            console.log(error);
        });
    }
    
    editBook(event) {
        BookService.editBook(this.state.id, this.state.title, this.state.author, this.state.description);
    }
    
    deleteBook() {
        BookService.deleteBook(this.state.id).then((response) => {
            console.log(response);
        }).catch(function(error) {
            console.log(error);
        });
    }
    
    //Render the form
    render() {
        if (this.state.id === null) {
            return (
                    <form>
                        <label>Title:</label><br/>
                        <input type = 'text' size = '25' title = {this.state.title} defaultValue = '' onChange = {this.editTitle}/><br/>
                
                        <label>Author:</label><br/>
                        <input type = 'text' size = '25' author = {this.state.author} defaultValue = '' onChange = {this.editAuthor}/><br/>
                            
                        <label>Description:</label><br/>
                        <textarea rows = '6' cols = '32' description = {this.state.description} defaultValue = '' onChange = {this.editDescription}/><br/>
                            
                        <input type = 'submit' value = "Save New" onClick = {this.addBook}/>
                        <input type = 'submit' value = "Save" disabled/>
                        <input type = 'submit' value = "Delete" disabled/>
                    
                    </form>
            );
        } else {
            return (
                    <form>
                        <label>Title: </label><br/>
                        <input type = 'text' size = '25' title = {this.state.title} defaultValue = {this.state.title} onChange = {this.editTitle}/><br/>
                        
                        <label>Author:</label><br/>
                        <input type = 'text' size = '25' author = {this.state.author} defaultValue = {this.state.author} onChange = {this.editAuthor}/><br/>
                        
                        <label>Description:</label><br/>
                        <textarea rows = '6' cols = '32' description = {this.state.description} defaultValue = {this.state.description} onChange = {this.editDescription}/><br/>
                                
                        <input type = 'submit' value = "Save New" onClick = {this.addBook}/>
                        <input type = 'submit' value = "Save" onClick = {this.editBook}/>
                        <input type = 'submit' value = "Delete" onClick = {this.deleteBook}/>
        
                    </form>
                    
            );
        }
    }    
}

export default SubmissionForm;