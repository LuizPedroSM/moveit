import CompleteChallenges from "../components/CompleteChallenger";
import Countdown from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import Profile from "../components/Profile";

import styles from "../styles/pages/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompleteChallenges/>
          <Countdown/>
        </div>
        <div>
        </div>
      </section>
    </div>
  );
}