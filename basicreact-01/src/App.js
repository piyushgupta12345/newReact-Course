import './App.css';
import Item from "./components/Item"
import ItemDate from './components/ItemDate';
import Card from './components/Card'

function App() {

  const items = [
    {
      name: "item1",
      day: "20",
      month: "June",
      year: "2019"
    },
    {
      name: "item2",
      day: "21",
      month: "July",
      year: "2020"
    },
    {
      name: "item3",
      day: "22",
      month: "August",
      year: "2021"
    }
  ]
  return (
    <Card>
      <Item name={items[0].name}>
        hello ji kya hal chal
      </Item>
      <ItemDate day={items[0].day} month={items[0].month} year={items[0].year}></ItemDate>

      <Item name={items[1].name}></Item>
      <ItemDate day={items[1].day} month={items[1].month} year={items[1].year}></ItemDate>

      <Item name={items[2].name}></Item>
      <ItemDate day={items[2].day} month={items[2].month} year={items[2].year}></ItemDate>

      <div className="App">
        Hello jee
      </div>
    </Card>
  );
}

export default App;
