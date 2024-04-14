import React from 'react'

class components extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
   componentDidMount(){
    setTimeout(()=>{
       this.setState({favoritecolor: "white"})
    },1000)
   }

   componentDidUpdate(){
    document.getElementById("mydiv").innerHTML = 
    " The update favorite is " + this.state.favoritecolor
   }

    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="mydiv"></div>
        </div>
      );
    }
  }

export default components