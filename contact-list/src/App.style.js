import {makeStyles} from '@mui/styles';

const useStyle = makeStyles({
  App :{
    textAlign: 'center',
    background: "#eeeee4",
  },

  header:{
    display: "flex",
    height: "85px",
    width: "100%",
    justifyContent: "right",
    backgroundColor: "#444",
  },

  header_item: {
    textDecoration: "none" ,
    display: "flex",
    listStyle: "none",
    paddingInline:'2%'
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
  },
  
  main_table:{
    width: '40%',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize:'20px',  
  },
  
  head_th:{
    fontSize: '1.5vw',
    lineHeight: '7vh',
    color: '#333',
    fontFamily: "'Montserrat', sans-serif" ,
    paddingLeft: '2%',
  },
  
  td_style:{
    paddingLeft: '2%',
  },
  
  img_style: {
    maxWidth: '60%',
    borderRadius: '80px',
    border: '5px solid #333'
  },
  
  thumbnail_img :{
    minWidth: '30px',
  },

  empty_return:{
    textAlign: 'left',  
    paddingInline: '15px',
    marginBottom: '24px',
    marginTop: '24px',  
  },
  
  empty_list:{
    marginBottom: '30px',
    padding: '1%',
    background: 'white',
    borderTop: '2px solid', 
  },
  
  td_name : {
    textAlign : 'center',
    color: 'black',
    fontFamily: "'Montserrat', sans-serif" ,
    backgroundColor: "white",
    padding:'5%'
  },

  paginator: {
    justifyContent: "center",
    margin: '3% !important',
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