import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
const Footer = () => {
  return (
    <Box p={'4'} bg={'blackAlpha.800'} minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading
            children="All Right Reserved 2023"
            color={'white'}
            fontSize={'2xl'}
          ></Heading>
          <Heading
            fontSize={'sm'}
            children="@Ramkishan "
            color={'yellow.400'}
            fontFamily={'body'}
          ></Heading>
        </VStack>
        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize={'40'}
        >
          <a href="https://youtube.com" target={'blank'} rel="noreferrer">
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://google.com" target={'blank'} rel="noreferrer">
            <TiSocialInstagramCircular />
          </a>
          <a href="https://youtube.com" target={'blank'} rel="noreferrer">
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
