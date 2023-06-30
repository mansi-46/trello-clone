package G_14.trello.Board.Services;
import G_14.trello.Board.model.Board;
import G_14.trello.Board.Repo.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import G_14.trello.Workspace.repositories.WorkspaceRepository;
import G_14.trello.Workspace.entities.Workspace;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoardService {
    @Autowired
    BoardRepository boardRepository;

    @Autowired
    WorkspaceRepository workspaceRepository;

    public Board createBoard(Board board, Integer workspace_id) {

        boolean boardWithSameNameExists = false;
        List<Board> boards = boardRepository.findAll();

        for (Board b : boards) {
            if (b.getBoardName().equals(board.getBoardName())) {
                boardWithSameNameExists = true;
                break;
            }
        }
        if(boardWithSameNameExists){
            return null;
        }
        Workspace workspace = workspaceRepository.workspaceModelById(workspace_id);
        List<Board> boardsOfWorkspace = workspace.getBoards();
        if(boardsOfWorkspace.size() == 0){
            boardsOfWorkspace = new ArrayList<>();
        }
        if(!boardsOfWorkspace.contains(board)) {
            workspace.getBoards().add(board);
            return boardRepository.save(board);
        }
        return null;
    }

    public boolean deleteBoard(String boardName) {
        Board board= boardRepository.findByBoardName(boardName);

        if (board == null) {
            return false;
        }
        boardRepository.deleteByBoardName(boardName);
        return true;
    }
    public List<Board> findAllBoards(){
        List<Board> boards = boardRepository.findAll();
        return boards;
    }
    public List<Board> findBoardsByWorkspace(Integer workspaceId) {
        Workspace workspace = workspaceRepository.workspaceModelById(workspaceId);
        List<Board> boardsOfWorkspace = workspace.getBoards();
        if (workspace != null && boardsOfWorkspace != null) {
            return boardsOfWorkspace;
        }
        return null;
    }

    public Board findBoardById(Integer boardId) {
        return boardRepository.findById(boardId).orElse(null);
    }
}
