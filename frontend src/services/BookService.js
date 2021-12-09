import axios from 'axios'

//File contains the console logs used during testing.

// Connection to the database. For now, this runs on localhost.
const BOOKS_API_URL = 'http://localhost:8080/books';

class BookService {
    // Fetch all books from the database. Works reliably
    getBooks() {
        return axios.get(BOOKS_API_URL).catch(function(error) {
            console.log("Failed to establish database connection")
        });
    }
    
    // Create a new book enty in database. Has been witnessed working.
    newBook(title, author, description) {
        console.log("Adding a new book!");
        var reply = axios.post(BOOKS_API_URL, {
            title: title,
            author: author,
            description: description
        }).then(function (response) {
            console.log("The server responded with:" + response);
        }).catch (function(error) {
            console.log("The book could not be added");
            console.log(error);
        });
        console.log("The server replied with "+reply);
    }
    
    // Edit an existing entry. This has been witnessed working
    editBook(id, title, author, description) {
        var reply = axios.put(BOOKS_API_URL+"/"+id, {
            title: title,
            author: author,
            description: description
        }).then(function (response) {
            console.log("Server responded with: " + response);
        }).catch (function(error) {
            console.log("The book could not be edited");
            console.log("Book URL: "+BOOKS_API_URL+"/"+id);
            console.log(error);
        });
        console.log(reply);
    }
    
    // Delete a book from the database. This has been witnessed working.
    deleteBook(id) {
        var reply = axios.delete(BOOKS_API_URL+"/"+id).then(function(response) {
            console.log("Server responded with: " + response);
        }).catch(function(error) {
            console.log("Attempted to delete a book with ID "+id);
            console.log("The entry could not be deleted");
            console.log("Book URL: "+BOOKS_API_URL+"/"+id);
            console.log(error);
        });
        console.log("Server replied with "+reply);
        
    }
    
}

export default new BookService();