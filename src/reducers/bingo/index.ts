import produce from 'immer'

import base, { DuckTypes, DuckInitialState } from 'reducers/base'
import {
  fetchStartBingo,
  fetchCreateCard,
  fetchGenerateNumber,
  watchGenerateNumber,
  watchStartBingo,
  watchCreateCard
} from './sagas'

export interface Card {
  _id: number;
  fields: Array<Array<number>>;
}

const initialState = {
  balls : new Array<number>(),
  cards : new Array<Card>(),
  start : false,
  winner: null
}

export type Bingo = DuckInitialState & typeof initialState

export type Action = {
  payload: any;
  type: string;
}

export default base({
  initialState,
  namespace: 'kata-bingo',
  store    : 'bingo'
}).extend({
  creators: ({ types }: DuckTypes) => ({
    fetchCreateCard    : () => ({ type: types.FETCH_CREATE_CARD }),
    fetchGenerateNumber: () => ({ type: types.FETCH_GENERATE_NUMBER }),
    fetchStartBingo    : () => ({ type: types.FETCH_START_BINGO })
  }),
  reducer: (state: Bingo, action: Action, { types }: DuckTypes) =>
    produce<Bingo>(state, (draft: Bingo) => {
      switch (action.type) {
        case types.FETCH_START_BINGO_FULFILLED:

          draft.start = action.payload.start

          return
        case types.FETCH_CREATE_CARD_FULFILLED:

          draft.cards.push(action.payload.card)

          return
        case types.FETCH_GENERATE_NUMBER_FULFILLED:

          draft.balls = action.payload.numbers.reverse()

          return
        default:
          return
      }
    }),
  sagas: {
    fetchCreateCard,
    fetchGenerateNumber,
    fetchStartBingo
  },
  selectors: ({ store }: DuckTypes) => ({
    getBalls : (state: any) => state[store].balls,
    getCards : (state: any) => state[store].cards,
    getStart : (state: any) => state[store].start,
    getWinner: (state: any) => state[store].winner
  }),
  takes: (duck: DuckTypes) => [
    watchStartBingo(duck),
    watchCreateCard(duck),
    watchGenerateNumber(duck)
  ],
  types: [
    'FETCH_START_BINGO',
    'FETCH_CREATE_CARD',
    'FETCH_GENERATE_NUMBER',
    'FETCH_GENERATE_NUMBER_FULFILLED',
    'FETCH_START_BINGO_FULFILLED',
    'FETCH_CREATE_CARD_FULFILLED'
  ]
})
