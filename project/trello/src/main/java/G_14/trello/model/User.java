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
    @Column(name = "User_Name")
    private String user_name;

    @Column(name = "Security_Question")
    private String securityQuestion;


    public User(int id, String email, String password, String user_name, String securityQuestion) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.user_name = user_name;
        this.securityQuestion = securityQuestion;
    }

    public User (String email, String password){
        this.email = email;
        this.password = password;
    }


    //Zero argument constructor

    public User(){

    }


    //Getters & Setters

    public String getSecurityQuestion() {
        return securityQuestion;
    }

    public void setSecurityQuestion(String securityQuestion) {
        this.securityQuestion = securityQuestion;
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

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }
}