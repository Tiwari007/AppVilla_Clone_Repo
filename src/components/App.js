import Banner1 from "./content/Banner1";
import Banner2 from "./content/Banner2";
import Banner3 from "./content/Banner3";
import Banner4 from "./content/Banner4";
import Banner5 from "./content/Banner5";
import Banner6 from "./content/Banner6";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";

// import BarNavigation from "./BarNavigation";

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

const pricingData = [
  {
    title: "Hobby",
    details: "All the basics for starting a new business",
    price: "$12",
    buttonText: "Buy Hobby",
    includeInCourse: ["Cras justo odio.", "Dapibus ac facilisis in.", "Morbi leo risus.", "Potenti felis, in cras ligula."]
  },
  {
    title: "Hobby",
    details: "All the basics for starting a new business",
    price: "$12",
    buttonText: "Buy Hobby",
    includeInCourse: ["Cras justo odio.", "Dapibus ac facilisis in.", "Morbi leo risus.", "Potenti felis, in cras ligula."]
  },
  {
    title: "Hobby",
    details: "All the basics for starting a new business",
    price: "$12",
    buttonText: "Buy Hobby",
    includeInCourse: ["Cras justo odio.", "Dapibus ac facilisis in.", "Morbi leo risus.", "Potenti felis, in cras ligula."]
  },
  {
    title: "Hobby",
    details: "All the basics for starting a new business",
    price: "$12",
    buttonText: "Buy Hobby",
    includeInCourse: ["Cras justo odio.", "Dapibus ac facilisis in.", "Morbi leo risus.", "Potenti felis, in cras ligula."]
  }
]

function App() {
  return (
    <>
      <Header navlinks={navlinks} />
      <Banner1 />
      <Banner2 cardContent={cardContent} />
      <Banner3 />
      <Banner4 />
      <Banner5 />
      <Banner6 pricingData = {pricingData} />
      <Footer />


      {/* <BarNavigation /> */}

    </>
  );
}

export default App;
