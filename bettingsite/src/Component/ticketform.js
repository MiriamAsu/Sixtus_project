import React, { useState } from 'react';
import './ticketform.css';

const TicketForm = ({onSubmit, error}) => {
    const [betID, setBetID] = useState('');
    const [betAmount, setBetAmount] = useState('');
    const [gameType, setgameType] = useState('');
    const [potentialWinnings, setPotentialWinnings] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({betID, betAmount, gameType, potentialWinnings, date});
        setBetID('');
        setBetAmount('');
    };
  return (
    <>
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <input type='text' value={betID} onChange={(e) => setBetID(e.target.value)} placeholder='Bet ID'/>
            <input type='number' value={betAmount} onChange={(e) => setBetAmount(e.target.value)} placeholder='Bet Amount'/>
            <input type='number' value={potentialWinnings} onChange={(e) => setPotentialWinnings(e.target.value)} placeholder='Potential Winnings'/>
            <input type='date' value={date} onChange={(e) => setDate(e.target.value)} placeholder='Date'/>
            {error && <p style={{ color:'red'}}>{error}</p>}
            <button type='submit'>Add Ticket</button>
            <select value={gameType} onChange={(e) => setgameType(e.target.value)}>
                <option value=''>Select Game Type</option>
                <option value='Football'>Football</option>
                <option value='Basketball'>Basketball</option>
                <option value='Tennis'>Tennis</option>
                <option value='Cricket'>Cricket</option>
                <option value='zoom'>Zoom</option>
                <option value='Live'>Live</option>
            </select>
        </form>
    </div>
    </>
  )
}
export default TicketForm