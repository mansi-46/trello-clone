package G_14.trello.controller;

import G_14.trello.model.User;
import G_14.trello.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

    @CrossOrigin( )
    @RestController
    @RequestMapping("/users")

//@RequestMapping annotation at the class level to define the base URL or path
// that will be handled by the controller
    public class UserController {

        @Autowired
        public UserService userService;



            @PostMapping("/signup")
            public ResponseEntity<String> signUpUser(@RequestBody User user) {
                // Implement sign-up logic
                if (isEmailValid(user.getEmail()) && isPasswordValid(user.getPassword())) {
                    userService.createUser(user);
                    return ResponseEntity.ok("User signed up successfully!");
                } else {
                    return ResponseEntity.badRequest().body("Invalid email or password");
                }
            }

            @GetMapping("/login")
            public ResponseEntity<String> loginUser(@RequestParam("email") String email, @RequestParam("password") String password) {
                User existingUser = userService.findByEmail(email);
                if (existingUser != null && existingUser.getPassword().equals(password)) {
                    return ResponseEntity.ok("User logged in successfully!");
                } else {
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
                }
            }

        @GetMapping("/reset-password")
            public ResponseEntity<String> resetPassword(@RequestBody User user) {
                // Implement password reset logic
                User existingUser = userService.findByEmail(user.getEmail());
                if (existingUser != null && existingUser.getSecurityQuestion().equals(user.getSecurityQuestion())) {
                    // Perform password reset logic
                    // Update password, send reset confirmation email, etc.
                    // userService.resetPassword(existingUser, user.getNewPassword());

                    return ResponseEntity.ok("Password reset successful!");
                } else {
                    return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Invalid email or security question");
                }
            }

            // Helper methods for validation

            private boolean isEmailValid(String email) {
                // Implement email validation logic here
                // Return true if the email is valid, false otherwise
                // You can check against email regex pattern or any other validation rules
                return true; // Placeholder, replace with your actual validation logic
            }

            private boolean isPasswordValid(String password) {
                // Implement password validation logic here
                // Return true if the password is valid, false otherwise
                // You can check password strength, length, or any other requirements
                return true; // Placeholder, replace with your actual validation logic
            }




        @GetMapping(path = "/get/{id}")
        //{id} is a path variable representing the ID of the user to retrieve.

        //this example shows how to improve your api responses using http response entity
        public ResponseEntity<User> getUserById(@PathVariable("id") int id) {
            User user = userService.findUserById(id);
            if(user != null){
                return ResponseEntity.ok(user);
            }
            else{
                return ResponseEntity.notFound().build();
            }
        }

        @PutMapping(path = "/update")
    /* @RequestBody annotation to bind the request body to a parameter in the
      controller method. This allows you to receive and parse data sent in the
      request body, typically in JSON format*/
        public String updateUser(@RequestBody User user) {
            return userService.updateUser(user);
        }

        @PostMapping(path = "/save")
        public String createUser(@RequestBody User user) {
            return userService.createUser(user);
        }

        @DeleteMapping(path = "/delete/{id}")
        public String deleteUserById(@PathVariable("id") int id) {

            return userService.deleteUserById(id);
        }
    }



