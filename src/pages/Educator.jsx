import DeleteResource from "../components/Educators/DeleteResource";
import EditResource from "../components/Educators/EditResource";
import LessonList from "../components/Lessons/LessonsList";
import NewLesson from "../components/Lessons/NewLesson";



const Educator = () => {
    return (
      <div>        
        <LessonList/>
        <NewLesson/>
        {/* <DeleteResource/>
        <EditResource/> */}
      </div>
    );
  };
  
  export default Educator;