package G_14.trello.model;

import jakarta.persistence.*;

@Entity
public class User {

    //Instance variables
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name = "user_ame")
    private String user_name;

    @Column(name = "security_question")
    private String security_question;


    public User( String email, String password, String userName, String securityQuestion) {
        this.email = email;
        this.password = password;
        this.user_name = userName;
        this.security_question = securityQuestion;
    }

//    public User (String email, String password){
//        this.email = email;
//        this.password = password;
//    }


    //Zero argument constructor

    public User(){

    }


    //Getters & Setters

    public String getSecurityQuestion() {
        return security_question;
    }

    public void setSecurity_Question(String securityQuestion) {
        this.security_question = securityQuestion;
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String userName) {
        this.user_name = userName;
    }
}
