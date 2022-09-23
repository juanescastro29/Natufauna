import Cards from "../../components/Cards";
import Video from "../../components/Video";
import Buttons from "../../components/Buttons";
import "../Styles.css";
import { useEffect, useState } from "react";

const histories = [
  {
    pet_id: 1,
    pet_name: "Tommy",
    pet_image: "",
  },
  {
    pet_id: 2,
    pet_name: "Bruno",
    pet_image: "",
  },
  {
    pet_id: 3,
    pet_name: "Dante",
    pet_image: "",
  },
];

export default function Home() {

  const [newHistories, setNewHistories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.thedogapi.com/v1/images/search?size=full&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=${histories.length}`
        );
      const data = await response.json();
      for (let i = 0; i < data.length; i++) {
        histories[i].pet_image = data[i].url;
      }
      setNewHistories(histories);
    }

    fetchData();
  }, []);

  return (
    <div className="background">
      <Video />
      <Buttons />
      <Cards data={newHistories} />
    </div>
  );
}
