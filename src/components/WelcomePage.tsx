import React from "react";
import GithubImg from '../img/github.jpeg';

interface props {
    userName: string;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const WelcomePage = ({userName, setUserName} : props) => {
    return (
        <div className="welcome">
            <h1 className="heading">Welcome!</h1>
            <form className="inputForm" onSubmit={(e) => {
            e.preventDefault();
            setUserName("");
        }}>
                <input className="inputTxt"
                    type="input"
                    placeholder="Enter GitHub user name..."
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}/>
                <button className="nameBtn" type="submit">
                    Search
                </button>
            </form>
            <div className="imageDiv">
                <img src={GithubImg} alt="GitHub img" className="githubImg"/>
            </div>
            
        </div>
    )
};

export default WelcomePage;