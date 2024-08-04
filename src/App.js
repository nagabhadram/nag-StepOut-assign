import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import SeatAvailability from './components/Train/SeatAvailability'
import BookSeat from './components/Booking/BookSeat'
import BookingDetails from './components/Booking/BookingDetails'
import AddTrain from './components/Train/AddTrain'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/seat-availability" component={SeatAvailability} />
        <Route path="/book-seat" component={BookSeat} />
        <Route path="/booking-details/:id" component={BookingDetails} />
        <Route path="/add-train" component={AddTrain} />
        <Route path="/" component={Login} /> {/* Default route */}
      </Switch>
    </Router>
  )
}

export default App
