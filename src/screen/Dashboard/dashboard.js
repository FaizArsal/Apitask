import { Route, Routes, Router,Link } from "react-router-dom";
import Message from "../Dashboard/message";
import Feedback from "../Dashboard/feedback";
import Notification from "../Dashboard/notification";
import AllData from "../data";
export default function Dashboard(){
    return (
    <>
    <div>
    <h1>Dashboard</h1>
    <br/>    <Link to="message">Message</Link><br/>
        <br/>   <Link to="feedback">Feedback</Link><br/>
        <br/>  <Link to="notification">Notification</Link><br/>
        <br/>  <Link to="AllData">AllData</Link><br/>

    <Routes>
        <Route path="message" element={<Message />}/>
        <Route path="feedback" element={<Feedback />}/>  
        <Route path="notification" element={<Notification />}/>
        <Route path="AllData" element={<AllData />}/>
    </Routes>
    </div>
    </>)
}