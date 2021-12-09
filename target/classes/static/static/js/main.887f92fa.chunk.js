(this["webpackJsonpbooklist-frontend"]=this["webpackJsonpbooklist-frontend"]||[]).push([[0],{25:function(t,e,o){},26:function(t,e,o){},46:function(t,e,o){"use strict";o.r(e);var i=o(2),n=o.n(i),s=o(20),a=o.n(s),c=(o(25),o(26),o(4)),l=o(5),r=o(10),d=o(9),u=o(6),h=o.n(u),b="http://localhost:8080/books",j=new(function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,[{key:"getBooks",value:function(){return h.a.get(b).catch((function(t){console.log("Failed to establish database connection")}))}},{key:"newBook",value:function(t,e,o){console.log("Adding a new book!");var i=h.a.post(b,{title:t,author:e,description:o}).then((function(t){console.log("The server responded with:"+t)})).catch((function(t){console.log("The book could not be added"),console.log(t)}));console.log("The server replied with "+i)}},{key:"editBook",value:function(t,e,o,i){var n=h.a.put(b+"/"+t,{id:t,title:e,author:o,description:i}).then((function(t){console.log(t)})).catch((function(e){console.log("The book could not be edited"),console.log("Book URL: "+b+"/"+t),console.log(e)}));console.log(n)}},{key:"deleteBook",value:function(t){var e=h.a.delete(b+"/"+t).then((function(t){console.log("Server responded with: "+t)})).catch((function(e){console.log("Attempted to delete a book with ID "+t),console.log("The entry could not be deleted"),console.log("Book URL: "+b+"/"+t),console.log(e)}));console.log("Server replied with "+e)}}]),t}()),p=o(3),k=o(0),O=function(t){Object(r.a)(o,t);var e=Object(d.a)(o);function o(t){var i;return Object(c.a)(this,o),(i=e.call(this,t)).state={id:null,title:"",author:"",description:""},i.editTitle=i.editTitle.bind(Object(p.a)(i)),i.editAuthor=i.editAuthor.bind(Object(p.a)(i)),i.editDescription=i.editDescription.bind(Object(p.a)(i)),i.addBook=i.addBook.bind(Object(p.a)(i)),i.editBook=i.editBook.bind(Object(p.a)(i)),i.deleteBook=i.deleteBook.bind(Object(p.a)(i)),i}return Object(l.a)(o,[{key:"componentDidUpdate",value:function(t){null!==t.dataFromParent&&t.dataFromParent.id!==this.props.dataFromParent.id&&this.setState({id:this.props.dataFromParent.id,title:this.props.dataFromParent.title,author:this.props.dataFromParent.author,description:this.props.dataFromParent.description})}},{key:"editTitle",value:function(t){this.setState({title:t.target.value})}},{key:"editAuthor",value:function(t){this.setState({author:t.target.value})}},{key:"editDescription",value:function(t){this.setState({description:t.target.value})}},{key:"addBook",value:function(t){j.newBook(this.state.title,this.state.author,this.state.description).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}},{key:"editBook",value:function(t){j.editBook(this.state.id,this.state.title,this.state.author,this.state.description)}},{key:"deleteBook",value:function(){j.deleteBook(this.state.id).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return null===this.state.id?Object(k.jsxs)("form",{children:[Object(k.jsx)("label",{children:"Title:"}),Object(k.jsx)("br",{}),Object(k.jsx)("input",{type:"text",size:"25",title:this.state.title,defaultValue:"",onChange:this.editTitle}),Object(k.jsx)("br",{}),Object(k.jsx)("label",{children:"Author:"}),Object(k.jsx)("br",{}),Object(k.jsx)("input",{type:"text",size:"25",author:this.state.author,defaultValue:"",onChange:this.editAuthor}),Object(k.jsx)("br",{}),Object(k.jsx)("label",{children:"Description:"}),Object(k.jsx)("br",{}),Object(k.jsx)("textarea",{rows:"6",cols:"32",description:this.state.description,defaultValue:"",onChange:this.editDescription}),Object(k.jsx)("br",{}),Object(k.jsx)("input",{type:"submit",value:"Save New",onClick:this.addBook}),Object(k.jsx)("input",{type:"submit",value:"Save",disabled:!0}),Object(k.jsx)("input",{type:"submit",value:"Delete",disabled:!0})]}):Object(k.jsxs)("form",{children:[Object(k.jsx)("label",{children:"Title: "}),Object(k.jsx)("br",{}),Object(k.jsx)("input",{type:"text",size:"25",title:this.state.title,defaultValue:this.state.title,onChange:this.editTitle}),Object(k.jsx)("br",{}),Object(k.jsx)("label",{children:"Author:"}),Object(k.jsx)("br",{}),Object(k.jsx)("input",{type:"text",size:"25",author:this.state.author,defaultValue:this.state.author,onChange:this.editAuthor}),Object(k.jsx)("br",{}),Object(k.jsx)("label",{children:"Description:"}),Object(k.jsx)("br",{}),Object(k.jsx)("textarea",{rows:"6",cols:"32",description:this.state.description,defaultValue:this.state.description,onChange:this.editDescription}),Object(k.jsx)("br",{}),Object(k.jsx)("input",{type:"submit",value:"Save New",onClick:this.addBook}),Object(k.jsx)("input",{type:"submit",value:"Save",onClick:this.editBook}),Object(k.jsx)("input",{type:"submit",value:"Delete",onClick:this.deleteBook})]})}}]),o}(n.a.Component),f=function(t){Object(r.a)(o,t);var e=Object(d.a)(o);function o(t){var i;return Object(c.a)(this,o),(i=e.call(this,t)).state={books:[],DataLoaded:!1,NoConnection:!1,selected:null},i}return Object(l.a)(o,[{key:"componentDidMount",value:function(){var t=this;j.getBooks().then((function(e){t.setState({books:e.data}),t.setState({DataLoaded:!0})})).catch((function(t){console.log("Failed to load data")}))}},{key:"selectBook",value:function(t){this.setState({selected:t})}},{key:"render",value:function(){var t=this,e=this.state,o=e.DataLoaded,i=e.NoConnection;e.books;return o||i?i?"Failed to connect to database":Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)("ul",{children:this.state.books.map((function(e){return Object(k.jsx)("li",{onClick:function(){return t.setState({selected:e})},children:e.title})}))}),Object(k.jsx)("div",{children:Object(k.jsx)(O,{dataFromParent:this.state.selected})})]}):"The booklist is loading"}}]),o}(n.a.Component);var v=function(){return Object(k.jsx)("div",{children:Object(k.jsx)(f,{})})},x=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,47)).then((function(e){var o=e.getCLS,i=e.getFID,n=e.getFCP,s=e.getLCP,a=e.getTTFB;o(t),i(t),n(t),s(t),a(t)}))};a.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(v,{})}),document.getElementById("root")),x()}},[[46,1,2]]]);
//# sourceMappingURL=main.887f92fa.chunk.js.map