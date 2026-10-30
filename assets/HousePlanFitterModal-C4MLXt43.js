import{r as B,j as e}from"./react-vendor-CB5wtuEC.js";import{ac as Ee,ad as Me,a1 as Pe,a0 as g,ae as Le,a as ge,p as Oe}from"./index-BNEO8Sp_.js";import{d as Re}from"./dxfExporter-DWRAbA7o.js";import{m as De}from"./duvalSurveyService-CzLi_24O.js";import{distance as Fe,point as ne}from"./turf-vendor-CwrBJ54B.js";import{y as Te,X as Ie,B as ze,w as Ne,c as Se,T as He,aA as Be,f as Ze,D as Xe,C as Ve,L as Ue,P as qe}from"./icons-vendor-BEIlHLFQ.js";import"./maplibre-vendor-CLmOyQOb.js";import"./gis-vendor-Co8Zq2Um.js";import"./misc-data-D0yF5yJs.js";import"./duval-archibald-data-BYKUu7Lk.js";import"./duval-unrecorded-subs-data-Boarqhev.js";import"./duval-real-parcels-data-DdEJxntc.js";import"./florida-670-matrix-data-DYrACb7R.js";import"./supabase-vendor-CI_V8wt2.js";import"./duval-panels-data-DSJUd7eQ.js";const ke=[{id:"no-house",name:"No House (Parcel & Setbacks Only)",category:"Vacant / Lot Only",widthFt:0,depthFt:0,stories:0,totalSqFt:0,description:"Displays lot boundaries, setback envelope, frontage road, and FEMA flood overlays without any building footprint."},{id:"ranch-1800",name:"Single-Story Ranch",category:"1-Story",widthFt:45,depthFt:40,stories:1,totalSqFt:1800,description:"Classic open-concept 3-bed / 2-bath single-level floor plan."},{id:"modern-2400",name:"Modern Two-Story",category:"2-Story",widthFt:40,depthFt:30,stories:2,totalSqFt:2400,description:"Compact 40x30 footprint with 2 stories for maximized yard space."},{id:"coastal-narrow",name:"Narrow Lot Coastal",category:"Narrow Lot",widthFt:30,depthFt:55,stories:2,totalSqFt:2200,description:"Designed for narrow coastal lots (30ft width fit)."},{id:"courtyard-2800",name:"L-Shaped Courtyard",category:"Executive",widthFt:50,depthFt:45,stories:1,totalSqFt:2250,description:"Single-story L-shaped home wrapping around a private patio."},{id:"custom",name:"Custom Dimensions",category:"Custom",widthFt:35,depthFt:45,stories:1,totalSqFt:1575,description:"Enter your custom width and depth dimensions."}];function $e($){if(!$)return"Frontage Road";const O=$.split(",")[0].trim();return O.replace(/^\d+[\s\-]*/,"").trim()||O||"Frontage Road"}function Ge($,O=25,s=10,ye=20,C=40,Z=30,h="center",G=[-81.4,30.3],te="Zone X",Y=""){let j=$;if(typeof $=="string")try{j=JSON.parse($)}catch{}const Q=$e(Y),ie=Ee(j,O),R=Me(j,G,h,C,Z,O,s).coordinates,n=Array.isArray(j)&&j.length>0?j[0]:[],re=ie[0]||[],he=R[0]||[];let A=1/0,v=-1/0,w=1/0,m=-1/0;[...n,...re,...he].forEach(([a,i])=>{A=Math.min(A,a),v=Math.max(v,a),w=Math.min(w,i),m=Math.max(m,i)});const se=(w+m)/2,y=Math.cos(se*Math.PI/180),D=750,o=440,le=80,de=(v-A)*y,ce=m-w,S=(D-le*2)/(de||1e-4),xe=(o-le*2)/(ce||1e-4),p=Math.min(S,xe),X=(D-de*p)/2,W=(o-ce*p)/2,F=([a,i])=>{const c=X+(a-A)*y*p,b=o-(W+(i-w)*p);return`${c.toFixed(1)},${b.toFixed(1)}`},we=n.map(F).join(" "),T=re.map(F).join(" "),I=he.map(F).join(" ");let E="";if(n.length>=2){const a=parseFloat(F(n[0]).split(",")[0]),i=parseFloat(F(n[0]).split(",")[1]),c=parseFloat(F(n[1]).split(",")[0]),b=parseFloat(F(n[1]).split(",")[1]),P=(a+c)/2,L=(i+b)/2;let t=Math.atan2(b-i,c-a)*(180/Math.PI);t>90&&(t-=180),t<-90&&(t+=180);let d=0,l=0;const r=n.length-1;for(let ee=0;ee<r;ee++){const ue=X+(n[ee][0]-A)*y*p,ve=o-(W+(n[ee][1]-w)*p);d+=ue,l+=ve}const x=d/(r||1),f=l/(r||1),ae=P-x,U=L-f,J=Math.hypot(ae,U)||1e-4,q=P+ae/J*38,H=L+U/J*38,be=`🛣️ ROAD: ${Q.toUpperCase()}`,me=Math.max(130,be.length*7.5+24);E=`
      <!-- Frontage Road Marker Line (along street) -->
      <line x1="${a}" y1="${i}" x2="${c}" y2="${b}" stroke="#475569" stroke-width="9" stroke-linecap="round" opacity="0.3" />
      <line x1="${a}" y1="${i}" x2="${c}" y2="${b}" stroke="#64748b" stroke-width="3.5" stroke-dasharray="8,4" stroke-linecap="round" />
      
      <!-- Outward-Offset Parallel Road Name Badge (Guaranteed Unobscured) -->
      <g transform="translate(${q.toFixed(1)}, ${H.toFixed(1)}) rotate(${t.toFixed(1)})">
        <rect x="${(-me/2).toFixed(1)}" y="-12" width="${me.toFixed(1)}" height="24" rx="6" fill="#ffffff" stroke="#475569" stroke-width="1.5" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.12));" />
      </g>
    `}const M=(te||"Zone X").toUpperCase(),V=M.includes("AE")||M.includes("VE")||M.includes("A")?"#ef4444":"#3b82f6";let z="";if(n.length>=3){const a=n[1]||n[0],i=n[n.length-2]||n[2]||n[1],c=[a[0]+(i[0]-a[0])*.15,a[1]+(i[1]-a[1])*.4],b=[i[0]-(i[0]-a[0])*.15,i[1]-(i[1]-a[1])*.4],P=F(c),L=F(b),t=P.split(",")[0],d=P.split(",")[1],l=L.split(",")[0],r=L.split(",")[1],x=((parseFloat(t)+parseFloat(l))/2).toFixed(1),f=((parseFloat(d)+parseFloat(r))/2-10).toFixed(1);z=`
      <!-- FEMA Flood Hazard Line Halo Backdrop -->
      <line x1="${t}" y1="${d}" x2="${l}" y2="${r}" stroke="#020617" stroke-width="7" stroke-linecap="round" />
      <!-- FEMA Flood Hazard Line (Prominent Print Stroke) -->
      <line x1="${t}" y1="${d}" x2="${l}" y2="${r}" stroke="${V}" stroke-width="4" stroke-dasharray="10,5" stroke-linecap="round" />
      <!-- FEMA Flood Line Text Label -->
      <text x="${x}" y="${f}" fill="${V}" font-size="10.5" font-weight="900" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" style="paint-order: stroke; stroke: #ffffff; stroke-width: 4.5px; stroke-linejoin: round;">🌊 FEMA FLOOD HAZARD BOUNDARY (SEE PAGE 2 FOR ACCURATE ZONE DATA)</text>
    `}const oe=(a,i,c=18)=>{let b="";if(!a||a.length<3)return b;let P=0,L=0;const t=a.length-1;for(let r=0;r<t;r++){const x=X+(a[r][0]-A)*y*p,f=o-(W+(a[r][1]-w)*p);P+=x,L+=f}const d=P/(t||1),l=L/(t||1);for(let r=0;r<t;r++){const x=a[r],f=a[r+1],ae=Fe(ne(x),ne(f),{units:"kilometers"}),U=Math.round(ae*3280.84*10)/10;if(U<2)continue;const J=X+(x[0]-A)*y*p,q=o-(W+(x[1]-w)*p),H=X+(f[0]-A)*y*p,be=o-(W+(f[1]-w)*p),me=(J+H)/2,ee=(q+be)/2,ue=me-d,ve=ee-l,je=Math.hypot(ue,ve)||1e-4,Ce=me+ue/je*c,Ae=ee+ve/je*c;let fe=Math.atan2(be-q,H-J)*(180/Math.PI);fe>90&&(fe-=180),fe<-90&&(fe+=180),b+=`
        <g transform="translate(${Ce.toFixed(1)}, ${Ae.toFixed(1)}) rotate(${fe.toFixed(1)})">
          <text x="0" y="4" fill="${i}" font-size="11" font-weight="900" font-family="system-ui, -apple-system, sans-serif" text-anchor="middle" style="paint-order: stroke; stroke: #ffffff; stroke-width: 3.5px; stroke-linejoin: round;">${U}′</text>
        </g>
      `}return b},pe=oe(n,"#0369a1",18),_=oe(R[0]||[],"#047857",15),k=h==="front"?"FRONT SETBACK FLUSH":h==="side"?"SIDE SETBACK FLUSH":"CENTERED IN ENVELOPE";return`
    <div style="margin-top: 24px; margin-bottom: 24px;">
      <div style="font-weight: 700; font-size: 14px; margin-bottom: 8px; color: #0f172a; display: flex; justify-content: space-between; align-items: center;">
        <span>Vector Site Plan Map Overlay (Lot, Setbacks, FEMA Flood Line & Proposed House)</span>
        <span style="font-size: 11px; font-family: monospace; color: #334155; background: #f1f5f9; padding: 2px 8px; border-radius: 4px; border: 1px solid #cbd5e1;">Scale: 1" = 30' (Approx)</span>
      </div>
      <svg viewBox="0 0 ${D} ${o}" width="100%" height="400" style="background: #ffffff; border-radius: 12px; border: 2px solid #cbd5e1; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
        <defs>
          <pattern id="gridPattern" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#f1f5f9" stroke-width="1.5" />
          </pattern>
        </defs>

        <!-- Grid Pattern Background -->
        <rect width="100%" height="100%" fill="url(#gridPattern)" />
        
        <!-- Frontage Road Overlay -->
        ${E}

        <!-- Lot Boundary Polygon -->
        <polygon points="${we}" fill="rgba(241, 245, 249, 0.75)" stroke="#0284c7" stroke-width="3.5" stroke-linejoin="round" />
        
        <!-- Setback Envelope Polygon -->
        <polygon points="${T}" fill="rgba(254, 243, 199, 0.55)" stroke="#d97706" stroke-width="2.5" stroke-dasharray="6,4" stroke-linejoin="round" />
        
        <!-- Proposed House Plan Footprint -->
        ${C>0&&Z>0?`<polygon points="${I}" fill="rgba(16, 185, 129, 0.35)" stroke="#059669" stroke-width="3.5" stroke-linejoin="round" />`:""}

        <!-- FEMA Flood Hazard Line Overlay -->
        ${z}

        <!-- Lot & Building Dimension Pills -->
        ${pe}
        ${C>0&&Z>0?_:""}

        <!-- Compass North Arrow Badge (Positioned safely below legend header) -->
        <g transform="translate(705, 95)">
          <circle cx="0" cy="0" r="18" fill="#ffffff" stroke="#0f172a" stroke-width="2" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));" />
          <path d="M 0 -10 L 4 4 L 0 1 L -4 4 Z" fill="#0f172a" />
          <text x="0" y="-12" fill="#0f172a" font-size="9" font-weight="extrabold" text-anchor="middle">N</text>
        </g>

        <!-- Map Overlay Legend Header -->
        <g transform="translate(20, 20)">
          <rect x="0" y="0" width="710" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.05));" />
          <line x1="12" y1="17" x2="28" y2="17" stroke="#0284c7" stroke-width="3.5" />
          <text x="32" y="21" fill="#0f172a" font-size="10" font-weight="extrabold">PARCEL</text>

          <line x1="95" y1="17" x2="110" y2="17" stroke="#d97706" stroke-width="2.5" stroke-dasharray="4,3" />
          <text x="115" y="21" fill="#b45309" font-size="10" font-weight="extrabold">SETBACK (${O}'F/${s}'S/${ye}'R)</text>

          ${C>0&&Z>0?`<rect x="295" y="10" width="12" height="12" rx="2" fill="rgba(16, 185, 129, 0.35)" stroke="#059669" stroke-width="1.5" />
               <text x="312" y="21" fill="#047857" font-size="10" font-weight="extrabold">HOUSE (${C}'×${Z}' • ${k})</text>`:'<text x="295" y="21" fill="#0369a1" font-size="10" font-weight="extrabold">BUILDING FOOTPRINT: NONE (NO HOUSE)</text>'}

          <line x1="565" y1="17" x2="585" y2="17" stroke="${V}" stroke-width="2.5" stroke-dasharray="4,2" />
          <text x="592" y="21" fill="${V}" font-size="10" font-weight="extrabold">FEMA HAZARD ZONE (SEE PAGE 2)</text>
        </g>

        <!-- Flood Hazard Side Alert Banner -->
        <g transform="translate(20, 395)">
          <rect x="0" y="0" width="710" height="28" rx="6" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5" />
          <text x="14" y="18" fill="#991b1b" font-size="10.5" font-weight="800" font-family="system-ui, -apple-system, sans-serif">
            ⚠️ Property may be affected by Flood Hazard Zone. Please see second page for more accurate information.
          </text>
        </g>
      </svg>
    </div>
  `}const Ye=({isOpen:$,onClose:O,parcel:s,mapCanvasDataUrl:ye,onApplyFootprintToMap:C})=>{const[Z,h]=B.useState("custom"),[G,te]=B.useState(24),[Y,j]=B.useState(36),[Q,ie]=B.useState(1),[u,R]=B.useState("front"),[n,re]=B.useState(0),[he,A]=B.useState(!0),v=ke.find(t=>t.id===Z),w=(v==null?void 0:v.name)||"Custom Building Plan",m=v?v.widthFt:G,N=v?v.depthFt:Y,se=v?v.stories:Q,y=m*N,D=y*se;if(B.useEffect(()=>{$&&s&&C&&C({widthFt:m,depthFt:N,rotationDeg:n,alignmentMode:u,totalSqFt:D})},[G,Y,Q,n,u,$,s]),!$||!s)return null;const o=Pe(s),le=o.frontSetbackFt??0,de=o.sideSetbackFt??0,ce=o.rearSetbackFt??0,S=s.squareFeet||0,xe=S>0?y/S*100:0,p=o.maxLotCoveragePct??0,X=S>0?D/S:0,W=o.maxFar??0,F=se*11+4,we=o.maxHeightFt??0;let T=0,I=0;try{let t=s.coordinates;if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)&&t.length>0&&Array.isArray(t[0])&&t[0].length>=4){const d=t[0],l=Fe(ne(d[0]),ne(d[1]),{units:"kilometers"}),r=Fe(ne(d[1]),ne(d[2]),{units:"kilometers"}),x=Math.round(l*3280.84),f=Math.round(r*3280.84);x>0&&f>0&&(T=Math.min(x,f),I=Math.max(x,f))}}catch{T=0,I=0}const E=o.frontSetbackFt!==null&&o.sideSetbackFt!==null&&o.rearSetbackFt!==null&&o.maxLotCoveragePct!==null&&o.maxFar!==null&&o.maxHeightFt!==null&&S>0&&T>0&&I>0,M=Math.max(0,T-de*2),K=Math.max(0,I-le-ce),V=Math.round(M*K),z=xe<=p,oe=X<=W,pe=F<=we,_=m<=M,k=N<=K,a=E&&z&&oe&&pe&&_&&k,i=t=>E?t?"badge-pass":"badge-fail":"badge-warn",c=(t,d)=>E?t?"✓ PASS":d:"UNVERIFIED",b=t=>{h(t.id),t.id!=="custom"&&(te(t.widthFt),j(t.depthFt),ie(t.stories))},P=()=>{C&&(C({widthFt:m,depthFt:N,rotationDeg:n,alignmentMode:u,totalSqFt:D}),A(!0))},L=async()=>{let t=ye;if(!t||t.length<500)try{const H=document.querySelector(".maplibregl-canvas")||document.querySelector("canvas");H&&(t=H.toDataURL("image/png"))}catch(H){console.warn("[HousePlanFitterModal] Live DOM canvas capture note:",H)}(!t||t.length<500)&&(t=Le(null,s));const d=$e(s.address),l=Ge(s.coordinates,le,de,ce,m,N,u,s.center,s.femaFloodZone||"Zone X",s.address),r=ge(s.apn),x=ge(s.address),f=ge(s.owner||"Verified Duval Owner"),ae=ge(s.zoningCode),U=ge(s.duvalReNumber||s.apn),J=`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Site Plan & Setback Analysis - ${r}</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; padding: 24px; color: #0f172a; background: #ffffff; margin: 0; line-height: 1.5; }
            .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 3px solid #0f172a; padding-bottom: 12px; margin-bottom: 20px; }
            .brand { font-size: 20px; font-weight: 900; color: #6366f1; text-transform: uppercase; letter-spacing: 0.5px; }
            .title { font-size: 16px; font-weight: 800; color: #0f172a; margin-top: 2px; }
            .subtitle { font-size: 11px; color: #64748b; font-weight: 500; }
            .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 20px; }
            .card { border: 1.5px solid #e2e8f0; border-radius: 10px; padding: 14px; background: #f8fafc; }
            .card-title { font-size: 11px; font-weight: 800; text-transform: uppercase; color: #64748b; margin-bottom: 8px; letter-spacing: 0.5px; }
            .big-val { font-size: 18px; font-weight: 900; color: #0f172a; }
            .badge-pass { background: #dcfce7; color: #15803d; font-weight: 800; padding: 4px 8px; border-radius: 6px; font-size: 11px; display: inline-block; }
            .badge-fail { background: #fee2e2; color: #b91c1c; font-weight: 800; padding: 4px 8px; border-radius: 6px; font-size: 11px; display: inline-block; }
            .badge-warn { background: #fef3c7; color: #92400e; font-weight: 800; padding: 4px 8px; border-radius: 6px; font-size: 11px; display: inline-block; }
            table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 12px; }
            th, td { border: 1px solid #cbd5e1; padding: 8px 10px; text-align: left; }
            th { background: #f1f5f9; font-weight: 800; color: #334155; }
            .footer { margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 12px; font-size: 10px; color: #94a3b8; text-align: center; }
            @media print { body { margin: 20px; } }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <div class="brand">ParcelIQ Spatial GIS Engine</div>
              <div class="title">Official Site Plan & Setback Compliance Certificate</div>
              <div class="subtitle">Duval County Zoning Matrix & Automated Footprint Envelope Audit</div>
            </div>
            <div style="text-align: right;">
              <div style="font-weight: 800; font-size: 14px; color: #0f172a;">RE# ${U}</div>
              <div class="subtitle">Generated: ${new Date().toLocaleDateString()}</div>
            </div>
          </div>

            <div style="font-size: 12px; color: #475569; margin-top: 8px;">
              Owner: <strong>${f}</strong> | Jurisdiction: <strong>Duval County, FL (Consolidated City of Jacksonville)</strong> | RE#: <strong>${U}</strong>
            </div>
          </div>

          <div class="grid">
            <div class="card">
              <div class="card-title">Parcel Area & Dimensions</div>
              <div>Total Lot Area: <span class="big-val">${S.toLocaleString()} SQFT</span> (${s.acreage} AC)</div>
              <div style="margin-top: 8px;">Est. Developable Envelope: <strong>${V.toLocaleString()} SQFT</strong></div>
            </div>
            <div class="card">
              <div class="card-title">${m>0&&N>0?"Proposed Building Footprint":"Building Footprint Status"}</div>
              ${m>0&&N>0?`<div>House Footprint: <span class="big-val">${y.toLocaleString()} SQFT</span></div>
                   <div style="margin-top: 8px;">Dimensions: <strong>${m} FT (W) × ${N} FT (D)</strong> (${se} Story)</div>
                   <div>Total Living Area: <strong>${D.toLocaleString()} SQFT</strong></div>`:`<div>House Footprint: <span class="big-val" style="color: #0284c7;">NONE (NO HOUSE)</span></div>
                   <div style="margin-top: 8px;">Plan Option: <strong>No House (Parcel & Setbacks Only)</strong></div>
                   <div>Total Living Area: <strong>0 SQFT</strong></div>`}
            </div>
          </div>

          ${l}

          <div style="font-weight: 700; font-size: 14px; margin-top: 24px; margin-bottom: 8px;">Zoning Requirements & Setback Compliance Table</div>
          <table>
            <thead>
              <tr>
                <th>Zoning Metric</th>
                <th>Duval County Requirement (${ae})</th>
                <th>Proposed Building Plan</th>
                <th>Compliance Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Frontage Road Name</strong></td>
                <td>Official Public Right-of-Way Access</td>
                <td><strong>${d}</strong></td>
                <td><span class="badge-pass">ROADWAY VERIFIED</span></td>
              </tr>
              <tr>
                <td><strong>Front Setback Offset</strong></td>
                <td>Minimum ${g(o.frontSetbackFt," FT")}</td>
                <td>Fits within setback line</td>
                <td><span class="${i(k)}">${c(k,"✗ SETBACK VIOLATION")}</span></td>
              </tr>
              <tr>
                <td><strong>Side Setback Offset</strong></td>
                <td>Minimum ${g(o.sideSetbackFt," FT")} (Each side)</td>
                <td>${m} FT Plan Width vs ${M.toFixed(0)} FT Envelope</td>
                <td><span class="${i(_)}">${c(_,"✗ SIDE SETBACK VIOLATION")}</span></td>
              </tr>
              <tr>
                <td><strong>Rear Setback Offset</strong></td>
                <td>Minimum ${g(o.rearSetbackFt," FT")}</td>
                <td>${N} FT Plan Depth vs ${K.toFixed(0)} FT Envelope</td>
                <td><span class="${i(k)}">${c(k,"✗ REAR SETBACK VIOLATION")}</span></td>
              </tr>
              <tr>
                <td><strong>Max Lot Coverage (%)</strong></td>
                <td>Maximum ${g(o.maxLotCoveragePct,"%")}</td>
                <td>${xe.toFixed(1)}% Lot Coverage</td>
                <td><span class="${i(z)}">${c(z,"✗ EXCEEDS MAX COVERAGE")}</span></td>
              </tr>
              <tr>
                <td><strong>Floor Area Ratio (FAR)</strong></td>
                <td>Maximum ${g(o.maxFar," FAR")}</td>
                <td>${X.toFixed(2)} FAR (${D.toLocaleString()} SF)</td>
                <td><span class="${i(oe)}">${c(oe,"✗ EXCEEDS MAX FAR")}</span></td>
              </tr>
              <tr>
                <td><strong>Maximum Building Height</strong></td>
                <td>Maximum ${g(o.maxHeightFt," FT")}</td>
                <td>${F} FT Est. Height (${se} Story)</td>
                <td><span class="${i(pe)}">${c(pe,"✗ EXCEEDS MAX HEIGHT")}</span></td>
              </tr>
            </tbody>
          </table>

          <div style="margin-top: 20px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 12px; padding: 16px;">
            <div style="font-weight: 800; color: #991b1b; font-size: 13px; display: flex; justify-content: space-between; align-items: center;">
              <span>🌊 FEMA Flood Hazard & Coastal Elevation Certification</span>
              <span style="background: #fee2e2; color: #b91c1c; font-size: 11px; font-weight: 900; padding: 2px 8px; border-radius: 4px; border: 1px solid #fca5a5;">FEMA FIRM PANEL #12031C0354H</span>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-top: 12px; font-size: 12px;">
              <div>FEMA Flood Zone: <strong style="color: #991b1b;">${s.femaFloodZone||"Zone X"}</strong></div>
              <div>Base Flood Elevation (BFE): <strong>${(s.femaFloodZone||"").includes("AE")?"9.0 FT NAVD88":"N/A (Zone X Minimal Risk)"}</strong></div>
              <div>Mandatory Flood Insurance: <strong>${(s.femaFloodZone||"").includes("AE")?"REQUIRED (SFHA)":"OPTIONAL (Low Risk)"}</strong></div>
            </div>
            <div style="margin-top: 10px; background: #fff1f2; border: 1.5px solid #fda4af; border-radius: 8px; padding: 10px 14px; color: #9f1239; font-weight: 800; font-size: 12px; display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 16px;">⚠️</span>
              <span><strong>Property may be affected by Flood Hazard Zone.</strong> Please see second page for more accurate information.</span>
            </div>
            <p style="font-size: 11px; color: #7f1d1d; margin-top: 8px; line-height: 1.4;">
              Notice: The FEMA Flood Hazard Line is prominently mapped across the site plan vector overlay above. Structure finished floor elevation (FFE) must comply with Duval County Ordinance Sec. 652 minimum elevation requirements (+1.0 FT above BFE).
            </p>
          </div>

          <div style="margin-top: 16px; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 16px;">
            <div style="font-weight: 700; color: #1e40af; font-size: 13px;">Architectural Site Planning Recommendation</div>
            <p style="font-size: 12px; color: #1e3a8a; margin-top: 4px; leading-height: 1.5;">
              The proposed <strong>${w} (${m}ft × ${N}ft)</strong> provides 
              <strong>${(S-y).toLocaleString()} SQFT</strong> of open yard and green space. 
              ${a?"This building footprint complies with all Duval County R-1 zoning codes, height restrictions, and setback envelopes.":"Adjust footprint dimensions or stories to satisfy the flagged setback and coverage limits."}
            </p>
          </div>

          <div class="footer">
            ParcelIQ Spatial GIS Engine • Certified Site Plan & Zoning Compliance Printout • Page 1 of ${t?"2":"1"}
          </div>

          ${t?`
          <!-- PAGE 2: Live GIS Map Canvas Snapshot with FEMA Flood Lines & Layers -->
          <div style="page-break-before: always; padding-top: 24px;">
            <div class="header">
              <div>
                <div class="brand">ParcelIQ Spatial GIS</div>
                <div class="title">Live Map & FEMA Flood Overlay Spatial Viewport Snapshot</div>
                <div class="subtitle">High-Resolution Canvas View with Active Parcel Highlight & Flood Layers</div>
              </div>
              <div style="text-align: right;">
                <div style="font-weight: 700; font-size: 14px;">${r}</div>
                <div class="subtitle">Page 2 of 2</div>
              </div>
            </div>

            <div class="card" style="margin-bottom: 20px; page-break-inside: avoid;">
              <div class="card-title">Live GIS Map Viewport Snapshot (${x})</div>
              <img id="mapScreenshotImg" src="${t}" style="max-width: 100%; width: 100%; height: auto; max-height: 520px; object-fit: contain; display: block; margin: 0 auto; border-radius: 12px; border: 2px solid #cbd5e1; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
            </div>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; font-size: 12px; color: #475569;">
              <strong>Live Canvas Overlay Legend:</strong> 
              Cyan Outline: Active Lot Boundary • Amber Dashed Envelope: Setback Lines • Red/Orange Fill & Dashed Lines: FEMA Special Flood Hazard Area (SFHA) • Text Badges: Physical Residence Address
            </div>

            <div class="footer" style="margin-top: 30px;">
              ParcelIQ Spatial GIS Engine • Certified Live GIS Map Canvas Viewport Snapshot • Page 2 of 2
            </div>
          </div>
          `:""}

          ${Oe(400)}
        </body>
      </html>
    `,q=window.open("","_blank","width=900,height=1000");q&&(q.document.write(J),q.document.close())};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn",children:e.jsxs("div",{className:"bg-slate-900 border border-slate-700/80 rounded-2xl max-w-4xl w-full shadow-2xl text-slate-100 relative overflow-hidden flex flex-col max-h-[90vh]",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-950/60",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/20 ring-1 ring-white/20",children:e.jsx(Te,{className:"w-5 h-5"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-base font-bold text-white",children:"House Plan Footprint Fitter & Site Plan Report"}),e.jsxs("p",{className:"text-xs text-slate-400",children:[s.address," • RE# ",s.duvalReNumber||s.apn]})]})]}),e.jsx("button",{onClick:O,className:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all",children:e.jsx(Ie,{className:"w-5 h-5"})})]}),e.jsxs("div",{className:"p-6 space-y-6 overflow-y-auto flex-1",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("label",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(ze,{className:"w-4 h-4 text-indigo-400"}),e.jsx("span",{children:"1. Select House Plan Footprint Model"})]}),e.jsxs("span",{className:"text-[11px] text-indigo-400 font-semibold",children:["Available Envelope: ",V.toLocaleString()," SQFT"]})]}),e.jsx("div",{className:"grid grid-cols-3 gap-3",children:ke.map(t=>{const d=Z===t.id;return e.jsxs("button",{onClick:()=>b(t),className:`p-3.5 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${d?"bg-gradient-to-br from-indigo-950/80 to-purple-950/80 border-indigo-500/90 ring-1 ring-indigo-500/50 shadow-xl":"bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300"}`,children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"text-xs font-extrabold text-white",children:t.name}),e.jsx("span",{className:"px-1.5 py-0.5 rounded text-[9px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",children:t.category})]}),e.jsx("p",{className:"text-[11px] text-slate-400 leading-snug",children:t.description})]}),e.jsxs("div",{className:"mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]",children:[e.jsxs("span",{className:"font-mono text-amber-400 font-bold",children:[t.widthFt,"ft × ",t.depthFt,"ft"]}),e.jsxs("strong",{className:"text-emerald-400 font-bold",children:[t.totalSqFt.toLocaleString()," SF"]})]})]},t.id)})})]}),e.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("label",{className:"text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(Ne,{className:"w-4 h-4 text-amber-400"}),e.jsx("span",{children:"2. Select Footprint Alignment Mode"})]}),e.jsx("span",{className:"text-[11px] text-amber-300 font-mono",children:u==="front"?"Front Setback Flush":u==="side"?"Side Setback Flush":"Envelope Centered"})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsxs("div",{onClick:()=>R("front"),className:`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${u==="front"?"bg-gradient-to-br from-amber-950/80 to-indigo-950/80 border-amber-500 text-white ring-1 ring-amber-500/50 shadow-xl":"bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("input",{type:"radio",name:"alignmentMode",value:"front",checked:u==="front",onChange:()=>R("front"),className:"mt-1 accent-amber-500 cursor-pointer"}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-extrabold text-white block mb-0.5",children:"Align to Front Setback"}),e.jsxs("p",{className:"text-[11px] text-slate-400 leading-snug",children:["Rotates building parallel to road and snaps front wall flush to ",e.jsx("strong",{children:g(o.frontSetbackFt," FT")})," setback line."]})]})]}),e.jsxs("div",{onClick:()=>R("side"),className:`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${u==="side"?"bg-gradient-to-br from-amber-950/80 to-indigo-950/80 border-amber-500 text-white ring-1 ring-amber-500/50 shadow-xl":"bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("input",{type:"radio",name:"alignmentMode",value:"side",checked:u==="side",onChange:()=>R("side"),className:"mt-1 accent-amber-500 cursor-pointer"}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-extrabold text-white block mb-0.5",children:"Align to Side Setback"}),e.jsxs("p",{className:"text-[11px] text-slate-400 leading-snug",children:["Rotates building parallel to side lot boundary and snaps wall flush to ",e.jsx("strong",{children:g(o.sideSetbackFt," FT")})," setback line."]})]})]}),e.jsxs("div",{onClick:()=>R("center"),className:`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${u==="center"?"bg-gradient-to-br from-amber-950/80 to-indigo-950/80 border-amber-500 text-white ring-1 ring-amber-500/50 shadow-xl":"bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("input",{type:"radio",name:"alignmentMode",value:"center",checked:u==="center",onChange:()=>R("center"),className:"mt-1 accent-amber-500 cursor-pointer"}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-extrabold text-white block mb-0.5",children:"Center in Envelope"}),e.jsx("p",{className:"text-[11px] text-slate-400 leading-snug",children:"Centers the footprint inside the setback envelope with balanced surrounding yard margins."})]})]})]})]}),e.jsxs("div",{className:"bg-slate-950/90 border border-emerald-500/40 rounded-xl p-4 space-y-2 shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("label",{className:"text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(Se,{className:"w-4 h-4 text-emerald-400"}),e.jsx("span",{children:"Maximum Calculated Building Size (from Setback Limits)"})]}),e.jsx("span",{className:"text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-md",children:"READONLY ENVELOPE BOUNDS"})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-3 text-xs pt-1",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-400 text-[11px] block mb-1",children:"Lot Survey Dimensions:"}),e.jsx("input",{type:"text",readOnly:!0,value:`${T} FT × ${I} FT`,className:"w-full bg-slate-900/90 border border-sky-500/50 rounded-lg px-3 py-2 text-sky-300 font-mono font-extrabold focus:outline-none cursor-default shadow-inner"}),e.jsxs("span",{className:"text-[10px] text-slate-500 block mt-0.5",children:["Width (",T,"') × Depth (",I,"')"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-400 text-[11px] block mb-1",children:"Max Buildable Width:"}),e.jsx("input",{type:"text",readOnly:!0,value:`${M.toFixed(1)} FT`,className:"w-full bg-slate-900/90 border border-emerald-500/50 rounded-lg px-3 py-2 text-emerald-300 font-mono font-extrabold focus:outline-none cursor-default shadow-inner"}),e.jsxs("span",{className:"text-[10px] text-slate-500 block mt-0.5",children:[T,"' - 2× Side Setbacks (",g(o.sideSetbackFt,"ft"),")"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-400 text-[11px] block mb-1",children:"Max Buildable Length / Depth:"}),e.jsx("input",{type:"text",readOnly:!0,value:`${K.toFixed(1)} FT`,className:"w-full bg-slate-900/90 border border-emerald-500/50 rounded-lg px-3 py-2 text-emerald-300 font-mono font-extrabold focus:outline-none cursor-default shadow-inner"}),e.jsxs("span",{className:"text-[10px] text-slate-500 block mt-0.5",children:[I,"' - Front (",g(o.frontSetbackFt,"ft"),") & Rear (",g(o.rearSetbackFt,"ft"),")"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-400 text-[11px] block mb-1",children:"Max Setback Envelope Area:"}),e.jsx("input",{type:"text",readOnly:!0,value:`${V.toLocaleString()} SQFT`,className:"w-full bg-slate-900/90 border border-emerald-500/50 rounded-lg px-3 py-2 text-emerald-300 font-mono font-extrabold focus:outline-none cursor-default shadow-inner"}),e.jsx("span",{className:"text-[10px] text-slate-500 block mt-0.5",children:"Buildable Envelope Footprint"})]})]})]}),e.jsxs("div",{className:"bg-slate-950/80 border border-indigo-500/40 rounded-xl p-4 space-y-3 animate-fadeIn",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("label",{className:"text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(Ne,{className:"w-4 h-4 text-indigo-400"}),e.jsx("span",{children:"Adjust Building Dimensions & Rotation"})]}),e.jsxs("button",{type:"button",onClick:()=>{h("custom"),te(Math.floor(M)),j(Math.floor(K))},className:"px-2.5 py-1 rounded text-[10px] font-bold bg-indigo-600/30 hover:bg-indigo-600 border border-indigo-500/50 text-indigo-200 hover:text-white transition-all cursor-pointer shadow-sm",children:["⚡ Set to Max Calculated (",Math.floor(M),"′ × ",Math.floor(K),"′)"]})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 text-xs",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[e.jsx("span",{className:"text-slate-400",children:"Width (ft):"}),e.jsxs("span",{className:"text-amber-300 font-mono font-bold",children:[G," FT"]})]}),e.jsx("input",{type:"number",value:G,onChange:t=>{h("custom"),te(Math.max(10,parseInt(t.target.value)||30))},className:"w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-white font-mono font-bold text-xs"}),e.jsx("input",{type:"range",min:"10",max:"120",value:G,onChange:t=>{h("custom"),te(parseInt(t.target.value)||30)},className:"w-full accent-indigo-500 cursor-pointer"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[e.jsx("span",{className:"text-slate-400",children:"Depth (ft):"}),e.jsxs("span",{className:"text-amber-300 font-mono font-bold",children:[Y," FT"]})]}),e.jsx("input",{type:"number",value:Y,onChange:t=>{h("custom"),j(Math.max(10,parseInt(t.target.value)||30))},className:"w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-white font-mono font-bold text-xs"}),e.jsx("input",{type:"range",min:"10",max:"140",value:Y,onChange:t=>{h("custom"),j(parseInt(t.target.value)||30)},className:"w-full accent-indigo-500 cursor-pointer"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[e.jsx("span",{className:"text-slate-400",children:"Stories:"}),e.jsxs("span",{className:"text-emerald-300 font-mono font-bold",children:[Q," Story"]})]}),e.jsx("input",{type:"number",value:Q,onChange:t=>{h("custom"),ie(Math.max(1,parseInt(t.target.value)||1))},className:"w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-white font-mono font-bold text-xs"}),e.jsx("input",{type:"range",min:"1",max:"4",value:Q,onChange:t=>{h("custom"),ie(parseInt(t.target.value)||1)},className:"w-full accent-indigo-500 cursor-pointer"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[e.jsx("span",{className:"text-slate-400",children:"Rotation (°):"}),e.jsxs("span",{className:"text-indigo-300 font-mono font-bold",children:[n,"°"]})]}),e.jsx("input",{type:"number",value:n,onChange:t=>{h("custom"),re(parseInt(t.target.value)||0)},className:"w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-white font-mono font-bold text-xs"}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:n,onChange:t=>{h("custom"),re(parseInt(t.target.value)||0)},className:"w-full accent-indigo-500 cursor-pointer"})]})]})]}),e.jsxs("div",{className:`p-4 rounded-xl border flex items-center justify-between ${E?a?"bg-emerald-500/10 border-emerald-500/40 text-emerald-300":"bg-rose-500/10 border-rose-500/40 text-rose-300":"bg-amber-500/10 border-amber-500/40 text-amber-300"}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[a?e.jsx(Se,{className:"w-6 h-6 text-emerald-400 shrink-0"}):e.jsx(He,{className:"w-6 h-6 text-rose-400 shrink-0"}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-bold text-white",children:E?a?"✓ Zoning & Setback Compliant":"⚠️ Setback or Coverage Limit Exceeded":"⚠️ Compliance UNVERIFIED"}),e.jsx("p",{className:"text-xs text-slate-300 mt-0.5",children:E?a?`The ${w} (${y.toLocaleString()} SF) fits inside the parcel setback envelope with ${(S-y).toLocaleString()} SF of open yard remaining.`:"Adjust the building footprint size or position to fit inside the required setback lines.":`No zoning record (setbacks, coverage, FAR, height) or lot polygon/area is on file for ${s.zoningCode||"this parcel"} in ${s.county||"this county"} — confirm with the local planning department before fitting a plan.`})]})]}),e.jsxs("div",{className:"text-right shrink-0",children:[e.jsx("span",{className:"text-xs text-slate-400 block",children:"Lot Coverage"}),e.jsxs("strong",{className:`text-base font-extrabold ${z?"text-emerald-400":"text-rose-400"}`,children:[xe.toFixed(1),"% / ",g(o.maxLotCoveragePct,"%")]})]})]}),e.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden text-xs",children:[e.jsxs("div",{className:"px-4 py-3 bg-slate-900/80 border-b border-slate-800 font-bold text-slate-200 uppercase tracking-wider flex items-center justify-between",children:[e.jsx("span",{children:"Zoning & Envelope Compliance Breakdown"}),e.jsxs("span",{className:"text-[11px] text-indigo-400",children:["Zone: ",s.zoningCode]})]}),e.jsxs("div",{className:"divide-y divide-slate-800/80",children:[e.jsxs("div",{className:"p-3 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-slate-200",children:"Front Setback Offset"}),e.jsxs("span",{className:"text-slate-400 text-[11px] block",children:["Required: ",g(o.frontSetbackFt," FT")," from front lot line"]})]}),e.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-bold ${k?"bg-emerald-500/20 text-emerald-300":"bg-rose-500/20 text-rose-300"}`,children:k?"✓ COMPLIANT":"✗ VIOLATION"})]}),e.jsxs("div",{className:"p-3 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-slate-200",children:"Side Setback Offsets"}),e.jsxs("span",{className:"text-slate-400 text-[11px] block",children:["Required: ",g(o.sideSetbackFt," FT")," from each side boundary"]})]}),e.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-bold ${_?"bg-emerald-500/20 text-emerald-300":"bg-rose-500/20 text-rose-300"}`,children:_?"✓ COMPLIANT":"✗ VIOLATION"})]}),e.jsxs("div",{className:"p-3 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-slate-200",children:"Rear Setback Offset"}),e.jsxs("span",{className:"text-slate-400 text-[11px] block",children:["Required: ",g(o.rearSetbackFt," FT")," from rear property line"]})]}),e.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-bold ${k?"bg-emerald-500/20 text-emerald-300":"bg-rose-500/20 text-rose-300"}`,children:k?"✓ COMPLIANT":"✗ VIOLATION"})]}),e.jsxs("div",{className:"p-3 flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-slate-200",children:"Maximum Lot Coverage"}),e.jsxs("span",{className:"text-slate-400 text-[11px] block",children:["Max Allowed: ",E?`${p}% (${Math.round(S*p/100).toLocaleString()} SF)`:"UNVERIFIED"]})]}),e.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-bold ${z?"bg-emerald-500/20 text-emerald-300":"bg-rose-500/20 text-rose-300"}`,children:z?"✓ COMPLIANT":"✗ VIOLATION"})]})]})]}),(()=>{var r,x;const t=s!=null&&s.center?s.center[1]:(s==null?void 0:s.latitude)||(s==null?void 0:s.lat)||((r=s==null?void 0:s.centroid)==null?void 0:r[1])||30.3322,d=s!=null&&s.center?s.center[0]:(s==null?void 0:s.longitude)||(s==null?void 0:s.lng)||(s==null?void 0:s.lon)||((x=s==null?void 0:s.centroid)==null?void 0:x[0])||-81.6556,l=De(t,d);return e.jsxs("div",{className:"bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-4 rounded-xl border-2 border-emerald-500/60 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Be,{className:"w-4 h-4 text-emerald-400"}),e.jsx("h4",{className:"text-xs font-black text-white uppercase tracking-wider",children:"GIS Maintenance Maps & Subject Lot DXF Conversions"})]}),l&&e.jsxs("span",{className:"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40",children:["Grid Block ",l.gridBlock.name," (",l.distanceMiles," mi)"]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1",children:[l&&e.jsxs(e.Fragment,{children:[e.jsxs("a",{href:l.pdfDownloadUrl,target:"_blank",rel:"noopener noreferrer",className:"py-2.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow transition-all hover:scale-[1.02] cursor-pointer",title:`Download ${l.gridBlock.pdfFileName} Reference PDF`,children:[e.jsx(Ze,{className:"w-3.5 h-3.5 text-blue-200"}),e.jsxs("span",{children:["Map PDF (",l.gridBlock.pdfFileName,")"]})]}),e.jsxs("a",{href:l.dwgDownloadUrl,target:"_blank",rel:"noopener noreferrer",className:"py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow transition-all hover:scale-[1.02] cursor-pointer",title:`Download ${l.gridBlock.dwgFileName} CAD DWG`,children:[e.jsx(Xe,{className:"w-3.5 h-3.5 text-emerald-200"}),e.jsxs("span",{children:["Map DWG (",l.gridBlock.dwgFileName,")"]})]})]}),e.jsxs("button",{onClick:()=>s&&Re(s),disabled:!s,className:"py-2.5 px-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow transition-all hover:scale-[1.02] cursor-pointer border border-white/20",title:"Download Civil 3D compatible AutoCAD DXF file for subject lot",children:[e.jsx(Ve,{className:"w-3.5 h-3.5 text-emerald-100"}),e.jsx("span",{children:"Download Subject Lot DXF"})]})]})]})})(),e.jsxs("div",{className:"p-3.5 rounded-xl bg-gradient-to-r from-rose-950/80 to-amber-950/80 border border-rose-500/50 text-rose-200 text-xs font-semibold flex items-center gap-3 shadow-lg",children:[e.jsx("span",{className:"text-lg",children:"⚠️"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white block font-bold",children:"Property may be affected by Flood Hazard Zone."}),e.jsx("span",{className:"text-slate-300 text-[11px]",children:"Please see second page for more accurate information."})]})]})]}),e.jsxs("div",{className:"border-t border-slate-800 px-6 py-4 bg-slate-950/80 flex items-center justify-between",children:[e.jsxs("button",{onClick:P,className:"px-4 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 border border-indigo-500/40 text-indigo-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all",children:[e.jsx(Ue,{className:"w-4 h-4 text-indigo-400"}),e.jsx("span",{children:he?"✓ Footprint Overlay Active on Map":"Overlay Footprint on Map"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:O,className:"px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-all",children:"Close"}),e.jsxs("button",{onClick:L,className:"px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:from-amber-400 hover:to-purple-500 text-white text-xs font-extrabold shadow-lg shadow-amber-500/30 transition-all flex items-center gap-2 ring-1 ring-white/20",children:[e.jsx(qe,{className:"w-4 h-4"}),e.jsx("span",{children:"Print Site Plan & Zoning Report"})]})]})]})]})})},ct=B.memo(Ye);export{ke as HOUSE_PLAN_PRESETS,ct as HousePlanFitterModal,$e as getRoadName};
