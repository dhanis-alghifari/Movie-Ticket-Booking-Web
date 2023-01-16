import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowLeft20Filled } from "@fluentui/react-icons";

const HistoryBooking = () => {
  const history = useHistory();
  const movie = useSelector((state) => state.movies);

  const back = () => {
    history.push("/home");
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
      <h1 className="text-base text-slate-700 font-medium text-center my-6">
        History
      </h1>

      <div className="flex mb-10 mx-10">
        <div className=" w-full">
          <img src={movie?.moviePoster.moviePoster} alt="img" className="" />
        </div>
        <div className="block mb-10 ml-9">
          <h1 className="font-normal text-sm text-slate-700 mt-3">
            Movie Name : {movie?.movieName.movieName}
          </h1>
          <h1 className="font-normal text-sm text-slate-700 mt-3">
            Movie Plot : {movie?.moviePlot.moviePlot}
          </h1>
          <div className="flex">
            <h1 className="font-normal text-sm text-slate-700">Seat:</h1>
            {movie?.seatsBooking.seatsBooking.map((i, idx) => {
              return (
                <h1
                  className="font-normal text-sm text-slate-700 ml-2"
                  key={idx}
                >
                  {i + ","}
                </h1>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryBooking;
