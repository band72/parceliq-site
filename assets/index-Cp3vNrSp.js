import{r as b,j as e}from"./react-vendor-CB5wtuEC.js";import{p as g,a as N}from"./cogoEngine-BafPfX_g.js";import{X as C,C as f,L as E,aj as L,D as j}from"./icons-vendor-BEIlHLFQ.js";import"./index-CbiCS8Q5.js";import"./turf-vendor-CwrBJ54B.js";import"./maplibre-vendor-CLmOyQOb.js";import"./gis-vendor-Co8Zq2Um.js";import"./misc-data-D0yF5yJs.js";import"./duval-archibald-data-BYKUu7Lk.js";import"./duval-unrecorded-subs-data-Boarqhev.js";import"./duval-real-parcels-data-DdEJxntc.js";import"./florida-670-matrix-data-DYrACb7R.js";import"./supabase-vendor-CI_V8wt2.js";import"./geodesyService-BArSPgNZ.js";function A(t){if(!t||!t.coordinates||t.coordinates.length===0)return`0
SECTION
2
HEADER
0
ENDSEC
0
EOF`;const s=t.coordinates[0]||[],i=t.apn||t.duvalReNumber||"PARCEL_BOUNDARY";let o=`0
SECTION
2
HEADER
9
$ACADVER
1
AC1015
0
ENDSEC
0
SECTION
2
TABLES
0
TABLE
2
LAYER
70
2
0
LAYER
2
PARCEL_BOUNDARY
70
0
62
3
6
CONTINUOUS
0
LAYER
2
PARCEL_ANNOTATIONS
70
0
62
7
6
CONTINUOUS
0
ENDTAB
0
ENDSEC
0
SECTION
2
BLOCKS
0
ENDSEC
0
SECTION
2
ENTITIES
`;if(s.length>2&&(o+=`0
LWPOLYLINE
5
100
100
AcDbEntity
8
PARCEL_BOUNDARY
100
AcDbPolyline
90
${s.length}
70
1
43
0.0
`,s.forEach(a=>{const[l,n]=a,r=(l+81.65)*364e3,d=(n-30.33)*364e3;o+=`10
${r.toFixed(3)}
20
${d.toFixed(3)}
`})),s.length>0){const[a,l]=t.center||s[0],n=(a+81.65)*364e3,r=(l-30.33)*364e3;o+=`0
TEXT
5
101
100
AcDbEntity
8
PARCEL_ANNOTATIONS
100
AcDbText
10
${n.toFixed(3)}
20
${r.toFixed(3)}
30
0.0
40
12.0
1
${i} - ${t.address||""}
`}return o+=`0
ENDSEC
0
EOF`,o}function D(t){var a,l;if(!t||!t.coordinates||t.coordinates.length===0)return'<?xml version="1.0"?><LandXML xmlns="http://www.landxml.org/schema/LandXML-1.2"></LandXML>';const s=t.coordinates[0]||[],i=t.apn||t.duvalReNumber||"PARCEL_BOUNDARY";let o=`<?xml version="1.0" encoding="UTF-8"?>
<LandXML xmlns="http://www.landxml.org/schema/LandXML-1.2" date="${new Date().toISOString()}" version="1.2">
  <Units>
    <Imperial areaUnit="squareFoot" linearUnit="foot" volumeUnit="cubicYard"/>
  </Units>
  <Parcels>
    <Parcel name="${i}" area="${t.squareFeet||0}">
      <Center>${(((a=t.center)==null?void 0:a[1])||30.33).toFixed(6)} ${(((l=t.center)==null?void 0:l[0])||-81.65).toFixed(6)}</Center>
      <CoordGeom>
`;for(let n=0;n<s.length-1;n++){const[r,d]=s[n],[c,x]=s[n+1];o+=`        <Line>
          <Start>${d.toFixed(7)} ${r.toFixed(7)}</Start>
          <End>${x.toFixed(7)} ${c.toFixed(7)}</End>
        </Line>
`}return o+=`      </CoordGeom>
    </Parcel>
  </Parcels>
</LandXML>`,o}const v=({parcel:t,isOpen:s,onClose:i})=>{if(!s)return null;const[o]=b.useState((t==null?void 0:t.legalDescription)||""),[a,l]=b.useState("DXF"),n=g(o),r=N(n,(t==null?void 0:t.center)||[-81.655,30.332]),d=()=>{let c="",x="",m="text/plain";a==="DXF"?(c=A(t),x=`Parcel_${(t==null?void 0:t.apn)||"Boundary"}_AutoCAD.dxf`,m="application/dxf"):(c=D(t),x=`Parcel_${(t==null?void 0:t.apn)||"Boundary"}_Survey.xml`,m="application/xml");const p=new Blob([c],{type:m}),h=URL.createObjectURL(p),u=document.createElement("a");u.href=h,u.download=x,u.click(),URL.revokeObjectURL(h)};return e.jsx("div",{className:"fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center z-[100] p-4 animate-in fade-in duration-200",children:e.jsxs("div",{className:"bg-slate-900 border-2 border-emerald-500/80 rounded-2xl max-w-2xl w-full p-6 space-y-5 shadow-2xl relative text-slate-100 max-h-[90vh] overflow-y-auto",children:[e.jsx("button",{onClick:i,className:"absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors",children:e.jsx(C,{className:"w-5 h-5"})}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow",children:e.jsx(f,{className:"w-6 h-6"})}),e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg font-black text-white flex items-center gap-2",children:["Professional Surveyor COGO & CAD Export Suite",e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",children:"FAC 5J-17 Compliant"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Bowditch Compass Rule Traverse Balancing, Metes & Bounds Closure & Direct AutoCAD DXF / LandXML Exports"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 text-center font-mono",children:[e.jsxs("div",{className:"p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-400 block",children:"Linear Misclosure"}),e.jsxs("span",{className:`text-base font-bold ${r.misclosureFt<.1?"text-emerald-400":"text-amber-400"}`,children:[r.misclosureFt," FT"]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-400 block",children:"Closure Precision"}),e.jsx("span",{className:"text-base font-bold text-indigo-400",children:r.precisionRatio})]}),e.jsxs("div",{className:"p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-400 block",children:"Calculated Area"}),e.jsxs("span",{className:"text-base font-bold text-slate-200",children:[r.areaSqFt.toLocaleString()," SF"]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider block",children:"Select CAD Export Standard:"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 font-mono text-xs",children:[e.jsxs("button",{onClick:()=>l("DXF"),className:`p-3 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${a==="DXF"?"bg-emerald-950/60 border-emerald-500 text-white shadow-md":"bg-slate-950 border-slate-800 text-slate-400 hover:text-white"}`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(E,{className:"w-4 h-4 text-emerald-400"}),e.jsx("strong",{children:"AutoCAD 2000+ (.DXF)"})]}),e.jsx("span",{className:"text-[10px] text-emerald-300",children:"Layer Standard"})]}),e.jsxs("button",{onClick:()=>l("LANDXML"),className:`p-3 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${a==="LANDXML"?"bg-indigo-950/60 border-indigo-500 text-white shadow-md":"bg-slate-950 border-slate-800 text-slate-400 hover:text-white"}`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(L,{className:"w-4 h-4 text-indigo-400"}),e.jsx("strong",{children:"LandXML 1.2 (.XML)"})]}),e.jsx("span",{className:"text-[10px] text-indigo-300",children:"Civil 3D / Carlson"})]})]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-slate-800",children:[e.jsx("span",{className:"text-[11px] text-slate-400",children:"Export includes closed boundary linework & APN identification labels."}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:i,className:"px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-all cursor-pointer",children:"Cancel"}),e.jsxs("button",{onClick:d,className:"px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-lg shadow-emerald-600/30 flex items-center gap-1.5",children:[e.jsx(j,{className:"w-4 h-4"}),e.jsxs("span",{children:["Download ",a," File"]})]})]})]})]})})},M={metadata:{id:"cogo-cad-export",name:"Surveyor COGO & CAD Export Suite",version:"1.0.0",description:"Precision Bowditch traverse balancing, FAC 5J-17 closure verification, and direct AutoCAD DXF & LandXML export.",author:"ParcelIQ Geodesy & Survey Team",icon:"Compass",category:"utility",enabled:!0},Component:v};export{v as CogoCadExportModal,M as CogoCadPlugin,A as generateCadDxfContent,D as generateLandXmlContent};
