(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{19:function(e,t,n){e.exports=n(43)},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),s=n.n(o),i=n(2),c=n.n(i),l=n(13),u=n(14),m=n(15),p=n(18),v=n(17),d=n(16),g=n.n(d);var y=function(e){e.id,e.year;var t=e.title,n=(e.summary,e.poster,e.genres);return r.a.createElement("div",null,r.a.createElement("h4",{style:{backgroundColor:"red"}},t),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{className:"genres__genre"},e)}))))},f=(n(42),function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(c.a.mark((function t(){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:n=t.sent,a=n.data.data.movies,console.log(a),e.setState({movies:a,isLoding:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return r.a.createElement("div",{className:test},t?"Loading...":n.map((function(e){return console.log(e),r.a.createElement(y,{key:e.id,poster:e.poster,summary:e.summary,year:e.year,id:e.id,title:e.title,genres:e.genres})})))}}]),n}(r.a.Component));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.0ad7ee90.chunk.js.map