"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6642],{6642:(D,y,p)=>{p.r(y),p.d(y,{ion_toast:()=>T});var x=p(5861),r=p(8411),_=p(3365),g=p(839),C=p(3830),f=p(6710),h=p(3645),d=p(3567),a=p(3395),s=p(6410),v=p(6225);const k=(t,e)=>{const o=(0,s.c)(),n=(0,s.c)(),{position:i,top:c,bottom:u}=e,l=(0,g.g)(t).querySelector(".toast-wrapper");switch(n.addElement(l),i){case"top":n.fromTo("transform","translateY(-100%)",`translateY(${c})`);break;case"middle":const m=Math.floor(t.clientHeight/2-l.clientHeight/2);l.style.top=`${m}px`,n.fromTo("opacity",.01,1);break;default:n.fromTo("transform","translateY(100%)",`translateY(${u})`)}return o.easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(n)},w=(t,e)=>{const o=(0,s.c)(),n=(0,s.c)(),{position:i,top:c,bottom:u}=e,l=(0,g.g)(t).querySelector(".toast-wrapper");switch(n.addElement(l),i){case"top":n.fromTo("transform",`translateY(${c})`,"translateY(-100%)");break;case"middle":n.fromTo("opacity",.99,0);break;default:n.fromTo("transform",`translateY(${u})`,"translateY(100%)")}return o.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)},A=(t,e)=>{const o=(0,s.c)(),n=(0,s.c)(),{position:i,top:c,bottom:u}=e,l=(0,g.g)(t).querySelector(".toast-wrapper");switch(n.addElement(l),i){case"top":l.style.top=c,n.fromTo("opacity",.01,1);break;case"middle":const m=Math.floor(t.clientHeight/2-l.clientHeight/2);l.style.top=`${m}px`,n.fromTo("opacity",.01,1);break;default:l.style.bottom=u,n.fromTo("opacity",.01,1)}return o.easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(n)},P=t=>{const e=(0,s.c)(),o=(0,s.c)(),i=(0,g.g)(t).querySelector(".toast-wrapper");return o.addElement(i).fromTo("opacity",.99,0),e.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(o)};const T=class{constructor(t){(0,r.r)(this,t),this.didPresent=(0,r.d)(this,"ionToastDidPresent",7),this.willPresent=(0,r.d)(this,"ionToastWillPresent",7),this.willDismiss=(0,r.d)(this,"ionToastWillDismiss",7),this.didDismiss=(0,r.d)(this,"ionToastDidDismiss",7),this.didPresentShorthand=(0,r.d)(this,"didPresent",7),this.willPresentShorthand=(0,r.d)(this,"willPresent",7),this.willDismissShorthand=(0,r.d)(this,"willDismiss",7),this.didDismissShorthand=(0,r.d)(this,"didDismiss",7),this.delegateController=(0,h.d)(this),this.lockController=(0,C.c)(),this.triggerController=(0,h.e)(),this.customHTMLEnabled=a.c.get("innerHTMLTemplatesEnabled",_.E),this.presented=!1,this.dispatchCancelHandler=e=>{if((0,h.i)(e.detail.role)){const n=this.getButtons().find(i=>"cancel"===i.role);this.callButtonHandler(n)}},this.revealContentToScreenReader=!1,this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.color=void 0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.cssClass=void 0,this.duration=a.c.getNumber("toastDuration",0),this.header=void 0,this.layout="baseline",this.message=void 0,this.keyboardClose=!1,this.position="bottom",this.positionAnchor=void 0,this.buttons=void 0,this.translucent=!1,this.animated=!0,this.icon=void 0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0}onIsOpenChange(t,e){!0===t&&!1===e?this.present():!1===t&&!0===e&&this.dismiss()}triggerChanged(){const{trigger:t,el:e,triggerController:o}=this;t&&o.addClickListener(e,t)}connectedCallback(){(0,h.j)(this.el),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){(0,h.k)(this.el)}componentDidLoad(){!0===this.isOpen&&(0,g.r)(()=>this.present())}present(){var t=this;return(0,x.Z)(function*(){const e=yield t.lockController.lock();yield t.delegateController.attachViewToDom();const{el:o,position:n}=t,c=function M(t,e,o,n){let i;if(i="md"===o?8:"top"===t?10:-10,e&&v.w){!function O(t,e){null===t.offsetParent&&(0,f.p)("The positionAnchor element for ion-toast was found in the DOM, but appears to be hidden. This may lead to unexpected positioning of the toast.",e)}(e,n);const c=e.getBoundingClientRect();return"top"===t?i+=c.bottom:"bottom"===t&&("md"===o?i+=v.w.innerHeight-c.top:i-=v.w.innerHeight-c.top),{top:`${i}px`,bottom:`${i}px`}}return{top:`calc(${i}px + var(--ion-safe-area-top, 0px))`,bottom:"md"===o?`calc(${i}px + var(--ion-safe-area-bottom, 0px))`:`calc(${i}px - var(--ion-safe-area-bottom, 0px))`}}(n,t.getAnchorElement(),(0,a.b)(t),o);t.lastPresentedPosition=c,yield(0,h.f)(t,"toastEnter",k,A,{position:n,top:c.top,bottom:c.bottom}),t.revealContentToScreenReader=!0,t.duration>0&&(t.durationTimeout=setTimeout(()=>t.dismiss(void 0,"timeout"),t.duration)),e()})()}dismiss(t,e){var o=this;return(0,x.Z)(function*(){var n,i;const c=yield o.lockController.lock(),{durationTimeout:u,position:b,lastPresentedPosition:l}=o;u&&clearTimeout(u);const m=yield(0,h.g)(o,t,e,"toastLeave",w,P,{position:b,top:null!==(n=null==l?void 0:l.top)&&void 0!==n?n:"",bottom:null!==(i=null==l?void 0:l.bottom)&&void 0!==i?i:""});return m&&(o.delegateController.removeViewFromDom(),o.revealContentToScreenReader=!1),o.lastPresentedPosition=void 0,c(),m})()}onDidDismiss(){return(0,h.h)(this.el,"ionToastDidDismiss")}onWillDismiss(){return(0,h.h)(this.el,"ionToastWillDismiss")}getButtons(){return this.buttons?this.buttons.map(e=>"string"==typeof e?{text:e}:e):[]}getAnchorElement(){const{position:t,positionAnchor:e,el:o}=this;if(void 0!==e){if("middle"===t&&void 0!==e)return void(0,f.p)('The positionAnchor property is ignored when using position="middle".',this.el);if("string"==typeof e){const n=document.getElementById(e);return null===n?void(0,f.p)(`An anchor element with an ID of "${e}" was not found in the DOM.`,o):n}if(e instanceof HTMLElement)return e;(0,f.p)("Invalid positionAnchor value:",e,o)}}buttonClick(t){var e=this;return(0,x.Z)(function*(){const o=t.role;return(0,h.i)(o)||(yield e.callButtonHandler(t))?e.dismiss(void 0,o):Promise.resolve()})()}callButtonHandler(t){return(0,x.Z)(function*(){if(null!=t&&t.handler)try{if(!1===(yield(0,h.s)(t.handler)))return!1}catch(e){console.error(e)}return!0})()}renderButtons(t,e){if(0===t.length)return;const o=(0,a.b)(this);return(0,r.h)("div",{class:{"toast-button-group":!0,[`toast-button-group-${e}`]:!0}},t.map(i=>(0,r.h)("button",Object.assign({},i.htmlAttributes,{type:"button",class:L(i),tabIndex:0,onClick:()=>this.buttonClick(i),part:j(i)}),(0,r.h)("div",{class:"toast-button-inner"},i.icon&&(0,r.h)("ion-icon",{"aria-hidden":"true",icon:i.icon,slot:void 0===i.text?"icon-only":void 0,class:"toast-button-icon"}),i.text),"md"===o&&(0,r.h)("ion-ripple-effect",{type:void 0!==i.icon&&void 0===i.text?"unbounded":"bounded"}))))}renderToastMessage(t,e=null){const{customHTMLEnabled:o,message:n}=this;return o?(0,r.h)("div",{key:t,"aria-hidden":e,class:"toast-message",part:"message",innerHTML:(0,_.a)(n)}):(0,r.h)("div",{key:t,"aria-hidden":e,class:"toast-message",part:"message"},n)}renderHeader(t,e=null){return(0,r.h)("div",{key:t,class:"toast-header","aria-hidden":e,part:"header"},this.header)}render(){const{layout:t,el:e,revealContentToScreenReader:o,header:n,message:i}=this,c=this.getButtons(),u=c.filter(E=>"start"===E.side),b=c.filter(E=>"start"!==E.side),l=(0,a.b)(this),m={"toast-wrapper":!0,[`toast-${this.position}`]:!0,[`toast-layout-${t}`]:!0};return"stacked"===t&&u.length>0&&b.length>0&&(0,f.p)("This toast is using start and end buttons with the stacked toast layout. We recommend following the best practice of using either start or end buttons with the stacked toast layout.",e),(0,r.h)(r.H,Object.assign({tabindex:"-1"},this.htmlAttributes,{style:{zIndex:`${6e4+this.overlayIndex}`},class:(0,d.c)(this.color,Object.assign(Object.assign({[l]:!0},(0,d.g)(this.cssClass)),{"overlay-hidden":!0,"toast-translucent":this.translucent})),onIonToastWillDismiss:this.dispatchCancelHandler}),(0,r.h)("div",{class:m},(0,r.h)("div",{class:"toast-container",part:"container"},this.renderButtons(u,"start"),void 0!==this.icon&&(0,r.h)("ion-icon",{class:"toast-icon",part:"icon",icon:this.icon,lazy:!1,"aria-hidden":"true"}),(0,r.h)("div",{class:"toast-content",role:"status","aria-atomic":"true","aria-live":"polite"},!o&&void 0!==n&&this.renderHeader("oldHeader","true"),!o&&void 0!==i&&this.renderToastMessage("oldMessage","true"),o&&void 0!==n&&this.renderHeader("header"),o&&void 0!==i&&this.renderToastMessage("header")),this.renderButtons(b,"end"))))}get el(){return(0,r.f)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},L=t=>Object.assign({"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text,[`toast-button-${t.role}`]:void 0!==t.role,"ion-focusable":!0,"ion-activatable":!0},(0,d.g)(t.cssClass)),j=t=>(0,h.i)(t.role)?"button cancel":"button";T.style={ios:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(:dir(rtl)){left:unset;right:unset;right:0}}}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports (inset-inline-start: 0){.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}}@supports not (inset-inline-start: 0){.toast-wrapper{left:var(--start);right:var(--end)}:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}@supports selector(:dir(rtl)){.toast-wrapper:dir(rtl){left:unset;right:unset;left:var(--end);right:var(--start)}}}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--max-height:478px;--start:10px;--end:10px;font-size:clamp(14px, 0.875rem, 43.4px)}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}:host(.ion-color.toast-translucent) .toast-wrapper{background:rgba(var(--ion-color-base-rgb), 0.8)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:15px;padding-bottom:15px}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;min-height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:clamp(17px, 1.0625rem, 21.998px);font-weight:500;overflow:hidden}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",md:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(:dir(rtl)){left:unset;right:unset;right:0}}}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports (inset-inline-start: 0){.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}}@supports not (inset-inline-start: 0){.toast-wrapper{left:var(--start);right:var(--end)}:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}@supports selector(:dir(rtl)){.toast-wrapper:dir(rtl){left:unset;right:unset;left:var(--end);right:var(--start)}}}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:0.875rem}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}.toast-content{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:14px;padding-bottom:14px}.toast-header{margin-bottom:2px;font-weight:500;line-height:1.25rem}.toast-message{line-height:1.25rem}.toast-layout-baseline .toast-button-group-start{-webkit-margin-start:8px;margin-inline-start:8px}.toast-layout-stacked .toast-button-group-start{-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px}.toast-layout-baseline .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px}.toast-layout-stacked .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px;margin-bottom:8px}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:0.875rem;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}"}},3567:(D,y,p)=>{p.d(y,{c:()=>_,g:()=>C,h:()=>r,o:()=>h});var x=p(5861);const r=(d,a)=>null!==a.closest(d),_=(d,a)=>"string"==typeof d&&d.length>0?Object.assign({"ion-color":!0,[`ion-color-${d}`]:!0},a):a,C=d=>{const a={};return(d=>void 0!==d?(Array.isArray(d)?d:d.split(" ")).filter(s=>null!=s).map(s=>s.trim()).filter(s=>""!==s):[])(d).forEach(s=>a[s]=!0),a},f=/^[a-z][a-z0-9+\-.]*:/,h=function(){var d=(0,x.Z)(function*(a,s,v,k){if(null!=a&&"#"!==a[0]&&!f.test(a)){const w=document.querySelector("ion-router");if(w)return null!=s&&s.preventDefault(),w.push(a,v,k)}return!1});return function(s,v,k,w){return d.apply(this,arguments)}}()}}]);