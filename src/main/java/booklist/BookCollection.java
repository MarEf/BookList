package booklist;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;


import booklist.model.Book;
import booklist.repository.BookRepository;

@SpringBootApplication
public class BookCollection implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(BookCollection.class, args);
	}
        
        @Autowired
        private BookRepository bookRepository;
        
        //Running the app with dummy data
        @Override
        public void run(String...args) throws Exception {
            this.bookRepository.save(new Book("I Am A Cat","Natsume Souseki","A satirical novel about middle-class Japanese people told from the perspective of a cat."));
            this.bookRepository.save(new Book("Money Trap","Chiaki Kisaki","A crime comedy set if Fukuoka that tells about a third-rate swindler who's down on his luck and a rich police sergeant with great fortune who meet in the wake of a fraud case."));
            this.bookRepository.save(new Book("And Then There Were None","Agatha Christie","Ten people are invited to an isolated private island and begin to mysteriously drop dead one after the other in accordance with a children's counting rhyme. Bestseller by Agatha Christie."));
        
            Book editMe = new Book ("Edit Me", "Blank", "This should be changed");
            this.bookRepository.save(editMe);

            this.bookRepository.save(new Book ("DeleteMe", "Blank", "I should not exist"));
            
        }
}
