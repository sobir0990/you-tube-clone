import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCvOQfHUtxPo0G8g2OJ1WMKEj2ldPTIGvk",
    authDomain: "clone-71ea9.firebaseapp.com",
    projectId: "clone-71ea9",
    storageBucket: "clone-71ea9.appspot.com",
    messagingSenderId: "127502341741",
    appId: "1:127502341741:web:96f5da153d807971729164"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();

//Web client ID
//127502341741-hdada2afgefcs21ug4sbes619rhtbirq.apps.googleusercontent.com

//Web client secret
//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