import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.



const ParticlesBackground = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent"
        }
      },
      particles: {
        number: {
          value: 250,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "polygon",
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.8,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false
          }
        },
        size: {
          value: { min: 1, max: 3 },
          random: {
            enable: true,
            minimumValue: 1
          }
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out"
        }
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: true,
            mode: "bubble"
          },
          onClick: {
            enable: true,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3
          },
          repulse: {
            distance: 400,
            duration: 0.4
          }
        }
      },
      retina_detect: true
    }),
    []
  );

  if (init) {
    return <Particles id={props.id} particlesLoaded={particlesLoaded} options={options} />;
  }

  return null;
};

export default ParticlesBackground;