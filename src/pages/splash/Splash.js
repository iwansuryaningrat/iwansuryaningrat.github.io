import React, { useEffect, useState } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import axios from "axios";

const IPINFO_API_KEY = process.env.REACT_APP_IPINFO_API_KEY;
const IPREGISTRY_API_KEY = process.env.REACT_APP_IPREGISTRY_API_KEY;
const IPREGISTRY_API_KEY2 = process.env.REACT_APP_IPREGISTRY_API_KEY2;
const IPREGISTRY_API_KEY3 = process.env.REACT_APP_IPREGISTRY_API_KEY3;

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </div>
  );
}

function Splash(props) {
  // eslint-disable-next-line
  const [visitorData, setVisitorData] = useState(null);

  useEffect(() => {
    const fetchIPData = async (ApiKey) => {
      try {
        let option = {
          headers: { Authorization: "ApiKey " + ApiKey },
        };

        let data = {
          ip: null,
          city: null,
          region: null,
          country: null,
          continent: null,
          loc: null,
          timezone: null,
          time: null,
          timeName: null,
          user_agent: null,
          device: null,
        };

        const response = await axios.get(`https://api.ipregistry.co/`, option);
        setVisitorData(response?.data);

        if (response?.data)
          data = {
            ip: response?.data?.ip ?? null,
            ipType: response?.data?.type ?? null,
            city: response?.data?.location?.city ?? null,
            postalCode: response?.data?.location?.postal ?? null,
            region: response?.data?.location?.region?.name ?? null,
            country:
              response?.data?.location?.country?.name ??
              response?.data?.location?.country?.code ??
              null,
            continent: response?.data?.location?.continent?.name ?? null,
            loc: response?.data?.location?.latitude
              ? response?.data?.location?.latitude +
                ", " +
                response?.data?.location?.longitude
              : null,
            timezone: response?.data?.time_zone?.id ?? null,
            time:
              response?.data?.time_zone?.current_time ??
              new Date().toISOString(),
            timeName: response?.data?.time_zone?.name
              ? response?.data?.time_zone?.name +
                " - " +
                response?.data?.time_zone?.abbreviation
              : null,
            user_agent: response?.data?.user_agent?.header ?? null,
            device:
              (response?.data?.user_agent?.device?.brand ??
                response?.data?.user_agent?.name) +
              " - " +
              response?.data?.user_agent?.device?.name,
          };

        return data;
      } catch (error) {
        console.error("Error fetching IP data:", error);
      }
    };

    const fetchVisitorData = async () => {
      try {
        const countResponse = await axios.get(
          "https://game-api.iwansuryaningrat.my.id/visitor/count"
        );
        const count = countResponse?.data?.data?.count ?? 0;

        let data = {
          ip: null,
          city: null,
          region: null,
          country: null,
          continent: null,
          loc: null,
          timezone: null,
          time: null,
          timeName: null,
          user_agent: null,
          device: null,
        };

        if (count < 99955) {
          data = await fetchIPData(IPREGISTRY_API_KEY);
        } else if (count < 199935) {
          data = await fetchIPData(IPREGISTRY_API_KEY2);
        } else if (count < 299915) {
          data = await fetchIPData(IPREGISTRY_API_KEY3);
        } else {
          const response = await axios.get(
            `https://ipinfo.io?token=${IPINFO_API_KEY}`
          );
          setVisitorData(response?.data);

          if (response?.data)
            data = {
              ...response?.data,
              time: new Date().toISOString(),
            };
        }

        if (data?.ip)
          await axios.post(
            "https://game-api.iwansuryaningrat.my.id/visitor/record",
            data
          );
      } catch (error) {
        console.error("Error fetching or saving visitor data:", error);
      }
    };

    fetchVisitorData();
  }, []);

  const [redirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 2000);

  return redirect ? (
    <Redirect to="/home" />
  ) : (
    <AnimatedSplash theme={props.theme} />
  );
}

export default Splash;
