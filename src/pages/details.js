import Footer from "./Footer/footer";
<<<<<<< Updated upstream
import React, { useState } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> Stashed changes
import "./Table.css";
import defaultProfilePicture from "./profile_picture.png";
import sysImg from "../assets/image.png";
import keyBoard from "../assets/keyboard.png";
import Monitor from "../assets/monitor.png";
import Laptop from "../assets/laptop.png";
import Mouse from "../assets/mouse.png";
import UPS from "../assets/ups.png";
import Printer from "../assets/printer.png";
import axios from "axios";
<<<<<<< Updated upstream

const Table = () => {
  const [computerCode, setComputerCode] = useState("");
=======
import { useSearchParams } from "react-router-dom";

const Table = () => {
>>>>>>> Stashed changes
  const [ictDetails, setIctDetails] = useState({});
  const [data, setData] = useState([{}]);
  const [activeTab, setActiveTab] = useState("Tab1");
  const [userImage, setUserImage] = useState(defaultProfilePicture);
<<<<<<< Updated upstream
=======
  const [searchParams, setSearchParams] = useSearchParams({});
  const computerCode = searchParams.get("computerCode");
  const onlyComputerItems = searchParams.get([]);
>>>>>>> Stashed changes

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const fetchIctDetails = () => {
    if (computerCode) {
<<<<<<< Updated upstream
      axios
        .get(
          `https://esystems.cdl.lk/backend-Test/ICTComputerDetails/ICTCDetails/GetICTDetails?ComputerCode=${computerCode}`
=======
      // Convert computerCode to uppercase
      const normalizedCode = computerCode.toUpperCase();
      axios
        .get(
          `https://esystems.cdl.lk/backend-Test/ICTComputerDetails/ICTCDetails/GetICTDetails?ComputerCode=${normalizedCode}`
>>>>>>> Stashed changes
        )
        .then((response) => {
          setIctDetails(response.data.ResultSet);
          fetchUserImage(response.data.ResultSet.ServiceNo);
        })
        .catch((error) => {
          console.error("Error fetching ICT details:", error);
        });
    }
  };

  const fetchUserImage = (serviceNo) => {
    axios
      .get(
        `https://esystems.cdl.lk/backend-Test/ICTComputerDetails/ICTCDetails/GetUserImg?ServiceNo=${serviceNo}`,
        { responseType: "blob" }
      )
      .then((response) => {
        const imageUrl = URL.createObjectURL(response.data);
        setUserImage(imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching user image:", error);
      });
  };

  const handleStatusChange = (index, value) => {
    const newData = [...data];
    newData[index].status = value;
    setData(newData);
  };

<<<<<<< Updated upstream
  const handleInputChange = (event) => {
    setComputerCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchIctDetails();
  };
=======
  useEffect(() => {
    fetchIctDetails();
  }, [computerCode]);
>>>>>>> Stashed changes

  return (
    <div className="table-container">
      <h2 className="title">Computer Information</h2>
<<<<<<< Updated upstream

      <form className="styled-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please enter computer code"
          value={computerCode}
          onChange={handleInputChange}
          className="input-field"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
=======
      <input
        className="input-field"
        type="text"
        placeholder="Please enter computer code"
        value={computerCode}
        onChange={(e) =>
          setSearchParams(
            (prev) => {
              prev.set("computerCode", e.target.value);
              return prev;
            },
            { replace: true }
          )
        }
      />
      <div
        className="column"
        style={{
          float: "left",
          width: "8%",
          padding: "30px",
        }}
      >
        <div>
          <img src={userImage} alt="Profile" className="profile" />
        </div>
      </div>

      <imput
        type="checkbox"
        id="onlyComputerItems"
        checked={onlyComputerItems}
        onChange={(e) =>
          setSearchParams(
            (prev) => {
              prev.set("computerCode", e.target.value);
              return prev;
            },
            { replace: true }
          )
        }
      />
>>>>>>> Stashed changes

      <div
        className="column"
        style={{
          float: "left",
<<<<<<< Updated upstream
          width: "8%",
          padding: "30px",
        }}
      >
        <div>
          <img src={userImage} alt="Profile" className="profile" />
          {/* <button className="changeUser">Change User</button> */}
        </div>
      </div>
      <div
        className="column"
        style={{
          float: "left",
=======
>>>>>>> Stashed changes
          width: "70%",
          padding: "10px",
        }}
      >
        <table className="table1">
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <tr>
                  <th className="th1clz">Service Number</th>
                  <td className="td1clz">{ictDetails.ServiceNo}</td>
                  <th className="th1clz">IP Address</th>
                  <td className="td1clz">{ictDetails.IP_Addres}</td>
                </tr>

                <tr>
                  <th className="th1clz">Division</th>
                  <td className="td1clz">{ictDetails.DiviCode}</td>
                  <th className="th1clz">Computer Name</th>
                  <td className="td1clz">{ictDetails.ComputerName}</td>
                </tr>

                <tr>
                  <th className="th1clz">Department</th>
                  <td className="td1clz">{ictDetails.DepCode}</td>
                  <th className="th1clz">Email Address</th>
                  <td className="td1clz">{ictDetails.Email}</td>
                </tr>

                <tr>
                  <th className="th1clz">Location</th>
                  <td className="td1clz">{ictDetails.LocName}</td>
                  <th className="th1clz">Status</th>
                  <td className="td1clz">
                    <select
                      value={ictDetails.Status}
                      onChange={(e) =>
                        handleStatusChange(index, e.target.value)
                      }
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </td>
                </tr>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 2nd table*/}
      <table className="tableDetails">
<<<<<<< Updated upstream
        <tr className="table_tr1">
          <div className="detailsClz01">
            <h2 className="heading">System Details</h2>
            <p className="ItemCode">
=======
        <tr>
          <div className="detailsClz01">
            <h2 className="heading">System</h2>
            <p className="ItemCode1">
>>>>>>> Stashed changes
              {ictDetails?.ICT_SystemDetails?.SystemCode}
            </p>
            <div>
              <img src={sysImg} alt="sysImg" className="img1" />
            </div>
            <table className="table21">
              <tbody>
<<<<<<< Updated upstream
                <tr className="trclass2">
                  <th className="thclass2">RAM</th>
=======
                <tr>
                  <th className="thclass1">RAM</th>
>>>>>>> Stashed changes
                  <td className="tdclass2">
                    :&nbsp;&nbsp;{ictDetails?.ICT_SystemDetails?.SystemRam}
                  </td>
                </tr>

                <tr>
<<<<<<< Updated upstream
                  <th className="thclass2">VRAM</th>
=======
                  <th className="thclass1">VRAM</th>
>>>>>>> Stashed changes
                  <td className="tdclass2">
                    :&nbsp;&nbsp;{ictDetails?.ICT_SystemDetails?.SystemVRam}
                  </td>
                </tr>

                <tr>
<<<<<<< Updated upstream
                  <th className="thclass2">HDD</th>
=======
                  <th className="thclass1">HDD</th>
>>>>>>> Stashed changes
                  <td className="tdclass2">
                    :&nbsp;&nbsp;{ictDetails?.ICT_SystemDetails?.SystemHDD}
                  </td>
                </tr>

                <tr>
<<<<<<< Updated upstream
                  <th className="thclass2">Processor</th>
=======
                  <th className="thclass1">Processor</th>
>>>>>>> Stashed changes
                  <td className="tdclass2">
                    :&nbsp;&nbsp;
                    {ictDetails?.ICT_SystemDetails?.SystemProcessor}
                  </td>
                </tr>

                <tr>
<<<<<<< Updated upstream
                  <th className="thclass2">Speed</th>
=======
                  <th className="thclass1">Speed</th>
>>>>>>> Stashed changes
                  <td className="tdclass2">
                    :&nbsp;&nbsp;
                    {ictDetails?.ICT_SystemDetails?.SystemSpeed}
                  </td>
                </tr>

                <tr>
<<<<<<< Updated upstream
                  <th className="thclass2">OS</th>
=======
                  <th className="thclass1">OS</th>
>>>>>>> Stashed changes
                  <td className="tdclass2">
                    :&nbsp;&nbsp;{ictDetails?.ICT_SystemDetails?.SystemOS}
                  </td>
                </tr>

                <tr>
<<<<<<< Updated upstream
                  <th className="thclass2">OS</th>
=======
                  <th className="thclass1">Make</th>
>>>>>>> Stashed changes
                  <td className="tdclass2">
                    :&nbsp;&nbsp;{ictDetails?.ICT_SystemDetails?.SystemMake}
                  </td>
                </tr>

                <tr>
<<<<<<< Updated upstream
                  <th className="thclass2">Model</th>
=======
                  <th className="thclass1">Model</th>
>>>>>>> Stashed changes
                  <td className="tdclass2">
                    :&nbsp;&nbsp;
                    {ictDetails?.ICT_SystemDetails?.SystemModel}
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="">
                    <p className="serialCode1">
                      SERIAL NO :
                      {ictDetails?.ICT_SystemDetails?.SystemSserialNo}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="detailsClz02">
<<<<<<< Updated upstream
            <h2 className="heading">KeyBoard Details</h2>
            <p className="ItemCode">
              {ictDetails?.ICT_KeyboardDetails?.KeyCode}
            </p>
            <div>
              <img src={keyBoard} alt="sysImg" className="img" />
=======
            <h2 className="heading">KeyBoard</h2>
            <p className="ItemCode1">
              {ictDetails?.ICT_KeyboardDetails?.KeyCode}
            </p>
            <div>
              <img src={keyBoard} alt="sysImg" className="img2" />
>>>>>>> Stashed changes
            </div>
            <table className="table22">
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
<<<<<<< Updated upstream
                    <tr className="trclass2">
=======
                    <tr>
>>>>>>> Stashed changes
                      <th className="thclass2">Make</th>
                      <td className="tdclass2">
                        :&nbsp;&nbsp; {ictDetails?.ICT_KeyboardDetails?.KeyMake}
                      </td>
                    </tr>
                    <tr>
                      <th className="thclass2">Model</th>
                      <td className="tdclass2">
                        :&nbsp;&nbsp;{" "}
                        {ictDetails?.ICT_KeyboardDetails?.KeyModle}
                      </td>
                    </tr>
                    <p className="serialCode2">
                      SERIAL NO :{ictDetails?.ICT_KeyboardDetails?.KeySerial_no}
                    </p>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="detailsClz03">
            <table className="table23">
              <tbody>
<<<<<<< Updated upstream
                <div className="tab">
                  <button
                    className={`tablinks ${
                      activeTab === "Tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Tab1")}
                  >
                    Screen 1
                  </button>

                  <button
                    className={`tablinks ${
                      activeTab === "Tab2" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Tab2")}
                  >
                    Screen 2
                  </button>

                  <h2 className="heading3">Screen Details</h2>
                  <div
                    id="Tab1"
                    className={`tabcontent ${
                      activeTab === "Tab1" ? "show" : ""
                    }`}
                  >
                    {/* <p className="ItemCode"> */}
                    {/* {ictDetails?.ICT_Screen?.[0]?.ScreenCode} */}
                    {/* </p> */}
                    {ictDetails?.ICT_Screen?.[0] && (
                      <p className="ItemCode">
                        {ictDetails.ICT_Screen[0].ScreenCode}
                      </p>
                    )}

                    <div>
                      <img src={Monitor} alt="sysImg" className="img3" />
                    </div>

                    <div className="screen1">
                      <tr className="trclass3">
                        <th className="thclass3">Display</th>
                        <td className="tdclass3">
                          :&nbsp;&nbsp;{" "}
                          {ictDetails?.ICT_Screen?.[0].ScreenDisplaySize}
                          {/* {ictDetails?.ICT_Screen?.[0].ScreenDisplaySize} */}
                        </td>
                      </tr>

                      <tr className="trclass3">
                        <th className="thclass3">Make</th>
                        <td className="tdclass3">
                          :&nbsp;&nbsp; {ictDetails?.ICT_Screen?.[0].ScreenMake}
                        </td>
                      </tr>

                      <tr className="trclass3">
                        <th className="thclass3">Model</th>
                        <td className="tdclass3">
                          :&nbsp;&nbsp;{" "}
                          {ictDetails?.ICT_Screen?.[0].ScreenModel}
                        </td>
                      </tr>
                    </div>

                    <tr className="trclass3">
                      <p className="serialCode3">
                        SERIAL NO :&nbsp;
                        {ictDetails?.ICT_Screen?.[0].ScreenSerialNo}
                      </p>
                    </tr>
                  </div>
                  <div
                    id="Tab2"
                    className={`tabcontent ${
                      activeTab === "Tab2" ? "show" : ""
                    }`}
                  >
                    <p className="ItemCode">
                      {/* {ictDetails?.ICT_Screen?.[1].ScreenCode} */}
                    </p>
                    {ictDetails?.ICT_Screen?.[1] && (
                      <p className="ItemCode">
                        {ictDetails.ICT_Screen[1].ScreenCode}
                      </p>
                    )}

                    <div>
                      <img src={Monitor} alt="sysImg" className="img3" />
                    </div>

                    <div className="screen1">
                      <tr className="trclass3">
                        <th className="thclass3">Display</th>
                        <td className="tdclass3">
                          :&nbsp;&nbsp;{" "}
                          {ictDetails?.ICT_Screen?.[1].ScreenDisplaySize}
                        </td>
                      </tr>

                      <tr className="trclass3">
                        <th className="thclass3">Make</th>
                        <td className="tdclass3">
                          :&nbsp;&nbsp; {ictDetails?.ICT_Screen?.[1].ScreenMake}
                        </td>
                      </tr>

                      <tr className="trclass3">
                        <th className="thclass3">Model</th>
                        <td className="tdclass3">
                          :&nbsp;&nbsp;{" "}
                          {ictDetails?.ICT_Screen?.[1].ScreenModel}
                        </td>
                      </tr>
                    </div>

                    <tr className="trclass3">
                      <p className="serialCode3">
                        SERIAL NO :&nbsp;
                        {ictDetails?.ICT_Screen?.[1].ScreenSerialNo}
                      </p>
                    </tr>
                  </div>
                </div>
=======
                <tr>
                  <td>
                    <div className="tab">
                      <div className="buttons">
                      <button
                        className={`tablinks ${
                          activeTab === "Tab1" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("Tab1")}
                      >
                        Screen 1
                      </button>

                      <button
                        className={`tablinks ${
                          activeTab === "Tab2" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("Tab2")}
                      >
                        Screen 2
                      </button>
                      </div>

                      <h2 className="heading3">Screen</h2>

                      <div>
                        <img src={Monitor} alt="sysImg" className="img3" />
                      </div>
                      <div
                        id="Tab1"
                        className={`tabcontent ${
                          activeTab === "Tab1" ? "show" : ""
                        }`}
                      >
                        {ictDetails?.ICT_Screen?.[0] && (
                          <>
                            <p className="ItemCode3">
                              {ictDetails.ICT_Screen[0].ScreenCode}
                            </p>

                            <table className="screen1">
                              <tbody>
                                <tr>
                                  <th className="thclass3">Display</th>
                                  <td className="tdclass3">
                                    :&nbsp;&nbsp;
                                    {ictDetails.ICT_Screen[0].ScreenDisplaySize}
                                  </td>
                                </tr>

                                <tr>
                                  <th className="thclass3">Make</th>
                                  <td className="tdclass3">
                                    :&nbsp;&nbsp;
                                    {ictDetails.ICT_Screen[0].ScreenMake}
                                  </td>
                                </tr>

                                <tr>
                                  <th className="thclass3">Model</th>
                                  <td className="tdclass3">
                                    :&nbsp;&nbsp;
                                    {ictDetails.ICT_Screen[0].ScreenModel}
                                  </td>
                                </tr>

                                <tr>
                                  <td colSpan="2">
                                    <p className="serialCode3">
                                      SERIAL NO :&nbsp;
                                      {ictDetails.ICT_Screen[0].ScreenSerialNo}
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </>
                        )}
                      </div>
                      <div
                        id="Tab2"
                        className={`tabcontent ${
                          activeTab === "Tab2" ? "show" : ""
                        }`}
                      >
                        {ictDetails?.ICT_Screen?.[1] && (
                          <>
                            <p className="ItemCode3">
                              {ictDetails.ICT_Screen[1].ScreenCode}
                            </p>

                            <table className="screen1">
                              <tbody>
                                <tr>
                                  <th className="thclass3">Display</th>
                                  <td className="tdclass3">
                                    :&nbsp;&nbsp;
                                    {ictDetails.ICT_Screen[1].ScreenDisplaySize}
                                  </td>
                                </tr>

                                <tr>
                                  <th className="thclass3">Make</th>
                                  <td className="tdclass3">
                                    :&nbsp;&nbsp;
                                    {ictDetails.ICT_Screen[1].ScreenMake}
                                  </td>
                                </tr>

                                <tr>
                                  <th className="thclass3">Model</th>
                                  <td className="tdclass3">
                                    :&nbsp;&nbsp;
                                    {ictDetails.ICT_Screen[1].ScreenModel}
                                  </td>
                                </tr>

                                <tr>
                                  <td colSpan="2">
                                    <p className="serialCode3">
                                      SERIAL NO :&nbsp;
                                      {ictDetails.ICT_Screen[1].ScreenSerialNo}
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
>>>>>>> Stashed changes
              </tbody>
            </table>
          </div>
        </tr>

<<<<<<< Updated upstream
        <tr className="table_tr2">
          <div className="detailsClz04">
            <h2 className="heading">Mouse Details</h2>
            <p className="ItemCode">{ictDetails?.ICT_Mouse?.MouseCode}</p>
            <div>
              <img src={Mouse} alt="sysImg" className="img" />
=======
        <tr>
          <div className="detailsClz04">
            <h2 className="heading">Mouse</h2>
            <p className="ItemCode4">{ictDetails?.ICT_Mouse?.MouseCode}</p>
            <div>
              <img src={Mouse} alt="sysImg" className="img4" />
>>>>>>> Stashed changes
            </div>
            <table className="table24">
              <tbody>
                {data.map((row, index) => (
<<<<<<< Updated upstream
                  <tr key={index}>
                    <tr className="trclass2">
                      <th className="thclass2">Make</th>
                      <td className="tdclass2">
=======
                  <tr key={index} >
                    <tr className="tablecont4">
                      <th className="thclass24">Make</th>
                      <td className="tdclass24">
>>>>>>> Stashed changes
                        :&nbsp;&nbsp; {ictDetails?.ICT_Mouse?.MouseMake}
                      </td>
                    </tr>
                    <tr>
<<<<<<< Updated upstream
                      <th className="thclass2">Model</th>
                      <td className="tdclass2">
=======
                      <th className="thclass24">Model</th>
                      <td className="tdclass24">
>>>>>>> Stashed changes
                        :&nbsp;&nbsp; {ictDetails?.ICT_Mouse?.MouseModle}
                      </td>
                    </tr>
                    <p className="serialCode4">
                      SERIAL NO :&nbsp;
                      {ictDetails?.ICT_Mouse?.MouseSerial_no}
                    </p>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="detailsClz05">
<<<<<<< Updated upstream
            <h2 className="heading">Laptop Details</h2>
            <p className="ItemCode">
              {ictDetails?.ICT_LaptopDetails?.LaptopCode}
            </p>
            <div>
              <img src={Laptop} alt="sysImg" className="imgLap" />
=======
            <h2 className="heading">Laptop</h2>
            <p className="ItemCode5">
              {ictDetails?.ICT_LaptopDetails?.LaptopCode}
            </p>
            <div>
              <img src={Laptop} alt="sysImg" className="img5" />
>>>>>>> Stashed changes
            </div>
            <table className="table25">
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
<<<<<<< Updated upstream
                    <tr className="trclass2">
                      <th className="thclass2">RAM</th>
                      <td className="tdclass2">
=======
                    <tr>
                      <th className="thclass25">RAM</th>
                      <td className="tdclass25">
>>>>>>> Stashed changes
                        :&nbsp;&nbsp; {ictDetails?.ICT_LaptopDetails?.LaptopRam}
                      </td>
                    </tr>
                    <tr>
<<<<<<< Updated upstream
                      <th className="thclass2">Speed</th>
                      <td className="tdclass2">
=======
                      <th className="thclass25">Speed</th>
                      <td className="tdclass25">
>>>>>>> Stashed changes
                        :&nbsp;&nbsp;{" "}
                        {ictDetails?.ICT_LaptopDetails?.LaptopSpeed}
                      </td>
                    </tr>
                    <tr>
<<<<<<< Updated upstream
                      <th className="thclass2">HDD</th>
                      <td className="tdclass2">
=======
                      <th className="thclass25">HDD</th>
                      <td className="tdclass25">
>>>>>>> Stashed changes
                        :&nbsp;&nbsp; {ictDetails?.ICT_LaptopDetails?.LaptopHDD}
                      </td>
                    </tr>
                    <tr>
<<<<<<< Updated upstream
                      <th className="thclass2">Processor</th>
                      <td className="tdclass2">
=======
                      <th className="thclass25">Processor</th>
                      <td className="tdclass25">
>>>>>>> Stashed changes
                        :&nbsp;&nbsp;{" "}
                        {ictDetails?.ICT_LaptopDetails?.LaptopProcessor}
                      </td>
                    </tr>
                    <tr>
<<<<<<< Updated upstream
                      <th className="thclass2">OS</th>
                      <td className="tdclass2">
=======
                      <th className="thclass25">OS</th>
                      <td className="tdclass25">
>>>>>>> Stashed changes
                        :&nbsp;&nbsp; {ictDetails?.ICT_LaptopDetails?.LaptopOS}
                      </td>
                    </tr>
                    <tr>
<<<<<<< Updated upstream
                      <th className="thclass2">Make</th>
                      <td className="tdclass2">
=======
                      <th className="thclass25">Make</th>
                      <td className="tdclass25">
>>>>>>> Stashed changes
                        :&nbsp;&nbsp;{" "}
                        {ictDetails?.ICT_LaptopDetails?.LaptopMake}
                      </td>
                    </tr>
                    <tr>
<<<<<<< Updated upstream
                      <th className="thclass2">Model</th>
                      <td className="tdclass2">
=======
                      <th className="thclass25">Model</th>
                      <td className="tdclass25">
>>>>>>> Stashed changes
                        :&nbsp;&nbsp;{" "}
                        {ictDetails?.ICT_LaptopDetails?.LaptopModel}
                      </td>
                    </tr>
                    <p className="serialCode5">
                      SERIAL NO :{ictDetails?.ICT_LaptopDetails?.LaptopSerialNo}
                    </p>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="detailsClz06">
<<<<<<< Updated upstream
            <h2 className="heading">UPS Details</h2>
            <p className="ItemCode">{ictDetails?.ICT_UPS?.UPSCode}</p>
            <div>
              <img src={UPS} alt="sysImg" className="img1" />
=======
            <h2 className="heading">UPS</h2>
            <p className="ItemCode6">{ictDetails?.ICT_UPS?.UPSCode}</p>
            <div>
              <img src={UPS} alt="sysImg" className="img6" />
>>>>>>> Stashed changes
            </div>
            <table className="table26">
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <tr>
<<<<<<< Updated upstream
                      <th className="thclass2">Make</th>
                      <td className="tdclass2">
=======
                      <th className="thclass26">Make</th>
                      <td className="tdclass26">
>>>>>>> Stashed changes
                        :&nbsp;&nbsp; {ictDetails?.ICT_UPS?.UPSMake}
                      </td>
                    </tr>
                    <tr>
<<<<<<< Updated upstream
                      <th className="thclass2">Model</th>
                      <td className="tdclass2">
=======
                      <th className="thclass26">Model</th>
                      <td className="tdclass26">
>>>>>>> Stashed changes
                        :&nbsp;&nbsp; {ictDetails?.ICT_UPS?.UPSModle}
                      </td>
                    </tr>
                    <p className="serialCode6">
                      SERIAL NO :{ictDetails?.ICT_UPS?.LaptopCode}
                    </p>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </tr>
<<<<<<< Updated upstream
        <tr className="table_tr3">
          <div className="detailsClz07">
            <h2 className="heading">Printer Details</h2>
            <p className="ItemCode">
              {ictDetails?.ICT_PrinterDetails?.PrinterCode}
            </p>
            <div>
              <img src={Printer} alt="sysImg" className="img" />
=======
        <tr>
          <div className="detailsClz07">
            <h2 className="heading">Printer</h2>
            <p className="ItemCode7">
              {ictDetails?.ICT_PrinterDetails?.PrinterCode}
            </p>
            <div>
              <img src={Printer} alt="sysImg" className="img7" />
>>>>>>> Stashed changes
            </div>
            <table className="table27">
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
<<<<<<< Updated upstream
                    <tr className="trclass2">
                      <th className="thclass2">Make</th>
                      <td className="tdclass2">
=======
                    <tr>
                      <th className="thclass27">Make</th>
                      <td className="tdclass27">
>>>>>>> Stashed changes
                        :&nbsp;&nbsp;{" "}
                        {ictDetails?.ICT_PrinterDetails?.PrinterMake}
                      </td>
                    </tr>
                    <tr>
<<<<<<< Updated upstream
                      <th className="thclass2">Model</th>
                      <td className="tdclass2">
=======
                      <th className="thclass27">Model</th>
                      <td className="tdclass27">
>>>>>>> Stashed changes
                        :&nbsp;&nbsp;{" "}
                        {ictDetails?.ICT_PrinterDetails?.PrinterModle}
                      </td>
                    </tr>

                    <p className="serialCode7">
                      SERIAL NO :
                      {ictDetails?.ICT_PrinterDetails?.PrinterSerial_no}
                    </p>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </tr>
        <tr></tr>
      </table>
      <Footer />
    </div>
  );
};

export default Table;
