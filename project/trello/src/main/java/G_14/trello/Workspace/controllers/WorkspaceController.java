package G_14.trello.Workspace.controllers;

import G_14.trello.Workspace.entities.Workspace;
import G_14.trello.Workspace.WorkspaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController()
public class WorkspaceController {

     @Autowired
     private WorkspaceService workspaceService;


    /**
     * getAllWorkspaces
     *
     * @param
     * @return
     */
   @GetMapping("/getAllWorkspaces")
   @ResponseBody
    public Map getAllWorkspaces() {
       Iterable<Workspace> workspaces = workspaceService.listAllWorkspaces();
       HashMap<String, Object> responce = new HashMap<>();
       responce.put("status","success");
       responce.put("data",workspaces);
       return responce;
   }


    @GetMapping("/getWorkspaceById/{id}")
    @ResponseBody
    public Map edit(@PathVariable Integer id) {
        Workspace workspace = workspaceService.getWorkspaceById(id);
        HashMap<String, Object> responce = new HashMap<>();
        responce.put("status","success");
        responce.put("data",workspace);
        return responce;
    }

    /**
     * New Workspace.
     *
     * @return
     */
    @RequestMapping("/workspace/new")
    @ResponseBody
    public Map newWorkspace(@RequestBody Workspace workspace) {
        workspaceService.saveWorkspace(workspace);
        HashMap<String, Object> responce = new HashMap<>();
        responce.put("status","success");
        return responce;
    }


    /**
     * Delete Workspace by its id.
     *
     * @param id
     * @return
     */
    @GetMapping("/delete/{id}")
    public Map delete(@PathVariable Integer id) {
        workspaceService.deleteWorkspace(id);
        HashMap<String, Object> responce = new HashMap<>();
        responce.put("status","success");
        return responce;
    }

}
