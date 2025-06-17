import React from "react";
import './Sidebar.css'
import {Link} from 'react-router-dom';

const Sidebar=()=>{
    return(
        <div className="sidebar">
            <Link to={'/addblogs'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src="" alt="" />
                <p>Add Blogs</p>
            </div>
            </Link>
            <Link to={'/listblogs'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src="" alt="" />
                <p>Blogs List</p>
            </div>
            </Link>
            <Link to={'/addpodcast'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src="" alt="" />
                <p>Add Podcasts</p>
            </div>
            </Link>
            <Link to={'/listpodcast'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src="" alt="" />
                <p>Podcast List</p>
            </div>
            </Link>
            <Link to={'/addmeditation'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src="" alt="" />
                <p>Add Meditations</p>
            </div>
            </Link>
            <Link to={'/listmeditation'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src="" alt="" />
                <p>Meditation List</p>
            </div>
            </Link>
        </div>
    )
}

export default Sidebar;