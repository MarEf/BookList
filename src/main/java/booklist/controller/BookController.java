package booklist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import booklist.model.Book;
import booklist.repository.BookRepository;

/**
 * The actual REST API
 * It works. Sometimes...
 */

//Added to avoid any CORS issues
@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("books")
public class BookController {
    
    @Autowired
    private BookRepository bookRepository;
    
    //Get a list of all books
    @RequestMapping(method = RequestMethod.GET)
    List < Book > getBooks() {
        return bookRepository.findAll();
    }
    
    //Delete a specific entry
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    void deleteBook(@PathVariable long id) {
        bookRepository.deleteById(id);
        System.out.println("Attempted to delete book with the ID "+id);
    }
    
    // Edit an existing entry. 
    // HASN'T BEEN CALLED SUCCESSFULLY IN TESTING!
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    void editBook(@RequestBody Book book, @PathVariable long id) {
        System.out.println("Attempting to edit a book with id "+id);
        //Fetch a reference to a book in a database
        Book bookToUpdate;
        try{
            bookToUpdate = bookRepository.getById(id);
            //Update the information in the reference with new data
            bookToUpdate.setTitle(book.getTitle());
            bookToUpdate.setAuthor(book.getAuthor());
            bookToUpdate.setDescription(book.getDescription());
            //save the referenced book
            bookRepository.save(bookToUpdate);
        } catch(Exception e) {
                System.out.println("Book with ID "+id+" not found");
                } 
    }
  
    // Add a new entry. This has been witnessed working.
    @RequestMapping(method = RequestMethod.POST)
    void newBook(@RequestBody Book book) {
        System.out.println("Attempting to add a new book!");
        bookRepository.save(book);
    }
}
