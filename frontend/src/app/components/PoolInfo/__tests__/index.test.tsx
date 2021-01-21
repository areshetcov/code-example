import * as React from 'react';
import { render } from '@testing-library/react';

import { PoolInfo } from '..';

describe('<PoolInfo  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<PoolInfo />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
