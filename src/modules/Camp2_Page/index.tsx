import { NextPage } from "next";
import { FourPage } from "../LandingPage/component/FourPage";
import NavBar from "../NavBar";
import { Poster2 } from "./Poster2";
import { PreviewPage } from "./PreviewPage";
import { PrivilegePage } from "./PrivilegePage";

const Camp2_Page: NextPage = () => {
  return (
    <div>
      <NavBar />
      <Poster2 />
      <PrivilegePage />
      <FourPage />
    </div>
  );
};

export { Camp2_Page };
