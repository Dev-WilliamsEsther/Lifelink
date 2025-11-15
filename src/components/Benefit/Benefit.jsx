import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import "../Benefit/Benefit.css";
// import Sponsors from "../Sponsors/Sponsors";

const Benefit = () => {
  const nav = useNavigate();

  // Variants for reusability
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const card = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <>
      <motion.div
        className="landingpagebenefits"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          KEY BENEFITS FOR DONORS
        </motion.h1>

        <motion.div
          className="landingbenefitsinner"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="landingbenefitsinner1" variants={fadeUp}>
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Saves lives while<br /> gaining valuable<br /> benefits.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              When you donate blood, you’re not just <br /> saving lives you’re
              also gaining valuable <br /> benefits. Make an impact while taking
              care <br /> of your own well-being.
            </motion.p>
            <motion.button
              className="benefitsbtn"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(255,0,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => nav("/dashboard")}
            >
              Donate
            </motion.button>
          </motion.div>

          <motion.div
            className="landingbenefitsinner2"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Free basic health checkups (e.g blood pressure, general wellness)",
              "Promotes a healthier heart and helps prevent certain cancers.",
              "Enhanced mental well-being",
              "Provision of valuable information about your health."
            ].map((text, index) => (
              <motion.div
                className="landingincentives"
                key={index}
                variants={card}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 6px 15px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="incentiveheader">
                  <img src="images/Group.png" alt="benefit-icon" />
                </div>
                <h2>{text}</h2>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      {/* <Sponsors /> */}
    </>
  );
};

export default Benefit;
