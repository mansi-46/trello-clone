package G_14.trello.Board.Services;
import G_14.trello.Board.model.Board;
import G_14.trello.Board.Repo.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {
    @Autowired
    BoardRepository boardRepository;

    public Board createBoard(Board board) {
        //you have to check if there is already a board with the same name inside that workspace-- ask TA
        boolean boardWithSameNameExists = false;
        List<Board> boards = boardRepository.findAll();

        for (Board b : boards) {
            if (b.getBoardName().equals(board.getBoardName())) {
                boardWithSameNameExists = true;
                break;
            }
        }

        if (boardWithSameNameExists) {
            return null;
        }

        return boardRepository.save(board);
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
    public Board findBoardById(Integer boardId) {
        return boardRepository.findById(boardId).orElse(null);
    }
}
