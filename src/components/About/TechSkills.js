import React from 'react';
import { Stack, Typography } from '@mui/material';
import {
  SiKotlin,
  SiHtml5,
  SiCss3,
  SiSpringboot,
  SiDocker,
  SiTypescript,
  SiReact,
  SiAmazonaws,
  SiMongodb,
  SiGit,
  SiVisualstudiocode,
  SiBitbucket,
  SiIntellijidea,
  SiDotnet,
  SiAngularjs,
  SiNeo4J,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiFirebase,
  SiPostman,
  SiPython,
  SiRedux,
} from 'react-icons/si';
import { DiNodejs, DiBootstrap, DiJava } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';

const TechSkills = () => {
  const techIcons = {
    fontSize: '4rem',
    margin: '2vw',
    padding: '2rem 4rem',
    opacity: '0.93',
    border: '1.7px solid rgba(200, 137, 230, 0.637)',
    textAlign: 'center',
    borderRadius: '5px',
    boxShadow: '4px 5px 4px 3px rgba(89, 4, 168, 0.137)',
    overflow: 'hidden',
    transition: 'all 0.4s ease 0s',
    lineHeight: '0',
    '&:hover': {
      transform: 'scale(1.05)',
      overflow: 'hidden',
      border: '2.2px solid rgba(197, 115, 230, 0.883)',
    },
  };

  const techSkillTextStyle = {
    marginTop: '0.5rem',
  };

  return (
    <Stack
      sx={{
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '5vw 10vw',
      }}
    >
      <Stack sx={techIcons}>
        <SiHtml5 />
        <Typography variant="h6" sx={techSkillTextStyle}>
          HTML5
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiCss3 />
        <Typography variant="h6" sx={techSkillTextStyle}>
          CSS3
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <DiBootstrap style={{ marginLeft: '1rem' }} />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Bootstrap
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <IoLogoJavascript style={{ marginLeft: '1rem' }} />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Java Script
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiTypescript style={{ marginLeft: '1rem' }} />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Type Script
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiReact />
        <Typography variant="h6" sx={techSkillTextStyle}>
          React
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiRedux />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Redux
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiAngularjs style={{ marginLeft: '0.5rem' }} />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Angularjs
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiKotlin />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Kotlin
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiSpringboot style={{ marginLeft: '1.3rem' }} />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Spring Boot
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <DiJava />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Java
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiPython />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Python
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <DiNodejs />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Nodejs
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiExpress style={{ marginLeft: '0.8rem' }} />
        <Typography variant="h6" sx={techSkillTextStyle}>
          ExpressJs
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiDotnet />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Dotnet
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiMysql />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Mysql
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiPostgresql style={{ marginLeft: '0.8rem' }} />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Postgresql
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiMongodb style={{ marginLeft: '0.8rem' }} />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Mongodb
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiNeo4J />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Neo4J
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiDocker />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Docker
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiAmazonaws />
        <Typography variant="h6" sx={techSkillTextStyle}>
          AWS
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiFirebase style={{ marginLeft: '0.5rem' }} />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Firebase
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiGit />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Git
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiBitbucket style={{ marginLeft: '0.5rem' }} />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Bitbucket
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiIntellijidea style={{ marginLeft: '1rem' }} />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Intellij Idea
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiPostman style={{ marginLeft: '0.4rem' }} />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Postman
        </Typography>
      </Stack>

      <Stack sx={techIcons}>
        <SiVisualstudiocode style={{ marginLeft: '3.5rem' }} />
        <Typography variant="h6" sx={techSkillTextStyle}>
          Visual Studio Code
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TechSkills;
