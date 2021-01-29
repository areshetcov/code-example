import * as React from 'react';
import { render } from '@testing-library/react';

import { PredictModal } from '../index';
import { Totems } from '../../../../../types/enums';

describe('<PredictModal  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <PredictModal close={() => {}} totem={Totems.FOX} isOpen={true} isMobile={true} />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
