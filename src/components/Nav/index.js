import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    // if currentCategory changes now, the component will re-render so that the change in document.title will be visible to the user.
    // useEffect(() => {
    //     document.title = capitalizeFirstLetter(currentCategory.name);
    // }, [currentCategory]);

    // const handleClick = (item) => {
    //     console.log(item);
    //     return item;
    // };

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    {/* { } to contain the JavaScript expression, as well as the template literal to interpolate the JavaScript statement. */}
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {categories.map((category) => (
                    // short-circuit expression
                    <li
                        className={`mx-1 ${
                        currentCategory.name === category.name && !contactSelected && 'navActive'
                        }`}
                        key={category.name}
                    >
                        <span 
                            onClick={() => { 
                                setCurrentCategory(category);
                                setContactSelected(false); 
                            }} 
                        >
                            {capitalizeFirstLetter(category.name)}
                        </span>
                    </li>
                    ))}
                </ul>
            </nav>
        </header> 
    );
}

export default Nav;