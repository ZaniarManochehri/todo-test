import logo from './logo.svg';
import './App.css';
import CurveLayout from './components/CurveLayout';
import MIcon from './components/MIcon';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

function App() {
  return (
    <>
      <CurveLayout >
        <MIcon name={<ShoppingBasketOutlinedIcon />} top={22} right={40} text="" />
        <MIcon name={<LanguageOutlinedIcon />} top={20} right={100} text="EN" />
        <MIcon name={<LocalPhoneOutlinedIcon />} top={20} left={40} text="15103" />
        <p style={{ color: 'white', position: 'absolute', top: 10, left: 150 }}>راه های برقراری ارتباط با ما</p>
      </CurveLayout>
    </>
  );
}

export default App;

const styles = {
  contactDesc: {
    color: 'white',
    position: 'absolute',
    top: 10,
    left: 150,
  }
}
