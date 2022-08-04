import './Home.css'
import Cards from '../components/Cards'
import Video from '../components/Video'
import Buttons from '../components/Buttons'

export default function Home() {
  return (
    <div className="Home">
      <Video/>
      <Buttons/>
      <Cards/>
    </div>
  );
}


