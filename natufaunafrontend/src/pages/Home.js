import Cards from '../components/Cards'
import Video from '../components/Video'
import Buttons from '../components/Buttons'
import './Styles.css'

const histories = [
  {
    
    id: 1,
    title: "Fazt Web",
    image: 'https://api.thedogapi.com/v1/images/search?size=full&mime_types=jpg&format=src&has_breeds=true&order=RANDOM&page=0&limit=1',
    url: "https://faztweb.com",
  },
  {
    id: 2,
    title: "Fazt Blog",
    image: 'https://api.thedogapi.com/v1/images/search?size=full&mime_types=jpg&format=src&has_breeds=true&order=RANDOM&page=0&limit=1',
    url: "https://blog.faztweb.com",
  },
  {
    id: 3,
    title: "Fazt Youtube",
    image: 'https://api.thedogapi.com/v1/images/search?size=full&mime_types=jpg&format=src&has_breeds=true&order=RANDOM&page=0&limit=1',
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


