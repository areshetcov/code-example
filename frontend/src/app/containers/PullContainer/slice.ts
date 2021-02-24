import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { useInjectReducer } from 'redux-injectors';

// The initial state of the PullContainer container
export const initialState: ContainerState = {
  isShowModal: false,
  drawData: [],
  graphicsData: [],
  allPayouts: 1568522,
};

const pullContainerSlice = createSlice({
  name: 'pullContainer',
  initialState,
  reducers: {
    getGraphicsData() {},
    getGraphicsDataSuccess(state, action: PayloadAction<any>) {
      state.graphicsData = action.payload;
    },
    getData() {},
    getDataDrawSuccess(state, action: PayloadAction<any[]>) {
      state.drawData = action.payload;
    },
    getAllPayoutSuccess(state, action: PayloadAction<number>) {
      state.allPayouts = action.payload;
    },
    showModal(state) {
      state.isShowModal = !state.isShowModal;
    },
    makePredict(
      state,
      action: PayloadAction<{
        bitcoinPrice: number;
        stakeValue: number;
        user: any;
      }>,
    ) {
      return state;
    },
  },
});

export const {
  actions: pullContainerActions,
  reducer,
  name: sliceKey,
} = pullContainerSlice;

export const usePullContainerSlice = () => {
  useInjectReducer({
    key: pullContainerSlice.name,
    reducer: pullContainerSlice.reducer,
  });
  return { actions: pullContainerSlice.actions };
};
