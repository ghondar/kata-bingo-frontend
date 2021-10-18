import { call, put, take, fork } from 'redux-saga/effects'

import { Get } from 'lib/Request'
import { DuckTypes } from 'reducers/base'

export const fetchStartBingo = ({ types }: DuckTypes) => function* (): Generator<any, any, any> {
  try {
    yield put({ type: types.FETCH_PENDING })
    yield call(Get, 'start')

    yield put({
      payload: {
        start: true
      },
      type: types.FETCH_START_BINGO_FULFILLED
    })
  } catch (e) {
    const error: any = e
    const { type, message, response: { data: { message: messageResponse } = { message: '' } } = {} } = error
    switch (type) {
      case 'cancel':
        yield put({ type: types.FETCH_CANCEL })
        break
      default:
        yield put({
          error: messageResponse || message,
          type : types.FETCH_FAILURE
        })
        break
    }
  }
}

export const fetchCreateCard = ({ types }: DuckTypes) => function* (): Generator<any, any, any> {
  try {
    yield put({ type: types.FETCH_PENDING })
    const { data: { card } } = yield call(Get, 'create/bingo-card')

    yield put({
      payload: {
        card
      },
      type: types.FETCH_CREATE_CARD_FULFILLED
    })
  } catch (e) {
    const error: any = e
    const { type, message, response: { data: { message: messageResponse } = { message: '' } } = {} } = error
    switch (type) {
      case 'cancel':
        yield put({ type: types.FETCH_CANCEL })
        break
      default:
        yield put({
          error: messageResponse || message,
          type : types.FETCH_FAILURE
        })
        break
    }
  }
}

export const fetchGenerateNumber = ({ types }: DuckTypes) => function* (): Generator<any, any, any> {
  try {
    yield put({ type: types.FETCH_PENDING })
    const { data: { numbers } } = yield call(Get, 'generate-number')

    yield put({
      payload: {
        numbers
      },
      type: types.FETCH_GENERATE_NUMBER_FULFILLED
    })
  } catch (e) {
    const error: any = e
    const { type, message, response: { data: { message: messageResponse } = { message: '' } } = {} } = error
    switch (type) {
      case 'cancel':
        yield put({ type: types.FETCH_CANCEL })
        break
      default:
        yield put({
          error: messageResponse || message,
          type : types.FETCH_FAILURE
        })
        break
    }
  }
}

export const watchStartBingo = ({ types, sagas }: DuckTypes): unknown => fork(function* () {
  while (true) {
    yield take(types.FETCH_START_BINGO)
    yield fork(sagas.fetchStartBingo)
  }
})

export const watchCreateCard = ({ types, sagas }: DuckTypes): unknown => fork(function* () {
  while (true) {
    yield take(types.FETCH_CREATE_CARD)
    yield fork(sagas.fetchCreateCard)
  }
})

export const watchGenerateNumber = ({ types, sagas }: DuckTypes): unknown => fork(function* () {
  while (true) {
    yield take(types.FETCH_GENERATE_NUMBER)
    yield fork(sagas.fetchGenerateNumber)
  }
})
