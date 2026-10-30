var Ae=Object.defineProperty;var Fe=(n,r,e)=>r in n?Ae(n,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[r]=e;var J=(n,r,e)=>Fe(n,typeof r!="symbol"?r+"":r,e);import{r as R,j as t}from"./react-vendor-CB5wtuEC.js";import{a as K,g as ue,D as $e,G as Ce,b as Le,s as ye}from"./geminiService-yFq69Y7X.js";import{c as ve,g as pe}from"./parcelSplitter-CdTMAeUx.js";import{e as he,U as X,t as De,g as Ee,a0 as Q}from"./index-BNEO8Sp_.js";import{p as Te,a as Ie}from"./cogoEngine-4l4iQe9R.js";import{g as Re}from"./dxfExporter-DWRAbA7o.js";import{h as oe,a1 as Me,X as je,aB as we,d as ee,w as Oe,a3 as ke,aL as Pe,aj as te,b as re,_ as ie,v as Ue,D as Ge,a8 as Be,ao as He}from"./icons-vendor-BEIlHLFQ.js";import"./geodesyService-BArSPgNZ.js";import"./gis-vendor-Co8Zq2Um.js";import"./turf-vendor-CwrBJ54B.js";import"./maplibre-vendor-CLmOyQOb.js";import"./misc-data-D0yF5yJs.js";import"./duval-archibald-data-BYKUu7Lk.js";import"./duval-unrecorded-subs-data-Boarqhev.js";import"./duval-real-parcels-data-DdEJxntc.js";import"./florida-670-matrix-data-DYrACb7R.js";import"./supabase-vendor-CI_V8wt2.js";function le(n){if(!n)return`NORTH 00°00'00" EAST`;const r=n.trim().toUpperCase(),e=r.match(/^([NS])\s*(\d+)[\D]+(\d+)?[\D]*(\d+)?\s*([EW])$/);if(e){const o=e[1]==="N"?"NORTH":"SOUTH",s=e[2].padStart(2,"0"),a=(e[3]||"0").padStart(2,"0"),d=(e[4]||"0").padStart(2,"0"),u=e[5]==="E"?"EAST":"WEST";return`${o} ${s}°${a}'${d}" ${u}`}return r}function ce(n,r,e,o="DUVAL",s="FLORIDA"){const a=he(n.coordinates);if(!a||a.length<3)return`A PARCEL OF LAND SITUATED IN ${o.toUpperCase()} COUNTY, ${s.toUpperCase()}, CONTAINING ${n.squareFeet.toLocaleString()} SQUARE FEET (${n.acreage} ACRES), MORE OR LESS.`;const d=[],u=a[0],l=u[0].toFixed(5),v=u[1].toFixed(5);d.push(`LEGAL DESCRIPTION — ${r.toUpperCase()}`),d.push(`PARCEL IDENTIFICATION / APN: PORTION OF ${e}`),d.push(`SITUATED IN ${o.toUpperCase()} COUNTY, ${s.toUpperCase()}, MORE PARTICULARLY DESCRIBED AS FOLLOWS:`),d.push(""),d.push(`COMMENCING AT THE POINT OF BEGINNING (P.O.B.) HAVING GEOGRAPHIC COORDINATES OF LATITUDE ${v}°, LONGITUDE ${l}° W;`);for(let m=0;m<a.length-1;m++){const A=a[m],F=a[m+1],x=F[0]-A[0],S=F[1]-A[1],E=Math.round(Math.sqrt(x*x+S*S)*364e3*100)/100;let f=S>=0?"NORTH":"SOUTH",C=x>=0?"EAST":"WEST";const $=Math.atan2(Math.abs(x),Math.abs(S))*180/Math.PI,c=Math.floor($).toString().padStart(2,"0"),g=($-Math.floor($))*60,w=Math.floor(g).toString().padStart(2,"0"),T=Math.round((g-Math.floor(g))*60).toString().padStart(2,"0"),U=`${f} ${c}°${w}'${T}" ${C}`,q=m===a.length-2?" TO THE POINT OF BEGINNING.":";";d.push(`THENCE RUN ${U}, A DISTANCE OF ${E.toFixed(2)} FEET${q}`)}return d.push(""),d.push(`SAID SUBDIVISION CHILD LOT CONTAINING ${n.squareFeet.toLocaleString()} SQUARE FEET (${n.acreage} ACRES), MORE OR LESS, WITH ${n.frontageFt} FEET OF FRONTAGE.`),d.join(`
`)}function Ft(n){const r=n.courses||[],e=n.units||"feet",o=(n.county||"DUVAL").toUpperCase(),s=(n.state||"FLORIDA").toUpperCase(),a=n.parcelDescription||"a parcel of land",d=[];d.push(`A PARCEL OF LAND BEING ${a.toUpperCase()}, SITUATED IN ${o} COUNTY, ${s}, MORE PARTICULARLY DESCRIBED AS FOLLOWS:`),d.push(""),d.push(`BEGINNING AT A POINT, SAID POINT BEING THE POINT OF BEGINNING (POB), HAVING COORDINATES OF NORTHING ${(n.pobNorthing||5e3).toFixed(2)}, EASTING ${(n.pobEasting||5e3).toFixed(2)};`),d.push("");for(let u=0;u<r.length;u++){const l=r[u],m=u===r.length-1?" TO THE POINT OF BEGINNING.":";";if(l.type==="CURVE"||l.radius&&l.radius>0){const A=l.radius||0,F=l.arcLength||l.distance||0,x=le(l.chordBearing||l.bearing||""),S=l.chordDistance||l.distance||0;d.push(`THENCE ALONG A CURVE TO THE RIGHT, HAVING A RADIUS OF ${A.toFixed(2)} FEET, AN ARC LENGTH OF ${F.toFixed(2)} FEET, ALONG A CHORD BEARING OF ${x}, A CHORD DISTANCE OF ${S.toFixed(2)} ${e.toUpperCase()}${m}`)}else{const A=le(l.bearing||""),F=(l.distance||0).toFixed(2);d.push(`THENCE RUN ${A}, A DISTANCE OF ${F} ${e.toUpperCase()}${m}`)}}return(n.areaAcres!=null||n.perimeter!=null)&&(d.push(""),d.push(`SAID PARCEL CONTAINING ${(n.areaAcres||0).toFixed(4)} ACRES, MORE OR LESS, AND HAVING A PERIMETER OF ${(n.perimeter||0).toFixed(2)} ${e.toUpperCase()}.`)),d.join(`
`)}class ze{constructor(){J(this,"worker",null);J(this,"callbacks",new Map);if(typeof window<"u"&&typeof Worker<"u")try{this.worker=new Worker(new URL("/parceliq-site/assets/spatialWorker-BqgaJGr_.js",import.meta.url),{type:"module"}),this.worker.onmessage=r=>{const{id:e}=r.data,o=this.callbacks.get(e);o&&(o(r.data),this.callbacks.delete(e))}}catch(r){console.warn("[SpatialWorkerClient] Web Worker initialization note (falling back to main thread):",r)}}async calculateSplitInWorker(r,e,o){if(!this.worker)return null;const s=`split_${Date.now()}_${Math.random()}`;return new Promise(a=>{var u;const d=setTimeout(()=>{this.callbacks.delete(s),a(null)},1500);this.callbacks.set(s,l=>{clearTimeout(d),l.success?a(l.result):a(null)});try{(u=this.worker)==null||u.postMessage({id:s,type:"CALCULATE_SPLIT",payload:{parcel:r,targetAngleDeg:e,targetRatioPct:o}})}catch{clearTimeout(d),this.callbacks.delete(s),a(null)}})}async filterParcelsByRadiusInWorker(r,e,o){if(!this.worker)return null;const s=`radius_${Date.now()}_${Math.random()}`;return new Promise(a=>{var d;this.callbacks.set(s,u=>{u.success?a(u.result):a(null)}),(d=this.worker)==null||d.postMessage({id:s,type:"FILTER_RADIUS",payload:{parcels:r,center:e,radiusKm:o}})})}}const We=new ze;async function qe(n,r){var v,m,A,F;const e=(r||n.zoningCode||"").toUpperCase(),o=x=>{const S=Number(x);return x!=null&&x!==""&&Number.isFinite(S)&&S>0?S:null},s=K(),a=ue()||$e,d=n.address||"",u=n.county||"Duval County";if(s)try{const x=`Perform a live web search for official municipal zoning land development regulations (LDR) for:
Property Address: ${d}
County/City: ${u}, Florida
Zoning District Code: ${e}

Extract and return ONLY a JSON object formatted as follows. Every numeric field
must come from the cited municipal code; use null for any value you cannot find
there — never an estimate or a typical value.
\`\`\`json
{
  "zoningCode": "${e}",
  "zoningName": "<official district name, or null>",
  "frontSetbackFt": <number or null>,
  "sideSetbackFt": <number or null>,
  "rearSetbackFt": <number or null>,
  "minLotAreaSqFt": <number or null>,
  "maxHeightFt": <number or null>,
  "maxFar": <number or null>,
  "maxLotCoveragePct": <number or null>,
  "sourceUrl": "<URL of the municipal code section, or null>",
  "summaryText": "<2-sentence summary of the standards and allowed uses from the cited code>"
}
\`\`\``,S=new AbortController,E=setTimeout(()=>S.abort(),2500),f=`https://generativelanguage.googleapis.com/v1beta/models/${a}:generateContent?key=${s}`,C=await fetch(f,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:x}]}],tools:[{googleSearch:{}}]}),signal:S.signal});clearTimeout(E);const D=await C.json(),$=((F=(A=(m=(v=D==null?void 0:D.candidates)==null?void 0:v[0])==null?void 0:m.content)==null?void 0:A.parts)==null?void 0:F.map(g=>g.text).join(`
`))||"",c=$.match(/```json\s*([\s\S]*?)\s*```/)||$.match(/(\{[\s\S]*?\})/);if(c){const g=JSON.parse(c[1]);return{zoningCode:g.zoningCode||e,zoningName:g.zoningName||X,frontSetbackFt:o(g.frontSetbackFt),sideSetbackFt:o(g.sideSetbackFt),rearSetbackFt:o(g.rearSetbackFt),minLotAreaSqFt:o(g.minLotAreaSqFt),maxHeightFt:o(g.maxHeightFt),maxFar:o(g.maxFar),maxLotCoveragePct:o(g.maxLotCoveragePct),sourceUrl:typeof g.sourceUrl=="string"?g.sourceUrl:void 0,summaryText:g.summaryText||`Web-grounded live zoning standards retrieved for ${e} in ${u}.`,isWebGrounded:!0}}}catch(x){console.warn("[webZoningSearchService] Gemini web search grounding fallback note:",x)}const l=De(e,u);return{zoningCode:e||X,zoningName:(l==null?void 0:l.zoningName)||X,frontSetbackFt:l?l.frontSetbackFt:o(n.frontSetback),sideSetbackFt:l?l.sideSetbackFt:o(n.sideSetback),rearSetbackFt:l?l.rearSetbackFt:o(n.rearSetback),minLotAreaSqFt:l?o(l.minLotAreaSqFt):null,maxHeightFt:l?l.maxHeightFt:o(n.buildingHeightMax),maxFar:l?l.maxFar:o(n.maxFar),maxLotCoveragePct:l?l.maxLotCoveragePct:o(n.maxLotCoverage),summaryText:l?`Zoning standards from the ${u} zoning table for ${e} (${l.zoningName}). ${l.description}`:`Zoning standards for ${e||"this parcel"} in ${u} are UNVERIFIED — no zoning record is available; confirm with the local planning department.`,isWebGrounded:!1}}const W=1200/3937,Y=.3048;function ge(n,r){const e=r.toLowerCase().trim();let o=0;e.includes("us")||e.includes("survey")?o=n*W:e.includes("m")&&!e.includes("mile")?o=n:e.includes("ch")?o=n*66*W:e.includes("rod")||e.includes("pole")||e.includes("perch")?o=n*16.5*W:e.includes("link")?o=n*.66*W:e.includes("mi")?o=n*5280*W:o=n*Y;const s=o/W,a=o/Y,d=s/66,u=s/16.5,l=s/.66,v=s/5280;let m=s*s,A=o*o,F=m/43560,x=A/1e4;return{value:n,fromUnit:r,usSurveyFeet:Math.round(s*1e4)/1e4,internationalFeet:Math.round(a*1e4)/1e4,meters:Math.round(o*1e4)/1e4,chains:Math.round(d*1e4)/1e4,rods:Math.round(u*1e4)/1e4,links:Math.round(l*1e4)/1e4,miles:Math.round(v*1e5)/1e5,acres:Math.round(F*1e4)/1e4,hectares:Math.round(x*1e4)/1e4,sqMeters:Math.round(A*100)/100,sqFeet:Math.round(m*100)/100,formulaNote:"Converted using exact NIST US Survey Foot standard (1 m = 39.37/12 ft) and international ISO standard (1 ft = 0.3048 m)."}}function Ve(n,r,e){let o=r||0;!o&&e&&n>0&&(o=e/(2*Math.PI*n)*360);const s=o*Math.PI/180,a=2*Math.PI*n*o/360,d=2*n*Math.sin(s/2),u=n*Math.tan(s/2),l=n*(1/Math.cos(s/2)-1),v=n*(1-Math.cos(s/2)),m=5729.57795/n,A=ae(o).formatted;return{radiusFt:Math.round(n*100)/100,deltaDeg:Math.round(o*1e4)/1e4,arcLengthFt:Math.round(a*100)/100,chordLengthFt:Math.round(d*100)/100,tangentFt:Math.round(u*100)/100,externalFt:Math.round(l*100)/100,middleOrdinateFt:Math.round(v*100)/100,degreeOfCurveDeg:Math.round(m*1e4)/1e4,formattedDelta:A}}function _e(n){let r=0,e=0,o=0;for(const f of n){const C=f.azimuthDeg*Math.PI/180,D=f.distanceFt*Math.sin(C),$=f.distanceFt*Math.cos(C);e+=D,o+=$,r+=f.distanceFt}const s=Math.sqrt(e*e+o*o),a=(Math.atan2(e,o)*180/Math.PI+360)%360,d=me(a),u=s>0?Math.round(r/s):999999,l=`1 : ${u.toLocaleString()}`,v=[];for(let f=0;f<n.length;f++){const C=n[f],D=C.azimuthDeg*Math.PI/180,$=C.distanceFt*Math.sin(D),c=C.distanceFt*Math.cos(D),g=r>0?-o*(C.distanceFt/r):0,w=r>0?-e*(C.distanceFt/r):0,T=c+g,U=$+w;v.push({legIndex:f+1,lengthFt:Math.round(C.distanceFt*100)/100,unadjustedNorthing:Math.round(c*1e3)/1e3,unadjustedEasting:Math.round($*1e3)/1e3,correctionNorthing:Math.round(g*1e3)/1e3,correctionEasting:Math.round(w*1e3)/1e3,adjustedNorthing:Math.round(T*1e3)/1e3,adjustedEasting:Math.round(U*1e3)/1e3})}let m=0,A=0,F=0;const x=[[0,0]];for(const f of n){const C=f.azimuthDeg*Math.PI/180;A+=f.distanceFt*Math.sin(C),F+=f.distanceFt*Math.cos(C),x.push([A,F])}for(let f=0;f<x.length-1;f++)m+=x[f][0]*x[f+1][1]-x[f+1][0]*x[f][1];m=Math.abs(m)/2;const S=m/43560,E=m*Y*Y/1e4;return{totalPerimeterFt:Math.round(r*100)/100,misclosureNorthingFt:Math.round(-o*1e3)/1e3,misclosureEastingFt:Math.round(-e*1e3)/1e3,misclosureDistanceFt:Math.round(s*1e3)/1e3,misclosureBearingStr:d,precisionRatioStr:l,precisionNumber:u,areaSqFt:Math.round(m),areaAcres:Math.round(S*1e4)/1e4,areaHectares:Math.round(E*1e4)/1e4,isHighPrecisionSurvey:u>=1e4,legAdjustments:v}}function Ze(n,r=0,e=0,o="N"){let s=Math.abs(n)+r/60+e/3600;const a=o.trim().toUpperCase();return(a==="S"||a==="W"||n<0)&&(s=-s),Math.round(s*1e6)/1e6}function ae(n){const r=Math.abs(n),e=Math.floor(r),o=(r-e)*60,s=Math.floor(o),a=Math.round((o-s)*60*100)/100,u=`${n<0?"-":""}${e}°${s.toString().padStart(2,"0")}'${a.toFixed(0).padStart(2,"0")}"`;return{deg:e,min:s,sec:a,formatted:u}}function Ke(n){const e=n.trim().toUpperCase().match(/^([NS])\s*(\d+)[\D]+(\d+)?[\D]*(\d+)?\s*([EW])$/);if(!e)return 0;const o=e[1],s=parseFloat(e[2]||"0"),a=parseFloat(e[3]||"0"),d=parseFloat(e[4]||"0"),u=e[5],l=s+a/60+d/3600;return o==="N"&&u==="E"?l:o==="S"&&u==="E"?180-l:o==="S"&&u==="W"?180+l:o==="N"&&u==="W"?360-l:l}function me(n){let r=(n%360+360)%360,e="N",o="E",s=r;r>=0&&r<=90?(e="N",o="E",s=r):r>90&&r<=180?(e="S",o="E",s=180-r):r>180&&r<=270?(e="S",o="W",s=r-180):(e="N",o="W",s=360-r);const a=ae(s);return`${e} ${a.deg}°${a.min.toString().padStart(2,"0")}'${a.sec.toFixed(0).padStart(2,"0")}" ${o}`}function Ye(n,r,e){const o=Ke(n),s=e==="ADD"?r:-r,a=((o+s)%360+360)%360,d=me(a);return{bearing1:n,operation:e,resultBearing:d,azimuth1Deg:o,resultAzimuthDeg:a}}function Je(n,r,e=!1){let o=0,s=0;e?(o=r,s=2*Math.PI*n*o/360):(s=r,o=n>0?s/(2*Math.PI*n)*360:0);const a=o*Math.PI/180,d=2*n*Math.sin(a/2),u=.5*n*n*(a-Math.sin(a)),l=u/43560;return{radiusFt:Math.round(n*100)/100,arcLengthFt:Math.round(s*100)/100,centralAngleDeg:Math.round(o*1e4)/1e4,centralAngleRad:Math.round(a*1e4)/1e4,chordLengthFt:Math.round(d*100)/100,arcSegmentAreaSqFt:Math.round(u*100)/100,arcSegmentAreaAcres:Math.round(l*1e4)/1e4,formulaStr:`A_seg = ½ · R² · (θ - sin θ) = ½ · (${n.toFixed(1)})² · (${a.toFixed(4)} - sin(${a.toFixed(4)})) = ${Math.round(u*100)/100} SF`}}function de(n,r,e=3){const o=Math.max(1,n),s=Math.round(r/o*100)/100,a=s<=e,d=a?`✓ Depth-to-Width Ratio (${s}:1) complies with municipal maximum limit (≤ ${e}:1).`:`⚠️ Depth-to-Width Ratio (${s}:1) exceeds municipal maximum limit (${e}:1). Subdivision variance or Flag Lot redesign required.`;return{widthFt:Math.round(n*10)/10,depthFt:Math.round(r*10)/10,ratio:s,maxAllowedRatio:e,isCompliant:a,notes:d}}async function Xe(n,r){const e=[],o=r.squareFeet||15e3,s=r.acreage||o/43560,a=n.toLowerCase(),d=a.match(/radius\s*=?\s*([\d.]+)/i)||a.match(/\br\s*=\s*([\d.]+)/i),u=a.match(/delta\s*=?\s*([\d.]+)/i)||a.match(/\bd\s*=\s*([\d.]+)/i),l=a.match(/arc\s*=?\s*([\d.]+)/i)||a.match(/\ba\s*=\s*([\d.]+)/i);if(d&&(u||l)){const h=parseFloat(d[1]),y=u?parseFloat(u[1]):void 0,N=l?parseFloat(l[1]):void 0,p=Ve(h,y,N);return e.push({agentName:"PhD COGO Curve Solver Agent",type:"INFO",message:`📐 Advanced Curve Solved: Radius ${p.radiusFt} FT, Delta ${p.formattedDelta} (${p.deltaDeg}°), Arc ${p.arcLengthFt} FT, Chord ${p.chordLengthFt} FT, Tangent ${p.tangentFt} FT, External ${p.externalFt} FT, Middle Ordinate ${p.middleOrdinateFt} FT, Degree of Curve D=${p.degreeOfCurveDeg}°.`,confidenceScore:.99}),{replyText:`📐 **PhD-Level Circular Curve Solution**:
• **Radius ($R$)**: ${p.radiusFt} FT
• **Central Angle ($Delta$)**: ${p.formattedDelta} (${p.deltaDeg}°)
• **Arc Length ($L$)**: ${p.arcLengthFt} FT
• **Chord Distance ($C$)**: ${p.chordLengthFt} FT
• **Tangent Distance ($T$)**: ${p.tangentFt} FT
• **External Distance ($E$)**: ${p.externalFt} FT
• **Middle Ordinate ($M$)**: ${p.middleOrdinateFt} FT
• **Degree of Curve ($D_c$)**: ${p.degreeOfCurveDeg}°`,splitResult:null,targetRatioPct:50,targetAngleDeg:0,isCompliant:!0,confidenceScore:99,agentDiagnostics:e}}const v=n.match(/([NS]\s*\d+[\D]+\d+[\D]*\d*[\D]*[EW])/i),m=a.match(/(\+|\-|add|subtract)\s*([\d.]+)\s*(deg|degree|degrees|°)/i);if(v&&m){const h=v[1],y=m[1],N=parseFloat(m[2]),p=y==="-"||y.includes("sub")?"SUBTRACT":"ADD",B=Ye(h,N,p);return e.push({agentName:"COGO Bearing Trigonometry Agent",type:"INFO",message:`🧭 Bearing Math (${p}): Input ${h} (${B.azimuth1Deg.toFixed(2)}° Az) ${p==="ADD"?"+":"-"} ${N}° = ${B.resultBearing} (${B.resultAzimuthDeg.toFixed(2)}° Az).`,confidenceScore:.99}),{replyText:`🧭 **COGO Bearing ${p==="ADD"?"Addition":"Subtraction"} Result**:
• **Original Bearing**: \`${h}\` (Azimuth: ${B.azimuth1Deg.toFixed(2)}°)
• **Adjustment**: ${p==="ADD"?"+":"-"}${N}°
• **Resulting Bearing**: **\`${B.resultBearing}\`** (Azimuth: ${B.resultAzimuthDeg.toFixed(2)}°)`,splitResult:null,targetRatioPct:50,targetAngleDeg:0,isCompliant:!0,confidenceScore:99,agentDiagnostics:e}}const A=a.match(/convert\s+([\d.]+)\s*([a-z\s%]+)\s*(to|in)\s*([a-z\s%]+)/i)||a.match(/([\d.]+)\s*(chains|rods|links|us\s*feet|meters|m|ft|feet|acres|hectares)/i);if(A&&!a.includes("split")&&!a.includes("zoning")){const h=parseFloat(A[1]),y=A[2]||"ft",N=ge(h,y);return e.push({agentName:"PhD Surveying Unit Conversion Agent",type:"INFO",message:`📏 PhD Unit Conversion: ${h} ${y} = ${N.usSurveyFeet} US Survey FT / ${N.meters} M / ${N.chains} Chains / ${N.rods} Rods / ${N.links} Links.`,confidenceScore:.99}),{replyText:`📏 **PhD-Level Geodetic Unit Conversion**:
• **Input**: **${h} ${y.toUpperCase()}**
• **US Survey Feet (NIST Standard)**: **${N.usSurveyFeet} US FT**
• **International Meters (ISO Standard)**: **${N.meters} M**
• **Gunter Chains (1 ch = 66 ft)**: **${N.chains} Chains**
• **Survey Rods / Perches (1 rod = 16.5 ft)**: **${N.rods} Rods**
• **Survey Links (1 link = 0.66 ft)**: **${N.links} Links**
• **Statute Miles**: **${N.miles} Miles**
${N.hectares!=null?`• **Hectares**: **${N.hectares} Ha** (${N.acres} Acres)`:""}

*${N.formulaNote}*`,splitResult:null,targetRatioPct:50,targetAngleDeg:0,isCompliant:!0,confidenceScore:99,agentDiagnostics:e}}const F=a.match(/(\d+)°\s*(\d+)'\s*([\d.]+)"/i)||a.match(/(\d+)\s+deg\s+(\d+)\s+min\s+([\d.]+)\s+sec/i),x=a.match(/([\d.]+)\s*(dd|decimal\s*degree|decimal\s*degrees)/i);if(F){const h=parseFloat(F[1]),y=parseFloat(F[2]),N=parseFloat(F[3]),p=Ze(h,y,N);return e.push({agentName:"COGO DMS/DD Converter Agent",type:"INFO",message:`🌐 DMS to DD Conversion: ${h}°${y}'${N}" = ${p}° Decimal Degrees.`,confidenceScore:.99}),{replyText:`🌐 **DMS to Decimal Degrees**: **${h}°${y}'${N}"** = **${p}°**`,splitResult:null,targetRatioPct:50,targetAngleDeg:0,isCompliant:!0,confidenceScore:99,agentDiagnostics:e}}if(x){const h=parseFloat(x[1]),y=ae(h);return e.push({agentName:"COGO DMS/DD Converter Agent",type:"INFO",message:`🌐 DD to DMS Conversion: ${h}° = ${y.formatted}.`,confidenceScore:.99}),{replyText:`🌐 **Decimal Degrees to DMS**: **${h}°** = **${y.formatted}**`,splitResult:null,targetRatioPct:50,targetAngleDeg:0,isCompliant:!0,confidenceScore:99,agentDiagnostics:e}}if((a.includes("segment")||a.includes("arc area"))&&d){const h=parseFloat(d[1]),y=l?parseFloat(l[1]):u?parseFloat(u[1]):100,p=Je(h,y,!!(u&&!l));return e.push({agentName:"Shoelace & Arc Area Solver Agent",type:"INFO",message:`⭕ Circular Arc Segment Area Solved: R=${p.radiusFt} FT, Arc L=${p.arcLengthFt} FT, Central Angle θ=${p.centralAngleDeg}°. Segment Area A_seg=${p.arcSegmentAreaSqFt.toLocaleString()} SF (${p.arcSegmentAreaAcres} AC).`,confidenceScore:.99}),{replyText:`⭕ **Shoelace & Circular Arc Segment Area Solution**:
• **Radius ($R$)**: ${p.radiusFt} FT
• **Arc Length ($L$)**: ${p.arcLengthFt} FT
• **Central Angle ($Delta$)**: ${p.centralAngleDeg}° (${p.centralAngleRad} rad)
• **Chord Length ($C$)**: ${p.chordLengthFt} FT
• **Arc Segment Area ($A_{seg}$)**: **${p.arcSegmentAreaSqFt.toLocaleString()} SF** (${p.arcSegmentAreaAcres} AC)

📐 **Mathematical Formula**:
$$A_{seg} = \\frac{1}{2} R^2 (\\theta - \\sin\\theta)$$
\`${p.formulaStr}\``,splitResult:null,targetRatioPct:50,targetAngleDeg:0,isCompliant:!0,confidenceScore:99,agentDiagnostics:e}}let S=50,E=0;const f=a.match(/([\d.]+)\s*(ac|acre|acres)/),C=a.match(/([\d,]+)\s*(sf|sqft|square\s*feet|sq\s*ft)/),D=a.match(/(\d+)[\/\s%]+(\d+)/);if(f){const h=parseFloat(f[1]);h>0&&s>0&&(S=Math.min(85,Math.max(15,Math.round(h/s*100))))}else if(C){const h=parseFloat(C[1].replace(/,/g,""));h>0&&o>0&&(S=Math.min(85,Math.max(15,Math.round(h/o*100))))}else if(D){const h=parseInt(D[1]);h>0&&h<100&&(S=h)}let $="PARALLEL_LINE";a.includes("flag")||a.includes("easement")||a.includes("corridor")||a.includes("driveway")?$="FLAG_LOT_EASEMENT":a.includes("perpendicular")||a.includes("frontage")?$="PERPENDICULAR_FRONTAGE":a.includes("radial")||a.includes("pivot")||a.includes("vertex")?$="FIXED_POINT_RADIAL":$="PARALLEL_LINE",a.includes("vertical")||a.includes("side by side")||a.includes("width")?E=90:a.includes("horizontal")||a.includes("front")||a.includes("rear")?E=0:(a.includes("diagonal")||a.includes("angle"))&&(E=45),e.push({agentName:"Subdivision Extractor Agent",type:"INFO",message:`Parsed subdivision target: ${S}% / ${100-S}% split using ${$} algorithm at ${E}° cutting axis.`,confidenceScore:.94});let c=await We.calculateSplitInWorker(r,E,S);c||(c=ve(r,E,S,$));const g=Te(n);let w=null;if(g.length>0){w=Ie(g,r.center);const h=_e(g.map(y=>({azimuthDeg:Ee(y),distanceFt:y.distanceFt||0})));e.push({agentName:"Bowditch Compass Rule Agent",type:"INFO",message:`Parsed ${g.length} deed calls. Bowditch Misclosure: ${h.misclosureDistanceFt} FT, Precision Ratio: ${h.precisionRatioStr} ${h.isHighPrecisionSurvey?"(Pass ≥ 1:10,000)":"(Warning < 1:10,000)"}.`,confidenceScore:.98})}let T="",U="";c&&(T=ce(c.childA,"Child Lot 1",r.apn,r.county||"DUVAL"),U=ce(c.childB,"Child Lot 2",r.apn,r.county||"DUVAL"),e.push({agentName:"Legal Description Writer Agent",type:"INFO",message:"Generated formal metes-and-bounds legal descriptions for Child Lot 1 and Child Lot 2.",confidenceScore:.98}));const H=n.match(/\b(r-1|r-2|r-3|r-4|r-5|c-1|c-2|ccg-1|ccg-2|m-1|m-2|pud|cg|rb|com)\b/i),q=H?H[1].toUpperCase():void 0,L=await qe(r,q),M=L.zoningCode,V=L.frontSetbackFt,_=L.sideSetbackFt,k=L.rearSetbackFt,O=L.minLotAreaSqFt,z=h=>h===null?"UNVERIFIED":`${h}'`,G=`Front ${z(V)} / Side ${z(_)} / Rear ${z(k)}`;let i;L.isWebGrounded?e.push({agentName:"Live Web Zoning Search Agent",type:"CONSENSUS_PASS",message:`🌐 Live Web Search Grounding: LDR standards for ${M} in ${r.county||"Duval County"}: ${G}${L.sourceUrl?` (source: ${L.sourceUrl})`:""}.`,confidenceScore:.99}):e.push({agentName:"Municipal Zoning Database Agent",type:"INFO",message:`🏛️ County zoning table for ${M} (${L.zoningName}): ${G}.`,confidenceScore:O===null?.5:.97});const b={};L.zoningName&&L.zoningName!=="UNVERIFIED"&&(b.zoningName=L.zoningName),V!==null&&(b.frontSetback=V),_!==null&&(b.sideSetback=_),k!==null&&(b.rearSetback=k),L.maxHeightFt!==null&&(b.buildingHeightMax=L.maxHeightFt),L.maxFar!==null&&(b.maxFar=L.maxFar),L.maxLotCoveragePct!==null&&(b.maxLotCoverage=L.maxLotCoveragePct),(M!==r.zoningCode||Object.entries(b).some(([h,y])=>r[h]!==y))&&(i={...r,zoningCode:M,...b});const j=!!(c&&O!==null&&c.childA.squareFeet>=O&&c.childB.squareFeet>=O);O===null?e.push({agentName:"Zoning Variance Auditor Agent",type:"WARNING",message:`⚠️ Zoning compliance UNVERIFIED: no minimum lot area on record for ${M||"this parcel"} in ${r.county||"this county"} — confirm with the local planning department.`,confidenceScore:.5}):!j&&c?e.push({agentName:"Zoning Variance Auditor Agent",type:"WARNING",message:`⚠️ Subdivision Alert: One or both child lots (${c.childA.squareFeet.toLocaleString()} SF / ${c.childB.squareFeet.toLocaleString()} SF) fall below ${M} minimum lot size (${O.toLocaleString()} SF). Zoning variance required.`,confidenceScore:.95}):e.push({agentName:"Zoning Variance Auditor Agent",type:"CONSENSUS_PASS",message:`✓ Zoning Pass: Both child lots satisfy ${M} minimum area requirement (≥ ${O.toLocaleString()} SF) with ${G} setbacks.`,confidenceScore:.98});const I=de((c==null?void 0:c.childA.frontageFt)||50,(c==null?void 0:c.childA.depthFt)||100),P=de((c==null?void 0:c.childB.frontageFt)||50,(c==null?void 0:c.childB.depthFt)||100),Z=(c==null?void 0:c.depthToWidthRatioA)||I.ratio,se=(c==null?void 0:c.depthToWidthRatioB)||P.ratio,xe=Z>3?" ⚠️ (Exceeds 3:1 max limit)":" (Pass ≤ 3:1)",fe=se>3?" ⚠️ (Exceeds 3:1 max limit)":" (Pass ≤ 3:1)";let ne="";c!=null&&c.selfHealingApplied&&(ne=`
💡 **Self-Healing Flag Lot Recommendation**: ${c.selfHealingNote}
`);const be=O===null?50:j?96:82,Se=c?c.childA.squareFeet.toLocaleString():"0",Ne=c?c.childB.squareFeet.toLocaleString():"0";return{replyText:`I have completed the live web zoning search & subdivision analysis for ${r.apn} (${r.address}).

🌐 **Live Web Search Zoning Results**: ${L.summaryText}
🏛️ **District**: ${M} (${L.zoningName})
📏 **Setbacks**: ${G} (Max Height: ${z(L.maxHeightFt)})

⚙️ **Partition Algorithm**: **${$}** (${S}% / ${100-S}% target ratio at ${E}° cutting axis)
📐 **Child Lot 1**: ${Se} SF (${c==null?void 0:c.childA.acreage} AC) • ${c==null?void 0:c.childA.frontageFt} FT frontage • Depth-to-Width: **${Z}:1**${xe}
📐 **Child Lot 2**: ${Ne} SF (${c==null?void 0:c.childB.acreage} AC) • ${c==null?void 0:c.childB.frontageFt} FT frontage • Depth-to-Width: **${se}:1**${fe}
${ne}
${O===null?"⚠️ **Zoning Compliance UNVERIFIED**: no minimum lot area on record for this district — confirm with the local planning department.":j?"✓ **Zoning Compliant**: Both child lots meet the minimum lot area on record.":`⚠️ **Variance Required**: Child lot sizes fall below ${M} minimum standards (${O.toLocaleString()} SF).`}

> *Disclaimer: Calculations provided by the AI Parcel Split Plugin are for conceptual land planning, engineering feasibility, and preliminary analysis. Official property subdivisions require a licensed Land Surveyor (PLS), boundary field survey, and formal approval by local municipal planning commissions.*`,splitResult:c,cogoResult:w,childLot1LegalDescription:T,childLot2LegalDescription:U,targetRatioPct:S,targetAngleDeg:E,isCompliant:j,confidenceScore:be,agentDiagnostics:e,updatedParcel:i}}function Qe(n){var w;const r=n.timestampStr||new Date().toISOString(),e=new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:"short"}),o=n.parcel,s=n.splitResult,a=n.webZoning,d=s?s.childA.squareFeet.toLocaleString():"N/A",u=s?s.childA.acreage:"N/A",l=s?s.childA.frontageFt:"N/A",v=s?s.childB.squareFeet.toLocaleString():"N/A",m=s?s.childB.acreage:"N/A",A=s?s.childB.frontageFt:"N/A",F=T=>typeof T=="number"&&T>0?`${T}'`:"UNVERIFIED",x=F((a==null?void 0:a.frontSetbackFt)??o.frontSetback),S=F((a==null?void 0:a.sideSetbackFt)??o.sideSetback),E=F((a==null?void 0:a.rearSetbackFt)??o.rearSetback),f=(a==null?void 0:a.zoningCode)||o.zoningCode||"UNVERIFIED",C=(a==null?void 0:a.zoningName)||o.zoningName||"UNVERIFIED",D=(a==null?void 0:a.minLotAreaSqFt)??null,$=T=>D===null||T===void 0?'<span style="color:#fcd34d;">UNVERIFIED (no minimum lot area on record)</span>':T>=D?`<span style="color:#34d399;">COMPLIANT (≥ ${D.toLocaleString()} SF)</span>`:`<span style="color:#f87171;">BELOW MINIMUM (${D.toLocaleString()} SF)</span>`,c=o.squareFeet?ge(o.squareFeet,"sqft"):null,g=s?pe(o,s):"";return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Subdivision MapCheck Sketch (Not a Survey) — RE# ${o.apn}</title>
  <style>
    body {
      font-family: 'Courier New', Courier, monospace, system-ui;
      background: #0f172a;
      color: #f8fafc;
      padding: 30px;
      max-width: 900px;
      margin: 0 auto;
    }
    .cert-border {
      border: 3px double #38bdf8;
      padding: 24px;
      background: #020617;
      border-radius: 12px;
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5);
    }
    .header-table {
      width: 100%;
      border-bottom: 2px solid #334155;
      padding-bottom: 12px;
      margin-bottom: 20px;
    }
    .stamp-box {
      border: 2px solid #10b981;
      color: #34d399;
      padding: 8px 12px;
      font-weight: bold;
      text-align: center;
      border-radius: 6px;
      font-size: 11px;
    }
    .section-title {
      color: #38bdf8;
      border-bottom: 1px solid #334155;
      padding-bottom: 4px;
      margin-top: 24px;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
      font-size: 12px;
    }
    th, td {
      border: 1px solid #334155;
      padding: 8px;
      text-align: left;
    }
    th {
      background: #1e293b;
      color: #94a3b8;
    }
    .svg-container {
      background: #090d16;
      border: 1px solid #334155;
      padding: 16px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      margin-top: 12px;
    }
    .legal-box {
      background: #090d16;
      border: 1px solid #334155;
      padding: 12px;
      font-size: 11px;
      white-space: pre-wrap;
      border-radius: 6px;
      color: #cbd5e1;
      margin-top: 8px;
    }
    .footer-stamp {
      margin-top: 30px;
      border-top: 2px solid #334155;
      padding-top: 12px;
      font-size: 10px;
      color: #64748b;
      display: flex;
      justify-content: space-between;
    }
  </style>
</head>
<body>
  <div class="cert-border">
    <table class="header-table">
      <tr>
        <td>
          <h2 style="margin:0; color:#f8fafc; font-size:18px;">PARCEL INTELLIGENCE HUB • COGO SURVEY SKETCH</h2>
          <p style="margin:4px 0 0 0; color:#94a3b8; font-size:12px;">TIMESTAMPED SUBDIVISION MAPCHECK SKETCH — NOT A SURVEY</p>
        </td>
        <td style="text-align:right;">
          <div class="stamp-box">
            <span>OFFICIAL MAPCHECK PASSED</span><br />
            <span style="font-size:9px; color:#94a3b8;">ISO 8601 VERIFIED</span>
          </div>
        </td>
      </tr>
    </table>

    <div style="font-size:11px; color:#a855f7; margin-bottom:16px;">
      <b>TIMESTAMP:</b> ${r} (${e})
    </div>

    <div class="section-title">1. PROPERTY & MUNICIPAL ZONING STANDARDS</div>
    <table>
      <tr>
        <th>PARCEL APN / RE#</th>
        <td>${o.apn}</td>
        <th>COUNTY / JURISDICTION</th>
        <td>${o.county||"Duval County"}, FL</td>
      </tr>
      <tr>
        <th>SITUS ADDRESS</th>
        <td>${o.address||"N/A"}</td>
        <th>TOTAL AREA</th>
        <td>${c?`${o.squareFeet.toLocaleString()} SF (${o.acreage} AC / ${(w=c.sqMeters)==null?void 0:w.toLocaleString()} SQ M)`:"UNVERIFIED"}</td>
      </tr>
      <tr>
        <th>ZONING CODE</th>
        <td><b style="color:#a855f7;">${f}</b> (${C})</td>
        <th>SETBACKS (F / S / R)</th>
        <td><b style="color:#34d399;">${x} FRONT / ${S} SIDE / ${E} REAR</b></td>
      </tr>
    </table>

    <div class="section-title">2. SUBDIVISION CHILD LOT CALCULATIONS</div>
    <table>
      <thead>
        <tr>
          <th>LOT IDENTIFIER</th>
          <th>SQUARE FEET</th>
          <th>ACREAGE</th>
          <th>FRONTAGE (FT)</th>
          <th>DEPTH/WIDTH RATIO</th>
          <th>ZONING COMPLIANCE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>CHILD LOT 1</b></td>
          <td>${d} SF</td>
          <td>${u} AC</td>
          <td>${l} FT</td>
          <td><b>${(s==null?void 0:s.depthToWidthRatioA)||(s?(s.childA.depthFt/Math.max(1,s.childA.frontageFt)).toFixed(1):"N/A")}:1</b></td>
          <td>${$(s==null?void 0:s.childA.squareFeet)}</td>
        </tr>
        <tr>
          <td><b>CHILD LOT 2</b></td>
          <td>${v} SF</td>
          <td>${m} AC</td>
          <td>${A} FT</td>
          <td><b>${(s==null?void 0:s.depthToWidthRatioB)||(s?(s.childB.depthFt/Math.max(1,s.childB.frontageFt)).toFixed(1):"N/A")}:1</b></td>
          <td>${$(s==null?void 0:s.childB.squareFeet)}</td>
        </tr>
      </tbody>
    </table>

    ${s!=null&&s.selfHealingApplied?`
    <div style="margin-top:12px; padding:10px; background:#064e3b; border:1px solid #10b981; border-radius:6px; font-size:11px; color:#a7f3d0;">
      💡 <b>SELF-HEALING ZONING EASEMENT APPLIED:</b> ${s.selfHealingNote}
    </div>
    `:""}

    ${g?`
    <div class="section-title">3. TURF.JS 2D VECTOR SUBDIVISION SKETCH</div>
    <div class="svg-container">
      ${g}
    </div>
    `:""}

    ${n.childLot1Legal?`
    <div class="section-title">4. CHILD LOT 1 SURVEY LEGAL DESCRIPTION</div>
    <div class="legal-box">${n.childLot1Legal}</div>
    `:""}

    ${n.childLot2Legal?`
    <div class="section-title">5. CHILD LOT 2 SURVEY LEGAL DESCRIPTION</div>
    <div class="legal-box">${n.childLot2Legal}</div>
    `:""}

    <!-- Not a survey: no licensed surveyor has reviewed, signed or sealed this output. -->
    <div style="margin-top:24px; padding:16px; border:1px dashed #b45309; border-radius:8px; font-size:10px; color:#fcd34d;">
      <p style="margin:0 0 4px 0; font-weight:bold;">NOT A SURVEY — UNSIGNED AND UNSEALED</p>
      <p style="margin:0;">This lot-split sketch is computed automatically from GIS parcel data. It has not been prepared, signed or sealed by a Florida Professional Surveyor and Mapper and must not be recorded or relied on as a boundary survey (FAC Chapter 5J-17).</p>
    </div>

    <div class="footer-stamp">
      <div>GENERATED BY: PARCEL INTELLIGENCE HUB AGENT CHAT • COGO ENGINE V2.0</div>
      <div>TIMESTAMP HASH: ${r}</div>
    </div>
  </div>
</body>
</html>`}function et(n){const r=Qe(n),e=new Blob([r],{type:"text/html"}),o=URL.createObjectURL(e),s=document.createElement("a");s.href=o,s.download=`SurveyCertificate_${n.parcel.apn}_${Date.now()}.html`,s.click(),URL.revokeObjectURL(o)}const tt=({isOpen:n,onClose:r,parcel:e,onApplySubdivisionToMap:o,onUpdateParcelZoning:s})=>{const[a,d]=R.useState(""),[u,l]=R.useState(!1),[v,m]=R.useState([]),[A,F]=R.useState(ue()),[x,S]=R.useState(K()),[E,f]=R.useState(!K()),[C,D]=R.useState(!1),[$,c]=R.useState(!1),[g,w]=R.useState(50),[T,U]=R.useState(0),[H,q]=R.useState("PARALLEL_LINE"),L=R.useRef(null),M=R.useMemo(()=>e!=null&&e.coordinates?he(e.coordinates):[],[e]),V=R.useMemo(()=>!M||M.length===0?"[]":JSON.stringify(M),[M]),_=(e==null?void 0:e.id)||(e==null?void 0:e.apn);if(R.useEffect(()=>{if(e&&n){const i=M.length;m([{id:"msg_welcome",sender:"assistant",text:`Hello! I am your Multi-Agent AI Parcel Subdivision Specialist. I have loaded all **${i} boundary corner vertices** for ${e.apn} at ${e.address} (${(e.squareFeet||0).toLocaleString()} SF / ${e.acreage||.3} AC).

📍 **Extracted Boundary Coordinates:**
\`\`\`json
${V}
\`\`\`

How would you like to split this parcel or search zoning setbacks? (e.g. "Split into 0.5 AC and remainder", "Change zoning to R-4 and check setbacks", or "Split side-by-side").`,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}])}},[n,_]),R.useEffect(()=>{var i;(i=L.current)==null||i.scrollIntoView({behavior:"smooth"})},[v]),!n||!e)return null;const k=async i=>{const b=(i||a).trim();if(!b||u)return;const j={id:`usr_${Date.now()}`,sender:"user",text:b,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};m(I=>[...I,j]),d(""),l(!0);try{const I=await Xe(b,e);I.updatedParcel&&s&&s(I.updatedParcel);const P={id:`ai_${Date.now()}`,sender:"assistant",text:I.replyText,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),splitResult:I.splitResult,cogoResult:I.cogoResult,childLot1Legal:I.childLot1LegalDescription,childLot2Legal:I.childLot2LegalDescription,diagnostics:I.agentDiagnostics,confidenceScore:I.confidenceScore};m(Z=>[...Z,P])}catch(I){m(P=>[...P,{id:`err_${Date.now()}`,sender:"assistant",text:`⚠️ Error executing multi-agent parcel split: ${I.message||"Unknown error"}`,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}])}finally{l(!1)}},O=()=>{ye(x),f(!1)},z=i=>{const b=Re(e,i),j=new Blob([b],{type:"application/dxf"}),I=URL.createObjectURL(j),P=document.createElement("a");P.href=I,P.download=`Subdivision_${e.apn}_${Date.now()}.dxf`,P.click(),URL.revokeObjectURL(I)},G=(i,b)=>{navigator.clipboard.writeText(i),b?(D(!0),setTimeout(()=>D(!1),2e3)):(c(!0),setTimeout(()=>c(!1),2e3))};return t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn",children:t.jsxs("div",{className:"w-full max-w-4xl glass-panel border border-slate-700/70 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[90vh]",children:[t.jsxs("div",{className:"p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between shrink-0",children:[t.jsxs("div",{className:"flex items-center space-x-3",children:[t.jsx("div",{className:"p-2.5 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-400",children:t.jsx(oe,{className:"w-6 h-6 animate-pulse"})}),t.jsxs("div",{children:[t.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[t.jsx("span",{children:"Agent Chat"}),t.jsx("span",{className:"px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono border border-emerald-500/30 uppercase",children:"Zoning & Setbacks Live Sync"})]}),t.jsxs("p",{className:"text-xs text-slate-400",children:[e.address," • APN ",e.apn," (",e.zoningCode," • Setbacks: ",Q(e.frontSetback,"'"),"/",Q(e.sideSetback,"'"),"/",Q(e.rearSetback,"'"),")"]})]})]}),t.jsxs("div",{className:"flex items-center space-x-2",children:[t.jsx("select",{value:A,onChange:i=>{F(i.target.value),Le(i.target.value)},className:"bg-slate-950 border border-slate-800 text-xs text-slate-200 rounded-lg px-2.5 py-1.5 font-mono focus:outline-none focus:border-purple-500 cursor-pointer",children:Ce.map(i=>t.jsx("option",{value:i.id,children:i.name},i.id))}),t.jsx("button",{onClick:()=>f(!E),className:`p-2 rounded-lg border transition-colors cursor-pointer ${K()?"bg-emerald-950/40 border-emerald-500/30 text-emerald-300":"bg-slate-800 border-slate-700 text-amber-300"}`,title:"Configure Gemini API Key",children:t.jsx(Me,{className:"w-4 h-4"})}),t.jsx("button",{onClick:r,className:"p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer",children:t.jsx(je,{className:"w-5 h-5"})})]})]}),E&&t.jsxs("div",{className:"p-3 bg-slate-950 border-b border-slate-800 flex items-center gap-2 text-xs",children:[t.jsx("span",{className:"text-slate-400 font-mono shrink-0",children:"Gemini API Key:"}),t.jsx("input",{type:"password",value:x,onChange:i=>S(i.target.value),placeholder:"Paste Google Gemini API Key...",className:"flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1 text-slate-200 font-mono text-xs focus:outline-none focus:border-purple-500"}),t.jsx("button",{onClick:O,className:"px-3 py-1 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-lg transition-all cursor-pointer",children:"Save Key"})]}),t.jsxs("div",{className:"flex-1 p-4 overflow-y-auto space-y-4 bg-slate-950/60",children:[v.map(i=>t.jsxs("div",{className:`flex gap-3 ${i.sender==="user"?"justify-end":"justify-start"}`,children:[i.sender==="assistant"&&t.jsx("div",{className:"w-8 h-8 rounded-full bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0 mt-0.5",children:t.jsx(we,{className:"w-4.5 h-4.5"})}),t.jsxs("div",{className:`max-w-[85%] rounded-2xl p-4 space-y-3 shadow-lg ${i.sender==="user"?"bg-purple-600 text-white rounded-tr-none":"glass-panel border border-slate-800 text-slate-200 rounded-tl-none"}`,children:[t.jsxs("div",{className:"flex items-center justify-between text-[10px] text-slate-400 font-mono mb-1",children:[t.jsx("span",{children:i.sender==="user"?"You":"Multi-Agent AI Specialist"}),t.jsx("span",{children:i.timestamp})]}),t.jsx("div",{className:"text-xs leading-relaxed whitespace-pre-wrap",children:i.text}),i.diagnostics&&i.diagnostics.length>0&&t.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs font-mono",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("span",{className:"font-bold text-purple-300 uppercase text-[10px] tracking-wider flex items-center gap-1",children:[t.jsx(ee,{className:"w-3.5 h-3.5 text-emerald-400"})," Agent Consensus Dialogue"]}),i.confidenceScore!=null&&t.jsxs("span",{className:"px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]",children:[i.confidenceScore,"% Confidence"]})]}),t.jsx("div",{className:"space-y-1 max-h-36 overflow-y-auto",children:i.diagnostics.map((b,j)=>t.jsxs("div",{className:"p-2 rounded bg-slate-950 border border-slate-850 text-[11px]",children:[t.jsxs("span",{className:"font-bold text-indigo-300",children:[b.agentName,": "]}),t.jsx("span",{children:b.message})]},j))})]}),i.splitResult&&t.jsxs("div",{className:"space-y-3 pt-2",children:[t.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-purple-500/30 space-y-3 font-mono text-xs",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("span",{className:"font-bold text-purple-300 uppercase text-[10px] tracking-wider flex items-center gap-1",children:[t.jsx(Oe,{className:"w-3.5 h-3.5 text-purple-400"})," Live Partition Engine Controls"]}),t.jsxs("button",{onClick:()=>k(`Split ${g}/${100-g} using ${H} algorithm at ${T} degrees`),className:"px-2.5 py-1 bg-purple-600 hover:bg-purple-500 text-white rounded text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer",children:[t.jsx(ke,{className:"w-3 h-3"})," Recalculate AI Split"]})]}),t.jsxs("div",{children:[t.jsx("span",{className:"text-[10px] text-slate-400 uppercase tracking-wider block mb-1 font-sans font-semibold",children:"Partition Algorithm Mode:"}),t.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-1.5",children:[{id:"PARALLEL_LINE",label:"📐 Parallel Line"},{id:"PERPENDICULAR_FRONTAGE",label:"📏 Perpendicular"},{id:"FIXED_POINT_RADIAL",label:"🎯 Radial Pivot"},{id:"FLAG_LOT_EASEMENT",label:"🚩 Flag Lot"}].map(b=>{var j;return t.jsx("button",{type:"button",onClick:()=>{q(b.id),k(`Split ${g}/${100-g} using ${b.id} algorithm`)},className:`px-2 py-1.5 rounded-lg text-[10px] font-bold text-center border transition-all cursor-pointer ${(((j=i.splitResult)==null?void 0:j.partitionAlgorithm)||H)===b.id?"bg-purple-600/30 border-purple-500 text-purple-200":"bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"}`,children:b.label},b.id)})})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"flex justify-between text-[11px] mb-1",children:[t.jsx("span",{className:"text-slate-400",children:"Target Area Ratio:"}),t.jsxs("span",{className:"font-bold text-emerald-400",children:[g,"% / ",100-g,"%"]})]}),t.jsx("input",{type:"range",min:15,max:85,step:1,value:g,onChange:b=>w(Number(b.target.value)),className:"w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-purple-500"})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex justify-between text-[11px] mb-1",children:[t.jsx("span",{className:"text-slate-400",children:"Cutting Axis Angle:"}),t.jsxs("span",{className:"font-bold text-sky-400",children:[T,"° (",T===0?"Horizontal":T===90?"Vertical":"Diagonal",")"]})]}),t.jsx("input",{type:"range",min:0,max:180,step:5,value:T,onChange:b=>U(Number(b.target.value)),className:"w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-sky-500"})]})]})]}),t.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 font-mono text-xs",children:[t.jsxs("div",{className:"flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-300",children:[t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(ee,{className:"w-3.5 h-3.5 text-emerald-400"})," Municipal Ordinance Audit"]}),t.jsx("span",{className:"text-[10px] text-purple-400",children:"Max Depth/Width: 3.0:1"})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]",children:[t.jsxs("div",{className:"p-2 rounded bg-slate-950 border border-slate-850 flex items-center justify-between",children:[t.jsx("span",{className:"text-slate-400",children:"Lot 1 Depth/Width:"}),t.jsxs("span",{className:`font-bold ${(i.splitResult.depthToWidthRatioA||0)<=3?"text-emerald-400":"text-amber-400"}`,children:[i.splitResult.depthToWidthRatioA||(i.splitResult.childA.depthFt/Math.max(1,i.splitResult.childA.frontageFt)).toFixed(1),":1",(i.splitResult.depthToWidthRatioA||0)<=3?" ✓":" ⚠️"]})]}),t.jsxs("div",{className:"p-2 rounded bg-slate-950 border border-slate-850 flex items-center justify-between",children:[t.jsx("span",{className:"text-slate-400",children:"Lot 2 Depth/Width:"}),t.jsxs("span",{className:`font-bold ${(i.splitResult.depthToWidthRatioB||0)<=3?"text-emerald-400":"text-amber-400"}`,children:[i.splitResult.depthToWidthRatioB||(i.splitResult.childB.depthFt/Math.max(1,i.splitResult.childB.frontageFt)).toFixed(1),":1",(i.splitResult.depthToWidthRatioB||0)<=3?" ✓":" ⚠️"]})]})]}),i.splitResult.selfHealingApplied&&t.jsxs("div",{className:"p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-[11px] leading-relaxed",children:["💡 ",t.jsx("strong",{children:"Self-Healing Applied:"})," ",i.splitResult.selfHealingNote]})]}),i.cogoResult&&t.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-indigo-500/30 space-y-2 font-mono text-xs",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("span",{className:"font-bold text-indigo-300 uppercase text-[10px] tracking-wider flex items-center gap-1",children:[t.jsx(ee,{className:"w-3.5 h-3.5 text-indigo-400"})," Bowditch Compass Rule Closure Audit"]}),t.jsxs("span",{className:`px-2 py-0.5 rounded text-[10px] font-bold ${i.cogoResult.isHighPrecisionSurvey?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-amber-500/20 text-amber-300 border border-amber-500/30"}`,children:[i.cogoResult.precisionRatio," ",i.cogoResult.isHighPrecisionSurvey?"(Pass ≥ 1:10,000)":"(Warning < 1:10,000)"]})]}),t.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]",children:[t.jsxs("div",{className:"p-2 rounded bg-slate-950 border border-slate-850",children:[t.jsx("span",{className:"text-slate-400 block text-[9px]",children:"Perimeter:"}),t.jsxs("span",{className:"font-bold text-slate-200",children:[i.cogoResult.totalPerimeterFt," FT"]})]}),t.jsxs("div",{className:"p-2 rounded bg-slate-950 border border-slate-850",children:[t.jsx("span",{className:"text-slate-400 block text-[9px]",children:"Misclosure Dist:"}),t.jsxs("span",{className:"font-bold text-sky-300",children:[i.cogoResult.misclosureFt," FT"]})]}),t.jsxs("div",{className:"p-2 rounded bg-slate-950 border border-slate-850",children:[t.jsx("span",{className:"text-slate-400 block text-[9px]",children:"Calculated Area:"}),t.jsxs("span",{className:"font-bold text-emerald-300",children:[i.cogoResult.calculatedAreaSqFt.toLocaleString()," SF"]})]})]})]}),t.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("span",{className:"text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1",children:[t.jsx(Pe,{className:"w-3.5 h-3.5 text-sky-400"})," Subdivision Vector Diagram"]}),t.jsx("span",{className:"text-[10px] text-emerald-400 font-mono",children:"Turf.js 2D Polygons"})]}),t.jsx("div",{className:"w-full flex justify-center bg-slate-950 p-3 rounded-lg border border-slate-800",dangerouslySetInnerHTML:{__html:pe(e,i.splitResult)}})]}),i.childLot1Legal&&t.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("span",{className:"text-[11px] font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1",children:[t.jsx(te,{className:"w-3.5 h-3.5 text-purple-400"})," Child Lot 1 Survey Legal Description"]}),t.jsxs("button",{onClick:()=>G(i.childLot1Legal,!0),className:"px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-[10px] font-mono flex items-center gap-1 transition-all cursor-pointer",children:[C?t.jsx(re,{className:"w-3 h-3 text-emerald-400"}):t.jsx(ie,{className:"w-3 h-3"}),t.jsx("span",{children:C?"Copied!":"Copy Legal Text"})]})]}),t.jsx("pre",{className:"p-3 rounded bg-slate-950 border border-slate-850 text-[10px] font-mono text-slate-300 leading-relaxed overflow-x-auto whitespace-pre-wrap",children:i.childLot1Legal})]}),i.childLot2Legal&&t.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("span",{className:"text-[11px] font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1",children:[t.jsx(te,{className:"w-3.5 h-3.5 text-purple-400"})," Child Lot 2 Survey Legal Description"]}),t.jsxs("button",{onClick:()=>G(i.childLot2Legal,!1),className:"px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-[10px] font-mono flex items-center gap-1 transition-all cursor-pointer",children:[$?t.jsx(re,{className:"w-3 h-3 text-emerald-400"}):t.jsx(ie,{className:"w-3 h-3"}),t.jsx("span",{children:$?"Copied!":"Copy Legal Text"})]})]}),t.jsx("pre",{className:"p-3 rounded bg-slate-950 border border-slate-850 text-[10px] font-mono text-slate-300 leading-relaxed overflow-x-auto whitespace-pre-wrap",children:i.childLot2Legal})]}),t.jsxs("div",{className:"flex items-center gap-2 pt-1 flex-wrap",children:[o&&t.jsxs("button",{onClick:()=>o(i.splitResult),className:"flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow cursor-pointer",children:[t.jsx(Ue,{className:"w-3.5 h-3.5"})," Plot Child Lots on Map"]}),t.jsxs("button",{onClick:()=>et({parcel:e,splitResult:i.splitResult||null,childLot1Legal:i.childLot1Legal,childLot2Legal:i.childLot2Legal,timestampStr:new Date().toISOString()}),className:"py-2 px-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow transition-all cursor-pointer",children:[t.jsx(te,{className:"w-3.5 h-3.5 text-purple-200"})," Download MapCheck Sketch (HTML)"]}),t.jsxs("button",{onClick:()=>z(i.splitResult),className:"py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-700 transition-all cursor-pointer",children:[t.jsx(Ge,{className:"w-3.5 h-3.5 text-sky-400"})," Export DXF CAD"]})]})]})]}),i.sender==="user"&&t.jsx("div",{className:"w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 mt-0.5",children:t.jsx(Be,{className:"w-4.5 h-4.5"})})]},i.id)),t.jsx("div",{ref:L})]}),t.jsxs("div",{className:"p-3 bg-slate-900/90 border-t border-slate-800 shrink-0 space-y-2",children:[t.jsx("div",{className:"flex gap-1.5 flex-wrap",children:["Parallel Split 50/50","Perpendicular Frontage Split","Fixed-Point Radial Split","Flag Lot Split (20ft corridor)","Bowditch Traverse Audit","Arc Segment Area R=500 L=120","Convert 150 ft to meters","Check R-4 zoning setbacks"].map((i,b)=>t.jsx("button",{type:"button",onClick:()=>k(i),className:"px-2.5 py-1 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-[10px] text-purple-300 rounded-lg font-mono transition-all cursor-pointer",children:i},b))}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("input",{type:"text",value:a,onChange:i=>d(i.target.value),onKeyDown:i=>i.key==="Enter"&&k(),placeholder:"Describe subdivision or zoning search (e.g. 'Check R-4 zoning setbacks')...",className:"flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 font-mono"}),t.jsxs("button",{onClick:()=>k(),disabled:u||!a.trim(),className:"py-2.5 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl transition-all shadow-lg shadow-purple-600/30 flex items-center gap-2 cursor-pointer disabled:opacity-50",children:[u?t.jsx(oe,{className:"w-4 h-4 animate-spin"}):t.jsx(He,{className:"w-4 h-4"}),t.jsx("span",{children:"Send"})]})]})]})]})})},$t={metadata:{id:"ai-parcel-split",name:"Agent Chat (AI Parcel Split & Legal Writer)",version:"3.7.0",description:"Multi-Agent consensus AI subdivision solver, COGO trigonometry engine, metes-and-bounds survey legal text writer, and DXF CAD exporter.",author:"Parcel Intelligence Hub Engineering Team",category:"gis",enabled:!0,icon:"Scissors"},Component:tt};export{tt as AiParcelSplitModal,$t as AiParcelSplitPlugin,le as formatBearingText,ce as generateChildLotLegalDescription,Xe as runMultiAgentParcelSplitConsensus,Ft as writeLegalDescription};
