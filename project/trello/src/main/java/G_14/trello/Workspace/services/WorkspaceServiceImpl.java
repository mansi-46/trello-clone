package com.education.services;

import com.education.entities.Workspace;
import com.education.repositories.WorkspaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Product service implement.
 */
@Service
public class WorkspaceServiceImpl implements WorkspaceService {
     @Autowired
     private WorkspaceRepository workspaceRepository;

    @Override
    public Iterable<Workspace> listAllWorkspaces() {
        return workspaceRepository.findAll();
    }

    @Override
    public Workspace getWorkspaceById(Integer id) {
        return workspaceRepository.findById(id).get();
    }
    // mybatis
    @Override
    public Workspace saveWorkspace(Workspace product) {
        return workspaceRepository.save(product);
    }

    @Override
    public void deleteWorkspace(Integer id) {
        workspaceRepository.deleteById(id);
    }

}
