(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-373504d6"],{"0cb2":function(t,e,n){var r=n("7b0b"),a=Math.floor,c="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,s,l,u){var d=n+t.length,f=s.length,h=o;return void 0!==l&&(l=r(l),h=i),c.call(u,h,(function(r,c){var i;switch(c.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(d);case"<":i=l[c.slice(1,-1)];break;default:var o=+c;if(0===o)return r;if(o>f){var u=a(o/10);return 0===u?r:u<=f?void 0===s[u-1]?c.charAt(1):s[u-1]+c.charAt(1):r}i=s[o-1]}return void 0===i?"":i}))}},1276:function(t,e,n){"use strict";var r=n("d784"),a=n("44e7"),c=n("825a"),i=n("1d80"),o=n("4840"),s=n("8aa5"),l=n("50c4"),u=n("14c3"),d=n("9263"),f=n("9f7f"),h=f.UNSUPPORTED_Y,b=[].push,p=Math.min,v=4294967295;r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(i(this)),c=void 0===n?v:n>>>0;if(0===c)return[];if(void 0===t)return[r];if(!a(t))return e.call(r,t,c);var o,s,l,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,p=new RegExp(t.source,f+"g");while(o=d.call(p,r)){if(s=p.lastIndex,s>h&&(u.push(r.slice(h,o.index)),o.length>1&&o.index<r.length&&b.apply(u,o.slice(1)),l=o[0].length,h=s,u.length>=c))break;p.lastIndex===o.index&&p.lastIndex++}return h===r.length?!l&&p.test("")||u.push(""):u.push(r.slice(h)),u.length>c?u.slice(0,c):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var a=i(this),c=void 0==e?void 0:e[t];return void 0!==c?c.call(e,a,n):r.call(String(a),e,n)},function(t,a){var i=n(r,t,this,a,r!==e);if(i.done)return i.value;var d=c(t),f=String(this),b=o(d,RegExp),g=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(h?"g":"y"),x=new b(h?"^(?:"+d.source+")":d,m),O=void 0===a?v:a>>>0;if(0===O)return[];if(0===f.length)return null===u(x,f)?[f]:[];var j=0,y=0,E=[];while(y<f.length){x.lastIndex=h?0:y;var S,A=u(x,h?f.slice(y):f);if(null===A||(S=p(l(x.lastIndex+(h?y:0)),f.length))===j)y=s(f,y,g);else{if(E.push(f.slice(j,y)),E.length===O)return E;for(var I=1;I<=A.length-1;I++)if(E.push(A[I]),E.length===O)return E;y=j=S}}return E.push(f.slice(j)),E}]}),h)},"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"1dde":function(t,e,n){var r=n("d039"),a=n("b622"),c=n("2d00"),i=a("species");t.exports=function(t){return c>=51||!r((function(){var e=[],n=e.constructor={};return n[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),a=n("825a"),c=n("d039"),i=n("ad6d"),o="toString",s=RegExp.prototype,l=s[o],u=c((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=o;(u||d)&&r(RegExp.prototype,o,(function(){var t=a(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?i.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"395d":function(t,e,n){"use strict";n.r(e);n("b0c0");var r=n("7a23"),a={class:"container"},c=Object(r["h"])("h1",{class:"text-center"},"購物車",-1),i={class:"row justify-content-center"},o={class:"col-6"},s={class:"text-end"},l={class:"table align-middle"},u=Object(r["h"])("thead",null,[Object(r["h"])("tr",null,[Object(r["h"])("th"),Object(r["h"])("th",null,"品名"),Object(r["h"])("th",{style:{width:"150px"}},"數量/單位"),Object(r["h"])("th",null,"單價")])],-1),d={key:0,class:"text-success"},f={class:"input-group input-group-sm"},h={class:"input-group mb-3"},b={class:"input-group-text",id:"basic-addon2"},p={class:"text-end"},v={key:0,class:"text-success"},g=Object(r["h"])("td",{colspan:"3",class:"text-end"},"總計",-1),m={class:"text-end"},x={key:0},O=Object(r["h"])("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),j={class:"text-end text-success"},y={class:"my-5 row justify-content-center"},E={class:"mb-3"},S=Object(r["h"])("label",{for:"email",class:"form-label"},"Email*",-1),A={class:"mb-3"},I=Object(r["h"])("label",{for:"name",class:"form-label"},"收件人姓名*",-1),C={class:"mb-3"},R=Object(r["h"])("label",{for:"tel",class:"form-label"},"收件人電話*",-1),w={class:"mb-3"},_=Object(r["h"])("label",{for:"address",class:"form-label"},"收件人地址*",-1),$={class:"mb-3"},k=Object(r["h"])("label",{for:"message",class:"form-label"},"留言",-1),T={class:"text-end"};function U(t,e,n,U,L,P){var V=Object(r["A"])("Field"),D=Object(r["A"])("ErrorMessage"),B=Object(r["A"])("Form"),N=Object(r["A"])("Loading");return Object(r["t"])(),Object(r["e"])(r["a"],null,[Object(r["h"])("div",a,[c,Object(r["h"])("div",i,[Object(r["h"])("div",o,[Object(r["h"])("div",s,[Object(r["h"])("button",{class:"btn btn-outline-danger",type:"button",disabled:!L.hasCartsItems,onClick:e[1]||(e[1]=function(){return P.deleteAllCarts&&P.deleteAllCarts.apply(P,arguments)})}," 清空購物車 ",8,["disabled"])]),Object(r["h"])("table",l,[u,Object(r["h"])("tbody",null,[L.cart.carts?(Object(r["t"])(!0),Object(r["e"])(r["a"],{key:0},Object(r["y"])(L.cart.carts,(function(t){return Object(r["t"])(),Object(r["e"])("tr",{key:t.id},[Object(r["h"])("td",null,[Object(r["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return P.removeCartItem(t.id)},disabled:L.loadingStatus.loadingItem===t.id}," 移除 ",8,["onClick","disabled"])]),Object(r["h"])("td",null,[Object(r["g"])(Object(r["D"])(t.product.title)+" ",1),t.coupon?(Object(r["t"])(),Object(r["e"])("div",d," 已套用優惠券 ")):Object(r["f"])("",!0)]),Object(r["h"])("td",null,[Object(r["h"])("div",f,[Object(r["h"])("div",h,[Object(r["L"])(Object(r["h"])("input",{class:"form-control",type:"number",min:"1","onUpdate:modelValue":function(e){return t.qty=e},onBlur:function(e){return P.updateCart(t)},disabled:L.loadingStatus.loadingItem===t.id},null,40,["onUpdate:modelValue","onBlur","disabled"]),[[r["G"],t.qty,void 0,{number:!0}]]),Object(r["h"])("span",b,Object(r["D"])(t.product.unit),1)])])]),Object(r["h"])("td",p,[L.cart.final_total!==L.cart.total?(Object(r["t"])(),Object(r["e"])("small",v,"折扣價：")):Object(r["f"])("",!0),Object(r["g"])(" "+Object(r["D"])(P.toThousand(t.final_total)),1)])])})),128)):Object(r["f"])("",!0)]),Object(r["h"])("tfoot",null,[Object(r["h"])("tr",null,[g,Object(r["h"])("td",m,Object(r["D"])(P.toThousand(L.cart.total)),1)]),L.cart.final_total!==L.cart.total?(Object(r["t"])(),Object(r["e"])("tr",x,[O,Object(r["h"])("td",j,Object(r["D"])(P.toThousand(L.cart.final_total)),1)])):Object(r["f"])("",!0)])])])]),Object(r["h"])("div",y,[Object(r["h"])(B,{ref:"form",class:"col-md-6",onSubmit:P.createOrder},{default:Object(r["K"])((function(t){var n=t.errors;return[Object(r["h"])("div",E,[S,Object(r["h"])(V,{id:"email",name:"email",type:"email",placeholder:"請輸入 Email",class:["form-control",{"is-invalid":n["email"]}],rules:"email|required",modelValue:L.form.user.email,"onUpdate:modelValue":e[2]||(e[2]=function(t){return L.form.user.email=t})},null,8,["class","modelValue"]),Object(r["h"])(D,{name:"email",class:"invalid-feedback"})]),Object(r["h"])("div",A,[I,Object(r["h"])(V,{id:"name",name:"姓名",type:"text",placeholder:"請輸入姓名",class:["form-control",{"is-invalid":n["姓名"]}],rules:"required",modelValue:L.form.user.name,"onUpdate:modelValue":e[3]||(e[3]=function(t){return L.form.user.name=t})},null,8,["class","modelValue"]),Object(r["h"])(D,{name:"姓名",class:"invalid-feedback"})]),Object(r["h"])("div",C,[R,Object(r["h"])(V,{id:"tel",name:"電話",type:"text",placeholder:"請輸入電話",class:["form-control",{"is-invalid":n["電話"]}],rules:"required|min:8|max:10",modelValue:L.form.user.tel,"onUpdate:modelValue":e[4]||(e[4]=function(t){return L.form.user.tel=t})},null,8,["class","modelValue"]),Object(r["h"])(D,{name:"電話",class:"invalid-feedback"})]),Object(r["h"])("div",w,[_,Object(r["h"])(V,{id:"address",name:"地址",type:"text",placeholder:"請輸入地址",class:["form-control",{"is-invalid":n["地址"]}],rules:"required",modelValue:L.form.user.address,"onUpdate:modelValue":e[5]||(e[5]=function(t){return L.form.user.address=t})},null,8,["class","modelValue"]),Object(r["h"])(D,{name:"地址",class:"invalid-feedback"})]),Object(r["h"])("div",$,[k,Object(r["L"])(Object(r["h"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":e[6]||(e[6]=function(t){return L.form.message=t})},null,512),[[r["G"],L.form.message]])]),Object(r["h"])("div",T,[Object(r["h"])("button",{type:"submit",class:"btn btn-danger",disabled:!L.hasCartsItems},"送出訂單",8,["disabled"])])]})),_:1},8,["onSubmit"])])]),Object(r["h"])(N,{active:L.isLoading},null,8,["active"])],64)}n("99af"),n("ac1f"),n("1276"),n("d3b7"),n("25f0"),n("5319"),n("a15b");var L={data:function(){return{cart:{total:0,final_total:0,carts:[]},form:{user:{name:"",email:"",tel:"",address:""},message:""},hasCartsItems:!1,loadingStatus:{loadingItem:""},isLoading:!1}},methods:{getCart:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/cart");this.$http.get(e).then((function(e){e.data.success?t.cart=e.data.data:t.errorAlert(e.data.message),t.isLoading=!1})).catch((function(t){console.dir(t)}))},updateCart:function(t){var e=this;this.isLoading=!0,this.loadingStatus.loadingItem=t.id;var n={product_id:t.product_id,qty:t.qty},r="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/cart/").concat(t.id);this.$http.put(r,{data:n}).then((function(t){t.data.success&&(e.getCart(),e.loadingStatus.loadingItem=""),e.isLoading=!1,e.successAlert(t.data.message)})).catch((function(t){console.dir(t)}))},removeCartItem:function(t){var e=this;this.isLoading=!0;var n="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/cart/").concat(t);this.$http.delete(n).then((function(t){t.data.success&&e.getCart(),e.isLoading=!1,e.successAlert(t.data.message)})).catch((function(t){console.dir(t)}))},deleteAllCarts:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/carts");this.$http.delete(e).then((function(e){e.data.success&&t.getCart(),t.successAlert(e.data.message),t.isLoading=!1})).catch((function(t){console.dir(t)}))},createOrder:function(){var t=this;this.isLoading=!0;var e=this.form,n="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peter1024","/order");this.$http.post(n,{data:e}).then((function(e){e.data.success?(t.getCart(),t.$refs.form.resetForm(),t.successAlert(e.data.message)):t.errorAlert(e.data.message),t.isLoading=!1})).catch((function(t){console.dir(t)}))},toThousand:function(t){var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")},successAlert:function(t){this.$swal.fire({icon:"success",title:t,showConfirmButton:!1,timer:1500})},errorAlert:function(t){this.$swal.fire({icon:"error",title:"Oops...",text:t})}},watch:{cart:function(){this.hasCartsItems=!!this.cart.carts.length}},created:function(){this.getCart()}};L.render=U;e["default"]=L},"44e7":function(t,e,n){var r=n("861d"),a=n("c6b6"),c=n("b622"),i=c("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==a(t))}},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),c=n("50c4"),i=n("a691"),o=n("1d80"),s=n("8aa5"),l=n("0cb2"),u=n("14c3"),d=Math.max,f=Math.min,h=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var b=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,p=r.REPLACE_KEEPS_$0,v=b?"$":"$0";return[function(n,r){var a=o(this),c=void 0==n?void 0:n[t];return void 0!==c?c.call(n,a,r):e.call(String(a),n,r)},function(t,r){if(!b&&p||"string"===typeof r&&-1===r.indexOf(v)){var o=n(e,t,this,r);if(o.done)return o.value}var g=a(t),m=String(this),x="function"===typeof r;x||(r=String(r));var O=g.global;if(O){var j=g.unicode;g.lastIndex=0}var y=[];while(1){var E=u(g,m);if(null===E)break;if(y.push(E),!O)break;var S=String(E[0]);""===S&&(g.lastIndex=s(m,c(g.lastIndex),j))}for(var A="",I=0,C=0;C<y.length;C++){E=y[C];for(var R=String(E[0]),w=d(f(i(E.index),m.length),0),_=[],$=1;$<E.length;$++)_.push(h(E[$]));var k=E.groups;if(x){var T=[R].concat(_,w,m);void 0!==k&&T.push(k);var U=String(r.apply(void 0,T))}else U=l(R,m,w,_,k,r);w>=I&&(A+=m.slice(I,w)+U,I=w+R.length)}return A+m.slice(I)}]}))},"65f0":function(t,e,n){var r=n("861d"),a=n("e8b5"),c=n("b622"),i=c("species");t.exports=function(t,e){var n;return a(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},8418:function(t,e,n){"use strict";var r=n("c04e"),a=n("9bf2"),c=n("5c6c");t.exports=function(t,e,n){var i=r(e);i in t?a.f(t,i,c(0,n)):t[i]=n}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),c=n("5692"),i=RegExp.prototype.exec,o=c("native-string-replace",String.prototype.replace),s=i,l=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],f=l||d||u;f&&(s=function(t){var e,n,a,c,s=this,f=u&&s.sticky,h=r.call(s),b=s.source,p=0,v=t;return f&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),v=String(t).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==t[s.lastIndex-1])&&(b="(?: "+b+")",v=" "+v,p++),n=new RegExp("^(?:"+b+")",h)),d&&(n=new RegExp("^"+b+"$(?!\\s)",h)),l&&(e=s.lastIndex),a=i.call(f?n:s,v),f?a?(a.input=a.input.slice(p),a[0]=a[0].slice(p),a.index=s.lastIndex,s.lastIndex+=a[0].length):s.lastIndex=0:l&&a&&(s.lastIndex=s.global?a.index+a[0].length:e),d&&a&&a.length>1&&o.call(a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),t.exports=s},"99af":function(t,e,n){"use strict";var r=n("23e7"),a=n("d039"),c=n("e8b5"),i=n("861d"),o=n("7b0b"),s=n("50c4"),l=n("8418"),u=n("65f0"),d=n("1dde"),f=n("b622"),h=n("2d00"),b=f("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",g=h>=51||!a((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),m=d("concat"),x=function(t){if(!i(t))return!1;var e=t[b];return void 0!==e?!!e:c(t)},O=!g||!m;r({target:"Array",proto:!0,forced:O},{concat:function(t){var e,n,r,a,c,i=o(this),d=u(i,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(c=-1===e?i:arguments[e],x(c)){if(a=s(c.length),f+a>p)throw TypeError(v);for(n=0;n<a;n++,f++)n in c&&l(d,f,c[n])}else{if(f>=p)throw TypeError(v);l(d,f++,c)}return d.length=f,d}})},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,e,n){"use strict";var r=n("23e7"),a=n("44ad"),c=n("fc6a"),i=n("a640"),o=[].join,s=a!=Object,l=i("join",",");r({target:"Array",proto:!0,forced:s||!l},{join:function(t){return o.call(c(this),void 0===t?",":t)}})},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,n){var r=n("83ab"),a=n("9bf2").f,c=Function.prototype,i=c.toString,o=/^\s*function ([^ (]*)/,s="name";r&&!(s in c)&&a(c,s,{configurable:!0,get:function(){try{return i.call(this).match(o)[1]}catch(t){return""}}})},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("9263"),c=n("d039"),i=n("b622"),o=n("9112"),s=i("species"),l=RegExp.prototype,u=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),h=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),b=!c((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var p=i(t),v=!c((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=v&&!c((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!v||!g||"replace"===t&&(!u||!d||h)||"split"===t&&!b){var m=/./[p],x=n(p,""[t],(function(t,e,n,r,c){var i=e.exec;return i===a||i===l.exec?v&&!c?{done:!0,value:m.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),O=x[0],j=x[1];r(String.prototype,t,O),r(l,p,2==e?function(t,e){return j.call(t,this,e)}:function(t){return j.call(t,this)})}f&&o(l[p],"sham",!0)}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-373504d6.56204dc2.js.map