import {React, useState, useRef} from 'react';
import './App.css';
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import Overlay from './components/overlay';

function App() {
    // Use useRef to get a reference to the container element
    const containerRef = useRef(null);

    const [isRightPanelActive, setIsRightPanelActive] = useState(false);


    return (
        <>
            <div>
                <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container" ref={containerRef}>
                    <SignIn />
                    <SignUp />
                    {/* Pass the state as a prop */}
                    <Overlay isRightPanelActive={isRightPanelActive} setIsRightPanelActive={setIsRightPanelActive} />
                </div>
            </div>
        </>
    );
}

export default App;