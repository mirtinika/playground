import React from 'react'
import './style.css'

class Cube extends React.Component {
  state={
    rotateX:-10,
    rotateY:-10,
    rotateZ:0,
  }
  onPressFlipRight = () => this.setState({rotateY:-90 + this.state.rotateY})
  onPressFlipLeft = () => this.setState({rotateY:+90+ this.state.rotateY})
  onPressFlipUp= () => this.setState({rotateX:+90 +this.state.rotateX})
  onPressFlipDown= () => this.setState({rotateX:-90 +this.state.rotateX})

  render() {
    const {rotateX, rotateY, rotateZ} = this.state
    const styles = { 
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)` 
  }
  console.log(styles)
    return (
      <div>
        <div className="cube" style={styles}>
          <div className="cube__face cube__face--front">F</div>
          <div className="cube__face cube__face--back">Back</div>
          <div className="cube__face cube__face--right">R</div>
          <div className="cube__face cube__face--left">L</div>
          <div className="cube__face cube__face--top">T</div>
          <div className="cube__face cube__face--bottom">B</div>
        </div>
        <div className="buttons">
          <button onClick={this.onPressFlipRight}> Flip Right</button>
          <button onClick={this.onPressFlipLeft}> Flip Left</button>
          <button onClick={this.onPressFlipUp}> Flip Up</button>
          <button onClick={this.onPressFlipDown}> Flip Down</button>
        </div>
      </div>
    )
  }
}

export default Cube
