import {useState} from 'react'
import axios from '../../utils/axiosConfig'

function SeatAvailability() {
  const [source, setSource] = useState('')
  const [destination, setDestination] = useState('')
  const [trains, setTrains] = useState([])

  const handleSubmit = async e => {
    e.preventDefault()
    const response = await axios.get(
      `/api/seat-availability/${source}/${destination}/`,
    )
    setTrains(response.data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={source}
          onChange={e => setSource(e.target.value)}
          placeholder="Source"
          required
        />
        <input
          type="text"
          value={destination}
          onChange={e => setDestination(e.target.value)}
          placeholder="Destination"
          required
        />
        <button type="submit">Check Availability</button>
      </form>
      <ul>
        {trains.map(train => (
          <li key={train.train_id}>
            {train.train_name} - {train.total_seats} seats available
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SeatAvailability
