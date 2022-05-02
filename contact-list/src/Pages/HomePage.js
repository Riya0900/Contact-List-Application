import React,{useState} from 'react';
import { connect } from 'react-redux';
import useStyle from '../App.style';

import { IconButton,Box,Pagination,Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {Link} from "react-router-dom";
import { removeFromList } from '../Redux/ActionCreators';

const HomePage = ({list,removeFromList}) => {
  
  const classes = useStyle();
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const [noOfPages] =useState(
    Math.ceil(list.length / itemsPerPage)
  );
      
  const handlePage = (event, value) => {
    setPage(value);
  };

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
                  <th className={classes.head_th} style={{width : '30%'}}>Name</th>
                  <th className={classes.head_th} style={{width : '6%'}}></th>
                </tr>
              </thead>
              <tbody>
                {list && list.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(contact => {
                return (
                  <tr key={contact.id} className={classes.tr_tag} >
            
                    <td className={classes.td_style}>
                      <div className={classes.thumbnail_img}>
                        <img className={classes.img_style} src={contact.avatar} />
                      </div>
                    </td>
                    
                    <td className={classes.td_style}>
                      <p className={classes.td_name}>{contact.first_name} {contact.last_name}</p>
                    </td>

                    <td className={classes.td_style}>
                      <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={() => removeFromList(contact.id)}
                        className={classes.remove}
                      >
                        <CloseIcon sx={{fontSize:"35px" ,color:"white",background:'#333',borderRadius:'50px'}}/>
                      </IconButton>
                    </td>

                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
            <Box component="span">
              <Pagination 
                count={noOfPages}
                page={page}
                onChange={handlePage}
                defaultPage={1}
                color='error'
                size="large"
                shape="rounded"
                classes={{ ul: classes.paginator }}
              />
            </Box>
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
    list : state.list
  }
}
    
const mapDispatchToProps = dispatch => {
  return {
    removeFromList(id) {
      dispatch(removeFromList(id));
    }
  };
};   
    
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);  