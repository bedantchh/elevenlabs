import { Building2, Rocket, ShieldCheck, StarIcon } from "lucide-react";

function App() {
  return (
    <>
      <div className="min-h-screen flex">
        <div className="w-1/2 flex  flex-col bg-[#1C1C1C] text-white  px-12 py-12">
          <h1 className="text-xl font-bold">llElevenLabs</h1>
          <div className="mt-12">
            <p className="text-5xl">Contact our sales team</p>
            <ul className="mt-7 flex flex-col gap-3.5 text-md">
              <li className="flex gap-1">
                <Rocket />
                Custom pricing and elevated concurrency
              </li>
              <li className="flex gap-1">
                <ShieldCheck />
                Enterprise-grade security including SOC II, GDPR and HIPAA
                compliance
              </li>
              <li className="flex gap-1">
                <Building2 />
                Enterprise support and SLAs
              </li>
            </ul>
            <p className="mt-16 text-neutral-500 text-sm font-medium">
              Trusted by 10,000+ leading businesses
            </p>
            <div className="flex gap-6 mt-12">
              <img width={"90px"} src="/cisco.png" alt="" />
              <img width={"90px"} src="/cisco.png" alt="" />
              <img width={"90px"} src="/cisco.png" alt="" />
              <img width={"90px"} src="/cisco.png" alt="" />
              <img width={"90px"} src="/cisco.png" alt="" />
            </div>
            <p className="flex mt-12 font-medium">
              <StarIcon className="fill-white" />
              <StarIcon className="fill-white" />
              <StarIcon className="fill-white" />
              <StarIcon className="fill-white" />
              <StarIcon className="fill-white pr-2" /> 4.5 stars and 1,059+
              reviews
            </p>
          </div>
        </div>
        <div className="flex items-center w-1/2 px-28">
          <div className="flex flex-col">
            <h3 className="text-4xl font-medium">Contact sales form</h3>
            <p className="mt-4 text-neutral-500 text-md ">
              Please fill out the form below to get started
            </p>
            <div className="mt-8 flex flex-col gap-2.5">
              <label htmlFor="">Company Website</label>
              <input type="text" placeholder="elevenlabs.io"  className="px-4 py-2 font-medium text-neutral-600 rounded-2xl border border-neutral-200 mb-2"/>
              <label htmlFor="">Business Email</label>
              <input type="text" placeholder="example@elevenlabs.io"  className="px-4 py-2 font-medium text-neutral-600 rounded-2xl border border-neutral-200"/>
            </div>
            <button className="mt-16 text-white font-medium rounded-4xl bg-neutral-500 w-fit px-4 py-2">Next</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
