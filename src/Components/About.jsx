/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/img3.jpg";

const imageAltText = "ML Engineer";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "As a computer scientist, I am driven by the belief that technology has the power to change the world for the better. With a passion for innovation and a deep understanding of complex systems, I have dedicated my career to pushing the boundaries of what's possible. Whether I'm developing cutting-edge software or exploring the frontiers of artificial intelligence, I am always striving to make a meaningful impact through my work.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "ML Engineer",
  "AI Enthusiast",
  "NLP & CV",
  "Web developer",
  "Django Developer",
  "UI UX",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "As a computer scientist, I am driven by the belief that technology has the power to change the world for the better. With a passion for innovation and a deep understanding of complex systems, I have dedicated my career to pushing the boundaries of what's possible. Whether I'm developing cutting-edge software or exploring the frontiers of artificial intelligence, I am always striving to make a meaningful impact through my work.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
