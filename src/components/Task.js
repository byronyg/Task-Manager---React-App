const Task = ({tasks}) => {
  return (
    <div className="task">
        <h3>{tasks.text}</h3>
        <p>{tasks.day}</p>
    </div>
  )
}

export default Task