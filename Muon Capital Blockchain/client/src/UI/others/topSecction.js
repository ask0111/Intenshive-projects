import './topSection.css';

export default function TopSection(){
    return(<div className="tp-sc-container">
            <div className="tp-sc-ct-leftPart">
                <p>Section</p>
            </div>
            <div className="tp-sc-ct-rightPart">
                <div className="tp-sc-ct-rt-wallet">
                <i className="bi bi-wallet2"> 0.2 $XYZ</i>
                <button>Tier 1</button>
                </div>
            </div>
            
    </div>)
}