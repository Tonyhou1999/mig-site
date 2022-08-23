import Image from "next/image";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { NavBar } from "../components/Nav";
import miglogo from "../public/images/MIG_Logo_No_BG.png";

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  // Navbar links and dropdowns 
  const navArr = [
    { text: "About", linkDest: "/about" },
    { text: "Projects", linkDest: "/projects" },
    { text: "Resources", linkDest: "/resources" },
    { text: "Apply", linkDest: "/apply" },
    { text: "Contact", linkDest: "/contact", disabled: true },
  ];

  return (
    <div className="container">
      <NavBar navBarArray={navArr} />
      <div className="wrapper">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#4a0a1f",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "repulse",
                },
                onHover: {
                  enable: false,
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 0.5,
                  opacity: 8,
                  speed: 3,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 90,
                enable: true,
                opacity: 1.0,
                width: 2,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "out",
                },
                random: false,
                speed: 4,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 882,
                },
                value: 100,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 0.1, max: 0.1 },
              },
            },
            detectRetina: true,
          }} // TODO: Remove inline styling, cleanup, make modular
        />
        <div className="centered">
          <div>
            <Image alt="Next.js logo" src={miglogo} layout="intrinsic" />
          </div>
          <div>
            <h1>Machine Intelligence Group of Boston College</h1>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        .wrapper {
          position: relative;
        }

        h1 {
          position: absolute;
          white-space: nowrap;
          font-size: 32px;
          color: white;
          font-family: "Maison Neue Book", sans-serif;
          text-align: center;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .centered {
          display: grid;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          row-gap: 20px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
