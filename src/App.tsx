// import { Component } from 'react'
// import logo from './logo.svg'
import { useState, useEffect,ChangeEvent } from 'react'
import CardList from './components/card-list/card-list-component'
import SearchBox from './components/search-box/search-box-component'
import './App.css'
import { getData } from './utils/data.utils'

export type Monster = {
  id: string
  name: string
  email: string
}

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [filterMonster, setFilterMonster] = useState(monsters)
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    //   .then((users) => setMonsters(users))
    const fetchUser = async () => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      )
        setMonsters(users)
    }
    fetchUser()
  }, [])

  useEffect(() => {
    const filterMonsterString = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })
    setFilterMonster(filterMonsterString)
  }, [monsters, searchField])
  const onSearchChange = (event:ChangeEvent<HTMLInputElement>) => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }
  return (
    <div className="App">
      <h1 className="app-title">Monster Roloedx</h1>
      <SearchBox
        className="monster-search-box"
        placeholder="search monsters"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filterMonster} />
    </div>
  )
}

/*class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: '',
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((user) => {
        this.setState(() => {
          return { monsters: user }
        })
      })
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }
  render() {
    const { onSearchChange } = this
    const { monsters, searchField } = this.state
    const filterMonsterString = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })
    return (
      <div className="App">
        <h1 className='app-title'>Monster Roloedx</h1>
        <SearchBox
          className="monster-search-box"
          placeholder="search monsters"
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filterMonsterString} />
      </div>
    )
  }
}*/
export default App
