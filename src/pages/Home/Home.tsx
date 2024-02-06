import reactImage from "../../images/react.png";

import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>Hello, Styled React 2024-02!</h1>
      <h2>ENV test: {process.env.TEST}</h2>
      <img src={reactImage} alt="test" />
    </div>
  );
};

export default Home;
