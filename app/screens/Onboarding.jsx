import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import Slide1 from './slide1';
import Slide2 from './slide2';
import Slide3 from './slide3';

const OnboardingScreen = () => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#fff',
          image: <Slide1 />,
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: 'red',
          image: <Slide2 />,
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: 'blue',
          image: <Slide3 />,
          title: '',
          subtitle: '',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
