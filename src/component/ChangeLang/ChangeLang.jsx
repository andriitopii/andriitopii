
import { useEffect, useState } from "react";
import LangSvg from "../Icon/LangSvg";
import "./ChangeLang.scss";
const ChangeLang = ({ changeLang, elHtml }) => {

  
  

  return (
    <>
      <div className="change-lang">
        <button type="button"><LangSvg width="24px" height="24px"/>{elHtml}</button>
        <div className="change-lang__choise">
            <div>
          <input type="radio" name="lang" hidden value="uk" defaultChecked={elHtml === "uk" && true}   id="langUk" onClick={()=> changeLang("uk")} />
          <label htmlFor="langUk">Українська</label>
          <input type="radio" name="lang" hidden value="pl" defaultChecked={elHtml === "pl" && true}   id="langPl" onClick={()=> changeLang("pl")}/>
          <label htmlFor="langPl">Polski</label>
          <input type="radio" name="lang"  hidden value="en"  defaultChecked={elHtml === "en" && true}   id="langEn" onClick={()=> changeLang("en")}/>
          <label htmlFor="langEn">English</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeLang;
