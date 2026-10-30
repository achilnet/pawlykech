// Pawly — produits, prix et numéro WhatsApp : exemples à remplacer avant publication.
const WA="212678525153";
const AN={chien:["Chien","🐶"],chat:["Chat","🐱"],oiseau:["Oiseau","🐦"],poisson:["Poisson","🐠"],rongeur:["Rongeur","🐹"]};
const CN={alimentation:"Alimentation",friandises:"Friandises",litiere:"Litière",accessoires:"Accessoires",hygiene:"Hygiène & soins",antiparasitaires:"Antiparasitaires"};
const BG={chien:"#ffe1e1",chat:"#fff1c9",oiseau:"#dff1ff",poisson:"#d6f1f5",rongeur:"#efe3ff"};
// id ~ animal ~ catégorie ~ sous-catégorie ~ nom ~ prix ~ ancien prix ~ emoji ~ description ~ caractéristiques (clé:valeur|clé:valeur)
let P=`1~chien~alimentation~Croquettes~Croquettes chien adulte 3 kg~287~~🥣~Repas quotidien complet pour chien adulte.~Poids:3 kg|Âge:Adulte
2~chien~alimentation~Croquettes~Croquettes chien adulte 12 kg~590~650~🥣~Grand format économique pour un ou plusieurs chiens.~Poids:12 kg|Âge:Adulte
3~chien~alimentation~Croquettes~Croquettes chiot 3 kg~210~~🐕~Recette adaptée à la croissance jusqu'à 12 mois.~Poids:3 kg|Âge:Chiot
4~chien~alimentation~Pâtées~Pâtée chien au bœuf 400 g~18~~🥫~Boîte tendre à servir seule ou avec des croquettes.~Poids:400 g
5~chien~friandises~Dentaires~Bâtonnets dentaires~39~~🦴~À mâcher pour occuper et entretenir les dents.~Quantité:7 bâtonnets
6~chien~friandises~Biscuits~Biscuits au poulet 200 g~29~35~🍪~Petites récompenses croquantes pour l'éducation.~Poids:200 g
7~chien~accessoires~Jouets~Balle en caoutchouc~35~~🎾~Jouet résistant pour les parties de lancer.~Diamètre:6 cm
8~chien~accessoires~Jouets~Haltère à mâcher~99~150~🏋️~Caoutchouc robuste, anti-stress et nettoyage dentaire.~Matière:Caoutchouc naturel
9~chien~accessoires~Colliers & laisses~Laisse nylon 1,5 m~79~~🦮~Solide, avec poignée confortable.~Longueur:1,5 m
10~chien~accessoires~Colliers & laisses~Harnais réglable~129~~🎽~Réglable, limite la traction sur le cou.~Tailles:S / M / L
11~chien~accessoires~Couchage~Coussin moelleux~220~~🛏️~Un coin douillet et lavable.~Taille:60 x 45 cm
12~chien~accessoires~Transport~Cage de transport M~249~~🧳~Transport sécurisé pour le vétérinaire ou les trajets.~Taille:M
13~chien~accessoires~Gamelles~Gamelle inox antidérapante~55~~🍽️~Facile à nettoyer, base antidérapante.~Contenance:500 ml
14~chien~hygiene~Brosses~Brosse de toilettage~65~~🪮~Retire les poils morts et démêle.~Usage:Chiens et chats
15~chien~hygiene~Shampoings~Shampoing doux 250 ml~59~~🧴~Nettoie sans agresser la peau.~Contenance:250 ml
16~chien~antiparasitaires~Sprays~Spray antiparasitaire 200 ml~70~80~🛡️~Contre puces et tiques. Suivre les conseils du vétérinaire.~Contenance:200 ml
17~chat~alimentation~Croquettes~Croquettes chat adulte 2 kg~181~~🐟~Repas complet pour chat adulte, saveur poisson.~Poids:2 kg|Âge:Adulte
18~chat~alimentation~Croquettes~Croquettes chat stérilisé 2 kg~144~~🐈~Formule pour garder la ligne du chat stérilisé.~Poids:2 kg|Profil:Stérilisé
19~chat~alimentation~Pâtées~Pâtée chaton lot de 6~70~84~🥫~Barquettes tendres pour chatons.~Lot:6 x 85 g
20~chat~friandises~Sticks~Sticks au saumon 3 x 5 g~7~~🍣~Friandise à croquer pour récompenser.~Lot:3 x 5 g
21~chat~litiere~Litières~Litière agglomérante 10 L~95~~🪣~Forme des boules faciles à retirer.~Volume:10 L
22~chat~litiere~Bacs à litière~Bac à litière à rebord~299~~📦~Rebords hauts contre les éclaboussures.~Taille:Moyenne
23~chat~litiere~Bacs à litière~Bac à litière fermé grande taille~250~~🚽~Fermé, avec pelle intégrée.~Taille:Grande
24~chat~accessoires~Jouets~Canne à pêche à plumes~35~~🪶~Jouet interactif pour jouer ensemble.~Longueur:50 cm
25~chat~accessoires~Arbres à chat~Arbre à chat 102 cm~2000~~🌳~Griffoir, plateforme et niche.~Hauteur:102 cm
26~chat~accessoires~Gamelles~Fontaine à eau 2 L~260~~⛲~Eau en circulation pour inciter à boire.~Capacité:2 L
27~chat~accessoires~Transport~Sac de transport respirant~229~~🎒~Avec fenêtre et matelas amovible.~Taille:42 x 27 x 34 cm
28~chat~hygiene~Brosses~Gant de toilettage~30~45~🧤~Brossage et massage, récupère les poils.~Matière:Silicone
29~chat~hygiene~Toilettage~Coupe-griffes~35~40~✂️~Pour raccourcir les griffes en sécurité.~Taille:Petite à moyenne
30~chat~antiparasitaires~Pipettes~Pipette antipuces chat~110~~💧~À choisir selon le poids. Demandez conseil.~Vente:Sur conseil
31~oiseau~alimentation~Graines~Mélange de graines perruches 1 kg~45~~🌾~Mélange varié pour perruches.~Poids:1 kg
32~oiseau~accessoires~Cages~Cage pour oiseaux~380~~🐦~Cage avec perchoirs et mangeoires.~Taille:Moyenne
33~oiseau~accessoires~Mangeoires~Mangeoire extérieure~60~~🪺~À suspendre au jardin ou au balcon.~Usage:Extérieur
34~poisson~alimentation~Flocons~Flocons poissons tropicaux~35~~🐠~Aliment quotidien en flocons.~Poids:100 g
35~poisson~accessoires~Filtres~Filtre intérieur~140~~🫧~Pour garder une eau claire.~Usage:Aquarium 40 à 80 L
36~poisson~accessoires~Aquariums~Aquarium 40 L avec couvercle~650~~🐡~Idéal pour débuter.~Volume:40 L
37~rongeur~alimentation~Foin~Foin de prairie 1 kg~40~~🌿~Base de l'alimentation des lapins et cobayes.~Poids:1 kg
38~rongeur~alimentation~Granulés~Granulés lapin 2 kg~85~~🐇~Aliment complet pour lapin.~Poids:2 kg
39~rongeur~accessoires~Cages~Cage pour hamster~320~~🐹~Avec roue, abreuvoir et maisonnette.~Taille:Moyenne
40~rongeur~hygiene~Litière~Litière copeaux 3 kg~50~~🪵~Absorbante et douce.~Poids:3 kg`.split("\n").map(l=>{const f=l.split("~");return{id:+f[0],a:f[1],c:f[2],sc:f[3],n:f[4],p:+f[5],o:+f[6]||0,e:f[7],d:f[8],s:(f[9]||"").split("|").filter(Boolean).map(x=>x.split(":"))}});
if(window.SHEET_P)P=window.SHEET_P.filter(p=>AN[p.a]);
const $=id=>document.getElementById(id),cart=new Map(),$$=s=>[...document.querySelectorAll(s)];
const dh=n=>new Intl.NumberFormat("fr-MA").format(n)+" DH",cn=c=>CN[c]||c,bg=p=>BG[p.a]||"#eee",disc=p=>p.o>p.p?Math.round((1-p.p/p.o)*100):0;
const tr={};P.forEach(p=>{tr[p.a]=tr[p.a]||{};(tr[p.a][p.c]=tr[p.a][p.c]||new Set()).add(p.sc)});
const ans=Object.keys(AN).filter(a=>tr[a]),pg=document.body.dataset.page;
const mega=a=>`<div class="mega">${Object.entries(tr[a]).map(([c,s])=>`<div><a class="mh" href="boutique.html?animal=${a}&cat=${c}">${cn(c)}</a>${[...s].filter(Boolean).map(x=>`<a href="boutique.html?animal=${a}&cat=${c}&sub=${encodeURIComponent(x)}">${x}</a>`).join("")}</div>`).join("")}</div>`;
$("hd").innerHTML=`<div class="tb2"><div class="wrap"><span>🚚 Livraison gratuite à Marrakech</span><a href="#" class="wa">💬 Commander par WhatsApp</a></div></div>
<header class="site"><div class="mainbar"><a class="brand" href="index.html"><i>🐾</i>pawly</a>
<form class="sf" action="boutique.html"><input name="q" type="search" placeholder="Rechercher un produit, un animal…" aria-label="Rechercher"><button>Rechercher</button></form>
<button class="btn cartbtn" id="oc">Panier <span id="cc">0</span></button><button class="burger" id="bg" aria-label="Menu">☰</button></div>
<nav class="navbar" id="nv" aria-label="Navigation principale"><ul>${ans.map(a=>`<li><a href="boutique.html?animal=${a}">${AN[a][1]} ${AN[a][0]}</a>${mega(a)}</li>`).join("")}
<li><a class="hot" href="boutique.html?promo=1">🔥 Promos</a></li><li><a href="conseils.html" class="${pg=="tips"?"on":""}">Conseils</a></li><li><a href="infos.html" class="${pg=="info"?"on":""}">Livraison & infos</a></li><li><a href="contact.html" class="${pg=="contact"?"on":""}">Contact</a></li></ul></nav></header>`;
$("ft").innerHTML=`<footer class="site"><div class="wrap"><div class="cols"><div><a class="brand" href="index.html" style="color:#fff"><i>🐾</i>pawly</a><p>L'animalerie en ligne de Marrakech : aliments, accessoires et soins pour chiens, chats et autres compagnons.</p></div>
<div><h4>Boutique</h4>${ans.map(a=>`<a href="boutique.html?animal=${a}">${AN[a][0]}</a>`).join("")}<a href="boutique.html?promo=1">Promotions</a></div>
<div><h4>Informations</h4><a href="infos.html#livraison">Livraison</a><a href="infos.html#retours">Retours</a><a href="infos.html#apropos">À propos</a><a href="conseils.html">Conseils</a></div>
<div><h4>Contact</h4><p>Commandes et questions sur WhatsApp.</p><a href="#" class="wa">Écrire à Pawly</a><a href="contact.html">Page contact</a></div></div>
<div class="copy">© ${new Date().getFullYear()} Pawly. <div class="copy">© ${new Date().getFullYear()} Pawly. Tous droits réservés.</div>.</div></div></footer>
<div class="ov" id="ov"></div>
<aside class="drawer" id="dr" aria-label="Panier"><div class="dh"><h2>Votre panier</h2><button class="x" id="cx" aria-label="Fermer">×</button></div><div class="items" id="it"></div>
<div class="db"><div class="row"><span>Livraison à Marrakech</span><b>Gratuite</b></div><div class="row tot"><span>Total estimé</span><span id="tt">0 DH</span></div><button class="btn sun" id="co">Commander sur WhatsApp</button></div></aside>
<div class="bd" id="pm"><div class="modal" id="pb" role="dialog" aria-modal="true"></div></div>
<div class="bd" id="cm"><div class="modal" role="dialog" aria-modal="true"><h2>Finaliser ma commande</h2><p>Votre panier sera préparé dans un message WhatsApp. Pawly confirme ensuite la disponibilité et le total.</p>
<form id="cf"><div class="fr"><label for="n1">Nom *</label><input id="n1" required></div><div class="fr"><label for="n2">Téléphone *</label><input id="n2" type="tel" required placeholder="06 XX XX XX XX"></div><div class="fr"><label for="n3">Adresse à Marrakech *</label><input id="n3" required placeholder="Quartier, rue, immeuble"></div><div class="fr"><label for="n4">Note (facultatif)</label><textarea id="n4"></textarea></div>
<div class="acts2"><button type="button" class="btn ghost" id="cn">Retour</button><button class="btn">Envoyer sur WhatsApp</button></div></form></div></div>`;
const vis=p=>p.i?`<img src="${p.i}" alt="${p.n}" loading="lazy" referrerpolicy="no-referrer" style="width:100%;height:100%;object-fit:contain;background:#fff">`:p.e;
const find=id=>P.find(p=>p.id===id);
function card(p){const d=disc(p);return `<article class="card"><button class="pic" style="background:${bg(p)}" data-d="${p.id}" aria-label="Voir ${p.n}">${vis(p)}${d?`<span class="badge">-${d}%</span>`:""}</button><div class="info"><small>${AN[p.a][0]} · ${p.sc||cn(p.c)}</small><h3>${p.n}</h3><p>${p.d}</p><div class="row"><span class="price">${dh(p.p)}${p.o>p.p?`<s>${dh(p.o)}</s>`:""}</span></div><div class="btns"><button class="add" data-a="${p.id}">Ajouter au panier</button><button class="more" data-d="${p.id}">Vue rapide</button></div></div></article>`}
function bind(){$$("[data-a]").forEach(b=>b.onclick=()=>add(+b.dataset.a));$$("[data-d]").forEach(b=>b.onclick=()=>detail(+b.dataset.d))}
function detail(id){const p=find(id);$("pb").innerHTML=`<div style="background:${bg(p)};border-radius:18px;font-size:80px;text-align:center;padding:22px;overflow:hidden">${p.i?`<img src="${p.i}" alt="${p.n}" referrerpolicy="no-referrer" style="max-width:100%;max-height:260px;border-radius:12px;background:#fff">`:p.e}</div><h2 style="margin-top:14px">${p.n}</h2><p>${p.d}</p><table class="spec"><tr><td>Animal</td><td>${AN[p.a][0]}</td></tr><tr><td>Rayon</td><td>${cn(p.c)}${p.sc?" › "+p.sc:""}</td></tr>${p.s.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join("")}<tr><td>Livraison</td><td>Gratuite à Marrakech</td></tr></table><div class="row"><span class="price">${dh(p.p)}${p.o>p.p?`<s>${dh(p.o)}</s>`:""}</span></div><div class="acts2"><button class="btn ghost" id="pc">Fermer</button><button class="btn sun" id="pa">Ajouter au panier</button></div>`;
$("pm").classList.add("open");$("pc").onclick=()=>$("pm").classList.remove("open");$("pa").onclick=()=>{$("pm").classList.remove("open");add(id)}}
function add(id){cart.set(id,(cart.get(id)||0)+1);draw();open_()}
function draw(){let c=0,t=0;cart.forEach((q,id)=>{c+=q;t+=q*find(id).p});$("cc").textContent=c;$("tt").textContent=dh(t);$("co").disabled=!c;$("co").style.opacity=c?1:.5;
$("it").innerHTML=c?[...cart].map(([id,q])=>{const p=find(id);return `<div class="ci"><div class="t" style="background:${bg(p)};overflow:hidden">${p.i?`<img src="${p.i}" alt="" style="width:100%;height:100%;object-fit:cover">`:p.e}</div><div><h4>${p.n}</h4><div class="qty"><button data-m="${id}" aria-label="Moins">−</button><b>${q}</b><button data-pl="${id}" aria-label="Plus">+</button></div></div><b>${dh(p.p*q)}</b></div>`}).join(""):`<p style="text-align:center;color:#6b6060;padding:40px 0">Votre panier est vide.<br>Ajoutez un produit pour commencer.</p>`;
$$("[data-m]").forEach(b=>b.onclick=()=>q(+b.dataset.m,-1));$$("[data-pl]").forEach(b=>b.onclick=()=>q(+b.dataset.pl,1))}
function q(id,d){const n=cart.get(id)+d;n<=0?cart.delete(id):cart.set(id,n);draw()}
function open_(){$("ov").classList.add("open");$("dr").classList.add("open")}function close_(){$("ov").classList.remove("open");$("dr").classList.remove("open")}
const wa=t=>window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(t),"_blank","noopener");
$("oc").onclick=open_;$("cx").onclick=close_;$("ov").onclick=close_;$("bg").onclick=()=>$("nv").classList.toggle("open");
$("co").onclick=()=>{if(cart.size){close_();$("cm").classList.add("open")}};$("cn").onclick=()=>$("cm").classList.remove("open");
$("pm").onclick=e=>{if(e.target==$("pm"))$("pm").classList.remove("open")};
$("cf").onsubmit=e=>{e.preventDefault();let t=0;const l=[...cart].map(([id,qt])=>{const p=find(id);t+=p.p*qt;return `• ${p.n} x${qt} — ${dh(p.p*qt)}`});
wa(`Bonjour Pawly ! Je souhaite commander :\n\n${l.join("\n")}\n\nTotal estimé : ${dh(t)} (livraison gratuite à Marrakech)\n\nNom : ${$("n1").value}\nTéléphone : ${$("n2").value}\nAdresse : ${$("n3").value}${$("n4").value?"\nNote : "+$("n4").value:""}\n\nMerci de confirmer la disponibilité.`);$("cm").classList.remove("open")};
$$(".wa,[data-wa]").forEach(a=>a.onclick=e=>{e.preventDefault();wa("Bonjour Pawly ! J'aimerais des informations sur vos produits et la livraison.")});
document.addEventListener("keydown",e=>{if(e.key=="Escape"){close_();$("pm").classList.remove("open");$("cm").classList.remove("open")}});
// Accueil
if($("animals"))$("animals").innerHTML=ans.map(a=>`<a class="an" href="boutique.html?animal=${a}"><span style="background:${BG[a]}">${AN[a][1]}</span>${AN[a][0]}</a>`).join("");
const R=(id,l,n)=>{if($(id)){$(id).innerHTML=l.slice(0,n).map(card).join("");bind()}};
R("r-promo",P.filter(p=>p.o>p.p),4);R("r-chat",P.filter(p=>p.a=="chat"),4);R("r-chien",P.filter(p=>p.a=="chien"),4);R("r-autres",P.filter(p=>["oiseau","poisson","rongeur"].includes(p.a)),4);
// Boutique
if($("grid")){const u0=new URLSearchParams(location.search);
const S={a:u0.get("animal")||"all",c:u0.get("cat")||"all",sc:u0.get("sub")||"",promo:u0.get("promo")=="1",q:u0.get("q")||""};if(S.a!="all"&&!AN[S.a])S.a="all";
$("tabs").innerHTML=[["all","Tous"],...ans.map(a=>[a,AN[a][1]+" "+AN[a][0]])].map(([k,n])=>`<button data-k="${k}">${n}</button>`).join("");
$("s").value=S.q;$("pr").checked=S.promo;
function r(){$$("#tabs button").forEach(b=>b.classList.toggle("on",b.dataset.k==S.a));
const cs=new Set();P.filter(p=>S.a=="all"||p.a==S.a).forEach(p=>cs.add(p.c));if(!cs.has(S.c))S.c="all";
$("ct").innerHTML='<option value="all">Toutes les catégories</option>'+[...cs].map(c=>`<option value="${c}">${cn(c)}</option>`).join("");$("ct").value=S.c;
const k=S.q.toLowerCase();let l=P.filter(p=>(S.a=="all"||p.a==S.a)&&(S.c=="all"||p.c==S.c)&&(!S.sc||p.sc==S.sc)&&(!S.promo||p.o>p.p)&&(p.n+" "+p.d+" "+p.sc).toLowerCase().includes(k));
if($("so").value=="l")l.sort((a,b)=>a.p-b.p);if($("so").value=="h")l.sort((a,b)=>b.p-a.p);
const t=[S.promo?"Promotions":"",S.a!="all"?AN[S.a][0]:"",S.c!="all"?cn(S.c):"",S.sc].filter(Boolean);
$("ttl").textContent=S.q?`Résultats pour « ${S.q} »`:t.length?t.join(" › "):"Tous les produits";
$("cnt").textContent=l.length+" produit"+(l.length>1?"s":"");
$("chips").innerHTML=S.sc?`<button class="chip" id="xs">${S.sc} ✕</button>`:"";if(S.sc)$("xs").onclick=()=>{S.sc="";r()};
$("grid").innerHTML=l.length?l.map(card).join(""):"<p>Aucun produit trouvé. Essayez un autre mot ou une autre catégorie.</p>";bind();
const u=new URLSearchParams();if(S.a!="all")u.set("animal",S.a);if(S.c!="all")u.set("cat",S.c);if(S.sc)u.set("sub",S.sc);if(S.promo)u.set("promo","1");if(S.q)u.set("q",S.q);
history.replaceState(null,"",u.toString()?"?"+u:"boutique.html")}
$$("#tabs button").forEach(b=>b.onclick=()=>{S.a=b.dataset.k;S.c="all";S.sc="";r()});
$("ct").onchange=()=>{S.c=$("ct").value;S.sc="";r()};$("pr").onchange=()=>{S.promo=$("pr").checked;r()};$("s").oninput=()=>{S.q=$("s").value.trim();r()};$("so").onchange=r;r()}
draw();
