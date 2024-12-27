import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState, useEffect } from "react"

const Welcome = () => {
    const [showWelcome, setShowWelcome] = useState(() => {
        const storedValue = localStorage.getItem("show_app_intro");
        return storedValue ? JSON.parse(storedValue) : true;
    });

    const onHideWelcome = () => {
        setShowWelcome(false);
        localStorage.setItem("show_app_intro", JSON.stringify(false));

    };

    return (
        <React.Fragment>
            {showWelcome && (
                <div className="container">
                    <div className="bg-primary text-white my-3">
                        <FontAwesomeIcon
                            icon={faClose}
                            style={{ float: "right", margin: "5px" }} 
                            onClick={onHideWelcome}
                        />
                        <div className="p-4">Welcome to Kiyan Garage</div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default Welcome;
