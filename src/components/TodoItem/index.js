// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoListItem, deleteUser} = props
  const {title, id} = todoListItem

  //onClicking onDelete function the function calls deleteUser Function which presents in SimpleTodos.js File
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="each-list-container">
      <p className="list-item">{title}</p>
      <button type="button" className="dlt-btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
