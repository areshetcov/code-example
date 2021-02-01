/**
 *
 * PoolInfo
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { CtaButton } from '../../../components/CtaButton';
import { Icon } from '../../../components/Icon';
import { Scale } from '../../../components/Scale';
import { Timer } from '../Timer';
import { mediaQueries } from '../../../../types/constants';
import { Column, Row } from '../../../components/blocks';

interface Props {
  showModal: () => void;
}

export function PoolInfo(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const totem = 'Fox';

  return (
    <Div>
      {t('')}
      <Title>
        <Icon height={40} width={40} url={`${totem.toLowerCase()}-white.svg`} />
        <p>
          {totem} {t(...messages.predictorPool)}
        </p>
      </Title>
      <TimerContainer>
        <Timer />
      </TimerContainer>
      <ScaleContainer>
        <p>
          <b>
            {t(...messages.thisPoolIs)} 63% {t(...messages.full)}
          </b>
        </p>
        <Scale fill={63} />
      </ScaleContainer>
      <ButtonWrapper>
        <CtaButton
          color={'#181818'}
          background={'white'}
          showModal={props.showModal}
        />
      </ButtonWrapper>
    </Div>
  );
}

const Div = styled(Column)`
  height: 210px;
  width: 60%;
  background-color: #ff6701;
  max-width: 420px;
  margin-left: 30px;
  color: white;
  justify-content: space-between;
  ${mediaQueries.lessThan('small')`
    width: 100%;
    height: auto;
    margin-left: 0;
  `}
`;
const Title = styled(Row)`
  width: 100%;
  height: 70px;
  font-size: 18px;
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;
  p {
    font-size: 20px;
  }
  ${mediaQueries.lessThan('small')`
    height: auto;
    display: none;
  `}
`;
const TimerContainer = styled.div`
  margin-bottom: 30px;
  ${mediaQueries.greaterThan('small')`
    display: none;
  `}
`;
const ScaleContainer = styled.div`
  width: 100%;
  padding: 0 30px;
  text-align: center;
  p {
    font-size: 15px;
  }
  ${mediaQueries.lessThan('small')`
    p {font-size: 10px;}
    margin-bottom: 20px;
  `}
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 50px;
  align-self: end;
`;
