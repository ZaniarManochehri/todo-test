import logo from './logo.svg';
import './App.css';
import CurveLayout from './components/CurveLayout';
import MIcon from './components/MIcon';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ContentComponent from './components/ContentComponent';
import MButton from './components/MButton';
import MImage from './components/MImage';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CurveLayout >
          <MIcon name={<ShoppingBasketOutlinedIcon />} top={22} right={40} text="" />
          <MIcon name={<LanguageOutlinedIcon />} top={20} right={100} text="EN" />
          <MIcon name={<LocalPhoneOutlinedIcon />} top={20} left={40} text="15103" />
          <p style={styles.contactDesc}>راه های برقراری ارتباط با ما</p>
          <ContentComponent >
            <h1 style={styles.txt1}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h1>
            <h4 style={styles.txt2}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ست، و ، و  کاربردیاساسا مورد استفاده قرار گیرد.</h4>
            <MImage top={260} right={200} />
            <MImage top={260} left={200} />
            <MImage top={100} left={-100} />
            <MImage top={100} right={-100} />
          </ContentComponent>
        </CurveLayout>
      </Grid>
    </Grid>
  );
}

export default App;

const styles = {
  contactDesc: {
    color: 'white',
    position: 'absolute',
    top: 10,
    left: 150,
  },

  txt1: {
    color: 'white',
    marginRight: 10,
    marginLeft: 10
  },

  txt2: {
    color: 'white',
    textAlign: 'center',
    marginRight: 10,
    marginLeft: 10
  }
}
