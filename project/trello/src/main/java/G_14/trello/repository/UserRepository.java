package G_14.trello.repository;

import G_14.trello.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    //The UserRepository interface extends the JpaRepository interface,
    // which provides a set of predefined methods for basic CRUD operations.

//    User findByUser_Name(String user_name);

    User findById(int user_id);

    User findByPassword(String password);

    User findByEmail(String email);

}