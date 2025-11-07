import React, { useState, useEffect } from 'react';
import TicketForm from './Component/ticketform';
import TicketList from './Component/TicketList';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState(null);
  //  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    const storedTickets = localStorage.getItem('tickets');
    if (storedTickets) {
      setTickets(JSON.parse(storedTickets));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tickets', JSON.stringify(tickets));
  }, [tickets]);

  const handleSubmit = (tickets) => {
    const existingTicket = tickets.find((t) => t.ticketNumber === tickets.ticketNumber);
    if (existingTicket) {
      setError('Ticket already exists');
    }else {
      setError(null);
      setTickets([...tickets, tickets]);
    }
  };
  // const handleClick = (e) =>{
  //       e.preventDefault();
  //       //process inputValue
  //       setInputValue('');
  //   };
  const handleDelete = (ticketNumber) => {
    const updatedTickets = tickets.filter((t) => t.ticketNumber !== ticketNumber);
    setTickets(updatedTickets);
  };
  return(
    <div className='container'>
    <h1 className='heading'>TICKET-APP</h1>
    <TicketForm onSubmit={handleSubmit} error={error} />
    <TicketList tickets={tickets} onDelete={handleDelete} />

    <footer className='footer'>
      <p>&copy; 2025 Bet Ticket App. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default App;
