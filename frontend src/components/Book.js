import React from 'react';
import BookService from '../services/BookService';
import SubmissionForm from './SubmissionForm';

class Book extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            DataLoaded: false,
            NoConnection: false,
            selected: null
        };
    }
    
    //Fetch books from the database
    componentDidMount() {    
        BookService.getBooks().then((response) => {
            this.setState({ books: response.data});
            this.setState({ DataLoaded: true});
        }).catch(function(error) {
            console.log("Failed to load data");
        });
    }
    
    selectBook(book) {
        this.setState({selected: book});
    }
    
    render() {
        const {DataLoaded, NoConnection} = this.state;
        if (!DataLoaded && !NoConnection) {
            return ("The booklist is loading");
        } else if (NoConnection){
            return ("Failed to connect to database");
        }
        
        return(
            <div className="App">
                <ul>
                    {this.state.books.map(
                            book => 
                            <li onClick = {() => this.setState({selected: book})}>{book.title}</li>
                    )}
                </ul>

                <div>
                        <SubmissionForm dataFromParent = {this.state.selected}/>
                </div>
            </div>
        );
    }
}

export default Book;