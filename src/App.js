import React, {Component} from 'react' 
import axios from 'axios' 
import Form from './Form' 

class App extends Component {
  constructor() {
    super()

    this.state = {
      vehicles: [],
    }

    this.addVehicle = this.addVehicle.bind(this)
  }

  componentDidMount() {
    axios.get(`https://joes-autos.herokuapp.com/api/vehicles`)
    .then(response => {
      console.log(response)
      this.setState({
        vehicles: response.data 
      })
    })
    .catch(err => console.log(err))
  }

  addVehicle(newCar) {
    axios.post(`https://joes-autos.herokuapp.com/api/vehicles`, newCar)
    .then(res => {
      this.setState({
        vehicles: res.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    return(
      <div>
        This is App.js 
        <Form addVehicle={this.addVehicle} />
      </div>
    )
  }

}

export default App 