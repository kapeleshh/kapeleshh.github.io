import React, {useContext} from "react";
import "./WorkExperience.scss";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (!workExperiences.display) return null;

  return (
    <div id="experience">
      <Fade bottom duration={1000} distance="20px">
        <div className="experience-container" id="workExperience">
          <h1 className="experience-heading">Professional Experience</h1>
          <div className="experience-timeline">
            {workExperiences.experience.map((card, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-dot"></div>
                <div
                  className={
                    isDark
                      ? "timeline-card timeline-card-dark"
                      : "timeline-card"
                  }
                >
                  <div className="timeline-card-header">
                    <img
                      className="timeline-company-logo"
                      src={card.companylogo}
                      alt={card.company}
                    />
                    <div className="timeline-meta">
                      <h3
                        className={
                          isDark ? "timeline-role dark-mode-text" : "timeline-role"
                        }
                      >
                        {card.role}
                      </h3>
                      <p
                        className={
                          isDark
                            ? "timeline-company dark-mode-text"
                            : "timeline-company"
                        }
                      >
                        {card.company}
                      </p>
                      <span
                        className={
                          isDark ? "timeline-date dark-mode-text" : "timeline-date"
                        }
                      >
                        {card.date}
                      </span>
                    </div>
                  </div>
                  {card.desc && (
                    <p
                      className={
                        isDark
                          ? "timeline-desc dark-mode-text"
                          : "timeline-desc"
                      }
                    >
                      {card.desc}
                    </p>
                  )}
                  {card.descBullets && card.descBullets.length > 0 && (
                    <ul className="timeline-bullets">
                      {card.descBullets.map((bullet, j) => (
                        <li
                          key={j}
                          className={
                            isDark ? "dark-mode-text" : ""
                          }
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}
