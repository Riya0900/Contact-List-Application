import {makeStyles} from '@mui/styles';

const useStyle = makeStyles({
  App :{
    textAlign: 'center',
  },

  header:{
    fontSize: "20px",
    display: "flex",
    height: "85px",
    width: "100%",
    backgroundColor: "#eeeee4",
    justifyContent: "center",
  },

  header_item: {
    textDecoration: "none" ,
    fontSize: '25px',
    "& li": {
      paddingInline: "20px",
      cursor: "pointer",
    },
    "& li:hover": {
      backgroundColor: "rgb(216,0,0,0.5)",
    },
    display: "flex",
    listStyle: "none",
  },

  home_header:{
    fontSize : '2vw',
    color : '#333',
    textAlign: 'center',
    fontFamily: "'Montserrat', sans-serif" ,
    marginBottom : '2%',
  },

  table_container:{
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom:'5%'
  },
  
  main_table:{
    width: '40%',
    justifyContent: 'center',
    height: '100%',
    borderCollapse: 'collapse',
    border: '4px solid black',
    textAlign: 'center',
    fontSize:'20px'
  },
  
  head_th:{
    fontSize: '1.5vw',
    lineHeight: '7vh',
    color: '#808080',
    fontFamily: "'Montserrat', sans-serif" ,
    paddingLeft: '2%',
  },
  
  tr_tag : {
    marginTop:'2%',
  },
  
  td_style:{
    paddingLeft: '2%',
  },
  
  img_style: {
    maxWidth: '80%',
    borderRadius: '80px',
    border: '5px solid rgb(20,83,99)'
  },
  
  thumbnail_img :{
    minWidth: '100px',
  },
  
  remove: {
    cursor: 'pointer',
  },
  
  empty_return:{
    textAlign: 'left',
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '24px',
    marginTop: '24px',
  },
  
  empty_list:{
    marginBottom: '30px',
    marginLeft: 0,
    padding: '20px 30px',
    listStyle: 'none',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#eee',
    borderTop: '2px solid',
  },
  
  td_name : {
    textAlign : 'center',
    color: 'white',
    fontFamily: "'Montserrat', sans-serif" ,
    background: 'rgb(20,83,105)',
    padding:'10%'
  },

  footer: {
    background:'#333', 
    textAlign : 'center',
    color: 'white',
    padding: '1%',
    fontSize : '20px'
  }
})

export default useStyle;