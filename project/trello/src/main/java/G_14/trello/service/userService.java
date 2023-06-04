package G_14.trello.service;
import G_14.trello.model.user;
import G_14.trello.repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class userService {
    @Autowired
    userRepository userRepository;
    public String createUser(user User){
        userRepository.save(User);
        return "user saved";
    }
}
