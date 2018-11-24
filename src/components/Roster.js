import React, {Component} from 'react';


class Roster extends Component {
    
    render(){
        return (
          <div className="Player">
            {this.props.roster}
          </div>
        );
      }

}


export default Roster;