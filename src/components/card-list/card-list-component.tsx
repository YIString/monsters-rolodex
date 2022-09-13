// import { Component } from 'react'
import CardContainer from '../card-container/card-container-component'
import './card-list.style.css'
import { Monster } from '../../App'
type CardListProps = {
  monsters: Monster[]
}
const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <CardContainer monster={monster} key={monster.id} />
      ))}
    </div>
  )
}

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <CardContainer monster={monster} />
//         })}
//       </div>
//     )
//   }
// }

export default CardList
