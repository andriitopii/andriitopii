
import { useEffect, useState } from "react";
import LangSvg from "../Icon/LangSvg";
import "./ChangeLang.scss";
const ChangeLang = ({  }) => {

  
  

  return (
    <>
      <div className="change-lang">
        <button type="button"><LangSvg width="24px" height="24px"/></button>
        <div className="change-lang__choise">
            <div>
          <input type="radio" name="lang" hidden value="uk"  />
          <label htmlFor="langUk">Українська</label>
          <input type="radio" name="lang" hidden value="pl" />
          <label htmlFor="langPl">Polski</label>
          <input type="radio" name="lang"  hidden value="en" />
          <label htmlFor="langEn">English</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeLang;
