(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{30:function(e,s,c){},31:function(e,s,c){},43:function(e,s,c){"use strict";c.r(s);var t=c(0),a=c(1),l=c.n(a),n=c(12),r=c.n(n),i=(c(30),c(4)),o=c.p+"static/media/Logo.ac6a4afc.svg",j=c.p+"static/media/logo--dark.3e9c97e6.svg",d=(c(31),c(14));var m=function(e){var s=Object(a.useState)("no"),c=Object(i.a)(s,2),l=c[0],n=c[1];return Object(t.jsxs)("div",{children:[Object(t.jsx)("h2",{children:"About you"}),Object(t.jsx)("div",{className:"Alert",children:Object(t.jsx)("p",{className:"flat",children:"You will notice we have prefilled information we already know about you."})}),Object(t.jsxs)("div",{className:"form",children:[Object(t.jsxs)("div",{className:"form__row",children:[Object(t.jsxs)("div",{className:"form__group",children:[Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Gender"}),Object(t.jsx)("div",{className:"form__select",children:Object(t.jsxs)("select",{id:"",name:"",className:"form__input form__input--prefilled form__input--select",children:[Object(t.jsx)("option",{value:"",children:"Male"}),Object(t.jsx)("option",{value:"",children:"Female"})]})})]}),Object(t.jsxs)("div",{className:"form__group",children:[Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Age"}),Object(t.jsx)("input",{type:"text",value:e.age,className:"form__input form__input--prefilled",onChange:function(s){return e.onSetAge(s)}})]})]}),Object(t.jsxs)("div",{className:"form__group",children:[Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Current super balance"}),Object(t.jsx)(d.a,{className:"form__input form__input--prefilled",value:e.superBalance,prefix:"$",precision:"0",onChange:function(s,c,t){return e.onSetSuper(c)}})]}),Object(t.jsxs)("div",{className:"form__group",children:[Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Annual salary (before tax)"}),Object(t.jsx)(d.a,{className:"form__input form__input--prefilled",value:e.salary,prefix:"$",precision:"0",onChange:function(s,c,t){return e.onSetSalary(c)}})]}),Object(t.jsx)("h2",{children:"Contributions"}),Object(t.jsxs)("div",{className:"form__row",children:[Object(t.jsxs)("div",{className:"form__group",children:[Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Employer contributions"}),Object(t.jsx)("input",{type:"text",value:"12%",className:"form__input form__input--prefilled"})]}),Object(t.jsxs)("div",{className:"form__group",children:[Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Standard"}),Object(t.jsx)("input",{type:"text",value:"6%",className:"form__input form__input--prefilled form__input--suffixed"}),Object(t.jsx)("span",{className:"form__suffix",children:"before tax"})]})]}),Object(t.jsxs)("div",{className:"form__row",children:[Object(t.jsxs)("div",{className:"form__group",children:[Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Voluntary (before tax)"}),Object(t.jsx)(d.a,{className:"form__input form__input--suffixed form__input--prefilled",value:e.contributions,prefix:"$",precision:"0",onChange:function(s,c,t){return e.onSetContributions(c)}}),Object(t.jsx)("span",{className:"form__suffix",children:"per month"})]}),Object(t.jsxs)("div",{className:"form__group",children:[Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Voluntary (after tax)"}),Object(t.jsx)("input",{type:"text",value:"$0",className:"form__input form__input--prefilled form__input--suffixed"}),Object(t.jsx)("span",{className:"form__suffix",children:"per month"})]})]})]}),Object(t.jsxs)("label",{className:"form__label form__label--checkbox flat",htmlFor:"includePartner",children:[Object(t.jsx)("input",{type:"checkbox",id:"includePartner",className:"form__checkbox",onChange:function(){return e.onPartnerInclude()}}),"Include my partner"]}),e.includePartner?Object(t.jsxs)("div",{className:"form",children:[Object(t.jsx)("hr",{}),Object(t.jsx)("h2",{children:"About your partner"}),Object(t.jsxs)("div",{className:"form__row",children:[Object(t.jsxs)("div",{className:"form__group",children:[Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Gender"}),Object(t.jsx)("div",{className:"form__select",children:Object(t.jsxs)("select",{id:"",name:"",className:"form__input form__input--select",children:[Object(t.jsx)("option",{value:"",children:"Male"}),Object(t.jsx)("option",{value:"",children:"Female"})]})})]}),Object(t.jsxs)("div",{className:"form__group",children:[Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Age"}),Object(t.jsx)("input",{type:"text",className:"form__input"})]})]}),Object(t.jsxs)("div",{className:"form__group",children:[Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Annual salary (before tax)"}),Object(t.jsx)("input",{type:"text",value:e.partnerSalary,className:"form__input form__input--suffixed"}),Object(t.jsx)("span",{className:"form__suffix",children:"per year"})]}),Object(t.jsxs)("div",{className:"form__group",children:[Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Current super balance"}),Object(t.jsx)("input",{type:"text",value:e.partnerSuper,className:"form__input"})]}),Object(t.jsx)("h2",{children:"Your partner's contributions"}),Object(t.jsxs)("div",{className:"form__group",children:[Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Employer contributions"}),Object(t.jsx)("input",{type:"text",value:"",className:"form__input form__input--suffixed"}),Object(t.jsx)("span",{className:"form__suffix",children:"per month"})]}),Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Does your partner make voluntary contributions?"}),Object(t.jsxs)("div",{className:"form__options",children:[Object(t.jsxs)("label",{className:"form__label form__label--radio",htmlFor:"includePartnerVol",onChange:function(){return n("yes")},children:[Object(t.jsx)("input",{type:"radio",value:"yes",checked:"yes"===l,id:"includePartnerVol",className:"form__checkbox"}),"Yes"]}),Object(t.jsxs)("label",{className:"form__label form__label--radio",htmlFor:"excludePartnerVol",onChange:function(){return n("no")},children:[Object(t.jsx)("input",{type:"radio",value:"no",checked:"no"===l,id:"excludePartnerVol",className:"form__checkbox"}),"No"]})]}),"yes"===l?Object(t.jsxs)("div",{children:[Object(t.jsxs)("div",{className:"form__group",children:[Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Voluntary (before tax)"}),Object(t.jsx)("input",{type:"text",value:"",className:"form__input"})]}),Object(t.jsxs)("div",{className:"form__group",children:[Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Voluntary (after tax)"}),Object(t.jsx)("input",{type:"text",value:"",className:"form__input"})]})]}):null]}):null]})},b=[{id:"shares",text:"Shares or managed funds",icon:"chart-line"},{id:"cash",text:"Cash",icon:"dollar"},{id:"investment",text:"Investment property",icon:"house"}];var h=function(e){var s=b.map((function(e){return Object(t.jsx)("option",{value:e.id,children:e.text},"selectoption-".concat(e.id))})),c=e.incomeSources.map((function(c,a){return Object(t.jsxs)("div",{className:"IncomeCard card",children:[Object(t.jsx)("i",{className:"far fa-times card__close",onClick:function(){return e.onSourceRemove(a)}}),Object(t.jsxs)("div",{className:"form__group",children:[Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Income source"}),Object(t.jsx)("div",{className:"form__select",children:Object(t.jsxs)("select",{id:"",name:"",className:"form__input form__input--select",children:[s,Object(t.jsx)("option",{value:"",children:"Other"})]})})]}),Object(t.jsxs)("div",{className:"form__group",children:[Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Value today"}),Object(t.jsx)("input",{type:"text",value:"",i:!0,placeholder:"Enter value",className:"form__input"})]})]})}));return Object(t.jsxs)("div",{children:[Object(t.jsx)("h2",{children:"Other income"}),Object(t.jsx)("p",{children:"If you have any other sources of income please add them below."}),Object(t.jsx)("div",{className:"OtherIncome__action",children:Object(t.jsxs)("button",{className:"btn btn--secondary",onClick:e.onAddingIncome,children:["Add another income source ",Object(t.jsx)("i",{className:"far fa-plus"})]})}),c.length>0&&Object(t.jsxs)("div",{children:[Object(t.jsxs)("h3",{children:[c.length," other source",c.length>1&&Object(t.jsx)("i",{children:"s"})]}),Object(t.jsx)("div",{className:"sources",children:c})]})]})},u=c(13),_=c.n(u);c(22);var x=function(e){var s=e.plans.map((function(s){return Object(t.jsxs)("label",{htmlFor:s.id,class:"Plan",children:[Object(t.jsx)("input",{type:"radio",class:"Plan__input",id:s.id,value:s.id,checked:e.activePlan===s.id,onChange:function(){return e.onSetPlan(s.id)}}),Object(t.jsx)("div",{className:"Plan__circle ".concat(s.id===e.activePlan?"Plan__circle--selected":"")}),Object(t.jsxs)("div",{className:"Plan__content",children:[Object(t.jsx)("strong",{className:"Plan__name",children:s.name}),Object(t.jsx)("small",{className:"Plan__description",children:s.description})]}),"custom"!==s.id&&Object(t.jsx)("i",{className:"fal fa-info-circle Plan__info",onClick:function(){return e.onInfoClick(s.id)}})]})}));return Object(t.jsxs)("div",{children:[Object(t.jsx)("p",{children:"Your current combined income is $200,000 per year. When choosing a retirement income take into account whether you will own your own home or still have kids to support."}),Object(t.jsxs)("div",{className:"form__slider form__slider--labels",children:[Object(t.jsxs)("label",{htmlFor:"",class:"form__label form__label--range",children:["Retirement age",Object(t.jsx)("strong",{children:e.retirementAge})]}),Object(t.jsx)(_.a,{min:50,max:80,labels:{50:"50",80:"80"},tooltip:!1,value:e.retirementAge,onChange:function(s){return e.onSetRetirementAge(s)}})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h2",{children:"Your ideal retirement"}),s,"custom"===e.activePlan&&Object(t.jsx)("div",{className:"IdealRetirement__custom",children:Object(t.jsx)("div",{className:"form",children:Object(t.jsxs)("div",{className:"form__group",children:[Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Custom retirement income"}),Object(t.jsx)("input",{type:"text",value:"$500,000",className:"form__input form__input--suffixed"}),Object(t.jsx)("span",{className:"form__suffix",children:"per year"})]})})})]})]})},O=[{id:"holiday",text:"Holiday",icon:"plane-departure"},{id:"inheritance",text:"Inheritance",icon:"sack-dollar"},{id:"medical",text:"Medical expense",icon:"users-medical"},{id:"car",text:"New car",icon:"car"},{id:"house",text:"Kid's house deposit",icon:"house"},{id:"gift",text:"Gift",icon:"gift"}];var f=function(e){var s=O.map((function(e){return Object(t.jsx)("option",{value:e.id,children:e.text},"selectoption-".concat(e.id))})),c=e.goals.map((function(c,a){return Object(t.jsxs)("div",{className:"GoalCard card",children:[Object(t.jsx)("i",{className:"far fa-times card__close",onClick:function(){return e.onGoalRemove(a)}}),Object(t.jsxs)("div",{className:"form__group",children:[Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Income source"}),Object(t.jsx)("div",{className:"form__select",children:Object(t.jsxs)("select",{id:"",name:"",className:"form__input form__input--select",children:[s,Object(t.jsx)("option",{value:"",children:"Other"})]})})]}),Object(t.jsxs)("div",{className:"form__group",children:[Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Cost"}),Object(t.jsx)("input",{type:"text",value:"",i:!0,placeholder:"Enter value",className:"form__input"})]}),Object(t.jsxs)("div",{className:"form__group",children:[Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"How often"}),Object(t.jsx)("div",{className:"form__select",children:Object(t.jsxs)("select",{id:"",name:"",className:"form__input form__input--select",children:[Object(t.jsx)("option",{value:"",children:"Once"}),Object(t.jsx)("option",{value:"",children:"Annually"}),Object(t.jsx)("option",{value:"",children:"Every two years"}),Object(t.jsx)("option",{value:"",children:"Every five years"})]})})]})]})}));return Object(t.jsxs)("div",{children:[Object(t.jsx)("h2",{children:"Your retirement goals"}),Object(t.jsx)("p",{children:"Add some retirement goals to help calculate how much you will need."}),Object(t.jsx)("div",{className:"RetirementGoals__action",children:Object(t.jsxs)("button",{className:"btn btn--secondary",onClick:e.onAddingGoal,children:["Add a retirement goals ",Object(t.jsx)("i",{className:"far fa-plus"})]})}),c.length>0&&Object(t.jsxs)("div",{children:[Object(t.jsxs)("h3",{children:[c.length," other source",c.length>1&&Object(t.jsx)("i",{children:"s"})]}),Object(t.jsx)("div",{className:"sources",children:c})]})]})},p=c(17);var v=function(e){var s=Object(a.useRef)(null);return Object(a.useEffect)((function(){setTimeout((function(){s.current.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),375)}),[]),Object(t.jsxs)("div",{className:"Results",children:[Object(t.jsxs)("div",{className:"Results__hero",children:[Object(t.jsxs)("div",{className:"Projected",children:[Object(t.jsx)("h2",{className:"Projected__title",children:"Projected super balance"}),Object(t.jsx)("p",{className:"Projected__range",children:"$1.3m - $1.6m"})]}),Object(t.jsxs)("div",{className:"Badges",children:[Object(t.jsx)("div",{className:"Badges__item",children:Object(t.jsxs)("div",{className:"Badge Badge--warning",children:[Object(t.jsx)("span",{className:"Badge__label",children:"Retire age"}),Object(t.jsx)("strong",{className:"Badge__age",children:"62"}),Object(t.jsx)("small",{className:"Badge__small",children:"72% chance of your money lasting*"})]})}),Object(t.jsx)("div",{className:"Badges__item",children:Object(t.jsxs)("div",{className:"Badge Badge--warning",children:[Object(t.jsx)("span",{className:"Badge__label",children:"Retire age"}),Object(t.jsx)("strong",{className:"Badge__age",children:"63"}),Object(t.jsx)("small",{className:"Badge__small",children:"72% chance of your money lasting*"})]})}),Object(t.jsx)("div",{className:"Badges__item",children:Object(t.jsxs)("div",{className:"Badge Badge--warning",children:[Object(t.jsx)("span",{className:"Badge__label",children:"Retire age"}),Object(t.jsx)("strong",{className:"Badge__age",children:"64"}),Object(t.jsx)("small",{className:"Badge__small",children:"72% chance of your money lasting*"})]})}),Object(t.jsx)("div",{className:"Badges__item",children:Object(t.jsxs)("div",{className:"Badge Badge--warning",children:[Object(t.jsx)("span",{className:"Badge__label",children:"Retire age"}),Object(t.jsx)("strong",{className:"Badge__age",children:"65"}),Object(t.jsx)("small",{className:"Badge__small",children:"72% chance of your money lasting*"})]})}),Object(t.jsx)("div",{className:"Badges__item",ref:s,children:Object(t.jsxs)("div",{className:"Badge",children:[Object(t.jsx)("span",{className:"Badge__label",children:"Retire age"}),Object(t.jsx)("strong",{className:"Badge__age",children:"66"}),Object(t.jsx)("small",{className:"Badge__small",children:"72% chance of your money lasting*"})]})}),Object(t.jsx)("div",{className:"Badges__item",children:Object(t.jsxs)("div",{className:"Badge",children:[Object(t.jsx)("span",{className:"Badge__label",children:"Retire age"}),Object(t.jsx)("strong",{className:"Badge__age",children:"67"}),Object(t.jsx)("small",{className:"Badge__small",children:"72% chance of your money lasting*"})]})}),Object(t.jsx)("div",{className:"Badges__item",children:Object(t.jsxs)("div",{className:"Badge",children:[Object(t.jsx)("span",{className:"Badge__label",children:"Retire age"}),Object(t.jsx)("strong",{className:"Badge__age",children:"68"}),Object(t.jsx)("small",{className:"Badge__small",children:"72% chance of your money lasting*"})]})}),Object(t.jsx)("div",{className:"Badges__item",children:Object(t.jsxs)("div",{className:"Badge",children:[Object(t.jsx)("span",{className:"Badge__label",children:"Retire age"}),Object(t.jsx)("strong",{className:"Badge__age",children:"69"}),Object(t.jsx)("small",{className:"Badge__small",children:"72% chance of your money lasting*"})]})}),Object(t.jsx)("div",{className:"Badges__item",children:Object(t.jsxs)("div",{className:"Badge",children:[Object(t.jsx)("span",{className:"Badge__label",children:"Retire age"}),Object(t.jsx)("strong",{className:"Badge__age",children:"70"}),Object(t.jsx)("small",{className:"Badge__small",children:"72% chance of your money lasting*"})]})}),Object(t.jsx)("div",{className:"Badges__item",children:Object(t.jsxs)("div",{className:"Badge",children:[Object(t.jsx)("span",{className:"Badge__label",children:"Retire age"}),Object(t.jsx)("strong",{className:"Badge__age",children:"71"}),Object(t.jsx)("small",{className:"Badge__small",children:"72% chance of your money lasting*"})]})})]})]}),Object(t.jsxs)("div",{className:"Results__body",children:[Object(t.jsx)("h2",{children:"Based off of what you told us"}),Object(t.jsxs)("div",{className:"form__slider",children:[Object(t.jsxs)("label",{htmlFor:"",class:"form__label form__label--range",children:["How much you need?",Object(t.jsxs)("strong",{children:[Object(t.jsx)(p.a,{value:e.reqIncome,displayType:"text",thousandSeparator:!0,prefix:"$"}),"\xa0pa"]})]}),Object(t.jsx)(_.a,{min:1e4,max:2e5,tooltip:!1,value:e.reqIncome,onChange:function(s){return e.onSetReqIncome(s)}})]}),Object(t.jsxs)("div",{className:"form__slider",children:[Object(t.jsxs)("label",{htmlFor:"",class:"form__label form__label--range",children:["Extra contributions",Object(t.jsxs)("strong",{children:[Object(t.jsx)(p.a,{value:e.contributions,displayType:"text",thousandSeparator:!0,prefix:"$"}),"\xa0month"]})]}),Object(t.jsx)(_.a,{min:0,max:2e3,tooltip:!1,value:e.contributions,onChange:function(s){return e.onSetContributions(s)}})]}),Object(t.jsx)("div",{className:"form__group",children:Object(t.jsx)("label",{className:"form__label",htmlFor:"",children:"Investment strategy (working)"})})]})]})},N=[{id:"holiday",text:"Holiday",icon:"plane-departure"},{id:"inheritance",text:"Inheritance",icon:"sack-dollar"},{id:"medical",text:"Medical expense",icon:"users-medical"},{id:"car",text:"New car",icon:"car"},{id:"house",text:"Kid's house deposit",icon:"house"},{id:"gift",text:"Gift",icon:"gift"}];var g=function(e){var s=N.map((function(s){return Object(t.jsxs)("li",{className:"btn btn--tertiary btn--block",onClick:function(){return e.onOptionClick(s)},children:[Object(t.jsx)("i",{className:"fa fa-".concat(s.icon)}),s.text]},"option-".concat(s.id))}));return Object(t.jsxs)("div",{className:"Modal__card",children:[Object(t.jsx)("div",{className:"Modal__content Modal__content--tight",children:Object(t.jsxs)("ul",{className:"Modal__list",children:[s,Object(t.jsxs)("li",{className:"btn btn--tertiary btn--block",children:[Object(t.jsx)("i",{className:"fa fa-plus"}),"Add your own"]})]})}),Object(t.jsx)("footer",{className:"Modal__footer",children:Object(t.jsx)("button",{className:"btn btn--secondary",onClick:e.onDismiss,children:"Cancel"})})]})},y=[{id:"shares",text:"Shares or managed funds",icon:"chart-line"},{id:"cash",text:"Cash",icon:"dollar"},{id:"investment",text:"Investment property",icon:"house"}];var k=function(e){var s=y.map((function(s){return Object(t.jsxs)("li",{className:"btn btn--tertiary btn--block",onClick:function(){return e.onOptionClick(s)},children:[Object(t.jsx)("i",{className:"fa fa-".concat(s.icon)}),s.text]},"option-".concat(s.id))}));return Object(t.jsxs)("div",{className:"Modal__card",children:[Object(t.jsx)("div",{className:"Modal__content Modal__content--tight",children:Object(t.jsxs)("ul",{className:"Modal__list",children:[s,Object(t.jsxs)("li",{className:"btn btn--tertiary btn--block",id:"other",children:[Object(t.jsx)("i",{className:"fa fa-coins"}),"Other"]})]})}),Object(t.jsx)("footer",{className:"Modal__footer",children:Object(t.jsx)("button",{className:"btn btn--secondary",onClick:e.onDismiss,children:"Cancel"})})]})};var S=function(e){return Object(t.jsxs)("div",{class:"Modal__card Modal__card--scrollable",children:[Object(t.jsxs)("div",{className:"Modal__scroll",children:[Object(t.jsx)("div",{className:"Modal__hero"}),Object(t.jsxs)("div",{className:"Modal__content",children:[Object(t.jsx)("h2",{class:"flat",children:"Simple retirement"}),Object(t.jsx)("p",{children:"$100,000 pa"}),Object(t.jsx)("p",{children:"A premium retirement lifestyle enables an older, healthy retiree to have a good standard of living through the purchase of such things as:"}),Object(t.jsx)("h3",{children:"Available lifestyle"}),Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:"A reasonable car"}),Object(t.jsx)("li",{children:"Occasional international travel"}),Object(t.jsx)("li",{children:"Private health"})]})]})]}),Object(t.jsx)("footer",{class:"Modal__footer",children:Object(t.jsx)("button",{class:"btn btn--secondary",onClick:e.onDismiss,children:"Okay, got it"})})]})};var C=function(e){return Object(t.jsxs)("div",{class:"Modal__card Modal__card--scrollable",children:[Object(t.jsxs)("div",{className:"Modal__scroll",children:[Object(t.jsx)("div",{className:"Modal__hero"}),Object(t.jsxs)("div",{className:"Modal__content",children:[Object(t.jsx)("h2",{class:"flat",children:"Modest retirement"}),Object(t.jsx)("p",{children:"$27,902 pa"}),Object(t.jsx)("p",{children:"A modest retirement lifestyle enables an older, healthy retiree to have a good standard of living through the purchase of such things as:"}),Object(t.jsx)("h3",{children:"Available lifestyle"}),Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:"A reasonable car"}),Object(t.jsx)("li",{children:"Occasional international travel"}),Object(t.jsx)("li",{children:"Private health"})]})]})]}),Object(t.jsx)("footer",{class:"Modal__footer",children:Object(t.jsx)("button",{class:"btn btn--secondary",onClick:e.onDismiss,children:"Okay, got it"})})]})};var B=function(e){return Object(t.jsxs)("div",{class:"Modal__card Modal__card--scrollable",children:[Object(t.jsxs)("div",{className:"Modal__scroll",children:[Object(t.jsx)("div",{className:"Modal__hero"}),Object(t.jsxs)("div",{className:"Modal__content",children:[Object(t.jsx)("h2",{class:"flat",children:"Comfortable retirement"}),Object(t.jsx)("p",{children:"$43,687 pa"}),Object(t.jsx)("p",{children:"A comfortable retirement lifestyle enables an older, healthy retiree to have a good standard of living through the purchase of such things as:"}),Object(t.jsx)("h3",{children:"Available lifestyle"}),Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:"A reasonable car"}),Object(t.jsx)("li",{children:"Occasional international travel"}),Object(t.jsx)("li",{children:"Private health"})]})]})]}),Object(t.jsx)("footer",{class:"Modal__footer",children:Object(t.jsx)("button",{class:"btn btn--secondary",onClick:e.onDismiss,children:"Okay, got it"})})]})};var w=function(e){return Object(t.jsxs)("div",{class:"Modal__card Modal__card--scrollable",children:[Object(t.jsxs)("div",{className:"Modal__scroll",children:[Object(t.jsx)("div",{className:"Modal__hero"}),Object(t.jsxs)("div",{className:"Modal__content",children:[Object(t.jsx)("h2",{class:"flat",children:"Premium retirement"}),Object(t.jsx)("p",{children:"$100,000 pa"}),Object(t.jsx)("p",{children:"A premium retirement lifestyle enables an older, healthy retiree to have a good standard of living through the purchase of such things as:"}),Object(t.jsx)("h3",{children:"Available lifestyle"}),Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:"A reasonable car"}),Object(t.jsx)("li",{children:"Occasional international travel"}),Object(t.jsx)("li",{children:"Private health"})]})]})]}),Object(t.jsx)("footer",{class:"Modal__footer",children:Object(t.jsx)("button",{class:"btn btn--secondary",onClick:e.onDismiss,children:"Okay, got it"})})]})};var M=function(e){return Object(t.jsx)("div",{className:"Modal ".concat(e.open?"Modal--open":""),children:{goals:Object(t.jsx)(g,{onOptionClick:function(s){return e.onGoalClick(s)},onDismiss:e.onDismiss}),income:Object(t.jsx)(k,{onOptionClick:function(s){return e.onIncomeClick(s)},onDismiss:e.onDismiss}),simple:Object(t.jsx)(S,{onDismiss:e.onDismiss}),modest:Object(t.jsx)(C,{onDismiss:e.onDismiss}),comfy:Object(t.jsx)(B,{onDismiss:e.onDismiss}),premium:Object(t.jsx)(w,{onDismiss:e.onDismiss})}[e.active]})},A=c(2),F=c(9),P=c(20),I=[{id:"simple",name:"Simple",description:"Age pension",value:15e3},{id:"modest",name:"Modest",description:"$27,902 pa",value:27902},{id:"comfy",name:"Comfortable",description:"$43,687 pa",value:43687},{id:"premium",name:"Premium",description:"$100,000 pa",value:1e5},{id:"custom",name:"Custom",description:"Enter your own",value:null}],R=[{name:"Where you're at",completed:!1,helperText:"General income and super balance",sections:["/step/current/about-you","/step/current/other-income"]},{name:"Where you want to be",completed:!1,helperText:"Financial and lifestyle goals",sections:["/step/future/ideal-retirement","/step/future/retirement-goals"]},{name:"When you will get there",completed:!1,helperText:"Retirement age to achieve your goals",sections:["/step/results"]}];var D=function(){var e,s=Object(A.g)(),c=Object(A.f)(),l=Object(a.useState)(0),n=Object(i.a)(l,2),r=n[0],d=n[1],b=Object(a.useState)(0),u=Object(i.a)(b,2),_=u[0],O=u[1],p=Object(a.useState)(null),N=Object(i.a)(p,2),g=N[0],y=N[1],k=Object(a.useState)(!1),S=Object(i.a)(k,2),C=S[0],B=S[1],w=Object(a.useState)(!1),D=Object(i.a)(w,2),$=D[0],G=D[1],E=Object(a.useState)(!1),T=Object(i.a)(E,2),V=T[0],W=T[1],q=Object(a.useState)(""),H=Object(i.a)(q,2),Y=H[0],L=H[1],J=Object(a.useState)(I[0]),K=Object(i.a)(J,2),z=K[0],Q=K[1],U=Object(a.useState)(58),X=Object(i.a)(U,2),Z=X[0],ee=X[1],se=Object(a.useState)(66),ce=Object(i.a)(se,2),te=ce[0],ae=ce[1],le=Object(a.useState)(5e5),ne=Object(i.a)(le,2),re=ne[0],ie=ne[1],oe=Object(a.useState)(15e4),je=Object(i.a)(oe,2),de=je[0],me=je[1],be=Object(a.useState)([]),he=Object(i.a)(be,2),ue=he[0],_e=he[1],xe=Object(a.useState)([]),Oe=Object(i.a)(xe,2),fe=Oe[0],pe=Oe[1],ve=Object(a.useState)(z.value),Ne=Object(i.a)(ve,2),ge=Ne[0],ye=Ne[1],ke=Object(a.useState)(150),Se=Object(i.a)(ke,2),Ce=Se[0],Be=Se[1];function we(){R[r].completed=!0,d(r+1),O(0)}function Me(e){B("true"),L(e)}Object(a.useEffect)((function(){y(window.innerHeight)}),[]),Object(a.useEffect)((function(){"/calculator/"===s.pathname||"/"===s.pathname?W(!1):"/"===s.path||V||W(!0)}),[s,V]),Object(a.useEffect)((function(){window.innerWidth>768&&c.push(R[0].sections[0]),y(window.innerHeight)}),[c]),e=r+1===R.length?Object(t.jsx)(F.b,{to:"/completed",className:"btn",children:"Complete"}):_+1>=R[r].sections.length?Object(t.jsxs)("div",{children:[Object(t.jsx)("div",{className:"show-desktop",children:Object(t.jsx)(F.b,{onClick:we,to:R[r+1].sections[0],className:"btn",children:"Save"})}),Object(t.jsx)("div",{className:"show-mobile",children:Object(t.jsx)(F.b,{onClick:we,to:"/",className:"btn",children:"Save"})})]}):Object(t.jsx)(F.b,{onClick:function(){return O(_+1)},to:R[r].sections[_+1],className:"btn",children:"Next"});var Ae=R.map((function(e,s){var c=P({Nav__link:!0,"Nav__link--active":r===s,"Nav__link--completed":e.completed});return Object(t.jsx)("li",{children:e.completed||r===s?Object(t.jsxs)(F.b,{to:R[s].sections[0],onClick:function(){return d(s)},className:c,children:[e.completed?Object(t.jsx)("div",{className:"Nav__counter Nav__counter--checked",children:Object(t.jsx)("i",{className:"far fa-check"})}):Object(t.jsx)("div",{className:"Nav__counter",children:s+1}),Object(t.jsxs)("div",{children:[Object(t.jsx)("strong",{children:e.name}),Object(t.jsx)("small",{children:e.helperText})]}),Object(t.jsx)("i",{className:"far fa-chevron-right Nav__icon"})]}):Object(t.jsxs)("div",{className:c,children:[e.completed?Object(t.jsx)("div",{className:"Nav__counter Nav__counter--checked",children:Object(t.jsx)("i",{className:"far fa-check"})}):Object(t.jsx)("div",{className:"Nav__counter",children:s+1}),Object(t.jsxs)("div",{children:[Object(t.jsx)("strong",{children:e.name}),Object(t.jsx)("small",{children:e.helperText})]}),Object(t.jsx)("i",{className:"far fa-chevron-right Nav__icon"})]})},"step-".concat(s))}));return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)("header",{className:"App__header",children:Object(t.jsx)("img",{src:j,alt:"",className:"App__logo"})}),Object(t.jsxs)("nav",{className:"Nav",style:{height:g},children:[Object(t.jsxs)("header",{className:"Nav__header",children:[Object(t.jsx)("img",{src:o,alt:"",className:"Nav__logo"}),Object(t.jsxs)("div",{className:"Nav__blurb",children:[Object(t.jsx)("h1",{className:"Nav__title",children:"Got a gap?"}),Object(t.jsx)("p",{children:"To effectively plan for life after work, you should understand how much you need and if you have a gap. This tool will help you identify and make the required adjustments to effectively plan for life after work."})]})]}),Object(t.jsx)("footer",{className:"Nav__footer",children:Object(t.jsx)("div",{className:"Nav__content",children:Object(t.jsx)("ul",{className:"Nav__steps",children:Ae})})})]}),Object(t.jsx)("main",{className:"Slides ".concat(s.pathname.includes("/step")?"Slides--open":""),style:{height:g},children:Object(t.jsx)("div",{className:"Slides__wrap",style:{height:g},children:Object(t.jsxs)(A.c,{children:[Object(t.jsx)(A.a,{path:"/step/current",children:Object(t.jsx)("section",{className:"Slides__slide",children:Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)("h1",{className:"Slides__title",children:"Where you're at"}),Object(t.jsxs)(A.c,{children:[Object(t.jsx)(A.a,{path:"/step/current/about-you",children:Object(t.jsx)(m,{age:Z,includePartner:$,contributions:Ce,superBalance:re,salary:de,onPartnerInclude:function(){return G(!$)},onSetAge:function(e){return ee(e)},onSetContributions:function(e){return Be(e)},onSetSuper:function(e){return ie(e)},onSetSalary:function(e){return me(e)}})}),Object(t.jsx)(A.a,{path:"/step/current/other-income",children:Object(t.jsx)(h,{incomeSources:ue,onSourceRemove:function(e){return function(e){var s=ue.filter((function(s,c){return c!==e}));_e(s),B(!1)}(e)},onAddingIncome:function(){return Me("income")}})})]})]})})}),Object(t.jsx)(A.a,{path:"/step/future",children:Object(t.jsx)("section",{className:"Slides__slide",children:Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)("h1",{className:"Slides__title",children:"Where you want to be"}),Object(t.jsxs)(A.c,{children:[Object(t.jsx)(A.a,{path:"/step/future/ideal-retirement",children:Object(t.jsx)(x,{onSetPlan:function(e){return function(e){var s=function(e,s,c){for(var t=0;t<e.length;t+=1)if(e[t][s]===c)return t;return-1}(I,"id",e);Q(I[s])}(e)},onSetRetirementAge:function(e){return ae(e)},retirementAge:te,activePlan:z.id,plans:I,onInfoClick:function(e){return Me(e)}})}),Object(t.jsx)(A.a,{path:"/step/future/retirement-goals",children:Object(t.jsx)(f,{goals:fe,onGoalRemove:function(e){return function(e){var s=fe.filter((function(s,c){return c!==e}));pe(s),B(!1)}(e)},onAddingGoal:function(){return Me("goals")}})})]})]})})}),Object(t.jsx)(A.a,{path:"/step/results",children:Object(t.jsx)("section",{className:"Slides__slide",children:Object(t.jsx)("div",{className:"container",children:Object(t.jsx)(v,{reqIncome:ge,contributions:Ce,onSetReqIncome:function(e){return ye(e)},onSetContributions:function(e){return Be(e)}})})})})]})})}),Object(t.jsx)("footer",{className:"Slides__footer ".concat(V?"Slides__footer--visible":""),children:Object(t.jsxs)("div",{className:"container",children:[_<1?Object(t.jsx)(F.b,{to:"/",className:"Slides__back ".concat(0===r&&0===_?"Slides__back--first":""),children:Object(t.jsx)("i",{className:"far fa-chevron-left"})}):Object(t.jsx)(F.b,{onClick:function(){return O(_-1)},to:R[r].sections[_-1],className:"Slides__back",children:Object(t.jsx)("i",{className:"far fa-chevron-left"})}),Object(t.jsx)("div",{children:e})]})}),Object(t.jsx)(M,{onIncomeClick:function(e){return function(e){var s=ue;s.push(e),_e(s),B(!1)}(e)},onGoalClick:function(e){return function(e){fe.push(e),pe(fe),B(!1)}(e)},active:Y,open:C,onDismiss:function(){return B(!1)}})]})},$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(s){var c=s.getCLS,t=s.getFID,a=s.getFCP,l=s.getLCP,n=s.getTTFB;c(e),t(e),a(e),l(e),n(e)}))};r.a.render(Object(t.jsx)(l.a.StrictMode,{children:Object(t.jsx)(F.a,{children:Object(t.jsx)(D,{})})}),document.getElementById("root")),$()}},[[43,1,2]]]);
//# sourceMappingURL=main.5d6e8a0a.chunk.js.map