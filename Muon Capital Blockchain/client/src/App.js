import abi from './contract/TodoLists.json'
import { ethers } from 'ethers';
import {useState, useEffect} from 'react';
import './App.css';
import Main from './UI/main';
import { useDispatch } from 'react-redux';
import {AccountHandler, ContractHandler} from './Redux/action/action.js'


function App() {
  const [color, setColor] = useState("dark");
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });

  const dispatch = useDispatch();

  useEffect(()=>{
    const connectWallet = async()=>{
      const contractAddress = "0x3b85b21a0f4475a670207dd8f69a99f349585ba7";
      const contractABI = abi.abi;

      try{
          const {ethereum} = window;
          if(ethereum){
            const account = await ethereum.request({method: "eth_requestAccounts", });
            dispatch(AccountHandler(account))
            // console.log(account)
          }
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, contractABI, signer);
          setState({provider, signer, contract});
        }catch(err){
          console.log(err);
        }
      }  
      connectWallet();

    }, [state, dispatch]);
    
    
    useEffect(()=>{
      dispatch(ContractHandler(state));
    }, [state, dispatch])
  return (
    <>
      <div style={color === "dark" ? { backgroundColor: "rgba(0, 0, 0, 1)", color: "white" } : { backgroundColor: "#F9F5F6", color: "rgba(0, 0, 0, 1)" }} className="App">
        <Main themeSet={(props) => setColor(props)} />
      </div>
    </>
  );
}

export default App;
