(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{29:function(e,t,s){},30:function(e,t,s){},36:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),l=s.n(a),n=s(22),r=s.n(n),i=(s(29),s(2)),o=s.p+"static/media/Logo.ac6a4afc.svg",j=s.p+"static/media/logo--dark.3e9c97e6.svg",d=(s(30),s(11)),m=s.n(d);var b=function(e){var t=Object(a.useState)("no"),s=Object(i.a)(t,2),l=s[0],n=s[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"About you"}),Object(c.jsx)("div",{className:"Alert",children:Object(c.jsx)("p",{className:"flat",children:"You will notice we have prefilled information we already know about you."})}),Object(c.jsxs)("div",{className:"form",children:[Object(c.jsxs)("div",{className:"form__row",children:[Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Gender"}),Object(c.jsx)("div",{className:"form__select",children:Object(c.jsxs)("select",{id:"",name:"",className:"form__input form__input--prefilled form__input--select",children:[Object(c.jsx)("option",{value:"",children:"Male"}),Object(c.jsx)("option",{value:"",children:"Female"})]})})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Age"}),Object(c.jsx)("input",{type:"text",value:e.age,className:"form__input form__input--prefilled",onChange:function(t){return e.onSetAge(t)}})]})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"super",children:"Current super balance"}),Object(c.jsx)(m.a,{id:"super",prefix:"$",className:"form__input form__input--prefilled form__input--suffixed",allowDecimals:!1,defaultValue:e.superBalance,onChange:function(t){return e.onSetSuper(t)}}),Object(c.jsx)("span",{className:"form__suffix",children:"as of 21 Nov 2020"})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"slary",children:"Annual salary (before tax)"}),Object(c.jsx)(m.a,{id:"salary",prefix:"$",className:"form__input form__input--prefilled",allowDecimals:!1,defaultValue:e.salary,onChange:function(t){return e.onSetSalary(t)}})]}),Object(c.jsx)("h2",{children:"Contributions"}),Object(c.jsxs)("div",{className:"form__row--desktop",children:[Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Employer contributions"}),Object(c.jsx)("input",{type:"text",value:"12%",className:"form__input form__input--prefilled"})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Standard"}),Object(c.jsx)("input",{type:"text",value:"6%",className:"form__input form__input--prefilled form__input--suffixed"}),Object(c.jsx)("span",{className:"form__suffix",children:"before tax"})]})]}),Object(c.jsxs)("div",{className:"form__row",children:[Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"contributions",children:"Voluntary (before tax)"}),Object(c.jsx)(m.a,{id:"contributions",prefix:"$",className:"form__input form__input--prefilled",allowDecimals:!1,defaultValue:e.contributions,onChange:function(t){return e.onSetContributions(t)}}),Object(c.jsx)("span",{className:"form__suffix",children:"per month"})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Voluntary (after tax)"}),Object(c.jsx)("input",{type:"text",value:"$0",className:"form__input form__input--prefilled form__input--suffixed"}),Object(c.jsx)("span",{className:"form__suffix",children:"per month"})]})]})]}),Object(c.jsxs)("label",{className:"form__label form__label--checkbox flat",htmlFor:"includePartner",children:[Object(c.jsx)("input",{type:"checkbox",id:"includePartner",className:"form__checkbox",onChange:function(){return e.onPartnerInclude()}}),"Include my partner"]}),e.includePartner?Object(c.jsxs)("div",{className:"form",children:[Object(c.jsx)("hr",{}),Object(c.jsx)("h2",{children:"About your partner"}),Object(c.jsxs)("div",{className:"form__row",children:[Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Gender"}),Object(c.jsx)("div",{className:"form__select",children:Object(c.jsxs)("select",{id:"",name:"",className:"form__input form__input--select",children:[Object(c.jsx)("option",{value:"",children:"Male"}),Object(c.jsx)("option",{value:"",children:"Female"})]})})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Age"}),Object(c.jsx)("input",{type:"text",className:"form__input"})]})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Annual salary (before tax)"}),Object(c.jsx)("input",{type:"text",value:e.partnerSalary,className:"form__input form__input--suffixed"}),Object(c.jsx)("span",{className:"form__suffix",children:"per year"})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Current super balance"}),Object(c.jsx)("input",{type:"text",value:e.partnerSuper,className:"form__input"})]}),Object(c.jsx)("h2",{children:"Your partner's contributions"}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Employer contributions"}),Object(c.jsx)("input",{type:"text",value:"",className:"form__input form__input--suffixed"}),Object(c.jsx)("span",{className:"form__suffix",children:"per month"})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Does your partner make voluntary contributions?"}),Object(c.jsxs)("div",{className:"form__options",children:[Object(c.jsxs)("label",{className:"form__label form__label--radio",htmlFor:"includePartnerVol",onChange:function(){return n("yes")},children:[Object(c.jsx)("input",{type:"radio",value:"yes",checked:"yes"===l,id:"includePartnerVol",className:"form__checkbox"}),"Yes"]}),Object(c.jsxs)("label",{className:"form__label form__label--radio",htmlFor:"excludePartnerVol",onChange:function(){return n("no")},children:[Object(c.jsx)("input",{type:"radio",value:"no",checked:"no"===l,id:"excludePartnerVol",className:"form__checkbox"}),"No"]})]})]}),"yes"===l?Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Voluntary (before tax)"}),Object(c.jsx)("input",{type:"text",value:"",className:"form__input"})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Voluntary (after tax)"}),Object(c.jsx)("input",{type:"text",value:"",className:"form__input"})]})]}):null]}):null]})},u=[{id:"shares",text:"Shares or managed funds",icon:"chart-line"},{id:"cash",text:"Cash",icon:"dollar"},{id:"investment",text:"Investment property",icon:"house"}];var h=function(e){var t=u.map((function(e){return Object(c.jsx)("option",{value:e.id,children:e.text},"selectoption-".concat(e.id))})),s=e.incomeSources.map((function(s,a){return Object(c.jsxs)("div",{className:"IncomeCard card",children:[Object(c.jsx)("i",{className:"far fa-times card__close",onClick:function(){return e.onSourceRemove(a)}}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Income source"}),Object(c.jsx)("div",{className:"form__select",children:Object(c.jsx)("select",{id:"",name:"",className:"form__input form__input--select",autofocus:!0,children:t})})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Value today"}),Object(c.jsx)(m.a,{id:"super",prefix:"$",className:"form__input",allowDecimals:!1,placholder:"Enter value",onChange:function(t){return e.onSetIncomeValue(t)}})]}),"investment"===s.id&&Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Income"}),Object(c.jsxs)("div",{className:"form__row",children:[Object(c.jsx)("input",{type:"text",value:"",i:!0,placeholder:"Enter value",className:"form__input"}),Object(c.jsxs)("select",{id:"",name:"",children:[Object(c.jsx)("option",{value:"weekly",children:"per week"}),Object(c.jsx)("option",{value:"weekly",children:"per month"})]})]})]})]})}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Other income"}),0===s.length?Object(c.jsx)("p",{children:"If you have any other sources of income please add them below."}):Object(c.jsx)("div",{className:"sources",children:s}),Object(c.jsx)("div",{className:"OtherIncome__action",children:Object(c.jsxs)("button",{className:"btn btn--secondary",onClick:function(){return e.onAddingIncome(u[0])},children:["Add another income source ",Object(c.jsx)("i",{className:"far fa-plus"})]})})]})},x=s(12),_=s.n(x);s(20);var O=function(e){var t=e.plans.map((function(t){return Object(c.jsxs)("label",{htmlFor:t.id,class:"Plan",children:[Object(c.jsx)("input",{type:"radio",class:"Plan__input",id:t.id,value:t.id,checked:e.activePlan===t.id,onChange:function(){return e.onSetPlan(t.id)}}),Object(c.jsx)("div",{className:"Plan__circle ".concat(t.id===e.activePlan?"Plan__circle--selected":"")}),Object(c.jsxs)("div",{className:"Plan__content",children:[Object(c.jsx)("strong",{className:"Plan__name",children:t.name}),Object(c.jsx)("small",{className:"Plan__description",children:t.description})]}),"custom"!==t.id&&Object(c.jsx)("i",{className:"fal fa-info-circle Plan__info",onClick:function(){return e.onInfoClick(t.id)}})]})}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"Your current combined income is $200,000 per year. When choosing a retirement income take into account whether you will own your own home or still have kids to support."}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Your ideal retirement"}),t,"custom"===e.activePlan&&Object(c.jsx)("div",{className:"IdealRetirement__custom",children:Object(c.jsx)("div",{className:"form",children:Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Custom retirement income"}),Object(c.jsx)("input",{type:"text",value:"$500,000",className:"form__input form__input--suffixed"}),Object(c.jsx)("span",{className:"form__suffix",children:"per year"})]})})})]})]})},f=[{id:"holiday",text:"Holiday",icon:"plane-departure"},{id:"inheritance",text:"Inheritance",icon:"sack-dollar"},{id:"medical",text:"Medical expense",icon:"users-medical"},{id:"car",text:"New car",icon:"car"},{id:"house",text:"Kid's house deposit",icon:"house"},{id:"gift",text:"Gift",icon:"gift"}];var p=function(e){var t=f.map((function(e){return Object(c.jsx)("option",{value:e.id,children:e.text},"selectoption-".concat(e.id))})),s=e.goals.map((function(s,a){return Object(c.jsxs)("div",{className:"GoalCard card",children:[Object(c.jsx)("i",{className:"far fa-times card__close",onClick:function(){return e.onGoalRemove(a)}}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Income source"}),Object(c.jsx)("div",{className:"form__select",children:Object(c.jsxs)("select",{id:"",name:"",className:"form__input form__input--select",children:[t,Object(c.jsx)("option",{value:"",children:"Other"})]})})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Cost"}),Object(c.jsx)("input",{type:"text",value:"",i:!0,placeholder:"Enter value",className:"form__input"})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"How often"}),Object(c.jsx)("div",{className:"form__select",children:Object(c.jsxs)("select",{id:"",name:"",className:"form__input form__input--select",children:[Object(c.jsx)("option",{value:"",children:"Once"}),Object(c.jsx)("option",{value:"",children:"Annually"}),Object(c.jsx)("option",{value:"",children:"Every two years"}),Object(c.jsx)("option",{value:"",children:"Every five years"})]})})]})]})}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Your retirement goals"}),0===s.length?Object(c.jsx)("p",{children:"Add some retirement goals to help calculate how much you will need."}):Object(c.jsx)("div",{className:"sources",children:s}),Object(c.jsx)("div",{className:"RetirementGoals__action",children:Object(c.jsxs)("button",{className:"btn btn--secondary",onClick:e.onAddingGoal,children:["Add a retirement goals ",Object(c.jsx)("i",{className:"far fa-plus"})]})})]})};s(36);var v=function(e){var t=e.radius-e.stroke,s=2*t*Math.PI,a=s-e.progress/100*s;return Object(c.jsxs)("svg",{class:"Pie",height:2*e.radius,width:2*e.radius,children:[Object(c.jsx)("circle",{stroke:"#bbb",fill:"white","stroke-width":e.stroke,r:100,cx:e.radius,cy:e.radius}),Object(c.jsx)("circle",{class:"Pie__circle",stroke:"#7FC241",fill:"transparent",strokeDasharray:s+" "+s,style:{strokeDashoffset:a},"stroke-width":e.stroke,r:t,cx:e.radius,cy:e.radius})]})},N=s(13),g=[{id:"holiday",text:"Holiday",icon:"plane-departure"},{id:"inheritance",text:"Inheritance",icon:"sack-dollar"},{id:"medical",text:"Medical expense",icon:"users-medical"},{id:"car",text:"New car",icon:"car"},{id:"house",text:"Kid's house deposit",icon:"house"},{id:"gift",text:"Gift",icon:"gift"}],y={1:"Defensive",2:"Stable",3:"Balanced",4:"Div Growth",5:"Aggressive"};var k=function(e){var t=g.map((function(e){return Object(c.jsx)("option",{value:e.id,children:e.text},"selectoption-".concat(e.id))})),s=e.goals.map((function(s,a){return Object(c.jsxs)("div",{className:"GoalCard card",children:[Object(c.jsx)("i",{className:"far fa-times card__close",onClick:function(){return e.onGoalRemove(a)}}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Income source"}),Object(c.jsx)("div",{className:"form__select",children:Object(c.jsxs)("select",{id:"",name:"",className:"form__input form__input--select",children:[t,Object(c.jsx)("option",{value:"",children:"Other"})]})})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"Cost"}),Object(c.jsx)("input",{type:"text",value:"",i:!0,placeholder:"Enter value",className:"form__input"})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"",children:"How often"}),Object(c.jsx)("div",{className:"form__select",children:Object(c.jsxs)("select",{id:"",name:"",className:"form__input form__input--select",children:[Object(c.jsx)("option",{value:"",children:"Once"}),Object(c.jsx)("option",{value:"",children:"Annually"}),Object(c.jsx)("option",{value:"",children:"Every two years"}),Object(c.jsx)("option",{value:"",children:"Every five years"})]})})]})]})}));return Object(c.jsxs)("div",{className:"Results",children:[Object(c.jsxs)("div",{className:"Results__hero",children:[Object(c.jsxs)("h1",{className:"Results__title",children:["You can retire at age ",Object(c.jsx)("strong",{children:e.retirementAge})," and earn ",Object(c.jsxs)("strong",{children:[Object(c.jsx)(N.a,{value:e.reqIncome,displayType:"text",thousandSeparator:!0,prefix:"$"})," "]})," per year with a 75% likelihood of your money lasting till age ",Object(c.jsx)("strong",{children:"90"}),"."]}),Object(c.jsxs)("div",{className:"Results__age",children:[Object(c.jsxs)("div",{className:"Results__copy",children:[Object(c.jsx)("strong",{children:"66"}),Object(c.jsxs)("small",{children:[e.progress,"% chance of your money lasting"]})]}),Object(c.jsx)("div",{className:"Results__age-bg"}),Object(c.jsx)("div",{className:"Results__pie",children:Object(c.jsx)(v,{stroke:20,radius:120,progress:e.progress})})]})]}),Object(c.jsxs)("div",{className:"Results__body",children:[Object(c.jsx)("h2",{children:"Review your plans to improve your outcome"}),Object(c.jsxs)("div",{className:"form__slider",children:[Object(c.jsxs)("label",{htmlFor:"",class:"form__label form__label--range",children:["How much you need?",Object(c.jsxs)("strong",{children:[Object(c.jsx)(N.a,{value:e.reqIncome,displayType:"text",thousandSeparator:!0,prefix:"$"}),"\xa0pa"]})]}),Object(c.jsx)(_.a,{min:1e4,max:2e5,tooltip:!1,value:e.reqIncome,onChange:function(t){return e.onSetReqIncome(t)}})]}),Object(c.jsxs)("div",{className:"form__slider",children:[Object(c.jsxs)("label",{htmlFor:"",class:"form__label form__label--range",children:["Extra contributions",Object(c.jsxs)("strong",{children:[Object(c.jsx)(N.a,{value:e.contributions,displayType:"text",thousandSeparator:!0,prefix:"$"}),"\xa0month"]})]}),Object(c.jsx)(_.a,{min:0,max:500,tooltip:!1,value:e.contributions,onChange:function(t){return e.onSetContributions(t)}})]}),Object(c.jsxs)("div",{className:"form__slider form__slider--nolabels",children:[Object(c.jsxs)("label",{htmlFor:"",class:"form__label form__label--range",children:["Investment Strategy (working)",Object(c.jsx)("strong",{children:y[e.workingStrategy]})]}),Object(c.jsx)(_.a,{min:1,max:5,labels:y,tooltip:!1,value:e.workingStrategy,onChange:function(t){return e.onSetWorkingStrategy(t)}})]}),Object(c.jsxs)("div",{className:"form__slider form__slider--nolabels",children:[Object(c.jsxs)("label",{htmlFor:"",class:"form__label form__label--range",children:["Investment Strategy (retired)",Object(c.jsx)("strong",{children:y[e.retiredStrategy]})]}),Object(c.jsx)(_.a,{min:1,max:5,labels:y,tooltip:!1,value:e.retiredStrategy,onChange:function(t){return e.onSetRetiredStrategy(t)}})]}),e.goals.length>0&&Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"Results__goals-title",children:[Object(c.jsx)("h2",{children:"Goals you added"}),Object(c.jsx)("span",{onClick:function(){return e.onOpenGoals()}})]}),s]})]})]})},S=[{id:"holiday",text:"Holiday",icon:"plane-departure"},{id:"inheritance",text:"Inheritance",icon:"sack-dollar"},{id:"medical",text:"Medical expense",icon:"users-medical"},{id:"car",text:"New car",icon:"car"},{id:"house",text:"Kid's house deposit",icon:"house"},{id:"gift",text:"Gift",icon:"gift"}];var C=function(e){var t=S.map((function(t){return Object(c.jsxs)("li",{className:"btn btn--tertiary btn--block",onClick:function(){return e.onOptionClick(t)},children:[Object(c.jsx)("i",{className:"fa fa-".concat(t.icon)}),t.text]},"option-".concat(t.id))}));return Object(c.jsxs)("div",{className:"Modal__card",children:[Object(c.jsx)("div",{className:"Modal__content Modal__content--tight",children:Object(c.jsxs)("ul",{className:"Modal__list",children:[t,Object(c.jsxs)("li",{className:"btn btn--tertiary btn--block",children:[Object(c.jsx)("i",{className:"fa fa-plus"}),"Add your own"]})]})}),Object(c.jsx)("footer",{className:"Modal__footer",children:Object(c.jsx)("button",{className:"btn btn--secondary",onClick:e.onDismiss,children:"Cancel"})})]})},w=[{id:"shares",text:"Shares or managed funds",icon:"chart-line"},{id:"cash",text:"Cash",icon:"dollar"},{id:"investment",text:"Investment property",icon:"house"}];var M=function(e){var t=w.map((function(t){return Object(c.jsxs)("li",{className:"btn btn--tertiary btn--block",onClick:function(){return e.onOptionClick(t)},children:[Object(c.jsx)("i",{className:"fa fa-".concat(t.icon)}),t.text]},"option-".concat(t.id))}));return Object(c.jsxs)("div",{className:"Modal__card",children:[Object(c.jsx)("div",{className:"Modal__content Modal__content--tight",children:Object(c.jsx)("ul",{className:"Modal__list",children:t})}),Object(c.jsx)("footer",{className:"Modal__footer",children:Object(c.jsx)("button",{className:"btn btn--secondary",onClick:e.onDismiss,children:"Cancel"})})]})};var F=function(e){return Object(c.jsxs)("div",{class:"Modal__card Modal__card--scrollable",children:[Object(c.jsxs)("div",{className:"Modal__scroll",children:[Object(c.jsx)("div",{className:"Modal__hero"}),Object(c.jsxs)("div",{className:"Modal__content",children:[Object(c.jsx)("h2",{class:"flat",children:"Simple retirement"}),Object(c.jsx)("p",{children:"$100,000 pa"}),Object(c.jsx)("p",{children:"A premium retirement lifestyle enables an older, healthy retiree to have a good standard of living through the purchase of such things as:"}),Object(c.jsx)("h3",{children:"Available lifestyle"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"A reasonable car"}),Object(c.jsx)("li",{children:"Occasional international travel"}),Object(c.jsx)("li",{children:"Private health"})]})]})]}),Object(c.jsx)("footer",{class:"Modal__footer",children:Object(c.jsx)("button",{class:"btn btn--secondary",onClick:e.onDismiss,children:"Okay, got it"})})]})};var A=function(e){return Object(c.jsxs)("div",{class:"Modal__card Modal__card--scrollable",children:[Object(c.jsxs)("div",{className:"Modal__scroll",children:[Object(c.jsx)("div",{className:"Modal__hero"}),Object(c.jsxs)("div",{className:"Modal__content",children:[Object(c.jsx)("h2",{class:"flat",children:"Modest retirement"}),Object(c.jsx)("p",{children:"$27,902 pa"}),Object(c.jsx)("p",{children:"A modest retirement lifestyle enables an older, healthy retiree to have a good standard of living through the purchase of such things as:"}),Object(c.jsx)("h3",{children:"Available lifestyle"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"A reasonable car"}),Object(c.jsx)("li",{children:"Occasional international travel"}),Object(c.jsx)("li",{children:"Private health"})]})]})]}),Object(c.jsx)("footer",{class:"Modal__footer",children:Object(c.jsx)("button",{class:"btn btn--secondary",onClick:e.onDismiss,children:"Okay, got it"})})]})};var P=function(e){return Object(c.jsxs)("div",{class:"Modal__card Modal__card--scrollable",children:[Object(c.jsxs)("div",{className:"Modal__scroll",children:[Object(c.jsx)("div",{className:"Modal__hero"}),Object(c.jsxs)("div",{className:"Modal__content",children:[Object(c.jsx)("h2",{class:"flat",children:"Comfortable retirement"}),Object(c.jsx)("p",{children:"$43,687 pa"}),Object(c.jsx)("p",{children:"A comfortable retirement lifestyle enables an older, healthy retiree to have a good standard of living through the purchase of such things as:"}),Object(c.jsx)("h3",{children:"Available lifestyle"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"A reasonable car"}),Object(c.jsx)("li",{children:"Occasional international travel"}),Object(c.jsx)("li",{children:"Private health"})]})]})]}),Object(c.jsx)("footer",{class:"Modal__footer",children:Object(c.jsx)("button",{class:"btn btn--secondary",onClick:e.onDismiss,children:"Okay, got it"})})]})};var I=function(e){return Object(c.jsxs)("div",{class:"Modal__card Modal__card--scrollable",children:[Object(c.jsxs)("div",{className:"Modal__scroll",children:[Object(c.jsx)("div",{className:"Modal__hero"}),Object(c.jsxs)("div",{className:"Modal__content",children:[Object(c.jsx)("h2",{class:"flat",children:"Premium retirement"}),Object(c.jsx)("p",{children:"$100,000 pa"}),Object(c.jsx)("p",{children:"A premium retirement lifestyle enables an older, healthy retiree to have a good standard of living through the purchase of such things as:"}),Object(c.jsx)("h3",{children:"Available lifestyle"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"A reasonable car"}),Object(c.jsx)("li",{children:"Occasional international travel"}),Object(c.jsx)("li",{children:"Private health"})]})]})]}),Object(c.jsx)("footer",{class:"Modal__footer",children:Object(c.jsx)("button",{class:"btn btn--secondary",onClick:e.onDismiss,children:"Okay, got it"})})]})};var D=function(e){return Object(c.jsx)("div",{className:"Modal ".concat(e.open?"Modal--open":""),children:{goals:Object(c.jsx)(C,{onOptionClick:function(t){return e.onGoalClick(t)},onDismiss:e.onDismiss}),income:Object(c.jsx)(M,{onOptionClick:function(t){return e.onIncomeClick(t)},onDismiss:e.onDismiss}),simple:Object(c.jsx)(F,{onDismiss:e.onDismiss}),modest:Object(c.jsx)(A,{onDismiss:e.onDismiss}),comfy:Object(c.jsx)(P,{onDismiss:e.onDismiss}),premium:Object(c.jsx)(I,{onDismiss:e.onDismiss})}[e.active]})},R=s(3),G=s(8),$=s(18),E=[{id:"simple",name:"Simple",description:"Age pension",value:15e3},{id:"modest",name:"Modest",description:"$27,902 pa",value:27902},{id:"comfy",name:"Comfortable",description:"$43,687 pa",value:43687},{id:"premium",name:"Premium",description:"$100,000 pa",value:1e5},{id:"custom",name:"Custom",description:"Enter your own",value:null}],T=[{name:"Where you're at",completed:!1,helperText:"General income and super balance",sections:["/step/current/about-you","/step/current/other-income"]},{name:"Where you want to be",completed:!1,helperText:"Financial and lifestyle goals",sections:["/step/future/ideal-retirement","/step/future/retirement-goals"]},{name:"When you will get there",completed:!1,helperText:"Retirement age to achieve your goals",sections:["/step/results"]}];var V=function(){var e,t=Object(R.g)(),s=Object(R.f)(),l=Object(a.useState)(0),n=Object(i.a)(l,2),r=n[0],d=n[1],m=Object(a.useState)(0),u=Object(i.a)(m,2),x=u[0],_=u[1],f=Object(a.useState)(0),v=Object(i.a)(f,2),N=v[0],g=v[1],y=Object(a.useState)(null),S=Object(i.a)(y,2),C=S[0],w=S[1],M=Object(a.useState)(!1),F=Object(i.a)(M,2),A=F[0],P=F[1],I=Object(a.useState)(!1),V=Object(i.a)(I,2),W=V[0],H=V[1],q=Object(a.useState)(!1),Y=Object(i.a)(q,2),B=Y[0],K=Y[1],L=Object(a.useState)(""),J=Object(i.a)(L,2),z=J[0],Q=J[1],U=Object(a.useState)(E[0]),X=Object(i.a)(U,2),Z=X[0],ee=X[1],te=Object(a.useState)(58),se=Object(i.a)(te,2),ce=se[0],ae=se[1],le=Object(a.useState)(66),ne=Object(i.a)(le,2),re=ne[0],ie=ne[1],oe=Object(a.useState)(5e5),je=Object(i.a)(oe,2),de=je[0],me=je[1],be=Object(a.useState)(15e4),ue=Object(i.a)(be,2),he=ue[0],xe=ue[1],_e=Object(a.useState)([]),Oe=Object(i.a)(_e,2),fe=Oe[0],pe=Oe[1],ve=Object(a.useState)([]),Ne=Object(i.a)(ve,2),ge=Ne[0],ye=Ne[1],ke=Object(a.useState)(Z.value),Se=Object(i.a)(ke,2),Ce=Se[0],we=Se[1],Me=Object(a.useState)(1),Fe=Object(i.a)(Me,2),Ae=Fe[0],Pe=Fe[1],Ie=Object(a.useState)(1),De=Object(i.a)(Ie,2),Re=De[0],Ge=De[1],$e=Object(a.useState)(150),Ee=Object(i.a)($e,2),Te=Ee[0],Ve=Ee[1];function We(e){console.log(e),pe(fe.concat(e)),P(!1)}function He(){T[x].completed=!0,_(x+1),g(0)}function qe(e){P(!0),Q(e)}Object(a.useEffect)((function(){w(window.innerHeight)}),[]),Object(a.useEffect)((function(){"/calculator/"===t.pathname||"/"===t.pathname?K(!1):"/"===t.path||B||K(!0),"/step/results"===t.pathname&&(K(!1),setTimeout((function(){d(75)}),750))}),[t,B]),Object(a.useEffect)((function(){window.innerWidth>768&&s.push(T[0].sections[0]),w(window.innerHeight)}),[s]),e=x+1===T.length?Object(c.jsx)(G.b,{to:"/completed",className:"btn",children:"Complete"}):N+1>=T[x].sections.length?Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"show-desktop",children:Object(c.jsx)(G.b,{onClick:He,to:T[x+1].sections[0],className:"btn",children:"Save"})}),Object(c.jsx)("div",{className:"show-mobile",children:Object(c.jsx)(G.b,{onClick:He,to:"/",className:"btn",children:"Save"})})]}):Object(c.jsx)(G.b,{onClick:function(){return g(N+1)},to:T[x].sections[N+1],className:"btn",children:"Next"});var Ye=T.map((function(e,t){var s=$({Nav__link:!0,"Nav__link--active":x===t,"Nav__link--completed":e.completed});return Object(c.jsx)("li",{children:e.completed||x===t?Object(c.jsxs)(G.b,{to:T[t].sections[0],onClick:function(){return _(t)},className:s,children:[e.completed?Object(c.jsx)("div",{className:"Nav__counter Nav__counter--checked",children:Object(c.jsx)("i",{className:"far fa-check"})}):Object(c.jsx)("div",{className:"Nav__counter",children:t+1}),Object(c.jsxs)("div",{children:[Object(c.jsx)("strong",{children:e.name}),Object(c.jsx)("small",{children:e.helperText})]}),Object(c.jsx)("i",{className:"far fa-chevron-right Nav__icon"})]}):Object(c.jsxs)("div",{className:s,children:[e.completed?Object(c.jsx)("div",{className:"Nav__counter Nav__counter--checked",children:Object(c.jsx)("i",{className:"far fa-check"})}):Object(c.jsx)("div",{className:"Nav__counter",children:t+1}),Object(c.jsxs)("div",{children:[Object(c.jsx)("strong",{children:e.name}),Object(c.jsx)("small",{children:e.helperText})]}),Object(c.jsx)("i",{className:"far fa-chevron-right Nav__icon"})]})},"step-".concat(t))}));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App__header",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("img",{src:j,alt:"",className:"App__logo"})})}),Object(c.jsxs)("nav",{className:"Nav",style:{height:C},children:[Object(c.jsxs)("header",{className:"Nav__header",children:[Object(c.jsx)("img",{src:o,alt:"",className:"Nav__logo"}),Object(c.jsxs)("div",{className:"Nav__blurb",children:[Object(c.jsx)("h1",{className:"Nav__title",children:"Got a gap?"}),Object(c.jsx)("p",{children:"To effectively plan for life after work, you should understand how much you need and if you have a gap. This tool will help you make the required adjustments to live the life you want."}),Object(c.jsxs)("p",{children:[Object(c.jsx)("i",{style:{marginRight:"0.5rem"},className:"far fa-stopwatch Nav__clock"}),Object(c.jsx)("strong",{children:"Takes approximately 15 minutes"})]})]})]}),Object(c.jsx)("footer",{className:"Nav__footer",children:Object(c.jsx)("div",{className:"Nav__content",children:Object(c.jsx)("ul",{className:"Nav__steps",children:Ye})})})]}),Object(c.jsx)("main",{className:"Slides ".concat(t.pathname.includes("/step")?"Slides--open":""),style:{height:C},children:Object(c.jsx)("div",{className:"Slides__wrap",style:{height:C},children:Object(c.jsxs)(R.c,{children:[Object(c.jsx)(R.a,{path:"/step/current",children:Object(c.jsx)("section",{className:"Slides__slide",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"Slides__title",children:"Where you're at"}),Object(c.jsxs)(R.c,{children:[Object(c.jsx)(R.a,{path:"/step/current/about-you",children:Object(c.jsx)(b,{age:ce,includePartner:W,contributions:Te,superBalance:de,salary:he,onPartnerInclude:function(){return H(!W)},onSetAge:function(e){return ae(e)},onSetContributions:function(e){return Ve(e)},onSetSuper:function(e){return me(e)},onSetSalary:function(e){return xe(e)}})}),Object(c.jsx)(R.a,{path:"/step/current/other-income",children:Object(c.jsx)(h,{incomeSources:fe,onSourceRemove:function(e){return function(e){var t=fe.filter((function(t,s){return s!==e}));pe(t),P(!1)}(e)},onAddingIncome:function(e){return We(e)}})})]})]})})}),Object(c.jsx)(R.a,{path:"/step/future",children:Object(c.jsx)("section",{className:"Slides__slide",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"Slides__title",children:"Where you want to be"}),Object(c.jsxs)(R.c,{children:[Object(c.jsx)(R.a,{path:"/step/future/ideal-retirement",children:Object(c.jsx)(O,{onSetPlan:function(e){return function(e){var t=function(e,t,s){for(var c=0;c<e.length;c+=1)if(e[c][t]===s)return c;return-1}(E,"id",e);ee(E[t])}(e)},onSetRetirementAge:function(e){return ie(e)},retirementAge:re,activePlan:Z.id,plans:E,onInfoClick:function(e){return qe(e)}})}),Object(c.jsx)(R.a,{path:"/step/future/retirement-goals",children:Object(c.jsx)(p,{goals:ge,onGoalRemove:function(e){return function(e){var t=ge.filter((function(t,s){return s!==e}));ye(t),P(!1)}(e)},onAddingGoal:function(){return qe("goals")}})})]})]})})}),Object(c.jsx)(R.a,{path:"/step/results",children:Object(c.jsx)("section",{className:"Slides__slide",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(k,{progress:r,reqIncome:Ce,goals:ge,retirementAge:re,contributions:Te,retiredStrategy:Re,workingStrategy:Ae,onOpenGoals:function(){return qe("goals")},onSetProgress:function(e){return d(e)},onSetWorkingStrategy:function(e){return Pe(e)},onSetRetiredStrategy:function(e){return Ge(e)},onSetReqIncome:function(e){return we(e)},onSetContributions:function(e){return Ve(e)}})})})})]})})}),Object(c.jsx)("footer",{className:"Slides__footer ".concat(B?"Slides__footer--visible":""),children:Object(c.jsxs)("div",{className:"container",children:[N<1?Object(c.jsx)(G.b,{to:"/",className:"Slides__back ".concat(0===N?"Slides__back--first":""),children:Object(c.jsx)("i",{className:"far fa-chevron-left"})}):Object(c.jsx)(G.b,{onClick:function(){return g(N-1)},to:T[x].sections[N-1],className:"Slides__back",children:Object(c.jsx)("i",{className:"far fa-chevron-left"})}),Object(c.jsx)("div",{children:e})]})}),Object(c.jsx)(D,{onIncomeClick:function(e){return We(e)},onGoalClick:function(e){return function(e){ge.push(e),ye(ge),P(!1)}(e)},active:z,open:A,onDismiss:function(){return P(!1)}})]})},W=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,40)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),l(e),n(e)}))};r.a.render(Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(G.a,{children:Object(c.jsx)(V,{})})}),document.getElementById("root")),W()}},[[39,1,2]]]);
//# sourceMappingURL=main.1b5868c6.chunk.js.map