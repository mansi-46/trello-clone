package G_14.trello.Workspace.services;

import G_14.trello.Workspace.entities.Workspace;

public interface WorkspaceService {

    Iterable<Workspace> listAllWorkspaces();

    Workspace getWorkspaceById(Integer id);

    Workspace saveWorkspace(Workspace workspace);

    void deleteWorkspace(Integer id);

}
