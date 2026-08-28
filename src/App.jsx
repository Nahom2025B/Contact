import Contact from "./contact";
import "./App.css";

export default function App() {
  const contacts = [
    {
      name: "Abebe",
      email: "abebe@gmail.com",
      phone: "0911111111",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFLBSKIbDXz4UsNIkkLL-QIzZOhE1ruAWYEj_VCMbpQg&s",
    },
    {
      name: "Kebede",
      email: "kebede@gmail.com",
      phone: "0922222222",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400",
    },
    {
      name: "Hana",
      email: "hana@gmail.com",
      phone: "0933333333",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },
  ];

  return (
    <>
    <h1 className="user"> User Profiles </h1>
    <div className="contacts">
      {contacts.map((contact) => (
        <Contact
          key={contact.phone}
          src={contact.src}
          width={200}
          height={200}
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
        />
      ))}
    </div>
    </>
  );
}