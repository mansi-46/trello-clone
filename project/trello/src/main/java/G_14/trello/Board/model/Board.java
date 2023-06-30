package G_14.trello.Board.model;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="boards")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "board_name")
    private String boardName;

    @Column(name = "workspace_name")
    private String workspaceName;
}

