import React from "react";
import './Admin.css';
import Sidebar from "../../Components/Sidebar/Sidebar";
import {Routes, Route} from 'react-router-dom';
import Addblogs from '../../Components/Addblogs/Addblogs'
import Listblogs from "../../Components/Listblogs/Listblogs";
import EditBlogForm from "../../Components/Listblogs/EditBlogForm";
import Addstory from "../../Components/Addstories/Addstory";
import Liststory from "../../Components/ListStories/Liststory";
import EditStory from "../../Components/Addstories/EditStory";
import AddPodcast from "../../Components/Addpodcast/Addpodcast";
import ListPodcast from "../../Components/Listpodcasts/Listpodcast";
import EditPodcast from "../../Components/Addpodcast/Editpodcast";
import AddMeditation from "../../Components/Addmeditation/Meditation";
import ListMeditation from "../../Components/Listmeditation/Listmeditation";
import EditMeditation from "../../Components/Addmeditation/Editmeditation";

const Admin= ()=>{
    return(
        <div className="admin">
            <Sidebar/>
            <div className="admin-content">
            <Routes>
                <Route path='/addblogs' element={<Addblogs/>}/>
                <Route path='/listblogs' element={<Listblogs/>}/>
                <Route path='/edit/:id' element={<EditBlogForm/>}/>
                <Route path='/addstories' element={<Addstory/>}/>
                <Route path='/liststories' element={<Liststory/>}/>
                <Route path='/editstory/:id' element={<EditStory/>}/>
                <Route path='/addpodcast' element={<AddPodcast/>}/>
                <Route path='/listpodcast' element={<ListPodcast/>}/>
                <Route path='/editpodcast/:id' element={<EditPodcast/>}/>
                <Route path='/addmeditation' element={<AddMeditation/>}/>
                <Route path='/listmeditation' element={<ListMeditation/>}/>
                <Route path='/editmeditation/:id' element={<EditMeditation/>}/> 
            </Routes>
            </div>
        </div>
    )
}

export default Admin;