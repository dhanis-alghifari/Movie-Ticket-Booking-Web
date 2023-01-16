import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.scss";
import { store } from "./redux/store";
import { Provider } from "react-redux";
// layouts
import Home from "./views/Home";
import MovieDetail from "./views/MovieDetail";
import BookingTicket from "./views/BookingTicket";
import HistoryBooking from "./views/HistoryBooking";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        {/* add routes with layouts */}
        <Route path="/home" exact component={Home} />
        <Route path="/home/:id" exact component={MovieDetail} />
        <Route path="/booking" exact component={BookingTicket} />
        <Route path="/history" exact component={HistoryBooking} />
        {/* add redirect for first page */}
        <Redirect from="*" to="/home" />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
