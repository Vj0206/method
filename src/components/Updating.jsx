import React from 'react'


class updating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }

shouldComponentUpdate (){
  return true
}

changeColor = () => {
  this.setState({favoritecolor: "sky blue"});
}

componentDidUpdate(){
  setTimeout(()=>{
    this.setState({favourite:"pink"})
  })
}


  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      {/* <button type="button" onClick={this.changeColor}>Change color</button> */}
      </div>
    );
  }
}


  export default updating