package G_14.trello.Workspace.services;

import G_14.trello.Workspace.entities.Workspace;
import G_14.trello.Workspace.repositories.WorkspaceRepository;
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
