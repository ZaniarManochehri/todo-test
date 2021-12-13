import React from 'react';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ContentComponent from '../components/ContentComponent';
import Grid from '@mui/material/Grid';

//Component
import logo from '../assets/icon/logo.svg';
import {styles} from '../assets/style';
import {CurveLayout, MIcon, MImage} from './index'
import { TEXT_1, TEXT_2, TEXT_3 } from '../assets/string';

export const Home = () => {

    let {home} = styles;
  return(
<Grid container spacing={2}>
      <Grid item xs={12}>
        <CurveLayout >
          <MIcon name={<ShoppingBasketOutlinedIcon />} top={22} right={40} text="" />
          <MIcon name={<LanguageOutlinedIcon />} top={20} right={100} text="EN" />
          <MIcon name={<LocalPhoneOutlinedIcon />} top={20} left={40} text="15103" />
          <p style={home.contactDesc}>{TEXT_1}</p>
          <ContentComponent >
            <h1 style={home.txt1}>{TEXT_2}</h1>
            <h4 style={home.txt2}>{TEXT_3}</h4>
            <MImage src={logo} top={260} right={150} />
            <MImage src={logo} top={260} left={150} />
            <MImage src={logo} top={100} left={-100} />
            <MImage src={logo} top={100} right={-100} />
          </ContentComponent>
        </CurveLayout>
      </Grid>
    </Grid>
  )
};

export default Home;