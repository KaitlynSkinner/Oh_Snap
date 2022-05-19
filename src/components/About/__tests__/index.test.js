//import react 
import React from 'react';
// retrieve functions from Reacting Testing Library
// render components - Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).
// and cleanup/remove components - prevents memory leaking, as well as variable or data collisions between tests that could corrupt test results.
import { render, cleanup } from '@testing-library/react';
// import jest-dom package
import '@testing-library/jest-dom/extend-expect';
// import about component that will be tested
import About from '..';

// ensure that after each test, there won't be any leftover memory data that could give false results.
afterEach(cleanup);

// declare the component that is being tested
describe('About component', () => {
    //renders About test
    // First test
    it('renders', () => {
        render(<About />);
    });

    // Second test
    it('matches snapshot DOM node structure', () => {
        // render About
        // returns snapshot of About component
        const { asFragment } = render(<About />);
        
        expect(asFragment()).toMatchSnapshot();
    });
  })


