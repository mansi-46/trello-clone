package G_14.trello.Workspace.services;

import G_14.trello.Board.model.Board;
import G_14.trello.Workspace.entities.Workspace;

import java.util.List;

public interface WorkspaceService {

    Iterable<Workspace> listAllWorkspaces();

    Workspace getWorkspaceById(Integer id);

    Workspace saveWorkspace(Workspace workspace);

    void deleteWorkspace(Integer id);

    boolean addBoard(Integer workspace_id, Integer board_id);
    List<Board> boards(Integer workspace_id);

}
