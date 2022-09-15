import Card from "./Card";

function Cards({ data, type }) {
  
  return (
    <div className="container p-4">
      <div className="row align-items-center">
        {data.map(({ pet_id, pet_image, pet_name, text }) => (
          <div className="col-md-4" key={pet_id}>
            <Card pet_id={pet_id} pet_image={pet_image} pet_name={pet_name} type={type} text={text}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;