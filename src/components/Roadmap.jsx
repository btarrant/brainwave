import { grid } from "../assets";
import { roadmap } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

const Roadmap = () => {
  return (
    <Section cross className="overflow-hidden" id="roadmap">
      <div className="container md:p-10">
        <Heading tag="Ready to get started" title="What we're working on" />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:bp-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div key={item.id}>
                <div>
                  <div>
                    <img src={grid} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
