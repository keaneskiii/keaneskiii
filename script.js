const CONFIG={
  user:"keaneskiii",
  name:"Keane",
  tagline:"developer // arch user // tinkerer",
  about:"Hi I'm Keane! I'm a young developer coming from the Philippines. I love exploring technology, and it's history and future. I'd love to work on other projects. I've had a passion of developing programs, and I started when I was G5.",
  pinned:["get-my-aur-installer"],
  languages:[["Golang",75],["C++",90],["HTML/CSS",95],["JS",70]],
  contact:[["github","https://github.com/keaneskiii"],["email","qiyiguojien@gmail.com"]]
};
const T=document.getElementById('t');
const TB=document.getElementById('tb');
const scrl=()=>{TB.scrollTop=TB.scrollHeight};
const clk=()=>{document.getElementById('clk').textContent=new Date().toLocaleString([],{weekday:'short',month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'})};clk();setInterval(clk,15000);
const tasks=document.getElementById('tasks');tasks.innerHTML='<span class="tk">Terminal</span>';
const addTask=()=>{const s=document.createElement('span');s.className='tk on';s.id='tkp';s.textContent='Portfolio';tasks.appendChild(s)};
const rmTask=()=>document.getElementById('tkp')?.remove();
function drag(el,h){let x=0,y=0;h.addEventListener('pointerdown',e=>{if(innerWidth<=700||e.target.closest('i'))return;const sx=e.clientX-x,sy=e.clientY-y;h.setPointerCapture(e.pointerId);const mv=ev=>{x=ev.clientX-sx;y=ev.clientY-sy;el.style.translate=x+'px '+y+'px'};const up=()=>{h.removeEventListener('pointermove',mv);h.removeEventListener('pointerup',up)};h.addEventListener('pointermove',mv);h.addEventListener('pointerup',up)})}
drag(document.getElementById('tw'),document.querySelector('#tw .bar'));
let fast=false;
const sleep=ms=>new Promise(r=>setTimeout(r,fast?0:ms));
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const cols=()=>Math.max(24,Math.floor(T.clientWidth/(parseFloat(getComputedStyle(T).fontSize)*.6)));
const bar=(p,n)=>{const f=Math.round(n*p/100);return "["+"#".repeat(f)+"-".repeat(n-f)+"] "+String(p).padStart(3)+"%"};
function line(html=""){const d=document.createElement('div');d.innerHTML=html;T.appendChild(d);scrl();return d}
async function type(cmd){
  const d=line('<span class="p"><b>keane@arch</b> ~ $ </span><span></span><span class="cur"></span>');
  const s=d.children[1];
  for(const c of cmd){s.textContent+=c;await sleep(40+Math.random()*60)}
  await sleep(300);d.querySelector('.cur').remove();
}
async function progress(label,ms=1200){
  const c=cols(),n=Math.max(8,Math.min(30,c-16-Math.min(label.length,c>60?34:0))),pad=c>60?34:0;
  const d=line("");
  const set=p=>{d.textContent=(pad?label.padEnd(pad):label+" ")+bar(p,n);scrl()};
  for(let p=0;p<100;p+=Math.ceil(Math.random()*12)){set(p);await sleep(ms/12)}
  set(100);
}
async function neofetch(){
  await type("neofetch");
  const logo=`       /\\
      /  \\
     /\\   \\
    /      \\
   /   ,,   \\
  /   |  |  -\\
 /_-''    ''-_\\`;
  const info=[
    `<span class="b">${CONFIG.user}</span>@<span class="b">arch</span>`,
    `-------------------`,
    `<span class="b">OS</span>: Arch Linux x86_64`,
    `<span class="b">Host</span>: portfolio`,
    `<span class="b">Shell</span>: zsh`,
    `<span class="b">Role</span>: ${esc(CONFIG.tagline)}`,
    `<span class="b">Langs</span>: ${esc(CONFIG.languages.map(l=>l[0]).join(", "))}`,
    `<span class="b">GitHub</span>: github.com/${CONFIG.user}`
  ];
  const d=line('<div class="nf"><pre>'+logo+'</pre><div></div></div>');
  const box=d.querySelector('.nf div');
  for(const l of info){box.innerHTML+=l+"\n";await sleep(120)}
  line("");
}
async function pacman(){
  await type("sudo pacman -S "+CONFIG.user);
  await sleep(300);
  line("[sudo] password for keane: ");
  await sleep(500);
  line("resolving dependencies...");await sleep(400);
  line("looking for conflicting packages...");await sleep(500);
  line("");
  line(`Packages (1) <span class="b">${CONFIG.user}-1.0.0-1</span>`);
  line("");
  line("Total Download Size:   0.42 MiB");
  line("Total Installed Size:  1.37 MiB");
  line("");
  line(":: Proceed with installation? [Y/n] Y");await sleep(500);
  line('<span class="b">::</span> Retrieving packages...');
  await progress(` ${CONFIG.user}-1.0.0-1-any`,1600);
  for(const s of ["checking keys in keyring","checking package integrity","loading package files","checking for file conflicts","checking available disk space"]){
    await progress("(1/1) "+s,700);
  }
  line('<span class="b">::</span> Processing package changes...');
  await progress(`(1/1) installing ${CONFIG.user}`,1200);
  line('<span class="b">::</span> Running post-transaction hooks...');await sleep(300);
  line("(1/1) Arming ConditionNeedsUpdate...");await sleep(600);
  line("");
}
async function portfolio(){
  await type(CONFIG.user);
  await sleep(500);
  const ov=document.createElement('div');ov.id='ov';
  const abt=CONFIG.about.split("\n").map(p=>`<p>${esc(p)}</p>`).join("");
  ov.innerHTML=`<div class="win"><div class="bar"><span class="dots"><i class="x" title="close"></i><i></i><i></i></span><span class="ttl">${esc(CONFIG.user)} - portfolio</span></div>
  <div class="pg">
    <nav><b data-go="top">${esc(CONFIG.name[0])}.</b><div><a data-go="about">About</a><a data-go="skills">Skills</a><a data-go="work">Work</a><a data-go="contact">Contact</a></div></nav>
    <section class="hero" id="p-top"><p class="k">Portfolio / ${new Date().getFullYear()}</p><h1>${esc(CONFIG.name)}</h1><p class="lead">${esc(CONFIG.tagline)}</p><div class="btns"><a class="btn f" data-go="work">See the work</a><a class="btn" data-go="contact">Get in touch</a></div></section>
    <section id="p-about" class="rv"><p class="k">About</p><h2>Hi there!</h2><div class="ab"><div class="av">${esc(CONFIG.name[0])}</div><div>${abt}</div></div></section>
    <section id="p-skills" class="rv"><p class="k">Toolbox</p><h2>What I build with</h2><h3>Languages</h3><div class="lvs">${CONFIG.languages.map(([n,p],i)=>`<div class="lv"><span>${esc(n)}</span><div class="tr"><i style="--w:${p}%;transition-delay:${i*.1}s"></i></div><span>${p}%</span></div>`).join("")}</div></section>
    <section id="p-work" class="rv"><p class="k">Selected work</p><h2>Things worth opening</h2><div class="wk" id="repos"><small>Loading projects...</small></div></section>
    <section id="p-contact" class="rv"><p class="k">Contact</p><h2>Let's build something.</h2>${CONFIG.contact.map(([k,v])=>{const h=v.includes("@")&&!v.startsWith("http")?"mailto:"+v:v;return `<a class="big" href="${esc(h)}" target="_blank" rel="noopener">${esc(k)} &rarr; ${esc(v.replace("https://",""))}</a><br>`}).join("")}</section>
    <footer><span>&copy; ${new Date().getFullYear()} ${esc(CONFIG.name)}. Thanks for scrolling all the way down :)</span><a data-go="top">Back to top &uarr;</a></footer>
  </div></div>`;
  document.body.appendChild(ov);addTask();drag(ov.querySelector(".win"),ov.querySelector(".bar"));
  requestAnimationFrame(()=>requestAnimationFrame(()=>ov.classList.add('on')));
  const pg=ov.querySelector('.pg');
  ov.querySelectorAll('[data-go]').forEach(el=>el.onclick=()=>{const t=ov.querySelector('#p-'+el.dataset.go);if(el.dataset.go==='top')pg.scrollTo({top:0,behavior:'smooth'});else pg.scrollTo({top:t.offsetTop-52,behavior:'smooth'})});
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{root:pg,threshold:.08});
  const watch=()=>ov.querySelectorAll('.rv:not(.in)').forEach(el=>io.observe(el));watch();
  const closeIt=()=>{rmTask();ov.classList.remove('on');setTimeout(()=>ov.remove(),300);line('<span class="p"><b>keane@arch</b> ~ $ </span><span class="cur"></span>')};
  ov.querySelector('.x').onclick=closeIt;
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.getElementById('ov'))closeIt()},{once:true});
  const box=ov.querySelector('#repos');
  const SNAP=[{name:"get-my-aur-installer",description:"an terminal tool that fetches aur/yay repos and downloads it for you",language:"Go",stars:0,url:"https://github.com/keaneskiii/get-my-aur-installer",year:"2026"}];
  const draw=repos=>{box.innerHTML=repos.length?repos.map((x,i)=>`<a class="card" href="${esc(x.url)}" target="_blank" rel="noopener"><span class="n">${String(i+1).padStart(2,"0")}${x.year?" / "+x.year:""}${x.language?" &middot; "+esc(x.language):""}</span><b>${esc(x.name)}</b><small>${esc(x.description||"No description yet.")}</small><em>View on GitHub &rarr;${x.stars?" &middot; "+x.stars+" stars":""}</em></a>`).join(""):'<small>No pinned projects yet.</small>'};
  draw(SNAP);
  let list=null;
  try{
    const r=await fetch(`https://gh-pinned-repos.egoist.dev/?username=${CONFIG.user}`);
    if(r.ok){const p=await r.json();if(Array.isArray(p)&&p.length)list=p.map(x=>({name:x.repo,description:x.description,language:x.language,stars:x.stars,url:x.link||`https://github.com/${CONFIG.user}/${x.repo}`}))}
  }catch(e){}
  if(!list){
    try{
      const r=await fetch(`https://api.github.com/users/${CONFIG.user}/repos?per_page=100`);
      if(!r.ok)throw 0;
      const want=CONFIG.pinned.map(n=>n.toLowerCase());
      list=(await r.json()).filter(x=>want.includes(x.name.toLowerCase())).sort((a,b)=>want.indexOf(a.name.toLowerCase())-want.indexOf(b.name.toLowerCase())).map(x=>({name:x.name,description:x.description,language:x.language,stars:x.stargazers_count,url:x.html_url,year:new Date(x.created_at).getFullYear()}));
    }catch(e){}
  }
  if(list)draw(list);
}
document.addEventListener('keydown',()=>{fast=true;document.getElementById('skip')?.remove()},{once:true});
document.addEventListener('click',()=>{fast=true;document.getElementById('skip')?.remove()},{once:true});
(async()=>{await neofetch();await pacman();await portfolio();document.getElementById('skip')?.remove()})();
