package G_14.trello.Workspace.entities;
import G_14.trello.Board.model.Board;
import jakarta.persistence.*;

import java.util.List;

/**
 * Workspace entity.
 */
@Entity
@Table(name="workspace")
public class Workspace {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String workspaceName;
    private String workspaceType;
    private String description;

    @OneToMany(targetEntity = Board.class)
    @JoinColumn(name= "workspace_id")
    private List<Board> boards;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getWorkspaceName() {
        return workspaceName;
    }

    public void setWorkspaceName(String workspaceName) {
        this.workspaceName = workspaceName;
    }

    public String getWorkspaceType() {
        return workspaceType;
    }

    public void setWorkspaceType(String workspaceType) {
        this.workspaceType = workspaceType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Board> getBoards() {
        return boards;
    }

    public void setBoards(List<Board> boards) {
        this.boards = boards;
    }

}

//    @OneToMany(targetEntity = Board.class)
//    @JoinColumn(name= "boardMapping")
//    private List<Board> listOfWorkSpaceBoards;
//
//    public List<Board> getListOfBoardsForAWorkspace() {
//        return listOfWorkSpaceBoards;
//    }
//    public void setListOfBoardsForAWorkspace(List<Board> listOfWorkSpaceBoards) {
//        this.listOfWorkSpaceBoards = listOfWorkSpaceBoards;
//    }
