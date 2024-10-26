import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import axios from "axios";

const IPINFO_API_KEY = process.env.REACT_APP_IPINFO_API_KEY;
const IPREGISTRY_API_KEY = process.env.REACT_APP_IPREGISTRY_API_KEY;

function Home(props) {
  const [visitorData, setVisitorData] = useState(null);

  useEffect(() => {
    const fetchVisitorData = async () => {
      try {
        const countResponse = await axios.get(
          "https://game-api.iwansuryaningrat.tech/visitor/count"
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

        if (count < 99950) {
          let option = {
            headers: { Authorization: "ApiKey " + IPREGISTRY_API_KEY },
          };

          const response = await axios.get(
            `https://api.ipregistry.co/`,
            option
          );
          setVisitorData(response?.data);

          if (response?.data)
            data = {
              ip: response?.data?.ip ?? null,
              city: response?.data?.location?.city ?? null,
              region: response?.data?.location?.region?.name ?? null,
              country: response?.data?.location?.country?.name ?? null,
              continent: response?.data?.location?.continent?.name ?? null,
              loc: response?.data?.location?.latitude
                ? response?.data?.location?.latitude +
                  "," +
                  response?.data?.location?.longitude
                : null,
              timezone: response?.data?.time_zone?.id ?? null,
              time: response?.data?.time_zone?.current_time ?? null,
              timeName: response?.data?.time_zone?.name
                ? response?.data?.time_zone?.name +
                  "-" +
                  response?.data?.time_zone?.abbreviation
                : null,
              user_agent: response?.data?.user_agent?.header ?? null,
              device:
                (response?.data?.user_agent?.device?.brand ??
                  response?.data?.user_agent?.name) +
                " - " +
                response?.data?.user_agent?.device?.name,
            };
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
            "https://game-api.iwansuryaningrat.tech/visitor/record",
            data
          );
      } catch (error) {
        console.error("Error fetching or saving visitor data:", error);
      }
    };

    fetchVisitorData();
  }, []);

  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
