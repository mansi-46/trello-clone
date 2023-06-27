package G_14.trello.Board.controller;

import G_14.trello.Board.Services.BoardService;
import G_14.trello.Board.model.Board;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class BoardControllerTest {
    @Mock
    private BoardService boardService;

    private BoardController boardController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        boardController = new BoardController();
        boardController.boardService = boardService;
    }

    @Test
    void createBoard() {
        Board board = new Board();
        board.setBoardName("Test Board");

        Board boardCreated = new Board();
        boardCreated.setBoardName("Test Board");
        boardCreated.setId(1);

        when(boardService.createBoard(board)).thenReturn(boardCreated);

        ResponseEntity<Board> response = boardController.createBoard(board);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(boardCreated, response.getBody());
        verify(boardService, times(1)).createBoard(board);
    }

    @Test
    void deleteBoard() {
        String boardName = "Test Board";

        when(boardService.deleteBoard(boardName)).thenReturn(true);

        String response = boardController.deleteBoard(boardName);

        assertEquals("Board Successfully Deleted", response);
        verify(boardService, times(1)).deleteBoard(boardName);

        // Test case when board does not exist
        when(boardService.deleteBoard("Nonexistent Board")).thenReturn(false);

        response = boardController.deleteBoard("Nonexistent Board");

        assertEquals("The board does not exist", response);
        verify(boardService, times(1)).deleteBoard("Nonexistent Board");
    }

    @Test
    void getBoard() {
        int boardId = 1;

        Board board = new Board();
        board.setId(boardId);
        board.setBoardName("Test Board");

        when(boardService.findBoardById(boardId)).thenReturn(board);

        Board response = boardController.getBoard(boardId);

        assertEquals(board, response);
        verify(boardService, times(1)).findBoardById(boardId);
    }
}
