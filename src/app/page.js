"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// import pain from "../asset/image/Pains.jpg";
// import { FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import {
  FaHtml5,
  FaGithub,
  FaCss3Alt,
  FaBars,
  FaReact,
  FaBootstrap,
  FaPython,
  FaNodeJs,
  FaDochub,
  FaTimes,
  FaCss3,
  FaJava,
  FaJs,
  FaCode,
  FaDatabase,
} from "react-icons/fa";
import React, { useState } from "react";
// import {}  from &#39;re&#39;
import Link from "next/link";

const transition = { type: "spring", duration: 2 };
const transitionProjet = { type: "spring", duration: 5 };
export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-20 md:gap-10 bg-gray-900">
        <div id="acceuil">
          <Hero />
        </div>
        <div id="profil">
          <Profil />
        </div>
        <div id="competence">
          <Competences />
        </div>
        <div id="eventment">
          <TimeLineEvent />
        </div>
        <div id="projet">
          <Projet />
        </div>
        <div id="contact">
          <ContactMe />
        </div>
        {/* <Hero /> */}
      </div>
    </>
  );
}

const Hero = () => {
  return (
    <div className="relative h-screen bg-[url('/images/bg2.jpg')] bg-cover bg-center">
      <NavBar />

      <div className="max-w-7xl mx-auto relative flex items-center justify-center h-full">
        <div className="relative py-16 flex justify-center px-4 sm:px-0">
          <div className="max-w-3xl text-center">
            <div className="pb-4">
              <span className="inline-flex items-center rounded-2xl bg-gray-100 px-4 py-1.5 text-xs sm:text-sm font-serif font-medium text-white-700">
                Hello world!
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-white xl:text-6xl font-serif !leading-tight">
              {/* <AnimatedBonjour /> */}
              Bonjour
            </h1>
            <p
              className="mt-4 text-lg sm:text-xl leading-8 text-white sm:px-16"
              style={{ whiteSpace: " pre-line" }}
            >
              Bienvenu sur mon portfolio
            </p>
            <div className="mt-8 flex w-full space-x-8 justify-center">
              <a href="#profil">
                <button className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent disabled:bg-gray-400 appearance-none text-white bg-gray-600 hover:bg-gray-700 hover:text-gray-200 focus:ring-gray-500 focus:ring-offset-white !px-12 !shadow-lg !rounded-full !text-base">
                  <p>Plus d&#39;info</p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const tooglMenuu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className=" fixed w-full mx-auto max-w-screen-xl px-6 lg:px-8 z-50  tpp-0 left-0 bg-transparent">
        <nav className="flex max-w-7x1 mx-auto flex-wrap items-center justify-between p-3 bg-gray-200/20 ">
          <Image
            src={"/images/self.png"}
            className="h-26 w-16 rounded-full"
            alt=""
            width={2000}
            height={2000}
          />
          {/* menu */}
          <div className="flex md:hidden">
            <button id="hamburger" onClick={tooglMenuu}>
              {!menuOpen ? (
                <FaBars className="text-black " size={30} />
              ) : (
                <FaTimes className="text-black " size={30} />
              )}
            </button>
          </div>
          {
            <ul
              className={`${menuOpen ? "" : "hidden"}

            w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-teal-900 md:border-none`}
            >
              <li>
                <Link
                  href="#"
                  className="block md:inline-block text-gray-100 hover:text-gray-200 px-3 py-3 border-b-2 border-white md:border-none"
                >
                  Acceuil
                </Link>
              </li>
              <li>
                <Link
                  href="#profil"
                  className="block md:inline-block text-gray-100 hover:text-gray-200 px-3 py-3 border-b-2 border-white md:border-none"
                >
                  Profil
                </Link>
              </li>
              <li>
                <Link
                  href="#competence"
                  className="block md:inline-block text-gray-100 hover:text-gray-200 px-3 py-3 border-b-2 border-white md:border-none"
                >
                  Competences
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block md:inline-block text-gray-100 hover:text-gray-200 px-3 py-3 border-b-2 border-white md:border-none"
                >
                  Contact
                </Link>
              </li>
            </ul>
          }
        </nav>
      </div>
    </>
  );
};

const Profil = () => {
  return (
    <div className="w-full h-full bg-gray-900 dark:bg-gray-900">
      <div className="flex min-h-screen  flex-col items-center justify-center overflow-hidden gap-4">
        <div className="items-center  justify-center">
          <h1 className="text-4xl sm:text-5xl  text-gray-400 xl:text-6xl font-serif !leading-tight">
            &Agrave; propos de moi
          </h1>
        </div>

        <div className="w-full mx-auto py-10 bg: xl:px-16 xs:px-8  md:items-center md:justify-center flex flex-col md:flex-row gap-1 justify-center items-center pt-2 p-10">
          <div className="w-full md:w-1/2 p-16 ">
            <Image
              className="rounded-full w-full md:w-3/4 h-auto mx-auto"
              src={"/images/self.png"}
              alt=""
              width={2000}
              height={2000}
            />
          </div>
          <div className="w-full flex flex-col items-center md:items-center justify-center gap-4 text-white dark:text-gray-400 md:items-center md:justify-center md:mt-0 sm:mt-8 xs:mt-4">
            {/* <h1 className="text-4xl font-semibold font-serif">
              Laissez moi me presenter
            </h1> */}
            <p>
              Mon nom complet est RAKOTO Dieu Donn&eacute; Manjaka Hasina,
              J&#39;ai 20 ans et actuellement en troisi&egrave;me ann&eacute;e
              de licence &agrave; l&#39;&Eacute;cole Nationale
              d&#39;Informatique &agrave; Fianarantsoa dans la branche
              G&eacute;nie Logiciel et de base de donn&eacute;. J&#39;habite
              actuellement &agrave; Manaotsara Fianarantsoa Lot 251 bis / 3304.
            </p>
            <p>
              Je me specialise principallement aux langages de programmation
              JavaScript et Python ainsi que leur framework pour le
              d&eacute;veloppement des application ou sites web. J&#39;utilise
              les langages JAVA, C# et C++ pour creer les applications de bureau
              (Desktop). Et enfin j&#39;utilise le langage python pour ce qui
              est dans le domaine de l&#39;intelligence artificielle. En ce qui
              concerne les base de donn&eacute; j&#39;utilise Postgresql et
              Mysql.
            </p>
            <p></p>

            <div className="sm:mt-4 xs:mt-2">
              <a href="#CV" download={"CV de Manjaka Hasina.png"}>
                <button className="px-6 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 ">
                  Voir mon CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Competences = () => {
  return (
    <div className="min-h-screen w-full  flex flex-col  justify-center items-center gap-4 bg-gray-900">
      <div>
        <h1 className="text-4xl sm:text-5xl  text-white xl:text-6xl font-serif !leading-tight">
          Comp&eacute;tences
        </h1>
      </div>
      <div className=" w-full mx-auto  bg: xl:px-16 xs:px-8 flex flex-col md:flex-row gap-4 justify-center items-center">
        {/* skills */}

        <Skills />
        {/* cv */}
        <CV />
      </div>
    </div>
  );
};

const CV = () => {
  return (
    <div
      className="w-full max-w-lg p-4  flex justify-center items-center flex-col "
      id="CV"
    >
      <h2 className="text-2x1 font-bold mb-4 text-gray-400">Voici mon CV</h2>

      {/* <div className="w-full h-full md:w-1/2 p-4 "> */}
      <Image
        className="w-full h-auto rounded"
        src={"/images/CV.png"}
        width={2000}
        height={2000}
        alt=""
      />
      {/* </div> */}
    </div>
  );
};
const Skills = () => {
  const webDev = [
    {
      icon: <FaHtml5 className="text-orange-600" size={20} />,
      name: "HTML ",
      level: 80,
    },
    {
      icon: <FaCss3 className="text-blue-400" size={20} />,
      name: "CSS",
      level: 60,
    },
    {
      icon: <FaReact className="text-blue-400" size={20} />,
      name: "React Js",
      level: 75,
    },
    {
      icon: <FaJs className="text-black" size={20} />,
      name: "Next js",
      level: 70,
    },
    {
      icon: <FaReact className="text-blue-400" size={20} />,
      name: "React Native",
      level: 65,
    },
    {
      icon: (
        <Image src={"/images/icons/django.svg"} alt="" width={20} height={20} />
      ),
      name: "Django",
      level: 80,
    },
    {
      icon: (
        <Image
          src={"/images/icons/nodejs.svg"}
          className="text-orange-600"
          width={20}
          alt=""
          height={20}
        />
      ),
      name: "NodeJs ",
      level: 80,
    },
  ];
  const dev = [
    {
      icon: (
        <Image
          src={"/images/icons/java.svg"}
          className="text-orange-600"
          width={20}
          height={20}
          alt=""
        />
      ),

      name: "JAVA",
      level: 70,
    },
    {
      icon: <FaJs className="text-yellow-400" size={20} />,
      name: "JavaScript",
      level: 80,
    },
    {
      icon: (
        <Image
          src={"/images/icons/python.svg"}
          className="text-orange-600"
          width={20}
          alt=""
          height={20}
        />
      ),

      name: "Python",
      level: 70,
    },
    {
      icon: (
        <Image
          src={"/images/icons/cpp.svg"}
          className="text-orange-600"
          width={20}
          alt=""
          height={20}
        />
      ),

      name: "C++",
      level: 60,
    },
    {
      icon: (
        <Image
          src={"/images/icons/csharp.svg"}
          className="text-orange-600"
          width={20}
          alt=""
          height={20}
        />
      ),

      name: "C#",
      level: 70,
    },
  ];
  const bd = [
    {
      icon: (
        <Image
          src={"/images/icons/postgresql.svg"}
          className="text-orange-600"
          width={20}
          height={20}
          alt=""
        />
      ),

      name: "Postgresql",
      level: 70,
    },
    {
      icon: (
        <Image
          src={"/images/icons/mysql.svg"}
          className="text-orange-600"
          width={20}
          height={20}
          alt=""
        />
      ),

      name: "Mysql",
      level: 70,
    },
    // { name: "MongoDb", level: 50 },
  ];
  return (
    <div className="w-full max-w-lg p-4">
      <div className="pt-7">
        <h2 className="text-x1 font-bold mb-3 text-gray-400">
          Langage de programmation
        </h2>

        {dev.map((sl, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-400">
                <p className="flex-row flex gap-3">
                  {sl.icon}
                  {sl.name}
                </p>
              </span>
              <span className="text-sm font-medium text-gray-400">
                {sl.level}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${sl.level}%` }}
                transition={transition}
                className="bg-blue-600 h-2.5 rounded-full"
                // style={{ width: `${sl.level}%` }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2x1 font-bold mb-4 text-gray-400">
        {" "}
        Compet&eacute;nces web
      </h2>
      {/* <h3>D&eacute;veloppement web</h3> */}
      <div>
        {webDev.map((sl, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-400">
                <p className="flex-row flex gap-3">
                  {sl.icon}
                  {sl.name}
                </p>
              </span>
              <span className="text-sm font-medium text-gray-400">
                {sl.level}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${sl.level}%` }}
                transition={transition}
                className="bg-blue-600 h-2.5 rounded-full"
                // style={{ width: `${sl.level}%` }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-7">
        <h2 className="text-x1 font-bold mb-3 text-gray-400">
          Base de donn&eacute;s
        </h2>

        {bd.map((sl, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-400">
                <p className="flex-row flex gap-3">
                  {sl.icon}
                  {sl.name}
                </p>
              </span>
              <span className="text-sm font-medium text-gray-400">
                {sl.level}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${sl.level}%` }}
                transition={transition}
                className="bg-blue-600 h-2.5 rounded-full"
                // style={{ width: `${sl.level}%` }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Projet = () => {
  const allProject = [
    {
      image: "/images/projets/csharp.png",
      titre: <>D&eacute;veloppment desktop</>,
      description: (
        <>D&eacute;veloppment d&#39;un projet de gestion de stock avec C#</>
      ),
      techno: [{ nom: "C#", icon: <FaCode className="text-blue-400" /> }],
      gitlink: "https://www.github.repo/C#",
    },
    {
      image: "/images/projets/vftm1.png",
      titre: <>D&eacute;veloppment web</>,
      description: (
        <>
          D&eacute;veloppment d&#39;un projet de gestion de collecte de don avec
          Python Django, Css3, HTML, Bootsrap
        </>
      ),
      techno: [
        {
          nom: "HTML5",
          icon: <FaHtml5 className="text-orange-600" size={20} />,
        },
        {
          nom: "Django",
          icon: <FaPython className="text-yellow-400" size={20} />,
        },
        {
          nom: "Bootsrap",
          icon: <FaBootstrap className="text-purple-600" size={20} />,
        },
      ],
      gitlink: "https://www.github.repo/Django",
    },
    {
      image: "/images/projets/IHM.png",
      titre: <>D&eacute;veloppment web</>,
      description: (
        <>
          Conception , r&eacute;alisation d&#39;un projet de gestion
          d&#39;&eacute;tudiant en React Js, Node Js ,Html
        </>
      ),
      techno: [
        {
          nom: "Reactjs",
          icon: <FaReact className="text-blue-600" size={20} />,
        },
        {
          nom: "Nodejs",
          icon: <FaNodeJs className="text-green-600" size={20} />,
        },
        {
          nom: "Css3",
          icon: <FaCss3Alt className="text-blue-400" size={20} />,
        },
      ],
      gitlink: "https://www.github.repo/Django",
    },
    {
      image: "/images/projets/mobile1.jpg",
      titre: <>D&eacute;veloppment mobile</>,
      description: (
        <>
          D&eacute;veloppment d&#39;un projet mini reseau sociaux avec Django,
          React Native
        </>
      ),
      techno: [
        {
          nom: "ReactNative",
          icon: <FaReact className="text-blue-600" size={20} />,
        },
        {
          nom: "Django",
          icon: <FaPython className="text-yellow-400" size={20} />,
        },
        {
          nom: "Css3",
          icon: <FaCss3Alt className="text-blue-400" size={20} />,
        },
      ],
      gitlink: "https://www.github.repo/Django",
    },
    {
      image: "/images/projets/fitclub1.png",
      titre: <>D&eacute;veloppment web</>,
      description: (
        <>
          D&eacute;veloppment d&#39;un page web pour la pub d&#39;un salle de
          sport avec React et CSS
        </>
      ),
      techno: [
        {
          nom: "React",
          icon: <FaReact className="text-blue-600" size={20} />,
        },

        {
          nom: "Css",
          icon: <FaCss3Alt className="text-blue-400" size={20} />,
        },
      ],
      gitlink: "https://www.github.repo/Django",
    },
    {
      image: "/images/projets/QT.jpg",
      titre: <>D&eacute;veloppment desktop</>,
      description: (
        <>
          D&eacute;veloppment d&#39;un projet de gestion de vol d&#39;une
          compagnie a&eacute;rienne avec C++ et QT
        </>
      ),
      techno: [{ nom: "C++", icon: <FaCode className="text-blue-400" /> }],
      gitlink: "https://www.github.repo/C#",
    },

    {
      image: "/images/projets/CsharpL2.jpg",
      titre: <>D&eacute;veloppment desktop</>,
      description: (
        <>
          D&eacute;veloppment d&#39;un projet de stock d&#39;une entreprise avec
          C# et Visual Studio
        </>
      ),
      techno: [{ nom: "C++", icon: <FaCode className="text-blue-400" /> }],
      gitlink: "https://www.github.repo/C#",
    },
  ];
  return (
    <div className="items-center md:p-4  justify-center flex flex-wrap gap-10">
      {/* <hr className="w-full h-1 bg-gray-900" /> */}
      <div className="items-center   justify-center">
        <h1 className="text-3xl sm:text-5xl text-gray-200 xl:text-6xl font-serif !leading-tight">
          Projets d&eacute;j&agrave; accompli
        </h1>
      </div>
      <div className="flex  gap-8 justify-center flex-wrap">
        {/* debut */}
        {allProject.map((p, index) => (
          <div
            key={index}
            className="w-3/4 md:w-72 flex flex-col items-center justify-between bg-gray-800  rounded-lg overflow-hidden shadow-lg  transform transition-all duration-300 backdrop-filter backdrop-blur-sm hover:translate-y-[-10px] hover:rotate-3d hover:shadow-2xl  border border-gray-400 "
          >
            <Image
              src={p.image}
              alt=""
              className="object-cover w-full h-48 filter brightnss-90 saturate-120"
              width={300}
              height={200}
            />
            <div className="p-5">
              <h2 className="text-xl font-bold  mb-2 text-white">{p.titre}</h2>
              <p className="text-sm text-white mb-3">{p.description}</p>
              <div className="flex flex-wrap gap-3 mb-5">
                {p.techno.map((val, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-2 px-3 py-1 bg-gray-600 bg-opacity-10 rounded-full text-xs text-white"
                  >
                    {val.icon}
                    {val.nom}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap rounded bg-blue-300 hover:cursor-pointer hover:text-white hover:bg-blue-400 p-2 items-center justify-center m-5">
              <FaGithub className="text-white hover" size={40} />{" "}
              <p>Voir sur GitHub</p>
            </div>
          </div>
        ))}
        {/* fin */}
      </div>
    </div>
  );
};

const ContactMe = () => {
  return (
    <section className="bg-slate-800 dark:bg-slate-800" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <h2 className="font-heading mb-4 font-bold tracking-tight  text-gray-200 dark:text-gray-200 text-3xl sm:text-5xl">
              Contactez moi
            </h2>
            {/* <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
              In hac habitasse platea dictumst
            </p> */}
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-400 dark:text-slate-300">
                Vous pouvez me contacter via le formulaire ou les liens
                propos&eacute;s, je vous r&eacute;pondrai dans les meilleurs
                d&eacute;lais.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-200 dark:text-gray-200">
                      Mon adresse
                    </h3>
                    <p className="text-gray-600 dark:text-slate-300">
                      Lot 251 bis / 3304 Manaotsara
                    </p>
                    <p className="text-gray-600 dark:text-slate-300">
                      Fianarantsoa, Madagascar
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-200 dark:text-gay-200">
                      Contact
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Mobile: +261 34 72 342 65
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      e-mail: manjakahasina69@gmail.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl text-gray-200 font-bold dark:text-gray-200">
                Ecriver ici ...
              </h2>
              <form id="contactForm">
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="name"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        placeholder="Votre nom"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="name"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Votre addresse email "
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label
                      htmlFor="textarea"
                      className="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      cols="30"
                      rows="5"
                      placeholder="Votre message..."
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimeLineEvent = () => {
  const doubleProject = [
    [
      {
        titre: <>Projet</>,
        description: (
          <>
            Conception, realisation et deployement d&#39; un projet de collecte
            de don en ligne avec Django et Nextjs
          </>
        ),
        date: <> Ao&#251;t 2024</>,
      },
      {
        titre: <>Projet</>,
        description: (
          <>
            Conception et r&eacute;alisation d&#39;un mini r&eacute;seaux
            sociaux avec React Native et Django
          </>
        ),
        date: <>Juillet - Ao&#251;t 2024</>,
      },
    ],
    [
      {
        titre: <>Projet</>,
        description: (
          <>
            Conception et r&eacute;alisation d&#39;un projet de gestion
            d&#39;&eacute;tudiant avec React js et Node js
          </>
        ),
        date: <>Mai 2024</>,
      },
      {
        titre: <>Stage en entreprise</>,
        description: (
          <>
            Conception, realisation et deployement d&#39; un projet de collecte
            de don en ligne avec Django et Nextjs
          </>
        ),
        date: <> Ao&#251;t 2023</>,
      },
    ],
    [
      {
        titre: <>Projet</>,
        description: (
          <>
            Conception et r&eacute;alisation d&#39;une application desktop de
            gestion de stock.
          </>
        ),
        date: <>Juillet 2023</>,
      },
      {
        titre: <>Projet</>,
        description: (
          <>
            Conception, r&eacute;alisation d&#39;une application desktop de
            gestion de personnel et de cong&eacute;.
          </>
        ),
        date: <>Juin 2023</>,
      },
    ],
    [
      {
        titre: <>Projet</>,
        description: (
          <>
            Conception et r&eacute;alisation d&#39;une application desktop de
            gestion de stock.
          </>
        ),
        date: <>Juillet 2023</>,
      },
      {
        titre: <>Projet</>,
        description: (
          <>
            Conception, r&eacute;alisation d&#39;une application desktop de
            gestion de personnel et de cong&eacute;.
          </>
        ),
        date: <>Juin 2023</>,
      },
    ],
  ];

  return (
    <div className="bg-gray-900 p-4 mt-10 items-center justify-center">
      <h2 className="text-3xl text-indigo-700 font-bold mb-12 ">Chronologie</h2>
      <div className="flex flex-wrap grid-cols-9 p-2 mx-auto md:grid overflow-hidden">
        {/* debut */}
        {doubleProject.map((val, index) => (
          <React.Fragment key={index}>
            <div className="flex md:contents flex-row-reverse">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                transition={transition}
                className="relative flex flex-wrap p-4 my-6 text-gray-800 break-words text-overflow:ellipsis bg-blue-300 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto "
              >
                <h3 className="text-lg font-semibold lg:text-xl">
                  {val[0].titre}
                </h3>
                <p className="mt-2 leading-6 md:text-base flex">
                  {val[0].description}
                </p>
                <span className="absolute text-sm text-gray-200 -top-5 left-2 whitespace-nowrap">
                  {val[0].date}
                </span>
              </motion.div>
              <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                  <div className="w-1 h-full bg-blue-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-gray-900 border-4 border-indigo-400 rounded-full top-1/2"></div>
              </div>
            </div>
            <div className="flex md:contents">
              <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                  <div className="w-1 h-full bg-blue-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-gray-900 border-4 border-indigo-400 rounded-full top-1/2"></div>
              </div>
              <motion.div
                initial={{ x: "100%" }}
                whileInView={{ x: "0%" }}
                transition={transition}
                className="relative flex flex-wrap p-4 my-6 text-gray-800 break-words text-overflow:ellipsis bg-blue-300 rounded-xl col-start-6 col-end-10 mr-auto md:mr-0 md:ml-auto "
              >
                <h3 className="text-lg font-semibold lg:text-xl">
                  {val[1].titre}
                </h3>
                <p className="mt-2 leading-6 md:text-base flex">
                  {val[1].description}
                </p>
                <span className="absolute text-sm text-gray-200 -top-5 left-2 whitespace-nowrap">
                  {val[1].date}
                </span>
              </motion.div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
