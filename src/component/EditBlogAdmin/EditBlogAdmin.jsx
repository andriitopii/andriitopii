import { useParams } from "react-router-dom";

const EditBlogAdmin = () => {
    const {id} = useParams()
    return ( <>{id}</> );
}
 
export default EditBlogAdmin;