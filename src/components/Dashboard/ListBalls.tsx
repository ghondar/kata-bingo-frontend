import { AvatarGroup } from '@mui/material'
import { deepPurple, green } from '@mui/material/colors'
import { FC } from 'react'
import Ball from './Ball'

interface ListBallsProps {
  balls: number[];
}

const ListBalls: FC<ListBallsProps> = ({ balls }) => (
  <>
    {
      balls.length > 0 && (
        <div style={{
          alignItems    : 'center',
          display       : 'flex',
          justifyContent: 'space-between',
          marginBottom  : '1rem'
        }}>
          <Ball ball={balls[0]} color={green[500]} />
          <AvatarGroup max={8}>
            {
              balls.map((ball, index) => index > 0 ? (
                <Ball ball={ball} color={deepPurple[500]} key={index} />
              ) : null)
            }
          </AvatarGroup>
        </div>
      )
    }
  </>
)

export default ListBalls
