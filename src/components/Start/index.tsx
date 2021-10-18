import { Button, CardActions, CardContent, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'

import bingoDucks from 'reducers/bingo'

const { fetchStartBingo } = bingoDucks.creators

const Start = () => {
  const dispatch = useDispatch()

  const _handleStart = () => {
    dispatch(fetchStartBingo())
  }

  return (
    <>
      <CardContent>
        <Typography component='div' gutterBottom variant='h5'>
          Kata Bingo
        </Typography>
        <Typography variant='body2'>
          A simple bingo game
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={_handleStart} size='small'>Start</Button>
      </CardActions>
    </>
  )
}

export default Start
