import React from 'react'

const TicketItem = ({ticket}) => {
  return (
    <>
    <li>
    <p>Bet ID: {ticket.betID}</p>
    <p>Bet Amount: {ticket.betAmount}</p>
    <p>Game Type: {ticket.gameType}</p>
    <p>potentialWinnings: {ticket.potentialWinnings}</p>
    <p>Date: {ticket.date}</p>
    </li>
    </> 
  )
}

export default TicketItem