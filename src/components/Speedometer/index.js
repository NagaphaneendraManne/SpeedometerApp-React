// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    this.setState(prevState => ({speed: prevState.speed + 10}))
  }

  onDecrement = () => {
    this.setState(prevState => ({speed: prevState.speed - 10}))
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="Speedometer"
          className="image"
        />
        <h1 className="sub-heading">Speed is {speed}mph</h1>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button type="button" className="button" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button type="button" className="button2" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
