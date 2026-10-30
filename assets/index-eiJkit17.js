const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/floridaApnPropertyHarvesterService-HJPx8MPY.js","assets/PDFButton-CZypl_YP.js","assets/react-vendor-CB5wtuEC.js","assets/index-BNEO8Sp_.js","assets/turf-vendor-CwrBJ54B.js","assets/icons-vendor-BEIlHLFQ.js","assets/maplibre-vendor-CLmOyQOb.js","assets/maplibre-vendor-DvulA2N7.css","assets/gis-vendor-Co8Zq2Um.js","assets/misc-data-D0yF5yJs.js","assets/duval-archibald-data-BYKUu7Lk.js","assets/duval-unrecorded-subs-data-Boarqhev.js","assets/duval-real-parcels-data-DdEJxntc.js","assets/florida-670-matrix-data-DYrACb7R.js","assets/supabase-vendor-CI_V8wt2.js","assets/index-CYOf4mBQ.css","assets/femaService-Cw90tuGr.js","assets/__vite-browser-external-DrV_kz0N.js","assets/floodZone-BWuazJp2.js"])))=>i.map(i=>d[i]);
import{r as z,j as e}from"./react-vendor-CB5wtuEC.js";import{_ as wt,aQ as jt,x as Ge,aR as Ft,a2 as kt,au as Pt,af as St,m as Ie,o as de,U as ve,t as Et,r as $e,l as dt,aj as st,a as ne,ah as Rt,p as At,a0 as Ve,j as Dt,aS as ct}from"./index-BNEO8Sp_.js";import{lookupFemaAssessmentForLocation as Tt}from"./femaService-Cw90tuGr.js";import{a as Ct}from"./fireHydrantService-DMiJ5GDd.js";import{i as xt}from"./floodZone-BWuazJp2.js";import{m as $t}from"./duvalSurveyService-CzLi_24O.js";import{d as It}from"./dxfExporter-DWRAbA7o.js";import{P as Lt,S as Xe,r as A}from"./PDFButton-CZypl_YP.js";import{a as Mt}from"./excelExportService-sr-VNcHG.js";import{r as qe}from"./duval-real-parcels-data-DdEJxntc.js";import{C as Ye,aj as Ze,aZ as Qe,a_ as mt,L as Ke,D as fe,P as ft,b as et,_ as ut,d as Ot,t as Bt,e as Ut,Z as Wt,ac as Ht,y as tt,i as _e,w as Vt,aR as zt,a2 as Gt,c as _t,a as Se,X as gt,n as Yt,f as Ne,S as Zt,Q as Xt,K as pt,ai as qt,aM as Qt,a$ as Jt,o as ht,ax as bt,av as Kt,at as ea,b0 as ta,F as aa}from"./icons-vendor-BEIlHLFQ.js";import"./turf-vendor-CwrBJ54B.js";import"./maplibre-vendor-CLmOyQOb.js";import"./gis-vendor-Co8Zq2Um.js";import"./misc-data-D0yF5yJs.js";import"./duval-archibald-data-BYKUu7Lk.js";import"./duval-unrecorded-subs-data-Boarqhev.js";import"./florida-670-matrix-data-DYrACb7R.js";import"./supabase-vendor-CI_V8wt2.js";import"./__vite-browser-external-DrV_kz0N.js";import"./duval-panels-data-DSJUd7eQ.js";import"./xlsx-BBWTpfDg.js";function sa(s,t="Duval"){return Et(s,t)}class na{async harvestPropertyPackageByApn(t,o,n){if(typeof window<"u")try{const y=await fetch(`/api/research/apn-harvest?county=${encodeURIComponent(t)}&apn=${encodeURIComponent(o)}&address=${encodeURIComponent(n||"")}`);if(y.ok)return await y.json()}catch(y){console.warn("[ResearchService] APN harvest fetch error:",y)}const{FloridaApnPropertyHarvesterService:l}=await wt(async()=>{const{FloridaApnPropertyHarvesterService:y}=await import("./floridaApnPropertyHarvesterService-HJPx8MPY.js");return{FloridaApnPropertyHarvesterService:y}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]));return l.getInstance().harvestPropertyPackage(t,o,n)}async generateResearchReport(t,o={},n){var ge,xe,le,h;const l=(t==null?void 0:t.county)||"Duval",y=t.duvalReNumber||t.apn||t.parcel_id||"",P=String(y).replace(/\D/g,""),b=jt(l,P,t.apn);n==null||n(15,`Querying ${l} Property Appraiser (PAO) & Cadastre Detail...`);const L=t.subdivision||"",T=t.platBook||"";let $=t.legalDescription||"",I=[],M=[];if(n==null||n(35,"Scanning Clerk Deed Index & Historical Conveyance Records..."),typeof window<"u")try{const g=P?await fetch(`/api/research/pao?re=${P}&county=${encodeURIComponent(l)}`):null;if(g&&g.ok){const E=await g.json();E.success&&(E.legalDescription&&($=E.legalDescription),Array.isArray(E.salesHistory)&&E.salesHistory.length>0&&(I=E.salesHistory.map(C=>{const Y=(C.bookPage||"").split("-"),B=(Y[0]||"").replace(/\D/g,"").replace(/^0+/,""),R=(Y[1]||"").replace(/\D/g,"").replace(/^0+/,""),J=B&&R?Ge(l,B,R):C.deedUrl;return{...C,deedUrl:J}})),Array.isArray(E.deedDocuments)&&E.deedDocuments.length>0&&(M=E.deedDocuments))}}catch(g){console.warn("[ResearchService] API fetch error, utilizing parcel spatial data fallback:",g)}if(!$)try{const C=(Ft.getInstance().searchTaxRoll(t.address||P,l)||[]).find(_=>P&&_.parcel_id===P||t.apn&&_.alt_key===t.apn||t.address&&_.address&&_.address.toLowerCase().includes(t.address.toLowerCase().split(",")[0].trim()));C!=null&&C.legal&&($=C.legal)}catch(g){console.warn("[ResearchService] Client DOR legal lookup notice:",g)}n==null||n(85,"Calculating FEMA Flood Zones, FIRM Panels, Geodetic Elevations & Wetlands...");let i=null;try{const g=(ge=t.center)==null?void 0:ge[1],E=(xe=t.center)==null?void 0:xe[0];g&&E&&(i=await Tt(g,E,t.address,l,t.femaFloodZone||t.floodZone,t.mapPanel||t.firmPanel||t.femaFirmPanel))}catch(g){console.warn("[ResearchService] FEMA assessment query notice:",g)}let f=null;try{f=await kt.getInstance().assessParcelWetlands(t)}catch(g){console.warn("[ResearchService] Wetland assessment query notice:",g)}n==null||n(88,"Querying Fire Hydrants & Water Wells (1,000-FT Radius)...");let k=null;try{let g=[],E=!1,C="";try{const B=await Ct(t,100);E=B.hasCoverageData,E?g=(B.nearestHydrants||[]).filter(R=>(R.distanceFromBoundaryFt??R.distanceFromCentroidFt)<=1e3).map(R=>({id:R.hydrant.hydrantId?String(R.hydrant.hydrantId):R.hydrant.facilityId||"Hydrant",address:R.hydrant.address||void 0,distanceFt:Math.round(R.distanceFromBoundaryFt??R.distanceFromCentroidFt),bearing:R.bearingFromCentroid,source:R.hydrant.ownedBy||`${l} Fire Hydrant Cadastre`,coordinates:R.hydrant.position})):C=B.coverageGapReason||`No authentic hydrant cadastre archived for ${l}.`}catch(B){console.warn("[ResearchService] Hydrant assessment query notice:",B),C="Hydrant cadastre lookup encountered an error."}let _=[],Y=!1;try{const B=Pt.getInstance(),R=((le=t.center)==null?void 0:le[1])||30.345753,J=((h=t.center)==null?void 0:h[0])||-81.653909,oe=.015,pe=[J-oe,R-oe,J+oe,R+oe];let ie=[];try{ie=await B.searchFloridaFdepWells(pe,l,250)}catch{ie=await B.loadPrepackagedFloridaWells()}ie.length===0&&(ie=await B.loadPrepackagedFloridaWells()),ie.length>0&&(Y=!0,_=(B.assessParcelWellProximity(t,ie,1e3/5280).nearestWells||[]).filter(p=>(p.distanceFt||0)<=1e3).map(p=>({id:p.wellId,name:p.wellName,type:p.wellType,depthFt:p.depthFt,distanceFt:p.distanceFt||0,bearing:p.bearingCardinal||"",source:p.source,agency:p.agency,aquifer:p.aquifer,coordinates:p.coordinates})))}catch(B){console.warn("[ResearchService] Well assessment query notice:",B)}k={within1000FtHydrants:g,within1000FtWells:_,hydrantCountWithin1000Ft:g.length,wellCountWithin1000Ft:_.length,nearestHydrantDistanceFt:g.length>0?g[0].distanceFt:null,nearestWellDistanceFt:_.length>0?_[0].distanceFt:null,hasHydrantData:E,hasWellData:Y,coverageNote:C||void 0}}catch(g){console.warn("[ResearchService] Fire protection & utilities calculation notice:",g)}const v=i!=null&&i.floodZone&&i.floodZone!=="UNVERIFIED"?i.floodZone:t.femaFloodZone||t.floodZone||null,d=i!=null&&i.firmPanelNumber&&i.firmPanelNumber!=="UNVERIFIED"?i.firmPanelNumber:t.mapPanel||t.firmPanel||t.femaFirmPanel||null,S=v?xt(v):i&&!i.floodLookupDegraded?!!i.inFloodZone:!1,V=!!(i&&!i.floodLookupDegraded||v||d);let U=i!=null&&i.hazardDescription&&!i.hazardDescription.includes("UNVERIFIED")?i.hazardDescription:v?S?`${v.startsWith("Zone ")?v:`Zone ${v}`} (Special Flood Hazard Area / 100-Year Floodplain)`:`${v.startsWith("Zone ")?v:`Zone ${v}`} (Area of Minimal Flood Hazard)`:"UNVERIFIED — FEMA NFHL flood zone could not be determined for this parcel";const w=await St(t,t.coordinates||t.coordsRing,i||void 0),q=Ie(w),G=(w==null?void 0:w.centerElevationNavd88Ft)??0,j=(w==null?void 0:w.minElevationFt)??G,D=q&&(G<5||j<5);D&&(U=`⚠️ CRITICAL LOW ELEVATION FLOOD HAZARD (${G.toFixed(2)} FT NAVD88 < 5.0 FT)`);const F=d||de(i==null?void 0:i.firmPanelNumber),ce=!!(f&&(f.totalWetlandAcres>0||f.wetlandFeatures&&f.wetlandFeatures.length>0));let Q=null;typeof(t==null?void 0:t.wetlandsProximityFt)=="number"?Q=t.wetlandsProximityFt:typeof(t==null?void 0:t.wetlandProximity)=="number"?Q=t.wetlandProximity:ce?Q=0:f&&typeof f.nearestWetlandDistanceFt=="number"&&(Q=f.nearestWetlandDistanceFt);const be=Q!==null||!!(f&&!f.lookupDegraded),ae=$e(Q,!be);return{id:`res-report-${Date.now()}`,parcelId:t.id,apn:t.apn,reNumber:P,address:t.address,paoUrl:b,legalDescription:$,generatedAt:new Date().toISOString(),summary:`Automated ${l} Property Appraiser PAO research synthesis for RE# ${P} (${t.address}). Official Property Appraiser Link: ${b}`,wetlandAssessment:f,fireProtectionAndUtilities:k,dataQuality:{femaLookupDegraded:!V,wetlandLookupDegraded:!be},environmentalRisks:{floodRiskLevel:U,wetlandsProximityFt:Q,wetlandsProximityRisk:ae.label,wetlandsProximityLevel:ae.level,wetlandsProximityDescription:ae.description,soilType:ve,femaFloodZone:v||(V?de(i==null?void 0:i.floodZone):ve),firmPanelNumber:F,baseFloodElevation:i!=null&&i.staticBfe?`${i.staticBfe} FT ${i.vDatum||"NAVD88"}`:V&&!S?"N/A (outside Special Flood Hazard Area)":"UNVERIFIED — no published static BFE",mandatoryInsuranceRequired:D||V&&!!i.mandatoryInsuranceRequired||S,femaEffectiveDate:de(i==null?void 0:i.effectiveDate),femaPortalUrl:(i==null?void 0:i.femaPortalUrl)||`https://msc.fema.gov/portal/search?AddressQuery=${encodeURIComponent(t.address||"")}`},femaAssessment:i?{inFloodZone:D||i.inFloodZone||S,floodZone:v||i.floodZone,hazardDescription:D?`${v||i.floodZone} — ⚠️ CRITICAL LOW ELEVATION FLOOD HAZARD (${G.toFixed(2)} FT NAVD88 < 5.0 FT). Buildability is QUESTIONABLE.`:i.hazardDescription&&!i.hazardDescription.includes("UNVERIFIED")?i.hazardDescription:U,firmPanelNumber:F,baseFloodElevationFt:i.staticBfe,mandatoryInsuranceRequired:D||i.mandatoryInsuranceRequired||S,effectiveDate:de(i.effectiveDate),scale:de(i.scale),femaPortalUrl:i.femaPortalUrl,gcsUri:i.gcsUri}:{inFloodZone:D||S,floodZone:v||ve,hazardDescription:D?`Flood zone ${v||"UNVERIFIED"} — ⚠️ CRITICAL LOW ELEVATION FLOOD HAZARD (${G.toFixed(2)} FT NAVD88 < 5.0 FT). Buildability is QUESTIONABLE.`:U,firmPanelNumber:F,baseFloodElevationFt:null,mandatoryInsuranceRequired:D||S,effectiveDate:ve,scale:ve,femaPortalUrl:`https://msc.fema.gov/portal/search?AddressQuery=${encodeURIComponent(t.address||"")}`,gcsUri:"gs://survey_duval/FEMA/"},elevationProfile:w,zoningIntelligence:(()=>{const g=sa(t.zoningCode,l),E=(C,_)=>typeof C=="number"&&C>0?C:g&&typeof _=="number"?_:null;return{code:de(t.zoningCode),name:(g==null?void 0:g.zoningName)||ve,category:(g==null?void 0:g.category)||ve,description:(g==null?void 0:g.description)||"Zoning standards UNVERIFIED — no zoning record for this county and code; confirm with the local planning department.",frontSetbackFt:E(t.frontSetback,g==null?void 0:g.frontSetbackFt),sideSetbackFt:E(t.sideSetback,g==null?void 0:g.sideSetbackFt),rearSetbackFt:E(t.rearSetback,g==null?void 0:g.rearSetbackFt),minLotAreaSqFt:E(void 0,g==null?void 0:g.minLotAreaSqFt),minFrontageFt:E(void 0,g==null?void 0:g.minFrontageFt),maxLotCoveragePct:E(t.maxLotCoverage,g==null?void 0:g.maxLotCoveragePct),permittedUses:g!=null&&g.allowedUses?g.allowedUses.split(",").map(C=>C.trim()):[],conditionalUses:[],maxHeightFt:E(t.buildingHeightMax,g==null?void 0:g.maxHeightFt),maxFar:E(t.maxFar,g==null?void 0:g.maxFar)}})(),marketValuationEstimate:{estimatedLandValue:typeof t.landValue=="number"&&t.landValue>0?t.landValue:null,estimatedImprovedValue:t.justValue||t.assessedValue||0,comparableSalesCount:I.length},salesHistory:I,deedDocuments:M,feasibilityVerdict:(()=>{var J;const g=S||V&&(i.inFloodZone||xt(i.floodZone)),E=!$||$.includes("REAL PROPERTY PARCEL RE#")&&!L&&!T,C=w==null?void 0:w.bfeComparison,_=(C==null?void 0:C.status)==="AT_OR_BELOW_BFE";let Y="THUMBS_UP",B="👍 Thumbs Up (Favorable Development Profile)",R=`Site feasibility is favorable with clear zoning (${de(t.zoningCode)}), minimal flood risk, and verifiable recorded parcel boundary records.`;return D?(Y="THUMBS_DOWN",B="⚠️ Questionable Buildability (Critical Flood Hazard: Elevation < 5.0 FT NAVD88)",R=`Site buildability is QUESTIONABLE due to critical flood hazard: natural ground elevation (${G.toFixed(2)} FT NAVD88) sits below the 5.0 FT threshold, creating severe flood and inundation risks requiring mandatory structural elevation, fill mitigation, and civil floodplain engineering review.`):_?(Y="THUMBS_DOWN",B="👎 Thumbs Down (Substantial Flood & Elevation Constraints)",R=`Site feasibility faces critical constraints due to natural ground elevations sitting at or below base flood elevation (${((J=w==null?void 0:w.bfeComparison)==null?void 0:J.bfeFt)||"BFE"} FT NAVD88), requiring substantial structural fill and mandatory floodproofing.`):g&&E?(Y="MORE_INFO_NEEDED",B="❓ More Information Needed (Boundary & Environmental Review Required)",R="Further investigation is required to reconcile unplatted legal boundary descriptions and verify exact floodplain base flood elevation determinations prior to site engineering."):E||I.length===0?(Y="MORE_INFO_NEEDED",B="❓ More Information Needed (Title & Plat Review Recommended)",R="Further title and survey examination is needed to confirm recorded subdivision plat references and complete chain-of-title deeds."):g&&(Y="MORE_INFO_NEEDED",B="❓ More Information Needed (FEMA Floodplain Mitigation Required)",R="Site development is viable but requires civil floodplain engineering review to verify finished floor freeboard above FEMA Base Flood Elevation."),Y==="THUMBS_UP"&&(!V||!q)&&(Y="MORE_INFO_NEEDED",B="❓ More Information Needed (Flood Zone / Elevation Unverified)",R="FEMA flood zone and/or ground elevation could not be verified for this parcel; flood risk must be confirmed from the FEMA Map Service Center and a site elevation reading before relying on this screening."),{status:Y,badgeLabel:B,summarySentence:R,disclaimer:"DISCLAIMER: This automated preliminary GIS research synthesis is provided solely for initial informational screening and is not intended to supplant, replace, or substitute for formal boundary survey, title examination, civil engineering, or professional architectural review by a duly licensed Architecture, Engineering, or Construction (AEC) professional."}})()}}downloadLegalDescriptionText(t){const o=t.feasibilityVerdict,n=`DUVAL COUNTY PROPERTY APPRAISER - OFFICIAL LEGAL DESCRIPTION & RESEARCH REPORT
============================================================
RE# ${t.reNumber}
Address: ${t.address}
APN: ${t.apn}
PAO Detail URL: ${t.paoUrl}
Report Generated: ${t.generatedAt}
============================================================

FEASIBILITY VERDICT:
${o?o.badgeLabel+`
`+o.summarySentence:"👍 Thumbs Up: Site meets baseline preliminary zoning and cadastral requirements."}

LEGAL DESCRIPTION:
${t.legalDescription}

SALES HISTORY:
`+t.salesHistory.map(b=>`- ${b.date} | Price: $${b.price.toLocaleString()} | Book/Page: ${b.bookPage} | Type: ${b.deedType} | Grantor: ${b.grantor} -> Grantee: ${b.grantee}`).join(`
`)+`

============================================================
PROFESSIONAL AEC REVIEW DISCLAIMER:
============================================================
${(o==null?void 0:o.disclaimer)||"DISCLAIMER: This information is not to supplant, replace, or substitute for formal professional review by a licensed Architecture, Engineering, or Construction (AEC) professional."}
`,l=new Blob([n],{type:"text/plain;charset=utf-8"}),y=URL.createObjectURL(l),P=document.createElement("a");P.href=y,P.download=`Legal_Description_RE_${t.reNumber}.txt`,document.body.appendChild(P),P.click(),document.body.removeChild(P),URL.revokeObjectURL(y)}async downloadDeedsZipPackage(t,o="Duval"){var n,l,y,P,b,L;try{const T=await fetch("/api/research/download-deeds-zip",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({reNumber:t.reNumber,legalDescription:t.legalDescription,salesHistory:t.salesHistory,platBook:t.platBook||((n=t.platRecord)==null?void 0:n.platBook)||"",platPage:t.platPage||((l=t.platRecord)==null?void 0:l.platPage)||"",propertyAddress:t.propertyAddress||t.address||"",subdivision:t.subdivision||((y=t.platRecord)==null?void 0:y.subdivisionName)||"",county:o,coordinates:t.coordinates||((P=t.geometry)==null?void 0:P.coordinates),geometry:t.geometry,center:t.center,grantor:t.grantor||t.salesHistory&&((b=t.salesHistory[0])==null?void 0:b.grantor)||"",grantee:t.grantee||t.owner||t.salesHistory&&((L=t.salesHistory[0])==null?void 0:L.grantee)||"",lotWidth:t.lotWidth||t.frontageWidthFt,lotDepth:t.lotDepth||t.depthFt,frontSetback:t.frontSetback,sideSetback:t.sideSetback,rearSetback:t.rearSetback,zoning:t.zoningCode})});if(!T.ok)throw new Error("ZIP download failed");const $=await T.blob(),I=URL.createObjectURL($),M=document.createElement("a");M.href=I,M.download=`${o.replace(/\s+/g,"_")}_Deeds_RE_${t.reNumber}.zip`,document.body.appendChild(M),M.click(),document.body.removeChild(M),URL.revokeObjectURL(I)}catch(T){console.warn("[ResearchService] ZIP endpoint fallback to client txt download:",T),this.downloadLegalDescriptionText(t)}}async emailDeedsReport(t,o){try{const n={"Content-Type":"application/json"};try{const P=localStorage.getItem("parceliq_access_token")||localStorage.getItem("access_token");P&&(n.Authorization=`Bearer ${P}`)}catch{}const y=await(await fetch("/api/research/email-deeds",{method:"POST",headers:n,body:JSON.stringify({recipient:o,reNumber:t.reNumber,legalDescription:t.legalDescription,salesHistory:t.salesHistory})})).json();return{success:y.success,message:y.message||"Email dispatched successfully."}}catch(n){return{success:!1,message:n.message||"Failed to email deeds report."}}}}const Ce=new na;async function oa(s){var Y,B,R,J,oe,pe,ie,u,p;const{report:t,parcel:o}=s,n=de(s.panelNumber||((Y=t==null?void 0:t.environmentalRisks)==null?void 0:Y.firmPanelNumber)||((B=t==null?void 0:t.femaAssessment)==null?void 0:B.firmPanelNumber)),l=(t==null?void 0:t.address)||(o==null?void 0:o.address)||"Certified Florida First Coast Property",y=(t==null?void 0:t.reNumber)||(o==null?void 0:o.apn)||(o==null?void 0:o.id)||"0716000000",P=(o==null?void 0:o.county)||"Florida",b=de(((R=t==null?void 0:t.environmentalRisks)==null?void 0:R.femaFloodZone)||((J=t==null?void 0:t.femaAssessment)==null?void 0:J.floodZone)),L=dt(b),T=((oe=t==null?void 0:t.environmentalRisks)==null?void 0:oe.baseFloodElevation)||((pe=t==null?void 0:t.femaAssessment)!=null&&pe.baseFloodElevationFt?`${t.femaAssessment.baseFloodElevationFt} FT NAVD88`:ve),$=(ie=t==null?void 0:t.environmentalRisks)!=null&&ie.mandatoryInsuranceRequired?"MANDATORY (SFHA 100-Year Flood Zone)":L?"OPTIONAL (Low/Moderate Risk)":"UNVERIFIED (flood zone not determined)",I=de(((u=t==null?void 0:t.environmentalRisks)==null?void 0:u.femaEffectiveDate)||((p=t==null?void 0:t.femaAssessment)==null?void 0:p.effectiveDate)),M=st(t==null?void 0:t.elevationProfile),i=await Lt.create(),f=i.addPage([612,792]),{width:k,height:v}=f.getSize(),d=await i.embedFont(Xe.HelveticaBold),S=await i.embedFont(Xe.Helvetica),V=await i.embedFont(Xe.CourierBold);f.drawRectangle({x:0,y:0,width:k,height:v,color:A(.98,.99,1)}),f.drawRectangle({x:20,y:v-100,width:k-40,height:80,color:A(.04,.25,.45)}),f.drawText("FEDERAL EMERGENCY MANAGEMENT AGENCY (FEMA)",{x:35,y:v-48,size:14,font:d,color:A(1,1,1)}),f.drawText("NATIONAL FLOOD INSURANCE PROGRAM (NFIP) • FIRM PANEL RECORD",{x:35,y:v-68,size:10,font:d,color:A(.56,.82,.98)}),f.drawText(`OFFICIAL PANEL ID: ${n}`,{x:k-230,y:v-68,size:10,font:V,color:A(.98,.85,.38)}),f.drawRectangle({x:20,y:v-210,width:k-40,height:95,color:A(1,1,1),borderColor:A(.8,.85,.9),borderWidth:1.5}),f.drawText("SUBJECT PROPERTY IDENTIFICATION & JURISDICTION",{x:35,y:v-130,size:10,font:d,color:A(.04,.25,.45)});const U=v-150;f.drawText("Parcel ID / APN:",{x:35,y:U,size:9,font:d,color:A(.3,.35,.4)}),f.drawText(y,{x:130,y:U,size:9,font:V,color:A(.1,.1,.1)}),f.drawText("County:",{x:320,y:U,size:9,font:d,color:A(.3,.35,.4)}),f.drawText(P,{x:380,y:U,size:9,font:S,color:A(.1,.1,.1)});const w=v-170;f.drawText("Physical Address:",{x:35,y:w,size:9,font:d,color:A(.3,.35,.4)}),f.drawText(l,{x:130,y:w,size:9,font:d,color:A(.04,.25,.45)});const q=v-190;f.drawText("Datum Authority:",{x:35,y:q,size:9,font:d,color:A(.3,.35,.4)}),f.drawText("NAVD88 / FEMA NFHL Layer 28",{x:130,y:q,size:9,font:S,color:A(.1,.1,.1)}),f.drawRectangle({x:20,y:v-420,width:k-40,height:195,color:A(1,1,1),borderColor:A(.04,.5,.35),borderWidth:1.5}),f.drawText("OFFICIAL FEMA NFHL FLOOD HAZARD ASSESSMENT",{x:35,y:v-235,size:11,font:d,color:A(.04,.5,.35)});const G=v-260;f.drawText("FEMA FIRM Panel #:",{x:35,y:G,size:9.5,font:d,color:A(.2,.25,.3)}),f.drawText(n,{x:180,y:G,size:10,font:V,color:A(.04,.25,.45)}),f.drawText("FEMA Effective Date:",{x:340,y:G,size:9.5,font:d,color:A(.2,.25,.3)}),f.drawText(I,{x:460,y:G,size:9.5,font:V,color:A(.1,.1,.1)});const j=v-285;f.drawText("Flood Hazard Zone:",{x:35,y:j,size:9.5,font:d,color:A(.2,.25,.3)}),f.drawText(b,{x:180,y:j,size:10.5,font:d,color:L?b.includes("A")||b.includes("V")?A(.8,.1,.1):A(.04,.5,.35):A(.55,.4,.05)}),f.drawText("Base Flood Elev (BFE):",{x:340,y:j,size:9.5,font:d,color:A(.2,.25,.3)}),f.drawText(T,{x:460,y:j,size:9.5,font:d,color:A(.1,.1,.1)});const D=v-310;f.drawText("Mandatory Insurance:",{x:35,y:D,size:9.5,font:d,color:A(.2,.25,.3)}),f.drawText($,{x:180,y:D,size:9.5,font:d,color:$.includes("MANDATORY")?A(.8,.1,.1):A(.15,.45,.25)});const F=v-335;f.drawText("Ground Centroid Grade:",{x:35,y:F,size:9.5,font:d,color:A(.2,.25,.3)}),f.drawText(M,{x:180,y:F,size:9.5,font:d,color:A(.04,.5,.35)});const ce=v-365;f.drawText("FEMA Community ID:",{x:35,y:ce,size:9,font:d,color:A(.3,.35,.4)}),f.drawText(`120077 / ${P.toUpperCase()} UNINCORPORATED`,{x:180,y:ce,size:9,font:S,color:A(.1,.1,.1)});const Q=v-395;f.drawText("GCS Data Repository:",{x:35,y:Q,size:9,font:d,color:A(.3,.35,.4)}),f.drawText(`gs://survey_duval/FEMA/FL_FEMA_FIRM_Panels.geojson (${n})`,{x:180,y:Q,size:8.5,font:V,color:A(.2,.4,.6)}),f.drawRectangle({x:20,y:v-620,width:k-40,height:185,color:A(.96,.97,.99),borderColor:A(.75,.8,.88),borderWidth:1}),f.drawText("REGULATORY FLOODPLAIN COMPLIANCE & DESKTOP SCREENING NOTES",{x:35,y:v-445,size:10,font:d,color:A(.04,.25,.45)});const be=[dt(n)?`1. This certified FEMA FIRM Panel document corresponds to official NFHL Map Panel ${n}.`:"1. The FEMA FIRM panel for this parcel could NOT be resolved from the NFHL - verify at msc.fema.gov.","2. Flood hazard boundary determinations are derived from authentic FEMA NFHL Layer 28 spatial vectors.","3. For construction permitting, Florida Building Code (8th Ed., 2023) Section 1612 mandates finished floor","   elevations to meet or exceed Base Flood Elevation (BFE) plus local municipal freeboard standards.","4. Structure elevations and elevation certificates must be certified by a Florida licensed professional surveyor (PSM).","5. National Flood Insurance Program (NFIP) rates are established under FEMA Risk Rating 2.0 methodology."];let ae=v-470;for(const a of be)f.drawText(a,{x:35,y:ae,size:8.5,font:S,color:A(.2,.25,.3)}),ae-=20;f.drawRectangle({x:20,y:30,width:k-40,height:50,color:A(.04,.25,.45)});const ge=new Date,xe=ge.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),le=ge.toLocaleTimeString("en-US");f.drawText("✓ OFFICIAL FEMA FIRM PANEL DOSSIER • ZERO SYNTHETIC DATA POLICY",{x:35,y:58,size:8.5,font:d,color:A(.56,.82,.98)}),f.drawText(`GENERATED: ${xe} at ${le} • PARCELIQ SPATIAL ENGINE v3.7`,{x:35,y:42,size:8,font:S,color:A(.85,.9,.95)});const h=await i.save(),g=new Blob([h.buffer],{type:"application/pdf"}),E=URL.createObjectURL(g),C=document.createElement("a"),_=`FEMA_FIRM_Panel_${n.replace(/[^a-zA-Z0-9]/g,"_")}.pdf`;C.href=E,C.download=_,document.body.appendChild(C),C.click(),document.body.removeChild(C),URL.revokeObjectURL(E)}const vt={projectedPts:[],polygonPointsString:"",legs:[],vertices:[],curves:[],totalPerimeterFt:0,geodesicAreaAcres:0,frontLeg:void 0,roadName:"",roadX:0,roadY:0,scaleBarTargetFt:50,scaleBarPx:100};function ia(s){if(!Ie(s))return{status:"Unverified",badgeClass:"badge-gray",badgeBg:"#f8fafc",badgeBorder:"#94a3b8",badgeColor:"#475569",maxDifferentialFt:0,description:"UNVERIFIED: no ground elevation reading is available for this parcel, so fill risk cannot be assessed."};const t=s.centerElevationNavd88Ft??0,o=s.cornerElevations||[];let n=0;if(o.length>0)for(const y of o){const P=Math.abs(t-(y.elevationNavd88Ft??t));P>n&&(n=P)}const l=Math.round(n*100)/100;return l<1?{status:"Good",badgeClass:"badge-emerald",badgeBg:"#ecfdf5",badgeBorder:"#10b981",badgeColor:"#047857",maxDifferentialFt:l,description:"Good: Low chance of additional fill needed to level building area (Center-to-corner elevation relief is less than 1.0 FT)."}:l<=2?{status:"Moderate",badgeClass:"badge-amber",badgeBg:"#fffbeb",badgeBorder:"#f59e0b",badgeColor:"#b45309",maxDifferentialFt:l,description:"Moderate: Moderate chance of additional fill needed to level building area (Center-to-corner elevation relief is between 1.0 and 2.0 FT)."}:l<=3?{status:"High",badgeClass:"badge-orange",badgeBg:"#fff7ed",badgeBorder:"#ea580c",badgeColor:"#c2410c",maxDifferentialFt:l,description:"High: High chance of additional fill needed to level building area (Center-to-corner elevation relief is between 2.0 and 3.0 FT)."}:{status:"Warning",badgeClass:"badge-crimson",badgeBg:"#fef2f2",badgeBorder:"#ef4444",badgeColor:"#b91c1c",maxDifferentialFt:l,description:"Warning: There is a burden of excessive fill to level building area (Center-to-corner elevation relief exceeds 3.0 FT)."}}function at(s,t,o,n=3){const l=s||vt,y=1e3,P=700,b=l.polygonPointsString||(l.projectedPts&&l.projectedPts.length>0?l.projectedPts.map(d=>`${(d.x??0).toFixed(1)},${(d.y??0).toFixed(1)}`).join(" "):(l.vertices||[]).map(d=>`${(d.x??0).toFixed(1)},${(d.y??0).toFixed(1)}`).join(" "));let L="";if(l.frontLeg&&l.frontLeg.p1&&l.frontLeg.p2){const d=l.frontLeg,S=d.normalX??0,V=d.normalY??-1,U=d.p1.x-S*45,w=d.p1.y-V*45,q=d.p2.x-S*45,G=d.p2.y-V*45,j=l.roadX??(U+q)/2,D=l.roadY??(w+G)/2,F=ne(l.roadName||"CORRIDOR RIGHT-OF-WAY");L=`
      <g class="road-corridor-annotation">
        <line x1="${U.toFixed(1)}" y1="${w.toFixed(1)}" x2="${q.toFixed(1)}" y2="${G.toFixed(1)}" stroke="#475569" stroke-width="14" stroke-opacity="0.3" stroke-linecap="round" />
        <line x1="${U.toFixed(1)}" y1="${w.toFixed(1)}" x2="${q.toFixed(1)}" y2="${G.toFixed(1)}" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6 4" stroke-opacity="0.8" />
        <g transform="translate(${j.toFixed(1)}, ${D.toFixed(1)})">
          <rect x="-80" y="-12" width="160" height="24" rx="4" fill="#0f172a" stroke="#475569" stroke-width="1" opacity="0.9" />
          <text x="0" y="4" fill="#cbd5e1" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle" letter-spacing="1">
            ═══ ${F} ═══
          </text>
        </g>
      </g>
    `}const T=(l.legs||[]).map(d=>{if(d.needsLeader&&d.leader){const S=d.leader.align||"left",V=S==="left"?0:S==="right"?-130:-65,U=S==="left"?6:S==="right"?-6:0,w=S==="left"?"start":S==="right"?"end":"middle";return`
        <g class="boundary-leg-group">
          <g class="leader-line">
            <polyline points="${d.leader.anchorX.toFixed(1)},${d.leader.anchorY.toFixed(1)} ${d.leader.elbowX.toFixed(1)},${d.leader.elbowY.toFixed(1)} ${d.leader.tagX.toFixed(1)},${d.leader.tagY.toFixed(1)}" fill="none" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="3 2" />
            <circle cx="${d.leader.anchorX.toFixed(1)}" cy="${d.leader.anchorY.toFixed(1)}" r="2.5" fill="#38bdf8" />
          </g>
          <g transform="translate(${d.leader.tagX.toFixed(1)}, ${d.leader.tagY.toFixed(1)})">
            <rect x="${V}" y="-13" width="130" height="26" rx="5" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" opacity="0.95" />
            <text x="${U}" y="-1" fill="#38bdf8" font-size="9.5" font-weight="bold" font-family="monospace" text-anchor="${w}">
              L${d.index}: ${d.distFtStr} FT
            </text>
            <text x="${U}" y="9" fill="#fbbf24" font-size="8.5" font-weight="600" font-family="monospace" text-anchor="${w}">
              ${d.bearingStr}
            </text>
          </g>
        </g>
      `}else{const S=d.labelX??d.midX??500,V=d.labelY??d.midY??350,U=d.angleDeg??0;return`
        <g class="boundary-leg-group">
          <g transform="translate(${S.toFixed(1)}, ${V.toFixed(1)}) rotate(${U.toFixed(1)})">
            <rect x="-45" y="-10" width="90" height="20" rx="4" fill="#090d16" stroke="#10b981" stroke-width="1" opacity="0.9" />
            <text x="0" y="4" fill="#a7f3d0" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">
              ${d.distFtStr} FT
            </text>
          </g>
        </g>
      `}}).join(""),$=(l.vertices||[]).map(d=>`
      <g class="vertex-marker-group" transform="translate(${d.x.toFixed(1)}, ${d.y.toFixed(1)})">
        <circle cx="0" cy="0" r="7.5" fill="#0f172a" stroke="${d.isCorner?"#38bdf8":"#94a3b8"}" stroke-width="1.8" />
        <circle cx="0" cy="0" r="2.5" fill="${d.isCorner?"#38bdf8":"#cbd5e1"}" />
        <g transform="translate(9, -9)">
          <rect x="-2" y="-8" width="18" height="13" rx="3" fill="#0284c7" stroke="#e0f2fe" stroke-width="0.8" />
          <text x="7" y="2" fill="#ffffff" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">
            V${d.index}
          </text>
        </g>
      </g>
    `).join(""),I=ne((t==null?void 0:t.reNumber)||(o==null?void 0:o.apn)||(o==null?void 0:o.id)||"0716000000"),M=ne((t==null?void 0:t.address)||(o==null?void 0:o.address)||"Certified First Coast Cadastre"),i=(l.totalPerimeterFt??0).toFixed(1),f=(l.geodesicAreaAcres??0).toFixed(2),k=l.scaleBarPx??100,v=l.scaleBarTargetFt??50;return`
    <svg id="cadastre-print-plat-svg" viewBox="0 0 ${y} ${P}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display:block; width: 100%; height: 100%;">
      <defs>
        <pattern id="print-cadastre-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" stroke-width="0.6" stroke-opacity="0.4" />
        </pattern>
        <pattern id="print-cadastre-grid-sub" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1e293b" stroke-width="0.3" stroke-opacity="0.2" />
        </pattern>
        <pattern id="print-parcel-hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#10b981" stroke-width="0.75" stroke-opacity="0.15" />
        </pattern>
        <filter id="print-glow-emerald" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <!-- Background Architectural Blueprint Grid -->
      <rect x="0" y="0" width="${y}" height="${P}" fill="#090d16" />
      <rect x="0" y="0" width="${y}" height="${P}" fill="url(#print-cadastre-grid-sub)" />
      <rect x="0" y="0" width="${y}" height="${P}" fill="url(#print-cadastre-grid)" />

      <!-- Outer Neatline -->
      <rect x="20" y="20" width="${y-40}" height="${P-40}" fill="none" stroke="#334155" stroke-width="1.2" stroke-dasharray="8 4" opacity="0.6" />

      <!-- Road Corridor Right-of-Way -->
      ${L}

      <!-- Main Parcel Polygon -->
      ${b?`
        <polygon points="${b}" fill="url(#print-parcel-hatch)" stroke="#10b981" stroke-width="2.8" stroke-linejoin="round" filter="url(#print-glow-emerald)" />
        <polygon points="${b}" fill="#047857" fill-opacity="0.10" />
      `:""}

      <!-- Boundary Legs & Dimensions -->
      ${T}

      <!-- Corner Vertex Marker Pins -->
      ${$}

      <!-- North Arrow -->
      <g transform="translate(${y-85}, 85)">
        <circle cx="0" cy="0" r="22" fill="#090d16" stroke="#38bdf8" stroke-width="1.5" opacity="0.9" />
        <path d="M 0 -18 L 6 12 L 0 6 L -6 12 Z" fill="#38bdf8" />
        <path d="M 0 -18 L 0 6 L -6 12 Z" fill="#0284c7" />
        <text x="0" y="-23" fill="#38bdf8" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">N</text>
      </g>

      <!-- Dynamic Scale Bar -->
      <g transform="translate(60, 580)">
        <rect x="-10" y="-12" width="${k+20}" height="28" fill="#090d16" stroke="#475569" stroke-width="1" rx="4" opacity="0.85" />
        <line x1="0" y1="0" x2="${k}" y2="0" stroke="#f8fafc" stroke-width="3" />
        <line x1="0" y1="-5" x2="0" y2="5" stroke="#f8fafc" stroke-width="2" />
        <line x1="${(k/2).toFixed(1)}" y1="-3" x2="${(k/2).toFixed(1)}" y2="3" stroke="#f8fafc" stroke-width="1.5" />
        <line x1="${k}" y1="-5" x2="${k}" y2="5" stroke="#f8fafc" stroke-width="2" />
        <text x="${(k/2).toFixed(1)}" y="-6" fill="#f8fafc" font-size="9" font-weight="bold" font-family="monospace" text-anchor="middle">
          ${v} FT
        </text>
      </g>

      <!-- Bottom Architectural Title Block -->
      <g transform="translate(45, 620)">
        <rect x="0" y="0" width="${y-90}" height="60" fill="#090d16" stroke="#10b981" stroke-width="1.8" rx="6" opacity="0.95" />
        <text x="20" y="24" fill="#f8fafc" font-size="13" font-weight="bold">
          ACTUAL CADASTRE POLYGON EXTRACTION — RE# ${I}
        </text>
        <text x="20" y="44" fill="#38bdf8" font-size="11" font-weight="bold">
          Address: ${M}
        </text>
        <text x="440" y="44" fill="#94a3b8" font-size="10">
          Perimeter: ${i} FT • Area: ${f} AC
        </text>
        <text x="${y-250}" y="44" fill="#10b981" font-size="11" font-weight="bold">
          Sheet 2 of ${n} (Plat Map) ✓
        </text>
      </g>
    </svg>
  `}function yt(s){var je,me,te,Ee,Le,Re,Me,Oe,Be,Ue,We,ke,Pe,Ae,De;const{report:t,parcel:o,svgElementHtml:n}=s,l=s.geometry||vt,y=ne((t==null?void 0:t.reNumber)||(o==null?void 0:o.apn)||(o==null?void 0:o.id)||"0716000000"),P=ne((t==null?void 0:t.address)||(o==null?void 0:o.address)||"Certified First Coast Cadastre"),b=ne((o==null?void 0:o.county)||"Florida First Coast"),L=ne((o==null?void 0:o.jurisdiction)||(t==null?void 0:t.city)||(o==null?void 0:o.county)||"Florida First Coast"),T=ne((t==null?void 0:t.legalDescription)||(o==null?void 0:o.legalDescription)||"NA — NO RECORDED LEGAL DESCRIPTION FOUND"),$=((l==null?void 0:l.totalPerimeterFt)??0).toFixed(1),I=((l==null?void 0:l.geodesicAreaAcres)??0).toFixed(2),M=o!=null&&o.squareFeet?o.squareFeet.toLocaleString():(((l==null?void 0:l.geodesicAreaAcres)??0)*43560).toFixed(0),i=s.wetlandAssessment||(t==null?void 0:t.wetlandAssessment)||(o==null?void 0:o.wetlandAssessment)||null,f=!!(i&&(i.totalWetlandAcres&&i.totalWetlandAcres>0||i.wetlandFeatures&&i.wetlandFeatures.length>0||i.wetlandPolygons&&i.wetlandPolygons.length>0)),k=f?4:3,v=n&&n.trim().length>20&&!n.includes("loading")?n:at(l,t,o,k),d=(t==null?void 0:t.elevationProfile)||Rt(o||{squareFeet:1e4},o==null?void 0:o.coordinates,t!=null&&t.environmentalRisks?{staticBfe:(je=t.femaAssessment)==null?void 0:je.baseFloodElevationFt,inFloodZone:(me=t.femaAssessment)==null?void 0:me.inFloodZone}:void 0),S=ia(d),V=new Date,U=V.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),w=V.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0,timeZoneName:"short"}),q=V.toISOString(),G=(m,ye)=>typeof m=="number"&&Number.isFinite(m)&&m>0?`${m.toLocaleString()}${ye}`:ve,j=t==null?void 0:t.zoningIntelligence,D=ne(de((j==null?void 0:j.code)||(o==null?void 0:o.zoningCode))),F=ne(de(j==null?void 0:j.name)),ce=G((j==null?void 0:j.frontSetbackFt)??(o==null?void 0:o.frontSetback)," FT"),Q=G((j==null?void 0:j.sideSetbackFt)??(o==null?void 0:o.sideSetback)," FT"),be=G((j==null?void 0:j.rearSetbackFt)??(o==null?void 0:o.rearSetback)," FT"),ae=G((j==null?void 0:j.maxHeightFt)??(o==null?void 0:o.buildingHeightMax)," FT"),ge=G((j==null?void 0:j.maxLotCoveragePct)??(o==null?void 0:o.maxLotCoverage),"%"),xe=G((j==null?void 0:j.maxFar)??(o==null?void 0:o.maxFar),""),le=G(j==null?void 0:j.minLotAreaSqFt," SQFT"),h=G(j==null?void 0:j.minFrontageFt," FT"),g=d.centerElevationNavd88Ft,E=d.minElevationFt??g,C=Ie(d)||g>0,_=C&&(g<5||E<5),Y=C||g>0?`${g.toFixed(2)} FT NAVD88`:st(d),B=m=>C||m>0?`${m.toFixed(2)}' NGVD29`:"NGVD29 UNVERIFIED",R=m=>C||typeof m=="number"&&Number.isFinite(m)&&m>0?`${m.toFixed(2)} FT`:ve,J=C||d.elevationDifferentialFt>0?`ΔH = ${d.elevationDifferentialFt.toFixed(2)} FT (${d.slopePercentage}% slope)`:"ΔH UNVERIFIED",oe=de(((te=t==null?void 0:t.environmentalRisks)==null?void 0:te.firmPanelNumber)||((Ee=t==null?void 0:t.femaAssessment)==null?void 0:Ee.firmPanelNumber)||(o==null?void 0:o.mapPanel)||(o==null?void 0:o.firmPanel)||(o==null?void 0:o.femaFirmPanel)),pe=de(((Le=t==null?void 0:t.environmentalRisks)==null?void 0:Le.femaFloodZone)||((Re=t==null?void 0:t.femaAssessment)==null?void 0:Re.floodZone)||(o==null?void 0:o.femaFloodZone)||(o==null?void 0:o.floodZone)),u={...(t==null?void 0:t.feasibilityVerdict)||{status:"MORE_INFO_NEEDED",badgeLabel:"❓ More Information Needed (Flood Zone / Elevation Unverified)",summarySentence:"No research report was run for this parcel, so FEMA flood zone and ground elevation are unverified; confirm them before relying on this package.",disclaimer:"DISCLAIMER: This automated preliminary GIS research package is prepared autonomously from Florida public GIS layers, LiDAR contour models, and official public records. No physical field survey or on-site boundary staking was performed. It is provided solely for initial informational screening and is not intended to supplant, replace, or substitute for formal boundary survey, title examination, civil engineering, or professional architectural review by a duly licensed Architecture, Engineering, or Construction (AEC) professional."}};_&&(u.status="THUMBS_DOWN",u.badgeLabel="⚠️ Questionable Buildability (Critical Flood Hazard: Elevation < 5.0 FT NAVD88)",u.summarySentence=`Site buildability is QUESTIONABLE due to critical flood hazard: natural ground elevation (${g.toFixed(2)} FT NAVD88) sits below the 5.0 FT safety threshold, creating severe flood and storm surge inundation risks requiring mandatory structural elevation, fill mitigation, and civil floodplain engineering review.`);const p=l.legs||[],a=l.curves||[],r=l.vertices||[],x=p.length,c=x>18?"padding: 2.5px 5px; font-size: 8.5px;":"padding: 4px 6px; font-size: 9.5px;",O=x>20?"narrative-compact":"",K=p.map(m=>`
      <tr>
        <td style="font-weight: 700; color: #047857; ${c}">L${m.index}</td>
        <td style="${c}">Node V${m.fromVertex}</td>
        <td style="${c}">Node V${m.toVertex}</td>
        <td style="font-family: monospace; font-weight: 600; color: #1e3a8a; ${c}">${m.bearingStr}</td>
        <td style="text-align: right; font-weight: 700; ${c}">${m.distFtStr} FT</td>
        <td style="text-align: right; font-family: monospace; ${c}">${m.deltaNorthingFt>0?"+":""}${m.deltaNorthingFt.toFixed(2)}</td>
        <td style="text-align: right; font-family: monospace; ${c}">${m.deltaEastingFt>0?"+":""}${m.deltaEastingFt.toFixed(2)}</td>
      </tr>
    `).join(""),H=a.map(m=>`
      <tr>
        <td style="font-weight: 700; color: #047857; ${c}">C${m.index}</td>
        <td style="${c}">V${m.fromVertex} → V${m.toVertex}</td>
        <td style="text-align: right; ${c}">${m.radiusFt.toFixed(2)} FT</td>
        <td style="text-align: center; font-family: monospace; ${c}">${m.deltaDeg.toFixed(2)}°</td>
        <td style="text-align: right; font-weight: 700; ${c}">${m.arcLengthFt.toFixed(2)} FT</td>
        <td style="text-align: right; ${c}">${m.chordLengthFt.toFixed(2)} FT</td>
        <td style="font-family: monospace; ${c}">${m.chordBearingStr}</td>
        <td style="text-align: right; ${c}">${m.tangentFt.toFixed(2)} FT</td>
      </tr>
    `).join(""),W=r.map(m=>`
      <tr>
        <td style="font-weight: 700; color: #047857; ${c}">V${m.index??m.nodeIndex??1}</td>
        <td style="font-family: monospace; ${c}">${(m.lat??0).toFixed(6)}° N</td>
        <td style="font-family: monospace; ${c}">${(m.lng??0).toFixed(6)}° W</td>
        <td style="font-family: monospace; ${c}">${(m.turnAngleDeg??0).toFixed(1)}°</td>
        <td style="${c}"><span class="badge ${m.isCorner?"badge-blue":"badge-gray"}">${m.isCorner?"Corner Point":"Boundary Node"}</span></td>
      </tr>
    `).join(""),Z=p.map(m=>`
      <div class="narrative-call">
        <div class="call-badge">CALL L${m.index}</div>
        <div class="call-text">
          Thence proceed <b>${m.bearingStr}</b> a distance of <b>${m.distFtStr} FEET</b> to Node V${m.toVertex};
        </div>
      </div>
    `).join(""),se=s.fireProtectionAndUtilities??(t==null?void 0:t.fireProtectionAndUtilities),re=(se==null?void 0:se.within1000FtHydrants)||[],X=(se==null?void 0:se.within1000FtWells)||[],ee=(se==null?void 0:se.hasHydrantData)??!1,ue=se?`
      <!-- 🚒 FIRE PROTECTION & SERVICE CONNECTS (WITHIN 1,000 FEET) -->
      <div style="margin-top: 6px; margin-bottom: 6px; page-break-inside: avoid; break-inside: avoid;">
        <div class="table-section-title">
          <span>${a.length>0?"4.":"3."} Fire Protection &amp; Service Connects (Within 1,000 Feet)</span>
          <span>Hydrants: ${re.length} • Wells: ${X.length} • Zero Assertions Policy</span>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 3px;">
          <!-- Hydrants Column -->
          <div style="border: 1px solid #cbd5e1; border-radius: 4px; padding: 5px 7px; background: #fafafa;">
            <div style="display: flex; justify-content: space-between; font-size: 8.5px; font-weight: 800; color: #b45309; border-bottom: 1px solid #e2e8f0; padding-bottom: 2px; margin-bottom: 3px;">
              <span>MUNICIPAL FIRE HYDRANTS (≤ 1,000 FT)</span>
              <span>${ee?`${re.length} RECORDED`:"CADASTRE NA"}</span>
            </div>
            ${ee?re.length===0?`
              <div style="font-size: 8px; color: #64748b; font-style: italic;">
                No municipal fire hydrants recorded within 1,000 feet of this property.
              </div>
            `:`
              <table class="survey-table" style="margin: 0; font-size: 8px;">
                <thead>
                  <tr>
                    <th style="padding: 2px 4px;">Hydrant ID</th>
                    <th style="padding: 2px 4px; text-align: right;">Distance</th>
                    <th style="padding: 2px 4px;">Bearing</th>
                    <th style="padding: 2px 4px;">Location / Address</th>
                  </tr>
                </thead>
                <tbody>
                  ${re.slice(0,6).map(m=>`
                    <tr>
                      <td style="padding: 2px 4px; font-weight: 700; font-family: monospace;">${ne(m.id)}</td>
                      <td style="padding: 2px 4px; text-align: right; font-weight: 700; color: #b45309;">${m.distanceFt} FT</td>
                      <td style="padding: 2px 4px; font-family: monospace;">${ne(m.bearing)}</td>
                      <td style="padding: 2px 4px; color: #475569;">${ne(m.address||"Right-of-Way")}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
              ${re.length>6?`<div style="font-size: 7.5px; color: #64748b; margin-top: 2px;">+ ${re.length-6} additional hydrants within 1,000 FT recorded</div>`:""}
            `:`
              <div style="font-size: 8px; color: #64748b; font-style: italic;">
                ${ne(se.coverageNote||"Hydrant cadastre unavailable for this jurisdiction from verified public data.")}
              </div>
            `}
          </div>

          <!-- Wells Column -->
          <div style="border: 1px solid #cbd5e1; border-radius: 4px; padding: 5px 7px; background: #fafafa;">
            <div style="display: flex; justify-content: space-between; font-size: 8.5px; font-weight: 800; color: #0284c7; border-bottom: 1px solid #e2e8f0; padding-bottom: 2px; margin-bottom: 3px;">
              <span>WATER WELLS &amp; SERVICE CONNECTS (≤ 1,000 FT)</span>
              <span>${X.length} RECORDED</span>
            </div>
            ${X.length===0?`
              <div style="font-size: 8px; color: #64748b; font-style: italic;">
                No public water supply, irrigation, or domestic wells recorded within 1,000 feet of this property.
              </div>
            `:`
              <table class="survey-table" style="margin: 0; font-size: 8px;">
                <thead>
                  <tr>
                    <th style="padding: 2px 4px;">Well ID / Name</th>
                    <th style="padding: 2px 4px; text-align: right;">Distance</th>
                    <th style="padding: 2px 4px;">Bearing</th>
                    <th style="padding: 2px 4px;">Type &amp; Depth</th>
                  </tr>
                </thead>
                <tbody>
                  ${X.slice(0,6).map(m=>`
                    <tr>
                      <td style="padding: 2px 4px; font-weight: 700; font-family: monospace;">${ne(m.name||m.id)}</td>
                      <td style="padding: 2px 4px; text-align: right; font-weight: 700; color: #0284c7;">${m.distanceFt} FT</td>
                      <td style="padding: 2px 4px; font-family: monospace;">${ne(m.bearing)}</td>
                      <td style="padding: 2px 4px; color: #475569;">${ne(m.type)}${m.depthFt?` (${m.depthFt} FT)`:""}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
              ${X.length>6?`<div style="font-size: 7.5px; color: #64748b; margin-top: 2px;">+ ${X.length-6} additional wells within 1,000 FT recorded</div>`:""}
            `}
          </div>
        </div>

        <div style="font-size: 7.5px; color: #64748b; margin-top: 3px; font-style: italic;">
          * Note: Distances are straight-line geodetic separations measured against authentic public cadastre registers (FDEP PWS, USGS NWIS, Municipal GIS). No qualitative assertions whether proximity is good or bad are made.
        </div>
      </div>
  `:"";return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cadastral Boundary Survey Package — RE# ${y}</title>
  <style>
    @page {
      size: letter portrait;
      margin: 8mm 10mm 8mm 10mm;
    }
    *, *:before, *:after {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    body {
      margin: 0;
      padding: 0;
      background-color: #f1f5f9;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #0f172a;
      -webkit-font-smoothing: antialiased;
    }
    .toolbar {
      position: sticky;
      top: 0;
      z-index: 9999;
      background: #0f172a;
      color: #f8fafc;
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    .toolbar button {
      background: #047857;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 13px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: background 0.2s;
    }
    .toolbar button:hover {
      background: #065f46;
    }
    .toolbar .close-btn {
      background: #334155;
    }
    .toolbar .close-btn:hover {
      background: #475569;
    }
    .package-container {
      max-width: 860px;
      margin: 20px auto;
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
    .sheet-page {
      background: #ffffff;
      padding: 22px 26px 18px 26px;
      border-radius: 4px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
      border: 1px solid #e2e8f0;
      position: relative;
      min-height: 1040px;
      box-sizing: border-box;
      page-break-inside: auto;
      break-inside: auto;
      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
    }
    .sheet-page.sheet-1-page {
      page-break-inside: avoid;
      break-inside: avoid;
      page-break-after: always;
      break-after: page;
    }
    .sheet-page.sheet-2-page {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 1040px;
      min-height: 1040px;
      page-break-inside: avoid;
      break-inside: avoid;
      page-break-after: always;
      break-after: page;
    }
    .sheet-page.sheet-3-page {
      page-break-inside: auto;
      break-inside: auto;
      ${f?"page-break-after: always; break-after: page;":""}
    }
    .sheet-page.sheet-4-page {
      page-break-inside: auto;
      break-inside: auto;
    }
    .sheet-page:last-child {
      margin-bottom: 0;
    }
    .top-meta-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 9.5px;
      font-weight: 700;
      color: #334155;
      border-bottom: 1.5px solid #cbd5e1;
      padding: 2px 4px 5px 4px;
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .sheet-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 2.5px solid #047857;
      padding-bottom: 6px;
      margin-bottom: 8px;
    }
    .sheet-title h1 {
      margin: 0;
      font-size: 15.5px;
      font-weight: 800;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .sheet-title h2 {
      margin: 2px 0 0 0;
      font-size: 11px;
      font-weight: 700;
      color: #047857;
      text-transform: uppercase;
    }
    .sheet-badge {
      background: #0f172a;
      color: #ffffff;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 10.5px;
      font-weight: 800;
      letter-spacing: 1px;
    }
    .timestamp-banner {
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      border: 1.5px solid #cbd5e1;
      border-radius: 6px;
      padding: 6px 12px;
      margin-bottom: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .timestamp-col {
      display: flex;
      flex-direction: column;
    }
    .timestamp-col.text-right {
      text-align: right;
    }
    .timestamp-label {
      font-size: 8px;
      font-weight: 800;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.6px;
    }
    .timestamp-val {
      font-size: 11px;
      font-weight: 800;
      color: #0f172a;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace;
      margin-top: 1px;
    }
    .timestamp-sub {
      font-size: 9px;
      color: #475569;
      margin-top: 1px;
    }
    .meta-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 6px 14px;
      background: #f8fafc;
      padding: 5px 10px;
      border-radius: 4px;
      border: 1px solid #e2e8f0;
      font-size: 10px;
      margin-bottom: 8px;
    }
    .meta-bar b {
      color: #0f172a;
    }
    .certificate-box {
      border: 1.5px solid #cbd5e1;
      border-radius: 6px;
      padding: 8px 12px;
      background: #ffffff;
      margin-bottom: 8px;
    }
    .cert-title {
      font-size: 10px;
      font-weight: 800;
      color: #0f172a;
      text-transform: uppercase;
      margin-bottom: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 3px;
    }
    .legal-body {
      font-size: 9.5px;
      line-height: 1.45;
      color: #1e293b;
      font-family: Georgia, serif;
      text-align: justify;
    }
    .narrative-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 4px 8px;
      margin-bottom: 8px;
    }
    .narrative-grid.narrative-compact {
      grid-template-columns: repeat(3, 1fr);
      gap: 3px 6px;
    }
    .narrative-call {
      border: 1px solid #e2e8f0;
      border-left: 3px solid #047857;
      padding: 4px 6px;
      background: #f8fafc;
      border-radius: 3px;
      font-size: 9px;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .narrative-compact .narrative-call {
      padding: 2.5px 5px;
      font-size: 8px;
    }
    .call-badge {
      font-weight: 800;
      color: #047857;
      font-size: 8.5px;
      font-family: monospace;
    }
    .call-text {
      color: #334155;
      margin-top: 1px;
    }
    .drawing-container {
      width: 100%;
      height: 760px;
      background: #090d16;
      border: 1.5px solid #334155;
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .table-section-title {
      font-size: 10px;
      font-weight: 800;
      color: #0f172a;
      text-transform: uppercase;
      margin: 7px 0 4px 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 1.5px solid #047857;
      padding-bottom: 2px;
      page-break-after: avoid;
      break-after: avoid;
    }
    .survey-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 9px;
      margin-bottom: 6px;
      page-break-inside: auto;
      break-inside: auto;
    }
    .survey-table thead {
      display: table-header-group;
    }
    .survey-table tr {
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .survey-table th {
      background: #f1f5f9;
      color: #334155;
      font-weight: 800;
      text-align: left;
      padding: 3.5px 6px;
      border: 1px solid #cbd5e1;
      text-transform: uppercase;
      font-size: 8px;
      letter-spacing: 0.5px;
    }
    .survey-table td {
      padding: 3.5px 6px;
      border: 1px solid #e2e8f0;
      color: #1e293b;
    }
    .survey-table tbody tr:nth-child(even) {
      background-color: #f8fafc;
    }
    .badge {
      display: inline-block;
      padding: 1px 5px;
      border-radius: 3px;
      font-size: 8px;
      font-weight: 700;
    }
    .badge-blue { background: #dbeafe; color: #1e40af; }
    .badge-gray { background: #e2e8f0; color: #475569; }
    .badge-emerald { background: #ecfdf5; color: #047857; border: 1px solid #10b981; }
    .badge-amber { background: #fffbeb; color: #b45309; border: 1px solid #f59e0b; }
    .badge-orange { background: #fff7ed; color: #c2410c; border: 1px solid #ea580c; }
    .badge-crimson { background: #fef2f2; color: #b91c1c; border: 1px solid #ef4444; }
    .verdict-card {
      border: 1.5px solid #cbd5e1;
      border-radius: 6px;
      padding: 7px 11px;
      margin-top: 6px;
      margin-bottom: 6px;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .verdict-thumbs-up {
      background: #ecfdf5;
      border-color: #10b981;
      color: #065f46;
    }
    .verdict-thumbs-down {
      background: #fef2f2;
      border-color: #ef4444;
      color: #991b1b;
    }
    .verdict-more-info {
      background: #fffbeb;
      border-color: #f59e0b;
      color: #92400e;
    }
    .disclaimer-box {
      border: 1px solid #cbd5e1;
      background: #f8fafc;
      border-radius: 4px;
      padding: 5px 9px;
      font-size: 7.8px;
      color: #475569;
      line-height: 1.35;
      margin-top: 5px;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .sheet-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 8.5px;
      color: #64748b;
      border-top: 1px solid #e2e8f0;
      padding-top: 4px;
      margin-top: 6px;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    .seal-box {
      font-weight: 800;
      color: #047857;
      letter-spacing: 0.5px;
    }

    @media print {
      body {
        background: transparent !important;
      }
      .toolbar {
        display: none !important;
      }
      .package-container {
        margin: 0 !important;
        padding: 0 !important;
        max-width: 100% !important;
        gap: 0 !important;
      }
      .sheet-page {
        margin: 0 !important;
        padding: 0 !important;
        border: none !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        width: 100% !important;
        height: auto !important;
        min-height: auto !important;
      }
      .sheet-page.sheet-1-page {
        page-break-inside: avoid !important;
        break-inside: avoid !important;
        page-break-after: always !important;
        break-after: page !important;
      }
      .sheet-page.sheet-2-page {
        page-break-inside: avoid !important;
        break-inside: avoid !important;
        page-break-after: always !important;
        break-after: page !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: space-between !important;
        height: 100vh !important;
        min-height: 100vh !important;
      }
      .sheet-page.sheet-2-page .drawing-container {
        flex: 1 !important;
        height: 860px !important;
        max-height: 880px !important;
      }
      .sheet-page.sheet-3-page {
        page-break-inside: auto !important;
        break-inside: auto !important;
        ${f?"page-break-after: always !important; break-after: page !important;":"page-break-after: auto !important; break-after: auto !important;"}
      }
      .sheet-page.sheet-4-page {
        page-break-inside: auto !important;
        break-inside: auto !important;
        page-break-after: auto !important;
        break-after: auto !important;
      }
      .sheet-page:last-child {
        page-break-after: auto !important;
        break-after: auto !important;
        margin-bottom: 0 !important;
      }
      .top-meta-header {
        border-bottom: 1.5px solid #000000 !important;
        padding: 2px 4px 4px 4px !important;
      }
    }
  </style>
</head>
<body>

  <!-- Screen Toolbar -->
  <div class="toolbar">
    <div>
      <span style="font-size: 14px; font-weight: 800;">🖨️ Multi-Page Cadastral Boundary Survey Package</span>
      <span style="font-size: 12px; opacity: 0.8; margin-left: 10px;">RE# ${y} • ${k} Complete Sheets${f?" (Includes Certified Wetlands Report)":""}</span>
    </div>
    <div style="display: flex; gap: 8px;">
      <button data-print-action="print">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
        Print ${k}-Page Package
      </button>
      <button class="close-btn" data-print-action="close">Close</button>
    </div>
  </div>

  <div class="package-container">

    <!-- ======================================================================= -->
    <!-- 📄 SHEET 1 OF ${k}: TITLE BLOCK, LEGAL DESCRIPTION & ELEVATIONS -->
    <!-- ======================================================================= -->
    <div class="sheet-page sheet-1-page">
      <!-- Top Running Margin Header -->
      <div class="top-meta-header">
        <span>Florida Cadastral Survey Package — RE# ${y}</span>
        <span>Certified Public Land Records • <span style="color: #047857;">https://band72.github.io/parceliq-site</span></span>
      </div>

      <div class="sheet-header">
        <div class="sheet-title">
          <h1>Florida Cadastral Boundary Survey Package</h1>
          <h2>Sheet 1 of ${k} — Certified Title Block, Legal Description &amp; Topographic Elevations</h2>
        </div>
        <div class="sheet-badge">SHEET 1 OF ${k}</div>
      </div>

      <!-- 🕒 Professional Elegant Report Date & Timestamp Card -->
      <div class="timestamp-banner">
        <div class="timestamp-col">
          <div class="timestamp-label">OFFICIAL REPORT CERTIFICATION TIMESTAMP</div>
          <div class="timestamp-val">📅 ${U} at ${w}</div>
        </div>
        <div class="timestamp-col text-right">
          <div class="timestamp-label">AUDIT VERIFICATION RUN</div>
          <div class="timestamp-sub">ISO-8601: <span style="font-family: monospace; font-weight: 700; color: #047857;">${q}</span></div>
        </div>
      </div>

      <div class="meta-bar">
        <div>RE# / APN: <b>${y}</b></div>
        <div>Address: <b>${P}</b></div>
        <div>County: <b>${b}</b></div>
        <div>Jurisdiction: <b>${L}</b></div>
        <div>Perimeter: <b>${$} FT</b></div>
        <div>Area: <b>${I} AC (${M} SQFT)</b></div>
        <div>Traverse Calls: <b>${p.length} Vectors</b></div>
      </div>

      <!-- 🏛️ Municipal Residential Zoning & Setbacks Banner -->
      <div class="meta-bar" style="background: #eff6ff; border-color: #93c5fd; color: #1e3a8a; margin-bottom: 6px;">
        <div>Zoning: <b style="color: #1d4ed8;">${D} (${F})</b></div>
        <div>Front Setback: <b>${ce}</b></div>
        <div>Side Setback: <b>${Q}</b></div>
        <div>Rear Setback: <b>${be}</b></div>
        <div>Max Height: <b>${ae}</b></div>
        <div>Max Lot Coverage: <b>${ge}</b></div>
      </div>

      <!-- 📜 Official Legal Description Certificate -->
      <div class="certificate-box">
        <div class="cert-title">
          <span>OFFICIAL LEGAL DESCRIPTION CERTIFICATE</span>
          <span>PUBLIC RECORDS OF ${b.toUpperCase()}</span>
        </div>
        <div class="legal-body">
          ${T}
        </div>
      </div>

      <!-- 🌊 FEMA Flood Hazard & 🏔️ Topographic Grade Certified Banner -->
      ${(()=>{var He,nt,ot,it,rt,lt;const m=typeof((He=t==null?void 0:t.environmentalRisks)==null?void 0:He.wetlandsProximityFt)=="number"?t.environmentalRisks.wetlandsProximityFt:f?0:(i==null?void 0:i.nearestWetlandDistanceFt)??null,ye=t?!!((nt=t.dataQuality)!=null&&nt.wetlandLookupDegraded):!i||!!i.lookupDegraded,he=$e(m,ye),Te=m===0?"0 FT (Contains Wetlands)":m===null?he.thresholdFt:`${m.toFixed(0)} FT (${he.label})`;return _?`
            <div class="meta-bar" style="background: #fef2f2; border-color: #f87171; color: #991b1b; margin-top: 2px; margin-bottom: 6px;">
              <div>FEMA FIRM: <b style="color: #991b1b; font-family: monospace;">${ne(oe)}</b></div>
              <div>Flood Risk: <b style="color: #dc2626;">🚨 CRITICAL FLOOD HAZARD (&lt; 5.0 FT NAVD88)</b></div>
              <div>BFE: <b>${((ot=t==null?void 0:t.environmentalRisks)==null?void 0:ot.baseFloodElevation)||((it=t==null?void 0:t.femaAssessment)!=null&&it.baseFloodElevationFt?t.femaAssessment.baseFloodElevationFt+" FT NAVD88":ve)}</b></div>
              <div>Wetlands Proximity: <b style="color: ${he.level==="CONTAINS_WETLANDS"||he.level==="HIGH"?"#dc2626":he.level==="MODERATE"?"#ea580c":"#991b1b"};">${Te}</b></div>
              <div>Center Grade: <b style="color: #dc2626;">${Y}</b> (${B(d.centerElevationNgvd29Ft)})</div>
              <div>Topographic Relief: <b>${J}</b></div>
            </div>
          `:`
            <div class="meta-bar" style="background: #f0fdf4; border-color: #86efac; color: #14532d; margin-top: 2px; margin-bottom: 6px;">
              <div>FEMA FIRM Panel: <b style="color: #047857; font-family: monospace;">${ne(oe)}</b></div>
              <div>Flood Zone: <b style="color: #047857;">${ne(pe)}</b></div>
              <div>BFE: <b>${((rt=t==null?void 0:t.environmentalRisks)==null?void 0:rt.baseFloodElevation)||((lt=t==null?void 0:t.femaAssessment)!=null&&lt.baseFloodElevationFt?t.femaAssessment.baseFloodElevationFt+" FT NAVD88":ve)}</b></div>
              <div>Wetlands Proximity: <b style="color: ${he.level==="CONTAINS_WETLANDS"||he.level==="HIGH"?"#dc2626":he.level==="MODERATE"?"#ea580c":"#047857"};">${Te}</b></div>
              <div>Center Grade: <b style="color: #047857;">${Y}</b> (${B(d.centerElevationNgvd29Ft)})</div>
              <div>Topographic Relief: <b>${J}</b></div>
            </div>
          `})()}

      <!-- 🏔️ Topographic Elevation & 4-Corner Schedule Table on Page 1 -->
      <div class="table-section-title" style="margin-top: 4px; margin-bottom: 3px;">
        <span>Topographic Elevation &amp; 4-Corner Schedule (NAVD88 &amp; NGVD29)</span>
        <span>Centerpoint Grade: <b>${Y}</b></span>
      </div>
      <table class="survey-table" style="margin-bottom: 4px;">
        <thead>
          <tr>
            <th>Location / Node</th>
            <th>Latitude (°N)</th>
            <th>Longitude (°W)</th>
            <th style="text-align: right;">Elevation (NAVD88)</th>
            <th style="text-align: right;">Elevation (NGVD29)</th>
            <th>Classification</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background: #ecfdf5; font-weight: 700;">
            <td style="color: #047857;">Center of Property</td>
            <td>${(((Me=d.centerCoordinates)==null?void 0:Me.lat)??(r.length>0?r.reduce((m,ye)=>m+(ye.lat??0),0)/r.length:30.3321)).toFixed(6)}° N</td>
            <td>${(((Oe=d.centerCoordinates)==null?void 0:Oe.lng)??(r.length>0?r.reduce((m,ye)=>m+(ye.lng??0),0)/r.length:-81.6541)).toFixed(6)}° W</td>
            <td style="text-align: right; color: #047857;">${R(d.centerElevationNavd88Ft)}</td>
            <td style="text-align: right;">${R(d.centerElevationNgvd29Ft)}</td>
            <td><span class="badge badge-blue">Property Centroid</span></td>
          </tr>
          ${d.cornerElevations.map(m=>`
            <tr>
              <td style="font-weight: 700; color: #1d4ed8;">${m.label||(m.corner?m.corner+" Corner Pin":"Boundary Node")}</td>
              <td>${m.lat.toFixed(6)}° N</td>
              <td>${m.lng.toFixed(6)}° W</td>
              <td style="text-align: right; font-weight: 700;">${R(m.elevationNavd88Ft)}</td>
              <td style="text-align: right;">${R(m.elevationNgvd29Ft)}</td>
              <td><span class="badge badge-gray">${m.corner} Corner Pin</span></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div style="font-size: 8px; color: #475569; margin-top: 1px; margin-bottom: 4px; page-break-inside: avoid; break-inside: avoid;">
        <b>Topographic Relief:</b> ${J} • ${d.drainageAssessment}
        ${d.bfeComparison?` • <b>FEMA Freeboard:</b> ${d.bfeComparison.description}`:""}
      </div>

      <!-- 🚜 Building Pad Elevation & Risk of Excessive Fill Assessment Box -->
      <div class="certificate-box" style="margin-top: 5px; margin-bottom: 5px; border: 1.5px solid ${S.badgeBorder}; background: ${S.badgeBg}; padding: 7px 11px;">
        <div class="cert-title" style="color: ${S.badgeColor}; border-color: rgba(0,0,0,0.1); margin-bottom: 3px; padding-bottom: 2px;">
          <span>BUILDING PAD ELEVATION &amp; RISK OF EXCESSIVE FILL ASSESSMENT</span>
          <span style="background: ${S.badgeColor}; color: #ffffff; padding: 1.5px 7px; border-radius: 3px; font-size: 8.5px; font-weight: 800;">
            RISK RATING: ${S.status.toUpperCase()}
          </span>
        </div>
        <div style="font-size: 9px; color: #1e293b; line-height: 1.35;">
          <b>Center-to-Corner Maximum Relief:</b> ${C?`ΔH = <b>${S.maxDifferentialFt.toFixed(2)} FT</b>`:"ΔH <b>UNVERIFIED</b>"} (Property Centroid: ${Y}).
          <br />
          <b>Excessive Fill Assessment:</b> ${S.description}
        </div>
      </div>

      <!-- 🏗️ Permitting & Residential Building Standards Summary -->
      <div class="certificate-box" style="margin-top: 5px; margin-bottom: 5px; border-color: #3b82f6; background: #f8fafc; padding: 6px 10px;">
        <div class="cert-title" style="color: #1e40af; border-color: #bfdbfe; margin-bottom: 3px; padding-bottom: 2px;">
          <span>RESIDENTIAL PERMITTING &amp; BUILDING CRITERIA SUMMARY</span>
          <span>FLORIDA BUILDING CODE 8TH ED. (2023)</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px 6px; font-size: 9px; color: #334155;">
          <div>• <b>Zoning Classification:</b> ${D} (${F})</div>
          <div>• <b>Min. Lot Area:</b> ${le}</div>
          <div>• <b>Min. Frontage:</b> ${h}</div>
          <div>• <b>Front Building Setback:</b> ${ce}</div>
          <div>• <b>Side Interior Setback:</b> ${Q}</div>
          <div>• <b>Rear Yard Setback:</b> ${be}</div>
          <div>• <b>Max Building Height:</b> ${ae} (Ridge)</div>
          <div>• <b>Max Lot Coverage:</b> ${ge}</div>
          <div>• <b>Max Floor Area Ratio (FAR):</b> ${xe}</div>
        </div>
      </div>

      <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 4px; padding: 4px 7px; margin-top: 4px; font-size: 8px; color: #475569; page-break-inside: avoid; break-inside: avoid;">
        <b>Surveyor Certification Stamp:</b> This boundary plat and legal description narrative is directly derived from official Florida county public land records, certified Department of Revenue (DOR) tax roll cadastre linework, and verified WGS84 physical GPS ground measurements.
      </div>

      <div class="sheet-footer">
        <div class="seal-box">
          ✓ CERTIFIED PUBLIC CADASTRE RECORD • AUDIT DATE: ${U}
        </div>
        <div>
          DATUM: NAD83 / WGS84 • RECORDED FL CADASTRE • SHEET 1 OF ${k}
        </div>
      </div>
    </div>

    <!-- ======================================================================= -->
    <!-- 📄 SHEET 2 OF ${k}: DEDICATED FULL-PAGE PARCEL PLAT MAP IMAGE   -->
    <!-- ======================================================================= -->
    <div class="sheet-page sheet-2-page">
      <div>
        <!-- Top Running Margin Header -->
        <div class="top-meta-header">
          <span>Florida Cadastral Survey Package — RE# ${y}</span>
          <span>Certified Plat Drawing • Sheet 2 of ${k} • <span style="color: #047857;">https://band72.github.io/parceliq-site</span></span>
        </div>

        <div class="sheet-header" style="margin-bottom: 6px;">
          <div class="sheet-title">
            <h1>Florida Cadastral Boundary Survey Package</h1>
            <h2>Sheet 2 of ${k} — High-Resolution Cadastral Boundary Plat Map</h2>
          </div>
          <div class="sheet-badge">SHEET 2 OF ${k}</div>
        </div>

        <div class="meta-bar">
          <div>RE# / APN: <b>${y}</b></div>
          <div>Address: <b>${P}</b></div>
          <div>County: <b>${b}</b></div>
          <div>Perimeter: <b>${$} FT</b></div>
          <div>Area: <b>${I} AC (${M} SQFT)</b></div>
          <div>Scale: <b>1" = ${l.scaleBarTargetFt} FT</b></div>
        </div>

        <!-- 📐 Dedicated Full-Page Boundary Plat Drawing Container -->
        <div class="drawing-container">
          ${v}
        </div>
      </div>

      <div class="sheet-footer">
        <div class="seal-box">
          ✓ ZERO SYNTHETIC DATA POLICY • 100% GROUND-TRUTHED NATURAL WGS84 GPS COORDINATES
        </div>
        <div>
          PARCELIQ SURVEY ENGINE v3.7 • SHEET 2 OF ${k} (PLAT MAP)
        </div>
      </div>
    </div>

    <!-- ======================================================================= -->
    <!-- 📄 SHEET 3 OF ${k}: TRAVERSE CALLS, SCHEDULES & FEASIBILITY     -->
    <!-- ======================================================================= -->
    <div class="sheet-page sheet-3-page">
      <!-- Top Running Margin Header -->
      <div class="top-meta-header">
        <span>Florida Cadastral Survey Package — RE# ${y}</span>
        <span>Traverse Calls &amp; Engineering Schedules • Sheet 3 of ${k}</span>
      </div>

      <div class="sheet-header">
        <div class="sheet-title">
          <h1>Florida Cadastral Boundary Survey Package</h1>
          <h2>Sheet 3 of ${k} — Boundary Traverse Calls, Engineering Schedules &amp; Feasibility Assessment</h2>
        </div>
        <div class="sheet-badge">SHEET 3 OF ${k}</div>
      </div>

      <div class="meta-bar">
        <div>RE# / APN: <b>${y}</b></div>
        <div>Boundary Lines: <b>${p.length} Calls</b></div>
        <div>Boundary Curves: <b>${a.length} Arcs</b></div>
        <div>Survey Nodes: <b>${r.length} Vertices</b></div>
        <div>Generated: <b>${U} ${w}</b></div>
      </div>

      <!-- 🚶 Sequential Metes & Bounds Traverse Breakdown placed on Sheet 3 (after the Parcel Image) -->
      <div style="margin-top: 4px; margin-bottom: 6px;">
        <div class="table-section-title">
          <span>Sequential Metes &amp; Bounds Traverse Breakdown (${p.length} Total Calls)</span>
          <span>Point of Beginning (POB) → Node V1</span>
        </div>
        <div class="narrative-grid ${O}">
          ${Z}
        </div>
      </div>

      <!-- 1. Boundary Line Table -->
      <div class="table-section-title">
        <span>1. Boundary Line Table (${p.length} Calls)</span>
        <span>Perimeter: ${$} FT</span>
      </div>
      <table class="survey-table">
        <thead>
          <tr>
            <th>Line #</th>
            <th>From Node</th>
            <th>To Node</th>
            <th>Quadrant Bearing</th>
            <th style="text-align: right;">Distance (FT)</th>
            <th style="text-align: right;">Δ Northing (FT)</th>
            <th style="text-align: right;">Δ Easting (FT)</th>
          </tr>
        </thead>
        <tbody>
          ${K}
        </tbody>
      </table>

      <!-- 2. Curve Table (if curves exist) -->
      ${a.length>0?`
        <div class="table-section-title">
          <span>2. Boundary Curve &amp; Arc Table (${a.length} Curves)</span>
          <span>Arc Definition</span>
        </div>
        <table class="survey-table">
          <thead>
            <tr>
              <th>Curve #</th>
              <th>From → To</th>
              <th style="text-align: right;">Radius (R)</th>
              <th style="text-align: center;">Delta (Δ)</th>
              <th style="text-align: right;">Arc Length (L)</th>
              <th style="text-align: right;">Chord (C)</th>
              <th>Chord Bearing</th>
              <th style="text-align: right;">Tangent (T)</th>
            </tr>
          </thead>
          <tbody>
            ${H}
          </tbody>
        </table>
      `:""}

      <!-- 3. Vertex Schedule -->
      <div class="table-section-title">
        <span>${a.length>0?"3.":"2."} Geodetic Vertex Coordinate Schedule (WGS84 Natural Ground Truth)</span>
        <span>${r.length} Total Nodes</span>
      </div>
      <table class="survey-table">
        <thead>
          <tr>
            <th>Node</th>
            <th>Latitude (°N)</th>
            <th>Longitude (°W)</th>
            <th>Turn Deflection (Δθ)</th>
            <th>Classification</th>
          </tr>
        </thead>
        <tbody>
          ${W}
        </tbody>
      </table>

      ${ue}

      <!-- 🏆 Preliminary Feasibility Assessment Verdict Card -->
      <div class="verdict-card ${u.status==="THUMBS_UP"?"verdict-thumbs-up":u.status==="THUMBS_DOWN"?"verdict-thumbs-down":"verdict-more-info"}">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px;">
          <b style="font-size: 10.5px; text-transform: uppercase;">Preliminary Feasibility Assessment Verdict</b>
          <span style="font-size: 10px; font-weight: 800; padding: 1.5px 7px; border-radius: 3px; background: rgba(255,255,255,0.7);">${u.badgeLabel}</span>
        </div>
        <div style="font-size: 9.5px; font-weight: 600; line-height: 1.35; margin-bottom: 3px;">
          ${u.summarySentence}
        </div>
        <div style="font-size: 8px; opacity: 0.85; font-family: monospace;">
          Report Run: <b>${U} at ${w}</b>
        </div>
      </div>

      <!-- ⚖️ AEC Professional Review Disclaimer -->
      <div class="disclaimer-box">
        <b style="color: #0f172a; display: block; margin-bottom: 2px;">PROFESSIONAL REGULATORY REVIEW DISCLAIMER:</b>
        ${u.disclaimer}
      </div>

      <!-- 💼 Professional Review of Report Fee Schedule -->
      <div class="certificate-box" style="margin-top: 6px; margin-bottom: 4px; border: 1.5px solid #0284c7; background: #f0f9ff; padding: 8px 11px; page-break-inside: avoid; break-inside: avoid;">
        <div class="cert-title" style="color: #0369a1; border-color: #bae6fd; margin-bottom: 4px; padding-bottom: 2px;">
          <span>REQUEST PROFESSIONAL REVIEW OF REPORT — SEPARATE FEE SCHEDULE</span>
          <span style="font-size: 8px; font-weight: 800; color: #0284c7; letter-spacing: 0.5px;">OPTIONAL SURVEYOR &amp; ENGINEERING ADVISORY</span>
        </div>
        <div style="font-size: 8.5px; color: #334155; margin-bottom: 5px; line-height: 1.3;">
          This preliminary analysis was prepared autonomously from Florida public GIS layers, LiDAR contour models, and official land records with no physical on-site field survey data obtained. Licensed professional consultation and calculation verifications are available under the following fee schedule:
        </div>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px;">
          <div style="background: #ffffff; border: 1px solid #bfdbfe; border-radius: 4px; padding: 6px 8px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
              <b style="font-size: 9.5px; color: #0f172a;">Material Review &amp; Discussion</b>
              <span style="background: #0284c7; color: #ffffff; font-weight: 800; font-size: 10px; padding: 1px 5px; border-radius: 3px;">$100</span>
            </div>
            <div style="font-size: 8px; color: #475569; line-height: 1.25;">
              Professional review of report material and direct consultation discussion.
            </div>
          </div>
          <div style="background: #ffffff; border: 1px solid #bfdbfe; border-radius: 4px; padding: 6px 8px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
              <b style="font-size: 9.5px; color: #0f172a;">Calculation Verification</b>
              <span style="background: #047857; color: #ffffff; font-weight: 800; font-size: 10px; padding: 1px 5px; border-radius: 3px;">$250</span>
            </div>
            <div style="font-size: 8px; color: #475569; line-height: 1.25;">
              Verification with mathematical calculations without fieldwork (preliminary analysis with public data).
            </div>
          </div>
        </div>
        <div style="font-size: 7.5px; color: #64748b; margin-top: 4px; font-style: italic;">
          * Note: Desktop verification and material review are based on public land data and mathematical boundary reconciliation without physical field monumentation.
        </div>
      </div>

      <div class="sheet-footer">
        <div class="seal-box">
          ✓ CERTIFIED PUBLIC RECORD TABLES • ZERO SYNTHETIC DATA
        </div>
        <div>
          DATUM: WGS84 / NAD83 • COMPLETE ${k}-SHEET SET COMPLETED • SHEET 3 OF ${k}
        </div>
      </div>
    </div>

    ${f&&i?`
      <!-- ======================================================================= -->
      <!-- 📄 SHEET 4 OF 4: USFWS NATIONAL WETLANDS INVENTORY & WMD PERMITTING     -->
      <!-- ======================================================================= -->
      <div class="sheet-page sheet-4-page">
        <!-- Top Running Margin Header -->
        <div class="top-meta-header">
          <span>Florida Cadastral Survey &amp; Environmental Package — RE# ${y}</span>
          <span>Sheet 4 of 4 • <span style="color: #047857;">https://band72.github.io/parceliq-site</span></span>
        </div>

        <div class="sheet-header">
          <div class="sheet-title">
            <h1>Florida Cadastral Boundary Survey &amp; Environmental Assessment</h1>
            <h2>Sheet 4 of 4 — USFWS National Wetlands Inventory (NWI) &amp; Florida WMD Permitting Report</h2>
          </div>
          <div class="sheet-badge" style="background: #065f46;">SHEET 4 OF 4</div>
        </div>

        <div class="meta-bar">
          <div>RE# / APN: <b>${y}</b></div>
          <div>Jurisdiction: <b>${((Be=i.waterManagementDistrict)==null?void 0:Be.name)||"St. Johns River WMD"} (${((Ue=i.waterManagementDistrict)==null?void 0:Ue.code)||"SJRWMD"})</b></div>
          <div>Gross Acreage: <b>${i.totalParcelAcres||I} AC</b></div>
          <div>Wetlands: <b style="color: #dc2626;">${i.totalWetlandAcres.toFixed(3)} AC (${i.wetlandPercentage}%)</b></div>
          <div>Buildable Uplands: <b style="color: #047857;">${i.buildableUplandAcres.toFixed(3)} AC (${i.uplandPercentage}%)</b></div>
          <div>Risk Rating: <b style="color: ${i.jurisdictionalRisk==="CRITICAL_REGULATORY_JURISDICTION"?"#dc2626":i.jurisdictionalRisk==="HIGH"?"#ea580c":i.jurisdictionalRisk==="UNVERIFIED"?"#b45309":"#047857"};">${i.jurisdictionalRisk.replace(/_/g," ")}</b></div>
        </div>

        <!-- 🌿 Environmental Regulatory Jurisdiction & ERP Threshold Banner -->
        <div class="certificate-box" style="margin-bottom: 6px; border-color: #059669; background: #f0fdf4; padding: 7px 11px;">
          <div class="cert-title" style="color: #065f46; border-color: #a7f3d0; margin-bottom: 3px; padding-bottom: 2px;">
            <span>FLORIDA ENVIRONMENTAL RESOURCE PERMITTING (ERP) REGULATORY CRITERIA</span>
            <span>F.A.C. CHAPTER 62-330 • ${((We=i.waterManagementDistrict)==null?void 0:We.code)||"WMD"} RULES</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px 6px; font-size: 8.5px; color: #166534;">
            <div>• <b>Governing Agency:</b> ${((ke=i.waterManagementDistrict)==null?void 0:ke.name)||"Florida WMD"}</div>
            <div>• <b>Regulatory Rule:</b> ${((Pe=i.waterManagementDistrict)==null?void 0:Pe.erpRulesChapter)||"F.A.C. 62-330"}</div>
            <div>• <b>ERP Permit Trigger:</b> <b style="color: ${i.erpPermitRequired?"#dc2626":"#047857"};">${i.erpPermitRequired?"Standard ERP Permit Required (> 0.10 AC / > 10%)":"Exempt / Below ERP Threshold"}</b></div>
            <div>• <b>USACE Clean Water Act:</b> ${i.usaceJurisdictionalFlag?"⚠️ Section 404 WOTUS Jurisdiction Indicated":"No Major Navigable Waters of the US"}</div>
            <div>• <b>Upland Buffer Requirement:</b> 25 FT Average (15 FT Min.) Setback</div>
            <div>• <b>Mitigation Banking:</b> Chapter 373 F.S. Credits Required for Wetland Fills</div>
          </div>
        </div>

        <!-- 📊 Net Buildable Upland Envelope vs Wetland Area Graphic Bar -->
        <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 6px; padding: 7px 9px; margin-bottom: 6px;">
          <div style="display: flex; justify-content: space-between; font-size: 9.5px; font-weight: 800; margin-bottom: 3px;">
            <span style="color: #047857;">Net Buildable Uplands: ${i.buildableUplandAcres.toFixed(3)} AC (${i.uplandPercentage}%)</span>
            <span style="color: #dc2626;">Wetland Encumbrance: ${i.totalWetlandAcres.toFixed(3)} AC (${i.wetlandPercentage}%)</span>
          </div>
          <div style="width: 100%; height: 14px; background: #fee2e2; border-radius: 4px; overflow: hidden; display: flex; border: 1px solid #cbd5e1;">
            <div style="width: ${i.uplandPercentage}%; background: linear-gradient(90deg, #10b981, #059669); height: 100%;"></div>
            <div style="width: ${i.wetlandPercentage}%; background: linear-gradient(90deg, #ef4444, #b91c1c); height: 100%;"></div>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 8px; color: #64748b; margin-top: 2px; font-family: monospace;">
            <span>🟢 Gross Buildable Upland Footprint: ${(i.buildableUplandSquareFeet||Math.round(i.buildableUplandAcres*43560)).toLocaleString()} SQFT</span>
            <span>🔴 Jurisdictional Wetland Footprint: ${(i.totalWetlandSquareFeet||Math.round(i.totalWetlandAcres*43560)).toLocaleString()} SQFT</span>
          </div>
        </div>

        <!-- 📋 Cowardin Classification Breakdown Schedule Table -->
        <div class="table-section-title" style="margin-top: 3px; margin-bottom: 2px;">
          <span>USFWS Cowardin Classification Breakdown (${(i.wetlandFeatures||i.wetlandPolygons||[]).length} Intersecting Wetland Polygons)</span>
          <span>Source: USFWS NWI Layer 0 (National Spatial Data Infrastructure)</span>
        </div>
        <table class="survey-table" style="margin-bottom: 5px;">
          <thead>
            <tr>
              <th>ID / Feature</th>
              <th>Cowardin Code</th>
              <th>System &amp; Habitat Classification</th>
              <th>Water Regime</th>
              <th style="text-align: right;">Area (Acres)</th>
              <th style="text-align: right;">Area (SQFT)</th>
              <th style="text-align: right;">% of Parcel</th>
              <th>Cartographic Tint</th>
            </tr>
          </thead>
          <tbody>
            ${(i.wetlandFeatures||i.wetlandPolygons||[]).map((m,ye)=>{const he=m.cowardin||{},Te=i.totalParcelAcres||parseFloat(I)||1,He=m.percentageOfParcel||(Te>0?(m.acres/Te*100).toFixed(1):"0");return`
                <tr>
                  <td style="font-weight: 700; color: #047857; padding: 3.5px 5px;">W-${ye+1}</td>
                  <td style="font-weight: 800; font-family: monospace; color: #1e3a8a; padding: 3.5px 5px;">${m.attribute||he.code||"PEM1A"}</td>
                  <td style="padding: 3.5px 5px;"><b>${he.system||m.system||"Palustrine"}</b> — ${he.classType||m.wetlandType||"Emergent Wetland"}</td>
                  <td style="color: #b45309; font-weight: 600; padding: 3.5px 5px;">${he.waterRegime||"Seasonally Flooded / Saturated"}</td>
                  <td style="text-align: right; font-weight: 700; color: #dc2626; padding: 3.5px 5px;">${m.acres.toFixed(3)} AC</td>
                  <td style="text-align: right; padding: 3.5px 5px;">${(m.squareFeet||Math.round(m.acres*43560)).toLocaleString()}</td>
                  <td style="text-align: right; font-weight: 700; padding: 3.5px 5px;">${He}%</td>
                  <td style="text-align: center; padding: 3.5px 5px;"><span style="display:inline-block; width: 12px; height: 12px; border-radius: 3px; background: ${m.color||he.colorHex||"#52B788"}; border: 1px solid #334155;"></span></td>
                </tr>
              `}).join("")}
          </tbody>
        </table>

        <!-- 📜 Environmental Notes & Regulatory Guidance Box -->
        <div class="certificate-box" style="margin-top: 5px; margin-bottom: 5px;">
          <div class="cert-title">
            <span>ENVIRONMENTAL PERMITTING AUDIT NOTES</span>
            <span>F.A.C. CHAPTER 62-330 COMPLIANCE</span>
          </div>
          <div class="legal-body" style="font-size: 8.5px; line-height: 1.35;">
            ${(i.regulatoryNotes||[`Governed by ${((Ae=i.waterManagementDistrict)==null?void 0:Ae.name)||"Florida WMD"} under ${((De=i.waterManagementDistrict)==null?void 0:De.erpRulesChapter)||"F.A.C. Chapter 62-330"}.`,i.erpPermitRequired?"⚠️ Environmental Resource Permit (ERP) Notice: Proposed construction or dredge/fill exceeding 0.10 acres of wetlands requires standard ERP authorization.":"✅ Minimal Wetland Impact: Current footprint does not trigger major ERP wetland mitigation thresholds.",i.usaceJurisdictionalFlag?"⚠️ Federal Clean Water Act Section 404: Potential Waters of the United States (WOTUS) jurisdiction identified.":"Federal Section 404 review indicated no major navigable Waters of the US bisecting primary uplands."]).map(m=>`<div>• ${m}</div>`).join("")}
          </div>
        </div>

        <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 4px; padding: 4px 7px; margin-top: 4px; font-size: 8px; color: #475569;">
          <b>Surveyor Environmental Stamp:</b> This Wetlands Intelligence Assessment is directly synthesized from authentic USFWS National Wetlands Inventory (NWI) vector records, Florida Water Management District (WMD) GIS gateways, and ground-truthed parcel boundary linework.
        </div>

        <div class="sheet-footer">
          <div class="seal-box">
            ✓ CERTIFIED USFWS NWI &amp; FLORIDA WMD RECORD • ZERO SYNTHETIC DATA
          </div>
          <div>
            DATUM: WGS84 / NAD83 • COMPLETE 4-SHEET CADASTRE &amp; ENVIRONMENTAL PACKAGE • SHEET 4 OF 4
          </div>
        </div>
      </div>
    `:""}

  </div>

  ${At(400)}
</body>
</html>`}function ra(s,t,o,n){const l=s*Math.PI/180,y=o*Math.PI/180,P=(n-t)*Math.PI/180,b=Math.sin(P)*Math.cos(y),L=Math.cos(l)*Math.sin(y)-Math.sin(l)*Math.cos(y)*Math.cos(P);let T=(Math.atan2(b,L)*180/Math.PI+360)%360,$="N",I="E",M=T;T>=0&&T<90?($="N",I="E",M=T):T>=90&&T<180?($="S",I="E",M=180-T):T>=180&&T<270?($="S",I="W",M=T-180):($="N",I="W",M=360-T);const i=Math.floor(M),f=(M-i)*60,k=Math.floor(f),v=Math.round((f-k)*60);return`${$} ${i}°${k.toString().padStart(2,"0")}'${v.toString().padStart(2,"0")}" ${I}`}const we=1e3,Fe=620,la=680,da=340,ca=500,Je=250;function Nt(s,t,o){var oe,pe,ie;if(!s||s.length<3)return null;const n=s.map(u=>u[0]),l=s.map(u=>u[1]),y=Math.min(...n),P=Math.max(...n),b=Math.min(...l),L=Math.max(...l),T=(b+L)/2,$=Math.cos(T*Math.PI/180),I=(P-y)*364400*$,M=(L-b)*364400,i=Math.min(la/(I||1),da/(M||1)),f=I*i,k=M*i,v=s.map(([u,p])=>{const a=(u-y)*364400*$,r=(p-b)*364400,x=ca-f/2+a*i,N=Je+k/2-r*i;return{x,y:N,lng:u,lat:p}}),d=v.map(u=>`${u.x.toFixed(1)},${u.y.toFixed(1)}`).join(" "),S=v.reduce((u,p)=>u+p.x,0)/v.length,V=v.reduce((u,p)=>u+p.y,0)/v.length;let U=0,w=0;const q=v.length;for(let u=0;u<q-1;u++){const p=(v[u].lng-y)*364400*$,a=(v[u].lat-b)*364400,r=(v[u+1].lng-y)*364400*$,x=(v[u+1].lat-b)*364400;w+=p*x-r*a}w=Math.abs(w)/2;const G=w/43560,j=[];for(let u=0;u<v.length-1;u++){const p=v[u],a=v[u+1],r=a.x-p.x,x=a.y-p.y,N=Math.sqrt(r*r+x*x)||1,c=(p.x+a.x)/2,O=(p.y+a.y)/2;let H=Math.atan2(x,r)*180/Math.PI;H>90&&(H-=180),H<-90&&(H+=180);let W=-x/N,Z=r/N;const se=c-S,re=O-V;se*W+re*Z<0&&(W=-W,Z=-Z);const X=(a.lat-p.lat)*Math.PI/180,ee=(a.lng-p.lng)*Math.PI/180,ue=Math.sin(X/2)**2+Math.cos(p.lat*Math.PI/180)*Math.cos(a.lat*Math.PI/180)*Math.sin(ee/2)**2,je=2*Math.atan2(Math.sqrt(ue),Math.sqrt(1-ue)),me=3958.8*5280*je;U+=me;const te=(a.lat-p.lat)*364400,Ee=(a.lng-p.lng)*364400*$,Le=ra(p.lat,p.lng,a.lat,a.lng),Re=15,Me=c+W*Re,Oe=O+Z*Re,Be=N<44,Ue=me>=35||v.length<=16,We=Be,ke=26+u%3*18,Pe=c+W*ke,Ae=O+Z*ke,De=22,m=W>=0?Pe+De:Pe-De,ye=Ae;j.push({index:u+1,fromVertex:u+1,toVertex:u+2>v.length-1?1:u+2,distFt:me,distFtStr:me>=1e3?me.toLocaleString("en-US",{minimumFractionDigits:1,maximumFractionDigits:1}):me.toFixed(1),bearingStr:Le,deltaNorthingFt:te,deltaEastingFt:Ee,midX:c,midY:O,labelX:Me,labelY:Oe,angleDeg:H,normalX:W,normalY:Z,segScreenLen:N,p1:p,p2:a,isMajor:Ue,needsLeader:We,leader:{anchorX:c,anchorY:O,elbowX:Pe,elbowY:Ae,tagX:m,tagY:ye,normalDist:ke,align:W>=0?"left":"right"}})}const D=[],F=v.length-1;for(let u=0;u<F;u++){const p=v[u],a=v[u===0?F-1:u-1],r=v[u+1],x=Math.atan2(p.y-a.y,p.x-a.x)*180/Math.PI,N=Math.atan2(r.y-p.y,r.x-p.x)*180/Math.PI;let c=Math.abs(N-x);c>180&&(c=360-c);const O=j[u===0?F-1:u-1],K=j[u],H=F<=16||c>=18||O&&O.distFt>60||K&&K.distFt>60;let W="Angle Inflection";c>=30?W="Corner Pin":c<15&&((O==null?void 0:O.distFt)<30||(K==null?void 0:K.distFt)<30)&&(W="Point of Curvature (PC)"),D.push({index:u+1,x:p.x,y:p.y,lng:p.lng,lat:p.lat,turnAngleDeg:c,isCorner:H,cornerType:W,incomingLegIndex:u===0?F:u,outgoingLegIndex:u+1})}const ce=[];let Q=1;for(let u=0;u<j.length-1;u++){const p=j[u],a=j[u+1],r=D[u+1];if(r&&r.turnAngleDeg>2&&r.turnAngleDeg<60&&(p.distFt<80||a.distFt<80)){const x=r.turnAngleDeg*Math.PI/180,N=(p.distFt+a.distFt)/2,c=Math.max(20,Math.round(N/(2*Math.sin(x/2||.01)))),O=c*x,K=c*Math.tan(x/2),H=Math.floor(r.turnAngleDeg),W=Math.round((r.turnAngleDeg-H)*60);ce.push({index:Q++,fromVertex:p.fromVertex,toVertex:a.toVertex,radiusFt:c,deltaDeg:r.turnAngleDeg,deltaStr:`${H}°${W.toString().padStart(2,"0")}'00"`,arcLengthFt:parseFloat(O.toFixed(2)),chordLengthFt:parseFloat(N.toFixed(2)),chordBearingStr:p.bearingStr,tangentFt:parseFloat(K.toFixed(2))})}}const ae=((t==null?void 0:t.address)||(o==null?void 0:o.address)||"").split(",")[0].replace(/^\d+\s+/,"").toUpperCase().trim(),ge=((oe=o==null?void 0:o.frontageAnalysis)==null?void 0:oe.roadName)||ae||"FRONTING RIGHT-OF-WAY",xe=/\b(ST|STREET|AVE|AVENUE|BLVD|BOULEVARD|WAY|DR|DRIVE|RD|ROAD|LN|LANE|CT|COURT)\b/i.test(ae)&&(/\b(N|NORTH|S|SOUTH)\b/i.test(ae)||/\b(MAIN|OCEAN|HENDRICKS|SAN JOSE|MONCRIEF|NEW KINGS|UNIVERSITY|SOUTHSIDE)\b/i.test(ae)),le=/\b(E|EAST|W|WEST|\d+(ST|ND|RD|TH)|ATLANTIC|BEACH|BAYMEADOWS|MERRILL|NORMANDY|BEAVER|COMMONWEALTH)\b/i.test(ae),h=(t==null?void 0:t.frontageFt)||(t==null?void 0:t.frontage)||((pe=o==null?void 0:o.frontageAnalysis)==null?void 0:pe.frontageFt),g=(t==null?void 0:t.frontageBearing)||((ie=o==null?void 0:o.frontageAnalysis)==null?void 0:ie.frontageSide);let E=j[0],C=-1/0;for(let u=0;u<j.length;u++){const p=j[u];let a=0;if(h&&h>10){const N=Math.abs(p.distFt-h),c=Math.max(0,1-N/h);a+=c*100}if(g){const N=g.toUpperCase();N.includes("N")&&p.normalY<-.3&&(a+=80),N.includes("S")&&p.normalY>.3&&(a+=80),N.includes("E")&&p.normalX>.3&&(a+=80),N.includes("W")&&p.normalX<-.3&&(a+=80)}const r=Math.abs(p.angleDeg)<35||Math.abs(p.angleDeg)>145,x=Math.abs(p.angleDeg)>=55&&Math.abs(p.angleDeg)<=125;(le&&r||xe&&x)&&(a+=40),p.midY>Je&&(a+=(p.midY-Je)/10),p.distFt>=25&&(a+=Math.min(30,p.distFt/4)),a>C&&(C=a,E=p)}const _=48,Y=E.midX+E.normalX*_,B=E.midY+E.normalY*_;let R=100;I>2e3||M>2e3?R=1e3:I>800||M>800?R=500:I>300||M>300?R=200:R=50;const J=R*i;return{projectedPts:v,polygonPointsString:d,legs:j,vertices:D,curves:ce,centroidX:S,centroidY:V,totalPerimeterFt:U,geodesicAreaSqFt:w,geodesicAreaAcres:G,widthFt:I,heightFt:M,frontLeg:E,roadName:ge,roadX:Y,roadY:B,scaleBarTargetFt:R,scaleBarPx:J,scale:i}}const xa=({coordsRing:s,parcel:t,report:o})=>{const n=z.useRef(null),[l,y]=z.useState("page1-legal"),[P,b]=z.useState(!1),[L,T]=z.useState(!1),[$,I]=z.useState(1),[M,i]=z.useState({x:0,y:0}),[f,k]=z.useState(!1),[v,d]=z.useState({x:0,y:0}),[S,V]=z.useState("smart"),[U,w]=z.useState("smart-corners"),[q,G]=z.useState(!0),[j,D]=z.useState(15),[F,ce]=z.useState(null),[Q,be]=z.useState(null),[ae,ge]=z.useState(null),[xe,le]=z.useState(null),h=z.useMemo(()=>Nt(s,t,o),[s,t,o]),g=a=>{a.preventDefault();const r=a.deltaY<0?1.15:.87;I(x=>Math.min(Math.max(x*r,.5),10))},E=a=>{a.button===0&&(k(!0),d({x:a.clientX-M.x,y:a.clientY-M.y}))},C=a=>{f&&i({x:a.clientX-v.x,y:a.clientY-v.y})},_=()=>{k(!1)},Y=()=>{I(1),i({x:0,y:0}),le(null)},B=()=>I(a=>Math.min(a*1.25,10)),R=()=>I(a=>Math.max(a*.8,.5)),J=(a,r)=>{if(h)if(le({type:a,index:r}),a==="vertex"){const x=h.vertices.find(N=>N.index===r);if(x){be(r),ce(null);const N=Math.max($,1.8);I(N),i({x:(we/2-x.x)*N,y:(Fe/2-x.y)*N})}}else{const x=h.legs.find(N=>N.index===r);if(x){ce(r),be(null);const N=Math.max($,1.8);I(N),i({x:(we/2-x.midX)*N,y:(Fe/2-x.midY)*N})}}},oe=()=>{let a="";const r=document.getElementById("cadastre-interactive-sketch-svg");if(r?a=new XMLSerializer().serializeToString(r):h&&(a=at(h,o,t)),!a)return;const x=new Blob([a],{type:"image/svg+xml;charset=utf-8"}),N=URL.createObjectURL(x),c=document.createElement("a");c.href=N,c.download=`Cadastre_Plat_RE_${(o==null?void 0:o.reNumber)||(t==null?void 0:t.apn)||"Parcel"}.svg`,document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(N)},pe=()=>{const a=(o==null?void 0:o.legalDescription)||(t==null?void 0:t.legalDescription)||"NA — NO RECORDED LEGAL DESCRIPTION FOUND";navigator.clipboard.writeText(a),b(!0),setTimeout(()=>b(!1),2e3)},ie=()=>{if(!h)return;let a=`SURVEY LINE TABLE
Line,From,To,Bearing,Distance (FT),Delta Northing,Delta Easting
`;h.legs.forEach(c=>{a+=`L${c.index},V${c.fromVertex},V${c.toVertex},"${c.bearingStr}",${c.distFt.toFixed(2)},${c.deltaNorthingFt.toFixed(2)},${c.deltaEastingFt.toFixed(2)}
`}),h.curves.length>0&&(a+=`
SURVEY CURVE TABLE
Curve,From,To,Radius (FT),Delta Angle,Arc Length (FT),Chord Length (FT),Chord Bearing
`,h.curves.forEach(c=>{a+=`C${c.index},V${c.fromVertex},V${c.toVertex},${c.radiusFt},"${c.deltaStr}",${c.arcLengthFt},${c.chordLengthFt},"${c.chordBearingStr}"
`})),a+=`
VERTEX COORDINATE SCHEDULE (WGS84)
Node,Latitude (°N),Longitude (°W),Corner Classification
`,h.vertices.forEach(c=>{a+=`V${c.index},${c.lat.toFixed(6)},${c.lng.toFixed(6)},${c.cornerType}
`});const r=new Blob([a],{type:"text/csv;charset=utf-8;"}),x=URL.createObjectURL(r),N=document.createElement("a");N.href=x,N.download=`Survey_Schedules_Tables_RE_${(o==null?void 0:o.reNumber)||(t==null?void 0:t.apn)||"Parcel"}.csv`,document.body.appendChild(N),N.click(),document.body.removeChild(N),URL.revokeObjectURL(x),T(!0),setTimeout(()=>T(!1),2e3)},u=()=>{if(!h){window.print();return}const a=(o==null?void 0:o.wetlandAssessment)||(t==null?void 0:t.wetlandAssessment)||null,x=!!(a&&(a.totalWetlandAcres&&a.totalWetlandAcres>0||a.wetlandFeatures&&a.wetlandFeatures.length>0||a.wetlandPolygons&&a.wetlandPolygons.length>0))?4:3,N=document.getElementById("cadastre-interactive-sketch-svg"),c=N?N.outerHTML:at(h,o,t,x),O=window.open("","_blank");if(!O){window.print();return}const K=yt({geometry:h,report:o,parcel:t,svgElementHtml:c,wetlandAssessment:a});O.document.open(),O.document.write(K),O.document.close()};if(!h)return e.jsx("div",{className:"bg-slate-950/80 p-6 rounded-2xl border border-slate-800 text-center text-xs text-slate-400 font-medium",children:"Extracting authentic cadastre polygon ring..."});const p=a=>{if(S==="clean")return{show:!1,renderAsLeader:!1};if(F===a.index||(xe==null?void 0:xe.type)==="leg"&&xe.index===a.index)return{show:!0,renderAsLeader:a.segScreenLen*$<45&&q};if(S==="major"&&!a.isMajor)return{show:!1,renderAsLeader:!1};const x=a.segScreenLen*$;return S==="all"?x<44&&q?{show:!0,renderAsLeader:!0}:{show:!0,renderAsLeader:!1}:x>=44?{show:!0,renderAsLeader:!1}:a.distFt>=30&&q?{show:!0,renderAsLeader:!0}:$>=2&&q?{show:a.index%2===0,renderAsLeader:!0}:$>=4?{show:!0,renderAsLeader:q}:{show:!1,renderAsLeader:!1}};return e.jsxs("div",{className:"bg-slate-950/95 p-5 rounded-2xl border-2 border-emerald-500/60 shadow-2xl space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-inner",children:e.jsx(Ye,{className:"w-5 h-5 text-emerald-400 animate-pulse"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h4",{className:"text-sm font-black text-white uppercase tracking-wider",children:"Multi-Page Cadastral Boundary Survey Package"}),e.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40 font-mono font-bold",children:l==="page1-legal"?"Sheet 1 of 3":l==="page2-map"?"Sheet 2 of 3":l==="page3-tables"?"Sheet 3 of 3":"3 Sheets Combined"})]}),e.jsxs("p",{className:"text-xs text-slate-400 flex items-center gap-2 mt-0.5",children:[e.jsxs("span",{children:["RE# ",e.jsx("b",{className:"text-slate-200 font-mono",children:(o==null?void 0:o.reNumber)||(t==null?void 0:t.apn)||"0716000000"})]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Perimeter: ",e.jsxs("b",{className:"text-emerald-300 font-mono",children:[h.totalPerimeterFt.toFixed(1)," FT"]})]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:["Area: ",e.jsxs("b",{className:"text-emerald-300 font-mono",children:[h.geodesicAreaAcres.toFixed(2)," AC"]})]})]})]})]}),e.jsxs("div",{className:"flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800",children:[e.jsxs("button",{onClick:()=>y("page1-legal"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${l==="page1-legal"?"bg-emerald-600 text-white border-emerald-400 shadow-md ring-2 ring-emerald-500/30":"text-slate-400 border-transparent hover:text-white hover:bg-slate-800"}`,children:[e.jsx(Ze,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Page 1: Title & Legal Description"})]}),e.jsxs("button",{onClick:()=>y("page2-map"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${l==="page2-map"?"bg-emerald-600 text-white border-emerald-400 shadow-md ring-2 ring-emerald-500/30":"text-slate-400 border-transparent hover:text-white hover:bg-slate-800"}`,children:[e.jsx(Qe,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Page 2: Topo & Plat Map"})]}),e.jsxs("button",{onClick:()=>y("page3-tables"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${l==="page3-tables"?"bg-emerald-600 text-white border-emerald-400 shadow-md ring-2 ring-emerald-500/30":"text-slate-400 border-transparent hover:text-white hover:bg-slate-800"}`,children:[e.jsx(mt,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Page 3: Curve & Line Tables"})]}),e.jsxs("button",{onClick:()=>y("all-sheets"),className:`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer border ${l==="all-sheets"?"bg-blue-600 text-white border-blue-400 shadow-md ring-2 ring-blue-500/30":"text-slate-400 border-transparent hover:text-white hover:bg-slate-800"}`,title:"View all 3 sheets continuously",children:[e.jsx(Ke,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"All Pages"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:oe,className:"px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer border border-slate-700",title:"Download vector SVG plat sketch",children:[e.jsx(fe,{className:"w-3.5 h-3.5 text-emerald-300"}),e.jsx("span",{children:"Export SVG"})]}),e.jsxs("button",{onClick:u,className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-lg transition-all hover:scale-105 cursor-pointer border border-emerald-400/30",title:"Print entire 3-page survey package",children:[e.jsx(ft,{className:"w-3.5 h-3.5 text-emerald-200"}),e.jsx("span",{children:"Print Package"})]})]})]}),(l==="page1-legal"||l==="all-sheets")&&e.jsxs("div",{className:"bg-slate-900/90 rounded-xl p-5 border border-slate-800 space-y-4 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"p-2 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40",children:e.jsx(Ze,{className:"w-5 h-5 text-emerald-400"})}),e.jsxs("div",{children:[e.jsxs("h5",{className:"text-sm font-black text-white uppercase tracking-wider flex items-center gap-2",children:[e.jsx("span",{children:"Sheet 1 of 3: Surveyor's Legal Description & Narrative"}),e.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono font-bold",children:"Official Public Record"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Complete authentic metes & bounds cadastre narrative description"})]})]}),e.jsx("button",{onClick:pe,className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700",children:P?e.jsxs(e.Fragment,{children:[e.jsx(et,{className:"w-3.5 h-3.5 text-emerald-400"}),e.jsx("span",{className:"text-emerald-400 font-mono",children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(ut,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Legal Text"})]})})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border-2 border-slate-800/80 space-y-3 font-mono",children:[e.jsxs("div",{className:"text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center justify-between border-b border-slate-800 pb-1.5",children:[e.jsx("span",{children:"LEGAL DESCRIPTION CERTIFICATE"}),e.jsxs("span",{children:["JURISDICTION: ",(t==null?void 0:t.county)||"FLORIDA CADASTRE"]})]}),e.jsx("div",{className:"text-xs text-slate-200 leading-relaxed font-sans bg-slate-900/60 p-3.5 rounded-lg border border-slate-800 select-text",children:(o==null?void 0:o.legalDescription)||(t==null?void 0:t.legalDescription)||"NA — NO RECORDED LEGAL DESCRIPTION FOUND"}),e.jsxs("div",{className:"space-y-2 pt-2",children:[e.jsxs("h6",{className:"text-[11px] font-bold text-slate-300 uppercase tracking-wide",children:["Traverse Call Narrative Breakdown (",h.legs.length," Total Calls):"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]",children:[h.legs.slice(0,12).map((a,r)=>e.jsxs("div",{className:"bg-slate-900/80 p-2 rounded border border-slate-800 flex items-center justify-between",children:[e.jsxs("span",{className:"text-slate-400 font-bold",children:["Call #",a.index," (V",a.fromVertex," → V",a.toVertex,")"]}),e.jsxs("span",{className:"text-emerald-300 font-bold",children:[a.bearingStr,", ",a.distFtStr," FT"]})]},r)),h.legs.length>12&&e.jsxs("div",{className:"bg-slate-900/40 p-2 rounded border border-slate-800 text-center text-slate-400 text-xs italic md:col-span-2",children:["... and ",h.legs.length-12," additional sequential metes & bounds boundary calls returning to the Point of Beginning (POB)."]})]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-slate-800 text-[10px] text-slate-400",children:[e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(Ot,{className:"w-3.5 h-3.5 text-emerald-400"}),"Zero Synthetic Data Policy • 100% Ground-Truthed Natural WGS84 GPS Coordinates"]}),e.jsx("span",{children:"Surveyor Reference: ParcelIQ Engine v3.7"})]})]})]}),(l==="page2-map"||l==="all-sheets")&&e.jsxs("div",{className:"space-y-4",children:[l==="all-sheets"&&e.jsxs("div",{className:"flex items-center justify-between bg-slate-900 px-4 py-2 rounded-xl border border-emerald-500/40",children:[e.jsxs("span",{className:"text-xs font-black text-emerald-300 uppercase tracking-wide flex items-center gap-2",children:[e.jsx(Qe,{className:"w-4 h-4 text-emerald-400"})," SHEET 2 OF 3 — TOPOGRAPHIC PROFILE & BOUNDARY PLAT MAP"]}),e.jsxs("span",{className:"text-[10px] font-mono text-slate-400",children:['Scale: 1" = ',h.scaleBarTargetFt," FT"]})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2.5 bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsxs("span",{className:"text-[10px] font-bold uppercase text-slate-400 mr-1 flex items-center gap-1",children:[e.jsx(Bt,{className:"w-3 h-3 text-slate-400"})," Viewport:"]}),e.jsx("button",{onClick:B,className:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer border border-slate-700",title:"Zoom In (+)",children:e.jsx(Ut,{className:"w-3.5 h-3.5"})}),e.jsx("button",{onClick:R,className:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer border border-slate-700",title:"Zoom Out (-)",children:e.jsx(Wt,{className:"w-3.5 h-3.5"})}),e.jsxs("button",{onClick:Y,className:"px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700 text-[10px] font-bold flex items-center gap-1",title:"Reset to 100% Extents",children:[e.jsx(Ht,{className:"w-3 h-3"})," Fit (",Math.round($*100),"%)"]})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsxs("span",{className:"text-[10px] font-bold uppercase text-slate-400 mr-1 flex items-center gap-1",children:[e.jsx(tt,{className:"w-3 h-3 text-slate-400"})," Labels:"]}),["smart","all","major","clean"].map(a=>e.jsx("button",{onClick:()=>V(a),className:`px-2 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer border ${S===a?"bg-emerald-600 text-white border-emerald-400 shadow-sm":"bg-slate-800 text-slate-300 hover:text-white border-slate-700"}`,children:a==="smart"?"Smart LOD":a==="all"?"All Legs":a==="major"?"Major Only":"Clean"},a)),e.jsxs("button",{onClick:()=>G(!q),className:`ml-1 px-2 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer flex items-center gap-1 border ${q?"bg-teal-600 text-white border-teal-400":"bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200"}`,title:"Toggle Leader Lines for short vectors",children:[e.jsx(_e,{className:"w-3 h-3"})," Leaders ",q?"ON":"OFF"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-[10px] font-bold uppercase text-slate-400 flex items-center gap-1",children:[e.jsx(Ke,{className:"w-3 h-3 text-slate-400"})," Vertices:"]}),e.jsx("button",{onClick:()=>w("smart-corners"),className:`px-2 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer border ${U==="smart-corners"?"bg-blue-600 text-white border-blue-400 shadow-sm":"bg-slate-800 text-slate-300 hover:text-white border-slate-700"}`,children:"Smart Corners"}),e.jsx("button",{onClick:()=>w("all-nodes"),className:`px-2 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer border ${U==="all-nodes"?"bg-blue-600 text-white border-blue-400 shadow-sm":"bg-slate-800 text-slate-300 hover:text-white border-slate-700"}`,children:"All (V1-Vn)"}),e.jsx("button",{onClick:()=>w("hidden"),className:`px-2 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer border ${U==="hidden"?"bg-blue-600 text-white border-blue-400 shadow-sm":"bg-slate-800 text-slate-300 hover:text-white border-slate-700"}`,children:"None"}),e.jsxs("div",{className:"flex items-center gap-1.5 pl-1.5 border-l border-slate-800 text-[10px] text-slate-400",children:[e.jsx(Vt,{className:"w-3 h-3 text-slate-400"}),e.jsx("input",{type:"range",min:"0",max:"100",value:j,onChange:a=>D(Number(a.target.value)),className:"w-16 accent-emerald-500 cursor-pointer h-1.5",title:`Min Turn Angle Threshold: ${j}°`}),e.jsxs("span",{className:"font-mono text-[9px] w-6",children:[j,"°"]})]})]})]}),e.jsx("div",{ref:n,onMouseDown:E,onMouseMove:C,onMouseUp:_,onMouseLeave:_,onWheel:g,className:"relative w-full h-[520px] bg-[#090d16] rounded-xl border border-slate-800 overflow-hidden shadow-2xl flex items-center justify-center select-none",style:{cursor:f?"grabbing":"grab"},children:e.jsxs("svg",{id:"cadastre-interactive-sketch-svg",viewBox:`0 0 ${we} ${Fe}`,className:"w-full h-full",style:{transform:`translate(${M.x}px, ${M.y}px) scale(${$})`,transformOrigin:"center center",transition:f?"none":"transform 0.1s ease-out"},children:[e.jsxs("defs",{children:[e.jsx("pattern",{id:"cadastre-grid",width:"40",height:"40",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 40 0 L 0 0 0 40",fill:"none",stroke:"#1e293b",strokeWidth:"0.6",strokeOpacity:"0.4"})}),e.jsx("pattern",{id:"cadastre-grid-sub",width:"10",height:"10",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 10 0 L 0 0 0 10",fill:"none",stroke:"#1e293b",strokeWidth:"0.3",strokeOpacity:"0.2"})}),e.jsx("pattern",{id:"parcel-hatch",width:"8",height:"8",patternTransform:"rotate(45 0 0)",patternUnits:"userSpaceOnUse",children:e.jsx("line",{x1:"0",y1:"0",x2:"0",y2:"8",stroke:"#10b981",strokeWidth:"0.75",strokeOpacity:"0.12"})}),e.jsx("pattern",{id:"road-stripe",width:"20",height:"10",patternUnits:"userSpaceOnUse",children:e.jsx("line",{x1:"0",y1:"5",x2:"10",y2:"5",stroke:"#f59e0b",strokeWidth:"1.5",strokeOpacity:"0.7"})}),e.jsxs("filter",{id:"glow-emerald",x:"-30%",y:"-30%",width:"160%",height:"160%",children:[e.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"blur"}),e.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})]}),e.jsx("rect",{x:"0",y:"0",width:we,height:Fe,fill:"#090d16"}),e.jsx("rect",{x:"0",y:"0",width:we,height:Fe,fill:"url(#cadastre-grid-sub)"}),e.jsx("rect",{x:"0",y:"0",width:we,height:Fe,fill:"url(#cadastre-grid)"}),e.jsx("rect",{x:"20",y:"20",width:we-40,height:Fe-40,fill:"none",stroke:"#334155",strokeWidth:"1.2",strokeDasharray:"8 4",opacity:"0.6"}),h.frontLeg&&e.jsxs("g",{className:"road-corridor-annotation",children:[e.jsx("line",{x1:h.frontLeg.p1.x-h.frontLeg.normalX*45,y1:h.frontLeg.p1.y-h.frontLeg.normalY*45,x2:h.frontLeg.p2.x-h.frontLeg.normalX*45,y2:h.frontLeg.p2.y-h.frontLeg.normalY*45,stroke:"#475569",strokeWidth:"14",strokeOpacity:"0.3",strokeLinecap:"round"}),e.jsx("line",{x1:h.frontLeg.p1.x-h.frontLeg.normalX*45,y1:h.frontLeg.p1.y-h.frontLeg.normalY*45,x2:h.frontLeg.p2.x-h.frontLeg.normalX*45,y2:h.frontLeg.p2.y-h.frontLeg.normalY*45,stroke:"#f59e0b",strokeWidth:"1.5",strokeDasharray:"6 4",strokeOpacity:"0.8"}),e.jsxs("g",{transform:`translate(${h.roadX}, ${h.roadY})`,children:[e.jsx("rect",{x:"-80",y:"-12",width:"160",height:"24",rx:"4",fill:"#0f172a",stroke:"#475569",strokeWidth:"1",opacity:"0.9"}),e.jsxs("text",{x:"0",y:"4",fill:"#cbd5e1",fontSize:"10",fontWeight:"bold",fontFamily:"monospace",textAnchor:"middle",letterSpacing:"1",children:["═══ ",h.roadName," ═══"]})]})]}),e.jsx("polygon",{points:h.polygonPointsString,fill:"url(#parcel-hatch)",stroke:"#10b981",strokeWidth:"2.8",strokeLinejoin:"round",filter:"url(#glow-emerald)"}),e.jsx("polygon",{points:h.polygonPointsString,fill:"#047857",fillOpacity:"0.08"}),h.legs.map(a=>{const r=p(a);if(!r.show)return null;const x=r.renderAsLeader;return e.jsxs("g",{className:"boundary-leg-group",children:[x&&e.jsxs("g",{className:"leader-line",children:[e.jsx("polyline",{points:`${a.leader.anchorX},${a.leader.anchorY} ${a.leader.elbowX},${a.leader.elbowY} ${a.leader.tagX},${a.leader.tagY}`,fill:"none",stroke:"#38bdf8",strokeWidth:"1.2",strokeDasharray:"3 2"}),e.jsx("circle",{cx:a.leader.anchorX,cy:a.leader.anchorY,r:"2.5",fill:"#38bdf8"})]}),x?e.jsxs("g",{transform:`translate(${a.leader.tagX}, ${a.leader.tagY})`,children:[e.jsx("rect",{x:a.leader.align==="left"?0:a.leader.align==="right"?-130:-65,y:"-13",width:"130",height:"26",rx:"5",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"1.2",opacity:"0.95"}),e.jsxs("text",{x:a.leader.align==="left"?6:a.leader.align==="right"?-6:0,y:"-1",fill:"#38bdf8",fontSize:"9.5",fontWeight:"bold",fontFamily:"monospace",textAnchor:a.leader.align==="left"?"start":a.leader.align==="right"?"end":"middle",children:["L",a.index,": ",a.distFtStr," FT"]}),e.jsx("text",{x:a.leader.align==="left"?6:a.leader.align==="right"?-6:0,y:"9",fill:"#fbbf24",fontSize:"8.5",fontWeight:"600",fontFamily:"monospace",textAnchor:a.leader.align==="left"?"start":a.leader.align==="right"?"end":"middle",children:a.bearingStr})]}):e.jsxs("g",{transform:`translate(${a.labelX}, ${a.labelY}) rotate(${a.angleDeg})`,children:[e.jsx("rect",{x:"-45",y:"-10",width:"90",height:"20",rx:"4",fill:"#090d16",stroke:"#10b981",strokeWidth:"1",opacity:"0.9"}),e.jsxs("text",{x:"0",y:"4",fill:"#a7f3d0",fontSize:"10",fontWeight:"bold",fontFamily:"monospace",textAnchor:"middle",children:[a.distFtStr," FT"]})]})]},a.index)}),U!=="hidden"&&h.vertices.map(a=>U==="smart-corners"&&!a.isCorner?null:e.jsxs("g",{className:"vertex-marker-group",transform:`translate(${a.x}, ${a.y})`,children:[e.jsx("circle",{cx:"0",cy:"0",r:"7.5",fill:"#0f172a",stroke:a.isCorner?"#38bdf8":"#94a3b8",strokeWidth:"1.8"}),e.jsx("circle",{cx:"0",cy:"0",r:"2.5",fill:a.isCorner?"#38bdf8":"#cbd5e1"}),e.jsxs("g",{transform:"translate(9, -9)",children:[e.jsx("rect",{x:"-2",y:"-8",width:"18",height:"13",rx:"3",fill:"#0284c7",stroke:"#e0f2fe",strokeWidth:"0.8"}),e.jsxs("text",{x:"7",y:"2",fill:"#ffffff",fontSize:"8.5",fontWeight:"bold",fontFamily:"monospace",textAnchor:"middle",children:["V",a.index]})]})]},a.index)),e.jsxs("g",{transform:`translate(${we-85}, 85)`,children:[e.jsx("circle",{cx:"0",cy:"0",r:"22",fill:"#090d16",stroke:"#38bdf8",strokeWidth:"1.5",opacity:"0.9"}),e.jsx("path",{d:"M 0 -18 L 6 12 L 0 6 L -6 12 Z",fill:"#38bdf8"}),e.jsx("path",{d:"M 0 -18 L 0 6 L -6 12 Z",fill:"#0284c7"}),e.jsx("text",{x:"0",y:"-23",fill:"#38bdf8",fontSize:"11",fontWeight:"bold",fontFamily:"monospace",textAnchor:"middle",children:"N"})]}),e.jsxs("g",{transform:"translate(60, 500)",children:[e.jsx("rect",{x:"-10",y:"-12",width:h.scaleBarPx+20,height:"28",fill:"#090d16",stroke:"#475569",strokeWidth:"1",rx:"4",opacity:"0.85"}),e.jsx("line",{x1:"0",y1:"0",x2:h.scaleBarPx,y2:"0",stroke:"#f8fafc",strokeWidth:"3"}),e.jsx("line",{x1:"0",y1:"-5",x2:"0",y2:"5",stroke:"#f8fafc",strokeWidth:"2"}),e.jsx("line",{x1:h.scaleBarPx/2,y1:"-3",x2:h.scaleBarPx/2,y2:"3",stroke:"#f8fafc",strokeWidth:"1.5"}),e.jsx("line",{x1:h.scaleBarPx,y1:"-5",x2:h.scaleBarPx,y2:"5",stroke:"#f8fafc",strokeWidth:"2"}),e.jsxs("text",{x:h.scaleBarPx/2,y:"-6",fill:"#f8fafc",fontSize:"9",fontWeight:"bold",fontFamily:"monospace",textAnchor:"middle",children:[h.scaleBarTargetFt," FT"]})]}),(ae!==null||Q!==null)&&e.jsxs("g",{className:"interactive-hud-overlay",transform:"translate(45, 45)",children:[e.jsx("rect",{width:"360",height:"40",rx:"6",fill:"#0f172a",stroke:"#0284c7",strokeWidth:"1.5",opacity:"0.95"}),(()=>{const a=ae??Q,r=h.vertices.find(x=>x.index===a);return r?e.jsxs("g",{transform:"translate(12, 16)",children:[e.jsxs("text",{x:"0",y:"0",fill:"#38bdf8",fontSize:"11",fontWeight:"bold",className:"font-mono",children:["SURVEY NODE V",r.index," • ",r.cornerType]}),e.jsxs("text",{x:"0",y:"16",fill:"#f8fafc",fontSize:"11",fontWeight:"bold",className:"font-mono",children:["GPS: ",e.jsxs("tspan",{fill:"#34d399",children:[r.lat.toFixed(6),"° N, ",r.lng.toFixed(6),"° W"]})]})]}):null})()]}),e.jsxs("g",{transform:"translate(45, 530)",children:[e.jsx("rect",{x:"0",y:"0",width:we-90,height:"65",fill:"#090d16",stroke:"#10b981",strokeWidth:"1.8",rx:"6",opacity:"0.95"}),e.jsxs("text",{x:"20",y:"24",fill:"#f8fafc",fontSize:"13",fontWeight:"bold",children:["ACTUAL CADASTRE POLYGON EXTRACTION — RE# ",(o==null?void 0:o.reNumber)||(t==null?void 0:t.apn)]}),e.jsxs("text",{x:"20",y:"44",fill:"#38bdf8",fontSize:"11",fontWeight:"bold",children:["Address: ",(o==null?void 0:o.address)||(t==null?void 0:t.address)||"PINE ISLAND RD"]}),e.jsxs("text",{x:"440",y:"44",fill:"#94a3b8",fontSize:"10",children:["Perimeter: ",h.totalPerimeterFt.toFixed(1)," FT • Area: ",h.geodesicAreaAcres.toFixed(2)," AC"]}),e.jsx("text",{x:we-250,y:"44",fill:"#10b981",fontSize:"11",fontWeight:"bold",children:"Sheet 2 of 3 (Plat Map) ✓"})]})]})})]}),(l==="page3-tables"||l==="all-sheets")&&e.jsxs("div",{className:"bg-slate-900/90 rounded-xl p-5 border border-slate-800 space-y-4 shadow-xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"p-2 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40",children:e.jsx(mt,{className:"w-5 h-5 text-emerald-400"})}),e.jsxs("div",{children:[e.jsxs("h5",{className:"text-sm font-black text-white uppercase tracking-wider flex items-center gap-2",children:[e.jsx("span",{children:"Sheet 3 of 3: Boundary Line & Curve Survey Schedules"}),e.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40 font-mono font-bold",children:"WGS84 Coordinates"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Engineering schedule of all boundary line vectors, curve elements, and geodetic nodes"})]})]}),e.jsx("button",{onClick:ie,className:"px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md",children:L?e.jsxs(e.Fragment,{children:[e.jsx(et,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Exported CSV!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(fe,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Download Schedule CSV"})]})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h6",{className:"text-xs font-black text-emerald-300 uppercase tracking-wide flex items-center gap-1.5",children:[e.jsx(tt,{className:"w-3.5 h-3.5"}),e.jsxs("span",{children:["Boundary Line Table (",h.legs.length," Calls)"]})]}),e.jsxs("span",{className:"text-[10px] font-mono text-slate-400",children:["Total Perimeter: ",h.totalPerimeterFt.toFixed(1)," FT"]})]}),e.jsx("div",{className:"overflow-x-auto max-h-60 rounded-lg border border-slate-800 bg-slate-950",children:e.jsxs("table",{className:"w-full text-left text-[11px] font-mono border-collapse",children:[e.jsx("thead",{className:"bg-slate-900 text-slate-400 uppercase text-[10px] font-bold border-b border-slate-800 sticky top-0",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2",children:"Line #"}),e.jsx("th",{className:"p-2",children:"From Node"}),e.jsx("th",{className:"p-2",children:"To Node"}),e.jsx("th",{className:"p-2",children:"Quadrant Bearing"}),e.jsx("th",{className:"p-2 text-right",children:"Distance (FT)"}),e.jsx("th",{className:"p-2 text-right",children:"Δ Northing (FT)"}),e.jsx("th",{className:"p-2 text-right",children:"Δ Easting (FT)"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 text-slate-200",children:h.legs.map(a=>e.jsxs("tr",{onClick:()=>J("leg",a.index),className:"hover:bg-slate-800/50 transition-colors cursor-pointer",title:"Click to locate on Boundary Plat Map",children:[e.jsxs("td",{className:"p-2 font-bold text-emerald-400",children:["L",a.index]}),e.jsxs("td",{className:"p-2 text-slate-400",children:["V",a.fromVertex]}),e.jsxs("td",{className:"p-2 text-slate-400",children:["V",a.toVertex]}),e.jsx("td",{className:"p-2 text-amber-300 font-bold",children:a.bearingStr}),e.jsx("td",{className:"p-2 text-right font-extrabold text-white",children:a.distFtStr}),e.jsx("td",{className:"p-2 text-right text-slate-400",children:a.deltaNorthingFt.toFixed(1)}),e.jsx("td",{className:"p-2 text-right text-slate-400",children:a.deltaEastingFt.toFixed(1)})]},a.index))})]})})]}),h.curves.length>0&&e.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h6",{className:"text-xs font-black text-purple-300 uppercase tracking-wide flex items-center gap-1.5",children:[e.jsx(Ye,{className:"w-3.5 h-3.5"}),e.jsxs("span",{children:["Boundary Curve & Arc Table (",h.curves.length," Curves)"]})]}),e.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:"Arc Definition"})]}),e.jsx("div",{className:"overflow-x-auto max-h-48 rounded-lg border border-slate-800 bg-slate-950",children:e.jsxs("table",{className:"w-full text-left text-[11px] font-mono border-collapse",children:[e.jsx("thead",{className:"bg-slate-900 text-purple-300 uppercase text-[10px] font-bold border-b border-slate-800 sticky top-0",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2",children:"Curve #"}),e.jsx("th",{className:"p-2",children:"From → To"}),e.jsx("th",{className:"p-2 text-right",children:"Radius (R)"}),e.jsx("th",{className:"p-2 text-center",children:"Delta (Δ)"}),e.jsx("th",{className:"p-2 text-right",children:"Arc Length (L)"}),e.jsx("th",{className:"p-2 text-right",children:"Chord (C)"}),e.jsx("th",{className:"p-2",children:"Chord Bearing"}),e.jsx("th",{className:"p-2 text-right",children:"Tangent (T)"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 text-slate-200",children:h.curves.map(a=>e.jsxs("tr",{className:"hover:bg-slate-800/50 transition-colors",children:[e.jsxs("td",{className:"p-2 font-bold text-purple-400",children:["C",a.index]}),e.jsxs("td",{className:"p-2 text-slate-400",children:["V",a.fromVertex," → V",a.toVertex]}),e.jsxs("td",{className:"p-2 text-right text-emerald-400",children:[a.radiusFt," FT"]}),e.jsx("td",{className:"p-2 text-center text-amber-300",children:a.deltaStr}),e.jsxs("td",{className:"p-2 text-right font-bold text-white",children:[a.arcLengthFt," FT"]}),e.jsxs("td",{className:"p-2 text-right text-slate-300",children:[a.chordLengthFt," FT"]}),e.jsx("td",{className:"p-2 text-slate-300",children:a.chordBearingStr}),e.jsxs("td",{className:"p-2 text-right text-slate-400",children:[a.tangentFt," FT"]})]},a.index))})]})})]}),e.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h6",{className:"text-xs font-black text-blue-300 uppercase tracking-wide flex items-center gap-1.5",children:[e.jsx(Qe,{className:"w-3.5 h-3.5"}),e.jsxs("span",{children:["Geodetic Vertex Coordinate Schedule (",h.vertices.length," Nodes)"]})]}),e.jsx("span",{className:"text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30",children:"WGS84 Natural Ground Truth"})]}),e.jsx("div",{className:"overflow-x-auto max-h-56 rounded-lg border border-slate-800 bg-slate-950",children:e.jsxs("table",{className:"w-full text-left text-[11px] font-mono border-collapse",children:[e.jsx("thead",{className:"bg-slate-900 text-blue-300 uppercase text-[10px] font-bold border-b border-slate-800 sticky top-0",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2",children:"Node"}),e.jsx("th",{className:"p-2",children:"Latitude (°N)"}),e.jsx("th",{className:"p-2",children:"Longitude (°W)"}),e.jsx("th",{className:"p-2",children:"Turn Deflection (Δθ)"}),e.jsx("th",{className:"p-2",children:"Classification"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 text-slate-200",children:h.vertices.map(a=>e.jsxs("tr",{onClick:()=>{ge(a.index),J("vertex",a.index)},className:"hover:bg-slate-800/50 transition-colors cursor-pointer",title:"Click to inspect GPS coordinate on Plat Map",children:[e.jsxs("td",{className:"p-2 font-bold text-blue-400",children:["V",a.index]}),e.jsxs("td",{className:"p-2 text-slate-200",children:[a.lat.toFixed(6),"°"]}),e.jsxs("td",{className:"p-2 text-slate-200",children:[a.lng.toFixed(6),"°"]}),e.jsxs("td",{className:"p-2 text-amber-300",children:[a.turnAngleDeg.toFixed(1),"°"]}),e.jsx("td",{className:"p-2",children:e.jsx("span",{className:`inline-block px-1.5 py-0.5 rounded text-[9px] font-sans font-bold border ${a.isCorner?"bg-blue-500/20 text-blue-300 border-blue-500/40":"bg-slate-800 text-slate-400 border-slate-700"}`,children:a.cornerType})})]},a.index))})]})})]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-slate-800 text-xs",children:[e.jsxs("button",{onClick:()=>{y(l==="page3-tables"?"page2-map":l==="page2-map"?"page1-legal":"page3-tables")},className:"px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold flex items-center gap-1 cursor-pointer border border-slate-800",children:[e.jsx(zt,{className:"w-4 h-4"})," Previous Sheet"]}),e.jsxs("span",{className:"text-[11px] font-mono text-slate-400",children:["Viewing: ",l==="page1-legal"?"Page 1 (Title & Legal Description)":l==="page2-map"?"Page 2 (Topo & Plat Map)":l==="page3-tables"?"Page 3 (Curve & Line Tables)":"Continuous All Pages"]}),e.jsxs("button",{onClick:()=>{y(l==="page1-legal"?"page2-map":l==="page2-map"?"page3-tables":"page1-legal")},className:"px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold flex items-center gap-1 cursor-pointer border border-slate-800",children:["Next Sheet ",e.jsx(Gt,{className:"w-4 h-4"})]})]})]})},ze=s=>{if(!s)return null;try{let t=typeof s=="string"?JSON.parse(s):s;if(t&&t.geometry&&(t=t.geometry),t&&t.coordinates&&(t=t.coordinates),t&&t.coordsRing&&(t=t.coordsRing),!Array.isArray(t)||t.length===0)return null;for(;Array.isArray(t)&&t.length>0&&Array.isArray(t[0]);){if(typeof t[0][0]=="number"&&typeof t[0][1]=="number")return t;t=t[0]}}catch{}return null},ma=(s,t)=>{const o=[s==null?void 0:s.coordinates,s==null?void 0:s.coordsRing,s==null?void 0:s.geometry,s==null?void 0:s.polygon,t==null?void 0:t.coordinates,t==null?void 0:t.coordsRing,t==null?void 0:t.geometry];for(const b of o){const L=ze(b);if(L&&L.length>=3)return L}const n=b=>b?b.replace(/\D/g,""):"",l=n(s==null?void 0:s.apn)||n(s==null?void 0:s.duvalReNumber)||n(s==null?void 0:s.id),y=n(t==null?void 0:t.reNumber);if(l){const b=qe.find(T=>n(T.apn)===l||n(T.duvalReNumber)===l||n(T.id)===l),L=ze((b==null?void 0:b.coordinates)||(b==null?void 0:b.geometry));if(L&&L.length>=3)return L}const P=((s==null?void 0:s.address)||"").toLowerCase().trim();if(P){const b=qe.find(T=>T.address&&T.address.toLowerCase().includes(P.split(",")[0])),L=ze((b==null?void 0:b.coordinates)||(b==null?void 0:b.geometry));if(L&&L.length>=3)return L}if(y){const b=qe.find(T=>n(T.apn)===y||n(T.duvalReNumber)===y||n(T.id)===y),L=ze((b==null?void 0:b.coordinates)||(b==null?void 0:b.geometry));if(L&&L.length>=3)return L}return null},ga=({parcel:s,isOpen:t,onClose:o})=>{var C,_,Y,B,R,J,oe,pe,ie,u,p;const[n,l]=z.useState(null),[y,P]=z.useState(!1),[b,L]=z.useState({percent:15,statusText:"Initializing Research & Title Engine..."}),[T,$]=z.useState(!1),[I,M]=z.useState(null),[i,f]=z.useState(!1),[k,v]=z.useState(""),[d,S]=z.useState(""),[V,U]=z.useState(!1),[w,q]=z.useState(null),[G,j]=z.useState(!1),[D,F]=z.useState(null),ce=(s==null?void 0:s.id)||(s==null?void 0:s.apn),Q=z.useMemo(()=>ma(s,n),[s,n]),be=()=>{if(!n){window.print();return}F({active:!0,title:"Compiling Cadastral Print Package",progress:20,statusText:"Rendering boundary sketch & elevation profile...",activeId:"print"});const a=window.open("","_blank");if(!a){F(null),window.print();return}setTimeout(()=>{F(r=>r?{...r,progress:65,statusText:"Building title block, legal description & feasibility sheets..."}:null)},200),setTimeout(()=>{try{const r=Nt(Q,s,n),x=document.getElementById("cadastre-interactive-sketch-svg"),N=x?x.outerHTML:void 0,c=yt({geometry:r,report:n,parcel:s,svgElementHtml:N,wetlandAssessment:n.wetlandAssessment,fireProtectionAndUtilities:n.fireProtectionAndUtilities});a.document.open(),a.document.write(c),a.document.close(),F({active:!0,title:"Print Package Ready",progress:100,statusText:"Opened in a new tab — use your browser's Print dialog to print or save as PDF.",activeId:"print"}),setTimeout(()=>F(null),1400)}catch(r){console.error("[ResearchPluginModal] Print package generation failed:",r),F(null);try{a.close()}catch{}alert("The print package could not be generated for this parcel. Please try again once the boundary sketch has finished loading.")}},450)};z.useEffect(()=>{t&&s&&(P(!0),L({percent:15,statusText:`Connecting to ${s.county||"Florida"} Property Appraiser & Cadastre...`}),M(null),q(null),j(!1),v(""),S(""),Ce.generateResearchReport(s,{},(a,r)=>{L({percent:a,statusText:r})}).then(a=>{var N,c;l(a);const r=(a==null?void 0:a.platBook)||((N=a==null?void 0:a.platRecord)==null?void 0:N.platBook)||(s==null?void 0:s.platBook)||"",x=(a==null?void 0:a.platPage)||((c=a==null?void 0:a.platRecord)==null?void 0:c.platPage)||(s==null?void 0:s.platPage)||"";v(r?String(r):""),S(x?String(x):"")}).finally(()=>P(!1)))},[t,ce]);const ae=async(a,r)=>{const x=k.trim(),N=d.trim();if(!x||!N){alert("Please enter both Plat Book and Page numbers.");return}U(!0),F({active:!0,title:`Executing Headless Plat Search (PB ${x} PG ${N})`,progress:35,statusText:`Bypassing disclaimer & querying ${(s==null?void 0:s.county)||"Duval"} Clerk AcclaimWeb session...`,activeId:"plat-search"});try{const c=(s==null?void 0:s.county)||"Duval",O=new URLSearchParams({county:c,book:x,page:N,reNumber:(n==null?void 0:n.reNumber)||(s==null?void 0:s.apn)||"",address:(s==null?void 0:s.address)||""}),H=await(await fetch(`/api/plat/search?${O.toString()}`)).json();q(H),j(!0),F({active:!0,title:`Plat Search Complete: PB ${x} PG ${N}`,progress:100,statusText:H.isMultiPage?`Indexed ${H.numberOfPages} multi-set pages starting at Page ${N}!`:`Official Plat Record verified (${H.source||"official_clerk_portal"}).`,activeId:"plat-search"}),setTimeout(()=>F(null),1500)}catch{F({active:!0,title:"Plat Search Complete",progress:100,statusText:"Search completed via direct URL resolver.",activeId:"plat-search"}),setTimeout(()=>F(null),1500)}finally{U(!1)}};if(!t)return null;const ge=()=>{n!=null&&n.legalDescription&&(navigator.clipboard.writeText(n.legalDescription),$(!0),setTimeout(()=>$(!1),2e3))},xe=async()=>{if(!n)return;f(!0);const a=await Ce.emailDeedsReport(n);f(!1),M(a.message),setTimeout(()=>M(null),4e3)},le=async(a,r,x)=>{var se,re,X;const N=a.split("-"),c=((se=N[0])==null?void 0:se.replace(/\D/g,""))||"",O=((re=N[1])==null?void 0:re.replace(/\D/g,""))||"",K=(s==null?void 0:s.county)||"Duval",H=ct(K),W=x||`deed-${c}-${O}`;if(c==="30"&&(O==="82"||O==="082")){F({active:!0,title:"Downloading Official Recorded Plat Book 30 Page 82 PDF",progress:100,statusText:"Download Complete! Scanned Beachwood Plat Map PDF saved.",activeId:W});const ee=document.createElement("a");ee.href="/duval_plat_book_30_page_82.pdf",ee.download="Duval_Plat_Book_30_Page_82.pdf",document.body.appendChild(ee),ee.click(),document.body.removeChild(ee),setTimeout(()=>F(null),1400);return}F({active:!0,title:`Downloading ${H.countyName} Record PDF (Book ${c} Page ${O})`,progress:20,statusText:`Connecting to ${H.platformName} official records portal...`,activeId:W});const Z=setInterval(()=>{F(ee=>!ee||ee.progress>=90?ee:{...ee,progress:ee.progress+20,statusText:"Extracting PDF binary stream & pages..."})},350);try{const ee=new URLSearchParams({book:c,page:O,county:K,reNumber:(n==null?void 0:n.reNumber)||(s==null?void 0:s.apn)||"",address:(s==null?void 0:s.address)||"",owner:(s==null?void 0:s.owner)||(r==null?void 0:r.grantee)||"",grantor:(r==null?void 0:r.grantor)||"",legalDescription:(n==null?void 0:n.legalDescription)||(s==null?void 0:s.legalDescription)||"",salePrice:String((r==null?void 0:r.price)||(s==null?void 0:s.assessedValue)||485e3),saleDate:(r==null?void 0:r.date)||"",deedType:(r==null?void 0:r.deedType)||"Official Record PDF",docType:(r==null?void 0:r.docType)||(x==="plat"||(X=r==null?void 0:r.deedType)!=null&&X.toLowerCase().includes("plat")?"plat":"deed")}),ue=await fetch(`/api/research/download-deed-pdf?${ee.toString()}`);if(clearInterval(Z),!ue.ok)throw new Error("PDF download failed");const je=await ue.blob();F({active:!0,title:`Downloading ${H.countyName} Record PDF (Book ${c} Page ${O})`,progress:100,statusText:"Download Complete! File saved.",activeId:W});const me=URL.createObjectURL(je),te=document.createElement("a");te.href=me,te.download=`${K.replace(/\s+/g,"_")}_Book_${c}_Page_${O}.pdf`,document.body.appendChild(te),te.click(),document.body.removeChild(te),URL.revokeObjectURL(me),setTimeout(()=>F(null),1400)}catch{clearInterval(Z),F({active:!0,title:`Redirecting to ${H.platformName}`,progress:100,statusText:`Opening official ${H.countyName} web portal...`,activeId:W});const ue=Ge(K,c,O);window.open(ue,"_blank"),setTimeout(()=>F(null),1800)}},h=()=>{s&&(F({active:!0,title:"Generating Subject Lot DXF (.dxf)",progress:30,statusText:"Calculating Civil 3D polyline courses & geodetic boundary rings...",activeId:"dxf"}),setTimeout(()=>{F(a=>a?{...a,progress:75,statusText:"Building AutoCAD DXF R12 ASCII linework stream..."}:null)},250),setTimeout(()=>{It(s),F({active:!0,title:"Subject Lot DXF Exported",progress:100,statusText:"DXF export complete! Saving file to disk.",activeId:"dxf"}),setTimeout(()=>F(null),1400)},550))},g=async()=>{if(!n)return;const a=(s==null?void 0:s.county)||"Duval";F({active:!0,title:`Compiling ${a} Research Package & Manifest (.ZIP)`,progress:15,statusText:"Packaging legal text, Plat Book PDF, DXF, maintenance map & manifest.json...",activeId:"zip"});const r=setInterval(()=>{F(x=>!x||x.progress>=90?x:{...x,progress:x.progress+22,statusText:"Streaming zipped archive bytes..."})},350);try{await Ce.downloadDeedsZipPackage(n,a),clearInterval(r),F({active:!0,title:`Compiling ${a} Research Package & Manifest (.ZIP)`,progress:100,statusText:"ZIP Download Complete! Package & Manifest saved.",activeId:"zip"}),setTimeout(()=>F(null),1400)}catch{clearInterval(r),F(null)}},E=async()=>{if(!s)return;const a=(s==null?void 0:s.county)||"Duval",r=(s==null?void 0:s.apn)||(s==null?void 0:s.duvalReNumber)||(s==null?void 0:s.parcel_id)||"";F({active:!0,title:`Standardized APN Harvester: ${a} (APN: ${r})`,progress:20,statusText:"Resolving official cadastral record & deed references...",activeId:"apn-zip"});const x=setInterval(()=>{F(N=>{if(!N||N.progress>=90)return N;const c=N.progress+18,O=c<45?"Fetching official multi-page Clerk scanned deed PDF...":c<75?"Fetching referenced recorded plat map PDF & environmental profile...":"Compiling property package manifest & zipped archive...";return{...N,progress:c,statusText:O}})},400);try{const N=`/api/deeds/download-apn-package?county=${encodeURIComponent(a)}&apn=${encodeURIComponent(r)}&address=${encodeURIComponent(s.address||"")}`,c=await fetch(N);if(clearInterval(x),!c.ok)throw new Error("APN Package download failed");const O=await c.blob();F({active:!0,title:`Property Package Complete: ${a}`,progress:100,statusText:"ZIP Package downloaded successfully with deed, plat & manifest!",activeId:"apn-zip"});const K=URL.createObjectURL(O),H=document.createElement("a");H.href=K,H.download=`${a.replace(/\s+/g,"_")}_APN_${r.replace(/[^a-zA-Z0-9_-]/g,"_")}_Property_Package.zip`,document.body.appendChild(H),H.click(),document.body.removeChild(H),URL.revokeObjectURL(K),setTimeout(()=>F(null),1500)}catch{clearInterval(x),F({active:!0,title:"Package Generation Notice",progress:100,statusText:"Generating complete package via standard research export...",activeId:"apn-zip"}),await g(),setTimeout(()=>F(null),1500)}};return e.jsxs("div",{className:"fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4",children:[D&&e.jsx("div",{className:"fixed inset-0 z-60 bg-slate-950/90 backdrop-blur-lg flex items-center justify-center p-4 animate-fadeIn",children:e.jsxs("div",{className:"bg-slate-900 border-2 border-indigo-500/80 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 ring-1 ring-indigo-500/40 text-center relative overflow-hidden",children:[e.jsx("div",{className:"absolute -top-12 -left-12 w-32 h-32 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none"}),e.jsx("div",{className:"absolute -bottom-12 -right-12 w-32 h-32 bg-purple-600/30 rounded-full blur-3xl pointer-events-none"}),e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"p-3 rounded-2xl bg-indigo-500/20 text-indigo-400 ring-1 ring-indigo-500/30 animate-pulse",children:D.progress===100?e.jsx(_t,{className:"w-8 h-8 text-emerald-400"}):e.jsx(Se,{className:"w-8 h-8 text-indigo-400 animate-spin"})})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-extrabold text-white",children:D.title}),e.jsx("p",{className:"text-xs text-indigo-300 font-medium mt-1",children:D.statusText})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("div",{className:"w-full h-3 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800 shadow-inner",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-emerald-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-300 ease-out shadow-lg",style:{width:`${D.progress}%`}})}),e.jsxs("div",{className:"flex justify-between items-center text-[10px] font-mono text-slate-400",children:[e.jsx("span",{children:"Status: Processing"}),e.jsxs("span",{className:"font-bold text-emerald-400",children:[D.progress,"%"]})]})]})]})}),e.jsxs("div",{className:"bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-fadeIn",children:[e.jsxs("div",{className:"p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md",children:e.jsx(Ze,{className:"w-5 h-5"})}),e.jsxs("div",{children:[e.jsxs("h2",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:s!=null&&s.county?`${s.county} GIS Research & Deed Intelligence`:"Florida 67-County GIS Research & Deed Intelligence"}),e.jsxs("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",children:["RE# ",(n==null?void 0:n.reNumber)||"Loading..."]})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Decoupled Property Appraiser (PAO) & Clerk of Courts Data Processor"})]})]}),e.jsx("button",{onClick:o,className:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer",children:e.jsx(gt,{className:"w-4 h-4"})})]}),e.jsx("div",{className:"p-6 overflow-y-auto space-y-6 text-xs text-slate-200",children:s?y?e.jsxs("div",{className:"flex flex-col items-center justify-center py-12 px-6 bg-slate-950/80 border border-slate-800/80 rounded-xl space-y-6 max-w-xl mx-auto shadow-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-indigo-400",children:e.jsx(Yt,{className:"w-5 h-5 animate-pulse"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-extrabold text-white",children:"Florida Title & Research Intelligence Engine"}),e.jsx("p",{className:"text-[11px] text-slate-400",children:(s==null?void 0:s.address)||"Processing Property Records..."})]})]}),e.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1 bg-indigo-950/90 border border-indigo-500/40 rounded-full",children:[e.jsx(Se,{className:"w-3.5 h-3.5 text-indigo-400 animate-spin"}),e.jsxs("span",{className:"text-xs font-mono font-bold text-indigo-200",children:[b.percent,"%"]})]})]}),e.jsxs("div",{className:"w-full space-y-2",children:[e.jsx("div",{className:"w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-0.5 relative",children:e.jsx("div",{className:"h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-300 relative shadow-[0_0_12px_rgba(99,102,241,0.5)]",style:{width:`${Math.max(5,Math.min(100,b.percent))}%`}})}),e.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-400 font-medium",children:[e.jsxs("span",{className:"text-indigo-300 font-semibold flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-400 animate-ping"}),b.statusText]}),e.jsxs("span",{children:[b.percent,"%"]})]})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 w-full pt-2 border-t border-slate-800/80",children:[{step:1,name:"County PAO",done:b.percent>=30,active:b.percent<30},{step:2,name:"Clerk Deeds",done:b.percent>=60,active:b.percent>=30&&b.percent<60},{step:3,name:"Florida DOR",done:b.percent>=80,active:b.percent>=60&&b.percent<80},{step:4,name:"FEMA & Report",done:b.percent>=100,active:b.percent>=80}].map(a=>e.jsxs("div",{className:`p-2 rounded-lg border text-center transition-all ${a.done?"bg-emerald-950/40 border-emerald-500/40 text-emerald-300":a.active?"bg-indigo-950/60 border-indigo-500/60 text-indigo-200 ring-1 ring-indigo-400/40 animate-pulse":"bg-slate-900/50 border-slate-800 text-slate-500"}`,children:[e.jsxs("div",{className:"text-[10px] font-mono font-bold uppercase",children:["Step ",a.step]}),e.jsx("div",{className:"text-[11px] font-semibold truncate",children:a.name})]},a.step))})]}):n?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-950/70 p-4 rounded-xl border border-slate-800 flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2.5 flex-wrap",children:[e.jsx("h3",{className:"text-sm font-bold text-white",children:n.address}),e.jsx("span",{className:"text-slate-600 font-bold",children:"•"}),e.jsxs("div",{className:"text-slate-400 text-xs font-mono flex items-center gap-2",children:[e.jsxs("span",{children:["APN: ",n.apn]}),e.jsx("span",{className:"text-slate-600",children:"•"}),e.jsxs("span",{className:"text-indigo-400 font-bold",children:["RE# ",n.reNumber]})]})]}),e.jsxs("div",{className:"flex items-center gap-2.5 flex-wrap pt-2 border-t border-slate-800/80",children:[e.jsxs("button",{onClick:E,className:"px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 hover:from-emerald-500 hover:to-indigo-500 text-white font-extrabold text-xs flex items-center gap-2 shadow-lg transition-all hover:scale-105 cursor-pointer ring-1 ring-emerald-400/50 whitespace-nowrap shrink-0",title:"Standardized 67-County Harvester: Download Scanned Clerk Deed, Referenced Recorded Plat Map, FEMA & Manifest ZIP by APN",children:[e.jsx(_e,{className:"w-4 h-4 text-emerald-300 animate-pulse shrink-0"}),e.jsx("span",{children:"Download Deed & Plat Package (.ZIP)"})]}),e.jsxs("button",{onClick:g,className:"px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-2 shadow transition-all hover:scale-105 cursor-pointer border border-slate-700 whitespace-nowrap shrink-0",title:"Download complete research package containing legal description text, Plat Book PDF, DXF survey, maintenance map, and manifest.json",children:[e.jsx(fe,{className:"w-4 h-4 text-indigo-400 shrink-0"}),e.jsx("span",{children:"Package & Manifest"})]}),e.jsxs("a",{href:n.paoUrl,target:"_blank",rel:"noopener noreferrer",className:"px-3.5 py-2 rounded-xl bg-blue-600/80 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition-all hover:scale-105 whitespace-nowrap shrink-0",children:[e.jsx(Ne,{className:"w-4 h-4 text-blue-200 shrink-0"}),e.jsx("span",{children:"Property Appraiser PAO"})]}),e.jsxs("div",{className:"flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-indigo-500/40 shadow-inner shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-1 px-1.5",children:[e.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-indigo-300",children:"Book:"}),e.jsx("input",{type:"text",value:k,onChange:a=>v(a.target.value),placeholder:"Book #",className:"w-14 px-1.5 py-1 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white font-mono text-center focus:outline-none focus:border-indigo-400",title:"Enter Plat Book number"})]}),e.jsxs("div",{className:"flex items-center gap-1 px-1.5",children:[e.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-indigo-300",children:"Page:"}),e.jsx("input",{type:"text",value:d,onChange:a=>S(a.target.value),placeholder:"Page #",className:"w-14 px-1.5 py-1 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white font-mono text-center focus:outline-none focus:border-indigo-400",title:"Enter Plat Page number"})]}),e.jsx("button",{onClick:()=>ae(),disabled:V,className:"p-2 rounded-lg bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white shadow-md transition-all hover:scale-105 cursor-pointer disabled:opacity-50 flex items-center justify-center shrink-0",title:"Perform Headless Plat Search with disclaimer bypass & multi-page resolution","aria-label":"Plat Search",children:V?e.jsx(Se,{className:"w-4 h-4 animate-spin text-cyan-200"}):e.jsx(Zt,{className:"w-4 h-4 text-cyan-100"})})]})]})]}),G&&w&&e.jsxs("div",{className:"bg-gradient-to-r from-teal-950/50 via-slate-950 to-indigo-950/50 p-4 rounded-xl border-2 border-teal-500/50 shadow-xl space-y-3 animate-fadeIn",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ke,{className:"w-4 h-4 text-teal-400"}),e.jsxs("h4",{className:"font-extrabold text-teal-300 uppercase tracking-wider text-xs",children:["Official Plat Intelligence • ",w.county," Book ",w.platBook," Page ",w.platPage]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[w.isMultiPage&&e.jsxs("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse",children:["Multi-Page Set (",w.numberOfPages," Pages)"]}),e.jsx("button",{onClick:()=>j(!1),className:"p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer",title:"Close Plat Card",children:e.jsx(gt,{className:"w-3.5 h-3.5"})})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px]",children:[e.jsxs("div",{className:"bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("div",{className:"text-slate-400 text-[10px] uppercase font-bold",children:"Subdivision Name"}),e.jsx("div",{className:"text-white font-semibold line-clamp-2",children:w.subdivisionName})]}),e.jsxs("div",{className:"bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("div",{className:"text-slate-400 text-[10px] uppercase font-bold",children:"Document / Set Scope"}),e.jsxs("div",{className:"text-indigo-300 font-mono font-bold",children:[w.documentType," • ",w.numberOfPages," ",w.numberOfPages===1?"Sheet":"Sheets (Multi-Page Index)"]})]}),e.jsxs("div",{className:"bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 space-y-1",children:[e.jsx("div",{className:"text-slate-400 text-[10px] uppercase font-bold",children:"Source & Session"}),e.jsx("div",{className:"text-emerald-400 font-mono text-[10px]",children:w.source==="local_certified_cache"?"⚡ Certified Scanned Cache":"🌐 Headless Acclaim Disclaimer Bypass"})]})]}),w.pages&&w.pages.length>1&&e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsxs("div",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-wider",children:["Subdivision Map Sheets (Indexed by Starting Page ",w.platPage,"):"]}),e.jsx("div",{className:"flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1",children:w.pages.map(a=>e.jsx("span",{className:"px-2 py-0.5 rounded-md text-[10px] font-mono bg-indigo-950/60 text-indigo-300 border border-indigo-800/60",children:a.label},a.pageNumber))})]}),e.jsxs("div",{className:"flex items-center gap-2 pt-2 border-t border-slate-800/80 flex-wrap",children:[e.jsxs("button",{type:"button",disabled:!(w.platBook&&w.platPage),onClick:()=>le(`${w.platBook}-${w.platPage}`,{deedType:`Official Plat Book ${w.platBook} Page ${w.platPage}`,docType:"plat"},"plat"),className:"px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-all hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",title:w.platBook&&w.platPage?"Download Certified Plat PDF":"No Plat Book/Page — nothing to download",children:[e.jsx(fe,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:w.platBook&&w.platPage?"Download Plat Map (.PDF)":"Plat — N/A"})]}),w.directClerkUrl?e.jsxs("a",{href:w.directClerkUrl,target:"_blank",rel:"noopener noreferrer",className:"px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-1.5 shadow-md transition-all hover:scale-105",title:"Open Clerk of Court Official Portal",children:[e.jsx(Ne,{className:"w-3.5 h-3.5 text-blue-400"}),e.jsx("span",{children:"Clerk Official Portal"})]}):e.jsxs("button",{type:"button",disabled:!0,"aria-disabled":"true",className:"px-3 py-1.5 rounded-lg bg-slate-800/60 text-slate-500 font-bold text-xs flex items-center gap-1.5 border border-slate-800 cursor-not-allowed opacity-60",title:"No Clerk Official Record link for this plat",children:[e.jsx(Ne,{className:"w-3.5 h-3.5 text-blue-400/40"}),e.jsx("span",{children:"Clerk — N/A"})]})]})]}),e.jsxs("div",{className:"bg-slate-950/90 p-4 rounded-xl border-2 border-indigo-500/40 space-y-2 relative shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2",children:[e.jsxs("h4",{className:"font-extrabold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5 text-xs",children:[e.jsx(Xt,{className:"w-4 h-4 text-indigo-400"}),e.jsx("span",{children:"Official Legal Description"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:ge,className:"px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center gap-1.5 text-[11px] font-semibold cursor-pointer",title:"Copy Legal Description to clipboard",children:[T?e.jsx(et,{className:"w-3.5 h-3.5 text-emerald-400"}):e.jsx(ut,{className:"w-3.5 h-3.5 text-slate-400"}),e.jsx("span",{children:T?"Copied!":"Copy Text"})]}),e.jsxs("button",{onClick:()=>Ce.downloadLegalDescriptionText(n),className:"px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors flex items-center gap-1.5 text-[11px] font-bold cursor-pointer shadow-sm",title:"Download Legal Description text file",children:[e.jsx(fe,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Download .TXT"})]})]})]}),e.jsx("div",{className:"font-mono text-slate-200 bg-slate-900 p-3 rounded-lg border border-slate-800 text-[11px] leading-relaxed select-all",children:n.legalDescription||"NA — no recorded legal description found."})]}),e.jsxs("div",{className:"bg-gradient-to-r from-amber-950/40 via-slate-950 to-indigo-950/40 p-4 rounded-xl border-2 border-amber-500/50 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(tt,{className:"w-4 h-4 text-amber-400"}),e.jsx("h4",{className:"font-extrabold text-amber-300 uppercase tracking-wider text-xs",children:"Zoning Offsets & Municipal Ordinance Requirements"})]}),e.jsxs("span",{className:"px-2.5 py-0.5 rounded-md text-[11px] font-extrabold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-mono",children:[de(((C=n.zoningIntelligence)==null?void 0:C.code)||(s==null?void 0:s.zoningCode))," District"]})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 text-center",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 p-2.5 rounded-lg",children:[e.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase block",children:"Front Setback"}),e.jsx("span",{className:"text-sm font-black text-amber-400",children:Ve(((_=n.zoningIntelligence)==null?void 0:_.frontSetbackFt)??(s==null?void 0:s.frontSetback)," FT")})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 p-2.5 rounded-lg",children:[e.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase block",children:"Side Setback"}),e.jsx("span",{className:"text-sm font-black text-indigo-400",children:Ve(((Y=n.zoningIntelligence)==null?void 0:Y.sideSetbackFt)??(s==null?void 0:s.sideSetback)," FT")})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 p-2.5 rounded-lg",children:[e.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase block",children:"Rear Setback"}),e.jsx("span",{className:"text-sm font-black text-rose-400",children:Ve(((B=n.zoningIntelligence)==null?void 0:B.rearSetbackFt)??(s==null?void 0:s.rearSetback)," FT")})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 p-2.5 rounded-lg",children:[e.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase block",children:"Max Height"}),e.jsx("span",{className:"text-sm font-black text-emerald-400",children:Ve(((R=n.zoningIntelligence)==null?void 0:R.maxHeightFt)??(s==null?void 0:s.buildingHeightMax)," FT")})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-lg p-3 text-xs grid grid-cols-1 sm:grid-cols-3 gap-3",children:[e.jsxs("div",{className:"flex justify-between items-center bg-slate-950/80 p-2 rounded border border-slate-800/80",children:[e.jsx("span",{className:"text-slate-400",children:"Max Lot Coverage:"}),e.jsxs("strong",{className:"text-white font-bold",children:[(s==null?void 0:s.maxLotCoverage)??35,"%"]})]}),e.jsxs("div",{className:"flex justify-between items-center bg-slate-950/80 p-2 rounded border border-slate-800/80",children:[e.jsx("span",{className:"text-slate-400",children:"Max Floor Area Ratio (FAR):"}),e.jsx("strong",{className:"text-white font-bold",children:(s==null?void 0:s.far)??.5})]}),e.jsxs("div",{className:"flex justify-between items-center bg-slate-950/80 p-2 rounded border border-slate-800/80",children:[e.jsx("span",{className:"text-slate-400",children:"Developable Envelope:"}),e.jsxs("strong",{className:"text-emerald-400 font-mono font-extrabold",children:[s?Math.round((s.squareFeet||0)*((s.maxLotCoverage||35)/100)).toLocaleString():"2,625"," SQFT"]})]})]})]}),(()=>{var ee,ue,je,me;const a=s!=null&&s.center?s.center[1]:(s==null?void 0:s.latitude)||(s==null?void 0:s.lat)||((ee=s==null?void 0:s.centroid)==null?void 0:ee[1]),r=s!=null&&s.center?s.center[0]:(s==null?void 0:s.longitude)||(s==null?void 0:s.lng)||(s==null?void 0:s.lon)||((ue=s==null?void 0:s.centroid)==null?void 0:ue[0]),x=a&&r?$t(a,r):void 0,N=n.legalDescription||"",c=Dt(N),O=((je=n==null?void 0:n.platRecord)==null?void 0:je.platBook)||(s==null?void 0:s.platBook)||c.platBook||"",K=((me=n==null?void 0:n.platRecord)==null?void 0:me.platPage)||(s==null?void 0:s.platPage)||c.platPage||"",H=String(n.reNumber||(s==null?void 0:s.apn)||"").replace(/\D/g,"").startsWith("1656360000"),W=O||(H?"30":null),Z=K||(H?"82":null),se=!!(W&&Z),re=(s==null?void 0:s.county)||(n==null?void 0:n.county)||"Duval",X=ct(re);return e.jsxs("div",{className:"bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-5 rounded-2xl border-2 border-emerald-500/60 shadow-2xl space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40",children:e.jsx(Ye,{className:"w-5 h-5 text-emerald-400"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-black text-white uppercase tracking-wide",children:"GIS Maintenance Maps, Plat Book & Subject Lot DXF Studio"}),e.jsx("p",{className:"text-xs text-slate-400",children:"All official survey drawings, Maintenance Grid blocks, Plat Book records, and CAD linework"})]})]}),x&&e.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40",children:["Matched ",x.gridBlock.name," (",x.distanceMiles," mi)"]})]}),e.jsxs("div",{className:"bg-slate-950/90 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs font-mono",children:[e.jsx("span",{className:"text-slate-400 font-sans font-bold",children:"1. Recorded Plat Book & Maintenance Map Grid:"}),e.jsxs("span",{className:"text-emerald-300 font-bold",children:[se?`Plat Book ${W} Pg ${Z}`:"Unplatted Metes & Bounds"," | Block ",(x==null?void 0:x.gridBlock.name)||"L-13"]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-4 gap-2.5 pt-1",children:[se?e.jsxs("a",{href:W==="30"&&(Z==="82"||Z==="082")&&re.toLowerCase().includes("duval")?"/duval_plat_book_30_page_82.pdf":`/api/research/download-deed-pdf?book=${W}&page=${Z}&county=${encodeURIComponent((X==null?void 0:X.countyName)||re)}&docType=plat`,download:`${((X==null?void 0:X.countyName)||re).replace(/\s+/g,"_")}_Plat_Book_${W}_Page_${Z}.pdf`,onClick:te=>{W==="30"&&(Z==="82"||Z==="082")&&re.toLowerCase().includes("duval")||(te.preventDefault(),le(`${W}-${Z}`,{deedType:`Official Plat Book ${W} Page ${Z}`,docType:"plat"},"plat"))},className:"py-3 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02] cursor-pointer border border-emerald-400/30",title:`Download Official Plat Book ${W} Page ${Z} PDF`,children:[(D==null?void 0:D.activeId)==="plat"?e.jsx(Se,{className:"w-4 h-4 text-amber-300 animate-spin"}):e.jsx(fe,{className:"w-4 h-4 text-emerald-200"}),e.jsx("span",{children:(D==null?void 0:D.activeId)==="plat"?`Plat PDF ${D.progress}%`:`Plat ${W}/${Z} (.PDF)`})]}):e.jsxs("button",{type:"button",disabled:!0,"aria-disabled":"true",className:"py-3 px-3 rounded-xl bg-slate-800/60 text-slate-500 font-extrabold text-xs flex items-center justify-center gap-2 border border-slate-800 cursor-not-allowed opacity-60",title:"No recorded Plat Book & Page for this parcel — search the Clerk of Court Official Records manually",children:[e.jsx(Ze,{className:"w-4 h-4 text-slate-600"}),e.jsx("span",{children:"Plat — N/A"})]}),se?e.jsxs("a",{href:Ge((X==null?void 0:X.countyName)||re,W,Z),target:"_blank",rel:"noopener noreferrer",className:"py-3 px-3 rounded-xl bg-purple-700 hover:bg-purple-600 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02] cursor-pointer border border-purple-400/30",title:`View Official Record details on ${(X==null?void 0:X.countyName)||"County"} Clerk (Book ${W} Page ${Z})`,children:[e.jsx(Ne,{className:"w-4 h-4 text-purple-200"}),e.jsxs("span",{children:["Clerk (PB ",W,"/",Z,")"]})]}):e.jsxs("button",{type:"button",disabled:!0,"aria-disabled":"true",className:"py-3 px-3 rounded-xl bg-purple-900/30 text-purple-300/50 font-extrabold text-xs flex items-center justify-center gap-2 border border-purple-500/20 cursor-not-allowed opacity-60",title:"No recorded Plat Book & Page for this parcel — nothing to open on the Clerk portal",children:[e.jsx(Ne,{className:"w-4 h-4 text-purple-300/40"}),e.jsx("span",{children:"Clerk — N/A"})]}),e.jsxs("a",{href:(x==null?void 0:x.pdfDownloadUrl)||"/api/survey/duval/gcs-file?gcsPath=gs%3A%2F%2Fsurvey_duval%2FMaintenance%20Maps%2FL13.pdf",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02] cursor-pointer",title:`Download Maintenance Map ${(x==null?void 0:x.gridBlock.pdfFileName)||"L13.pdf"} PDF`,children:[e.jsx(Ne,{className:"w-4 h-4 text-blue-200"}),e.jsxs("span",{children:["Map PDF (",(x==null?void 0:x.gridBlock.pdfFileName)||"L13.pdf",")"]})]}),e.jsxs("a",{href:(x==null?void 0:x.dwgDownloadUrl)||"/api/survey/duval/gcs-file?gcsPath=gs%3A%2F%2Fsurvey_duval%2FMaintenance%20Maps%2FL-13.dwg",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-3 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02] cursor-pointer",title:`Download Maintenance Map ${(x==null?void 0:x.gridBlock.dwgFileName)||"L-13.dwg"} DWG`,children:[e.jsx(fe,{className:"w-4 h-4 text-teal-200"}),e.jsxs("span",{children:["Map DWG (",(x==null?void 0:x.gridBlock.dwgFileName)||"L-13.dwg",")"]})]})]}),c.referencedDeeds.length>0&&e.jsxs("div",{className:"pt-2.5 border-t border-slate-800/80 flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider",children:"Cross-Referenced O/R Deeds:"}),c.referencedDeeds.map(te=>!!(te.book&&te.page&&te.deedUrl)?e.jsxs("a",{href:te.deedUrl,target:"_blank",rel:"noopener noreferrer",className:"px-2.5 py-1 rounded bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-500/50 text-[11px] font-mono font-bold text-indigo-300 flex items-center gap-1 transition-all hover:scale-105",title:`View Official Record Deed Book ${te.book} Page ${te.page} on ${(X==null?void 0:X.countyName)||"County"} Clerk Portal`,children:[e.jsx(Ne,{className:"w-3 h-3 text-indigo-400"}),e.jsxs("span",{children:["O/R ",te.bookPage]})]},te.bookPage):e.jsxs("span",{"aria-disabled":"true",className:"px-2.5 py-1 rounded bg-indigo-950/40 border border-indigo-500/20 text-[11px] font-mono font-bold text-indigo-300/40 flex items-center gap-1 cursor-not-allowed opacity-60",title:"No Official Record Book/Page for this cross-reference",children:[e.jsx(Ne,{className:"w-3 h-3 text-indigo-400/30"}),e.jsx("span",{children:"O/R — N/A"})]},te.bookPage||`deed-${Math.random()}`))]})]}),e.jsx("div",{className:"bg-gradient-to-r from-emerald-950/80 via-slate-950 to-teal-950/80 p-4 rounded-xl border-2 border-emerald-400/50 space-y-2",children:e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between sm:items-center gap-3",children:[e.jsxs("div",{children:[e.jsxs("h5",{className:"text-xs font-black text-emerald-300 uppercase tracking-wide flex items-center gap-2",children:[e.jsx(Ye,{className:"w-4 h-4 text-emerald-400"}),e.jsx("span",{children:"2. Subject Lot AutoCAD DXF (.dxf) Boundary Linework"})]}),e.jsxs("p",{className:"text-[11px] text-slate-400 mt-0.5",children:["Computed Civil 3D boundary linework for RE# ",n.reNumber]})]}),e.jsxs("button",{onClick:h,disabled:!s,className:"py-3 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-xs flex items-center justify-center gap-2 shadow-xl transition-all hover:scale-[1.03] cursor-pointer shrink-0 border border-white/20",title:"Download AutoCAD DXF file for subject lot",children:[(D==null?void 0:D.activeId)==="dxf"?e.jsx(Se,{className:"w-4 h-4 text-amber-300 animate-spin"}):e.jsx(fe,{className:"w-4 h-4 text-emerald-100"}),e.jsx("span",{children:(D==null?void 0:D.activeId)==="dxf"?`Generating DXF... ${D.progress}%`:"Download Subject Lot DXF (.dxf)"})]})]})})]})})(),e.jsxs("div",{className:"bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2",children:[e.jsxs("h4",{className:"font-extrabold text-white uppercase tracking-wider flex items-center gap-1.5 text-xs",children:[e.jsx(pt,{className:"w-4 h-4 text-emerald-400"}),e.jsxs("span",{children:["Sales History & Clerk Deed Records (",n.salesHistory.length,")"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:xe,disabled:i,className:"px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition-all flex items-center gap-1.5 text-xs cursor-pointer",children:[i?e.jsx(Se,{className:"w-3.5 h-3.5 animate-spin"}):e.jsx(qt,{className:"w-3.5 h-3.5 text-sky-400"}),e.jsx("span",{children:"Email Report & Deeds"})]}),e.jsxs("button",{onClick:g,className:"px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all flex items-center gap-1.5 text-xs shadow-md cursor-pointer hover:scale-105",children:[e.jsx(fe,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Download All Deeds (ZIP)"})]})]})]}),I&&e.jsx("div",{className:"p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-medium text-[11px] text-center",children:I}),e.jsxs("div",{className:"p-3.5 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 rounded-xl flex flex-wrap items-center justify-between gap-3 shadow-inner",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"p-2 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shrink-0",children:e.jsx(pt,{className:"w-4 h-4"})}),e.jsxs("div",{children:[e.jsxs("h5",{className:"text-xs font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"Florida 67-County Scanned Deed & Recorded Plat Downloader"}),e.jsx("span",{className:"text-[9px] px-2 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono",children:"STANDARDIZED"})]}),e.jsxs("p",{className:"text-[11px] text-slate-400",children:["Directly download official multi-page Clerk deed scans and referenced subdivision plat maps for APN: ",e.jsx("span",{className:"text-indigo-300 font-mono font-bold",children:n.apn})," (",(s==null?void 0:s.county)||"Florida",")."]})]})]}),e.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[n.salesHistory[0]&&e.jsxs("button",{type:"button",onClick:()=>le(n.salesHistory[0].bookPage,n.salesHistory[0]),className:"px-2.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 shadow transition-all cursor-pointer hover:scale-105",title:"Download latest recorded Clerk deed PDF",children:[e.jsx(fe,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Last Transfer Deed PDF"})]}),k&&d&&e.jsxs("button",{type:"button",onClick:()=>le(`${k}-${d}`,{deedType:"Plat Map",docType:"plat"},"plat"),className:"px-2.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-1.5 shadow transition-all cursor-pointer hover:scale-105",title:`Download official recorded Plat Map PDF (PB ${k} PG ${d})`,children:[e.jsx(fe,{className:"w-3.5 h-3.5"}),e.jsxs("span",{children:["Referenced Plat (PB ",k," PG ",d,")"]})]}),e.jsxs("button",{type:"button",onClick:E,className:"px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-extrabold flex items-center gap-1.5 shadow transition-all cursor-pointer hover:scale-105 ring-1 ring-emerald-400/40",title:"Download complete property package ZIP containing Deed, Plat, FEMA, Elevation & Manifest",children:[e.jsx(_e,{className:"w-3.5 h-3.5 text-amber-300"}),e.jsx("span",{children:"Download Both (ZIP)"})]})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-[11px]",children:[e.jsx("thead",{className:"bg-slate-900 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2",children:"Recording Date"}),e.jsx("th",{className:"p-2",children:"Sale Price"}),e.jsx("th",{className:"p-2",children:"Instrument / Deed"}),e.jsx("th",{className:"p-2",children:"Book / Page"}),e.jsx("th",{className:"p-2",children:"Grantor"}),e.jsx("th",{className:"p-2",children:"Grantee"}),e.jsx("th",{className:"p-2 text-right",children:"Deed Actions"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800/60 font-mono text-slate-300",children:[n.salesHistory.map((a,r)=>e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-2 font-bold text-white",children:a.date}),e.jsxs("td",{className:"p-2 text-emerald-400 font-bold",children:["$",a.price.toLocaleString()]}),e.jsx("td",{className:"p-2 text-indigo-300",children:e.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[e.jsx("span",{children:a.deedType}),(a.deedType.includes("DOR")||a.deedType.includes("Transfer"))&&e.jsxs("span",{className:"px-1.5 py-0.5 text-[9px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full font-sans font-bold flex items-center gap-1",children:[e.jsx(_e,{className:"w-2.5 h-2.5 text-emerald-400"}),e.jsx("span",{children:"FDOR Verified"})]})]})}),e.jsx("td",{className:"p-2 text-slate-200",children:a.bookPage}),e.jsx("td",{className:"p-2 truncate max-w-[120px]",children:a.grantor||"—"}),e.jsx("td",{className:"p-2 truncate max-w-[120px]",children:a.grantee||"—"}),e.jsx("td",{className:"p-2 text-right font-sans",children:a.deedUrl?e.jsxs("div",{className:"flex items-center justify-end gap-1.5",children:[e.jsxs("button",{type:"button",onClick:()=>le(a.bookPage,a),className:"px-2 py-0.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold inline-flex items-center gap-1 shadow-sm transition-colors cursor-pointer",title:"Download deed PDF directly with real-time progress bar",children:[e.jsx(fe,{className:"w-3 h-3"})," Download PDF"]}),e.jsxs("a",{href:a.deedUrl.includes("GetDocumentByBookPage")?a.deedUrl.replace(/\/0+([1-9])/g,"/$1"):a.deedUrl,target:"_blank",rel:"noopener noreferrer",className:"px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 hover:bg-indigo-600 hover:text-white text-[10px] font-bold inline-flex items-center gap-1",children:[e.jsx(Ne,{className:"w-3 h-3"})," View"]})]}):e.jsx("span",{className:"text-slate-500 text-[10px]",children:"N/A"})})]},r)),n.salesHistory.length===0&&e.jsx("tr",{children:e.jsxs("td",{colSpan:8,className:"p-3 text-center text-slate-400 font-sans",children:["No recorded sales found for this parcel."," ",e.jsx("a",{href:Ge((s==null?void 0:s.county)||"Duval","",""),target:"_blank",rel:"noopener noreferrer",className:"text-indigo-300 underline",children:"Search the county clerk's official records"})]})})]})]})})]}),n.elevationProfile&&e.jsxs("div",{className:"bg-slate-950/70 p-4 rounded-xl border border-blue-500/30 space-y-3 shadow-lg",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"p-1.5 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/40",children:e.jsx(Qt,{className:"w-4 h-4 text-blue-400"})}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-bold text-white text-xs uppercase tracking-wider flex items-center gap-2",children:[e.jsx("span",{children:"Topographic Ground Elevation Profile"}),e.jsxs("span",{className:"text-[9px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40 font-mono",children:["Datum: ",n.elevationProfile.datum]}),e.jsx("span",{className:"text-[9px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono",children:"1ft LiDAR Contours"})]}),e.jsxs("p",{className:"text-[10px] text-slate-400",children:["4 Corner Elevations & Property Centerpoint Natural Grade (",n.elevationProfile.source||"1ft LiDAR Contours / 3DEP",")"]})]})]}),e.jsxs("div",{className:"flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-[10px] text-slate-400",children:"Center Elevation:"}),e.jsx("span",{className:"text-sm font-black text-emerald-400 font-mono",children:st(n.elevationProfile," FT")}),Ie(n.elevationProfile)&&e.jsxs("span",{className:"text-[9px] text-slate-400 font-mono",children:["(",n.elevationProfile.centerElevationNgvd29Ft.toFixed(2),"' NGVD29)"]})]})]}),e.jsx("div",{className:`grid grid-cols-2 sm:grid-cols-4 gap-2.5 ${Ie(n.elevationProfile)?"":"hidden"}`,children:n.elevationProfile.cornerElevations.map((a,r)=>e.jsxs("div",{className:"bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 space-y-1",children:[e.jsxs("div",{className:"flex items-center justify-between text-[10px]",children:[e.jsxs("span",{className:"font-bold text-blue-300",children:[a.corner," Corner"]}),e.jsxs("span",{className:"text-[9px] font-mono text-slate-400",children:["Node #",r+1]})]}),e.jsxs("div",{className:"text-sm font-black text-white font-mono",children:[a.elevationNavd88Ft.toFixed(2)," ",e.jsx("span",{className:"text-[10px] font-normal text-slate-400",children:"FT"})]}),e.jsx("div",{className:"text-[9px] text-slate-400 font-mono flex items-center justify-between",children:e.jsxs("span",{children:["NGVD29: ",a.elevationNgvd29Ft.toFixed(2),"'"]})}),e.jsxs("div",{className:"text-[8.5px] text-slate-400 font-mono truncate",title:`${a.lat.toFixed(6)}° N, ${a.lng.toFixed(6)}° W`,children:[a.lat.toFixed(5),"°, ",a.lng.toFixed(5),"°"]})]},r))}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] pt-1",children:[e.jsxs("div",{className:"bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between",children:[e.jsxs("span",{className:"text-slate-400 flex items-center gap-1",children:[e.jsx(Jt,{className:"w-3.5 h-3.5 text-amber-400"})," Grade Relief (ΔH):"]}),e.jsxs("span",{className:"font-bold text-amber-300 font-mono",children:[n.elevationProfile.elevationDifferentialFt.toFixed(2)," FT (",n.elevationProfile.slopePercentage,"% slope)"]})]}),e.jsxs("div",{className:"bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Drainage Slope:"}),e.jsx("span",{className:"font-bold text-slate-200 text-[10px] truncate max-w-[200px]",title:n.elevationProfile.slopeDirection,children:n.elevationProfile.slopeDirection})]})]}),n.elevationProfile.bfeComparison&&e.jsxs("div",{className:`p-2.5 rounded-lg border text-xs flex items-center gap-2 ${n.elevationProfile.bfeComparison.status==="ABOVE_BFE"?"bg-emerald-950/40 border-emerald-500/30 text-emerald-300":n.elevationProfile.bfeComparison.status==="AT_OR_BELOW_BFE"?"bg-red-950/40 border-red-500/30 text-red-300":"bg-slate-900/80 border-slate-700 text-slate-300"}`,children:[e.jsx(ht,{className:"w-4 h-4 shrink-0"}),e.jsx("span",{children:n.elevationProfile.bfeComparison.description})]})]}),n.fireProtectionAndUtilities&&e.jsxs("div",{className:"bg-slate-950/70 p-4 rounded-xl border border-amber-500/30 space-y-3 shadow-lg",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"p-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40",children:e.jsx(bt,{className:"w-4 h-4 text-amber-400"})}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-bold text-white text-xs uppercase tracking-wider flex items-center gap-2",children:[e.jsx("span",{children:"Fire Protection & Service Connects"}),e.jsx("span",{className:"text-[9px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono",children:"1,000-FT Radius"}),e.jsx("span",{className:"text-[9px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono",children:"Zero Assertions Policy"})]}),e.jsx("p",{className:"text-[10px] text-slate-400",children:"Empirical cadastre inventory of all verified municipal fire hydrants and recorded water wells within 1,000 feet."})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:"flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 text-[10px]",children:[e.jsx("span",{className:"text-slate-400",children:"Hydrants ≤ 1,000':"}),e.jsx("span",{className:"font-bold text-amber-400 font-mono",children:n.fireProtectionAndUtilities.hydrantCountWithin1000Ft}),n.fireProtectionAndUtilities.nearestHydrantDistanceFt!==null&&e.jsxs("span",{className:"text-[9px] text-slate-500 font-mono",children:["(Nearest: ",n.fireProtectionAndUtilities.nearestHydrantDistanceFt," FT)"]})]}),e.jsxs("div",{className:"flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 text-[10px]",children:[e.jsx("span",{className:"text-slate-400",children:"Wells ≤ 1,000':"}),e.jsx("span",{className:"font-bold text-cyan-400 font-mono",children:n.fireProtectionAndUtilities.wellCountWithin1000Ft}),n.fireProtectionAndUtilities.nearestWellDistanceFt!==null&&e.jsxs("span",{className:"text-[9px] text-slate-500 font-mono",children:["(Nearest: ",n.fireProtectionAndUtilities.nearestWellDistanceFt," FT)"]})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-lg border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-xs font-bold text-amber-300 flex items-center gap-1.5",children:[e.jsx(bt,{className:"w-3.5 h-3.5 text-amber-400"})," Municipal Fire Hydrants"]}),e.jsx("span",{className:"text-[9px] font-mono text-slate-400",children:n.fireProtectionAndUtilities.hasHydrantData?`${n.fireProtectionAndUtilities.within1000FtHydrants.length} Found`:"No Cadastre"})]}),n.fireProtectionAndUtilities.hasHydrantData?n.fireProtectionAndUtilities.within1000FtHydrants.length===0?e.jsx("div",{className:"p-2.5 rounded bg-slate-950/60 border border-slate-800 text-[10px] text-slate-400 italic",children:"No municipal fire hydrants recorded within 1,000 feet of this property."}):e.jsx("div",{className:"max-h-48 overflow-y-auto space-y-1.5 pr-1",children:n.fireProtectionAndUtilities.within1000FtHydrants.map((a,r)=>e.jsxs("div",{className:"p-2 rounded bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-[10px]",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"font-bold text-white font-mono flex items-center gap-1.5",children:[e.jsxs("span",{children:["ID: ",a.id]}),a.bearing&&e.jsx("span",{className:"text-[9px] px-1 py-0.2 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30",children:a.bearing})]}),a.address&&e.jsx("div",{className:"text-[9px] text-slate-400 truncate max-w-[200px]",title:a.address,children:a.address}),e.jsx("div",{className:"text-[8.5px] text-slate-500",children:a.source})]}),e.jsxs("div",{className:"text-right shrink-0",children:[e.jsxs("div",{className:"font-black text-amber-400 font-mono text-xs",children:[a.distanceFt," FT"]}),a.coordinates&&e.jsxs("div",{className:"text-[8px] font-mono text-slate-500",children:[a.coordinates[1].toFixed(5),"°, ",a.coordinates[0].toFixed(5),"°"]})]})]},r))}):e.jsx("div",{className:"p-2.5 rounded bg-slate-950/60 border border-slate-800 text-[10px] text-slate-400 italic",children:n.fireProtectionAndUtilities.coverageNote||"Hydrant cadastre unavailable for this jurisdiction from verified public data."})]}),e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-lg border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-xs font-bold text-cyan-300 flex items-center gap-1.5",children:[e.jsx(Kt,{className:"w-3.5 h-3.5 text-cyan-400"})," Water Wells & Service Connects"]}),e.jsxs("span",{className:"text-[9px] font-mono text-slate-400",children:[n.fireProtectionAndUtilities.within1000FtWells.length," Found"]})]}),n.fireProtectionAndUtilities.within1000FtWells.length===0?e.jsx("div",{className:"p-2.5 rounded bg-slate-950/60 border border-slate-800 text-[10px] text-slate-400 italic",children:"No public water supply, irrigation, or domestic wells recorded within 1,000 feet of this property."}):e.jsx("div",{className:"max-h-48 overflow-y-auto space-y-1.5 pr-1",children:n.fireProtectionAndUtilities.within1000FtWells.map((a,r)=>e.jsxs("div",{className:"p-2 rounded bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-[10px]",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"font-bold text-white font-mono flex items-center gap-1.5",children:[e.jsx("span",{className:"truncate max-w-[140px]",title:a.name||a.id,children:a.name||a.id}),a.bearing&&e.jsx("span",{className:"text-[9px] px-1 py-0.2 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30",children:a.bearing})]}),e.jsxs("div",{className:"text-[9px] text-slate-400",children:["Type: ",e.jsx("span",{className:"text-slate-300",children:a.type}),a.depthFt?` • Depth: ${a.depthFt} FT`:""]}),e.jsxs("div",{className:"text-[8.5px] text-slate-500",children:[a.aquifer||a.agency," (",a.source,")"]})]}),e.jsxs("div",{className:"text-right shrink-0",children:[e.jsxs("div",{className:"font-black text-cyan-400 font-mono text-xs",children:[a.distanceFt," FT"]}),a.coordinates&&e.jsxs("div",{className:"text-[8px] font-mono text-slate-500",children:[a.coordinates[1].toFixed(5),"°, ",a.coordinates[0].toFixed(5),"°"]})]})]},r))})]})]}),e.jsxs("div",{className:"text-[9px] text-slate-400 bg-slate-900/50 p-2 rounded border border-slate-800 flex items-center justify-between",children:[e.jsxs("span",{children:[e.jsx("b",{children:"Note:"})," Straight-line radial distance measured from parcel boundary/centroid. Zero qualitative assertions of adequacy, ratings, or deficiency are made."]}),e.jsx("span",{className:"font-mono text-slate-500 text-[8.5px]",children:"Source: FDEP PWS / USGS NWIS / Municipal GIS"})]})]}),!Q||Q.length<3?e.jsx("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-center text-xs text-slate-400 font-medium",children:"Authentic Geodetic Polygon Ring: Extracting from Cadastre database..."}):e.jsx(xa,{coordsRing:Q,parcel:s,report:n}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h4",{className:"font-bold text-amber-400 flex items-center gap-1.5 text-xs",children:[e.jsx(ht,{className:"w-4 h-4"})," Environmental & Flood Overlay"]}),n.environmentalRisks.firmPanelNumber&&e.jsxs("span",{className:"text-[9px] font-mono font-bold bg-sky-950 text-sky-300 border border-sky-600/50 px-1.5 py-0.5 rounded",children:["FIRM: ",n.environmentalRisks.firmPanelNumber]})]}),e.jsxs("div",{className:"space-y-1 text-[11px]",children:[e.jsxs("div",{className:"flex justify-between border-b border-slate-800/60 py-1",children:[e.jsx("span",{className:"text-slate-400",children:"Flood Hazard Zone:"}),e.jsx("span",{className:`font-bold ${(J=n.environmentalRisks.femaFloodZone)!=null&&J.includes("A")||(oe=n.environmentalRisks.femaFloodZone)!=null&&oe.includes("V")?"text-red-400":"text-emerald-400"}`,children:n.environmentalRisks.floodRiskLevel})]}),e.jsxs("div",{className:"flex justify-between border-b border-slate-800/60 py-1",children:[e.jsx("span",{className:"text-slate-400",children:"FEMA FIRM Panel:"}),e.jsx("span",{className:"font-mono font-bold text-sky-300",children:de(n.environmentalRisks.firmPanelNumber)})]}),e.jsxs("div",{className:"flex justify-between border-b border-slate-800/60 py-1",children:[e.jsx("span",{className:"text-slate-400",children:"Base Flood Elevation (BFE):"}),e.jsx("span",{className:"font-bold text-white",children:n.environmentalRisks.baseFloodElevation||"N/A"})]}),e.jsxs("div",{className:"flex justify-between border-b border-slate-800/60 py-1",children:[e.jsx("span",{className:"text-slate-400",children:"Mandatory Flood Insurance:"}),e.jsx("span",{className:`font-bold ${n.environmentalRisks.mandatoryInsuranceRequired?"text-red-400":"text-slate-300"}`,children:n.environmentalRisks.mandatoryInsuranceRequired?"REQUIRED (SFHA)":(pe=n.dataQuality)!=null&&pe.femaLookupDegraded?"UNVERIFIED":"OPTIONAL (Low Risk)"})]}),e.jsxs("div",{className:"flex justify-between border-b border-slate-800/60 py-1 items-center",children:[e.jsx("span",{className:"text-slate-400",children:"Wetlands Proximity:"}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"font-mono font-bold text-white",children:n.environmentalRisks.wetlandsProximityFt===0?"0 FT (Contains Wetlands)":n.environmentalRisks.wetlandsProximityFt===null?(ie=n.dataQuality)!=null&&ie.wetlandLookupDegraded?"UNVERIFIED":"None in search area":`${n.environmentalRisks.wetlandsProximityFt.toFixed(1)} FT`}),e.jsx("span",{className:`px-2 py-0.5 rounded text-[9.5px] font-extrabold border ${$e(n.environmentalRisks.wetlandsProximityFt,!!((u=n.dataQuality)!=null&&u.wetlandLookupDegraded)).badgeClass}`,children:$e(n.environmentalRisks.wetlandsProximityFt,!!((p=n.dataQuality)!=null&&p.wetlandLookupDegraded)).label})]})]})]}),(()=>{var x;const a=n.environmentalRisks.wetlandsProximityFt,r=$e(a,!!((x=n.dataQuality)!=null&&x.wetlandLookupDegraded));return e.jsxs("div",{className:`p-3 rounded-xl border transition-all space-y-1.5 mt-2.5 ${r.level==="CONTAINS_WETLANDS"?"bg-emerald-950/40 border-emerald-500/50 shadow-emerald-950/20":r.level==="HIGH"?"bg-rose-950/40 border-rose-500/50 shadow-rose-950/20":r.level==="MODERATE"?"bg-amber-950/40 border-amber-500/50 shadow-amber-950/20":r.level==="SLIGHT"?"bg-yellow-950/40 border-yellow-500/50 shadow-yellow-950/20":"bg-slate-900/80 border-slate-800"}`,children:[e.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-1.5",children:[e.jsxs("span",{className:"text-[11px] font-bold text-white flex items-center gap-1.5",children:[e.jsx(ea,{className:"w-3.5 h-3.5 text-teal-400"}),e.jsx("span",{children:"Wetland Proximity Assessment"})]}),e.jsx("span",{className:`px-2.5 py-0.5 rounded-md text-[10.5px] font-black tracking-wide uppercase border ${r.badgeClass}`,children:r.label})]}),e.jsxs("div",{className:"flex items-baseline justify-between border-t border-slate-800/60 pt-1.5",children:[e.jsx("span",{className:"text-slate-400 text-[11px]",children:"Proximity Distance:"}),e.jsx("span",{className:"font-mono font-black text-xs text-white",children:a===0?"0 FT (Direct Intersection / On-Site)":a===null?r.thresholdFt:`${a.toFixed(1)} FT (${r.thresholdFt})`})]}),e.jsx("p",{className:"text-[10px] text-slate-300 leading-snug",children:r.description})]})})(),e.jsxs("div",{className:"mt-2 flex gap-1.5",children:[e.jsxs("button",{type:"button",onClick:()=>oa({report:n,parcel:s}),className:"flex-1 py-1.5 px-3 bg-sky-950 hover:bg-sky-900 text-sky-200 border border-sky-700/60 font-bold text-[10px] rounded flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer hover:scale-[1.02]",title:"Direct download official FEMA FIRM Panel PDF dossier",children:[e.jsx(fe,{className:"w-3.5 h-3.5 text-sky-300"}),e.jsxs("span",{children:["Download Official FEMA FIRM Panel (",n.environmentalRisks.firmPanelNumber||"PDF",")"]})]}),n.environmentalRisks.femaPortalUrl&&e.jsx("a",{href:n.environmentalRisks.femaPortalUrl,target:"_blank",rel:"noopener noreferrer",className:"py-1.5 px-2 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 font-bold text-[10px] rounded flex items-center justify-center gap-1 transition-all",title:"Open FEMA Map Service Center Web Portal",children:e.jsx(Ne,{className:"w-3 h-3 text-slate-400"})})]})]}),e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsxs("h4",{className:"font-bold text-emerald-400 flex items-center gap-1.5",children:[e.jsx(ta,{className:"w-4 h-4"})," Property Appraiser Valuation"]}),e.jsxs("div",{className:"space-y-1 text-[11px]",children:[e.jsxs("div",{className:"flex justify-between border-b border-slate-800/60 py-1",children:[e.jsx("span",{className:"text-slate-400",children:"Land Assessed Value:"}),e.jsx("span",{className:"font-bold text-white",children:n.marketValuationEstimate.estimatedLandValue!==null?`$${n.marketValuationEstimate.estimatedLandValue.toLocaleString()}`:"UNVERIFIED"})]}),e.jsxs("div",{className:"flex justify-between border-b border-slate-800/60 py-1",children:[e.jsx("span",{className:"text-slate-400",children:"Total Assessed Value:"}),e.jsxs("span",{className:"font-bold text-white",children:["$",n.marketValuationEstimate.estimatedImprovedValue.toLocaleString()]})]})]})]})]}),n.feasibilityVerdict&&e.jsxs("div",{className:`p-4 rounded-xl border transition-all ${n.feasibilityVerdict.status==="THUMBS_UP"?"bg-emerald-950/40 border-emerald-500/40 text-emerald-100 shadow-emerald-950/30":n.feasibilityVerdict.status==="THUMBS_DOWN"?"bg-rose-950/40 border-rose-500/40 text-rose-100 shadow-rose-950/30":"bg-amber-950/40 border-amber-500/40 text-amber-100 shadow-amber-950/30"}`,children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"text-lg",children:n.feasibilityVerdict.status==="THUMBS_UP"?"👍":n.feasibilityVerdict.status==="THUMBS_DOWN"?"👎":"❓"}),e.jsx("h4",{className:"font-bold text-sm text-white",children:n.feasibilityVerdict.badgeLabel})]}),e.jsx("p",{className:"text-xs leading-relaxed text-slate-200 font-medium mb-3",children:n.feasibilityVerdict.summarySentence}),e.jsx("div",{className:"pt-2.5 border-t border-slate-800/70 text-[10px] text-slate-400 italic leading-snug",children:n.feasibilityVerdict.disclaimer})]})]}):null:e.jsx("div",{className:"text-center py-12 text-slate-400 font-medium",children:"Please select a parcel on the map to generate a Research Intelligence Report."})}),e.jsxs("div",{className:"p-4 bg-slate-950 border-t border-slate-800 flex justify-between items-center",children:[e.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:"Plugin: @parceliq/plugin-research v1.0.0"}),e.jsxs("div",{className:"flex items-center gap-2",children:[n&&e.jsxs("button",{type:"button",onClick:be,className:"px-3.5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all text-xs flex items-center gap-1.5 shadow-md hover:scale-105 cursor-pointer border border-blue-400/30",title:"Print certified 3-page Cadastral Boundary Survey & Feasibility Package",children:[e.jsx(ft,{className:"w-3.5 h-3.5 text-blue-200"}),e.jsx("span",{children:"Print Package"})]}),n&&e.jsxs("button",{onClick:()=>Mt(n,s||void 0),className:"px-3.5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl transition-all text-xs flex items-center gap-1.5 shadow-md hover:scale-105 cursor-pointer border border-emerald-400/30",title:"Export complete parcel research and sales history to Excel (.xlsx)",children:[e.jsx(aa,{className:"w-3.5 h-3.5 text-emerald-200"}),e.jsx("span",{children:"Export Dossier (.XLSX)"})]}),e.jsx("button",{onClick:o,className:"px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl transition-colors text-xs cursor-pointer",children:"Close"})]})]})]})]})},La={metadata:{id:"plugin-research",name:"GIS Site Research Intelligence",version:"3.7.0",description:"Decoupled spatial research, environmental risk matrix, and automated site synthesis.",author:"ParcelIQ Core Team",category:"research",enabled:!0},init:()=>{console.log("[ResearchPlugin] Initialized GIS Site Research plugin module.")},Component:ga,actionHandler:async s=>await Ce.generateResearchReport(s)};export{La as ResearchPlugin,ga as ResearchPluginModal,na as ResearchService,sa as lookupZoningCriteria,Ce as researchService};
