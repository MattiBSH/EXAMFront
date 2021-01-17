import React, { useState, useEffect } from "react";

const mainURL = "https://bshproduction.dk/devops-starter";
const userInfoEndpoint = "/api/info/user";
const adminInfoEndpoint = "/api/info/admin";
const defaultEndpoint = "/api/default";
const loginEndpoint = "/api/login";
const getAll="/api/default/hotels";
const add="/api/default";
const booking="/api/default/bookings/"
const bookingad="/api/default/bookingsad/"
const del="/api/default/bookings/"
const put="/api/default/bookings/"

export {
    mainURL,
    userInfoEndpoint,
    adminInfoEndpoint,
    defaultEndpoint,
    loginEndpoint,getAll,add,booking,bookingad,del,put
};
