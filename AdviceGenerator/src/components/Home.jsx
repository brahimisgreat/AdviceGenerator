import './Home.css'
import pic from '../assets/images/pause.svg'

export default function Home() {
  return (
    <div id='home-container'>
        <div id='home-kidtainer'>
            <h3>
                Advice #{'117'}
                <p>{`'it is was to sit up and take notice, what's diffuclt is gettinf up and taking action`}</p>
            </h3>
            <button>{pic}</button>
        </div>
    </div>
  )
}
