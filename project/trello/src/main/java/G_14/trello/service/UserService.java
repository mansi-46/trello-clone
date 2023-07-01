package G_14.trello.service;

import G_14.trello.model.User;
import G_14.trello.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public interface UserService {
    String createUser(User user);
    User findUserById(int id);
    String updateUser(User user);
    String deleteUserById(int id);





    User findUserByEmail(String email);
}
