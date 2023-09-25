import "./App.css";
import Card from "./components/Card";
import stanfordLogo from "./assets/images/stanfordLogo.webp";
import {
  arrillagaFamilyDiningCommons,
  brannerDining,
  evgrDining,
  florenceMooreDining,
  gerhardCasperDiningCommons,
  lakesideDining,
  rickerDining,
  sternDining,
  suitesDining,
  wilburDining,
} from "./assets/images/diningHalls";

const diningHalls = [
  {
    name: "Arrillaga Family Dining Commons",
    location: "489 Arguello Way",
    link: "arrillaga-family-dining-commons",
    imgUrl: arrillagaFamilyDiningCommons,
  },
  {
    name: "Branner Dining",
    location: "655 Escondido Rd",
    link: "branner-dining",
    imgUrl: brannerDining,
  },
  {
    name: "EVGR Dining",
    location: "726 Serra St",
    link: "evgr-dining",
    imgUrl: evgrDining,
  },
  {
    name: "Florence Moore Dining",
    location: "436 Mayfield Ave",
    link: "florence-moore-dining",
    imgUrl: florenceMooreDining,
  },
  {
    name: "Gerhard Casper Dining Commons",
    location: "661 Escondido Rd",
    link: "gerhard-casper-dining-commons",
    imgUrl: gerhardCasperDiningCommons,
  },
  {
    name: "Lakeside Dining",
    location: "326 Santa Teresa St",
    link: "lakeside-dining",
    imgUrl: lakesideDining,
  },
  {
    name: "Ricker Dining",
    location: "238 Santa Teresa St",
    link: "ricker-dining",
    imgUrl: rickerDining,
  },
  {
    name: "Stern Dining",
    location: "618 Escondido Rd",
    link: "stern-dining",
    imgUrl: sternDining,
  },
  {
    name: "Suites Dining",
    location: "251 Governors Ave",
    link: "suites-dining",
    imgUrl: suitesDining,
  },
  {
    name: "Wilbur Dining",
    location: "658 Escondido Rd",
    link: "wilbur-dining",
    imgUrl: wilburDining,
  },
];

const App = () => {
  return (
    <div className="App">
      <img
        src={stanfordLogo}
        alt="Stanford University Logo"
        style={{ width: "200px" }}
      />
      <h1>Stanford University Dining Halls</h1>
      <div className="card-container">
        {diningHalls.map((diningHall) => (
          <Card key={diningHall.name} {...diningHall} />
        ))}
      </div>
    </div>
  );
};

export default App;
