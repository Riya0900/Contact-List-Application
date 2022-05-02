import React from "react";
import useStyle from '../App.style';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from "react-router-dom";

export default function Header(){
  
  const classes = useStyle();

  return (
    <div>
      <div className={classes.header}>
        <ul className={classes.header_item}>
          {/* <li>
            <Link to={"/"} style={{color:'black',textDecoration: 'none'}}>Home</Link>
          </li> */}
          <li>
            <Link to={"/addcontacts"} style={{color:'white',textDecoration: 'none'}}>
              <PersonAddIcon sx={{fontSize:'60px'}}/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};