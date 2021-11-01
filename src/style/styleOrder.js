import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles(theme => ({
  containerOrderList: {
    padding: '25px 0',
    color: '#fff'
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