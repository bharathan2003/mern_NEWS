import React from "react";

export default function About() {
  document.title = "About - NewsBuzz";
  return (
    <>
      <div className="text-center">
        <div className="container">
          <div className="container mt-4 mb-5">
            <h1 className="display-5">About Us</h1>
            <p className="h5">
              Welcome to NewsBuzz, your go-to destination for captivating
              headlines spanning all categories.
            </p>
          </div>

          <div className="container mb-5">
            <h2 className="display-5">Our Mission</h2>
            <p className="h5">
              Our mission at NewsBuzz is to provide users with easy access to
              headlines across various categories, empowering them to stay
              informed about current events and trends.
            </p>
          </div>

          <div className="container mb-5">
            <h2 className="display-5 mb-3">What We Offer</h2>
            <h3 className="display-6">Comprehensive Headline Coverage</h3>
            <p className="h5">
              NewsBuzz offers a wide range of headline coverage, including news
              from general, business, entertainment, health, science, and
              technology categories.
            </p>
          </div>

          <div className="container mb-5">
            <h2 className="display-6">Get Started</h2>
            <p className="h5">
              Ready to explore the latest headlines? Simply navigate to the
              desired category using the navigation bar at the top of the page
              and start browsing!
            </p>
          </div>

          <div className="container">
            <p className="h5">
              Thank you for choosing NewsBuzz for your headline needs. We're
              committed to providing you with timely and relevant news updates
              to keep you informed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
