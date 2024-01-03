import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";

const ActiveResouce = () => {
  const [resource, setResource] = useState({});
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/active");
      if (res.message) {
        return;
      }
      const resourceData = res.data;
      const timeToFinish = parseInt(resourceData.timeToFinish, 10);
      const elapsedTime = moment().diff(
        moment(resourceData.activationTime),
        "seconds"
      );
      const updatedTimeToFinish = timeToFinish * 60 - elapsedTime;

      if (updatedTimeToFinish >= 0) {
        resourceData.timeToFinish = updatedTimeToFinish;
        setSeconds(updatedTimeToFinish);
      }

      setResource(resourceData);
    })();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds < 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [seconds]);

  const completeResouce = () => {
    axios
      .patch("/api/resources", { ...resource, status: "complete" })
      .then((_ = location.reload()))
      .catch((_ = alert("Cannot complete the resouce!")));
  };

  const hasResource = resource && resource.id;
  return (
    <div className="active-resource">
      <h1 className="resource-name">
        {hasResource ? resource.title : "No Resource Active"}
      </h1>

      <div className="time-wrapper">
        {hasResource &&
          (seconds > 0 ? (
            <>
              <h2 className="elapsed-time">{seconds}</h2>
              <Link className="button" href={`/resources/${resource.id}`}>
                Go to resource
              </Link>
            </>
          ) : (
            <button className="button is-success" onClick={completeResouce}>
              Click & Done
            </button>
          ))}
      </div>
    </div>
  );
};

export default ActiveResouce;
