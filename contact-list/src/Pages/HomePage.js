import React from 'react';
import { connect } from 'react-redux';
import useStyle from '../App.style';

import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {Link} from "react-router-dom";
import { removeFromWish } from '../Redux/ActionCreators';

const HomePage = ({list,removeFromWish}) => {
  
  const classes = useStyle();

  return (
    <>
      {list && list.length !== 0 ? (
        <div className={classes.home_container}>
          <p className={classes.home_header}><b>Contact List</b></p>
          <div className={classes.table_container}>
            <table className={classes.main_table}>
              <thead className={classes.table_thead}>
                <tr className={classes.tr_tag}>
                  <th className={classes.head_th} style={{width : '10%'}}>Picture</th>
                  <th className={classes.head_th} style={{width : '20%'}}>First Name</th>
                  <th className={classes.head_th} style={{width : '20%'}}>Last Name</th>
                  <th className={classes.head_th} style={{width : '6%'}}></th>
                </tr>
              </thead>
              <tbody>
                {list && list.map(contact =>
                  <tr key={contact.id} className={classes.tr_tag} >
            
                    <td className={classes.td_style}>
                      <div className={classes.thumbnail_img}>
                        <img className={classes.img_style} src={contact.avatar} />
                      </div>
                    </td>
                    
                    <td className={classes.td_style}>
                      <p className={classes.td_name}>{contact.first_name}</p>
                    </td>

                    <td className={classes.td_style}>
                      <p className={classes.td_name}>{contact.last_name}</p>
                    </td>

                    <td className={classes.td_style}>
                      <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={() => removeFromWish(contact.id)}
                        className={classes.remove}
                      >
                        <CloseIcon fontSize="inherit" color="error"/>
                      </IconButton>
                    </td>

                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : 
      (
        <div className={classes.empty_return}>
          <div className={classes.empty_list}>
            <p>Contact List is currently empty.</p>
          </div>
          <Link to={'/addcontacts'} style={{color: 'red', fontSize : 20}}>Add Contacts</Link>
        </div>
      )}
    </>
  );
}
    
const mapStateToProps = state => {
  console.log(state)
  return {
    list : state.reducer.list
  }
}
    
const mapDispatchToProps = dispatch => {
  return {
    removeFromWish(id) {
      dispatch(removeFromWish(id));
    }
  };
};   
    
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);  