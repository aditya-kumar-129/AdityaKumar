import React from 'react';
import { Stack, Typography, List } from '@mui/material';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CustomChip from './CustomChip';
import CustomListItem from './CustomListItem';
import {
  studioProhireBulletPoints,
  studioProhireTechStacks,
  studioCentralBulletPoints,
  studioCentralTechStacks,
  gfgBulletPoints,
  gfgTopicsCovered,
  gfgArticleDescription,
  tallyGroupBulletPoints,
  tallyGroupTechStacks,
} from './ExperienceConstant';
import CustomButton from './CustomButton';
import GFGArticle from './GFGArticle';

const Experience = () => {
  const stackStyle = {
    width: '75%',
    backgroundColor: 'white',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
    padding: '1rem',
    border: '2.2px solid rgba(197, 115, 230, 0.883)',
  };

  const experienceProjectStyle = {
    width: '90%',
    backgroundColor: 'white',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    margin: '2rem',
    '&:hover': {
      transform: 'scale(1.05)',
      overflow: 'hidden',
      border: '2.2px solid rgba(197, 115, 230, 0.883)',
    },
  };

  const topHeadingStyle = {
    variant: 'h4',
    fontWeight: 'bold',
    fontSize: '2rem',
  };

  const chipStyle = {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  };

  return (
    <Stack>
      <Navbar />
      <Stack sx={{ alignItems: 'center', margin: '1rem', marginTop: '4rem' }}>
        {/* Experience 1 */}
        <Stack sx={{ ...stackStyle, marginBottom: '2rem' }}>
          <Stack
            sx={{
              flexDirection: 'row',
              padding: '1rem',
              margin: '2rem 2rem 0rem 2rem',
              justifyContent: 'space-between',
            }}
          >
            <Stack>
              <CustomButton
                redirectLink={'https://www.linkedin.com/company/tally-group/'}
                name={'Tally Group'}
              />
              <Typography sx={topHeadingStyle}>Software Developer (FULL TIME)</Typography>
            </Stack>
            <Typography sx={topHeadingStyle}>Sep 2023 - Jun 2025</Typography>
          </Stack>
          <Stack>
            <Stack sx={experienceProjectStyle}>
              <Stack sx={{ margin: '0 2rem' }}>
                <List style={{ listStyle: 'none', paddingLeft: '0' }}>
                  {tallyGroupBulletPoints.map((data, index) => {
                    return <CustomListItem bulletPoints={data} key={index} />;
                  })}
                </List>
                <Typography sx={{ ...topHeadingStyle, marginBottom: '2rem' }}>
                  Tech Stack
                </Typography>
                <Stack sx={chipStyle}>
                  {tallyGroupTechStacks.map((data, index) => {
                    return <CustomChip name={data} key={index} />;
                  })}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        {/* Experience 2 */}
        <Stack sx={stackStyle}>
          <Stack
            sx={{
              flexDirection: 'row',
              padding: '1rem',
              margin: '2rem 2rem 0rem 2rem',
              justifyContent: 'space-between',
            }}
          >
            <Stack>
              <CustomButton
                redirectLink={'https://www.linkedin.com/company/sleevesup/'}
                name={'Studio SleevesUp'}
              />
              <Typography sx={topHeadingStyle}>Software Engineer (FULL TIME)</Typography>
            </Stack>
            <Typography sx={topHeadingStyle}>Mar 2023 - Aug 2023</Typography>
          </Stack>
          <Stack>
            {/* Start of Project 1  */}
            <Stack sx={experienceProjectStyle}>
              <Stack sx={{ margin: '2rem 3rem' }}>
                <CustomButton
                  redirectLink={'https://prohire.central.sleevesup.com.au/'}
                  name={'Studio Prohire'}
                />
                <List style={{ listStyle: 'none', paddingLeft: '0' }}>
                  {studioProhireBulletPoints.map((data, index) => {
                    return <CustomListItem bulletPoints={data} key={index} />;
                  })}
                </List>
                <Typography sx={{ ...topHeadingStyle, marginBottom: '2rem' }}>
                  Tech Stack
                </Typography>
                <Stack sx={chipStyle}>
                  {studioProhireTechStacks.map((data, index) => {
                    return <CustomChip name={data} key={index} />;
                  })}
                </Stack>
              </Stack>
            </Stack>
            {/* End of Project 1  */}

            {/* Start of Project 2  */}
            <Stack sx={experienceProjectStyle}>
              <Stack sx={{ margin: '2rem 3rem' }}>
                <CustomButton
                  redirectLink={'https://studio.central.sleevesup.com.au/'}
                  name={'Studio Central'}
                />
                <List style={{ listStyle: 'none', paddingLeft: '0' }}>
                  {studioCentralBulletPoints.map((data, index) => {
                    return <CustomListItem bulletPoints={data} key={index} />;
                  })}
                </List>
                <Typography sx={{ ...topHeadingStyle, marginBottom: '2rem' }}>
                  Tech Stack
                </Typography>
                <Stack sx={chipStyle}>
                  {studioCentralTechStacks.map((data, index) => {
                    return <CustomChip name={data} key={index} />;
                  })}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        {/* Experience 3 */}
        <Stack sx={{ ...stackStyle, marginTop: '2rem' }}>
          <Stack
            sx={{
              flexDirection: 'row',
              padding: '1rem',
              margin: '2rem 2rem 0rem 2rem',
              justifyContent: 'space-between',
            }}
          >
            <Stack>
              <CustomButton
                redirectLink={'https://auth.geeksforgeeks.org/user/adityakumar129/articles'}
                name={'Geeks For Geeks'}
              />
              <Typography sx={topHeadingStyle}>Technical Content Writer & Editor</Typography>
            </Stack>
            <Typography sx={topHeadingStyle}>Mar 2023 - Aug 2023</Typography>
          </Stack>
          <Stack>
            <Stack sx={experienceProjectStyle}>
              <Stack sx={{ margin: '0rem 3rem' }}>
                <List style={{ listStyle: 'none', paddingLeft: '0' }}>
                  {gfgBulletPoints.map((data, index) => {
                    return <CustomListItem bulletPoints={data} key={index} />;
                  })}
                </List>
                <Typography sx={{ ...topHeadingStyle, marginBottom: '2rem' }}>
                  Topics Covered
                </Typography>
                <Stack sx={chipStyle}>
                  {gfgTopicsCovered.map((data, index) => {
                    return <CustomChip name={data} key={index} />;
                  })}
                </Stack>
              </Stack>
            </Stack>
            <Typography sx={{ ...topHeadingStyle, marginLeft: '1rem' }}>
              Some of the artiles that I have written are :
            </Typography>
            <Stack>
              {gfgArticleDescription.map((data, index) => {
                return <GFGArticle description={data.description} link={data.link} key={index} />;
              })}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Experience;
