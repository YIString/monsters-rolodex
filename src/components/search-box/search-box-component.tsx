// import { Component } from 'react'
import './search-box.style.css'
import { ChangeEvent } from 'react'

//import { ChangeEventHandler } from 'react'

type ISeachBoxProps = {
  className: string
  placeholder?: string
 // fun: ChangeEventHandler<HTMLInputElement>  //两者写法 下面一种可以自定义返回的值类型
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void //
}

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: ISeachBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
)

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={`search-box ${this.props.className}`}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     )
//   }
// }

export default SearchBox
