(this.webpackJsonpmoviedb=this.webpackJsonpmoviedb||[]).push([[0],{38:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var c=s(3),i=s.n(c),a=s(29),n=s.n(a),r=(s(38),s(13)),l=s(9),j=s(33),o=s(19),u=s.n(o),b=s(22),d=s(16),m=s(2),h=i.a.createContext(),O=function(e){var t=e.children,s=Object(c.useState)(!1),i=Object(d.a)(s,2),a=i[0],n=i[1],r=Object(c.useState)("Wars"),l=Object(d.a)(r,2),j=l[0],o=l[1],O=Object(c.useState)([]),x=Object(d.a)(O,2),p=x[0],f=x[1],v=Object(c.useCallback)(Object(b.a)(u.a.mark((function e(){var t,s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.prev=1,e.next=4,fetch("https://www.omdbapi.com/?s=".concat(j,"&apikey=30b97e2a"));case 4:return t=e.sent,e.next=7,t.json();case 7:s=e.sent,c=s.Search,f(c||[]),n(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0),n(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])}))),[j]);return Object(c.useEffect)((function(){v()}),[j,v]),Object(m.jsx)(h.Provider,{value:{loading:a,setLoading:n,searchTerm:j,setSearchTerm:o,films:p,setFilms:f},children:t})},x=function(e){var t=e.Poster,s=e.Title,c=(e.Type,e.Year),i=e.imdbID;return Object(m.jsxs)("article",{className:"film",children:[Object(m.jsx)("div",{className:"img-container",children:Object(m.jsx)("img",{src:t,alt:s})}),Object(m.jsxs)("div",{className:"film-footer",children:[Object(m.jsx)("h3",{children:s}),Object(m.jsx)("h4",{children:c}),Object(m.jsx)(r.b,{to:"/movie/".concat(i),className:"btn btn-primary btn-details",children:"Details"})]})]})},p=function(){var e=Object(c.useContext)(h);return console.log(e),Object(m.jsxs)("section",{className:"section",children:[Object(m.jsx)("h2",{className:"section-title",children:"Films"}),Object(m.jsx)("div",{className:"films-centre",children:e.films.map((function(e){return Object(m.jsx)(x,Object(j.a)({},e),e.imdbID)}))})]})},f=function(){var e=Object(c.useContext)(h),t=Object(c.useRef)("");Object(c.useEffect)((function(){t.current.focus()}),[]);return Object(m.jsx)("div",{className:"search",children:Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault()},className:"search-form",children:Object(m.jsxs)("div",{className:"search-div",children:[Object(m.jsx)("label",{htmlFor:"movie",children:"Search for a Movie..."}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",id:"movie",ref:t,onChange:function(){e.setSearchTerm(t.current.value)}})]})})})},v=function(){return Object(m.jsxs)("main",{children:[Object(m.jsx)(f,{}),Object(m.jsx)(p,{})]})},g=function(){return Object(m.jsxs)("section",{className:"about-section",children:[Object(m.jsx)("h1",{children:"About us"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor felis eu purus finibus condimentum. Nam ultricies odio enim. Duis cursus leo elit, a semper ex mollis sit amet. Vestibulum fringilla auctor ex, id vestibulum ante. Curabitur pellentesque sapien elit, nec porttitor ex condimentum nec. Pellentesque eleifend ut massa non laoreet. Donec ultricies nulla ipsum, sed malesuada magna pellentesque ut. Praesent vulputate, ex tristique ultrices posuere, magna quam efficitur odio, eget ultrices lectus dui a risus. Suspendisse a fringilla dui. Integer finibus eu risus nec porta. Quisque volutpat ex ut urna euismod finibus. Sed maximus, neque eget venenatis malesuada, tellus nunc consectetur lorem, id ultrices augue velit vel lacus. Ut id commodo est. Mauris placerat ornare ex quis venenatis. In sit amet blandit magna. Etiam sodales finibus sem, sed sodales elit congue quis. Quisque et arcu risus. Sed ullamcorper eget sem commodo malesuada. Vivamus suscipit faucibus ex, quis venenatis lacus condimentum ultricies. Maecenas quis odio feugiat, accumsan ipsum eu, vestibulum nulla. Donec diam elit, finibus ut mattis ut, pretium vitae risus. In vel commodo erat. Integer dictum sem ac mi cursus gravida."})]})},N=function(){return Object(m.jsx)("section",{children:Object(m.jsxs)("div",{className:"error-container",children:[Object(m.jsx)("h2",{children:"Oops! It's a dead end"}),Object(m.jsx)(r.b,{to:"/",className:"btn",children:Object(m.jsx)("button",{children:"back home"})})]})})},w=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Loading"})})},S=s(26);S.a.initializeApp({apiKey:"AIzaSyCeO9pa2k8JkJdYfTeo7eyXIw0SUppLXgM",authDomain:"moviedb-9f0bb.firebaseapp.com",databaseURL:"https://moviedb-9f0bb-default-rtdb.firebaseio.com",projectId:"moviedb-9f0bb",storageBucket:"moviedb-9f0bb.appspot.com",messagingSenderId:"970512269012",appId:"1:970512269012:web:53490fb14508e9871d8541"});var k=S.a,D=function(){var e=Object(l.f)().id,t=Object(c.useState)(!1),s=Object(d.a)(t,2),i=s[0],a=s[1],n=Object(c.useState)(null),j=Object(d.a)(n,2),o=j[0],h=j[1],O=function(){var t=Object(b.a)(u.a.mark((function t(){var s,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(!0),t.prev=1,t.next=4,fetch("https://www.omdbapi.com/?i=".concat(e,"&apikey=30b97e2a"));case 4:return s=t.sent,t.next=7,s.json();case 7:c=t.sent,h(c),console.log(c),h(c||null),a(!1),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0),a(!1);case 18:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(){return t.apply(this,arguments)}}();if(Object(c.useEffect)((function(){O()}),[e]),i)return Object(m.jsx)(w,{});if(!o)return Object(m.jsx)("h2",{className:"section-title",children:"no movie to display"});return Object(m.jsxs)("section",{className:"section film-section",children:[Object(m.jsxs)("h2",{className:"section-title",children:[o.Title,Object(m.jsx)("br",{}),Object(m.jsx)(r.b,{to:"/",className:"btn btn-primary",children:"Back Home"})]}),Object(m.jsx)("div",{className:"flexDiv",children:Object(m.jsxs)("div",{className:"movie",children:[Object(m.jsx)("img",{src:o.Poster,alt:o.Title}),Object(m.jsxs)("div",{className:"movie-info",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"movie-data",children:"Awards : "}),o.Awards]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"movie-data",children:"Box Office : "}),o.BoxOffice]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"movie-data",children:"Director : "}),o.Director]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"movie-data",children:"Actors : "}),o.Actors]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"movie-data",children:"Plot : "}),o.Plot,"..."]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"movie-data",children:"IMDB Rating : "}),o.imdbRating]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"movie-data",children:"IMDB Votes : "}),o.imdbVotes]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"movie-data",children:"Released : "}),o.Released]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"movie-data",children:"Runtime : "}),o.Runtime]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"movie-data",children:"Year : "}),o.Year]}),Object(m.jsx)("button",{onClick:function(){return function(e){console.log(e);var t=k.database().ref("MovieDB"),s={name:o.Title,id:e};t.push(s)}(e)},children:"Add Movie to Watch List"})]})]})})]})},I=function(){return Object(m.jsx)("div",{})},q=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:Object(m.jsx)(I,{})})})},y=function(){var e=Object(c.useState)(),t=Object(d.a)(e,2),s=t[0],i=t[1];return Object(c.useEffect)((function(){k.database().ref("MovieDB").on("value",(function(e){var t=e.val(),s=[];for(var c in t)s.push(t[c]);i(s)}))}),[]),Object(m.jsxs)("nav",{className:"navbar",children:[Object(m.jsx)("div",{className:"nav-centre",children:Object(m.jsx)(r.b,{to:"/",children:Object(m.jsx)("h2",{children:"MovieDB"})})}),Object(m.jsxs)("ul",{className:"nav-links",children:[Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{to:"/",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{to:"/about",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsxs)(r.b,{to:"/watchlist",children:["Watchlist: ",s.length]})})]})]})};var M=function(){return Object(m.jsxs)(r.a,{children:[Object(m.jsx)(y,{}),Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{exact:!0,path:"/",children:Object(m.jsx)(v,{})}),Object(m.jsx)(l.a,{path:"/about",children:Object(m.jsx)(g,{})}),Object(m.jsx)(l.a,{path:"/watchlist",children:Object(m.jsx)(q,{})}),Object(m.jsx)(l.a,{path:"/movie/:id",children:Object(m.jsx)(D,{})}),Object(m.jsx)(l.a,{path:"*",children:Object(m.jsx)(N,{})})]})]})};n.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(O,{children:Object(m.jsx)(M,{})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.88e7849a.chunk.js.map