import Section1 from "./content/Section1";
import Section2 from "./content/Section2";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import "./styles/App.css";


const navlinks = [
  "Home",
  "Features",
  "Overview",
  "Pricing",
  "Team",
  "Blog",
  "Contact",
];


const cardContent = [
  {
    icon: "https://img.icons8.com/color/344/pinguin.png",
    title: "Simple Queues",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page at its layout.",
  },
  {
    icon: "https://img.icons8.com/color/344/pinguin.png",
    title: "Simple Queues",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page at its layout.",
  },
  {
    icon: "https://img.icons8.com/color/344/pinguin.png",
    title: "Simple Queues",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page at its layout.",
  },
];



function App() {
  return (
    <>
      <Header navlinks={navlinks} />

    
      <Section1 />
      <Section2 cardContent={cardContent} />


      <Footer />
    </>
  );
}

export default App;
