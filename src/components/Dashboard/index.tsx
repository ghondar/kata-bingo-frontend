import { Button, CardActions, CardContent, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import bingoDucks, { Card } from 'reducers/bingo'
import Participant from './Participant'
import ListBalls from './ListBalls'

const { fetchCreateCard, fetchGenerateNumber } = bingoDucks.creators
const { getCards, getBalls } = bingoDucks.selectors

const Dashboard = () => {
  const dispatch = useDispatch()

  const cards: Array<Card> = useSelector(getCards)
  const balls: Array<number> = useSelector(getBalls)

  const _handleDealCards = () => {
    dispatch(fetchCreateCard())
  }

  const _handleThrowBall = () => {
    dispatch(fetchGenerateNumber())
  }

  const _handleOpenParticipant = () => {

  }

  return (
    <>
      <CardContent>
        <Typography gutterBottom variant='h5'>
          Kata Bingo
        </Typography>

        <Typography gutterBottom variant='body2'>
          Welcome to the dashboard. You can use deal cards
        </Typography>

        <Typography gutterBottom variant='h6'>
          Balls
        </Typography>

        <ListBalls balls={balls} />

        <Typography gutterBottom variant='h6'>
          Participants
        </Typography>

        <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
          {
            cards.map((card, index) => (
              <Participant card={card} key={index} onClick={_handleOpenParticipant} />
            ))
          }
        </div>

      </CardContent>
      <CardActions>
        <Button onClick={_handleDealCards} size='small'>Deal cards</Button>
        <Button onClick={_handleThrowBall} size='small' variant='contained'>Throw ball</Button>
      </CardActions>
    </>
  )
}

export default Dashboard
