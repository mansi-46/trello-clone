package com.education.services;

import com.education.entities.Workspace;

public interface WorkspaceService {

    Iterable<Workspace> listAllWorkspaces();

    Workspace getWorkspaceById(Integer id);

    Workspace saveWorkspace(Workspace workspace);

    void deleteWorkspace(Integer id);

}
