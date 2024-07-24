import React from "react";
import "./Notifications.css"
import { getLatestNotification } from "./utils";

export default function Notification() {
    return (
        <div className="Notifications">
            <button style={{ float: 'right', background:'none', border:'none'}} 
                aria-label="Close" onClick={() => console.log("Close button has been clicked")}>
                <img src="{closeBtn}" alt="X"/>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li>New course available</li>
                <li data-urgent='true'>New resume available</li>
                <li data-urgent='true' dangerouslySetInnerHTML={{__html: getLatestNotification()}} />
            </ul>
        </div>
    )
}
