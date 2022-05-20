import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";
// import './App.css';

function App() {
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // prevent the contact form from showing when a user initially navigates to the homepage
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          {/* if the contactSelected is false, the Gallery and About components should be rendered, but if contactedSelected is true, the ContactForm component should be rendered. */}
          {!contactSelected ? (
            // React fragments—a shorthand abbreviation for <React.Fragment></React.Fragment>
            <>
              <Gallery currentCategory={currentCategory}></Gallery>
              <About></About>
            </>
            // ternary operator
            ) : (
              <ContactForm></ContactForm>
            )}
        </div>
      </main>
    </div>
  );
}

export default App;
// App.js = is responsible for how the React components currently render