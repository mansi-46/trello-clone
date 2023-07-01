package G_14.trello.Workspace.controllers;

import G_14.trello.Board.model.Board;
import G_14.trello.Workspace.entities.Workspace;
import G_14.trello.Workspace.services.WorkspaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin()
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

    @PutMapping("/updateWorkspace/{id}")
    @ResponseBody
    public Map updateWorkspace(@PathVariable Integer id, @RequestBody Workspace updatedWorkspace) {
        Workspace workspace = workspaceService.getWorkspaceById(id);

        if (workspace != null) {
            // Update the workspace with the new value.
            workspace.setWorkspaceName(updatedWorkspace.getWorkspaceName());
            workspace.setWorkspaceType(updatedWorkspace.getWorkspaceType());
            workspace.setDescription(updatedWorkspace.getDescription());
            workspaceService.saveWorkspace(workspace);

            HashMap<String, Object> response = new HashMap<>();
            response.put("status", "success");
            response.put("data", workspace);
            return response;
        } else {
            // Workspace not found
            HashMap<String, Object> response = new HashMap<>();
            response.put("status", "error");
            response.put("message", "Workspace not found");
            return response;
        }
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
    @PostMapping("/workspace/new")
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

    @PutMapping("giveWorkspace/{workspace_id}")
    public String updateBoard(@PathVariable Integer workspace_id, @RequestParam Integer board_id)
    {
        if(workspaceService.addBoard(workspace_id,board_id))
        {
            return "Board was successfully added to the workspace ";
        }
        return "Board either exists or no such board and or workspace exists";
    }

    @GetMapping("boardsList/{workspace_id}")
    public List<Board> getListOfBoards(@PathVariable Integer workspace_id){
        return workspaceService.boards(workspace_id);
    }
}
