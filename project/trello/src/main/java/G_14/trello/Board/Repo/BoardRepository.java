package G_14.trello.Board.Repo;

import G_14.trello.Workspace.entities.Workspace;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import G_14.trello.Board.model.Board;

import java.util.List;

@Repository
@Transactional
public interface BoardRepository extends JpaRepository<Board, Integer> {
    Board findByBoardName(String boardName);
    void deleteByBoardName(String boardName);
//    List<Board> findByWorkspace(Workspace workspace);
}
