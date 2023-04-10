import './App.css';
import { useEffect,useState} from 'react';
import Axios from 'axios'
import Coin from './Components/Coin';
function App() {

  const [listOfCoins,setLİstOfCoins]=useState([])
  const [search,setSearch]=useState("")

  useEffect(()=>{
    const url='https://api.coinstats.app/public/v1/coins?skip=0'
      Axios.get(url).then((response)=>{
          setLİstOfCoins(response.data.coins)
          console.log(response.data.coins)
      })
  },[])
  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
        <div className='cryptoHeader'><input type="text" placeholder='search Coin..' onChange={(e)=>{setSearch(e.target.value)}} /></div>
        <div className='cryptoDisplay'>{filteredCoins.map((coin)=>(
            <div>
         <Coin       
         name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
              twitter={coin.twitterUrl} />
            </div>
        ))}</div>
    </div>
  );
}

export default App;
