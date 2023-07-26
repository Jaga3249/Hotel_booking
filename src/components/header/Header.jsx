import React, { useState } from "react";
import "./header.css";
import { MdHotel } from "react-icons/md";
import { RiFlightTakeoffLine } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";
import { BiSolidBed } from "react-icons/bi";
import { FaTaxi } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { BsPersonFill } from "react-icons/bs";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [opendate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [openOption, setOpenOption] = useState(false);

  const handleClick = (name, type) => {
    setOption((pre) => {
      return {
        ...pre,
        [name]: type === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, option } });
  };
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerItem active">
            <MdHotel />
            <span>Stay</span>
          </div>
          <div className="headerItem">
            <RiFlightTakeoffLine />
            <span>Flight</span>
          </div>
          <div className="headerItem">
            <AiFillCar />
            <span>Car rentals</span>
          </div>
          <div className="headerItem">
            <BiSolidBed />
            <span>Attractions</span>
          </div>
          <div className="headerItem">
            <FaTaxi />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? its genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travel-unclock instant saving of 10% or more
              with free booking site account
            </p>
            <button className="headerBtn">Sign in/Resister</button>
            <div className="headerSearch">
              {/* ist-div */}
              <div className="headerSearchInput">
                <MdHotel className="headerIcon" />
                <input
                  type="text"
                  placeholder="where are you going?"
                  className="headerInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              {/* 2nd-div */}
              <div className="headerSearchInput">
                <SlCalender className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => setOpenDate(!opendate)}
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {/* setDate([item.selection]) */}
                {opendate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    minDate={new Date()}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              {/* 3rd-div */}
              <div className="headerSearchInput ">
                <BsPersonFill className="headerIcon" />

                <span
                  className="headerSearchText"
                  onClick={() => setOpenOption(!openOption)}
                >
                  {`${option.adult}adult.${option.children} children.${option.room} room`}
                </span>
                <span className="headerSpan">
                  {openOption && (
                    <div className="option">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="buttonCounter">
                          <button
                            className="optionCounterBtn"
                            onClick={() => handleClick("adult", "d")}
                            disabled={option.adult <= 1}
                          >
                            -
                          </button>
                          <button className="optionCounterNumber">
                            {option.adult}
                          </button>
                          <button
                            className="optionCounterBtn"
                            onClick={() => handleClick("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">children</span>
                        <div className="buttonCounter">
                          <button
                            className="optionCounterBtn"
                            onClick={() => handleClick("children", "d")}
                            disabled={option.children <= 1}
                          >
                            -
                          </button>
                          <button className="optionCounterNumber">
                            {option.children}
                          </button>
                          <button
                            className="optionCounterBtn"
                            onClick={() => handleClick("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem ">
                        <span className="optionText">room</span>
                        <div className="buttonCounter">
                          <button
                            className="optionCounterBtn"
                            onClick={() => handleClick("room", "d")}
                            disabled={option.room <= 1}
                          >
                            -
                          </button>
                          <button className="optionCounterNumber">
                            {option.room}
                          </button>
                          <button
                            className="optionCounterBtn"
                            onClick={() => handleClick("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </span>
              </div>
              <div className="headerSearchInput">
                <button className="btnSearch" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
