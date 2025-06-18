import firebase from 'aula04/my-app/node_modules/firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};


firebase.initializeApp(firebaseConfig);


import React, { useEffect,useState } from 'react';
import { Flatlist, Text, View } from 'react-native';

export default function App () {
  const [nomes, setNomes] = useState([]);

  useEffect(()
}