import React, { useCallback, useEffect, useState } from "react";
import { getMovie } from "../api";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { movieName, moviePlot, moviePoster } from "./storemovies";
import { ArrowLeft20Filled } from "@fluentui/react-icons";
import Skeleton from "../components/atom/Skeleton";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const [movie1, setMovie1] = useState({});
  const [loading, setLoading] = useState(false);

  const getDetailMovie = useCallback(() => {
    getMovie(`&i=${id}`).then((res) => {
      if (res.status !== 200) {
        setLoading(true);
      } else {
        setLoading(false);
        var tempList = [];
        tempList = res.data;
        setMovie1(tempList);
      }
    });
  }, [id, setLoading, setMovie1]);

  useEffect(() => {
    setLoading(true);
    getDetailMovie();
  }, [getDetailMovie]);

  const booking = () => {
    dispatch(movieName({ movieName: movie1.Title }));
    dispatch(moviePlot({ moviePlot: movie1.Plot }));
    dispatch(moviePoster({ moviePoster: movie1.Poster }));
    localStorage.setItem("id", id);
    history.push("/booking");
  };

  const back = () => {
    history.push("/home");
  };

  return (
    <div className="pages overflow-x-hidden overflow-auto">
      {loading ? (
        <Skeleton className="flex w-full h-82" />
      ) : (
        <>
          <div className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-2">
            <ArrowLeft20Filled
              className="cursor-pointer w-8 text-slate-500"
              height="100%"
              onClick={back}
            />
          </div>

          <div className="block mb-10 mx-10">
            <img src={movie1.Poster} alt="img" className="mt-10" />
            <p className="font-normal text-sm text-slate-700 mt-3">
              Movie Name : {movie1.Title}
            </p>
            <p className="font-normal text-sm text-slate-700 mt-3">
              Movie Released : {movie1.Released}
            </p>
            <p className="font-normal text-sm text-slate-700 mt-3">
              Movie Plot : {movie1.Plot}
            </p>
          </div>
          <div
            onClick={booking}
            className="mx-10 bg-accentInformation-700 mb-8 cursor-pointer text-white text-sm font-normal text-center py-2"
          >
            Book
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
