import Card from "./Card";

function Cards({ data }) {
  
  return (
    <div className="container p-4">
      <div className="row align-items-center">
        {data.map(({ title, image, id, type, text }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} type={type} text={text}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;