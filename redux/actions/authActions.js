import firebase from "firebase";

export function createEmailAccount(email, password, name) {
  return async (dispatch, { getFirestore }) => {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await firebase
        .firestore()
        .collection("customers")
        .doc(user.user.uid)
        .set({
          name: name,
        });
      dispatch(loggedIn(user));
    } catch (error) {
      dispatch(registerError(error.message));
    }
  };
}

export function loginEmailAccount(email, password) {
  return async (dispatch) => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      // console.log(user);
      dispatch(loggedIn(user));
    } catch (error) {
      dispatch(loginError(error.message));
    }
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut();
      dispatch(loggedOut());
    } catch (error) {}
  };
}

export const AddNewClient = (
  Id,
  fullName,
  phoneNumber,
  dateOfBirth,
  typeOfWork,
  houseNumber,
  image
) => {
  return (dispatch, state, { getFirestore, getFirebase }) => {
    const uploadTask = getFirebase()
      .storage()
      .ref(`images/${image.name}`)
      .put(image);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        console.log(snapShot);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getFirebase()
          .storage()
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            getFirestore()
              .collection("clients")
              .doc(Id)
              .set({
                Id,
                fullName,
                phoneNumber,
                dateOfBirth,
                typeOfWork,
                houseNumber,
                image: url,
              })
              .then(() => {
                alert("Client added successfully");
              })
              .catch((error) => {
                console.log(error);
              });
          });
      }
    );
  };
};

export const addClient = (client) => {
  console.log("add summary action", summary);
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("clients")
      //.orderBy("name", "desc")
      .add({
        fullName: clients.fullName,
        phoneNumber: client.phoneNumber,
        dateOfBirth: client.dateOfBirth,
        typeOFWork: client.typeOfWork,
        houseNumber: client.houseNumber,
        createdAt: new Date(),
      })
      .then(() => {
        console.log("client", client);
        alert("client Sent");
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(transactions(client));
    dispatch({
      type: "ADD_CLIENT",
      payload: client,
    });
  };
};

{
  /*export const getSummary = () => {
  return async (dispatch, state, { getFirestore }) => {
    try {
      const data = await getFirestore()
        .collection("summarys")
        .orderBy("timestamp", "desc")
        .get();
      // .onSnapshot(
      //   (snapshot) => {
      //     var summarys = [];
      //     snapshot.forEach((data) => {
      //       summarys.push(data.data());
      //     });

      // console.log("firestore summary", data.data());
      dispatch(summarys(data.data()));
    } catch (error) {
      console.log(error.message);
    }
  };
};*/
}

function loggedIn(user) {
  return {
    type: "LOGGED_IN",
    payload: user,
  };
}

function loggedOut() {
  return {
    type: "LOGGED_OUT",
  };
}

export function registerError(error) {
  return {
    type: "REGISTER_ERROR",
    payload: error,
  };
}

export function loginError(error) {
  return {
    type: "LOGIN_ERROR",
    payload: error,
  };
}

export function transactions(data) {
  return {
    type: "SEND_DATA",
    data: data,
  };
}

export function client(data) {
  return {
    type: "RECEIVE_SUMMARY",
    data: data,
  };
}
