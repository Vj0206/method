

import React from 'react'
class methods extends React.Component {
  constructor (props){
    console.log("1 constructor");
  super(props)
  this.state = {favoritecolor:"white"}
  }

  componentDidMount() {
    console.log("3 componentDidmount");
    setTimeout(() => {
      this.setState({favoritecolor:"green"})
    }, 1000);
  }

  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favoritecolor };
  }


 
render () {
  console.log("2 render");

  return(
    <>
    <h1>my favorite color is </h1>
    <div>{this.state.favoritecolor}</div>
    </>
  )
}
}
  export default methods

