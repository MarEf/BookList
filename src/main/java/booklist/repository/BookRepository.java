package booklist.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import booklist.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long>{
    
}
