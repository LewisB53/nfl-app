import React, {Component} from 'react';
import Roster from '../Roster'


class AddToRoster extends Component {

  constructor(props) {
    super(props)
    this.state ={ ownedBy: "Vegas Vigilantes",
                  roster: []
                }
  }
    render(){
        return (
          <div className="Player">
            <button onClick={() => this.update()}>Add Player to roster</button>
            <Roster>{this.props.roster}</Roster>
          </div>
        );
      }
      update () {
        this.setState({ ownedBy: "Vegas Vigilantes" })
      }

}


export default AddToRoster;