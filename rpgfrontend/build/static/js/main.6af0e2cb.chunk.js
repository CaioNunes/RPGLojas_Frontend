(this.webpackJsonprpgfrontend=this.webpackJsonprpgfrontend||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),s=n.n(a),i=(n(14),n(3)),o=n.n(i),d=n(5),u=n(6),p=n(7),l=n(9),h=n(8),j=n.p+"static/media/logo.6ce24c58.svg",f=(n(16),n(0)),b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={cidades:[]},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/cidades");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({cidades:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.cidades;return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsx)("img",{src:j,className:"App-logo",alt:"logo"}),Object(f.jsxs)("div",{className:"App-intro",children:[Object(f.jsx)("h2",{children:"Cidades"}),e.map((function(e){return Object(f.jsxs)("div",{children:[e.nome," - ",e.tesouro]},e.id)}))]})]})})}}]),n}(c.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(18);s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(b,{})}),document.getElementById("root")),v()}},[[19,1,2]]]);
//# sourceMappingURL=main.6af0e2cb.chunk.js.map