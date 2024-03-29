
export default function Overlay({ isRightPanelActive, setIsRightPanelActive }) {
    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    return (
        <div className={`overlay-container ${isRightPanelActive ? 'right-panel-active' : ''}`}>
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us, please login with your personal info</p>
                    <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start your journey with us</p>
                    <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}
