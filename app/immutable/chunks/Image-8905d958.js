import{w as v}from"./index-1ed0bb1f.js";import{S as k,i as S,s as A,e as g,b as f,B as m,h,l as d,r as _,m as p,n as I,u as x,p as n,J as C,v as F,R as b}from"./index-5a317fd2.js";var z=(e=>(e[e.Light=0]="Light",e[e.Dark=1]="Dark",e))(z||{}),T=(e=>(e[e.Off=0]="Off",e[e.On=1]="On",e))(T||{}),M=(e=>(e[e.Code=0]="Code",e[e.Design3d=1]="Design3d",e[e.Research=2]="Research",e[e.Teach=3]="Teach",e[e.Compete=4]="Compete",e[e.Other=5]="Other",e))(M||{}),O=(e=>(e[e.Ipho=0]="Ipho",e[e.Cap=1]="Cap",e[e.Autoaim=2]="Autoaim",e[e.Paper=3]="Paper",e[e.Beam=4]="Beam",e[e.Phas=5]="Phas",e[e.Screw=6]="Screw",e[e.Sim2d=7]="Sim2d",e[e.Tutor=8]="Tutor",e[e.Boxes=9]="Boxes",e[e.Planter=10]="Planter",e))(O||{}),B=(e=>(e[e.Image=0]="Image",e[e.SwitchImage=1]="SwitchImage",e[e.Video=2]="Video",e))(B||{});const W="Pedram Amani",q="A showcase of my projects and achievements that I am proud of",Y="I'm Pedram",K="I strive to be a life-long learner and maker. I have studied physics for the past 7 years and ranked internationally. More recently I became interested in the software side of robotics. To give you an idea of my interests and skills, I am showcasing some of my projects and involvements here. Enjoy your visit!",Q="../headshot.png",X="headshot of Pedram with a suit and tie",Z="navbar",j="footer",P=new Map([[0,{show:!0,id:"code",title:"Coding Projects"}],[2,{show:!0,id:"research",title:"Research"}],[3,{show:!0,id:"teach",title:"Teaching"}],[4,{show:!1,id:"compete",title:"Competing"}],[1,{show:!0,id:"design3d",title:"3D Design"}],[5,{show:!1,id:"other",title:"Other"}]]),D=new Map([[0,{show:!1,categoryId:4,title:"IPhO Bronze Medal",date:"July 2017",about:"With top performance in the CAP High School Prize Exam and the Canadian Physics Olympiad, I was chosen as one of five to represent Canada in the International Physics Olympiad at Yogyakarta, Indonesia. After an adventurous week and two intense 5-hour-long exams, I took home a bronze medal and lots of sweet memories. I am indebted to my amazing teachers at AE High School for this achievement.",links:[{name:"Result",href:"https://ipho-unofficial.org/timeline/2017/individual#:~:text=Pedram%20Amani",isFile:!1},{name:"Certificate",href:"./ipho/certificate.pdf",isFile:!0}],medias:[{fmt:0,src:"./ipho/me.jpg",alt:"Pedram holding the Canadian flag and wearing a bronze medal at the IPhO award ceremony"}]}],[1,{show:!1,categoryId:4,title:"CAP Exam 3rd Place",date:"March 2021",about:"I placed 3rd in the Lloyd G. Elliott CAP University Prize Exam open to all undergraduate students in Canada.",links:[{name:"Result",href:"https://www.cap.ca/programs/medals-and-awards/prizes-students/university-prize-exam/2021-cap-university-prize-exam-results/#:~:text=Pedram%20Amani",isFile:!1},{name:"My solutions",href:"./cap/solutions.pdf",isFile:!0}],medias:[]}],[2,{show:!0,categoryId:0,title:"RoboMaster Autoaim",date:"October 2019",about:"I lead the vision team at the UBC RoboMaster student team to design and implement an algorithm for real-time detection of armour modules on moving robots. We used OpenCV and TensorFlow to achieve low-latency detection with high accuracy.",links:[{name:"GitHub",href:"https://github.com/ubcrm/autoaim",isFile:!1},{name:"RMUT challenge",href:"https://www.robomaster.com/en-US/robo/rmtc",isFile:!1}],medias:[{fmt:2,src:"./autoaim/video.mp4"}]}],[3,{show:!0,categoryId:2,title:"First-Authored Publication",date:"September 2021",about:"With the invaluable help and guidance of Dr. Valery Milner and Dr. Alexander Milner of the Ultrafast Coherent Control Group at UBC, I published my first first-authored paper in The Journal of Chemical Physics. We demonstrate that different molecular species in a gaseous mixture can be simultaneously excited to desired rotational frequencies using an optical centrifuge. This research was partly funded by an NSERC USRA.",links:[{name:"Publication",href:"https://doi.org/10.1063/5.0062051",isFile:!1},{name:"Research group",href:"https://coherentcontrol.sites.olt.ubc.ca",isFile:!1}],medias:[]}],[4,{show:!0,categoryId:2,title:"Beam Optics Simulation",date:"August 2020",about:"During a summer research position, I wrote a Python library to simulate the propagation of a Gaussian beam through an optical system. I used NumPy and pyFFTW to simulate the effect of various optical elements in the temporal and spectral domains. These graphs show the beam intensity following a double-slit experiment.",links:[{name:"GitHub",href:"https://github.com/pedramamani/beamSim",isFile:!1}],medias:[{fmt:1,src:"./beam/monoGraph.png",alt:"beam intensity as a function of space following a double-slit experiment",switchSrc:"./beam/monoCode.png",switchAlt:"code used to simulate a monochromatic double-slit experiment"},{fmt:1,src:"./beam/polyGraph.png",alt:"beam intensity as a function of space and time following a double-slit experiment",switchSrc:"./beam/polyCode.png",switchAlt:"code used to simulate a polychromatic double-slit experiment"}]}],[5,{show:!0,categoryId:3,title:"UBC Physics Circle",date:"March 2021",about:"I co-organized the UBC Physics Circle outreach program for two years. I prepared many problems for and gave several talks to an audience of around 30 high school students from across Vancouver. I have linked some of my talks and problems; the full list can be found on the official website.",links:[{name:"Physics Circle website",href:"https://outreach.phas.ubc.ca/events/metro-vancouver-physics-circle",isFile:!1},{name:"Color talk",href:"./phas/color.pdf",isFile:!0},{name:"Chalk problem",href:"./phas/chalk.pdf",isFile:!0},{name:"Swing problem",href:"./phas/swing.pdf",isFile:!0}],medias:[]}],[6,{show:!0,categoryId:0,title:"Screw-Sorting Vision",date:"Ongoing",about:"As part of a personal project involving automated sorting of screws and small parts, I am writing a custom vision library in Go. At the moment, it can map an image of the part taken against a lit background to a coarse outline and derive some global parameters. The goal is to ultimately classify a part from its image (i.e. M3\xD712mm FHCS in the example below).",links:[{name:"GitHub",href:"https://github.com/pedramamani/screwSort",isFile:!1}],medias:[{fmt:1,src:"./screw/nutOut.png",alt:"side profile of an M4 nut with a computer-detected outline and parameters such as width and height",switchSrc:"./screw/nutIn.png",switchAlt:"side profile of an M4 nut"},{fmt:1,src:"./screw/screwOut.png",alt:"side profile of an M3 screw with a computer-detected outline and parameters such as width and height",switchSrc:"./screw/screwIn.png",switchAlt:"side profile of an M3 screw"}]}],[7,{show:!0,categoryId:0,title:"RoboMaster Simulated Environment",date:"July 2021",about:"During my time at the UBC RoboMaster student team, I wrote a 2D simulated environment in Python to train machine learning models in. I simulated the RoboMaster University AI Challenge (RMUA), a 2v2 shooting match between fully autonomous robots. Motion and collision mechanics were implemented from scratch and I used Pygame for visualization.",links:[{name:"GitHub",href:"https://github.com/ubcrm/sim-2d",isFile:!1},{name:"RMUA challenge",href:"https://www.robomaster.com/en-US/robo/icra",isFile:!1}],medias:[{fmt:2,src:"./sim2d/video.mp4"}]}],[8,{show:!0,categoryId:3,title:"Private Tutoring",date:"June 2022",about:"I have around 500 hours of tutoring experience with more than 10 students in the past 6 years. I tutor IB high school mathematics and physics, university physics, and competitive physics. Some of my past students are currently in UBC Engineering Physics and Computer Science programs. This year, one of my competitively-trained students placed 2nd in Canada in the High School CAP Exam. My teaching philosophy is to start from the very fundamentals and supplement new material with lots of problems.",links:[{name:"Mechanics problem set",href:"./tutor/mechanics.pdf",isFile:!0},{name:"Optics problem set",href:"./tutor/optics.pdf",isFile:!0}],medias:[]}],[9,{show:!0,categoryId:1,title:"Organization Boxes",date:"April 2022",about:"I designed these boxes to organize the many small components I had. I optimized for material usage and time to print. Each box weighing only 9 grams. The key was to use vase mode for much faster speed and better accuracy. I was able to print everything in the photo with 2kg of filament and about 3 days of continuous printing. This is the V3 iteration of my organization boxes, currently working on a V4.",links:[{name:"Onshape",href:"https://cad.onshape.com/documents/44a4494862e4dbf0f141205a",isFile:!1},{name:"Unit box",href:"./boxes/unit.stl",isFile:!0}],medias:[{fmt:1,src:"./boxes/unitModel.png",alt:"3D model of a one-by-one box",switchSrc:"./boxes/unitPrint.png",switchAlt:"a one-by-one box printed in black filament"},{fmt:0,src:"./boxes/organized.jpg",alt:"170 boxes of various sizes placed in a grid with small parts organized in each"}]}],[10,{show:!0,categoryId:1,title:"Planter Box Storage",date:"August 2021",about:"Our Strata bylaws prohibit the use of balcony for storage, but planter boxes are allows. But we were really short on storage space and we need the balcony. So the solution was to design a planter box on top with hidden storage on the bottom. I designed everything in 3D and sourced all the material and all the building myself. The challenging thing was getting the dimensions of the concrete walls as they were not uniform/parallel at all. Features a sloped bed, a water vent, air vents, and a mesh bedding so soil doesn't stay moist underneath. A year later and this is the current state of planter. Definitely still need to work on our gardening skills.",links:[{name:"Onshape",href:"https://cad.onshape.com/documents/755ab1df508a2af9cabe77a1",isFile:!1}],medias:[{fmt:1,src:"./planter/model.png",alt:"3D model of the planter box",switchSrc:"./planter/modelFrame.png",switchAlt:"3D model of the planter box frame"},{fmt:0,src:"./planter/current.jpg",alt:"photo of the planter box containing a variety of plants and flowers"}]}]]);let y=new Map([]);for(let e of w(M))if(P.get(e).show){y.set(e,[]);for(let t of w(O))D.get(t).categoryId===e&&y.get(e).push(t)}const R={white:["#ffffff","#27272d"],black:["#424242","#d0d0d5"],whiteTrans:["#ffffffc0","#27272dc0"],lightGray:["#e6e9ea","#363641"],gray:["#acb1b2","#5c5c65"],firstAccent:["#4a00ff1f","#4a00ff1d"],secondAccent:["#6885fa2c","#6885fa18"],thirdAccent:["#1bff0020","#1bff000f"],fourthAccent:["#fff2002f","#fff20015"],fifthAccent:["#ff003b19","#ff003b0d"],imageBrightness:["100%","85%"]},c=v(0),u=v(0);function $(){const e=localStorage.getItem("theme");e?c.set(parseInt(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?(c.set(1),localStorage.theme=1):(c.set(0),localStorage.theme=0)}function ee(e){const t=document.querySelector(":root");if(t==null)return!1;for(let[s,a]of Object.entries(R))t.style.setProperty(`--${s}`,a[e]);return!0}function te(){c.update(e=>(e=e==1?0:1,localStorage.theme=e,e))}function ae(){const e=localStorage.getItem("background");e?u.set(parseInt(e)):(u.set(1),localStorage.background=1)}function ie(){u.update(e=>(e=e==1?0:1,localStorage.background=e,e))}function w(e){let t=[],s;for(let a of Object.keys(e))s=Number(e[a]),isNaN(s)||t.push(s);return t}function U(e){let t,s;return{c(){t=d("a"),s=_(e[1]),this.h()},l(a){t=p(a,"A",{class:!0,href:!0,style:!0,target:!0,rel:!0});var i=I(t);s=x(i,e[1]),i.forEach(h),this.h()},h(){n(t,"class","link svelte-ksvmca"),n(t,"href",e[0]),n(t,"style",e[3]),n(t,"target","_blank"),n(t,"rel","noopener noreferrer")},m(a,i){f(a,t,i),C(t,s)},p(a,i){i&2&&F(s,a[1]),i&1&&n(t,"href",a[0]),i&8&&n(t,"style",a[3])},d(a){a&&h(t)}}}function E(e){let t,s;return{c(){t=d("a"),s=_(e[1]),this.h()},l(a){t=p(a,"A",{class:!0,href:!0,style:!0,download:!0});var i=I(t);s=x(i,e[1]),i.forEach(h),this.h()},h(){n(t,"class","link svelte-ksvmca"),n(t,"href",e[0]),n(t,"style",e[3]),n(t,"download","")},m(a,i){f(a,t,i),C(t,s)},p(a,i){i&2&&F(s,a[1]),i&1&&n(t,"href",a[0]),i&8&&n(t,"style",a[3])},d(a){a&&h(t)}}}function G(e){let t;function s(o,r){return o[2]?E:U}let a=s(e),i=a(e);return{c(){i.c(),t=g()},l(o){i.l(o),t=g()},m(o,r){i.m(o,r),f(o,t,r)},p(o,[r]){a===(a=s(o))&&i?i.p(o,r):(i.d(1),i=a(o),i&&(i.c(),i.m(t.parentNode,t)))},i:m,o:m,d(o){i.d(o),o&&h(t)}}}function V(e,t,s){let{href:a}=t,{text:i}=t,{isFile:o=!1}=t,{style:r=""}=t;return e.$$set=l=>{"href"in l&&s(0,a=l.href),"text"in l&&s(1,i=l.text),"isFile"in l&&s(2,o=l.isFile),"style"in l&&s(3,r=l.style)},[a,i,o,r]}class se extends k{constructor(t){super(),S(this,t,V,G,A,{href:0,text:1,isFile:2,style:3})}}function H(e){let t,s;return{c(){t=d("img"),this.h()},l(a){t=p(a,"IMG",{class:!0,src:!0,alt:!0,style:!0}),this.h()},h(){n(t,"class","image svelte-ggzzld"),b(t.src,s=e[0])||n(t,"src",s),n(t,"alt",e[1]),n(t,"style",e[2])},m(a,i){f(a,t,i)},p(a,[i]){i&1&&!b(t.src,s=a[0])&&n(t,"src",s),i&2&&n(t,"alt",a[1]),i&4&&n(t,"style",a[2])},i:m,o:m,d(a){a&&h(t)}}}function L(e,t,s){let{src:a}=t,{alt:i}=t,{style:o=""}=t;return e.$$set=r=>{"src"in r&&s(0,a=r.src),"alt"in r&&s(1,i=r.alt),"style"in r&&s(2,o=r.style)},[a,i,o]}class ne extends k{constructor(t){super(),S(this,t,L,H,A,{src:0,alt:1,style:2})}}export{T as B,M as C,ne as I,se as L,B as M,z as T,c as a,u as b,ie as c,P as d,ae as e,j as f,ee as g,W as h,$ as i,Q as j,X as k,Y as l,K as m,Z as n,q as o,D as p,te as t,y as v};
