import  { useState } from "react";

function App() {
  const [step, setStep] = useState("choose-title"); // default holat

  const handleButtonClick = (stepName) => {
    if (stepName === "description-content") {
      setStep("description-content");
    } else {
      setStep(stepName);
    }
  };

  return (
    <>
      <div className="bg-blue-500 w-screen h-screen flex justify-center items-center">
        <div className="bg-white border rounded-2xl w-[650px] h-[250px]">
          <div className="flex gap-5">
            <div className="content p-2 w-[40%]">
              <span className="block m-2 p-2">
                <button className="border rounded-[50%] px-3 py-1 bg-blue-900 text-white" onClick={() => handleButtonClick("choose-title")}>
                  1
                </button>{" "}
                <button onClick={() => handleButtonClick("choose-title")}>Choose title</button>
              </span>
              <span className="block m-2 p-2">
                <button className="border rounded-[50%] px-3 py-1 bg-blue-900 text-white" onClick={() => handleButtonClick("description-content")}>
                  2
                </button>{" "}
                <button onClick={() => handleButtonClick("description-content")}>Choose description</button>
              </span>
              <span className="block m-2 p-2">
                <button type="submit" className="border rounded-[50%] px-3 py-1 bg-blue-900 text-white" onClick={() => handleButtonClick("happy-now")}>
                  3
                </button>{" "}
                <button onClick={() => handleButtonClick("happy-now")}>Confirm data</button>
              </span>
            </div>
            <div className="conta">
              {step === "choose-title" && (
                <div className="choose-title p-2 m-2 ml-10">
                  <h1 className="text-center p-2 font-medium">Choose The Title</h1>
                  <button className="submit-title bg-neutral-300 px-2 py-1 border rounded ml-5 mt-5" type="submit" onClick={() => handleButtonClick("description-content")}>
                    Submit title
                  </button>
                </div>
              )}
              {step === "description-content" && (
                <div className="description-content p-2 m-2 ml-10">
                  <h1 className="text-center p-2 font-medium">Choose the description content</h1>
                  <button className="back bg-neutral-300 px-2 py-1 border rounded ml-5 mt-5" type="submit" onClick={() => handleButtonClick("choose-title")}>
                    Back
                  </button>{" "}
                  <button className="submit-description bg-neutral-300 px-2 py-1 border rounded ml-5 mt-5" type="submit" onClick={() => handleButtonClick("happy-now")}>
                    Submit Description
                  </button>
                </div>
              )}
              {step === "happy-now" && (
                <div className="happy-now p-2 m-2 ml-10">
                  <h1 className="text-center p-2 font-medium">Are You happy now?</h1>
                  <button className="go-back bg-neutral-300 px-2 py-1 border rounded ml-5 mt-5" type="submit" onClick={() => handleButtonClick("description-content")}>
                    No, go back
                  </button>{" "}
                  <button className="go-ahead bg-neutral-300 px-2 py-1 border rounded ml-5 mt-5" type="submit" onClick={() => handleButtonClick("ok-done")}>
                    Yes, go ahead!
                  </button>
                </div>
              )}
              {step === "ok-done" && (
                <div className="ok-done p-3 m-2 ml-10">
                  <h1 className="text-center p-2 font-medium">Ok, we're done. Thanks for sending us your data</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


