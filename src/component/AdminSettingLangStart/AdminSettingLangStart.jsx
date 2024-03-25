import "./AdminSettingLangStart.scss";
import { app } from "../../bd/firebase";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
const AdminSettingLangStart = () => {
  const db = getFirestore(app);
  const [getLang, setGetlang] = useState(null);
  async function getHeroFunction() {
    const refItem = collection(db, "lang");
    const snapData = await getDocs(refItem);
    const mopObj = {};
    snapData.forEach((item)=>{
      mopObj[item.id] = item.data();
    })
   setGetlang(mopObj)
   
    
  }
  async function updateHero(item, value, lang) {
    const refItem = doc(db, "lang", lang);
    switch (item) {
      case "TEXT1":
        await updateDoc(refItem, { "heroSection.text1": value });
        break;
      case "TEXT2":
        await updateDoc(refItem, { "heroSection.text2": value });
        break;
      case "TEXT3":
        await updateDoc(refItem, { "heroSection.text3": value });
        break;
      case "ORDER":
        await updateDoc(refItem, { "heroSection.order": value });
        break;
    }
  }

  useEffect(() => {
    getHeroFunction();
  }, []);
  console.log(getLang);
  return (
    <table className="settings-lang-table">
      <thead>
        <tr>
          <th>Українська</th>
          <th>Polski</th>
          <th>English</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th></th>
          <th>Hero Section</th>
          <th></th>
        </tr>
        <tr>
          {/* UK */}
          <td>
            <p
              contentEditable={true}
              onBlur={(e) => updateHero("TEXT1", e.target.innerText, "uk")}
            >
            {getLang && getLang.uk.heroSection.text1}
            </p>
          </td>
          {/* PL */}
          <td>
            <p
              contentEditable={true}
              onBlur={(e) => updateHero("TEXT1", e.target.innerText, "pl")}
            >
             {getLang && getLang.pl.heroSection.text1}
            </p>
          </td>
          {/* EN */}
          <td>
            <p
              contentEditable={true}
              onBlur={(e) => updateHero("TEXT1", e.target.innerText, "en")}
            >{getLang && getLang.en.heroSection.text1}</p>
          </td>
        </tr>
        <tr>
          {/* UK */}
          <td>
            <p
              contentEditable={true}
              onBlur={(e) => updateHero("TEXT2", e.target.innerText, "uk")}
            >
              {getLang && getLang.uk.heroSection.text2}
            </p>
          </td>
          {/* PL */}
          <td>
            <p
              contentEditable={true}
              onBlur={(e) => updateHero("TEXT2", e.target.innerText, "pl")}
            >
              {getLang && getLang.pl.heroSection.text2}
            </p>
          </td>
          {/* EN */}
          <td>
            <p
              contentEditable={true}
              onBlur={(e) => updateHero("TEXT2", e.target.innerText, "en")}
            >{getLang && getLang.en.heroSection.text2}</p>
          </td>
        </tr>
        <tr>
          {/* UK */}
          <td>
            <p
              contentEditable={true}
              onBlur={(e) => updateHero("TEXT3", e.target.innerText, "uk")}
            >
             {getLang && getLang.uk.heroSection.text3}
            </p>
          </td>
          {/* PL */}
          <td>
            <p
              contentEditable={true}
              onBlur={(e) => updateHero("TEXT3", e.target.innerText, "pl")}
            >
             {getLang && getLang.pl.heroSection.text3}
            </p>
          </td>
          {/* EN */}
          <td>
            <p
              contentEditable={true}
              onBlur={(e) => updateHero("TEXT3", e.target.innerText, "en")}
            >{getLang && getLang.en.heroSection.text3}</p>
          </td>
        </tr>
        <tr>
          {/* UK */}
          <td>
            <p
              contentEditable={true}
              onBlur={(e) => updateHero("ORDER", e.target.innerText, "uk")}
            >
             {getLang && getLang.en.heroSection.order}
            </p>
          </td>
          {/* PL */}
          <td>
            <p
              contentEditable={true}
              onBlur={(e) => updateHero("ORDER", e.target.innerText, "pl")}
            >
              {getLang && getLang.en.heroSection.order}
            </p>
          </td>
          {/* EN */}
          <td>
            <p
              contentEditable={true}
              onBlur={(e) => updateHero("ORDER", e.target.innerText, "en")}
            >{getLang && getLang.en.heroSection.order}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AdminSettingLangStart;
