import React, { useEffect, useState } from "react";
import { getMovie } from "../api";
import { useHistory } from "react-router-dom";
import Skeleton from "../components/atom/Skeleton";

const Home = () => {
  const [movie1, setMovie1] = useState({});
  const [movie2, setMovie2] = useState({});
  const [movie3, setMovie3] = useState({});
  const [movie4, setMovie4] = useState({});
  const [movie5, setMovie5] = useState({});
  const [movie6, setMovie6] = useState({});
  const [movie7, setMovie7] = useState({});
  const [movie8, setMovie8] = useState({});
  const [movie9, setMovie9] = useState({});
  const [movie10, setMovie10] = useState({});
  const [loading, setLoading] = useState(false);

  const getmovie1 = () => {
    getMovie(`&i=tt1285016`).then((res) => {
      if (res.status !== 200) {
        setLoading(true);
      } else {
        setLoading(false);
        var tempList = [];
        tempList = res.data;
        setMovie1(tempList);
      }
    });
  };

  const getmovie2 = () => {
    getMovie(`&i=tt3896198`).then((res) => {
      if (res.status !== 200) {
        setLoading(true);
      } else {
        setLoading(false);
        var tempList = [];
        tempList = res.data;
        setMovie2(tempList);
      }
    });
  };

  const getmovie3 = () => {
    getMovie(`&i=tt1295019`).then((res) => {
      if (res.status !== 200) {
        setLoading(true);
      } else {
        setLoading(false);
        var tempList = [];
        tempList = res.data;
        setMovie3(tempList);
      }
    });
  };

  const getmovie4 = () => {
    getMovie(`&i=tt3896298`).then((res) => {
      if (res.status !== 200) {
        setLoading(true);
      } else {
        setLoading(false);
        var tempList = [];
        tempList = res.data;
        setMovie4(tempList);
      }
    });
  };

  const getmovie5 = () => {
    getMovie(`&i=tt3896278`).then((res) => {
      if (res.status !== 200) {
        setLoading(true);
      } else {
        setLoading(false);
        var tempList = [];
        tempList = res.data;
        setMovie5(tempList);
      }
    });
  };

  const getmovie6 = () => {
    getMovie(`&i=tt1895018`).then((res) => {
      if (res.status !== 200) {
        setLoading(true);
      } else {
        setLoading(false);
        var tempList = [];
        tempList = res.data;
        setMovie6(tempList);
      }
    });
  };

  const getmovie7 = () => {
    getMovie(`&i=tt1893520`).then((res) => {
      if (res.status !== 200) {
        setLoading(true);
      } else {
        setLoading(false);
        var tempList = [];
        tempList = res.data;
        setMovie7(tempList);
      }
    });
  };

  const getmovie8 = () => {
    getMovie(`&i=tt0096895`).then((res) => {
      if (res.status !== 200) {
        setLoading(true);
      } else {
        setLoading(false);
        var tempList = [];
        tempList = res.data;
        setMovie8(tempList);
      }
    });
  };

  const getmovie9 = () => {
    getMovie(`&i=tt0286716`).then((res) => {
      if (res.status !== 200) {
        setLoading(true);
      } else {
        setLoading(false);
        var tempList = [];
        tempList = res.data;
        setMovie9(tempList);
      }
    });
  };

  const getmovie10 = () => {
    getMovie(`&i=tt0954542`).then((res) => {
      if (res.status !== 200) {
        setLoading(true);
      } else {
        setLoading(false);
        var tempList = [];
        tempList = res.data;
        setMovie10(tempList);
      }
    });
  };

  useEffect(() => {
    setLoading(true);
    getmovie1();
  }, []);
  useEffect(() => {
    setLoading(true);
    getmovie2();
  }, []);
  useEffect(() => {
    setLoading(true);
    getmovie3();
  }, []);
  useEffect(() => {
    setLoading(true);
    getmovie4();
    getmovie5();
    getmovie6();
    getmovie7();
    getmovie8();
    getmovie9();
    getmovie10();
  }, []);

  let dataMovie = [
    movie1,
    movie2,
    movie3,
    movie4,
    movie5,
    movie6,
    movie7,
    movie8,
    movie9,
    movie10,
  ];

  const history = useHistory();
  const handleDetail = (id) => {
    history.push(`/home/${id}`);
  };

  const historys = () => {
    history.push("/history");
  };

  return (
    <div className="pages">
      {loading ? (
        <Skeleton className="flex w-full h-82" />
      ) : (
        <>
          <div className="grid grid-cols-2 ml-10 mt-5">
            {dataMovie?.map((i, idx) => {
              return (
                <div
                  className="block mb-10"
                  key={idx}
                  onClick={() => handleDetail(i.imdbID)}
                >
                  <img src={i?.Poster} alt="img" className="w-40" />
                  <h1 className="font-normal text-xs text-slate-700 mt-3">
                    {i.Title}
                  </h1>
                </div>
              );
            })}
          </div>
          <div
            onClick={historys}
            className="mx-10 bg-accentInformation-700 mb-8 cursor-pointer text-white text-sm font-normal text-center py-2"
          >
            History
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
