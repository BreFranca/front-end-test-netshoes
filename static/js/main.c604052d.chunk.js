(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(n,t,e){n.exports=e(69)},47:function(n,t,e){},69:function(n,t,e){"use strict";e.r(t);var r={};e.r(r),e.d(r,"toggleBag",function(){return F}),e.d(r,"getProducts",function(){return R}),e.d(r,"getProductsCart",function(){return N}),e.d(r,"addProductCart",function(){return z}),e.d(r,"deleteProductCart",function(){return G}),e.d(r,"clearCart",function(){return U});var a=e(0),o=e.n(a),i=e(12),c=e.n(i),l=(e(47),e(13)),u=e(14),s=e(18),p=e(16),f=e(15),d=e(17),m=e(4),g=e(10),v=e(7),b=e(8),h=e.n(b),x=e(19),y=e(36),O=e.n(y),E="";E="http://my-json-server.typicode.com/BreFranca/front-end-test-netshoes/",console.log(E);var j=function(n,t){var e="0";return e=(e=void 0===(t=Number(t).toString().split("."))[1]?"00":t[1].length>1?t[1]:t[1]+"0").substring(0,2),"<small>".concat(n,"</small> <strong>").concat(t[0],"</strong><small>,").concat(e,"</small>")},P=function(n,t,e){var r=t/n;return r=r.toFixed(2).toString().replace(".",","),"ou ".concat(n,"x ").concat(e).concat(r)},T=function(n,t){return n+" "+t},w=function(n){return 9===n?n=1:n>9&&(n=(n=n.toString().split(""))[1]),"../../../assets/products/corinthians"+n+".jpg"},C=function(n){return n[Math.floor(Math.random()*n.length)]},k=function(n,t){return n.amount?(n.amount=n.amount+1,n.totalPrice=n.totalPrice+n.price):(n.amount=1,n.totalPrice=n.price),console.log("Depois: ",n.totalPrice),t&&(n.size=t),n},A=O.a.create({baseURL:E,headers:{"Access-Control-Allow-Origin":"*"},responseType:"text",responseEncoding:"utf8"}),_=function(){return A.get("products")},S=function(n){return A.get("products/".concat(n))},F=function(n){return function(t){t("show"===n?{type:"TOGGLE_BAG",payload:!0}:{type:"TOGGLE_BAG",payload:!1})}},R=function(){return function(){var n=Object(x.a)(h.a.mark(function n(t){var e;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_().then(function(n){var e=n.data;return t({type:"GET_PRODUCTS",payload:e}),e}).catch(function(n){return console.log("erro",n)});case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}()},N=function(){return function(){var n=Object(x.a)(h.a.mark(function n(t){var e,r,a;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:(e=JSON.parse(localStorage.getItem("cart")))&&(t({type:"GET_PRODUCTS_CART",payload:e}),r=e.reduce(function(n,t){return n+t.totalPrice},0),a=Math.max.apply(Math,Object(v.a)(e.map(function(n){return n.installments})).concat([0])),r=Number(r.toFixed(2)),a=Number(a.toFixed(2)),t({type:"GET_TOTAL_AMOUNT_CART",payload:{total:r,installments:a}}));case 2:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}()},z=function(n,t){return function(){var e=Object(x.a)(h.a.mark(function e(r){var a,o,i,c;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=JSON.parse(localStorage.getItem("cart")))){e.next=17;break}if(r({type:"GET_PRODUCTS_CART",payload:a}),void 0!==(o=a.find(function(e){return e.id===n&&e.size===t}))){e.next=9;break}return e.next=7,S(n).then(function(n){var e=n.data;o=k(e,t),a=[].concat(Object(v.a)(a),[o]),r({type:"UPDATE_CART",payload:a}),localStorage.setItem("cart",JSON.stringify(a))}).catch(function(n){return console.log("erro",n)});case 7:e.next=15;break;case 9:i=a.filter(function(t){return t.id!==n}),c=a.filter(function(e){return e.id===n&&e.size!==t}),o=k(o),i.concat(c),i=[].concat(Object(v.a)(i),[o]),localStorage.setItem("cart",JSON.stringify(a));case 15:e.next=19;break;case 17:return e.next=19,S(n).then(function(n){var e=n.data,a=k(e,t);r({type:"INSERT_PRODUCT_CART",payload:a});var o=[a];localStorage.setItem("cart",JSON.stringify(o))}).catch(function(n){return console.log("erro",n)});case 19:return e.abrupt("return",!0);case 20:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()},G=function(n,t){return function(e){var r=JSON.parse(localStorage.getItem("cart"));if(r){var a=r.filter(function(t){return t.id!==n}),o=r.filter(function(e){return e.id===n&&e.size!==t});e({type:"UPDATE_CART",payload:a=a.concat(o)});var i=a.reduce(function(n,t){return n+t.totalPrice},0),c=Math.max.apply(Math,Object(v.a)(a.map(function(n){return n.installments})).concat([0])),l={total:i=Number(i.toFixed(2)),installments:c=Number(c.toFixed(2))};return e({type:"GET_TOTAL_AMOUNT_CART",payload:l}),0===l.total&&e({type:"TOGGLE_BAG",payload:!1}),localStorage.setItem("cart",JSON.stringify(a)),!0}}},U=function(){return function(n){localStorage.removeItem("cart"),n({type:"UPDATE_CART",payload:[]});n({type:"GET_TOTAL_AMOUNT_CART",payload:{total:0,installments:null}});return[]}},L=e(1),D=e(2);function I(){var n=Object(L.a)(["\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    z-index: -1;\n    display: none;\n    &.show {\n        display: block;\n    }\n"]);return I=function(){return n},n}function M(){var n=Object(L.a)(["\n    width: 530px;\n    background: #202025;\n    position: fixed;\n    height: 100%;\n    top: 0;\n    transition: .4s all linear;\n    right: -530px;\n    opacity: 0;\n    overflow: hidden;\n    overflow-y: scroll;\n    padding-bottom: 50px;\n    &::-webkit-scrollbar {\n        display: none;\n    }\n    &.show {\n        right: 0;\n        opacity: 1;\n    }\n"]);return M=function(){return n},n}var B=D.a.div(M()),J=D.a.div(I());function $(){var n=Object(L.a)(["\n    appearance: none;\n    border: none;\n    padding: 10px 15px;\n    color: #FFFFFF;\n    background: rgba(0, 0, 0, .6);\n    margin-right: 35px;\n    margin-left: auto;\n    display: block;\n    max-width: 120px;\n    cursor: pointer;\n    transition: .4s all linear;\n    &:hover {\n        background: rgba(255, 255, 255, .6)\n    }\n"]);return $=function(){return n},n}var H=D.a.button($());function X(){var n=Object(L.a)(["\n    color: #FFFFFF;\n    text-transform: uppercase;\n    margin-left: 23px;\n"]);return X=function(){return n},n}function Q(){var n=Object(L.a)(["\n    background: #dfbd00;\n    color: #000000;\n    width: 19px;\n    height: 19px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 700;\n    border-radius: 50%;\n    position: absolute;\n    bottom: -7px;\n    right: -5px;\n"]);return Q=function(){return n},n}function V(){var n=Object(L.a)(["\n    position: relative;\n"]);return V=function(){return n},n}function q(){var n=Object(L.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 43px 0; \n"]);return q=function(){return n},n}var K=D.a.div(q()),W=D.a.div(V()),Y=D.a.div(Q()),Z=D.a.h3(X()),nn=function(n){return o.a.createElement(K,null,o.a.createElement(W,null,o.a.createElement(Y,null,n.total," "),o.a.createElement("img",{src:"/assets/images/bag.png",alt:"Sacola"})),o.a.createElement(Z,null,"Sacola"))};nn.defaultProps={total:1e3};var tn=nn;function en(){var n=Object(L.a)(["\n    display: flex;\n    align-items: center;\n"]);return en=function(){return n},n}function rn(){var n=Object(L.a)(["\n    min-height: 52px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    justify-content: space-between;\n"]);return rn=function(){return n},n}function an(){var n=Object(L.a)(["\n    margin-left: 20px;\n"]);return an=function(){return n},n}function on(){var n=Object(L.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 25px 35px 25px 23px;\n    border-bottom: 2px solid #000000;\n    transition: .4s all linear;\n    &:first-child {\n        border-top: 2px solid #000000;\n    }\n    &:hover {\n        background: #000000;\n        img {\n            filter: brightness(1) invert(1)\n        }\n    }\n"]);return on=function(){return n},n}var cn=D.a.div(on()),ln=D.a.div(an()),un=D.a.div(rn()),sn=D.a.div(en());function pn(){var n=Object(L.a)(["\n    width: 47.5px;\n    min-width: 47.5px;\n    height: 47.5px;\n    background-size: cover;\n    background-position: center center;\n    display: block;\n"]);return pn=function(){return n},n}var fn=D.a.div(pn()),dn=function(n){return o.a.createElement(fn,{style:{backgroundImage:"url('".concat(n.image,"')")}})};dn.defaultProps={image:"../../../assets/images/product-blank.jpg"};var mn=dn;function gn(){var n=Object(L.a)(["\n    color: #FFFFFF;\n    font-size: 1em;\n    font-weight: 700;\n    margin-bottom: 6px;\n    max-width: 330px;\n"]);return gn=function(){return n},n}var vn=D.a.h4(gn()),bn=function(n){return o.a.createElement(vn,null,n.children)};bn.defaultProps={format:"Nome do Produto"};var hn=bn;function xn(){var n=Object(L.a)(["\n    font-weight: 400;\n    color: #999999;\n    font-size: 0.857em;\n"]);return xn=function(){return n},n}var yn=D.a.div(xn()),On=function(n){return o.a.createElement(yn,null,n.size," | ",n.style)};On.defaultProps={size:"GG",style:"Descri\xe7\xe3o do Produto"};var En=On;function jn(){var n=Object(L.a)(["\n    font-weight: 400;\n    color: #999999;\n    font-size: 0.857em;\n"]);return jn=function(){return n},n}var Pn=D.a.p(jn()),Tn=function(n){return o.a.createElement(Pn,null,"Quantidade: ",n.amount)};Tn.defaultProps={title:1};var wn=Tn;function Cn(){var n=Object(L.a)(["\n    cursor: pointer\n"]);return Cn=function(){return n},n}var kn=D.a.img(Cn()),An=function(n){return o.a.createElement(kn,{src:"../../../assets/images/times.png",alt:"Delete",onClick:n.onClick})};function _n(){var n=Object(L.a)(["\n    color: #dfbd00;\n    font-weight: 700;\n    small {\n        font-size: 1em;\n    }\n"]);return _n=function(){return n},n}var Sn=D.a.div(_n()),Fn=function(n){return o.a.createElement(Sn,null,o.a.createElement("div",{dangerouslySetInnerHTML:{__html:j(n.format,n.price)}}))};Fn.defaultProps={format:"R$",price:0};var Rn=Fn,Nn=function(n){return o.a.createElement(cn,null,o.a.createElement(sn,null,o.a.createElement(mn,{image:n.imageUrl}),o.a.createElement(ln,null,o.a.createElement(hn,null,T(n.title,n.description)),o.a.createElement(En,{size:n.size,style:n.style}),o.a.createElement(wn,{amount:n.amount}))),o.a.createElement(un,null,o.a.createElement(An,{onClick:n.onClick}),o.a.createElement(Rn,{format:n.formatPrice,price:n.price})))};Nn.defaultProps={title:"Nome do Produto",description:"15/16 S/N",size:"G",price:50,formatPrice:"R$",amount:1,style:"Descri\xe7\xe3o de estilo",imageUrl:"../../assets/images/product-blank.jpg",imageAlt:"Alt Image"};var zn=Nn;function Gn(){var n=Object(L.a)(["\n    appearance: none;\n    width: calc(100% - 23px - 35px);\n    font-size: 1em;\n    font-weight: 700;\n    text-transform: uppercase;\n    background: #000000;\n    color: #FFFFFF;\n    border: none;\n    box-shadow: none;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    margin: 0 35px 0 23px;\n    transition: .4s all linear;\n    font-family: inherit;\n    &:hover {\n        background: rgba(0, 0, 0, .3);\n    }\n"]);return Gn=function(){return n},n}var Un=D.a.button(Gn()),Ln=function(n){return o.a.createElement(Un,{onClick:n.onClick},"Comprar")};function Dn(){var n=Object(L.a)(["\n    font-size: 0.857em;\n    color: rgba(255, 255, 255, .2);\n    text-transform: uppercase;\n    margin-right: 10px;\n"]);return Dn=function(){return n},n}function In(){var n=Object(L.a)(["\n    color: #dfbd00;\n    font-size: 1.714em;\n    small {\n        font-size: 1em;\n    }\n"]);return In=function(){return n},n}function Mn(){var n=Object(L.a)(["\n    font-size: 1em;\n    color: rgba(255, 255, 255, .4);\n    text-transform: uppercase;\n"]);return Mn=function(){return n},n}function Bn(){var n=Object(L.a)(["\n    text-align: right;\n"]);return Bn=function(){return n},n}function Jn(){var n=Object(L.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin: 31px 35px 33px 23px;\n"]);return Jn=function(){return n},n}var $n=D.a.div(Jn()),Hn=D.a.div(Bn()),Xn=D.a.p(Mn()),Qn=D.a.div(In()),Vn=D.a.div(Dn()),qn=function(n){return o.a.createElement($n,null,o.a.createElement(Xn,null,"Subtotal"),o.a.createElement(Hn,null,o.a.createElement(Qn,null,o.a.createElement("div",{dangerouslySetInnerHTML:{__html:j(n.formatPrice,n.amount)}})),o.a.createElement(Vn,null,P(n.installments,n.amount,n.formatPrice))))};qn.defaultProps={formatPrice:"R$",amount:0,installments:9};var Kn=qn,Wn=function(n){function t(){var n,e;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(s.a)(this,(n=Object(p.a)(t)).call.apply(n,[this].concat(a)))).state={show:!1},e.componentDidMount=function(){e.props.getProductsCart()},e.handleRemove=function(n,t){e.props.deleteProductCart(n,t)},e.handleClear=function(){e.props.clearCart(),e.props.getProductsCart(),setTimeout(function(){this.props.toggleBag("hide")}.bind(Object(f.a)(e)),500)},e}return Object(d.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){var n=this,t=this.props,e=t.cartList,r=t.cartAmount,a=t.bag,i=t.toggleBag;return o.a.createElement(B,{className:!0===a?"show":null},o.a.createElement(J,{className:!0===a?"show":null,onClick:function(){return i("hide")}}),o.a.createElement(tn,{total:e?e.length:null}),o.a.createElement("div",null,o.a.createElement(H,{onClick:function(){return n.handleClear()}},"Limpar Sacola"),e&&e.map(function(t,e){return o.a.createElement(zn,{key:e,title:t.title,description:t.description,imageUrl:w(t.id),size:t.size,formatPrice:t.currencyFormat,price:t.totalPrice,style:t.style,amount:t.amount,onClick:function(){return n.handleRemove(t.id,t.size)}})}),e.length>0?o.a.createElement(Kn,{formatPrice:e?e[0].currencyFormat:"R$",installments:r?r.installments:null,amount:r?r.total:null}):null,o.a.createElement(Ln,{onClick:function(){return n.handleClear()}})))}}]),t}(o.a.Component),Yn=Object(m.d)(Object(g.b)(function(n){return{cartList:n.cart.cartList,bag:n.ui.bag,cartAmount:n.cart.cartAmount}},r))(Wn);function Zn(){var n=Object(L.a)(["\n    max-width: 75%;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    margin-bottom: 50px;\n    transition: .4s all linear;\n"]);return Zn=function(){return n},n}var nt=D.a.div(Zn());function tt(){var n=Object(L.a)(["\n    max-width: 180px;\n    margin: 0 auto 8px;\n    cursor: pointer;\n    overflow: hidden;\n    max-height: 230px;\n    img {\n        min-height: 230px;\n        // max-width: 100%;\n        width: 100%:\n        max-width: 180px;\n        position: relative;\n        transition: .4s all linear;\n    }\n    &:hover {\n        img {\n            opacity: .6;\n        }\n    }\n"]);return tt=function(){return n},n}var et=D.a.div(tt()),rt=function(n){return o.a.createElement(et,null,o.a.createElement("img",Object.assign({},n,{alt:n.alt})))};rt.defaultProps={src:"../../../assets/images/product-blank.jpg",alt:"Alt Image"};var at=rt;function ot(){var n=Object(L.a)(["\n    font-size: 1em;\n    font-weight: 400;\n    margin: 8px -20px 14px;\n    min-height: 38px;\n    position: relative;\n    cursor: pointer;\n    &::after {\n        content: '';\n        width: 15px;\n        height: 2px;\n        background: #dfbd00;\n        display: block;\n        position: absolute;\n        top: 100%;\n        left: 50%;\n        transform: translateX(-50%);\n        margin-top: 7px;\n    }\n"]);return ot=function(){return n},n}var it=D.a.h3(ot()),ct=function(n){return o.a.createElement(it,null,n.children)};ct.defaultProps={children:"Descri\xe7\xe3o do Produto"};var lt=ct;function ut(){var n=Object(L.a)(["\n    font-size: 1.714em;\n    font-weight: 700;\n"]);return ut=function(){return n},n}var st=D.a.div(ut()),pt=function(n){return o.a.createElement(st,null,o.a.createElement("div",{dangerouslySetInnerHTML:{__html:j(n.format,n.price)}}))};pt.defaultProps={format:"R$",price:229.9};var ft=pt;function dt(){var n=Object(L.a)(["\n    font-size: 1em;\n    color: #999999;\n    font-weight: 600;\n"]);return dt=function(){return n},n}var mt=D.a.p(dt()),gt=function(n){return o.a.createElement(mt,null,P(n.installments,n.price,n.formatPrice))};gt.defaultProps={Installments:9};var vt=gt,bt=function(n){return o.a.createElement(nt,{onClick:n.onClick},o.a.createElement(at,{src:n.imageUrl,alt:n.imageAlt}),o.a.createElement(lt,null,T(n.title,n.description)),o.a.createElement(ft,{format:n.formatPrice,price:n.price}),n.installments?o.a.createElement(vt,{installments:n.installments,price:n.price,formatPrice:n.formatPrice}):null)};bt.defaultProps={title:"Nome do Produto",description:"14/15 S/N",formatPrice:"R$",price:299.5,installments:5,imageUrl:"../../assets/images/product-blank.jpg",imageAlt:"Alt Image"};var ht=bt,xt=function(n){function t(){var n,e;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(s.a)(this,(n=Object(p.a)(t)).call.apply(n,[this].concat(a)))).state={products:[]},e.componentDidMount=function(){e.props.getProducts().then(function(n){e.setState({products:n})})},e.handleAdd=function(n,t){var r=C(t);e.props.addProductCart(n,r).then(function(){e.props.toggleBag("show"),e.props.getProductsCart()})},e}return Object(d.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){var n=this,t=this.state.products;return o.a.createElement("div",{className:"homepage"},o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"columns"},t&&t.map(function(t,e){return o.a.createElement("div",{className:"col",key:e},o.a.createElement(ht,{onClick:function(){return n.handleAdd(t.id,t.availableSizes)},title:t.title,imageUrl:w(t.id),description:t.description,formatPrice:t.currencyFormat,price:t.price,installments:t.installments}))}))))}}]),t}(o.a.Component),yt=Object(m.d)(Object(g.b)(function(n){return{products:n.product.products}},r))(xt),Ot=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(yt,null),o.a.createElement(Yn,null))},Et=e(39),jt={products:[]},Pt=e(11),Tt={cartList:[],cartAmount:{total:0,installments:null}},wt={bag:!1},Ct=Object(m.c)({product:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS":return{products:t.payload};default:return n}},cart:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TOTAL_AMOUNT_CART":return Object(Pt.a)({},n,{cartAmount:t.payload});case"GET_PRODUCTS_CART":return Object(Pt.a)({},n,{cartList:t.payload});case"INSERT_PRODUCT_CART":return Object(Pt.a)({},n,{cartList:[].concat(Object(v.a)(n.cartList),[t.payload])});case"UPDATE_CART":return Object(Pt.a)({},n,{cartList:t.payload});default:return n}},ui:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_BAG":return{bag:t.payload};default:return n}}}),kt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,At=Object(m.e)(Ct,kt(Object(m.a)(Et.a)));c.a.render(o.a.createElement(g.a,{store:At},o.a.createElement(Ot,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.c604052d.chunk.js.map