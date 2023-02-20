import * as React from "react"; 
import { Navigation, Main } from "@beyond-js/project/components";

export /*bundle*/
function Page(): JSX.Element {

  return (
    <>
      <Navigation  />
        
      <Main />
      <footer className="container__footer" id="footer-id">
        <div className="info__footer"><p className="message__infor">CONTACT</p></div>
        <div className="space-networks">
          <div className="flex">
            <img src="images/facebook.png" alt="logo facebook" className="images-footer"/>
            <p className="networks">Shop Real</p>
          </div>
          <div className="flex">
            <img src="images/instagram.png" alt="logo instagram" className="images-footer"/>
            <p className="networks">shopreal23</p>
          </div>
          <div className="flex">
            <img src="images/gorjeo.png" alt="logo twitter" className="images-footer"/>
            <p className="networks">Shop Real</p>
          </div> 
        </div>
        <div className="rights">
        all rights reserved to <span className="name-span"> GaboDeveloper</span></div>
      </footer>
    </>
  );
}
