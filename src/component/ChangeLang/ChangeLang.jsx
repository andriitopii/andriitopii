import { useEffect, useState } from "react";
import LangSvg from "../Icon/LangSvg";
import "./ChangeLang.scss";
const ChangeLang = ({}) => {
  return (
    <>
      <div className="change-lang">
          <input type="radio" id="langUk" name="lang" hidden value="uk" />
          <label htmlFor="langUk">UK</label>
          <input type="radio" id="langPl" name="lang" hidden value="pl" />
          <label htmlFor="langPl">PL</label>
          <input type="radio" id="langEn" name="lang" hidden value="en" />
          <label htmlFor="langEn">EN</label>
      </div>
    </>
  );
};

export default ChangeLang;
