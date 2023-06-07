import "bootstrap-icons/font/bootstrap-icons.css";
import './leftSection.css'
import { useState } from "react";

export default function LeftSection(props) {
    const [theme, setTheme] = useState(3);
    const [clas, setClas] = useState({text:"Section 8", icon: "bi-share-fill"})
    
    const LightHandler =()=>{
        setTheme(33);
        props.themeSet("light")
    }
    const DarkHandler =()=>{
        props.themeSet("dark")
        setTheme(3)
    }
    const LeftSideHandler = ()=>{
        props.onHide("0")
    }


    return (<div className="lt-sc-container">
        <div className="lt-sc-ct-upperPart">
            <div className="lt-sc-ct-up-top" >
                <div className="lt-sc-ct-up-top-title">
                    <p>N</p>
                    <h2>Name</h2>
                </div>
                <div className="lt-sc-ct-up-top-back">
                    <i onClick={LeftSideHandler} className="bi bi-arrow-left"></i>
                </div>
            </div>
            <div className="lt-sc-ct-up-bottom" >
                <div className="lt-sc-ct-up-bm-section">
                    <i className="bi bi-grid"></i>
                    <p>Home</p>
                </div>
                <div className="lt-sc-ct-up-bm-section">
                    <i className="bi bi-bar-chart-line-fill"></i>
                    <p onClick={(e)=> setClas({text:"Section 1", icon: "bi-bar-chart-line-fill"})} >Section 1</p>
                </div>
                <div className="lt-sc-ct-up-bm-section">
                    <i className="bi bi-bar-chart-steps"></i>
                    <p onClick={(e)=> setClas({text:"Section 2", icon: "bi-bar-chart-steps"})}>Section 2</p>
                </div>
                <div className="lt-sc-ct-up-bm-section">
                    <i className="bi bi-share-fill"></i>
                    <p onClick={(e)=> setClas({text:"Section 8", icon: "bi-share-fill"})}>Section 8</p>
                </div>
                <div className="lt-sc-ct-up-bm-section0 lt-sc-ct-up-bm-section">
                    <i className={`bi ${clas.icon}`}></i>
                    <p>{clas.text}</p>
                </div>
            </div>
        </div>
        <div className="lt-sc-ct-blowPart">
            <div className="lt-sc-ct-bp-price">
                <button> <b>N</b> $0.90</button>
                <button>Buy $XYZ</button>
            </div>
            <div  className="lt-sc-ct-bp-theme">
                <i className="bi bi-globe"></i>

               
                <div  className="theme">
                    <p style={{left: `${theme}px`}}></p>
                    <i onClick={DarkHandler} className="bi bi-moon-stars-fill"></i>
                    <i style={{color: "#fff"}} onClick={LightHandler} className="bi bi-brightness-high-fill"></i>
                </div>
                
            </div>
        </div>
    </div>)
}