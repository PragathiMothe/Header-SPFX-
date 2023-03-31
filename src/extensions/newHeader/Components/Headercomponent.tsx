 import * as React from 'react'
import './Headercomponent.scss'
import Marquee from "react-fast-marquee";
import { AiOutlineSearch } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

import { BsFillDiagram3Fill,BsFillBookmarkStarFill,BsFillCalendarCheckFill,BsFillBriefcaseFill,} from "react-icons/bs";
import { IoDocumentsSharp,IoNewspaperOutline } from "react-icons/io5";
import { RiFileUserFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";




const Headercomponent = (props:any) => {
  // const Sidebar = () => {
    const[sbState, setSbState] = React.useState<any>(true)
  return (
    <>
   {/* <div className={sbState?'sidebar':'sidebaropen'}>
       

       <div className='sidebaritem'><div className="sidebaritemicon"><BsFillBriefcaseFill size={20} color='#fff'/></div><a href='#'>Job Openings</a></div>

       <div className='sidebaritem'><div className="sidebaritemicon"><IoDocumentsSharp size={20} color="#fff"/></div><a href=''>HR Documents</a></div>
       

       <div className='sidebaritem'><div className=" sidebaritemicon"><FaUserFriends  size={20} color="#fff"/></div><a href=''>Employee Details</a></div>

       <div className='sidebaritem'><div className=" sidebaritemicon"><TfiAnnouncement size={20} color="#fff"/></div><a href=''>Announcements</a></div>

       <div className='sidebaritem'><div className="sidebaritemicon"><IoNewspaperOutline size={20} color="#fff"/> </div><a href=''>News</a></div>

       <div className='sidebaritem'><div className="sidebaritemicon"><BsFillCalendarCheckFill size={20} color='#fff'/></div><a href=''>Holidays List</a></div>

       <div className='sidebaritem'><div className='sidebaritemicon'><BsFillDiagram3Fill size={20} color='#fff'/></div><a href=''>Organization Tree</a></div>

       <div className='sidebaritem'><div className="sidebaritemicon"><RiFileUserFill size={20} color='#fff'/> </div><a href=''>HR Feedback</a></div>

       <div className='sidebaritem'><div className=" sidebaritemicon"><BsFillBookmarkStarFill size={20} color='#fff'/></div><a href=''>Star Of The Month</a></div>
       
   </div> <div> */}

    {/* </div> */}


<div className={sbState?'menubarclose':'menubar'}>
  <div className="menuitem">
    <div className="menuicon"><BsFillBriefcaseFill size={20} color='white'/></div>
    <a href=''>Job Openings</a>
  </div>
  <div className="menuitem">
    <div className="menuicon"><IoDocumentsSharp size={20} color="white"/></div>
    <a href=''>HR Documents</a>
  </div>
  <div className="menuitem">
    <div className="menuicon"><FaUserFriends  size={20} color="white"/></div>
    <a href=''>Employee Details</a>
    
  </div>
  <div className="menuitem">
    <div className="menuicon"><TfiAnnouncement size={20} color="white"/></div>
    <a href=''>Announcements</a>
    
  </div>
  <div className="menuitem">
    <div className="menuicon"><IoNewspaperOutline size={20} color="white"/></div>
    <a href=''>News</a>
    
  </div>
  <div className="menuitem">
    <div className="menuicon"><BsFillCalendarCheckFill size={20} color='white'/></div>
    <a href=''>Holidays List</a>
    
  </div>
  <div className="menuitem">
    <div className="menuicon"><BsFillDiagram3Fill size={20} color='white'/></div>
    <a href=''>Organization Tree</a>
    
  </div>
  <div className="menuitem">
    <div className="menuicon"><RiFileUserFill size={20} color='white'/></div>
    <a href=''>HR Feedback</a>
    
  </div>
  <div className="menuitem">
    <div className="menuicon"><BsFillBookmarkStarFill size={20} color='white'/></div>
    <a href=''>Star Of The Month</a>
    
  </div>
</div>

    <div className='Navbars' style={{backgroundImage:`url(${props.uri}/sites/${props.sitename}/SiteAssets/New%20Project.png)`}}>
                  <div className="profile" >
            <img src={props.url} alt="Profilepic"/>
                <div className = "profiledetails">
                <p>{props.greet},</p>
                <p>{props.user}...</p> 
                </div>
                
            </div>
           <div className="imgscroll">
           <Marquee>
           <div className="container">
           <div className="img2"><img src ={`${props.uri}/sites/${props.sitename}/SiteAssets/image1-removebg-preview.png`}/></div>
           <div className="img2"><img src ={`${props.uri}/sites/${props.sitename}/SiteAssets/Devops-removebg-preview.png`}/></div>
           <div className="img2"><img src ={`${props.uri}/sites/${props.sitename}/SiteAssets/image3-removebg-preview.png`}/></div>
           <div className="img2"><img src ={`${props.uri}/sites/${props.sitename}/SiteAssets/image4-removebg-preview.png`}/></div>
           <div className="img2"><img src ={`${props.uri}/sites/${props.sitename}/SiteAssets/Data_Integration-removebg-preview.png`}/></div>
           <div className="img2"><img src ={`${props.uri}/sites/${props.sitename}/SiteAssets/projectengineering-removebg-preview-removebg-preview.png`}/></div>
           <div className="img2"><img src ={`${props.uri}/sites/${props.sitename}/SiteAssets/open_policy_agent-removebg-preview.png`}/></div>
           </div>
           </Marquee>
          
            </div>
            <img className="img1" src="https://24cl8t.sharepoint.com/sites/Dev/SiteAssets/Zelarlogo.png" alt="Logo"></img>
          
     
</div>
     <div className="topnav">
     <ul>
       <li>
     <div className="navList">


     <div className="navItem"><a href=""></a><CgMenuGridO onClick={()=>setSbState(!sbState)} size={20}/></div>
     <div className="navItem"><a href="">Home</a></div>
     <div className="navItem"><a href=" https://24cl8t.sharepoint.com/sites/Dev/ProjectsClients">Projects & clients</a></div>
     <div className ="navItem"><a href="https://24cl8t.sharepoint.com/sites/Dev/HRM">Human Resources</a></div>
     <div className ="navItem"><a href=" https://24cl8t.sharepoint.com/sites/Dev/Admin">Administration</a></div>
     <div className ="navItem"><a href="https://24cl8t.sharepoint.com/sites/Dev/SalesMarketing">Sales & Marketing</a></div>
     <div className ="navItem"><a href="https://24cl8t.sharepoint.com/sites/Dev/Finance">Finanace</a></div>
     <div className ="navItem"><a href="https://24cl8t.sharepoint.com/sites/Dev/LearingManag">Learning management</a></div>
     <div className ="navItem"><a href="https://24cl8t.sharepoint.com/sites/Dev/EcoCult">ZEA</a></div>
     <div className ="navItem"><a href="">About</a></div>
     </div>
     </li>
     </ul>
     {/* <div className="search">
     <input type="text" placeholder="Search..."/>
     <div className="icon">
    <AiOutlineSearch size={20} color='black'/>
     </div>
     </div> */}
<div className="searchBardiv">
  <form action="/_layouts/15/search.aspx/All" method="get">
 <input type="text" placeholder="Search.." name="q"/>
</form>
<button className='submitbtn' type="submit"><AiOutlineSearch size={15}/></button>
</div>

</div>

</>
  )
}


export default Headercomponent