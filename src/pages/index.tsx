import Head from "next/head";
import { GetServerSideProps } from "next";

import styles from "../styles/pages/Home.module.css";

import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

import ChallengeBox from "../components/ChallengeBox";
import CompleteChallenges from "../components/CompleteChallenger";
import Countdown from "../components/Countdown";
import Profile from "../components/Profile";
import { ExperienceBar } from "../components/ExperienceBar";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}
export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Head>
        <title>React NLW4 MoveIt</title>
        <meta name="title" content="React NLW4 MoveIt" key="title" />
        <meta name="description" content="Aplicação feita em Next.js no NLW4. O MoveIt visa ajudar os usuários a exercitar-se após o cronômetro de 25 min. O app usa Gamificação criando desafios para adquirir experiência e subir de nível." key="description" />

        <meta property="og:type" content="website" key="ogType" />
        <meta property="og:url" content="https://moveit-next-luizpedrosm.vercel.app/" key="ogUrl" />
        <meta property="og:title" content="React NLW4 MoveIt" key="ogTitle" />
        <meta property="og:description" content="Aplicação feita em Next.js no NLW4. O MoveIt visa ajudar os usuários a exercitar-se após o cronômetro de 25 min. O app usa Gamificação criando desafios para adquirir experiência e subir de nível." key="ogDescription" />
        <meta property="og:image" content="logo-full.svg" key="ogImage" />

        <meta property="twitter:card" content="summary_large_image" key="twitterCard" />
        <meta property="twitter:url" content="https://moveit-next-luizpedrosm.vercel.app/" key="twitterUrl" />
        <meta property="twitter:title" content="React NLW4 MoveIt" key="twitterTitle" />
        <meta property="twitter:description" content="Aplicação feita em Next.js no NLW4. O MoveIt visa ajudar os usuários a exercitar-se após o cronômetro de 25 min. O app usa Gamificação criando desafios para adquirir experiência e subir de nível." key="twitterDescription" />
        <meta property="twitter:image" content="logo-full.svg" key="twitterImage" />
      </Head>

      <div className={styles.container}>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompleteChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  };
};
