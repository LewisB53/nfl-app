import React, {Component} from 'react';
import PlayerModal from './Player/PlayerModal'

class ModalOpener extends React.Component {
    constructor(props) {
      super(props)
      this.state ={ isModalOpen: false,
                    player: this.props
                  }
    }
  


    render() {
      return (
        <div>
          <button onClick={() => this.openModal()}>View Player Card</button>
          <PlayerModal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <h1>{this.props.name}</h1>
            <span></span>
            <li> Fantasy Points {this.props.weekPts} </li>
            <li> Projected Points {this.props.weekProjectedPts} </li>
            <li></li>
            <p><button onClick={() => this.closeModal()}>Close</button></p>
          </PlayerModal>
        </div>
      )
    }
    openModal() {
        this.setState({ isModalOpen: true })
        console.log("in the modal opener" + this.state.player)
      }
    
      closeModal() {
        this.setState({ isModalOpen: false })
      }

  }

  export default ModalOpener;