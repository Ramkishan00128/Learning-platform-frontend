import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import introvideo from '../../assets/videos/intro.mp4';
import termAndCondition from '../../assets/docs/termsAndCondition';
import me from '../../assets/images/me.jpg';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar src={me} boxSize={['40', '48']} />
      <Text children=" Co-Founder" opacity="0.7" />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Ramkishan" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={
          'Hi, I am a Self Educated Full Stack Devloper , I have a one year Experience in MERN Devlopement and i build So many Project'
        }
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay={true}
      muted
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introvideo}
    ></video>
  </Box>
);

const TandC = ({ termAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children={'Terms & Condition'}
      textAlign={['center', 'left']}
      my={'4'}
    />

    <Box h={'sm'} p="4" overflowY={'scroll'}>
      <Text
        textAlign={['center', 'left']}
        letterSpacing="widest"
        fontFamily={'heading'}
      >
        {termAndCondition}
      </Text>
      <Heading
        my={'4'}
        size={'xs'}
        children="Refund  application only within 7 Days"
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />

      <Stack m={'8'} direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          We are India's no. platform who provide high quality education content
          free, and There are some Premium Courses also available for Premium
          Member
        </Text>

        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />

      <TandC termAndCondition={termAndCondition} />

      <HStack my="4" p="4">
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          children="Payment is Secure by RazorPay"
        />
      </HStack>
    </Container>
  );
};

export default About;
