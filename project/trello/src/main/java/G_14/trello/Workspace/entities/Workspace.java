package G_14.trello.Workspace.entities;
import jakarta.persistence.*;

/**
 * Workspace entity.
 */
@Entity
public class Workspace {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String workspaceName;
    private String workspaceType;
    private String description;


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

}
