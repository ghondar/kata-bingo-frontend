import { FC } from 'react'
import { Avatar, Tooltip } from '@mui/material'
import { Card } from 'reducers/bingo'

interface ParticipantProps {
  card: Card;
  onClick: (id: number) => void;
}

const Participant: FC<ParticipantProps> = ({ card, onClick }) => {
  const _handleClick = () => onClick(card._id)

  return (
    <Tooltip title={`Participan ${card._id}`}>
      <Avatar onClick={_handleClick} style={{ cursor: 'pointer' }}>
        {card._id}
      </Avatar>
    </Tooltip>
  )
}

export default Participant
