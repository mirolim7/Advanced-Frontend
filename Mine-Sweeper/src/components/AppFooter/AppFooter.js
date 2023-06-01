import "./AppFooterStyles.css";
import React from "react";

const repo = "https://github.com/mirolim7/Advanced-Frontend";
const githubUrl = "https://github.com/mirolim7";

function AppFooter(props) {
    return (
        <footer className='App-footer'>
            <div>
                Built by <a href={githubUrl}>Mirolim Saidakhmatov</a>
            </div>
            <br />
            <div>
                Check the source code on <a href={repo}>GitHub</a>
            </div>
        </footer>
    );
}

export default AppFooter;
