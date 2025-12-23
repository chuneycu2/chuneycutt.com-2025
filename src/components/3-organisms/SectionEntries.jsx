import { useEffect } from "react";
import { scrollSpy } from "react-scroll";
import { InView } from "react-intersection-observer";

import Experiences from "../4-molecules/Experiences";
import SkillsAndTools from "../4-molecules/SkillsAndTools";
import Projects from "../4-molecules/Projects";
import About from "../4-molecules/About";
import Accolades from "../4-molecules/Accolades";

export default function SectionEntries(props) {
  const { acf_fc_layout, entries } = props.content;
  const media = props.media;
  const type = acf_fc_layout.replace(/_/g, "-");

  useEffect(() => {
    setTimeout(function () {
      scrollSpy.update();
    }, 500);
  }, []);

  const entryTemplate = (content) => {
    if (type === "experience") return <Experiences content={content} />;
    if (type === "skills-and-tools")
      return <SkillsAndTools content={content} />;
    if (type === "projects")
      return <Projects content={content} media={media} />;
    if (type === "about" || type === "overview-section")
      return <About content={props.content} />;
    if (type === "accolades")
      return <Accolades content={content} media={media} />;
  };

  const sectionEntries = entries?.map((entry) => {
    return (
      <InView threshold={0} rootMargin={"-100px 0px -80% 0px"} key={entry.id}>
        {({ ref, inView }) => (
          <article
            id={entry.id}
            key={entry.id}
            ref={ref}
            className={`section-entry ${type} ${inView ? "active" : "inactive"}`}
          >
            {entryTemplate(entry)}
          </article>
        )}
      </InView>
    );
  });

  return <>{sectionEntries}</>;
}
