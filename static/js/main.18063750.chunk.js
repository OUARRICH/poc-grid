(this["webpackJsonpgpc-poc-grid"]=this["webpackJsonpgpc-poc-grid"]||[]).push([[0],{28:function(e,t,a){e.exports=a(46)},33:function(e,t,a){},42:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);a(25);var n=a(0),r=a.n(n),o=a(10),i=a.n(o),l=(a(33),a(11)),c=a(5),d=a(18),h=a(19),u=a(26),s=a(20),m=a(27),f=a(21),g=a.n(f),p=a(22),w=(a(42),a(43),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={columnDefs:[{headerName:"Country",field:"country",width:120,rowGroup:!0},{headerName:"Year",field:"year",width:90,rowGroup:!0},{headerName:"Sport",field:"sport",width:110,rowGroup:!0},{headerName:"Athlete",field:"athlete",width:200},{headerName:"Gold",field:"gold",width:100},{headerName:"Silver",field:"silver",width:100},{headerName:"Bronze",field:"bronze",width:100},{headerName:"Total",field:"total",width:100},{headerName:"Age",field:"age",width:90},{headerName:"Date",field:"date",width:110}],defaultColDef:{sortable:!0,filter:!0}},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json").then((function(e){return e.json()})).then((function(t){return e.setState({rowData:t})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:g()("ag-theme-balham"),style:{height:"800px",width:"auto"}},r.a.createElement(p.AgGridReact,{onGridReady:function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi},columnDefs:this.state.columnDefs,groupSelectsChildren:!0,rowData:this.state.rowData}))}}]),t}(r.a.Component)),v=function(){return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"AgGrid")))),r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/agGrid"},r.a.createElement(w,null)),r.a.createElement(c.a,{path:"/"},r.a.createElement(w,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.18063750.chunk.js.map