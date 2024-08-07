import React, { useEffect, useState } from "react";
import mainUrl from "../services/MainUrl";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const RenderJobs = () => {
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    const getJobs = async () => {
      const url = `${mainUrl}/jobs`;
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${Cookies.get("jwtToken")}`,
        },
      };
      const response = await fetch(url, options);
      if (response.ok) {
        const { jobs } = await response.json();
        setJobs(jobs);
      } else {
        const { message } = await response.json();
        console.log(message);
      }
    };

    getJobs();
  }, []);

  console.log(jobs);

  return (
    <main className="mt-[100px]">
      <h1>dfads</h1>
      {jobs ? (
        jobs.map((job) => (
          <Link to={`/user/jobs/${job._id}`}>
            <div key={job._id}>
              <h2>{job.companyName}</h2>
              <p>{job.description}</p>
              <p>{job.jobLocation}</p>
              <p>{job.stipend}</p>
              <p>{job.applicationDeadline}</p>
              <p>{job.jobDuration}</p>
              <p>{job.numberOfOpenings}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default RenderJobs;
