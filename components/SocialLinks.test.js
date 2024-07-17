import React from 'react';
import { render } from '@testing-library/react-native';
import SocialLinks from './SocialLinks';
import '@testing-library/jest-native/extend-expect';

test('should render the label of the social link', () => {
  const { getByText } = render(
    <SocialLinks
      type="twitter"
      label="John Doe's Twitter"
      link="<https://google.com/>"
    />,
  );

  const label = getByText("John Doe's Twitter");
  expect(label).toBeTruthy();
});
