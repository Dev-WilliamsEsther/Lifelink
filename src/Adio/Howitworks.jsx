import React from "react";
import "./styles/howitworks.css";

const Howitworks = () => {
  return (
    <>
      <div>
        <section class="lifelink-Howitworks-first-section">
          <div class="lifelink-text">
            <h2>Saving Lives, Made <br /> Simple</h2>
            <p>
              Whether you’re a donor looking to make a <br />
              difference or a hospital in need of life-saving <br />
              blood, LifeLink streamlines the process for you. <br />
              Donors can easily find a donation center, give <br />
              blood, and track their impact. Hospitals and <br />
              blood banks can connect with verified donors to <br />
              ensure a steady, reliable supply. Here’s how it <br />
              works:
            </p>
          </div>
          <div class="lifelink-images">
            <img
              src="/public/howitworksHeroImage.png"
              alt="Patient in hospital bed"
              class="img-back"
            />
            <img src="/public/howitworksHeroImage2.png" alt="Blood donation" class="img-front" />
          </div>
        </section>


        <section class="hospital-steps">
          <h2 class="section-title">HOW IT WORKS FOR DONORS</h2>

          <div class="steps-container">
            <div class="step-box step-1">
              <div class="icon"><img src="/public/cryptocurrency-color_gold.png"/></div>
              <h3>Find a Donation <br /> Center</h3>
              <p>Locate a nearby verified hospital or blood bank using LifeLink</p>
            </div>

            <div class="step-box step-2">
              <div class="icon"><img src="/public/cryptocurrency-color_gold.png"/></div>
              <h3>Donate Blood</h3>
              <p>Visit the center provide your unique code, & give blood safely.</p>
            </div>

            <div class="step-box step-3">
              <div class="icon"><img src="/public/cryptocurrency-color_gold.png"/></div>
              <h3>Track Your Impact</h3>
              <p>Get updates on your donation history & see how many lives you’ve helped saved.</p>
            </div>

            <div class="step-box step-4">
              <div class="icon"><img src="/public/cryptocurrency-color_gold.png"/></div>
              <h3>Enjoy Donor Benefits</h3>
              <p>Receive incentives like free health checkups & wellness perks as a token of appriciation.</p>
            </div>
          </div>

          <button class="cta-btn">Donate</button>
        </section>


        <section class="hospital-steps">
          <h2 class="section-title">How It Works For Hospital & Blood Banks</h2>

          <div class="steps-container">
            <div class="step-box step-1">
              <div class="icon"><img src="/public/cryptocurrency-color_gold.png"/></div>
              <h3>Register &<br />Get Verified</h3>
              <p>Sign up on LifeLink & get verified as a trusted hospital or blood bank.</p>
            </div>

            <div class="step-box step-2">
              <div class="icon"><img src="/public/cryptocurrency-color_gold.png"/></div>
              <h3>Update Blood<br />Availability</h3>
              <p>Keep donors and patients informed by updating your blood supply in real time.</p>
            </div>

            <div class="step-box step-3">
              <div class="icon"><img src="/public/cryptocurrency-color_gold.png"/></div>
              <h3>Receive Donors</h3>
              <p>Accept donors who visit with their unique LifeLink codes & confirm their donations.</p>
            </div>

            <div class="step-box step-4">
              <div class="icon"><img src="/public/cryptocurrency-color_gold.png"/></div>
              <h3>Save More Lives</h3>
              <p>Easily connect with donors & ensure a steady supply of safe & reliable blood.</p>
            </div>
          </div>

          <button class="cta-btn">Get Listed</button>
        </section>

        <section class="why-it-matters">
          <h2 class="section-title">WHY IT MATTERS</h2>

          <div class="cards">
            <div class="card card-1"></div>

            <div class="card card-2"></div>

            <div class="card card-3"></div>
          </div>
        </section>



      </div>
    </>
  );
};

export default Howitworks;
