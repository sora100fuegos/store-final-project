import PageDescription from "@/components/PageDescription";
import ProjectItem from "@/components/ProjectItem";
import AddNewItemModal from "@/components/modals/AddNewItemModal";
import EditItemModal from "@/components/modals/EditItemModal";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
//import { createProject, deleteProject, getProjects, updateProject } from "@/api/projects";

export default function AdminPage() {

  const [editProject, setEditProject] = useState()
  const [isNewItemModalVisible, setIsNewItemModalVisible] = useState(false)
  const [projects, setProjects] = useState([])

  
/*
  
  useEffect(() => {
    fetchProjects()
  }, [])


  const handleOnSubmit = async  values => {
    const tempProjects = Array.from(projects)
    if (!!values._id) {
      const updatedProject = await updateProject(values);
      const projectIndex = tempProjects.findIndex(p => p._id === updatedProject._id);
      tempProjects[projectIndex] = projectIndex;
    }
    else {
      const newProject = await createProject(values);
      tempProjects.push(newProject);
    }
    setProjects(tempProjects)
  }

  const handleDelete = async  id => {
    const isdeleted  = await deleteProject(id);
  if(isdeleted)
  {
    setProjects(prev => prev.filter(p => p._id !== id));
  }
     
    
  }
    

  const fetchProjects = async () => {
    try {
      const projects = await getProjects();
      setProjects(projects)
    } catch (error) {
      console.log(error)
    }
  }
*/
  return (
    <section>
      <PageDescription
        title="Admin"
        description="Here you  will  add new items to the inventory "
      />
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Button
          variant="contained"
          size="large"
          onClick={ () => setIsNewItemModalVisible(true) }
        >
          Add new  item 
        </Button>
      </div>
      {projects.map((project) => (
        <ProjectItem
          key={project._id}
          project={project}
        />
      ))}
      <AddNewItemModal
        open={ isNewItemModalVisible }
        onClose={ () => setIsNewItemModalVisible(false) }
        //onSubmit={ handleOnSubmit }
      />
      <EditItemModal
        open={ !!editProject }
        onClose={ () => setEditItem() }
        //onSubmit={ handleOnSubmit }
       // project={ editItem }
      />
    </section>
  );
}