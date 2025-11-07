import React from 'react'
import TicketItem from './TicketItem'

const TicketList = ({tickets}) => {
  return (
    <>
    <u>
    {tickets.length === 0 ? (
        <p>No tickets available</p>
      ) : (
      tickets.map((ticket) => (
        <TicketItem key={ticket.ticketNumber} ticket={ticket} />
      ))
      )}
    </u>
    </>
  )
}

export default TicketList