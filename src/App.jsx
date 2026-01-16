import { Building2, Rocket, ShieldCheck, StarIcon } from "lucide-react";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex  flex-col bg-[#1C1C1C] text-white p-6 lg:p-12">
          <h1 className="text-xl font-bold">llElevenLabs</h1>
          <div className="mt-12">
            <p className="text-3xl">Contact our sales team</p>
            <ul className="mt-7 flex flex-col gap-3.5 text-md">
              <li className="flex gap-1">
                <Rocket />
                Custom pricing and elevated concurrency
              </li>
              <li className="flex gap-1">
                <ShieldCheck />
                Enterprise-grade security including SOC II, GDPR and HIPAA compliance
              </li>
              <li className="flex gap-1">
                <Building2 />
                Enterprise support and SLAs
              </li>
            </ul>
            <p className="mt-8 lg:mt-16 text-neutral-500 text-sm font-medium">
              Trusted by 10,000+ leading businesses
            </p>
            <div className="flex  gap-6 mt-12 overflow-hidden">
              <img width={"90px"} src="/cisco.png" alt="" />
              <img width={"90px"} src="/cisco.png" alt="" />
              <img width={"90px"} src="/cisco.png" alt="" />
              <img width={"90px"} src="/cisco.png" alt="" />
              <img width={"90px"} src="/cisco.png" alt="" />
            </div>
            <p className="lg:flex mt-12 font-medium hidden ">
              <StarIcon className="fill-white" />
              <StarIcon className="fill-white" />
              <StarIcon className="fill-white" />
              <StarIcon className="fill-white" />
              <StarIcon className="fill-white mr-2" /> 4.5 stars and 1,059+
              reviews
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2 lg:px-24 pb-6 lg:pb-0">
          <div className="flex flex-col lg:flex-1 mt-6 lg:mt-0 lg:mx-0">
            <h3 className="text-2xl lg:text-4xl  font-medium">Contact sales form</h3>
            <p className="mt-2 lg:mt-4  text-neutral-500 text-md lg:text-md ">
              Please fill out the form below to get started
            </p>
            <div className="mt-8 flex flex-col gap-2.5">

              <label className="text-sm lg:text-md" htmlFor="">Company Website</label>
              <input type="text" placeholder="elevenlabs.io"  className="px-4 py-2 font-medium text-neutral-600 rounded-2xl border border-neutral-200 mb-2"/>

              <label htmlFor="">Business Email</label>
              <input type="text" placeholder="example@elevenlabs.io"  className="px-4 py-2 font-medium text-neutral-600 rounded-2xl border border-neutral-200"/>

            </div>
            <button className="mt-8 lg:mt-16 text-white font-medium rounded-4xl bg-neutral-500 w-fit px-4 py-2 self-end lg:self-start">Next</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
