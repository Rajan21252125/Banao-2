gsap.registerPlugin(ScrollTrigger);

const elements = [
  { selector: "#imag1", delay: 0.4, y: 90 },
  { selector: "#imag2", delay: 0.4, y: -90 },
  { selector: "#txt1 p", y: 60 },
  { selector: "#txt1 h1", y: -60 },
  { selector: ".one img", y: 60 }
];

elements.forEach(element => {
  const { selector, delay = 0, y, scrollTrigger } = element;
  
  gsap.from(selector, {
    delay,
    opacity: 0,
    duration: 1,
    y,
    scrollTrigger
  });
});

const elements1 = [
  { selector: "#txt2 p", y: -90, scrollTrigger: { trigger: "#txt2 p", scroller: "body", start: "top 60%"} },
  { selector: "#txt2 h1", y: 90, scrollTrigger: { trigger: "#txt2 h1", scroller: "body", start: "top 60%"} },
  { selector: "#imag3", y: 90, scrollTrigger: { trigger: "#imag3", scroller: "body", start: "top 60%"} },
  { selector: "#imag4", y: -90, scrollTrigger: { trigger: "#imag4", scroller: "body", start: "top 60%"}  }
];

elements1.forEach(element => {
  const { selector, delay = 0, y, scrollTrigger } = element;
  
  gsap.from(selector, {
    delay,
    opacity: 0,
    duration: 1,
    y,
    scrollTrigger
  });
});




const elements2 = [
  { selector: "#txt3 p",y: -90, scrollTrigger: { trigger: "#txt3 p", scroller: "body", start: "top 60%" , marker:true} },
  { selector: "#txt3 h1", y: 90, scrollTrigger: { trigger: "#txt3 h1", scroller: "body", start: "top 60%" , marker:true} },
  { selector: "#txt3 img", y: 90, scrollTrigger: { trigger: "#txt3 img", scroller: "body", start: "top 60%" , marker:true} },
  { selector: "#imag5", y: 90, scrollTrigger: { trigger: "#imag5", scroller: "body", start: "top 60%" , marker:true} },
  { selector: "#imag6", y: -90, scrollTrigger: { trigger: "#imag6", scroller: "body", start: "top 60%" , marker:true}  }
];

elements2.forEach(element => {
  const { selector, delay = 0, y, scrollTrigger } = element;
  
  gsap.from(selector, {
    delay,
    opacity: 0,
    duration: 1,
    y,
    scrollTrigger
  });
});



const elements3 = [
  { selector: "#txt4 p", y: -90, scrollTrigger: { trigger: "#txt4 p", scroller: "body", start: "top 60%" , marker:true} },
  { selector: "#txt4 h1", y: 90, scrollTrigger: { trigger: "#txt4 h1", scroller: "body", start: "top 60%" , marker:true} },
  { selector: "#imag7", y: -90, scrollTrigger: { trigger: "#imag7", scroller: "body", start: "top 60%" , marker:true} },
  { selector: "#imag8", y: 90, scrollTrigger: { trigger: "#imag8", scroller: "body", start: "top 60%" , marker:true}  }
];

elements3.forEach(element => {
  const { selector, delay = 0, y, scrollTrigger } = element;
  
  gsap.from(selector, {
    delay,
    opacity: 0,
    duration: 1,
    y,
    scrollTrigger
  });
});




const elements4 = [
  { selector: "#txt5 p", y: 90, scrollTrigger: { trigger: "#txt5 p", scroller: "body", start: "top 60%" , marker:true} },
  { selector: "#txt5 h1", y: -90, scrollTrigger: { trigger: "#txt5 h1", scroller: "body", start: "top 60%" , marker:true} },
  { selector: "#imag9", y: 90, scrollTrigger: { trigger: "#imag9", scroller: "body", start: "top 60%" , marker:true} },
  { selector: "#imag10", y: -90, scrollTrigger: { trigger: "#imag10", scroller: "body", start: "top 60%" , marker:true}  }
];

elements4.forEach(element => {
  const { selector, delay = 0, y, scrollTrigger } = element;
  
  gsap.from(selector, {
    delay,
    opacity: 0,
    duration: 1,
    y,
    scrollTrigger
  });
});



const elements5 = [
  { selector: "#txt6 p", y: -90, scrollTrigger: { trigger: "#txt6 p", scroller: "body", start: "top 60%" , marker:true} },
  { selector: "#txt6 h1", y: 90, scrollTrigger: { trigger: "#txt6 h1", scroller: "body", start: "top 60%" , marker:true} },
  { selector: "#imag11", y: 90, scrollTrigger: { trigger: "#imag11", scroller: "body", start: "top 60%" , marker:true} },
];

elements5.forEach(element => {
  const { selector, delay = 0, y, scrollTrigger } = element;
  
  gsap.from(selector, {
    delay,
    opacity: 0,
    duration: 1,
    y,
    scrollTrigger
  });
});




const elements6 = [
  { selector: "#txt7 p", y: 90, scrollTrigger: { trigger: "#txt7 p", scroller: "body", start: "top 60%" } },
  { selector: "#txt7 img", y: -90, scrollTrigger: { trigger: "#txt7 img", scroller: "body", start: "top 60%" } },
  { selector: "#txt7 h1", y: 90, scrollTrigger: { trigger: "#txt7 h1", scroller: "body", start: "top 60%" } },
  { selector: "#imag12", y: 90, scrollTrigger: { trigger: "#imag12", scroller: "body", start: "top 60%" } },
  { selector: "#imag13", y: -90, scrollTrigger: { trigger: "#imag13", scroller: "body", start: "top 60%" }  }
];

elements6.forEach(element => {
  const { selector, delay = 0, y, scrollTrigger } = element;
  
  gsap.from(selector, {
    opacity: 0,
    duration: 1,
    y,
    scrollTrigger
  });
});


ScrollTrigger.create({
  trigger:".cards",
  start: "top top",
  end: "bottom bottom",
})



let panels = gsap.utils.toArray(".panel");

let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
    pin: true, 
    pinSpacing: false 
  });
});

ScrollTrigger.create({
  snap: {
    snapTo: (progress, self) => {
      let panelStarts = tops.map(st => st.start),
          snapScroll = gsap.utils.snap(panelStarts, self.scroll());
      return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
    },
    duration: 0.5
  }
});
