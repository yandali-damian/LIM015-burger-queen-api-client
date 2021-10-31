import { makeStyles } from "@mui/styles";
import logo1 from '../img/logo1.png';
import fondoHome from '../img/contenedor.png';

export const useStyles = makeStyles(theme => ({
  fondoHome: {
    backgroundImage: `url(${fondoHome})`,
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    backgroundSize: 'cover',
    fontFamily: 'Averia Libre',
  },
  logo: {
    backgroundImage: `url(${logo1})`,
    width: '6%',
    height: '6%',
  },
  ToolbarColor: {
    backgroundColor: '#000',
    borderBottom: '3px  solid #fb970e',
  },
  wrapperGrid: {
    margin: '60px',
    padding: '50px',
  },
  headerMesas: {
    position: 'absolute',
    marginTop: '-3vh',
    marginLeft: '5vh'
  },
  containerGrid: {
    padding: '30px',
    paddingTop: '45px',
    background: 'rgba(255, 254, 254, 0.28)',
    borderRadius: '30px',
  },
  miniBox: {
    textAlign: 'center',
    border: '3px solid #fff',
    borderRadius: '30px',
    background: '#000',
    color: '#fff',
    padding: '20px 0',
    margin: '25px 35px',
    fontSize: '40px',
    '&:active': {
      background: '#fff',
      color: '#000'
    }
  }
}));