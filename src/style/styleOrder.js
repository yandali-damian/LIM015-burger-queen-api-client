import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
  containerOrderList: {
    margin: '20px',
    padding: '35px 45px',
    background: 'rgba(0, 0, 0, 0.45)',
    borderRadius: '30px',
    color: '#fff',
    width: '80%'
  },
  orderMenu: {
    fontSize: '36px',
    padding: '0 20px'
  },
  btnDelete: {
    fontSize: '90px',
    '&:hover': {
      color: 'rgba(225, 0, 0, 0.45)'
    }
  }
}))