const { useState } = React;

const GroceryListItem = (props) => {
  const [done, setDone] = useState(false);
  const [bold, setBold] = useState(false);
  const style = {
    textDecoration: done ? 'line-through' : 'none',
    fontWeight: bold ? 'bold' : 'normal'
  };

  return (
    <li style={style} onClick={() => setDone(!done)} onMouseEnter={() => setBold(!bold)} onMouseLeave={() => setBold(!bold)}>
      {props.item}
    </li>
  )
}

const GroceryList = (props) => (
  <ul>
    {props.items.map((item) => (
      <GroceryListItem item={item} />
    ))}
  </ul>
)


ReactDOM.render(<GroceryList items={['Almond Milk', 'Tofu', 'Eggs', 'TVP']} />, document.getElementById('app'));