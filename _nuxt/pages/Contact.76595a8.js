(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{210:function(e,t,n){var content=n(222);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(35).default)("1e7cc75c",content,!0,{sourceMap:!1})},220:function(e,t,n){e.exports=n.p+"img/contact.8d28320.jpg"},221:function(e,t,n){"use strict";var o=n(210);n.n(o).a},222:function(e,t,n){(t=n(34)(!1)).push([e.i,".container[data-v-79bc7748]{margin-top:120px}form[data-v-79bc7748]{margin-top:40px;text-align:left}",""]),e.exports=t},235:function(e,t,n){"use strict";n.r(t);n(11),n(53);var o=n(17),r={data:function(){return{showAlert:!1,formData:{name:"",email:"",message:""}}},methods:{sendMessage:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t,(data=new FormData).append("Name",n.formData.name),data.append("Email",n.formData.email),data.append("Message",n.formData.message),fetch("https://formspree.io/f/mvodbwva",{method:"POST",body:data,headers:{Accept:"application/json"}}).then((function(e){e.ok?(t.showAlert=!0,form.reset()):alert("Sending message failed, please try again")}));case 6:case"end":return e.stop()}}),e)})))()}},head:{title:"Contact 📧 - Puneeth Chanda",meta:[{hid:"description",name:"description",content:"Do you have any enquires? Send a message now to Puneeth Chanda"},{hid:"og:title",name:"og:title",content:"Contact 📧 - Puneeth Chanda"},{property:"og:description",content:"Do you have any enquires? Send a message now to Puneeth Chanda"},{hid:"og:image",name:"og:image",content:n(220)}]}},m=(n(221),n(26)),component=Object(m.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{staticClass:"page animate__animated animate__fadeIn"},[n("b-row",{staticClass:"justify-content-center"},[n("b-col",{attrs:{cols:"md-6"}},[n("h2",[e._v("Get in touch 💌")]),e._v(" "),n("p",{staticClass:"text-left"},[e._v("\n        If you have any question or just want to say hi, i'll try my best to\n        get back to you.\n      ")]),e._v(" "),e.showAlert?n("b-alert",{attrs:{show:"",variant:"success"}},[n("strong",[e._v("All done 🎉")]),n("br"),e._v("\n        Thanks for reaching out "+e._s(this.formData.name)+", I'll reply as soon\n        as i can.\n      ")]):e._e(),e._v(" "),n("b-form",{staticClass:"mb-5",on:{submit:function(t){return t.preventDefault(),e.sendMessage(t)}}},[n("b-form-group",{attrs:{id:"input-group-1",label:"Your Name:"}},[n("b-form-input",{attrs:{required:""},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),n("b-form-group",{attrs:{id:"input-group-2",label:"Your Email:"}},[n("b-form-input",{attrs:{type:"email",required:""},model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email",t)},expression:"formData.email"}})],1),e._v(" "),n("b-form-group",{attrs:{id:"input-group-3",label:"Your Message"}},[n("b-form-textarea",{attrs:{"no-resize":"",rows:"3",placeholder:"Watsup Elijah, are you available for..",required:""},model:{value:e.formData.message,callback:function(t){e.$set(e.formData,"message",t)},expression:"formData.message"}})],1),e._v(" "),n("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1)],1)],1)}),[],!1,null,"79bc7748",null);t.default=component.exports}}]);