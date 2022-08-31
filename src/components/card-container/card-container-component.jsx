// import { Component } from 'react'
import './card-container.style.css'

const CardContainer = ({ monster }) => {
  const { id, name, email } = monster
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

// class CardContainer extends Component {
//   render() {
//     const { id, name, email } = this.props.monster
//     return (
//       <div className="card-container" key={id}>
//         <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="" />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     )
//   }
// }
export default CardContainer
