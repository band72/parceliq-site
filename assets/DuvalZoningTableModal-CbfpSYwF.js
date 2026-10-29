import{r as x,j as e}from"./react-vendor-CB5wtuEC.js";import{F as h,p as y}from"./index-CbiCS8Q5.js";import{L as v,D as N,P as C,X as F,S,M as w,p as k,q as L}from"./icons-vendor-BEIlHLFQ.js";import"./turf-vendor-CwrBJ54B.js";import"./maplibre-vendor-CLmOyQOb.js";import"./gis-vendor-Co8Zq2Um.js";import"./misc-data-D0yF5yJs.js";import"./duval-archibald-data-BYKUu7Lk.js";import"./duval-unrecorded-subs-data-Boarqhev.js";import"./duval-real-parcels-data-DdEJxntc.js";import"./florida-670-matrix-data-DYrACb7R.js";import"./supabase-vendor-CI_V8wt2.js";const Z=({isOpen:p,onClose:g})=>{const[i,u]=x.useState(""),[r,m]=x.useState("ALL"),[d,b]=x.useState("ALL"),c=x.useMemo(()=>h.filter(t=>{const l=i===""||t.zoningCode.toLowerCase().includes(i.toLowerCase())||t.zoningName.toLowerCase().includes(i.toLowerCase())||t.jurisdiction.toLowerCase().includes(i.toLowerCase())||t.allowedUses.toLowerCase().includes(i.toLowerCase()),n=r==="ALL"||t.countyKey===r,s=d==="ALL"||t.category===d;return l&&n&&s}),[i,r,d]);if(!p)return null;const f=()=>{const t=["County / Jurisdiction","Zoning Code","Zoning District Name","Category","Front Setback (FT)","Side Setback (FT)","Rear Setback (FT)","Min Lot Area (SQFT)","Min Frontage (FT)","Max Height (FT)","Max Coverage (%)","Max FAR","Allowed Uses"],l=c.map(a=>[`"${a.jurisdiction}"`,`"${a.zoningCode}"`,`"${a.zoningName}"`,`"${a.category}"`,a.frontSetbackFt,a.sideSetbackFt,a.rearSetbackFt,a.minLotAreaSqFt,a.minFrontageFt,a.maxHeightFt,a.maxLotCoveragePct,a.maxFar,`"${a.allowedUses.replace(/"/g,'""')}"`]),n="data:text/csv;charset=utf-8,"+[t.join(","),...l.map(a=>a.join(","))].join(`
`),s=encodeURI(n),o=document.createElement("a");o.setAttribute("href",s),o.setAttribute("download","Florida_First_Coast_Zoning_Setbacks_Matrix.csv"),document.body.appendChild(o),o.click(),document.body.removeChild(o)},j=()=>{const t=window.open("","_blank","width=1100,height=900");if(!t)return;const l=c.map(s=>`
      <tr style="border-bottom: 1px solid #cbd5e1; background: #ffffff;">
        <td style="padding: 8px; font-weight: 700; color: #475569; font-size: 11px;">${s.jurisdiction}</td>
        <td style="padding: 8px; font-weight: 800; color: #0284c7; font-family: monospace;">${s.zoningCode}</td>
        <td style="padding: 8px; font-weight: 700; color: #0f172a;">${s.zoningName}</td>
        <td style="padding: 8px; font-size: 11px;">${s.category}</td>
        <td style="padding: 8px; text-align: right; font-weight: 700;">${s.frontSetbackFt} FT</td>
        <td style="padding: 8px; text-align: right; font-weight: 700;">${s.sideSetbackFt} FT</td>
        <td style="padding: 8px; text-align: right; font-weight: 700;">${s.rearSetbackFt} FT</td>
        <td style="padding: 8px; text-align: right;">${s.minLotAreaSqFt.toLocaleString()} SF</td>
        <td style="padding: 8px; text-align: right;">${s.minFrontageFt} FT</td>
        <td style="padding: 8px; text-align: right;">${s.maxHeightFt} FT</td>
        <td style="padding: 8px; text-align: right;">${s.maxLotCoveragePct}%</td>
        <td style="padding: 8px; text-align: right;">${s.maxFar}</td>
      </tr>
    `).join(""),n=`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Florida First Coast Multi-County Zoning & Setbacks Matrix</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, sans-serif; margin: 30px; color: #0f172a; background: #ffffff; }
            .header { border-bottom: 3px solid #0284c7; padding-bottom: 12px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-end; }
            .brand { font-size: 22px; font-weight: 800; color: #0284c7; }
            .title { font-size: 16px; font-weight: 700; color: #0f172a; margin-top: 4px; }
            table { width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 11px; background: #ffffff; }
            th, td { border: 1px solid #cbd5e1; padding: 7px 9px; text-align: left; }
            th { background: #f1f5f9; font-weight: 700; color: #0f172a; text-transform: uppercase; font-size: 10px; }
            .footer { margin-top: 30px; border-top: 1px solid #cbd5e1; padding-top: 12px; font-size: 10px; color: #64748b; text-align: center; }
          </style>
        </head>
        <body style="background: #ffffff;">
          <div class="header">
            <div>
              <div class="brand">ParcelIQ Spatial GIS Engine</div>
              <div class="title">Florida First Coast Multi-County & Municipal Zoning Matrix</div>
              <div style="font-size: 11px; color: #64748b;">Duval • St. Johns • St. Augustine • Jax Beach • Neptune Beach • Nassau • Clay</div>
            </div>
            <div style="text-align: right;">
              <div style="font-weight: 700; font-size: 12px;">Northeast Florida Region</div>
              <div style="font-size: 10px; color: #64748b;">Generated: ${new Date().toLocaleDateString()}</div>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Jurisdiction</th>
                <th>Code</th>
                <th>District Name</th>
                <th>Category</th>
                <th style="text-align: right;">Front Setback</th>
                <th style="text-align: right;">Side Setback</th>
                <th style="text-align: right;">Rear Setback</th>
                <th style="text-align: right;">Min Area</th>
                <th style="text-align: right;">Frontage</th>
                <th style="text-align: right;">Max Height</th>
                <th style="text-align: right;">Max Coverage</th>
                <th style="text-align: right;">Max FAR</th>
              </tr>
            </thead>
            <tbody>
              ${l}
            </tbody>
          </table>

          <div class="footer">
            ParcelIQ Spatial GIS Engine • Multi-County First Coast Zoning Reference Database
          </div>

          ${y(400)}
        </body>
      </html>
    `;t.document.write(n),t.document.close()};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn",children:e.jsxs("div",{className:"bg-slate-900 border border-slate-700/80 rounded-2xl max-w-6xl w-full shadow-2xl text-slate-100 relative overflow-hidden flex flex-col max-h-[92vh]",children:[e.jsxs("div",{className:"border-b border-slate-800 px-6 py-4 flex items-center justify-between bg-slate-950/90",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400",children:e.jsx(v,{className:"w-5 h-5"})}),e.jsxs("div",{children:[e.jsxs("h3",{className:"font-extrabold text-base text-white flex items-center gap-2",children:[e.jsx("span",{children:"First Coast Multi-County Zoning Matrix"}),e.jsx("span",{className:"text-[10px] font-extrabold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30",children:"florida_zoning_codes"})]}),e.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:"Official Multi-Jurisdiction Yard Setbacks, Heights & Dimensional Lot Criteria"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:f,className:"px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all flex items-center gap-1.5 border border-slate-700 cursor-pointer",children:[e.jsx(N,{className:"w-3.5 h-3.5 text-blue-400"}),e.jsx("span",{children:"Export CSV"})]}),e.jsxs("button",{onClick:j,className:"px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-blue-600/30 cursor-pointer",children:[e.jsx(C,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Print Table"})]}),e.jsx("button",{onClick:g,className:"p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer",children:e.jsx(F,{className:"w-5 h-5"})})]})]}),e.jsxs("div",{className:"px-6 py-3 bg-slate-950/60 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"relative flex-1 min-w-[220px] flex items-center",children:[e.jsx(S,{className:"w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none z-10"}),e.jsx("input",{type:"text",placeholder:"Search code (e.g. RS-1, C-2), jurisdiction, or use...",value:i,onChange:t=>u(t.target.value),className:"w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-4 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(w,{className:"w-3.5 h-3.5 text-sky-400"}),e.jsxs("select",{value:r,onChange:t=>m(t.target.value),className:"bg-slate-900 border border-slate-700 text-slate-200 text-xs font-bold rounded-xl px-3 py-1.5 focus:ring-1 focus:ring-blue-500 cursor-pointer",children:[e.jsx("option",{value:"ALL",children:"All Counties & Municipalities"}),e.jsx("option",{value:"duval",children:"Duval County (Jacksonville / Atlantic Beach)"}),e.jsx("option",{value:"stJohns",children:"St. Johns County (Unincorporated)"}),e.jsx("option",{value:"stAugustine",children:"City of St. Augustine"}),e.jsx("option",{value:"stAugustineBeach",children:"City of St. Augustine Beach"}),e.jsx("option",{value:"jaxBeach",children:"City of Jacksonville Beach"}),e.jsx("option",{value:"neptuneBeach",children:"City of Neptune Beach"}),e.jsx("option",{value:"nassau",children:"Nassau County (Fernandina / Yulee)"}),e.jsx("option",{value:"clay",children:"Clay County (Orange Park / Fleming Island)"})]})]}),e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(k,{className:"w-3.5 h-3.5 text-slate-400"}),e.jsxs("select",{value:d,onChange:t=>b(t.target.value),className:"bg-slate-900 border border-slate-700 text-slate-200 text-xs font-bold rounded-xl px-3 py-1.5 focus:ring-1 focus:ring-blue-500 cursor-pointer",children:[e.jsx("option",{value:"ALL",children:"All Land Use Categories"}),e.jsx("option",{value:"Residential",children:"Residential"}),e.jsx("option",{value:"Commercial",children:"Commercial"}),e.jsx("option",{value:"Industrial",children:"Industrial"}),e.jsx("option",{value:"Agricultural",children:"Agricultural"}),e.jsx("option",{value:"Civic/Institutional",children:"Civic / Institutional"}),e.jsx("option",{value:"Special Use",children:"Special Use / Historic / PUD"})]})]})]})]}),e.jsx("div",{className:"flex-1 overflow-auto p-6 custom-scrollbar bg-slate-950/40",children:e.jsxs("table",{className:"w-full text-left border-collapse text-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-800 bg-slate-900/90 text-slate-400 font-bold uppercase text-[10px] tracking-wider sticky top-0 z-10 backdrop-blur-md",children:[e.jsx("th",{className:"p-3",children:"Jurisdiction"}),e.jsx("th",{className:"p-3",children:"Code"}),e.jsx("th",{className:"p-3",children:"District Name"}),e.jsx("th",{className:"p-3",children:"Category"}),e.jsx("th",{className:"p-3 text-right",children:"Front Setback"}),e.jsx("th",{className:"p-3 text-right",children:"Side Setback"}),e.jsx("th",{className:"p-3 text-right",children:"Rear Setback"}),e.jsx("th",{className:"p-3 text-right",children:"Min Lot Area"}),e.jsx("th",{className:"p-3 text-right",children:"Frontage"}),e.jsx("th",{className:"p-3 text-right",children:"Max Height"}),e.jsx("th",{className:"p-3 text-right",children:"Coverage"}),e.jsx("th",{className:"p-3 text-right",children:"Max FAR"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 font-mono",children:c.map(t=>e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[e.jsx("td",{className:"p-3 font-semibold text-slate-400 font-sans text-[11px]",children:t.jurisdiction}),e.jsx("td",{className:"p-3 font-extrabold text-blue-400 font-sans",children:e.jsx("span",{className:"px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/30",children:t.zoningCode})}),e.jsxs("td",{className:"p-3 font-semibold text-slate-200 font-sans",children:[e.jsx("div",{children:t.zoningName}),e.jsx("div",{className:"text-[11px] font-normal text-slate-400 mt-0.5 line-clamp-1 font-sans",children:t.allowedUses})]}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:t.category}),e.jsxs("td",{className:"p-3 text-right font-bold text-sky-300",children:[t.frontSetbackFt," FT"]}),e.jsxs("td",{className:"p-3 text-right font-bold text-sky-300",children:[t.sideSetbackFt," FT"]}),e.jsxs("td",{className:"p-3 text-right font-bold text-sky-300",children:[t.rearSetbackFt," FT"]}),e.jsxs("td",{className:"p-3 text-right text-slate-300",children:[t.minLotAreaSqFt.toLocaleString()," SF"]}),e.jsxs("td",{className:"p-3 text-right text-slate-300",children:[t.minFrontageFt," FT"]}),e.jsxs("td",{className:"p-3 text-right text-slate-300",children:[t.maxHeightFt," FT"]}),e.jsxs("td",{className:"p-3 text-right text-slate-300",children:[t.maxLotCoveragePct,"%"]}),e.jsx("td",{className:"p-3 text-right text-slate-300",children:t.maxFar})]},t.id))})]})}),e.jsxs("div",{className:"border-t border-slate-800 px-6 py-3 bg-slate-950/90 text-xs text-slate-400 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(L,{className:"w-4 h-4 text-emerald-400"}),e.jsxs("span",{children:["Showing ",e.jsx("strong",{children:c.length})," of ",e.jsx("strong",{children:h.length})," First Coast Zoning Districts"]})]}),e.jsx("div",{className:"text-[11px] text-slate-500",children:"Coverage: Duval • St. Johns • St. Augustine • St. Augustine Beach • Jax Beach • Neptune Beach • Nassau • Clay"})]})]})})};export{Z as DuvalZoningTableModal};
