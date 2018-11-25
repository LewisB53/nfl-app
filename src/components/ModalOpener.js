import React, {Component} from 'react';
import PlayerModal from './Player/PlayerModal'
import Auxx from '../hoc/Auxx/Auxx';
import Roster from './Roster'

class ModalOpener extends React.Component {
    constructor(props) {
      super(props)
      this.state ={ isModalOpen: false,
                    player: this.props,
                    ownedBy: this.props.ownedBy,
                    roster: []
                  }
    }
  


    render() {
      return (
        <div>
          <button onClick={() => this.openModal()}>View Player Card</button>
          <PlayerModal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <h1>{this.props.name}</h1>
            <li> Team:  {this.state.ownedBy} </li>
            <span></span>
            <li> Fantasy Points {this.props.weekPts} </li>
            <li> Projected Points {this.props.weekProjectedPts} </li>
           

            <li></li>
           
            <p><button onClick={() => this.closeModal()}>Close</button></p>
            <p><button onClick={() => this.setState({ ownedBy: "Vegas Vigilantes" })}>Add Player to Roster </button></p>
            <Roster player={this.props.name} ></Roster>
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