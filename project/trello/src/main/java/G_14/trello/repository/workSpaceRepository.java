package G_14.trello.repository;
import G_14.trello.model.Workspace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface workSpaceRepository extends JpaRepository<Workspace, Integer>{
}
