import { v4 as uuid } from "uuid";

const initialState = {
  login: false,
  user: null,
  clients: {},
  error: {},
  transactions: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return { ...state, login: true, user: action.payload };

    case "LOGGED_OUT":
      return { ...state, login: false, user: null };

    case "REGISTER_ERROR":
      return { ...state, error: { register: action.payload } };

    case "LOGIN_ERROR":
      return { ...state, error: { login: action.payload } };

    case "SET_ALL_CLIENTS":
      return { clients: action.payload };

    case "DELETE_CLIENT":
      const filteredClients = state.clients.filter(
        (client) => client.Id !== action.payload
      );
      return { ...state, clients: filteredClients };

    case "GET_ALL_CLIENTS":
      return { ...state, clients: action.payload };

    // case "SEND_DATA":
    //   return { ...state, transactions: action.data };

    default:
      return state;
  }
};
