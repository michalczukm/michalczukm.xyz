(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);a(150);var n=a(7),r=a.n(n),s=a(0),c=a.n(s),o=a(153),i=a.n(o),l=a(148),p=a(146),u=(a(73),a(55),a(35),a(159),a(152)),m=a.n(u),h=a(161),d=a.n(h),A=function(e){switch(e){case"presentation":return"fa-comment-o";case"workshops":return"fa-laptop";case"video":return"fa-play-circle";case"podcast":return"fa-podcast";case"discussion":return"fa-comments-o"}},w=function(e){return m()(e).format("YYYY-MM-DD")},y=function(e){return e.startDate&&e.endDate?w(e.startDate)+" - "+w(e.endDate):w(e.startDate)},g=function(e){var t=e.title,a=e.url,n=e.event,r=e.place,s=e.type,o=e.resources;return c.a.createElement("div",{className:d.a.container},c.a.createElement("div",{className:d.a.container__type},c.a.createElement(p.a,{href:a,className:"icon fa-2x "+A(s)})),c.a.createElement("div",{className:d.a.container__content},c.a.createElement("ul",{className:d.a.eventData},c.a.createElement("li",null,c.a.createElement(p.a,{href:a},t)),c.a.createElement("li",{className:d.a.eventName},c.a.createElement(p.a,{href:n.url},n.name)),c.a.createElement("li",null,function(e,t){return[y(e),t.city,t.country].join(" | ")}(n,r)),o?c.a.createElement("li",null,c.a.createElement("b",null,"resources:")," ",function(e){return Object.keys(e).map(function(t){return c.a.createElement(p.a,{key:t,href:e[t]},t)}).reduce(function(e,t){return[e,e?" | ":"",t]},null)}(o)):"")))},f=a(162),k=a.n(f),v=(a(33),function(e){return c.a.createElement("div",{style:{display:"inline-flex",justifyContent:"center",alignItems:"center"},width:"52px",height:"52px"},c.a.createElement("img",Object.assign({alt:"thumbnail",loading:"lazy",style:{maxWidth:"52px",height:"auto"}},e)))}),b=function(e){var t,a=e.artifact;return c.a.createElement("div",{className:k.a.container},c.a.createElement("div",{className:k.a.container__logo},c.a.createElement(p.a,{href:a.url},c.a.createElement(v,{src:a.thumbnailUrl}))),c.a.createElement("div",{className:k.a.container__content},c.a.createElement("ul",{className:k.a.data},c.a.createElement("li",null,c.a.createElement(p.a,{href:a.url},"[",a.language,"] ",a.title)),c.a.createElement("li",null,(t=a.date,m()(t).format("YYYY-MM"))),c.a.createElement("li",{className:k.a.description},a.description))))},E=[{type:"presentation",title:"The power of mobile web browsers",url:"https://romania.voxxeddays.com/2019/03/31/the-power-of-mobile-web-browsers/",event:{name:"Voxxed Days Frontend, Bucharest",url:"https://romania.voxxeddays.com/frontend/",startDate:new Date("2019-05-22")},place:{city:"Bucharest",country:"RO"},resources:{presentation:"https://slides.com/michalczukm/mobile-web_voxxed-front#/"}},{type:"presentation",title:"TypeScript na styku warstw aplikacji",url:"https://infoshare.pl/speakers-list/2019/#speaker1160",event:{name:"InfoShare 2019",url:"https://infoshare.pl",startDate:new Date("2019-05-08"),endDate:new Date("2019-05-09")},place:{city:"Gdańsk",country:"PL"},resources:{presentation:"https://slides.com/michalczukm/typescript-between-layers"}},{type:"presentation",title:"Node.js in .NET Core ecosystem: How to connect them and when it might be useful?",url:"https://www.meetup.com/%C5%9Al%C4%85ska-Grupa-Microsoft-Meetup/events/258969479/",event:{name:"Śląska Grupa Microsoft",url:"https://www.meetup.com/%C5%9Al%C4%85ska-Grupa-Microsoft-Meetup/",startDate:new Date("2019-04-16")},place:{city:"Katowice",country:"PL"},resources:{presentation:"https://slides.com/michalczukm/nodejs-in-dotnet-core-ecosystem"}},{type:"presentation",title:"Node.js in .NET Core ecosystem: How to connect them and when it might be useful?",url:"https://konferencjabeit.pl/Home/Details/100",event:{name:"Konferencja beIT",url:"https://konferencjabeit.pl/",startDate:new Date("2019-04-12"),endDate:new Date("2019-04-14")},place:{city:"Gdańsk",country:"PL"},resources:{presentation:"https://slides.com/michalczukm/nodejs-in-dotnet-core-ecosystem"}},{type:"presentation",title:"Node.js Streams 101: What you should know even if you don't use Node.js daily",url:"https://4developers.org.pl/o_prelegencie/#id=37710",event:{name:"4Developers 2019",url:"https://4developers.org.pl",startDate:new Date("2019-04-08")},place:{city:"Warsaw",country:"PL"},resources:{presentation:"https://slides.com/michalczukm/nodejs-streams-101"}},{type:"presentation",title:"Bootcampy okiem trenera i developera",url:"https://2019.boilingfrogs.pl/schedule/bootcampy-okiem-trenera-i-developera/",event:{name:"Boiling Frogs",url:"https://2019.boilingfrogs.pl",startDate:new Date("2019-03-30")},place:{city:"Wrocław",country:"PL"},resources:{presentation:"https://slides.com/michalczukm/bootcamps-dev-trainer",video:"https://youtu.be/OAWvgeo5MTE"}},{type:"presentation",title:"Node.js Streams 101: What you should know even if you don't use Node.js daily",url:"https://www.facebook.com/events/1929835677131194/",event:{name:"Ciklum JS Meetup",url:"https://4developers.org.pl/",startDate:new Date("2019-01-29")},place:{city:"Gdańsk",country:"PL"},resources:{presentation:"https://slides.com/michalczukm/nodejs-streams-101"}},{type:"presentation",title:"Node.js in .NET Core ecosystem: How to connect them and when it might be useful?",url:"https://www.meetup.com/TG-NET/events/256711276/",event:{name:"TG-NET",url:"https://www.meetup.com/TG-NET/",startDate:new Date("2018-12-13")},place:{city:"Gdańsk",country:"PL"},resources:{presentation:"https://slides.com/michalczukm/nodejs-in-dotnet-core-ecosystem"}},{type:"presentation",title:"TypeScript magic types - go deeper about TS type system",url:"https://careercon.pl/konferencja/kariera-it-gdansk-08-12-2018/",event:{name:"Kariera IT",url:"https://careercon.pl/en/konferencja/kariera-it-gdansk-08-12-2018",startDate:new Date("2018-12-08")},place:{city:"Gdańsk",country:"PL"},resources:{presentation:"https://slides.com/michalczukm/typescript-magic-types"}},{type:"presentation",title:"NGXS - yet another Angular state management library",url:"https://www.facebook.com/events/2184181045190150/",event:{name:"Angular Tricity",url:"https://www.facebook.com/AngularTricity/",startDate:new Date("2018-11-06")},place:{city:"Gdańsk",country:"PL"},resources:{presentation:"https://slides.com/michalczukm/ngxs-yet-another-state-management"}},{type:"presentation",title:"TypeScript magic types - go deeper about TS type system",url:"https://krakow.4developers.org.pl/bio.html#id=35107",event:{name:"4Developers Kraków",url:"https://krakow.4developers.org.pl",startDate:new Date("2018-10-05")},place:{city:"Kraków",country:"PL"},resources:{presentation:"https://slides.com/michalczukm/typescript-magic-types",video:"https://youtu.be/2Fciqei6gcI"}},{type:"presentation",title:"Node.js in .NET Core ecosystem: How to connect them and when it might be useful?",url:"https://crossweb.pl/en/events/ciklum-gdansk-net-meetup-4/",event:{name:"Ciklum Gdańsk .Net Meetup #4",url:"https://crossweb.pl/en/events/ciklum-gdansk-net-meetup-4/",startDate:new Date("2018-09-18")},place:{city:"Gdańsk",country:"PL"},resources:{presentation:"https://slides.com/michalczukm/nodejs-in-dotnet-core-ecosystem"}},{type:"presentation",title:"The efficient way to mock an API for front-end devs",url:"https://crossweb.pl/en/events/ux-frontend-meetup-czerwiec-2018/",event:{name:"Ciklum UX & Frontend Meetup",url:"https://crossweb.pl/en/events/ux-frontend-meetup-czerwiec-2018/",startDate:new Date("2018-06-27")},place:{city:"Gdańsk",country:"PL"},resources:{presentation:"https://slides.com/michalczukm/mocking-api-for-front-end-devs"}},{type:"presentation",title:"From idea to implementation in IT",url:"https://www.facebook.com/events/370208810150274/?active_tab=about/",event:{name:"Createvening #7",url:"https://crossweb.pl/en/events/ux-frontend-meetup-czerwiec-2018/",startDate:new Date("2018-06-06")},place:{city:"Gdańsk",country:"PL"}},{type:"presentation",title:"TypeScript magic types - the advanced type system",url:"https://crossweb.pl/wydarzenia/angular-tricity-2",event:{name:"Angular Tricity",url:"https://crossweb.pl/wydarzenia/angular-tricity-2",startDate:new Date("2018-05-09")},place:{city:"Gdańsk",country:"PL"},resources:{presentation:"https://slides.com/michalczukm/typescript-magic-types-angular3city2018"}},{type:"presentation",title:"What mobile browsers can do?",url:"https://4developers.org.pl/lecture.html#id=40682",event:{name:"4Developers 2018",url:"https://4developers.org.pl/",startDate:new Date("2018-04-09")},place:{city:"Warsaw",country:"PL"}},{type:"presentation",title:"What mobile browsers can do?",url:"https://www.facebook.com/events/329804147528351",event:{name:"meet.js Gdańsk",url:"https://www.facebook.com/events/329804147528351",startDate:new Date("2018-03-07")},place:{city:"Gdańsk",country:"PL"}},{type:"discussion",title:"[Host of discussion panel] React vs Angular discussion",url:"https://www.trojmiasto.pl/React-vs-Angular-infoShare-Academy-x-AiOLI-imp454236.html",event:{name:"React vs Angular: infoShare Academy x AiOLI",url:"https://www.trojmiasto.pl/React-vs-Angular-infoShare-Academy-x-AiOLI-imp454236.html",startDate:new Date("2018-02-28")},place:{city:"Gdańsk",country:"PL"}},{type:"workshops",title:"TDD in C#",url:"https://evenea.pl/imprezy/konferencje/sopot/lider-workshops-days-2017-173646/",event:{name:"L!der Workshop Days",url:"https://evenea.pl/imprezy/konferencje/sopot/lider-workshops-days-2017-173646/",startDate:new Date("2017-11-08")},place:{city:"Sopot",country:"PL"},resources:{presentation:"https://speakerdeck.com/michalczukm/l-der-test-driven-development-in-c-number-workshop"}},{type:"presentation",title:"Progressive Web Apps. What are they, where to use them?",url:"https://www.slush.org/news/community/launching-first-europe-hack-tour/",event:{name:"Hack Tour 2017",url:"https://www.slush.org/news/community/launching-first-europe-hack-tour/",startDate:new Date("2017-09-13")},place:{city:"Gdańsk",country:"PL"},resources:{presentation:"https://speakerdeck.com/michalczukm/hack-tour-progressive-web-apps-what-are-they-when-to-use-them"}},{type:"workshops",title:"Angular 4. My very first application",url:"https://www.slush.org/news/community/launching-first-europe-hack-tour/",event:{name:"Hack Tour 2017",url:"https://www.slush.org/news/community/launching-first-europe-hack-tour/",startDate:new Date("2017-09-13")},place:{city:"Gdańsk",country:"PL"},resources:{presentation:"https://speakerdeck.com/michalczukm/hack-tour-my-very-first-angular-4-application-workshops"}},{type:"presentation",title:"Angular meets Redux",url:"https://www.facebook.com/events/237900943347992/",event:{name:"ngSummit 2017",url:"https://www.facebook.com/events/237900943347992/",startDate:new Date("2017-05-27")},place:{city:"Wrocław",country:"PL"},resources:{presentation:"https://speakerdeck.com/michalczukm/ngsummit-angular-meets-redux"}},{type:"workshops",title:"Angular 2. My very first application",url:"http://www.liderferencja.pl/",event:{name:"L!deroferencja 2017",url:"http://www.liderferencja.pl/",startDate:new Date("2017-04-04")},place:{city:"Sopot",country:"PL"},resources:{presentation:"https://speakerdeck.com/michalczukm/l-deroferencja-my-very-first-angular-2-application-workshops"}},{type:"presentation",title:"Asp.net Core, is it worth it?",url:"http://www.itadpg.pl/",event:{name:"IT Academic Day 2016",url:"http://www.itadpg.pl/",startDate:new Date("2016-12-10")},place:{city:"Gdańsk",country:"PL"},resources:{presentation:"https://speakerdeck.com/michalczukm/itad-asp-dot-net-core"}},{type:"presentation",title:"Front-end tooling: Package Managers",url:"http://tech.3camp.pl/tech-3camp-36-15-listopada-w-gpn-t/",event:{name:"3Camp.tech",url:"http://tech.3camp.pl/",startDate:new Date("2016-11-15")},place:{city:"Gdańsk",country:"PL"},resources:{presentation:"https://speakerdeck.com/michalczukm/3camp-front-end-tooling-package-managers",video:"https://vimeo.com/192835137"}},{type:"workshops",title:"Open TypeScript workshops",url:"https://github.com/michalczukm/typescript-workshops",event:{name:"Goyello",url:"https://github.com/michalczukm/typescript-workshops",startDate:new Date("2016-04-06")},place:{city:"Gdańsk",country:"PL"}},{type:"workshops",title:"Can you convince your client to your way of work?",url:"https://agile3m.pl/marcin-zochowski-michal-michalczuk-czy-mozna-przekonac-klienta-do-swojego-sposobu-pracy-2016-02-08/",event:{name:"Agile3m",url:"https://agile3m.pl",startDate:new Date("2016-02-08")},place:{city:"Sopot",country:"PL"},resources:{presentation:"https://speakerdeck.com/michalczukm/agile3m-can-you-convince-client-to-your-way-of-work"}},{type:"presentation",title:"Whats new in TypeScript, and why you are not using it?",url:"https://www.facebook.com/events/1687272218184126",event:{name:"meet.js Gdańsk",url:"https://www.facebook.com/events/1687272218184126",startDate:new Date("2016-02-01")},place:{city:"Gdańsk",country:"PL"},resources:{presentation:"https://speakerdeck.com/michalczukm/meet-dot-js-typescript-what-is-new-any-why-you-are-not-using-it"}}],D=[{type:"presentation",title:"Bootcampy okiem trenera i developera",url:"https://dynamit.pro/",event:{name:"dynamIT",url:"https://dynamit.pro/",startDate:new Date("2019-08-17")},place:{city:"Kraków",country:"PL"}},{type:"presentation",title:"Bootcampy okiem trenera i developera",url:"https://www.meetup.com/WarsawJS/events/259419569/",event:{name:"WarsawJS",url:"https://warsawjs.com/",startDate:new Date("2019-06-12")},place:{city:"Warsaw",country:"PL"}},{type:"presentation",title:"NGXS - yet another Angular state management library",url:"https://www.meetup.com/AngularJS-Wrocław/events/258942476",event:{name:"Angular Wrocław",url:"https://www.meetup.com/AngularJS-Wrocław/",startDate:new Date("2019-05-30")},place:{city:"Wrocław",country:"PL"}}],C=[{language:"PL",title:"Front-end 2019",type:"podcast",url:"https://devsession.pl/frontend-2019-michal-michalczuk/",thumbnailUrl:a(163),description:"I was guest in devsession podcast, created by Grzegorz Koftis. We were talking about current state and near future of Front-end development.",date:new Date("2019-05")}],I=[{language:"PL",title:"Boiling Frogs 2019 - Michał Michalczuk - Bootcampy okiem trenera i developera",type:"presentation",url:"https://youtu.be/OAWvgeo5MTE",thumbnailUrl:a(164),description:"My presentation from Boiling Frogs 2019 in Wrocław, Poland.",date:new Date("2019-03")},{language:"PL",title:"4Developers Kraków 2018: TypeScript magic types",type:"presentation",url:"https://youtu.be/2Fciqei6gcI",thumbnailUrl:a(165),description:"Exploring TypeScript type system on 4Developers Kraków.",date:new Date("2018-11")},{language:"PL",title:"3Camp: Front-end tooling - Package managers",type:"presentation",url:"https://vimeo.com/192835137",thumbnailUrl:a(166),description:"Presentation on 3Camp in Gdańsk, Poland about current state of package managers in JavaScript, how to deal with it and don't get confused.",date:new Date("2016-11")}],z=[{name:"Across Stack",episodes:[{language:"PL",title:"Across Stack - #3 Node.js & Nest.js",type:"video",url:"https://www.facebook.com/infoshareacademy/videos/2252814324993663/",thumbnailUrl:a(167),description:"I was host in webinar series by my idea - Across Stack.",date:new Date("2018-12")},{language:"PL",title:"Across Stack - #2 Python & Flask",type:"webinar",url:"https://www.facebook.com/infoshareacademy/videos/254645481890710/UzpfSTQzMjI1MjcwMzYwNjEyODpWSzoxOTY4NDIzODA5OTE4Njk3/?acontext=%7B%22ref%22%3A70%2C%22source%22%3A1%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22permalink%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22surface%5C%22%2C%5C%22extra_data%5C%22%3A[]%7D]%22%7D&active_tab=discussion",thumbnailUrl:a(168),description:"I was host in webinar series by my idea - Across Stack.",date:new Date("2018-11")},{language:"PL",title:"Across Stack - #1 C# & Asp.net",type:"webinar",url:"https://www.facebook.com/infoshareacademy/videos/294755691359453/UzpfSTQzMjI1MjcwMzYwNjEyODo1NjQwMTk5NzczNTE0NTM/?action_history=null&__xts__[0]=68.ARCnkCkg9qrbYAYkAo87MMRtBJsXnYL-K0uhMm49tQ5S6NVtta6mEt_cP2gJ5mlX9FOsSTbLwkqxkpjjhNECoH_IyGiyR7oqrVZP1DpQP-SzRnP59fRH5R6IAAhopcOI7zh1CrvQznqgRPXgyQY0G10Y06SidYK7vBY51Z8u_Pe21HnZC3p0&__tn__=-R",thumbnailUrl:a(169),description:"I was host in webinar series by my idea - Across Stack.",date:new Date("2018-09")}]}],P=[{language:"PL",title:"infoShare Academy webinar: Początki programowania we Front-endzie",type:"webinar",url:"https://www.facebook.com/infoshareacademy/videos/2323734644619086",thumbnailUrl:a(170),description:"I was hosting webinar about generally front-end development",date:new Date("2019-04")},{language:"PL",title:"infoShare Academy webinar: Jak zostać fullstackiem?",type:"webinar",url:"https://www.youtube.com/watch?v=2LiVkyS9Co4&feature=youtu.be&t=602",thumbnailUrl:a(171),description:"I was a guest at webinar about working as a fullstack developer.",date:new Date("2018-07")},{language:"PL",title:"just.join.it - co-hosting webinar",type:"webinar",url:"https://youtu.be/Fz9pXEL0hlw",thumbnailUrl:a(172),description:"I was co-hosting, as technical guest, live-stream audition with Piotr Miazga (Wikimedia)",date:new Date("2017-11")},{language:"PL",title:"just.join.it - guest",type:"webinar",url:"https://www.youtube.com/watch?v=sGSou-lXpxM",thumbnailUrl:a(173),description:"Q&A session with us, from infoShare Academy, about training and rising fresh developers",date:new Date("2017-05")},{language:"PL",title:"just.join.it - co-hosting webinar",type:"webinar",url:"https://youtu.be/_OcehPVDurE",thumbnailUrl:a(174),description:"I was co-hosting, as technical guest, live-stream audition with Jakub Jurkiewicz from New Zeland",date:new Date("2017-05")}],S=(new Date("2017-05"),new Date("2018-01"),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getEvents=function(e){return e.map(function(e,t){return c.a.createElement(g,{key:t,title:e.title,url:e.url,event:e.event,place:e.place,type:e.type,resources:e.resources})})},a.getPublicArtifacts=function(){return c.a.createElement(s.Fragment,null,c.a.createElement("h3",null,"Recorded presentations"),I.map(function(e,t){return c.a.createElement(b,{key:t,artifact:e})}),c.a.createElement("hr",null),c.a.createElement("h3",null,"Podcasts"),C.map(function(e,t){return c.a.createElement(b,{key:t,artifact:e})}),c.a.createElement("hr",null),z.map(function(e,t){return c.a.createElement(s.Fragment,{key:t},c.a.createElement("h3",null,"Series: ",e.name),e.episodes.map(function(e,a){return c.a.createElement(b,{key:t+"-"+a,artifact:e})}),c.a.createElement("hr",null))}),c.a.createElement("h3",null,"Webinars"),P.map(function(e,t){return c.a.createElement(b,{key:t,artifact:e})}))},a.render=function(){return c.a.createElement(l.a,null,c.a.createElement(i.a,null,c.a.createElement("title",null,"michalczukm | Michał Michalczuk"),c.a.createElement("meta",{name:"description",content:"Michał Michalczuk personal website: Full-Stack software developer and IT trainer"}),c.a.createElement("meta",{name:"keywords",content:"TypeScript,JavaScript,Full-Stack,Speaker,Software developer"}),c.a.createElement("meta",{name:"author",content:"Michał Michalczuk, michalczukm"})),c.a.createElement("div",{id:"main"},c.a.createElement("section",{id:"about-me"},c.a.createElement("header",{className:"major"},c.a.createElement("h2",null,"Who I am")),c.a.createElement("span",null,"I am strongly web oriented"," ",c.a.createElement("strong",null,"Full-Stack software developer")," and"," ",c.a.createElement(p.a,{href:"https://infoshareacademy.com/"},"IT trainer"),"."),c.a.createElement("p",null,"I believe that teaching others and sharing knowledge make us better developers."),c.a.createElement("p",null,"TypeScript fan and promoter. Sometimes scrum master, architect, team leader, speaker."),c.a.createElement("ul",null,c.a.createElement("li",null,"As a front-end dev I am focused on TypeScript and Angular but I am constantly exploring new areas,"),c.a.createElement("li",null,"As a back-end dev I prefer Asp.net with C# or Node.js, but vary of technologies and languages went through my fingers. I used to work with WPF, Silverlight, Python and Django, Visual Basic, PHP etc.")),c.a.createElement("ul",{className:"actions"},c.a.createElement("li",null,c.a.createElement(p.a,{href:"https://gist.github.com/michalczukm/c018a256837b05e47581e5063f78c8ab",className:"button"},"Call For Papers info")))),c.a.createElement("section",{id:"upcoming-events"},c.a.createElement("h2",null,"Upcoming events"),this.getEvents(D)),c.a.createElement("div",{className:"two-column"},c.a.createElement("section",{id:"past-events"},c.a.createElement("h2",null,"Past events"),this.getEvents(E)),c.a.createElement("section",{id:"public-artifacts"},c.a.createElement("h2",null,"Public artifacts"),this.getPublicArtifacts(E))),c.a.createElement("a",{href:"#header",className:"back-to-top button center icon fa-arrow-up"},"top")))},t}(c.a.Component));t.default=S},146:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.href,a=e.children,n=e.className;return r.a.createElement("a",{href:t,className:n,target:"_blank",rel:"noopener noreferrer"},a)}},147:function(e,t,a){e.exports=a.p+"static/michalczukm-8c27d97e9a25f6dd5a35bc3b1656e226.png"},148:function(e,t,a){"use strict";var n=a(7),r=a.n(n),s=a(0),c=a.n(s),o=(a(149),a(146)),i=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("div",{id:"footer"},c.a.createElement("div",{className:"inner"},c.a.createElement("ul",{className:"icons"},c.a.createElement("li",null,c.a.createElement(o.a,{href:"",className:"icon fa-twitter"},c.a.createElement("span",{className:"label"},"Twitter"))),c.a.createElement("li",null,c.a.createElement(o.a,{href:"https://github.com/michalczukm",className:"icon fa-github"},c.a.createElement("span",{className:"label"},"Github"))),c.a.createElement("li",null,c.a.createElement(o.a,{href:"https://stackoverflow.com/users/2029818/michalczukm",className:"icon fa-stack-overflow"},c.a.createElement("span",{className:"label"},"Stack Overflow"))),c.a.createElement("li",null,c.a.createElement(o.a,{href:"mailto:michalczukm@gmail.com",className:"icon fa-envelope-o"},c.a.createElement("span",{className:"label"},"Email")))),c.a.createElement("ul",{className:"copyright"},c.a.createElement("li",null,"© Michał Michalczuk"),c.a.createElement("li",null,"Powered by: ",c.a.createElement(o.a,{href:"https://www.gatsbyjs.org/"},"Gatsby.js")," and ",c.a.createElement(o.a,{href:"https://www.gatsbyjs.org/starters/codebushi/gatsby-starter-strata/"},"gatsby-strata")))))},t}(c.a.Component),l=a(147),p=a.n(l),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("header",{id:"header"},c.a.createElement("div",{className:"inner"},c.a.createElement("a",{href:"#header",className:"image avatar"},c.a.createElement("img",{src:p.a,alt:""})),c.a.createElement("h1",null,"Hi, I am ",c.a.createElement("strong",null,"Michał Michalczuk")),c.a.createElement("h2",null,"I build web, I speak about web"),c.a.createElement("h3",null,"Strongly web oriented Full-Stack developer and ",c.a.createElement(o.a,{href:"https://infoshareacademy.com/"},"IT trainer"))),c.a.createElement(i,null))},t}(c.a.Component),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return c.a.createElement("div",null,c.a.createElement(u,null),e)},t}(c.a.Component);t.a=m},163:function(e,t,a){e.exports=a.p+"static/Ja_Programista_Frontend_2019-23f50d073f4edf636e78ee93fd37a4fa.png"},164:function(e,t,a){e.exports=a.p+"static/boiling-frogs_2019-36a5e89da85119958b0d8f0ca1761bec.png"},165:function(e,t){e.exports="data:image/jpeg;base64,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"},166:function(e,t,a){e.exports=a.p+"static/3camp-packages_2016-1c2bca75296921baf6ba4360176c84c0.png"},167:function(e,t,a){e.exports=a.p+"static/across-stack-3_2018-faf465867d56548bda8c9e50e575177b.png"},168:function(e,t,a){e.exports=a.p+"static/across-stack-2_2018-226f2ede4a84678ad0524ecda02fbb52.png"},169:function(e,t,a){e.exports=a.p+"static/across-stack-1_2018-9c580e94f326c6ab64478e93632b7f73.png"},170:function(e,t,a){e.exports=a.p+"static/front-end-beginning_2019-415ba19b98db235bec0e2105fcfc8535.png"},171:function(e,t,a){e.exports=a.p+"static/webinar-full-stack_2018-20e662d5fd52532b8d31e0a91a12bd84.png"},172:function(e,t,a){e.exports=a.p+"static/just-join-it_co-hosting-2_2017-f1ab82d8da7a378661542b4d7ca9d7a6.png"},173:function(e,t,a){e.exports=a.p+"static/just-join-it_guest_2017-722ce712c181704bc9855bfd2d093b32.jpg"},174:function(e,t,a){e.exports=a.p+"static/just-join-it_co-hosting-1_2017-1ea1ea45318ed4cfbe57c4fe9d5a1420.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-7a8db14411fb375c17d0.js.map