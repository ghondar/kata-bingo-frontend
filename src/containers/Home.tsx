import { useMemo } from 'react'
import { Card } from '@mui/material'
import { useSelector } from 'react-redux'

import bingoDucks from 'reducers/bingo'

import Start from 'components/Start'
import Dashboard from 'components/Dashboard'

const { getStart } = bingoDucks.selectors

const Home = () => {
  const start = useSelector(getStart)

  const Component = useMemo(() => {
    if(start)
      return Dashboard

    return Start
  }, [ start ])

  return (
    <Card style={{ width: 500 }}>
      <Component />
    </Card>
  )
}

export default Home
