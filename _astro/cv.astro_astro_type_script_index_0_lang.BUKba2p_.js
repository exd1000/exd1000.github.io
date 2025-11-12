function u(){const e=history.state;(!e||e.trap!=="cv")&&(history.replaceState({trap:"entry"},"",location.href),history.pushState({trap:"cv"},"",location.href))}if(sessionStorage.getItem("cvUnlocked"))sessionStorage.setItem("isExternalEntry","false");else{const e=!document.referrer||!document.referrer.includes(window.location.origin);sessionStorage.setItem("isExternalEntry",e?"true":"false"),e&&window.addEventListener("DOMContentLoaded",()=>{c()})}document.addEventListener("DOMContentLoaded",()=>{const e="luckyyou",t=document.getElementById("unlockModal"),n=document.getElementById("passwordInput"),i=document.getElementById("unlockButton"),l=document.getElementById("unlockError"),r=document.getElementById("protectedContent");sessionStorage.getItem("cvUnlocked")==="true"?(t.classList.add("hidden"),r.classList.remove("hidden"),(!history.state||history.state.trap!=="cv")&&setTimeout(()=>{u()},50)):t.classList.remove("hidden");const d=document.querySelectorAll(".fade-section"),h=new IntersectionObserver(o=>{o.forEach(s=>{s.isIntersecting?s.target.classList.add("visible"):s.target.classList.remove("visible")})},{threshold:.1});d.forEach(o=>h.observe(o)),i.addEventListener("click",()=>{n.value.trim().toLowerCase()===e?(sessionStorage.setItem("cvUnlocked","true"),sessionStorage.setItem("isExternalEntry","false"),t.classList.add("hidden"),r.classList.remove("hidden"),u(),window.addEventListener("beforeunload",()=>{sessionStorage.setItem("redirectToCorruption","true")})):l.classList.remove("hidden")}),n.addEventListener("keypress",o=>{o.key==="Enter"&&i.click()}),function(){history.pushState({trap:"cv-trap"},"",location.href),window.addEventListener("popstate",s=>{const a=s.state;!a||a.trap!=="cv-trap"?c():setTimeout(()=>{history.pushState({trap:"cv-trap"},"",location.href)},50)})}();const m=document.getElementById("exitButton");m&&m.addEventListener("click",o=>{o.preventDefault(),c()}),document.querySelectorAll('[onclick^="toggleDetails"]').forEach(o=>{o.addEventListener("click",s=>{const a=s.currentTarget.getAttribute("onclick").match(/'([^']+)'/)[1];f(a)})})});function f(e){document.getElementById(e).classList.toggle("hidden")}function c(){const e=sessionStorage.getItem("isExternalEntry")==="true";let t;if(e)t="⚠️ Unauthorized External Memory Jump Detected";else{const n=["Memory Corrupted.","Access Revoked.","Node Disconnected.","Memory Fragment Unrecoverable.","Unauthorized Neural Reentry.","Signal Lost."];t=n[Math.floor(Math.random()*n.length)]}document.body.innerHTML=`
            <style>
              body { 
                background: black; 
                animation: flicker 1.2s infinite; 
                margin: 0; 
                padding: 0; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                height: 100vh;
              }
              @keyframes flicker { 
                0%, 100% { background: black; } 
                50% { background: #111; } 
              }
              .glitch-text { 
                color: white; 
                font-size: 2.5rem; 
                font-family: monospace; 
                animation: glitch 0.6s infinite; 
                text-shadow: 1px 1px #ff00ff, -1px -1px #00ffff;
                text-align: center;
              }
              @keyframes glitch { 
                0% { transform: translate(0); } 
                50% { transform: translate(-2px, 2px); } 
                100% { transform: translate(0); } 
              }
            </style>
            <div class="glitch-text">${t}</div>
          `,setTimeout(()=>{window.location.replace("/")},1e3)}window.addEventListener("popstate",()=>{history.state?.trap==="entry"&&c(),sessionStorage.getItem("cvUnlocked")==="true"&&setTimeout(()=>{u()},50)});(function(){const t=["👁 That wasn't very subtle.","🔒 Accessing inner thoughts? Cute.","🤫 Nosy much?"];let n=!1;setInterval(()=>{const i=window.outerWidth-window.innerWidth>160,l=window.outerHeight-window.innerHeight>160,r=i||l;if(r&&!n){n=!0;const d=t[Math.floor(Math.random()*t.length)];alert(d)}!r&&n&&(n=!1)},1e3)})();console.log("%cUhhh... did you need something?","color: rgba(157, 126, 219, 0.6); font-size: 13px; font-style: italic;");
