package G_14.trello.service;

import G_14.trello.model.User;

public interface UserService {
    String createUser(User user);
    User findUserById(int id);
    String updateUser(User user);
    String deleteUserById(int id);


    User findByEmail(String email);
}
