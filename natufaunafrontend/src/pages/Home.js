import Cards from '../components/Cards'
import Video from '../components/Video'
import Buttons from '../components/Buttons'
import image1 from "../assets/ben.png";
import image2 from '../assets/cafe.png'
import image3 from '../assets/sopa.png'
import './Styles.css'

const histories = [
  {
    
    id: 1,
    title: "Fazt Web",
    image: image1,
    url: "https://faztweb.com",
  },
  {
    id: 2,
    title: "Fazt Blog",
    image: image2,
    url: "https://blog.faztweb.com",
  },
  {
    id: 3,
    title: "Fazt Youtube",
    image: image3,
    url: "https://youtube.com/fazttech",
  },
];


export default function Home() {
  return (
    <div className="background">
      <Video/>
      <Buttons/>
      <Cards data={histories} />
    </div>
  );
}


