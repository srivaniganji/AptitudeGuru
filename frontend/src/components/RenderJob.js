import React, { useState, useEffect } from "react";
import mainUrl from "../services/MainUrl";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

const RenderJob = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    const getJob = async () => {
      const url = `${mainUrl}/jobs/${jobId}`;
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${Cookies.get("jwtToken")}`,
        },
      };
      const response = await fetch(url, options);
      if (response.ok) {
        const { job } = await response.json();
        setJob(job);
      }
    };
    getJob();
  }, [jobId]);

  console.log(job);

  return (
    <main>
      <h1>Job Details</h1>
      <div key={job._id}>
        <h2>{job.companyName}</h2>
        <p>{job.description}</p>
        <p>{job.jobLocation}</p>
        <p>{job.stipend}</p>
        <p>{job.applicationDeadline}</p>
        <p>{job.jobDuration}</p>
        <p>{job.numberOfOpenings}</p>
      </div>
    </main>
  );
};

export default RenderJob;
