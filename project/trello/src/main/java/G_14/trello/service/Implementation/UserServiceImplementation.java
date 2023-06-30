package G_14.trello.service.Implementation;

import G_14.trello.model.User;
import G_14.trello.repository.UserRepository;
import G_14.trello.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImplementation implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public String createUser(User user){
        userRepository.save(user);
        return "User information saved successfully";

    }

    @Override
    public User findUserById(int id) {
        User user = userRepository.findById(id);
        System.out.println("Successfully fetched customer information " + user);

        return user;
    }


    @Override
    public String updateUser(User user) {
        User user1 = userRepository.findById(user.getId());
        user1.setEmail(user.getEmail());
        user1.setUser_name(user1.getUser_name());
        user1.setPassword(user1.getPassword());

        userRepository.save(user1);
        return "User information updated successfully!";

    }

    @Override
    public String deleteUserById(int user_id) {
        userRepository.deleteById(user_id);
        return "User Information deleted successfully!";


    }

//
//    public User findByUser_name(String user_name) {
//        User user = userRepository.findByUser_Name(user_name);
//        System.out.println("Successfully fetched user information by username: " + user_name);
//        return user;
//    }


    public User findByPassword(String password) {
        User user = userRepository.findByPassword(password);
        System.out.println("Successfully fetched user information by password: " + password);
        return user;
    }


    public User findByEmail(String email) {
        User user = userRepository.findByEmail(email);
        System.out.println("Successfully fetched user information by email: " + email);
        return user;
    }
}
