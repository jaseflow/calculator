(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},31:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),l=s.n(a),n=s(16),i=s.n(n),r=(s(23),s(10)),o=s.p+"static/media/Logo.ac6a4afc.svg",j=(s(24),s(2)),d=s(7),h=s(25),m=[{name:"Where you're at",completed:!1,helperText:"General income and super balance",sections:["/step/current/about-you","/step/current/other-income"]},{name:"Where you want to be",completed:!1,helperText:"Financial and lifestyle goals",sections:["/step/future/ideal-retirement","/step/future/retirement-goals"]},{name:"When you will get there",completed:!1,helperText:"Retirement age to achieve your goals",sections:["/step/results"]}];var b=function(){var e=Object(j.g)(),t=(Object(j.f)(),Object(a.useState)(0)),s=Object(r.a)(t,2),l=s[0],n=s[1],i=Object(a.useState)(0),b=Object(r.a)(i,2),u=b[0],x=b[1],O=Object(a.useState)(null),p=Object(r.a)(O,2),f=p[0],_=p[1];function N(){m[l].completed=!0,n(l+1),x(0)}var v=m.map((function(e,t){var s=h({Nav__link:!0,"Nav__link--active":l===t,"Nav__link--completed":e.completed});return Object(c.jsx)("li",{children:e.completed||l===t?Object(c.jsxs)(d.b,{to:m[t].sections[0],onClick:function(){return n(t)},className:s,children:[Object(c.jsx)("strong",{children:e.name}),Object(c.jsx)("small",{children:e.helperText}),e.completed?Object(c.jsx)("i",{className:"far fa-check Nav__icon Nav__icon--tick"}):Object(c.jsx)("i",{className:"far fa-chevron-right Nav__icon"})]}):Object(c.jsxs)("div",{className:s,children:[Object(c.jsx)("strong",{children:e.name}),Object(c.jsx)("small",{children:e.helperText}),Object(c.jsx)("i",{className:"far fa-chevron-right Nav__icon"})]})},"step-".concat(t))}));return Object(a.useEffect)((function(){_(window.innerHeight)}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("nav",{className:"Nav",style:{height:f},children:[Object(c.jsxs)("header",{className:"Nav__header",children:[Object(c.jsx)("img",{src:o,alt:""}),Object(c.jsxs)("div",{className:"Nav__blurb",children:[Object(c.jsx)("h1",{className:"Nav__title",children:"Got a gap?"}),Object(c.jsx)("p",{children:"To effectively plan for life after work, you should understand how much you need and if you have a gap. This tool will help you identify and make the required adjustments to create the future you want."}),Object(c.jsxs)("p",{children:[Object(c.jsx)("i",{style:{marginRight:"0.5rem"},className:"far fa-stopwatch"}),Object(c.jsx)("strong",{children:"Takes approximately 15 minutes"})]})]})]}),Object(c.jsx)("footer",{className:"Nav__footer",children:Object(c.jsx)("div",{className:"Nav__content",children:Object(c.jsx)("ul",{className:"Nav__steps",children:v})})})]}),Object(c.jsxs)("main",{className:"Slides ".concat(e.pathname.includes("/step")?"Slides--open":""),style:{height:f},children:[Object(c.jsx)("div",{className:"Slides__wrap",style:{height:f},children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/step/current",children:Object(c.jsx)("section",{className:"Slides__slide",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{children:"Where you're at"}),Object(c.jsxs)(j.c,{children:[Object(c.jsxs)(j.a,{path:"/step/current/about-you",children:[Object(c.jsx)("h2",{children:"About you"}),Object(c.jsx)("p",{children:"You will notice we have prefilled information we lready know about you."}),Object(c.jsxs)("div",{className:"form",children:[Object(c.jsxs)("div",{className:"form__row",children:[Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Age"}),Object(c.jsx)("input",{type:"text",value:"58",className:"form__input form__input--suffixed"}),Object(c.jsx)("span",{className:"form__suffix",children:"years old"})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"My salary before tax is"}),Object(c.jsx)("input",{type:"text",value:"$150,000",className:"form__input form__input--suffixed"}),Object(c.jsx)("span",{className:"form__suffix",children:"per year"})]})]}),Object(c.jsxs)("div",{className:"form__row",children:[Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"My current super balance is"}),Object(c.jsx)("input",{type:"text",value:"$500,000",className:"form__input"})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Extra contributions"}),Object(c.jsx)("input",{type:"text",value:"$300",className:"form__input form__input--suffixed"}),Object(c.jsx)("span",{className:"form__suffix",children:"per month"})]})]})]})]}),Object(c.jsxs)(j.a,{path:"/step/current/other-income",children:[Object(c.jsx)("h2",{children:"Other income"}),Object(c.jsx)("p",{children:"If you have any other sources of income plesae add them below."}),Object(c.jsxs)("button",{className:"btn btn--secondary",children:["Add another income source ",Object(c.jsx)("i",{className:"far fa-plus"})]})]})]})]})})}),Object(c.jsx)(j.a,{path:"/step/future",children:Object(c.jsx)("section",{className:"Slides__slide",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{children:"Where you want to be"}),Object(c.jsxs)(j.c,{children:[Object(c.jsxs)(j.a,{path:"/step/future/ideal-retirement",children:[Object(c.jsx)("h2",{children:"Your ideal retirement"}),Object(c.jsx)("p",{children:"Your current combined income is $200,000 per year. When choosing a retirement income take into account whether you will own your own home or still have kids to support."})]}),Object(c.jsxs)(j.a,{path:"/step/future/retirement-goals",children:[Object(c.jsx)("h2",{children:"Your retirement goals"}),Object(c.jsx)("p",{children:"Add some retirement goals to help calculate how much you will need."}),Object(c.jsxs)("button",{className:"btn btn--secondary",children:["Add a retirement goals ",Object(c.jsx)("i",{className:"far fa-plus"})]})]})]})]})})}),Object(c.jsx)(j.a,{path:"/step/results",children:Object(c.jsx)("section",{className:"Slides__slide",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{children:"Results"}),Object(c.jsx)("p",{children:"Elit amet vel fuga sint doloremque? Laborum quo ea itaque aliquam animi? Dignissimos fuga quas modi repellat sit? Odit incidunt sunt autem eos possimus Esse illo nisi culpa tenetur temporibus"})]})})})]})}),Object(c.jsx)("footer",{className:"Slides__footer",children:Object(c.jsxs)("div",{className:"container",children:[u<1?Object(c.jsx)(d.b,{to:"/",className:"Slides__back",children:Object(c.jsx)("i",{className:"far fa-chevron-left"})}):Object(c.jsx)(d.b,{onClick:function(){return x(u-1)},to:m[l].sections[u-1],className:"Slides__back",children:Object(c.jsx)("i",{className:"far fa-chevron-left"})}),u+1>=m[l].sections.length?Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"show-desktop",children:Object(c.jsx)(d.b,{onClick:N,to:m[l+1].sections[0],className:"btn",children:"Save"})}),Object(c.jsx)("div",{className:"show-mobile",children:Object(c.jsx)(d.b,{onClick:N,to:"/",className:"btn",children:"Save"})})]}):Object(c.jsx)(d.b,{onClick:function(){return x(u+1)},to:m[l].sections[u+1],className:"btn",children:"Next"})]})})]})]})},u=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,32)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),l(e),n(e)}))};i.a.render(Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(d.a,{children:Object(c.jsx)(b,{})})}),document.getElementById("root")),u()}},[[31,1,2]]]);
//# sourceMappingURL=main.f53df847.chunk.js.map