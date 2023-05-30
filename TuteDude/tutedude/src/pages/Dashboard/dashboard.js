import './dashboard.css'


export default function Dashboard() {
    return (<>
        <section className="lt-sc-container">
            <div className="lt-sc-ct-refs">
                <div className="lt-sc-ct-refs-left">
                    <p>Referral Earning</p>
                    <div>
                    ₹ 2,500
                    </div>
                </div>
                <div className="lt-sc-ct-refs-mid">
                    <p>Total Referrals</p>
                    <div>7</div>
                </div>
                <div className="lt-sc-ct-refs-right">
                    <p>Wallet Balance</p>
                    <div>
                       ₹ 500
                    </div>
                </div>
            </div>
            <div className='lt-sc-ct-btn'>
                Withdraw Balance
            </div>
        </section>
    </>)
}