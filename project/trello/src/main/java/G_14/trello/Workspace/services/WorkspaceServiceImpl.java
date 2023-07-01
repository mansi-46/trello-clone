package G_14.trello.Workspace.services;
import G_14.trello.Board.Services.BoardService;

import G_14.trello.Board.model.Board;
import G_14.trello.Workspace.entities.Workspace;
import G_14.trello.Workspace.repositories.WorkspaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

    @Autowired
    BoardService boardService;
    @Override
    public boolean updateBoard(Integer workspace_id, Integer board_id)
    {
        Optional<Workspace> workspace=null;
        workspace= workspaceRepository.findById(workspace_id);
        if(workspace.isPresent())
        {
            Workspace Workspace=workspace.get();
            Board board= boardService.findBoardById(board_id);
            if(board!=null)
            {
                List<Board> listOfBoards= workspace.get().getBoards();
                if(listOfBoards.size()==0)
                {
                    listOfBoards=new ArrayList<>();
                }
                if(!listOfBoards.contains(board))
                {
                    listOfBoards.add(board);
                }
                else
                {
                    return false;
                }
                Workspace.setBoards(listOfBoards);
            }
            else
            {
                return false;
            }
            return true;
        }
        else {
            return false;
        }
    }
    public List<Board> boards(Integer workspace_id){
        Workspace workspaceModel=workspaceRepository.workspaceModelById(workspace_id);
        return workspaceModel.getBoards();
    }

}

