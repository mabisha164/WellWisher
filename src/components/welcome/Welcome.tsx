import Button from "../Button";
import { Link } from "react-router-dom";
import wellWisher from "../../assets/wellWisher.png";

function Welcome() {
  return (
    <div className="h-[100vh] bg-black flex flex-col md:flex-row justify-center items-center p-4">
      <div className="mb-4 md:mb-0 md:mr-4">
        <img
          src={wellWisher}
          className="max-w-full max-h-[350px] h-auto"
          alt="Well Wisher"
        />
      </div>

      <div className="text-white p-4 w-full md:w-[40%] flex flex-col items-center">
        <div className="mb-5">
          <span className="text-5xl font-bold mb-4">Well Wisher</span>
        </div>
        <div className="p-3 tracking-wider text-2xl text-center">
          <span>Send heartfelt wishes</span>
          <br />
          <span>effortlessly and on time!</span>
        </div>
        <div className="w-full m-1">
          <Link to="/signUp">
            <Button className="bg-slate-900 w-full hover:bg-slate-950">
              Get started
            </Button>
          </Link>
        </div>
        <div className="w-full m-1">
          <Link to="/signIn">
            <Button className="w-full bg-zinc-400 hover:bg-slate-600 text-black">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
