import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { seatsBooking } from "./storemovies";
import { ArrowLeft20Filled } from "@fluentui/react-icons";

const BookingTicket = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let dataseats = [
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "C1",
    "C2",
    "C3",
    "C4",
    "C5",
  ];
  const [userSeats, setUserSeats] = useState([]);
  const [number, setNumber] = useState(1);

  const handleSelected = (seat) => {
    if (userSeats.includes(seat)) {
      const cancelSeat = userSeats.filter((value) => value !== seat);
      setUserSeats(cancelSeat);
    } else {
      setUserSeats([...userSeats, seat]);
    }
  };

  useEffect(() => {
    setUserSeats([]);
  }, [number]);

  const back = () => {
    history.push(`/home/${localStorage.getItem("id")}`);
  };
  return (
    <div className="pages">
      <div className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-2">
        <ArrowLeft20Filled
          className="cursor-pointer w-8 text-slate-500"
          height="100%"
          onClick={back}
        />
      </div>

      <div className="text-base border-2 text-center font-medium mt-20 mb-6 h-10 py-1 mx-10">
        Screen
      </div>

      <div className="grid grid-cols-5 ml-10 mb-80">
        {dataseats?.map((i, idx) => {
          return (
            <div
              className={`w-10 h-10 p-2 border-2 cursor-pointer mb-5 ${
                userSeats.includes(i) ? "bg-accentSuccess-500" : ""
              }`}
              key={idx}
              onClick={() => handleSelected(i)}
            >
              {i}
            </div>
          );
        })}
      </div>

      <div className="flex">
        <input
          type="number"
          onChange={(e) => setNumber(Number(e.target.value))}
          value={number}
          max={15}
          min={1}
          className="border-2 w-9 mx-5 border-tertiary-700 mb-8 cursor-pointer text-black text-sm font-normal text-center py-2"
        />
        <button
          disabled={userSeats.length !== number ? true : false}
          onClick={() => {
            dispatch(seatsBooking({ seatsBooking: userSeats }));
            history.push("/history");
          }}
          className={`border-2 w-full mx-5 bg-accentInformation-700 mb-8 cursor-pointer text-white text-sm font-normal text-center py-2
          ${userSeats.length !== number ? "bg-slate-400" : ""}`}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default BookingTicket;
