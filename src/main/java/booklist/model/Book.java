package booklist.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * The project does not have a persistence unit, therefore
 * any changes made to the database are not saved between backend reboots!
 * 
 * Simply add a persistence unit to the project and build to have
 * a persistent database.
 */

@Entity
@Table(name="books")
public class Book implements Serializable {
    
    /**
     * Generating an ID
     * The book's title can't serve as an ID, as they are not unique.
     * Therefore, this application uses generated ID's.
     */
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    @Column(name = "title")
    private String title;
    
    @Column(name="author")
    private String author;
    
    @Column(name="description")
    private String description;

    public Book() {
    }
    
    public Book(String title, String author, String description) {
        super();
        this.title = title;
        this.author = author;
        this.description = description;
    }
    
    // Getters for fetching book information
    
    public long getID() {
        return id;
    }
    
    public String getTitle() {
        return title;
    }
    
    public String getAuthor() {
        return author;
    }
    
    public String getDescription() {
        return description;
    }
    
    // Setters for editing book information
    
    public void setID(long id) {
        this.id = id;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public void setAuthor(String author) {
        this.author = author;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
}
