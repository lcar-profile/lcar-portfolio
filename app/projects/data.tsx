import { ProjectProps, Framework, Language, ProjectParams } from "../types";

export const allProjects: ProjectProps[] = [
  {
    title: "Reversi Game",
    tags: [Language.TS, Framework.REACT, Language.HTML, Language.CSS],
    subtitle: "A web application replicating the popular Reversi board game",
    image: "/images/reversi_thumbnail.jpg",
    path: ProjectParams.REVERSI,
    github: "https://github.com/lcar-showcase/lcar-rg",
    live: "http://lcar-showcase.github.io/lcar-rg/",
    body: (
      <>
        <p>
          This game features a single-player mode, where users play against a
          computer opponent. It implements all game rules defined by the{" "}
          <a
            href="https://www.worldothello.org/about/about-othello/othello-rules/official-rules/english"
            className="text-hyperlink"
          >
            World Othello Federation
          </a>
          . It previously supported loading saved games, but this feature is
          temporarily disabled.
        </p>
        <div>
          <p>
            This project incorporates important front-end development concepts,
            such as:
          </p>
          <ul className="list-disc pl-5 ml-2 mt-2">
            <li>State management</li>
            <li>Client-side routing</li>
            <li>Forms and input validation</li>
            <li>Asynchronous requests</li>
            <li>Implementing designs from high-fidelity prototypes</li>
          </ul>
        </div>
        <p>
          User experience played an important role in driving the design
          decisions of this project. Features such as turn indicators and valid
          move highlights were added to make gameplay more intuitive than the
          physical board game - helping users easily keep track of the game
          state.
        </p>
      </>
    ),
  },
  {
    title: "NewsPortal",
    tags: [Language.JS, Language.HTML, Language.CSS, Framework.NODE],
    subtitle: "A web application that aggregates news articles",
    image: "/images/newsportal_thumbnail.jpg",
    path: ProjectParams.NEWSPORTAL,
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
          Most of my university courses used Python. This was a personal
          project, which served as an introduction to the fundamentals of web
          development, allowing me to use JavaScript, HTML and CSS to build
          proper user interfaces, rather than relying on Python and Java
          libraries.
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
    path: ProjectParams.EWALLET,
    body: (
      <>
        <p>
          This prototype was developed as part of my final year university
          project, where I worked in a team that collaborated with an industry
          client to develop a proof-of-concept e-wallet used for multi-lane free
          flow (MLFF) toll payments. As part of the front-end team, I designed a
          survey to identify weaknesses of existing e-wallet UIs, and used the
          feedback from over 200 respondents to guide the design of our
          prototype.
        </p>
        <p>
          I implemented a collection of custom and reusable widgets (e.g.,
          dialogs, modals, and buttons) to standardise the UI across the team.
        </p>
        <div>
          <p>
            I also contributed to the UI and back-end integration for several
            key pages:
          </p>
          <ul className="list-disc pl-5 ml-2 mt-2">
            <li>
              The <b>home page</b> that displays wallet balance and provides
              quick access to other features.
            </li>
            <li>
              The <b>profile page</b> that displays personalised user
              information, and allows users to edit their information.
            </li>
            <li>
              The <b>toll payment page</b> that allows users to select and pay
              pending toll payments.
            </li>
            <li>
              The <b>road hazards page</b> that includes an interactive map that
              displays real-time user location, active road hazards, and nearby
              points of interest, integrated with the Google Maps API.
            </li>
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
    path: ProjectParams.NUTRITION,
    github: "https://github.com/carsnl/NutritionAssistant",
    body: (
      <>
        <p>
          This Android app was created as part of a university course about
          native Android development. It provides personalised guidance through
          AI-generated motivational messages and tips based on dietary habits
          provided by the user. Tips are stored for future reference, and users
          can update their dietary habits to track changes in their diet.
        </p>
        <div>
          <p>This project incorporates:</p>
          <ul className="list-disc pl-5 ml-2 mt-2">
            <li>The Model-View-ViewModel (MVVM) architecture</li>
            <li>
              The Room database for local storage, with an additional Repository
              layer to abstract data sources in the Model
            </li>
            <li>StateFlow for reactive UI</li>
            <li>Coroutines and dispatchers for non-blocking UI</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: "Pokémon Roguelike",
    tags: [Language.JAVA],
    subtitle: "A Pokémon-inspired game played on the terminal",
    image: "/images/pokemon_thumbnail.jpg",
    path: ProjectParams.POKEMON,
    github: "https://github.com/carsnl/RoguelikePokemon",
    body: (
      <>
        <p>
          This project was developed as part of an introductory university
          course on object-oriented programming. I extended a given game engine
          and added new features to the game, implementing key Pokémon game
          mechanics, such as world exploration, game events, Pokémon encounters,
          interaction and evolution.
        </p>
        <p>
          The project started with the design phase, creating Unified Modelling
          Language (UML) class and sequence diagrams, then translating these
          technical requirements to code.
        </p>
        <div>
          <p>The design was later refined by:</p>
          <ul className="list-disc pl-5 ml-2 mt-2">
            <li>Identifying and addressing code smells</li>
            <li>Applying the SOLID principles</li>
            <li>
              Incorporating design patterns such as Singleton and Observer
            </li>
          </ul>
        </div>
      </>
    ),
  },
];
