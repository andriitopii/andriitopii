import { getDocs, addDoc, getFirestore, collection,doc, setDoc} from "firebase/firestore";
import { app } from "../../bd/firebase";
import { useEffect } from "react";

const Home = () => {
  const db = getFirestore(app);
  async function addB() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  async function getB() {
    const querySnapshot = await getDocs(collection(db, "lang"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  }

  async function setB() {
    const querySnapshot = await getDocs(collection(db, "lang"));
    const refDocv = doc(db, 'lang', 'ru')
    await setDoc(refDocv, {
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    });
  }

  return (
    <>
      <button type="button" onClick={() => addB()}>
        Add
      </button>
      <button type="button" onClick={() => getB()}>
        Get
      </button>
      <button type="button" onClick={() => setB()}>
        Set
      </button>
    </>
  );
};

export default Home;
