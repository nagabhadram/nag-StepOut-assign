import {useState} from 'react'
import axios from '../../utils/axiosConfig'

function BookSeat() {
  const [trainId, setTrainId] = useState('')
  const [seats, setSeats] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    await axios.post(
      '/api/book-seat/',
      {train_id: trainId, seats},
      {
        headers: {Authorization: `Token ${token}`},
      },
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={trainId}
        onChange={e => setTrainId(e.target.value)}
        placeholder="Train ID"
        required
      />
      <input
        type="number"
        value={seats}
        onChange={e => setSeats(e.target.value)}
        placeholder="Seats"
        required
      />
      <button type="submit">Book Seat</button>
    </form>
  )
}

export default BookSeat
