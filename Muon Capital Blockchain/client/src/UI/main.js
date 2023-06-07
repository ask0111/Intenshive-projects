import LeftSection from "./others/leftSection";
import RightSection from "./others/rightSection";
import TopSection from "./others/topSecction";
import MidSection from "./todos/midSection";
import './main.css';
import { useEffect,  useState } from "react";

export default function Main(props) {

    const [render, setRender] = useState()
    const [lr, setLr] = useState("250px")
    const [rl, setRl] = useState("250px")
    const [clr, setClr] = useState("250px")
    const ThemeSet = (prop) => {
        props.themeSet(prop);
    }


    useEffect(() => {
        if (window.innerWidth < 880 && lr === "250px") {
            setClr("250px");
        }else{
            setClr('0')
        }
    }, [lr])
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 880 && window.innerWidth > 600) {
                setLr("0");
                setRl("250px");
            }
            else if (window.innerWidth < 600) {
                setLr('0');
                setRl('0');
            }
            else {
                setLr('250px');
                setRl('250px');
                
            }
        }
        window.addEventListener('resize', handleResize)
    })
    useEffect(()=>{}, [render])

    return (<div className="container">
        <div className="ct-dummyText">
            <p>Lorem Ipsum is simply dummy text of the printing</p>
        </div>
        <div className="sc-container">

            <div className="display" style={lr === "250px" ? { width: "250px", zIndex: '2' } : { width: "0", zIndex: '-1' }}>
                <LeftSection onHide={(props) => setLr(props)} themeSet={(props) => ThemeSet(props)} />
            </div>

            <div style={lr === "250px" ? { zIndex: "-1" } : { zIndex: "1" }} onClick={() => setLr("250px")} className="l-r"><i className="bi bi-chevron-right"></i></div>

            

            <div style={lr === "250px" ? clr === "250px" ? { width: '100%' } : {} : { width: '100%' }} className="sc-ct-right">
                <TopSection />
                <div className="sc-ct-rt-mid">
                    <MidSection onSubmit={(props)=> {
                        setRl('250px')}} />

                    <div className="sc-ct-rt-md-right">
                        <div className="display2" style={rl === "250px" ? { width: "270px", zIndex: '1' } : { width: "0", zIndex: '-1' }}>
                            <RightSection onSubmit1={(props)=> setRender(!props)} onHide={(props) => setRl(props)} />
                        </div>

                        <div style={rl === "250px" ? { zIndex: "-1" } : { zIndex: "1" }} onClick={() => setRl("250px")} className="r-l"><i className="bi bi-chevron-left"></i></div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}