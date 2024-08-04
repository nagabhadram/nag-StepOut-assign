import {useState} from 'react'
import axios from '../../utils/axiosConfig'

function AddTrain() {
  const [trainId, setTrainId] = useState('')
  const [trainName, setTrainName] = useState('')
  const [source, setSource] = useState('')
  const [destination, setDestination] = useState('')
  const [totalSeats, setTotalSeats] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    await axios.post(
      '/api/add-train/',
      {
        train_id: trainId,
        train_name: trainName,
        source,
        destination,
        total_seats: totalSeats,
      },
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
        type="text"
        value={trainName}
        onChange={e => setTrainName(e.target.value)}
        placeholder="Train Name"
        required
      />
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
      <input
        type="number"
        value={totalSeats}
        onChange={e => setTotalSeats(e.target.value)}
        placeholder="Total Seats"
        required
      />
      <button type="submit">Add Train</button>
    </form>
  )
}

export default AddTrain
