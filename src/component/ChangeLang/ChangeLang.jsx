import { useEffect, useState } from "react";
import LangSvg from "../Icon/LangSvg";
import "./ChangeLang.scss";
import { MyUseContext } from "../../context/ContextGlobal";
const ChangeLang = ({}) => {
  const {data, changeLang, elHtmlLang} = MyUseContext();
  return (
    <>
      <div className="change-lang">
          <input type="radio" id="langUk" checked={elHtmlLang === "uk" ? true : false} onChange={()=>changeLang("uk")} name="lang" hidden value="uk" />
          <label htmlFor="langUk">UK</label>
          <input type="radio" id="langPl" checked={elHtmlLang === "pl" ? true : false} onChange={()=>changeLang("pl")} name="lang" hidden value="pl" />
          <label htmlFor="langPl">PL</label>
          <input type="radio" id="langEn" checked={elHtmlLang === "en" ? true : false} onChange={()=>changeLang("en")} name="lang" hidden value="en" />
          <label htmlFor="langEn">EN</label>
      </div>
    </>
  );
};

export default ChangeLang;
