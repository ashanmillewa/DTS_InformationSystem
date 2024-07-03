import Footer from "./Footer/footer";
import React, { useState } from "react";
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

const Table = () => {
  const [computerCode, setComputerCode] = useState("");
  const [ictDetails, setIctDetails] = useState({});
  const [data, setData] = useState([{}]);
  const [activeTab, setActiveTab] = useState("Tab1");
  const [userImage, setUserImage] = useState(defaultProfilePicture);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const fetchIctDetails = () => {
    if (computerCode) {
      axios
        .get(
          `https://esystems.cdl.lk/backend-Test/ICTComputerDetails/ICTCDetails/GetICTDetails?ComputerCode=${computerCode}`
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

  const handleInputChange = (event) => {
    setComputerCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchIctDetails();
  };

  return (
    <div className="table-container">
      <h2 className="title">Computer Information</h2>

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
          {/* <button className="changeUser">Change User</button> */}
        </div>
      </div>
      <div
        className="column"
        style={{
          float: "left",
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
        <tbody>
          <tr className="table_tr">
            <td className="table_td">
              <div className="detailsClz01">
                <h2 className="heading">System Details</h2>
                <p className="ItemCode">
                  {ictDetails?.ICT_SystemDetails?.SystemCode}
                </p>
                <div>
                  <img src={sysImg} alt="sysImg" className="img1" />
                </div>
                <table className="table21">
                  <tbody>
                    <tr className="trclass2">
                      <th className="thclass2">RAM</th>
                      <td className="tdclass2">
                        :&nbsp;&nbsp;{ictDetails?.ICT_SystemDetails?.SystemRam}
                      </td>
                    </tr>

                    <tr>
                      <th className="thclass2">VRAM</th>
                      <td className="tdclass2">
                        :&nbsp;&nbsp;{ictDetails?.ICT_SystemDetails?.SystemVRam}
                      </td>
                    </tr>

                    <tr>
                      <th className="thclass2">HDD</th>
                      <td className="tdclass2">
                        :&nbsp;&nbsp;{ictDetails?.ICT_SystemDetails?.SystemHDD}
                      </td>
                    </tr>

                    <tr>
                      <th className="thclass2">Processor</th>
                      <td className="tdclass2">
                        :&nbsp;&nbsp;
                        {ictDetails?.ICT_SystemDetails?.SystemProcessor}
                      </td>
                    </tr>

                    <tr>
                      <th className="thclass2">Speed</th>
                      <td className="tdclass2">
                        :&nbsp;&nbsp;
                        {ictDetails?.ICT_SystemDetails?.SystemSpeed}
                      </td>
                    </tr>

                    <tr>
                      <th className="thclass2">OS</th>
                      <td className="tdclass2">
                        :&nbsp;&nbsp;{ictDetails?.ICT_SystemDetails?.SystemOS}
                      </td>
                    </tr>

                    <tr>
                      <th className="thclass2">OS</th>
                      <td className="tdclass2">
                        :&nbsp;&nbsp;{ictDetails?.ICT_SystemDetails?.SystemMake}
                      </td>
                    </tr>

                    <tr>
                      <th className="thclass2">Model</th>
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
            </td>
            <td className="table_td">
              <div className="detailsClz02">
                <h2 className="heading">KeyBoard Details</h2>
                <p className="ItemCode">
                  {ictDetails?.ICT_KeyboardDetails?.KeyCode}
                </p>
                <div>
                  <img src={keyBoard} alt="sysImg" className="img" />
                </div>
                <table className="table22">
                  <tbody>
                    {data.map((row, index) => (
                      <tr key={index}>
                        <tr className="trclass2">
                          <th className="thclass2">Make</th>
                          <td className="tdclass2">
                            :&nbsp;&nbsp;{" "}
                            {ictDetails?.ICT_KeyboardDetails?.KeyMake}
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
                          SERIAL NO :
                          {ictDetails?.ICT_KeyboardDetails?.KeySerial_no}
                        </p>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </td>
          </tr>

          <tr className="table_tr">
            <td className="table_td">
              <div className="detailsClz03">
                <table className="table23">
                  <tbody>
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
                              :&nbsp;&nbsp;{" "}
                              {ictDetails?.ICT_Screen?.[0].ScreenMake}
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
                              :&nbsp;&nbsp;{" "}
                              {ictDetails?.ICT_Screen?.[1].ScreenMake}
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
                  </tbody>
                </table>
              </div>
            </td>
            <td className="table_td">
              <div className="detailsClz04">
                <h2 className="heading">Mouse Details</h2>
                <p className="ItemCode">{ictDetails?.ICT_Mouse?.MouseCode}</p>
                <div>
                  <img src={Mouse} alt="sysImg" className="img" />
                </div>
                <table className="table24">
                  <tbody>
                    {data.map((row, index) => (
                      <tr key={index}>
                        <tr className="trclass2">
                          <th className="thclass2">Make</th>
                          <td className="tdclass2">
                            :&nbsp;&nbsp; {ictDetails?.ICT_Mouse?.MouseMake}
                          </td>
                        </tr>
                        <tr>
                          <th className="thclass2">Model</th>
                          <td className="tdclass2">
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
            </td>
          </tr>

          <tr className="table_tr">
            <td className="table_td">
              <div className="detailsClz05">
                <h2 className="heading">Laptop Details</h2>
                <p className="ItemCode">
                  {ictDetails?.ICT_LaptopDetails?.LaptopCode}
                </p>
                <div>
                  <img src={Laptop} alt="sysImg" className="imgLap" />
                </div>
                <table className="table25">
                  <tbody>
                    {data.map((row, index) => (
                      <tr key={index}>
                        <tr className="trclass2">
                          <th className="thclass2">RAM</th>
                          <td className="tdclass2">
                            :&nbsp;&nbsp;{" "}
                            {ictDetails?.ICT_LaptopDetails?.LaptopRam}
                          </td>
                        </tr>
                        <tr>
                          <th className="thclass2">Speed</th>
                          <td className="tdclass2">
                            :&nbsp;&nbsp;{" "}
                            {ictDetails?.ICT_LaptopDetails?.LaptopSpeed}
                          </td>
                        </tr>
                        <tr>
                          <th className="thclass2">HDD</th>
                          <td className="tdclass2">
                            :&nbsp;&nbsp;{" "}
                            {ictDetails?.ICT_LaptopDetails?.LaptopHDD}
                          </td>
                        </tr>
                        <tr>
                          <th className="thclass2">Processor</th>
                          <td className="tdclass2">
                            :&nbsp;&nbsp;{" "}
                            {ictDetails?.ICT_LaptopDetails?.LaptopProcessor}
                          </td>
                        </tr>
                        <tr>
                          <th className="thclass2">OS</th>
                          <td className="tdclass2">
                            :&nbsp;&nbsp;{" "}
                            {ictDetails?.ICT_LaptopDetails?.LaptopOS}
                          </td>
                        </tr>
                        <tr>
                          <th className="thclass2">Make</th>
                          <td className="tdclass2">
                            :&nbsp;&nbsp;{" "}
                            {ictDetails?.ICT_LaptopDetails?.LaptopMake}
                          </td>
                        </tr>
                        <tr>
                          <th className="thclass2">Model</th>
                          <td className="tdclass2">
                            :&nbsp;&nbsp;{" "}
                            {ictDetails?.ICT_LaptopDetails?.LaptopModel}
                          </td>
                        </tr>
                        <p className="serialCode5">
                          SERIAL NO :
                          {ictDetails?.ICT_LaptopDetails?.LaptopSerialNo}
                        </p>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </td>
            <td className="table_td">
              <div className="detailsClz06">
                <h2 className="heading">UPS Details</h2>
                <p className="ItemCode">{ictDetails?.ICT_UPS?.UPSCode}</p>
                <div>
                  <img src={UPS} alt="sysImg" className="img1" />
                </div>
                <table className="table26">
                  <tbody>
                    {data.map((row, index) => (
                      <tr key={index}>
                        <tr>
                          <th className="thclass2">Make</th>
                          <td className="tdclass2">
                            :&nbsp;&nbsp; {ictDetails?.ICT_UPS?.UPSMake}
                          </td>
                        </tr>
                        <tr>
                          <th className="thclass2">Model</th>
                          <td className="tdclass2">
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
            </td>
          </tr>

          <tr className="table_tr">
            <td className="table_td">
              <div className="detailsClz07">
                <h2 className="heading">Printer Details</h2>
                <p className="ItemCode">
                  {ictDetails?.ICT_PrinterDetails?.PrinterCode}
                </p>
                <div>
                  <img src={Printer} alt="sysImg" className="img" />
                </div>
                <table className="table27">
                  <tbody>
                    {data.map((row, index) => (
                      <tr key={index}>
                        <tr className="trclass2">
                          <th className="thclass2">Make</th>
                          <td className="tdclass2">
                            :&nbsp;&nbsp;{" "}
                            {ictDetails?.ICT_PrinterDetails?.PrinterMake}
                          </td>
                        </tr>
                        <tr>
                          <th className="thclass2">Model</th>
                          <td className="tdclass2">
                            :&nbsp;&nbsp;{" "}
                            {ictDetails?.ICT_PrinterDetails?.PrinterModle}
                          </td>
                        </tr>

                        <p className="serialCode55">
                          SERIAL NO :
                          {ictDetails?.ICT_PrinterDetails?.PrinterSerial_no}
                        </p>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </td>
            {/* <td className="table_td">
              <div
                style={{
                  width: "450px",
                  height: "350px",
                  border: "2px solid black",
                }}
              >
                <h2 className="heading">UPS Details</h2>
                <p className="ItemCode">{ictDetails?.ICT_UPS?.UPSCode}</p>
                <div>
                  <img src={UPS} alt="sysImg" className="img1" />
                </div>
                <table className="table26">
                  <tbody>
                    {data.map((row, index) => (
                      <tr key={index}>
                        <tr>
                          <th className="thclass2">Make</th>
                          <td className="tdclass2">
                            :&nbsp;&nbsp; {ictDetails?.ICT_UPS?.UPSMake}
                          </td>
                        </tr>
                        <tr>
                          <th className="thclass2">Model</th>
                          <td className="tdclass2">
                            :&nbsp;&nbsp; {ictDetails?.ICT_UPS?.UPSModle}
                          </td>
                        </tr>
                        <p className="serialCode6">
                          SERIAL NO :{ictDetails?.ICT_UPS?.UPSSerial_no}
                        </p>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </td> */}
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default Table;
