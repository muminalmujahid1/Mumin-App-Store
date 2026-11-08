const apps=[
 {name:"Mumin AI",category:"AI",icon:"✦",color:"#e9e4fa",description:"An AI assistant for everyday questions and useful help.",type:"Web app",url:"https://muminalmujahid1.github.io/mumin-ai/",action:"Open app"},
 {name:"Mumin Calculator",category:"Tools",icon:"＋",color:"#e5f2df",description:"A simple calculator for everyday calculations.",type:"Web app",url:"#",action:"Coming soon"},
 {name:"Mumin Clock",category:"Tools",icon:"◷",color:"#e0eff5",description:"A clean clock and time utility.",type:"Web app",url:"#",action:"Coming soon"},
 {name:"Islamic Library",category:"Islamic",icon:"☾",color:"#f7ecd6",description:"A home for useful Islamic reading and resources.",type:"Web app",url:"#",action:"Coming soon"},
 {name:"Movie Watch",category:"Entertainment",icon:"▶",color:"#f8e2e3",description:"Your movie and video discovery project.",type:"Web app",url:"#",action:"Coming soon"},
 {name:"Study Tools",category:"Education",icon:"✎",color:"#e4e9f8",description:"Helpful tools for learning and study.",type:"Web app",url:"#",action:"Coming soon"}
];
let selected="All";
const grid=document.getElementById("appGrid"),search=document.getElementById("searchInput"),count=document.getElementById("resultCount");
function render(){const q=search.value.trim().toLowerCase();const list=apps.filter(a=>(selected==="All"||a.category===selected)&&(a.name+" "+a.description+" "+a.category).toLowerCase().includes(q));count.textContent=list.length+" apps";grid.innerHTML=list.length?list.map((a,i)=>`<article class="app-card" data-index="${apps.indexOf(a)}"><div class="app-icon" style="background:${a.color}">${a.icon}</div><div class="app-info"><h3>${a.name}</h3><p>${a.description}</p><span class="tag">${a.category}</span> <span class="meta">· ${a.type}</span></div></article>`).join(""):'<div class="empty">No apps found. Try another search.</div>';}
document.getElementById("categories").addEventListener("click",e=>{const b=e.target.closest("button[data-category]");if(!b)return;selected=b.dataset.category;document.querySelectorAll(".chip").forEach(x=>x.classList.toggle("active",x===b));render();});
search.addEventListener("input",render);
const dlg=document.getElementById("appDialog"),content=document.getElementById("dialogContent");
grid.addEventListener("click",e=>{const card=e.target.closest(".app-card");if(!card)return;const a=apps[Number(card.dataset.index)];content.innerHTML=`<div class="dialog-icon">${a.icon}</div><span class="tag">${a.category}</span><h2>${a.name}</h2><p class="dialog-desc">${a.description}</p><p class="meta">${a.type} · Published by Mumin App Store</p>${a.url!=="#" ? `<a class="primary" href="${a.url}" target="_blank" rel="noopener">Open app ↗</a>` : `<span class="primary" style="opacity:.65">${a.action}</span>`}`;dlg.showModal();});
document.getElementById("closeDialog").addEventListener("click",()=>dlg.close());
document.getElementById("year").textContent=new Date().getFullYear();
let deferredPrompt;const installBtn=document.getElementById("installBtn");
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;installBtn.hidden=false;});
installBtn.addEventListener("click",async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;installBtn.hidden=true;});
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(console.error));
render();