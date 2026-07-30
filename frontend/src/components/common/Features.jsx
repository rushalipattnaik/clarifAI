import { CheckCircle } from "lucide-react";

const features = [

  "AI Requirement Analysis",

  "User Stories",

  "Acceptance Criteria",

  "API Suggestions",

  "Database Design",

  "MVP Planning"

];

function Features() {

  return (

    <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-5">

      {

        features.map((item) => (

          <div

            key={item}

            className="flex items-center gap-3 rounded-xl bg-slate-900 p-5"

          >

            <CheckCircle className="text-cyan-400" />

            <p className="text-white">

              {item}

            </p>

          </div>

        ))

      }

    </div>

  );

}

export default Features;