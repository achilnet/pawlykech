// Collez ici le lien CSV publié de votre Google Sheet. Laissez vide pour utiliser les produits intégrés à app.js.
const SHEET_URL = "";

function parseCSV(t){const r=[];let row=[],f="",q=false;for(let i=0;i<t.length;i++){const c=t[i];
if(q){if(c=='"'){if(t[i+1]=='"'){f+='"';i++}else q=false}else f+=c}
else if(c=='"')q=true;else if(c==","){row.push(f);f=""}else if(c=="\n"||c=="\r"){if(c=="\r"&&t[i+1]=="\n")i++;row.push(f);r.push(row);row=[];f=""}else f+=c}
if(f!==""||row.length){row.push(f);r.push(row)}return r}
function loadApp(){const s=document.createElement("script");s.src="app.js";document.body.appendChild(s)}
(async()=>{
 if(SHEET_URL){
  try{
   const res=await fetch(SHEET_URL,{cache:"no-store"});if(!res.ok)throw 0;
   const rows=parseCSV((await res.text()).replace(/^\uFEFF/,"")).filter(r=>r.some(x=>x.trim()));
   const h=rows.shift().map(x=>x.trim().toLowerCase());const g=(r,k)=>(r[h.indexOf(k)]||"").trim();const num=v=>+v.replace(",",".")||0;
   const list=rows.map((r,i)=>({
     id:+g(r,"id")||i+1,a:g(r,"animal").toLowerCase(),c:g(r,"categorie").toLowerCase(),sc:g(r,"souscategorie"),n:g(r,"nom"),
     p:num(g(r,"prix")),o:num(g(r,"ancien_prix")),e:g(r,"emoji")||"🐾",i:g(r,"image"),d:g(r,"description"),
     s:g(r,"caracteristiques").split("|").filter(Boolean).map(x=>{const k=x.split(":");return [k[0].trim(),k.slice(1).join(":").trim()]}),
     act:g(r,"actif").toLowerCase()
   })).filter(p=>p.n&&p.p&&p.a&&p.c&&p.act!=="non");
   if(list.length)window.SHEET_P=list;
  }catch(e){console.warn("Google Sheet indisponible, produits intégrés utilisés.")}
 }
 loadApp();
})();
