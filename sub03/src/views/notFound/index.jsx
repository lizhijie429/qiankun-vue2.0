import React from "react";
import NotFoundCss from "./index.module.css";
import NotFoundSvg from "../../assets/img/no_data.svg";
export default function NotFound() {
  return (
    <div className={NotFoundCss.not_found}>
      <img src={NotFoundSvg} alt="not-found" />
    </div>
  );
}
