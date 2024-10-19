import React from "react";

const LastNameContext = React.createContext()

const LastNameProvider = LastNameContext.Provider
const LastNameConsumer = LastNameContext.Consumer

export {LastNameProvider, LastNameConsumer}