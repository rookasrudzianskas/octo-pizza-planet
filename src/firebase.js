import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCX835N7AaUulQjK_8EAAS3b0x_xQ8Q_Lo",
    authDomain: "octo-pizza-planet.firebaseapp.com",
    projectId: "octo-pizza-planet",
    storageBucket: "octo-pizza-planet.appspot.com",
    messagingSenderId: "207437584462",
    appId: "1:207437584462:web:ea334622a37e0de2d98b1f",
    measurementId: "G-K7MPW9XNG3"
}

firebase.initializeApp(config)
const db = firebase.firestore()
export const firebaseAuth = firebase.auth()
export const dbMenuRef = db.collection('menu')
export const dbOrdersRef = db.collection('orders')