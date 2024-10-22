import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import axios from "axios";

const spreadsheetURL = process.env.REACT_APP_SHEET_URL;
const API_KEY = process.env.REACT_APP_IPINFO_API_KEY;

function Home(props) {
  const [visitorData, setVisitorData] = useState(null);

  useEffect(() => {
    const fetchVisitorData = async () => {
      try {
        const response = await axios.get(`https://ipinfo.io?token=${API_KEY}`);
        setVisitorData(response.data);

        // Send the visitor data to the Google Apps Script web app
        const res = await axios.post(spreadsheetURL, response.data, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
        console.log(res?.data ?? res);
        console.log("Visitor data saved to Google Sheets");
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
