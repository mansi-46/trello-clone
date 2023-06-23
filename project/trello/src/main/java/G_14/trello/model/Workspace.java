package G_14.trello.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class Workspace {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String workspaceName;
    private String userName;
    private String workSpaceDetail;
    private String boardName;
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getWorkspaceName() {
        return workspaceName;
    }

    public void setWorkspaceName(String workspaceName) {
        this.workspaceName = workspaceName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getWorkSpaceDetail() {
        return workSpaceDetail;
    }

    public void setWorkSpaceDetail(String workSpaceDetail) {
        this.workSpaceDetail = workSpaceDetail;
    }

    public String getBoardName() {
        return boardName;
    }

    public void setBoardName(String boardName) {
        this.boardName = boardName;
    }

    public Workspace(int id, String workspaceName, String userName, String workSpaceDetail, String boardName) {
        this.id = id;
        this.workspaceName = workspaceName;
        this.userName = userName;
        this.workSpaceDetail = workSpaceDetail;
        this.boardName = boardName;
    }
}

