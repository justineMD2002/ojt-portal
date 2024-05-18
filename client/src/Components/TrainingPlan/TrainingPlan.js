import React from "react";

const TrainingPlan = () => {
    const data = [
        {
            header: "Day1: ",
            content: [
                "Introduction to the company policies",
                "Meet the team members",
                "Review training schedule"
            ],
            rsrc: "Company Handbook"
        },
        {
            header: "Day1: ",
            content: [
                "Introduction to the company policies",
                "Meet the team members",
                "Review training schedule"
            ],
            rsrc: "Company Handbook"
        },
        {
            header: "Day1: ",
            content: [
                "Introduction to the company policies",
                "Meet the team members",
                "Review training schedule"
            ],
            rsrc: "Company Handbook"
        },
        {
            header: "Day1: ",
            content: [
                "Introduction to the company policies",
                "Meet the team members",
                "Review training schedule"
            ],
            rsrc: "Company Handbook"
        }
    ]
  return (
    <div className="TrainingPlan">
        <h1>Training Plan</h1>
        {/* <ul className="data"> */}
            {
                data.map((item, i) => (
                    <li className="data">
                        <h2>{item.header}</h2>
                        <p>Today's Tasks</p>
                        <ul>
                            {item.content.map((item2, i) => (
                                <li>{item2}</li>
                            ))}
                        </ul>
                    </li>
                ))
            }
        {/* </ul> */}
        <button>Upload Logbook</button>
    </div>
  );
};

export default TrainingPlan;
