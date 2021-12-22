import React from 'react';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ContentComponent from '../components/ContentComponent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

//Component
import {
  CurveLayout,
  MButton,
  MIcon,
  MImage,
  RowLayout,
  ColLayout,
  styles,
  logo,
} from '../loader'
import {
  TEST_1,
  TEST_2,
  TEST_3,
  TEST_4,
  TEST_5,
  TEXT_1,
  TEXT_2,
  TEXT_3
} from '../assets/string';

export const Home = () => {

  let { home } = styles;
  return (
    <Grid container spacing={2} style={{ minHeight: '100vh' }}>
      <Grid item xs={12}>
        <CurveLayout>
          <ContentComponent>
            <RowLayout>
              <Stack direction="row" spacing={2}>
                <MIcon name={<LocalPhoneOutlinedIcon />} text="15103" />
                <p style={home.contactDesc}>{TEXT_1}</p>
              </Stack>
              <Stack direction="row" spacing={2}>
                <MIcon name={<LanguageOutlinedIcon />} text="EN" />
                <MIcon name={<ShoppingBasketOutlinedIcon />} text="" />
              </Stack>
            </RowLayout>
            <RowLayout marginTop={10}>
              <Stack direction="row" spacing={2}>
                <span style={home.txt1}>{TEST_1}</span>
                <span style={home.txt1}>{TEST_2}</span>
                <span style={home.txt1}>{TEST_3}</span>
              </Stack>
              <img src={logo} alt="logo" width="200" height="200" />
              <Stack direction="row" spacing={2}>
                <span style={home.txt1}>{TEST_4}</span>
                <span style={home.txt1}>{TEST_5}</span>
              </Stack>
            </RowLayout>
            <ColLayout marginBottom={20}>
              <h1 style={home.txt1}>{TEXT_2}</h1>
              <h4 style={home.txt1}>{TEXT_3}</h4>
              <MButton />
            </ColLayout>
            <MImage src={logo} bottom={-50} right={150} />
            <MImage src={logo} bottom={-50} left={150} />
            <MImage src={logo} bottom={80} left={-100} />
            <MImage src={logo} bottom={80} right={-100} />
          </ContentComponent>
        </CurveLayout>
      </Grid>
    </Grid>
  )
};

export default Home;