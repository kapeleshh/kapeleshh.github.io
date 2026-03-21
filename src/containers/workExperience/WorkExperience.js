import React, {useContext, useState} from "react";
import "./WorkExperience.scss";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const [expanded, setExpanded] = useState({});

  if (!workExperiences.display) return null;

  const toggle = i => setExpanded(prev => ({...prev, [i]: !prev[i]}));

  return (
    <div id="experience">
      <Fade bottom duration={1000} distance="20px">
        <div className="experience-container" id="workExperience">
          <h1
            className={
              isDark
                ? "experience-heading dark-mode-text"
                : "experience-heading"
            }
          >
            Professional Experience
          </h1>

          <div className="experience-timeline">
            {workExperiences.experience.map((card, i) => (
              <div className="tl-item" key={i}>
                {/* Left gutter: year + dot */}
                <div className="tl-left">
                  <span
                    className={isDark ? "tl-year dark-mode-text" : "tl-year"}
                  >
                    {(card.date.match(/\d{4}/) || [""])[0]}
                  </span>
                  <div className="tl-dot" />
                </div>

                {/* Card */}
                <div className={isDark ? "tl-card tl-card-dark" : "tl-card"}>
                  {/* Header row */}
                  <div className="tl-header">
                    <img
                      className="tl-logo"
                      src={card.companylogo}
                      alt={card.company}
                    />
                    <div className="tl-meta">
                      <h3
                        className={
                          isDark ? "tl-role dark-mode-text" : "tl-role"
                        }
                      >
                        {card.role}
                      </h3>
                      <p className="tl-company">{card.company}</p>
                      <span
                        className={
                          isDark ? "tl-date dark-mode-text" : "tl-date"
                        }
                      >
                        📅 {card.date}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  {card.desc && (
                    <p
                      className={isDark ? "tl-desc dark-mode-text" : "tl-desc"}
                    >
                      {card.desc}
                    </p>
                  )}

                  {/* Bullets — collapsible */}
                  {card.descBullets && card.descBullets.length > 0 && (
                    <div className="tl-bullets-section">
                      <button
                        className={
                          isDark ? "tl-toggle dark-mode-text" : "tl-toggle"
                        }
                        onClick={() => toggle(i)}
                        aria-expanded={!!expanded[i]}
                      >
                        {expanded[i] ? "▲ Hide details" : "▼ Show details"}
                      </button>
                      {expanded[i] && (
                        <ul className="tl-bullets">
                          {card.descBullets.map((bullet, j) => (
                            <li
                              key={j}
                              className={isDark ? "dark-mode-text" : ""}
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
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
