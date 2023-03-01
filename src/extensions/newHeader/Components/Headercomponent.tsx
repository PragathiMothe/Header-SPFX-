import * as React from 'react'
import './Headercomponent.scss'
import Marquee from "react-fast-marquee";
import { AiOutlineSearch } from "react-icons/ai";

const Headercomponent = (props:any) => {
  

  return (
    <>
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
            <img className="img1" height={100} width={40} src="https://media.licdn.com/dms/image/C560BAQFacTXsV9Hupw/company-logo_200_200/0/1631323893584?e=2147483647&v=beta&t=ZDcsOZW4FVQnZUmmycNuNjKm_ULyE2T1OiEEUO6M6kk" alt="Logo"/> 
          
     
</div>
     <div className="topnav">
     <ul>
       <li>
     <div className="navList">
     <div className="navItem"><a href="">Home</a></div>
     <div className="navItem"><a href=" https://24cl8t.sharepoint.com/sites/Dev/ProjectsClients">Projects & clients</a></div>
     <div className ="navItem"><a href="https://24cl8t.sharepoint.com/sites/Dev/HRM">Human Resources</a></div>
     <div className ="navItem"><a href=" https://24cl8t.sharepoint.com/sites/Dev/Admin">Administration</a></div>
     <div className ="navItem"><a href="https://24cl8t.sharepoint.com/sites/Dev/SalesMarketing">Sales&Marketing</a></div>
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

<form action="/_layouts/15/search.aspx/All" method="get">
 <input type="text" placeholder="Search.." name="q"/>
 <button className='submitbtn' type="submit"><AiOutlineSearch size={15}/></button>
</form>
</div>
</>
  )
}

export default Headercomponent