import abi from './contract/TodoLists.json'

import {useState, useEffect} from 'react';
import { ethers } from 'ethers';
import './App.css';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });

  useEffect(()=>{
    const connectWallet = async()=>{
      const contractAddress = "";
      const contractABI = abi.abi;

      try{
          const {ethereum} = window;
          if(ethereum){
            const account = await ethereum.request({method: "eth_requiestAccounts", });
          }
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, contractABI, signer);
          setState(provider, signer, contract);
      }catch(err){
        console.log(err);
      }
    }  
    connectWallet();
  }, []);

  console.log(state);
  
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
