import { FC } from 'react'
import { Avatar, Tooltip } from '@mui/material'

interface BallProps {
  ball: number;
  color: string;
}

const Ball: FC<BallProps> = ({ ball, color }) => (
  <Tooltip title={`Ball ${ball}`}>
    <Avatar sx={{ bgcolor: color }}>
      {ball}
    </Avatar>
  </Tooltip>
)

export default Ball
