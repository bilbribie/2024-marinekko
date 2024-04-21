import React, {  useState } from 'react';
import { useLocation } from 'react-router-dom'
import Nav2 from './components/nav2';
import Header from './components/header';
import Footer from './components/footer';
import './style/editadmin.css'
import ConfirmPopup from './components/confirmpopup';
import ReportPopup from './components/reportpopup';


// let adminAccounts = [{AdminID : 1,AdminRole : "edit product",AdminUsername : "U1",AdminFirstName : "F1",AdminSurname : "S1", AdminEmail : "E1", AdminPassword : "PW1"}
//                     ,{AdminID : 2,AdminRole : "edit product",AdminUsername : "U2",AdminFirstName : "F2",AdminSurname : "S2", AdminEmail : "E2", AdminPassword : "PW2"}
//                     ,{AdminID : 3,AdminRole : "edit account",AdminUsername : "U3",AdminFirstName : "F3",AdminSurname : "S3", AdminEmail : "E3", AdminPassword : "PW3"}
//                     ,{AdminID : 4,AdminRole : "remove product",AdminUsername : "U4",AdminFirstName : "F4",AdminSurname : "S4", AdminEmail : "E4", AdminPassword : "PW4"}
//                     ,{AdminID : 5,AdminRole : "add product",AdminUsername : "U5",AdminFirstName : "F5",AdminSurname : "S5", AdminEmail : "E5", AdminPassword : "PW5"}];





const EditAdmin = () => {

    const location = useLocation();
    let EditAdmin;
    EditAdmin = location.state.EditAdmin;
    const mode = location.state.Mode;

    // pop up control state
    const [popConfirm,setPopConfirm] = useState(false);
    const [popReport,setPopReport] = useState(false);
    const [error,setError] = useState(false);
    // state for post or put method error
    // state for showing data via popup

    const [ID,setAdminID] = useState(mode==="EDIT"?EditAdmin.AdminID:0);
    const [role,setAdminRole] = useState(mode==="EDIT"?EditAdmin.AdminRole:'');
    const [username,setAdminUsername] = useState(mode==="EDIT"?EditAdmin.AdminUsername:'');
    const [firstname,setAdminFirstname] = useState(mode==="EDIT"?EditAdmin.AdminFirstName:'');
    const [surname,setAdminSurname] = useState(mode==="EDIT"?EditAdmin.AdminSurname:'');
    const [email,setAdminEmail] = useState(mode==="EDIT"?EditAdmin.AdminEmail:'');
    const [password,setAdminPassword] = useState(mode==="EDIT"?EditAdmin.AdminPassword:'');


    // const [ID,setAdminID] = useState(0);
    // const [role,setAdminRole] = useState(mode==="EDIT"?'TEST':'');
    // const [username,setAdminUsername] = useState('');
    // const [firstname,setAdminFirstname] = useState('');
    // const [surname,setAdminSurname] = useState('');
    // const [email,setAdminEmail] = useState('');
    // const [password,setAdminPassword] = useState('');


    const HandlePostAdmin = (e) => {
        e.preventDefault();
        // alert(pictureArray);
        // id is 0 but in server, new id need to be allocated
        const Admin = {AdminID : 0,AdminRole : role,AdminUsername : username,AdminFirstName : firstname,AdminSurname : surname ,AdminEmail : email,AdminPassword : password}
        fetch('http://localhost:2999/post_admin_api',{ method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Admin)})
        .then(response => response.json())
        .then(data => {
            setError(data.error);
        }).then(() => {setPopReport(true)})
        .catch(error => {
        console.error('Error:', error);
        });

    }

    const HandlePutAdmin = (e) => {
        e.preventDefault();
        // alert(pictureArray);
        // id is 0 but in server, new id need to be allocated
        const Admin = {AdminID : ID,AdminRole : role,AdminUsername : username,AdminFirstName : firstname,AdminSurname : surname ,AdminEmail : email,AdminPassword : password}
        fetch('http://localhost:2999/put_admin_api',{ method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Admin)})
        .then(response => response.json())
        .then(data => {
            setError(data.error);
        }).then(() => {setPopReport(true)})
        .catch(error => {
        console.error('Error:', error);
        });

    }

    const staticFilePath = "http://localhost:2999/picture";


    return (<div class = "page-container-editaccount">

        <Header></Header>
        <Nav2></Nav2>
        <section class = "page-title">

            <img src = {staticFilePath + "/user.png"} alt="productedit" class = "logo"></img>
            {mode === "ADD"?"Admin Management - Add Admin" : "Admin Management - Edit Admin"} 

        </section>

        <section class = "editor-section">

            <div class = "editor-container">

                <section class = "editor-header">
                    {mode==="EDIT"?"Edit admin":"Add new admin"}
                </section>

                <section class = "input-container">
                    Username:
                    <input type = "text" class = "inputBox" value = {username} onChange={(e) => setAdminUsername(e.target.value)}></input>
                </section>

                <section class = "input-container">
                    Role:
                    <input type = "text" class = "inputBox" value = {role} onChange={(e) => setAdminRole(e.target.value)}></input>
                </section>

                <section class = "input-container">
                    Firstname:
                    <input type = "text" class = "inputBox" value = {firstname} onChange={(e) => setAdminFirstname(e.target.value)}></input>
                </section>

                <section class = "input-container">
                    Lastname:
                    <input type = "text" class = "inputBox" value = {surname} onChange={(e) => setAdminSurname(e.target.value)}></input>
                </section>

                <section class = "input-container">
                    Email:
                    <input type = "text" class = "inputBox" value = {email} onChange={(e) => setAdminEmail(e.target.value)}></input>
                </section>

                <section class = "input-container">
                    Password:
                    <input type = "text" class = "inputBox" value = {password} onChange={(e) => setAdminPassword(e.target.value)}></input>
                </section>
{/* 
                <ConfirmPopup trigger = {popConfirm} setTrigger = {setPopConfirm} callOnConfirm = {mode==="EDIT"?HandlePutAdmin:HandlePostAdmin}>
                </ConfirmPopup>

                <ReportPopup trigger = {popReport} setTrigger = {setPopReport} errorCondition = {error} mode = {mode}>
                </ReportPopup> */}

                <button class = "confirmButton" onClick={() => setPopConfirm(true)}>
                    {mode==="EDIT"?"Save":"Add"}
                </button>

            </div>

        </section>

        

        <Footer></Footer>

        {/* pop up tags it can be anywhere but let say put them here */}
        <ConfirmPopup trigger = {popConfirm} setTrigger = {setPopConfirm} callOnConfirm = {mode==="EDIT"?HandlePutAdmin:HandlePostAdmin}>
        </ConfirmPopup>

        <ReportPopup trigger = {popReport} setTrigger = {setPopReport} errorCondition = {error} mode = {mode} setTriggerReload = {null}>
        </ReportPopup>
        {/* pop up tags it can be anywhere but let say put them here */}

    </div>);

}

export default EditAdmin;
