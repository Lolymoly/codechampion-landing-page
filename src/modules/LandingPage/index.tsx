import { NextPage } from "next";
import { FirstPage } from "./component/FirstPage";
import { SecondPage } from "./component/SecondPage";
import { ThirdPage } from "./component/ThirdPage";
import { FourPage } from "./component/FourPage";

const LandingPage: NextPage = () => {
  return (
    <div>
      <FirstPage />
      {/* <SecondPage /> */}
      <ThirdPage />
      {/* <FourPage /> */}
    </div>
  );
};

export { LandingPage };
