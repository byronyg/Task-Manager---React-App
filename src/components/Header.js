import Button from "./Button";

const Header = ({title}) => {

  const onClick = () => {
    console.log("object")
  }
  return (
  <header className='header'>
      <h1>{title}</h1>
      <Button onClick={onClick} color="green" text="Add" />
  </header>
  )
}
Header.defaultProps = {
    title: 'Task Tracker',
}

// CSS in JS
// const headingStyle = {
//   color: 'red', 
//   backgroundColor: 'blue'
// }

export default Header;
