import firebase from 'firebase'
import Rebase from 're-base'


const firebaseInfo = firebase.initializeApp( {
    apiKey: "AIzaSyAVPS0X3eYTqh-3Jwfn8_mh3wob3rKHSFY",
    authDomain: "quiz-bruno-gerbasi.firebaseapp.com",
    databaseURL: "https://quiz-bruno-gerbasi.firebaseio.com",
    projectId: "quiz-bruno-gerbasi",
    storageBucket: "quiz-bruno-gerbasi.appspot.com",
    messagingSenderId: "101142333639",
    appId: "1:101142333639:web:022a8b58034d1f05ce96e2",
    measurementId: "G-PD702RD3MN"
});

const db = firebase.database(firebaseInfo)
const config = Rebase.createClass(db)


firebase.analytics();

export const providers = {
    'facebook' : new firebase.auth.FacebookAuthProvider,
    'twitter': new firebase.auth.TwitterAuthProvider()
}

export const auth = firebaseInfo.auth()
export default config