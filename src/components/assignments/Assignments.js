import React from "react";
import myAssignments from "./myAssignments";

export default function Assignments() {
    return (
        <div className="assignment-section">
            <h1>Assignments</h1>
            <div className="assignments-container" id="assignments">
                {
                    myAssignments.map((assignment, index) => {
                        return (
                            <div className="assignment-card" key={index}>
                                <a href={assignment.pdfLink} target="_blank" rel="noreferrer">
                                    <span className="fa-solid fa-file-pdf"></span>
                                    <h2>{assignment.courseId}</h2>
                                    <p>{assignment.name}</p>
                                </a>
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}