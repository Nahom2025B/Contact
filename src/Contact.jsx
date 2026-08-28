export default function Contact(props) {
  return (
    <>
    
    <div className="contact">
      
      <img
        src={props.src}
        width={props.width}
        height={props.height}
        alt="contact image"
      />

      <h1>Name: {props.name}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Phone: {props.phone}</h1>
    </div>
    </>
  );
}