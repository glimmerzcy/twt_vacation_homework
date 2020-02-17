import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import Page3 from './Page3.js';
import Page4 from './Page4.js';
import Page5 from './Page5.js';
import Page6 from './Page6.js';
import './section.css'

const Fullpage = () => (
    <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */

        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <Page1 />
                    </div>
                    <div className="section">
                        <Page2 />
                    </div>
                    <div className="section">
                        <Page3 />
                    </div>
                    <div className="section">
                        <Page4 />
                    </div>
                    <div className="section">
                        <Page5 />
                    </div>
                    <div className="section">
                        <Page6 />
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);

export default Fullpage;
