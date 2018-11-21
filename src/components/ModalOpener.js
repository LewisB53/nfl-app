import React, {Component} from 'react';
import PlayerModal from './Player/PlayerModal'

class ModalOpener extends React.Component {
    constructor(props) {
      super(props)
      this.state = { isModalOpen: false }
    }
  


    render() {
      return (
        <div>
          <button onClick={() => this.openModal()}>Open modal</button>
          <PlayerModal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <h1>Modal title</h1>
            <p>hello</p>
            <p><button onClick={() => this.closeModal()}>Close</button></p>
          </PlayerModal>
        </div>
      )
    }
    openModal() {
        this.setState({ isModalOpen: true })
      }
    
      closeModal() {
        this.setState({ isModalOpen: false })
      }

  }

  export default ModalOpener;