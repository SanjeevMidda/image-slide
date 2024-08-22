import "./index.css";

//importing modules
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";

function App() {
  // adding reference to each section item using useRef
  let blockOne = useRef();
  let blockTwo = useRef();
  let blockThree = useRef();
  let circle = useRef();

  // checking DOM elements have been succesfully captured
  console.log(blockOne, blockTwo, blockThree);

  // creating smooth scroll using Lenis
  const lenis = useLenis(({ scroll }) => {});

  // creating animations for these elements using gsap
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const blockOneTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "200px",
        end: "+=400px",
        scrub: true,
        markers: true,
      },
    });

    blockOneTimeline
      .from(blockOne.current, { transform: `translateY(-250px)` })
      .to(blockOne.current, { transform: `translateY(0px)` }, 0);

    const blockThreeTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "200px",
        end: "+=400px",
        scrub: true,
        markers: true,
      },
    });

    blockThreeTimeline
      .from(blockThree.current, { transform: `translateY(-250px)` })
      .to(blockThree.current, { transform: `translateY(0px)` }, 0);

    const circleTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "1450px",
        end: "+=500px",
        scrub: true,
        markers: true,
      },
    });

    circleTimeline
      // .from(circle.current, { transform: `rotate(0deg)` })
      .to(circle.current, { transform: `rotateY(180deg)` }, 0);
  }, []);

  return (
    <ReactLenis root>
      <div className="App">
        <div className="mainContainer">
          <section>
            <div className="block" ref={blockOne}></div>
            <div className="block" ref={blockTwo}></div>
            <div className="block" ref={blockThree}></div>
          </section>

          <section>
            <div className="circle" ref={circle}></div>
          </section>

          <section>
            {/* <div className="block" ref={blockOne}></div> */}
            <div className="block"></div>
          </section>
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;
