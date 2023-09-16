import React, { useEffect, useRef, useState } from 'react';
import { Stack, Button, Typography, LinearProgress } from '@mui/material';
import { FaFileDownload } from 'react-icons/fa';
import { ReactComponent as FilesIcon } from '../../assets/resume-files.svg';
import { Document, Page, pdfjs } from 'react-pdf';
import AdityaKumarResume from '../../assets/Aditya_Kumar_Resume.pdf';
import Navbar from '../Navbar';
import Footer from '../Footer';

// The below Import is necessary because of the following reasons:
// this statement is importing a CSS file from the react-pdf library that is required for rendering PDF annotations or layers correctly when using the library to display PDF documents in a React application.
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const resumeLink = AdityaKumarResume;

const Resume = () => {
  const pdfWrapper = useRef(null);
  const [pdfPageWidth, setPdfPageWidth] = useState(null);

  useEffect(() => {
    setPdfPageWidth(pdfWrapper.current?.getBoundingClientRect().width || null);
  }, []);

  return (
    <Stack>
      <Navbar />
      <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', margin: '10rem 20rem' }}>
        <Stack>
          <Typography variant="h1" fontWeight="bold" sx={{ marginTop: '10rem' }}>
            My
          </Typography>
          <Typography variant="h1" fontWeight="bold">
            Resume
          </Typography>
        </Stack>
        <FilesIcon style={{ width: '33%', minWidth: '120px' }} />
      </Stack>

      <Stack sx={{ alignItems: 'center' }}>
        <Button
          sx={{
            backgroundColor: '#be6adf',
            width: '21rem',
            height: '3.5rem',
            '&:hover': {
              backgroundColor: 'rgba(109, 32, 197, 0.8431372549019608)',
              borderColor: 'rgba(109, 32, 197, 0.8431372549019608)',
            },
          }}
        >
          <FaFileDownload style={{ color: '#fff', marginRight: '0.6rem', fontSize: '1.5rem' }} />
          <Typography sx={{ color: 'white', fontSize: '1.5rem' }}>Download Resume</Typography>
        </Button>
      </Stack>

      <Stack sx={{ marginTop: '2rem', alignItems: 'center' }} ref={pdfWrapper}>
        <Document file={{ url: resumeLink }} loading={<LinearProgress />}>
          <Page
            width={pdfPageWidth}
            pageNumber={1}
            renderTextLayer={false}
          />
        </Document>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Resume;
