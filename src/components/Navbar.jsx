import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";
import { WiDayShowers } from 'react-icons/wi'
import {BsFillHouseFill} from 'react-icons/bs'
import {TbGhost} from 'react-icons/tb'
import "./Navbar.css"
const Navbar = () => (
  <Stack className="background" direction="row" alignItems="center" p={4} sx={{ position:"relative",top: 0, justifyContent: "left",height:100,backgroundImage:".../img/hutao.jpg" }}>
   
    {/* <Link to="/" style={{ display: "flex", alignItems: "center" }}>
    <BsHouse />
    <Typography>pluvio</Typography>
    </Link> */}
    
    <div className="ICON"><TbGhost size={45}/></div>
    <a href="/pluvio"><h1>PLUVIO</h1></a>
    <SearchBar style={{display:"flex"}}/>
    
  </Stack>
)

export default Navbar;
