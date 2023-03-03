import TechItem from "./TechItem";

import { myTechStack } from "@/utils/config/techStack";

function TechStack() {
  return (
    <div className="grid grid-flow-row grid-cols-3 gap-2 text-md sm:grid-cols-5 md:grid-cols-3 md:text-lg lg:grid-cols-4">
      {myTechStack.map((tech) => (
        <TechItem
          key={tech.id}
          title={tech.title}
          description={tech.description}
        />
      ))}
    </div>
  );
}

export default TechStack;
