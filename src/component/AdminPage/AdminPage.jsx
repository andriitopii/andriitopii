import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminLogin from "../AdminLogin/AdminLogin";
import AdminPanel from "../AdminPanel/AdminPanel";
import "./AdminPage.scss";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../bd/firebase";
import { Helmet } from "react-helmet";
const AdminPage = () => {

    const [user, setUser] = useState(false);
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user)=>{
        setUser(user);
    })
    
    return ( 
    <>
    <Helmet>
    <meta name="robots" content="noindex, nofollow"/>
    <title>Adnrii Topii - Admin</title>
    </Helmet>

    <section className="admin">
        {user === false && <h1>Загрузка</h1>}
        {user === null && <AdminLogin />}
        {user && <AdminPanel><Outlet/></AdminPanel>}
   
        
    </section>
    </> );
}
 
export default AdminPage;