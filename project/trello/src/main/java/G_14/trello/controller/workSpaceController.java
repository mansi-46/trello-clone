package G_14.trello.controller;
import G_14.trello.model.Workspace;
import G_14.trello.service.workSpaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/workSpace")
public class workSpaceController {
    @Autowired
    workSpaceService workSpaceService;
    @PostMapping("/save")
    public String createWorkSpace(@RequestBody Workspace work){
        return workSpaceService.createWorkSpace(work);
    }

}
