// Write your JS code here
import {useState, useEffect} from 'react'
import axios from '../../utils/axiosConfig'

function BookingDetails({match}) {
  const [booking, setBooking] = useState(null)

  useEffect(() => {
    const fetchBooking = async () => {
      const token = localStorage.getItem('token')
      const response = await axios.get(
        `/api/booking-details/${match.params.id}/`,
        {
          headers: {Authorization: `Token ${token}`},
        },
      )
      setBooking(response.data)
    }
    fetchBooking()
  }, [match.params.id])

  return (
    <div>
      {booking ? (
        <div>
          <h2>Booking Details</h2>
          <p>Train: {booking.train.train_name}</p>
          <p>Seats Booked: {booking.seats_booked}</p>
          <p>Booking Date: {new Date(booking.booking_date).toLocaleString()}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default BookingDetails
