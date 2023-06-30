package G_14.trello.Board.controller;
import G_14.trello.Board.Repo.BoardRepository;
import G_14.trello.Board.Services.BoardService;
import G_14.trello.Board.model.Board;
import jakarta.persistence.Index;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin()
@RestController
@RequestMapping("/boards")
public class BoardController {
    @Autowired
    BoardService boardService;

    @PostMapping(path = "/createBoard/{workspace_id}")
    public ResponseEntity<Board> createBoard(@RequestBody Board board, @PathVariable Integer workspace_id) {
        Board boardCreated = boardService.createBoard(board, workspace_id);
        if (boardCreated != null) {

            return ResponseEntity.ok(boardCreated);
        } else {
            return ResponseEntity.ok(null);
        }
    }

    @PostMapping(path = "/deleteBoard")
    public String deleteBoard(@RequestParam String boardName) {
        boolean response = boardService.deleteBoard(boardName);
        if(response)
        {
            return "Board Successfully Deleted";
        }
        return "The board does not exist";
    }

    @GetMapping(path = "/getAllBoards")
    public List<Board> getAllBoards() {
        return boardService.findAllBoards();
    }

    @GetMapping(path = "/getBoardsByWorkspace")
    public List<Board> getBoardsByWorkspace(@RequestParam int workspaceId) {
        return boardService.findBoardsByWorkspace(workspaceId);
    }

    @GetMapping(path = "/getBoard")
    public Board getBoard(@RequestParam int boardId) {
        return boardService.findBoardById(boardId);
    }
}

