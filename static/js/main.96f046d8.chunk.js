(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(6),s=i.n(a),l=(i(14),i(8)),c=i(2),n=i(1),r=(i(15),i(9)),o=(i(16),i(17),i(0)),m=function(e){var t=e.title,i=e.description,a=e.imgUrl,s=e.imdbUrl;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:a,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t})})]}),Object(o.jsxs)("div",{className:"content",children:[i,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:s,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(m,Object(r.a)({},e),e.imdbId)}))})},j=(i(19),function(e){var t=e.addMovie,i=Object(n.useState)(""),a=Object(c.a)(i,2),s=a[0],l=a[1],r=Object(n.useState)(""),m=Object(c.a)(r,2),d=m[0],j=m[1],b=Object(n.useState)(""),h=Object(c.a)(b,2),u=h[0],O=h[1],p=Object(n.useState)(""),g=Object(c.a)(p,2),f=g[0],v=g[1],x=Object(n.useState)(""),_=Object(c.a)(x,2),M=_[0],w=_[1],N=Object(n.useState)(null),U=Object(c.a)(N,2),y=U[0],I=U[1],T=Object(n.useState)(null),B=Object(c.a)(T,2),S=B[0],k=B[1],z=Object(n.useState)(null),A=Object(c.a)(z,2),D=A[0],V=A[1],Y=Object(n.useState)(null),C=Object(c.a)(Y,2),F=C[0],X=C[1],Z=Object(n.useState)(null),E=Object(c.a)(Z,2),L=E[0],P=E[1];return Object(o.jsxs)("form",{onSubmit:function(e){(e.preventDefault(),s.trim()||I("Please enter the title!"),d.trim()||k("Please enter the description!"),u||V("Please enter imgUrl!"),f||X("Please enter imdbUrl!"),M||P("Please enter imdbId!"),s.trim()&&d.trim()&&u&&f&&M)&&(t({title:s,description:d,imgUrl:u,imdbUrl:f,imdbId:M}),l(""),j(""),O(""),v(""),w(""),window.scrollTo(0,document.documentElement.clientHeight))},name:"addMovie",children:[Object(o.jsx)("h2",{className:"form__title",children:"Add new movie"}),Object(o.jsxs)("label",{children:[y&&Object(o.jsx)("div",{className:"form__error",children:y}),Object(o.jsx)("input",{type:"text",name:"title",placeholder:"Movie title",pattern:"^[a-zA-Z]+$",minLength:3,className:"form__input",value:s,onChange:function(e){l(e.target.value),I(null)}})]}),Object(o.jsxs)("label",{children:[S&&Object(o.jsx)("div",{className:"form__error",children:S}),Object(o.jsx)("textarea",{name:"description",placeholder:"Description",className:"form__input",value:d,onChange:function(e){j(e.target.value),k(null)}})]}),Object(o.jsxs)("label",{children:[D&&Object(o.jsx)("div",{className:"form__error",children:D}),Object(o.jsx)("input",{type:"url",name:"imgUrl",placeholder:"ImgUrl",className:"form__input",value:u,onChange:function(e){O(e.target.value),V(null)}})]}),Object(o.jsxs)("label",{children:[F&&Object(o.jsx)("div",{className:"form__error",children:F}),Object(o.jsx)("input",{type:"url",placeholder:"ImdbUrl",className:"form__input",value:f,onChange:function(e){v(e.target.value),X(null)}})]}),Object(o.jsxs)("label",{children:[L&&Object(o.jsx)("div",{className:"form__error",children:L}),Object(o.jsx)("input",{type:"text",placeholder:"ImdbId",className:"form__input form__input-lst-chld",value:M,onChange:function(e){w(e.target.value),P(null)}})]}),Object(o.jsx)("button",{type:"submit",className:"form__button",children:"Add movie"})]})}),b=i(7),h=function(){var e=Object(n.useState)(b),t=Object(c.a)(e,2),i=t[0],a=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(d,{movies:i})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(j,{addMovie:function(e){a([].concat(Object(l.a)(i),[e]))}})})]})};s.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.96f046d8.chunk.js.map