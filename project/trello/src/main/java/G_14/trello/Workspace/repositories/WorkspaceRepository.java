package G_14.trello.Workspace.repositories;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import G_14.trello.Workspace.entities.Workspace;


// dao层怎么写的? (1): 编写一个interface 接口 ,让这个接口 实现JpaRepository. 就可以了.
// 原理:spring会采用动态代理的机制实现我定义的接口的实现类,注入到spring容器.
//(2)  编写一个interface 接口 , 这个接口实现mapper接口, 在对应的从xml文件里面配置对应的sql语句.
// 原理:spring会采用动态代理的机制实现我定义的接口的实现类,注入到spring容器.
public interface WorkspaceRepository extends JpaRepository<Workspace, Integer> {

}
