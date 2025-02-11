// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importando Firestore

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDPYwHwewDjJpsCnhlGwgEvwL4VBBZND4I",
  authDomain: "coder-project-e3ab7.firebaseapp.com",
  projectId: "coder-project-e3ab7",
  storageBucket: "coder-project-e3ab7.appspot.com", // Firebase Storage
  messagingSenderId: "814869681140",
  appId: "1:814869681140:web:dc546cedd4740c60531fa1",
  measurementId: "G-YNQGCFCPWZ"
};

// Inicializando Firebase
const app = initializeApp(firebaseConfig);

// Inicializando Firestore
const db = getFirestore(app);

// Exportando o Firestore para uso em outros arquivos
export { db };
