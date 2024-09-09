import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <>
        <div id="about">
          <div className="bottomline about-div">
            <h1 style={{ marginBottom: "15px" }}>
              Explore What Aconews Is All About
            </h1>
            <p>
              Aconews is an open-source news platform crafted with React and
              powered by the{" "}
              <a
                href="https://gnews.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                GNewsAPI
              </a>
              . Our mission is to bring you the freshest and most accurate news,
              offering a smooth and intuitive experience for keeping up with
              global events.
            </p>
          </div>

          <div className="features bottomline about-div">
            <h1>Top Features You'll Love:</h1>
            <div>
              <h3>Live News Updates:</h3> Stay informed with real-time news from
              a diverse array of reliable sources, thanks to our seamless
              integration with leading news APIs.
            </div>
            <div>
              <h3>Personalized News Feed:</h3> Customize your news experience by
              choosing from a variety of categories, so you get the news that
              matters most to you.
            </div>
            <div>
              <h3>Powerful Search:</h3> Quickly locate articles, topics, or
              keywords with our intuitive search feature, designed to help you
              find exactly what you're looking for.
            </div>
            <div>
              <h3>Adaptive Design:</h3> Enjoy a smooth and accessible news
              experience across all your devices, including desktops, tablets,
              and smartphones, with our responsive design.
            </div>
          </div>

          <h3>
            Aconews is dedicated to maintaining the highest levels of precision,
            neutrality, and variety in our news reporting. We strive to offer a
            comprehensive view of news stories and guarantee that our users
            receive credible and top-quality content. Our team is constantly
            innovating and improving our web app to adapt to the dynamic needs
            of our users.
          </h3>

          <h3 className="bottomline">
            We highly value community involvement and collaboration. Aconews is
            an open-source initiative, and we extend our gratitude to Acowale
            for this opportunity. If you have any suggestions or feedback for
            enhancements, please feel free to visit our{" "}
            <a
              href="https://github.com/Anshu331"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
            </a>
            .
          </h3>

          <h4 className="thank-you">
            <span className="thank-you-symbol">⭐</span>
            Thank you for your visit. We hope you had a great experience with
            us.
            <span className="thank-you-symbol">⭐</span>
          </h4>
        </div>
      </>
    );
  }
}
