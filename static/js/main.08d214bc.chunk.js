(this.webpackJsonpiceygallery=this.webpackJsonpiceygallery||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),i=(a(20),a(2)),s=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"IceyGallery"),r.a.createElement("h2",null,"Your Pictures"),r.a.createElement("p",null,"Save your memories here \u2665"),r.a.createElement("p",{className:"small"},"The delete function is currently not complete"))},o=a(8),u=a.n(o),m=a(14),p=a(5);a(28),a(22);p.initializeApp({apiKey:"AIzaSyCcNfZusEOM2n3LAEq7Phkx95WkRn-ZDRc",authDomain:"projet-gallery.firebaseapp.com",databaseURL:"https://projet-gallery.firebaseio.com",projectId:"projet-gallery",storageBucket:"projet-gallery.appspot.com",messagingSenderId:"351051766254",appId:"1:351051766254:web:f81878936ec21519dc96ff"});var d=p.storage(),f=p.firestore(),g=p.firestore.FieldValue.serverTimestamp,E=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),o=s[0],p=s[1],E=Object(n.useState)(null),b=Object(i.a)(E,2),v=b[0],y=b[1];return Object(n.useEffect)((function(){var t=d.ref(e.name),a=f.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){p(e)}),Object(m.a)(u.a.mark((function e(){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:return n=e.sent,r=g(),e.next=6,a.add({url:n,createdAt:r});case 6:y(n);case 7:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:v,error:o}},b=a(3),v=function(e){var t=e.file,a=e.setFile,c=E(t),l=c.progress,i=c.url;return Object(n.useEffect)((function(){i&&a(null)}),[i,a]),r.a.createElement(b.a.div,{className:"progress-bar",initial:{width:0},animate:{width:l+"%"}})},y=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),o=s[0],u=s[1],m=["image/png","image/jpeg"];return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&m.includes(t.type)?(c(t),u("")):(c(null),u("Please select an image file (png or jpg)"))}}),r.a.createElement("span",null,"+")),r.a.createElement("div",{className:"output"},o&&r.a.createElement("div",{className:"error"},o),a&&r.a.createElement("div",null,a.name),a&&r.a.createElement(v,{file:a,setFile:c})))},j=a(9),O=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=f.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(j.a)(Object(j.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:r}},h=function(e){var t=e.setSelectedImg,a=O("images").docs;return r.a.createElement("div",{className:"img-grid"},a&&a.map((function(e){return r.a.createElement(b.a.div,{className:"img-wrap",key:e.id,layout:!0,whileHover:{opacity:1},s:!0,onClick:function(){return t(e.url)}},r.a.createElement(b.a.img,{src:e.url,alt:"uploaded pic",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}}),r.a.createElement("button",{className:"delete-button",onClick:function(){return t=e.id,void console.log(t);var t}},"Delete"))})))},S=function(e){var t=e.setSelectedImg,a=e.selectedImg;return r.a.createElement(b.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&t(null)},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(b.a.img,{src:a,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}}))};var k=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(y,null),r.a.createElement(h,{setSelectedImg:c}),a&&r.a.createElement(S,{selectedImg:a,setSelectedImg:c}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.08d214bc.chunk.js.map