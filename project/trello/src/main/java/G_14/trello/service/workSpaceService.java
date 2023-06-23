package G_14.trello.service;
import G_14.trello.model.Workspace;
import G_14.trello.repository.workSpaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class workSpaceService {
    @Autowired
    workSpaceRepository workSpaceRepository;
    public String createWorkSpace(Workspace work_space){
        workSpaceRepository.save(work_space);
        return "workspace created";
    }
}
