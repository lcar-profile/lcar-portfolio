import { ReactNode } from "react";
import { Framework, Language } from "../types/tags";

export interface ProjectProps {
  title: string;
  subtitle: string;
  tags: (Language | Framework | string)[];
  image?: string;
  path: string;
  github?: string;
  live?: string;
  body: ReactNode;
}

export const allProjects: ProjectProps[] = [
  {
    title: "Reversi Game",
    tags: [Language.TS, Framework.REACT, Language.HTML, Language.CSS],
    subtitle: "A web-based implementation of the popular Reversi board game",
    image: "/images/reversi_thumbnail.jpg",
    path: "/projects/reversi",
    github: "https://github.com/lcar-showcase/lcar-rg",
    live: "http://lcar-showcase.github.io/lcar-rg/",
    body: (
      <>
        <p>
          This Reversi game features a single-player mode, where users play
          against a computer opponent. It previously supported loading saved
          games, but this feature is temporarily disabled.
        </p>
        <p>
          This project was developed during my previous internship as part of an
          onboarding module, with guidance from an experienced front-end
          developer, to prepare me for internal company work.
        </p>
        <div>
          <p>
            The main goal of the project was to improve my front-end web
            development skills by working with languages, frameworks, and tools
            like TypeScript, React, and Node Package Manager (npm). I also
            learned important front-end development concepts such as:
          </p>
          <ul className="list-disc pl-5">
            <li>State management</li>
            <li>Client-side routing</li>
            <li>Forms and input validation</li>
            <li>Working with REST APIs</li>
            <li>Implementing designs from high-fidelity prototypes</li>
          </ul>
        </div>
        <p>
          User experience played an important role in driving the design
          decisions of this project. Features such as turn indicators and valid
          move highlights were added to make gameplay more intuitive than the
          physical board game - helping users easily keep track of the game
          state. Some accessibility concerns like responsive layouts and screen
          reader support were also implemented, according to the Web Content
          Accessibility Guidelines (WCAG).
        </p>
      </>
    ),
  },
  {
    title: "NewsPortal",
    tags: [Language.JS, Language.HTML, Language.CSS, Framework.NODE],
    subtitle: "A web application that aggregates news articles",
    image: "/images/newsportal_thumbnail.jpg",
    path: "/projects/newsportal",
    github: "https://github.com/carsnl/NewsPortal",
    body: (
      <>
        <p>
          NewsPortal is a web application that aggregates online news articles
          from a variety of reputable sources and displays them all in a single
          infinite scrolling page. Users can click on any article to read more,
          which redirects them to the original publisher&apos;s domain. Searches
          can be customised by with specific keywords and filters.
        </p>
        <p>
          At the time this project began, most of my university courses used
          Python. This was a personal project, which served as an introduction
          to the fundamentals of web development, allowing me to use JavaScript,
          HTML and CSS to build proper user interfaces, rather than relying on
          Python and Java libraries.
        </p>
        <p>
          A simple Node.js back-end was later added to prevent exposing an API
          key in the code repository and client-side script. All requests to the
          external endpoint were subsequently handled by the backend for added
          security.
        </p>
      </>
    ),
  },
  {
    title: "E-Wallet Prototype",
    tags: [Language.DART, Framework.FLUTTER],
    subtitle: "A cross-platform e-wallet mobile app for toll payments",
    image: "/images/ewallet_thumbnail.jpg",
    path: "/projects/ewallet",
    body: (
      <>
        <p>
          This was my final-year university project, where I was part of a team
          that collaborated with an industry client to develop a
          proof-of-concept e-wallet used for multi-lane free flow (MLFF) toll
          payments. As part of the front-end team, I designed a survey to
          identify weaknesses of existing e-wallet UIs, and used the feedback
          from over 200 respondents to guide design of our prototype.
        </p>
        <p>
          I implemented a collection of custom and reusable widgets (e.g.,
          dialogs, modals, and buttons) to standardise the UI across the team,
          following Material Design principles.
        </p>
        <div>
          <p>
            I also contributed to the UI for several key pages, with
            functionality fully integrated with the back-end via HTTP requests:
          </p>
          <ul className="list-disc pl-5">
            <li>
              <b>Home page:</b> displays wallet balance and provides quick
              access to other features.
            </li>
            <li>
              <b>Profile page:</b> displays personalised user information, with
              the option to edit this information
            </li>
            <li>
              <b>Toll payment page:</b> allows users to select and pay pending
              toll payments.
            </li>
            <li>
              <b>Road hazards page:</b> includes an interactive map that
              displays real-time user location, active road hazards, and nearby
              points of interest, integrated with the Google Maps API.
            </li>
          </ul>
        </div>
        <div>
          <p>
            Several non-functional requirements were also implemented to ensure
            robustness:
          </p>
          <ul className="list-disc pl-5">
            <li>Client-side form validation</li>
            <li>Secure handling of secrets</li>
            <li>Graceful error handling for failed API requests</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: "Nutrition Assistant",
    tags: [Language.KOTLIN, Framework.COMPOSE],
    subtitle: "An Android app for personalised dietary guidance",
    image: "/images/nutricoach_thumbnail.jpg",
    path: "/projects/nutrition-assistant",
    github: "https://github.com/carsnl/NutritionAssistant",
    body: (
      <>
        <p>
          This project is an Android app developed using Kotlin and Jetpack
          Compose for a university course. It provides personalised guidance
          through AI-generated motivational messages and tips based on dietary
          habits provided by the user. Tips are stored for future reference, and
          users can update their dietary habits to track changes in their diet.
        </p>
        <div>
          <p>
            This project was a way for me to gain practical experience in native
            Android development, while applying best practices:
          </p>
          <ul className="list-disc pl-5">
            <li>Implements the Model-View-ViewModel (MVVM) architecture</li>
            <li>
              Uses a Room database for local storage, with an additional
              Repository layer to abstract data sources in the Model
            </li>
            <li>Uses StateFlow for reactive UI</li>
            <li>Uses coroutines and dispatchers for non-blocking UI</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: "Pokemon Roguelike",
    tags: [Language.JAVA],
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "/images/pokemon_thumbnail.jpg",
    path: "/projects/pokemon-roguelike",
    github: "https://github.com/carsnl/RoguelikePokemon",
    body: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <ul className="list-disc pl-5">
          <li>Ut enim ad minim veniam</li>
          <li>quis nostrud exercitation ullamco laboris</li>
          <li>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur
          </li>
        </ul>
        <p>Excepteur sint occaecat cupidatat non proident.</p>
      </>
    ),
  },
];
