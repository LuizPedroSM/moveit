import ChallengeBox from "../components/ChallengeBox";
import CompleteChallenges from "../components/CompleteChallenger";
import Countdown from "../components/Countdown";
import Profile from "../components/Profile";
import { ExperienceBar } from "../components/ExperienceBar";

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
          <ChallengeBox/>
        </div>
      </section>
    </div>
  );
}
