import{r as n,R as fe,j as e}from"./react-vendor-CB5wtuEC.js";import{c as he,f as Z,g as K,a as D}from"./parcelSplitter-CdTMAeUx.js";import{e as C,c as S,g as ue}from"./cogoEngine-4l4iQe9R.js";import{e as ve,a as P,p as ye}from"./index-BNEO8Sp_.js";import{d as je}from"./dxfExporter-DWRAbA7o.js";import{v as L,X as Ne,L as W,w as J,x as Ce,y as Se,z as Fe,H as we,I as ke,C as Ae,c as $e,D as Pe,P as Le}from"./icons-vendor-BEIlHLFQ.js";import"./turf-vendor-CwrBJ54B.js";import"./geodesyService-BArSPgNZ.js";import"./gis-vendor-Co8Zq2Um.js";import"./maplibre-vendor-CLmOyQOb.js";import"./misc-data-D0yF5yJs.js";import"./duval-archibald-data-BYKUu7Lk.js";import"./duval-unrecorded-subs-data-Boarqhev.js";import"./duval-real-parcels-data-DdEJxntc.js";import"./florida-670-matrix-data-DYrACb7R.js";import"./supabase-vendor-CI_V8wt2.js";const Ie=({isOpen:T,onClose:H,parcel:r,mapCanvasDataUrl:ee,onApplySubdivisionToMap:F,cogoResult:u})=>{var Q;const[y,j]=n.useState(50),[b,v]=n.useState(0),[te,q]=n.useState(!1),[I,E]=n.useState("ratio_angle"),[w,se]=n.useState(0),[k,ae]=n.useState(5),[N,R]=n.useState("total"),f=n.useMemo(()=>{if(!r)return[];const t=ve(r.coordinates);return!t||t.length<3?[]:t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]?t.slice(0,-1):t},[r]),M=(t,l)=>{if(!f||f.length<=Math.max(t,l))return;const g=f[t],A=f[l],V=(A[0]-g[0])*Math.cos(g[1]*Math.PI/180),h=A[1]-g[1];let m=Math.atan2(V,h)*180/Math.PI;m<0&&(m+=360);const z=Math.round(m)%180;v(z)},i=n.useMemo(()=>r?he(r,b,y):null,[r,b,y]),c=n.useMemo(()=>{if(!r)return null;const t=u&&u.calls.length>0?u:C(r.coordinates,r.center,r.squareFeet||15e3);return S(t,r.center)},[r,u]),x=n.useMemo(()=>{if(!i||!i.childA)return null;const t=C(i.childA.coordinates,i.childA.center,i.childA.squareFeet);return S(t,i.childA.center)},[i]),p=n.useMemo(()=>{if(!i||!i.childB)return null;const t=C(i.childB.coordinates,i.childB.center,i.childB.squareFeet);return S(t,i.childB.center)},[i]);if(fe.useEffect(()=>{T&&F&&i&&(F(i),q(!0))},[T,i,F]),!T||!r||!i)return null;const{childA:s,childB:a}=i,re=()=>{F&&i&&(F(i),q(!0))},le=()=>{let t;try{const o=document.querySelector(".maplibregl-canvas")||document.querySelector("canvas");if(o){const $=o.toDataURL("image/png");$&&$.length>500&&(t=$)}}catch(o){console.warn("[ParcelSplitterModal] Live DOM canvas capture note:",o)}t||(t=ee);const l=window.open("","_blank","width=900,height=1000");if(!l)return;const g=P(r.apn),A=P(r.address),V=P(r.zoningCode),h=P(s.apn),m=P(a.apn),z=K(r,i),G=u&&u.calls.length>0?u:C(r.coordinates),U=S(G,r.center),oe=C(s.coordinates),_=S(oe,s.center),ie=C(a.coordinates),Y=S(ie,a.center),X=ue(G),B=(o,$,be,O)=>`
      <div style="margin-top: 20px; page-break-inside: avoid; border: 1.5px solid #cbd5e1; border-radius: 10px; padding: 14px; background: #ffffff;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2.5px solid ${O}; padding-bottom: 8px; margin-bottom: 12px;">
          <div>
            <div style="font-weight: 900; font-size: 13px; color: ${O}; text-transform: uppercase; letter-spacing: 0.5px;">
              📋 SURVEYOR MAPCHECK (MAPCHK) AUDIT CERTIFICATE — ${$}
            </div>
            <div style="font-size: 10px; color: #475569; margin-top: 2px;">
              ${be}
            </div>
          </div>
          <div style="text-align: right;">
            <span style="background: ${o.status==="PASSED"?"#15803d":"#d97706"}; color: #ffffff; font-weight: 900; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-family: monospace;">
              MAPCHECK: ${o.status}
            </span>
            <div style="font-size: 9px; font-family: monospace; color: #64748b; margin-top: 3px;">
              P.O.B.: ${o.pobCoordinates[0].toFixed(5)}°, ${o.pobCoordinates[1].toFixed(5)}°
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 12px; font-size: 11px;">
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px;">
            <div style="font-size: 9px; font-weight: 700; color: #64748b; text-transform: uppercase;">Sum Departures (&sum; &Delta;X)</div>
            <div style="font-weight: 800; font-family: monospace; color: #0f172a; margin-top: 2px;">${o.sumDeparturesFt>=0?"+":""}${o.sumDeparturesFt} FT</div>
          </div>
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px;">
            <div style="font-size: 9px; font-weight: 700; color: #64748b; text-transform: uppercase;">Sum Latitudes (&sum; &Delta;Y)</div>
            <div style="font-weight: 800; font-family: monospace; color: #0f172a; margin-top: 2px;">${o.sumLatitudesFt>=0?"+":""}${o.sumLatitudesFt} FT</div>
          </div>
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px;">
            <div style="font-size: 9px; font-weight: 700; color: #64748b; text-transform: uppercase;">Misclosure Vector</div>
            <div style="font-weight: 800; font-family: monospace; color: #0369a1; margin-top: 2px;">${o.misclosureDistanceFt} FT</div>
          </div>
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px;">
            <div style="font-size: 9px; font-weight: 700; color: #64748b; text-transform: uppercase;">MapCheck Precision</div>
            <div style="font-weight: 800; font-family: monospace; color: #15803d; margin-top: 2px;">${o.precisionRatio}</div>
          </div>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 10px; font-family: monospace; background: #ffffff;">
          <thead>
            <tr style="background: #f1f5f9; color: #0f172a; border-bottom: 2px solid #cbd5e1;">
              <th style="padding: 5px 6px; text-align: left;">Course</th>
              <th style="padding: 5px 6px; text-align: left;">Segment</th>
              <th style="padding: 5px 6px; text-align: left;">Bearing Call</th>
              <th style="padding: 5px 6px; text-align: right;">Distance (FT)</th>
              <th style="padding: 5px 6px; text-align: right;">Departure &Delta;X (FT)</th>
              <th style="padding: 5px 6px; text-align: right;">Latitude &Delta;Y (FT)</th>
              <th style="padding: 5px 6px; text-align: right;">Coord (Easting, Northing)</th>
            </tr>
          </thead>
          <tbody>
            ${o.courses.map(d=>`
              <tr style="border-bottom: 1px solid #e2e8f0; background: #ffffff;">
                <td style="padding: 5px 6px; font-weight: 700; color: ${O};">C${d.courseNumber}</td>
                <td style="padding: 5px 6px; color: #334155;">${d.fromVertex} &rarr; ${d.toVertex}</td>
                <td style="padding: 5px 6px; font-weight: 700; color: #0f172a;">${d.bearingCall}</td>
                <td style="padding: 5px 6px; text-align: right; font-weight: 700;">${d.distanceFt} FT</td>
                <td style="padding: 5px 6px; text-align: right; color: ${d.departureFt>=0?"#15803d":"#b91c1c"};">${d.departureFt>=0?"+":""}${d.departureFt}</td>
                <td style="padding: 5px 6px; text-align: right; color: ${d.latitudeFt>=0?"#15803d":"#b91c1c"};">${d.latitudeFt>=0?"+":""}${d.latitudeFt}</td>
                <td style="padding: 5px 6px; text-align: right; color: #64748b;">(${d.eastingFt}, ${d.northingFt})</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `,de=B(U,`TOTAL PARENT PARCEL (${g})`,`Total Property Boundary Audit • Area: ${(r.squareFeet||0).toLocaleString()} SF (${r.acreage} AC) • ${U.courses.length} Courses`,"#0284c7"),ne=B(_,`1ST SUBDIVIDED PARCEL (CHILD LOT 1 - ${h})`,`1st Split Sub-Lot Boundary Audit • Area: ${s.squareFeet.toLocaleString()} SF (${s.acreage} AC) • ${_.courses.length} Courses`,"#0891b2"),ce=B(Y,`2ND SUBDIVIDED PARCEL (CHILD LOT 2 - ${m})`,`2nd Split Sub-Lot Boundary Audit • Area: ${a.squareFeet.toLocaleString()} SF (${a.acreage} AC) • ${Y.courses.length} Courses`,"#d97706"),xe=`
      <div style="margin-top: 20px; page-break-inside: avoid; border: 1.5px solid #cbd5e1; border-radius: 10px; padding: 14px; background: #ffffff;">
        <div style="font-weight: 800; font-size: 13px; color: #0284c7; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #0284c7; padding-bottom: 6px; margin-bottom: 12px;">
          📏 OFFICIAL BOUNDARY LINE & CURVE TABLES (L1-Ln / C1-Cn)
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <!-- LINE TABLE -->
          <div>
            <div style="font-size: 11px; font-weight: 800; color: #0284c7; margin-bottom: 6px; text-transform: uppercase;">
              Line Table (Straight Boundary Segments)
            </div>
            <table style="width: 100%; border-collapse: collapse; font-size: 10px; font-family: monospace; background: #ffffff; border: 1px solid #cbd5e1;">
              <thead>
                <tr style="background: #f1f5f9; color: #0f172a; border-bottom: 1.5px solid #cbd5e1;">
                  <th style="padding: 5px; text-align: left;">Line</th>
                  <th style="padding: 5px; text-align: left;">Segment</th>
                  <th style="padding: 5px; text-align: left;">Bearing</th>
                  <th style="padding: 5px; text-align: right;">Length</th>
                </tr>
              </thead>
              <tbody>
                ${X.lineTable.map(o=>`
                  <tr style="border-bottom: 1px solid #e2e8f0; background: #ffffff;">
                    <td style="padding: 5px; font-weight: 700; color: #0284c7;">${o.lineId}</td>
                    <td style="padding: 5px; color: #334155;">${o.segment}</td>
                    <td style="padding: 5px; font-weight: 700; color: #0f172a;">${o.bearing}</td>
                    <td style="padding: 5px; text-align: right; font-weight: 700;">${o.distanceFt} FT</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>

          <!-- CURVE TABLE -->
          <div>
            <div style="font-size: 11px; font-weight: 800; color: #0284c7; margin-bottom: 6px; text-transform: uppercase;">
              Curve Table (Arc & R.O.W. Segments)
            </div>
            <table style="width: 100%; border-collapse: collapse; font-size: 10px; font-family: monospace; background: #ffffff; border: 1px solid #cbd5e1;">
              <thead>
                <tr style="background: #f1f5f9; color: #0f172a; border-bottom: 1.5px solid #cbd5e1;">
                  <th style="padding: 5px; text-align: left;">Curve</th>
                  <th style="padding: 5px; text-align: right;">Radius</th>
                  <th style="padding: 5px; text-align: right;">Arc Len</th>
                  <th style="padding: 5px; text-align: left;">Delta Angle</th>
                  <th style="padding: 5px; text-align: right;">Chord Dist</th>
                </tr>
              </thead>
              <tbody>
                ${X.curveTable.map(o=>`
                  <tr style="border-bottom: 1px solid #e2e8f0; background: #ffffff;">
                    <td style="padding: 5px; font-weight: 700; color: #0284c7;">${o.curveId}</td>
                    <td style="padding: 5px; text-align: right;">${o.radiusFt} FT</td>
                    <td style="padding: 5px; text-align: right; font-weight: 700; color: #0f172a;">${o.arcLengthFt} FT</td>
                    <td style="padding: 5px; font-weight: 700;">${o.deltaAngle}</td>
                    <td style="padding: 5px; text-align: right;">${o.chordDistanceFt} FT</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,pe=D(s.coordinates,`CHILD LOT 1 - PRIMARY SPLIT (${s.apn})`,`${s.squareFeet.toLocaleString()} SF (${s.acreage} AC)`,"#0891b2","rgba(8, 145, 178, 0.15)"),ge=D(a.coordinates,`CHILD LOT 2 - REMAINDER PARCEL (${a.apn})`,`${a.squareFeet.toLocaleString()} SF (${a.acreage} AC)`,"#d97706","rgba(217, 119, 6, 0.15)"),me=`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Official Parcel Subdivision Feasibility Report - ${g}</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, sans-serif; margin: 30px; color: #1e293b; background: #ffffff; }
            .header { border-bottom: 3px solid #0284c7; padding-bottom: 14px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-end; }
            .brand { font-size: 22px; font-weight: 800; color: #0284c7; }
            .title { font-size: 16px; font-weight: 700; color: #0f172a; margin-top: 3px; }
            .subtitle { font-size: 11px; color: #64748b; }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
            .card { background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 14px; }
            .card-title { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 6px; }
            .big-val { font-size: 18px; font-weight: 800; color: #0f172a; }
            table { width: 100%; border-collapse: collapse; margin-top: 12px; font-size: 12px; background: #ffffff; }
            th, td { border: 1px solid #cbd5e1; padding: 8px 10px; text-align: left; }
            th { background: #f1f5f9; font-weight: 700; color: #0f172a; }
            .badge-pass { background: #dcfce7; color: #15803d; font-weight: 700; padding: 3px 7px; border-radius: 6px; display: inline-block; font-size: 11px; }
            .badge-fail { background: #fee2e2; color: #b91c1c; font-weight: 700; padding: 3px 7px; border-radius: 6px; display: inline-block; font-size: 11px; }
            .footer { margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 14px; font-size: 11px; color: #94a3b8; text-align: center; }
            .page-break { page-break-before: always; break-before: page; padding-top: 10px; background: #ffffff; }
            @media print { body { margin: 15px; background: #ffffff; } .page-break { page-break-before: always; break-before: page; } }
          </style>
        </head>
        <body style="background: #ffffff;">

          <!-- PAGE 1: TOTAL PARENT PARCEL ANALYSIS -->
          <div class="header">
            <div>
              <div class="brand">ParcelIQ Spatial GIS Engine</div>
              <div class="title">1. Total Parent Parcel Feasibility & MapCheck Certificate</div>
              <div class="subtitle">Duval County Property Appraiser Dataset • Total Property Boundary & Split Analysis</div>
            </div>
            <div style="text-align: right;">
              <div style="font-weight: 800; font-size: 14px; color: #0284c7;">PARENT ${g}</div>
              <div class="subtitle">Page 1 of 4</div>
            </div>
          </div>

          <div class="card" style="margin-bottom: 16px; background: #ffffff; border-left: 4px solid #0284c7;">
            <div class="card-title" style="color: #0284c7;">Total Parent Property Summary</div>
            <div style="font-size: 16px; font-weight: 800; color: #0f172a;">${A}</div>
            <div style="font-size: 12px; color: #475569; margin-top: 4px;">
              Parent Parcel Area: <strong>${(r.squareFeet||0).toLocaleString()} SQFT (${r.acreage} AC)</strong> | Zoning Code: <strong>${V}</strong> | Jurisdiction: <strong>Duval County, FL</strong>
            </div>
          </div>

          <div class="grid">
            <div class="card" style="border-left: 4px solid #0891b2; background: #ffffff;">
              <div class="card-title" style="color: #0891b2;">Subdivided Child Lot 1 (Primary Split)</div>
              <div class="big-val" style="color: #0891b2;">${s.squareFeet.toLocaleString()} SQFT</div>
              <div style="font-size: 12px; font-weight: 700; color: #475569; margin-top: 4px;">${s.acreage} AC • Frontage: ${s.frontageFt} FT</div>
              <div style="font-size: 11px; font-family: monospace; color: #64748b; margin-top: 2px;">Assigned APN: ${h}</div>
              <div style="margin-top: 6px;">
                <span class="${s.isCompliant?"badge-pass":"badge-fail"}">${s.isCompliant?"✓ PASSES R-1 MIN SIZE":"✗ VARIANCE REQUIRED"}</span>
              </div>
            </div>

            <div class="card" style="border-left: 4px solid #d97706; background: #ffffff;">
              <div class="card-title" style="color: #d97706;">Subdivided Child Lot 2 (Remainder Parcel)</div>
              <div class="big-val" style="color: #d97706;">${a.squareFeet.toLocaleString()} SQFT</div>
              <div style="font-size: 12px; font-weight: 700; color: #475569; margin-top: 4px;">${a.acreage} AC • Frontage: ${a.frontageFt} FT</div>
              <div style="font-size: 11px; font-family: monospace; color: #64748b; margin-top: 2px;">Assigned APN: ${m}</div>
              <div style="margin-top: 6px;">
                <span class="${a.isCompliant?"badge-pass":"badge-fail"}">${a.isCompliant?"✓ PASSES R-1 MIN SIZE":"✗ VARIANCE REQUIRED"}</span>
              </div>
            </div>
          </div>

          <div style="font-weight: 800; font-size: 13px; color: #0f172a; margin-top: 16px; margin-bottom: 6px;">
            Subdivision Zoning Compliance Matrix
          </div>
          <table style="background: #ffffff;">
            <thead>
              <tr style="background: #f1f5f9; color: #0f172a;">
                <th>Child Parcel ID</th>
                <th>Calculated Area</th>
                <th>Duval County Requirement (R-1)</th>
                <th>Street Frontage</th>
                <th>Compliance Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background: #ffffff;">
                <td><strong>${h} (Child Lot 1)</strong></td>
                <td>${s.squareFeet.toLocaleString()} SF (${s.acreage} AC)</td>
                <td>Minimum 6,000 SQFT</td>
                <td>${s.frontageFt} FT</td>
                <td><span class="${s.isCompliant?"badge-pass":"badge-fail"}">${s.isCompliant?"✓ PASS":"✗ VARIANCE REQUIRED"}</span></td>
              </tr>
              <tr style="background: #ffffff;">
                <td><strong>${m} (Child Lot 2 Remainder)</strong></td>
                <td>${a.squareFeet.toLocaleString()} SF (${a.acreage} AC)</td>
                <td>Minimum 6,000 SQFT</td>
                <td>${a.frontageFt} FT</td>
                <td><span class="${a.isCompliant?"badge-pass":"badge-fail"}">${a.isCompliant?"✓ PASS":"✗ VARIANCE REQUIRED"}</span></td>
              </tr>
            </tbody>
          </table>

          ${de}
          ${xe}

          <div class="footer">
            ParcelIQ Spatial GIS Engine • Page 1 of 4 • Total Parent Parcel Analysis (${g})
          </div>


          <!-- PAGE 2: DEDICATED PAGE FOR SUBDIVIDED CHILD LOT 1 -->
          <div class="page-break">
            <div class="header">
              <div>
                <div class="brand">ParcelIQ Spatial GIS Engine</div>
                <div class="title">2. Subdivided Child Lot 1 Boundary & MapCheck Certificate</div>
                <div class="subtitle">Primary Subdivided Outparcel • Standalone Boundary Geometry & Civil 3D MapCheck Audit</div>
              </div>
              <div style="text-align: right;">
                <div style="font-weight: 800; font-size: 14px; color: #0891b2;">LOT 1: ${h}</div>
                <div class="subtitle">Page 2 of 4</div>
              </div>
            </div>

            <div class="grid" style="grid-template-columns: 1fr 2fr; gap: 16px; margin-bottom: 16px;">
              <div class="card" style="border-left: 4px solid #0891b2; background: #ffffff;">
                <div class="card-title" style="color: #0891b2;">Child Lot 1 Property Attributes</div>
                <div style="font-size: 14px; font-weight: 800; color: #0f172a; margin-bottom: 4px;">${s.address}</div>
                <div class="big-val" style="color: #0891b2; margin-top: 6px;">${s.squareFeet.toLocaleString()} SQFT</div>
                <div style="font-size: 12px; font-weight: 700; color: #475569; margin-top: 2px;">${s.acreage} AC</div>
                <div style="font-size: 11px; color: #334155; margin-top: 6px;">Frontage: <strong>${s.frontageFt} FT</strong> • Depth: <strong>${s.depthFt} FT</strong></div>
                <div style="font-size: 11px; font-family: monospace; color: #64748b; margin-top: 4px;">Assigned APN: ${h}</div>
                <div style="margin-top: 8px;">
                  <span class="${s.isCompliant?"badge-pass":"badge-fail"}">${s.isCompliant?"✓ PASSES R-1 MIN SIZE (6,000 SF)":"✗ VARIANCE REQUIRED"}</span>
                </div>
              </div>

              <div class="card" style="background: #ffffff; border: 1.5px solid #cbd5e1; padding: 12px;">
                <div class="card-title" style="color: #0891b2; margin-bottom: 8px; font-weight: 800;">
                  Child Lot 1 Boundary Vector Diagram & Nodes
                </div>
                ${pe}
              </div>
            </div>

            ${ne}

            <div class="footer">
              ParcelIQ Spatial GIS Engine • Page 2 of 4 • Subdivided Child Lot 1 (${h})
            </div>
          </div>


          <!-- PAGE 3: DEDICATED PAGE FOR SUBDIVIDED CHILD LOT 2 (REMAINDER PARCEL) -->
          <div class="page-break">
            <div class="header">
              <div>
                <div class="brand">ParcelIQ Spatial GIS Engine</div>
                <div class="title">3. Subdivided Child Lot 2 Certificate (Remainder Parcel)</div>
                <div class="subtitle">Remainder Outparcel • Standalone Boundary Geometry & Civil 3D MapCheck Audit</div>
              </div>
              <div style="text-align: right;">
                <div style="font-weight: 800; font-size: 14px; color: #d97706;">LOT 2: ${m}</div>
                <div class="subtitle">Page 3 of 4</div>
              </div>
            </div>

            <div class="grid" style="grid-template-columns: 1fr 2fr; gap: 16px; margin-bottom: 16px;">
              <div class="card" style="border-left: 4px solid #d97706; background: #ffffff;">
                <div class="card-title" style="color: #d97706;">Child Lot 2 Remainder Property Attributes</div>
                <div style="font-size: 14px; font-weight: 800; color: #0f172a; margin-bottom: 4px;">${a.address}</div>
                <div class="big-val" style="color: #d97706; margin-top: 6px;">${a.squareFeet.toLocaleString()} SQFT</div>
                <div style="font-size: 12px; font-weight: 700; color: #475569; margin-top: 2px;">${a.acreage} AC</div>
                <div style="font-size: 11px; color: #334155; margin-top: 6px;">Frontage: <strong>${a.frontageFt} FT</strong> • Depth: <strong>${a.depthFt} FT</strong></div>
                <div style="font-size: 11px; font-family: monospace; color: #64748b; margin-top: 4px;">Assigned APN: ${m}</div>
                <div style="margin-top: 8px;">
                  <span class="${a.isCompliant?"badge-pass":"badge-fail"}">${a.isCompliant?"✓ PASSES R-1 MIN SIZE (6,000 SF)":"✗ VARIANCE REQUIRED"}</span>
                </div>
              </div>

              <div class="card" style="background: #ffffff; border: 1.5px solid #cbd5e1; padding: 12px;">
                <div class="card-title" style="color: #d97706; margin-bottom: 8px; font-weight: 800;">
                  Child Lot 2 Remainder Boundary Vector Diagram & Nodes
                </div>
                ${ge}
              </div>
            </div>

            ${ce}

            <div class="footer">
              ParcelIQ Spatial GIS Engine • Page 3 of 4 • Subdivided Child Lot 2 Remainder (${m})
            </div>
          </div>


          <!-- PAGE 4: GIS MAP VIEWPORT & VECTOR SUBDIVISION SNAPSHOT -->
          <div class="page-break">
            <div class="header">
              <div>
                <div class="brand">ParcelIQ Spatial GIS Engine</div>
                <div class="title">4. Official GIS Map Viewport & Vector Subdivision Snapshot</div>
                <div class="subtitle">High-Resolution Viewport with Subdivision Linework, Boundary Nodes & FEMA Flood Risk Attributes</div>
              </div>
              <div style="text-align: right;">
                <div style="font-weight: 800; font-size: 14px; color: #0284c7;">PARENT ${g}</div>
                <div class="subtitle">Page 4 of 4</div>
              </div>
            </div>

            <div class="card" style="margin-bottom: 16px; background: #ffffff; border: 1.5px solid #cbd5e1; padding: 16px; page-break-inside: avoid;">
              <div class="card-title" style="font-weight: 800; color: #0284c7; margin-bottom: 12px; font-size: 12px; text-transform: uppercase;">
                GIS WebGL Map Viewport Screenshot & Overlay Linework (${A})
              </div>
              ${t?`
                <img id="mapScreenshotImg" src="${t}" style="max-width: 100%; width: 100%; height: auto; max-height: 440px; object-fit: contain; display: block; margin: 0 auto 16px auto; border-radius: 8px; border: 1.5px solid #cbd5e1;" />
              `:""}
              <div style="font-size: 11px; font-weight: 800; color: #475569; margin-bottom: 8px; text-transform: uppercase;">
                Interactive CAD Vector Linework & Boundary Nodes
              </div>
              ${z}
            </div>

            <div style="margin-top: 16px; background: #fff1f2; border: 1.5px solid #fda4af; border-radius: 8px; padding: 12px 16px; color: #9f1239; font-weight: 800; font-size: 12px; display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 18px;">⚠️</span>
              <span><strong>Flood Hazard Zone Attribute Note:</strong> Parcel evaluation completed using Duval County FEMA FIRM Panel data. Verify exact base flood elevations with a licensed surveyor prior to site development.</span>
            </div>

            <div class="footer">
              ParcelIQ Spatial GIS Engine • Page 4 of 4 • Official GIS Snapshot (${g})
            </div>
          </div>

          ${ye(400)}
        </body>
      </html>
    `;l.document.write(me),l.document.close()};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn",children:e.jsxs("div",{className:"bg-slate-900 border border-slate-700/80 rounded-2xl max-w-4xl w-full shadow-2xl text-slate-100 relative overflow-hidden flex flex-col max-h-[92vh]",children:[e.jsxs("div",{className:"border-b border-slate-800 px-6 py-3.5 flex items-center justify-between bg-slate-950/90",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400",children:e.jsx(L,{className:"w-5 h-5"})}),e.jsxs("div",{children:[e.jsxs("h3",{className:"font-extrabold text-base text-white flex items-center gap-2",children:[e.jsx("span",{children:"Parcel Splitting & MapCheck Engine"}),e.jsx("span",{className:"text-[10px] font-extrabold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30",children:"DUVAL GIS CAD"})]}),e.jsxs("p",{className:"text-xs text-slate-400 mt-0.5",children:[r.address," (",r.apn,") • Area: ",(r.squareFeet||0).toLocaleString()," SF (",r.acreage," AC)"]})]})]}),e.jsx("button",{onClick:H,className:"p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer",children:e.jsx(Ne,{className:"w-5 h-5"})})]}),e.jsxs("div",{className:"p-6 overflow-y-auto space-y-5 flex-1 custom-scrollbar",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between px-1",children:[e.jsxs("span",{className:"text-xs font-black text-sky-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(W,{className:"w-4 h-4 text-sky-400"}),e.jsxs("span",{children:["1. Total Parent Parcel Visualizer (",r.apn,")"]})]}),e.jsxs("span",{className:"text-[10px] font-mono text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-500/30 font-bold",children:["✂️ Cutting Line Vector: ",((Q=i.cutLine)==null?void 0:Q.bearingText)||Z(b)," (",b,"°)"]})]}),e.jsx("div",{className:"rounded-xl overflow-hidden border border-slate-800 shadow-2xl transition-all hover:border-sky-500/50",dangerouslySetInnerHTML:{__html:K(r,i,w,k)}})]}),s&&e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between px-1",children:[e.jsxs("span",{className:"text-xs font-black text-cyan-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(L,{className:"w-4 h-4 text-cyan-400"}),e.jsxs("span",{children:["2. Subdivided Child Lot 1 (Primary Split - ",s.apn,")"]})]}),e.jsxs("span",{className:"text-[10px] font-mono text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30 font-extrabold",children:["✂️ Lot 1 Area: ",s.squareFeet.toLocaleString()," SF (",s.acreage," AC)"]})]}),e.jsx("div",{className:"rounded-xl overflow-hidden border border-slate-800 shadow-2xl transition-all hover:border-cyan-500/50",dangerouslySetInnerHTML:{__html:D(s.coordinates,`CHILD LOT 1 - PRIMARY SPLIT (${s.apn})`,`${s.squareFeet.toLocaleString()} SF (${s.acreage} AC)`,"#06b6d4","rgba(6, 182, 212, 0.25)")}})]}),a&&e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between px-1",children:[e.jsxs("span",{className:"text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx(L,{className:"w-4 h-4 text-amber-400"}),e.jsxs("span",{children:["3. Subdivided Child Lot 2 (Remainder Parcel - ",a.apn,")"]})]}),e.jsxs("span",{className:"text-[10px] font-mono text-amber-300 bg-amber-950 px-2 py-0.5 rounded border border-amber-500/30 font-extrabold",children:["📦 Remainder Lot Area: ",a.squareFeet.toLocaleString()," SF (",a.acreage," AC)"]})]}),e.jsx("div",{className:"rounded-xl overflow-hidden border border-slate-800 shadow-2xl transition-all hover:border-amber-500/50",dangerouslySetInnerHTML:{__html:D(a.coordinates,`CHILD LOT 2 - REMAINDER PARCEL (${a.apn})`,`${a.squareFeet.toLocaleString()} SF (${a.acreage} AC)`,"#f59e0b","rgba(245, 158, 11, 0.25)")}})]})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3.5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-xs font-black text-sky-400 uppercase tracking-wider flex items-center gap-2",children:[e.jsx(L,{className:"w-4 h-4 text-amber-400"}),e.jsx("span",{children:"Select Subdivision Cut Tool:"})]}),e.jsxs("span",{className:"text-[10px] font-mono text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-500/30",children:[f.length," Corner Vertices (V1 - V",f.length,")"]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsxs("button",{onClick:()=>E("ratio_angle"),className:`p-3 rounded-xl border text-left transition-all cursor-pointer ${I==="ratio_angle"?"bg-sky-950/90 border-sky-400 text-white ring-1 ring-sky-400/40 shadow-lg":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"}`,children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-extrabold text-sky-300",children:[e.jsx(J,{className:"w-4 h-4 text-sky-400"}),e.jsx("span",{children:"1. Ratio & Angle Sliders"})]}),e.jsx("p",{className:"text-[10px] text-slate-400 mt-1",children:"Continuous angle (0°-180°) & ratio area solver"})]}),e.jsxs("button",{onClick:()=>E("vertex_to_vertex"),className:`p-3 rounded-xl border text-left transition-all cursor-pointer ${I==="vertex_to_vertex"?"bg-amber-950/90 border-amber-400 text-white ring-1 ring-amber-400/40 shadow-lg":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"}`,children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-extrabold text-amber-300",children:[e.jsx(Ce,{className:"w-4 h-4 text-amber-400"}),e.jsx("span",{children:"2. Point-to-Point Vertex Slicer"})]}),e.jsx("p",{className:"text-[10px] text-slate-400 mt-1",children:"Select 2 corner points (e.g. V5 to V15) to slice lot"})]}),e.jsxs("button",{onClick:()=>{E("frontage_parallel"),v(90),j(50)},className:`p-3 rounded-xl border text-left transition-all cursor-pointer ${I==="frontage_parallel"?"bg-emerald-950/90 border-emerald-400 text-white ring-1 ring-emerald-400/40 shadow-lg":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"}`,children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-extrabold text-emerald-300",children:[e.jsx(Se,{className:"w-4 h-4 text-emerald-400"}),e.jsx("span",{children:"3. Frontage Parallel Cut"})]}),e.jsx("p",{className:"text-[10px] text-slate-400 mt-1",children:"Auto-align cut vector parallel to street frontage"})]})]}),I==="vertex_to_vertex"&&e.jsxs("div",{className:"bg-slate-900 p-3.5 rounded-xl border border-amber-500/40 flex flex-wrap items-center justify-between gap-3 animate-fadeIn",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold text-slate-200",children:[e.jsx("span",{children:"Slice from Vertex:"}),e.jsx("select",{value:w,onChange:t=>{const l=parseInt(t.target.value);se(l),M(l,k)},className:"bg-slate-950 text-xs font-mono font-black text-amber-300 border border-amber-500/50 rounded-lg px-2.5 py-1 focus:outline-none cursor-pointer",children:f.map((t,l)=>e.jsxs("option",{value:l,children:["Point V",l+1]},l))}),e.jsx("span",{children:"to Vertex:"}),e.jsx("select",{value:k,onChange:t=>{const l=parseInt(t.target.value);ae(l),M(w,l)},className:"bg-slate-950 text-xs font-mono font-black text-amber-300 border border-amber-500/50 rounded-lg px-2.5 py-1 focus:outline-none cursor-pointer",children:f.map((t,l)=>e.jsxs("option",{value:l,children:["Point V",l+1]},l))})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("button",{onClick:()=>M(w,k),className:"px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all cursor-pointer shadow-md flex items-center gap-1.5",children:[e.jsx(L,{className:"w-3.5 h-3.5"}),e.jsxs("span",{children:["Apply V",w+1," ➔ V",k+1," Cut"]})]})})]})]}),e.jsx("div",{className:"bg-slate-950/90 border border-slate-800 rounded-xl p-4 space-y-5 shadow-2xl",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-2.5 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs",children:[e.jsxs("span",{className:"font-extrabold text-slate-200 flex items-center gap-1.5",children:[e.jsx(J,{className:"w-4 h-4 text-sky-400"}),e.jsx("span",{children:"Subdivision Split Ratio:"})]}),e.jsxs("div",{className:"flex items-center gap-1 bg-sky-950 px-2 py-0.5 rounded border border-sky-500/30 font-mono font-black text-sky-300",children:[e.jsx("input",{type:"number",min:"20",max:"80",value:y,onChange:t=>{const l=parseInt(t.target.value);isNaN(l)||j(Math.max(20,Math.min(80,l)))},className:"w-10 bg-transparent text-center focus:outline-none text-sky-300 font-bold"}),e.jsxs("span",{children:["% / ",100-y,"%"]})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>j(t=>Math.max(20,t-1)),className:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer",title:"-1% Split Ratio",children:e.jsx(Fe,{className:"w-3.5 h-3.5"})}),e.jsx("input",{type:"range",min:"20",max:"80",step:"1",value:y,onChange:t=>j(parseInt(t.target.value)||50),className:"w-full accent-sky-500 cursor-pointer h-2 bg-slate-800 rounded-lg"}),e.jsx("button",{onClick:()=>j(t=>Math.min(80,t+1)),className:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer",title:"+1% Split Ratio",children:e.jsx(we,{className:"w-3.5 h-3.5"})})]}),e.jsx("div",{className:"flex items-center justify-between gap-1 pt-1",children:[{label:"50/50 (Equal)",ratio:50},{label:"60/40",ratio:60},{label:"70/30",ratio:70},{label:"75/25",ratio:75},{label:"80/20",ratio:80}].map(t=>e.jsx("button",{onClick:()=>j(t.ratio),className:`px-2 py-1 rounded text-[10px] font-mono font-bold transition-all border cursor-pointer ${y===t.ratio?"bg-sky-500 text-slate-950 border-sky-400 shadow-sm":"bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-white"}`,children:t.label},t.ratio))})]}),e.jsxs("div",{className:"space-y-2.5 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs",children:[e.jsxs("span",{className:"font-extrabold text-slate-200 flex items-center gap-1.5",children:[e.jsx(ke,{className:"w-4 h-4 text-amber-400"}),e.jsx("span",{children:"Cut Line Rotation Angle:"})]}),e.jsxs("div",{className:"flex items-center gap-1 bg-amber-950 px-2.5 py-0.5 rounded border border-amber-500/30 font-mono font-black text-amber-300",children:[e.jsx(Ae,{className:"w-3.5 h-3.5 text-amber-400 mr-1"}),e.jsxs("span",{children:[Z(b)," ("]}),e.jsx("input",{type:"number",min:"0",max:"180",value:b,onChange:t=>{const l=parseInt(t.target.value);isNaN(l)||v((l%180+180)%180)},className:"w-9 bg-transparent text-center focus:outline-none text-amber-300 font-bold"}),e.jsx("span",{children:"°)"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>v(t=>(t-5+180)%180),className:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer font-mono text-[10px] font-bold",title:"-5° Cut Rotation",children:"-5°"}),e.jsx("input",{type:"range",min:"0",max:"180",step:"1",value:b,onChange:t=>v(parseInt(t.target.value)||0),className:"w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"}),e.jsx("button",{onClick:()=>v(t=>(t+5)%180),className:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer font-mono text-[10px] font-bold",title:"+5° Cut Rotation",children:"+5°"})]}),e.jsx("div",{className:"flex items-center justify-between gap-1 pt-1 flex-wrap",children:[{label:"0° N-S",angle:0},{label:"30°",angle:30},{label:"45° NE",angle:45},{label:"60°",angle:60},{label:"90° E-W",angle:90},{label:"120°",angle:120},{label:"135° NW",angle:135},{label:"180° N-S",angle:180}].map(t=>e.jsx("button",{onClick:()=>v(t.angle%180),className:`px-1.5 py-1 rounded text-[10px] font-mono font-bold transition-all border cursor-pointer ${b===t.angle%180?"bg-amber-500 text-slate-950 border-amber-400 shadow-sm":"bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-white"}`,children:t.label},t.angle))})]})]})}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-4 shadow-xl",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"p-2 rounded-lg bg-emerald-500/20 text-emerald-400",children:e.jsx($e,{className:"w-5 h-5"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-xs font-black text-white uppercase tracking-wider",children:"Civil 3D MapCheck (MAPCHK) Audits — All 3 Parcels"}),e.jsx("p",{className:"text-[10px] text-slate-400",children:"Latitude (ΔY), Departure (ΔX) & Precision Closure for Total Parent Parcel & Both Sub-Lots"})]})]}),e.jsxs("div",{className:"flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800",children:[e.jsx("button",{onClick:()=>R("total"),className:`px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${N==="total"?"bg-sky-500 text-slate-950 shadow-md":"text-slate-400 hover:text-white"}`,children:"📍 Total Parent Parcel"}),e.jsx("button",{onClick:()=>R("childA"),className:`px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${N==="childA"?"bg-cyan-500 text-slate-950 shadow-md":"text-slate-400 hover:text-white"}`,children:"✂️ 1st Split (Lot 1)"}),e.jsx("button",{onClick:()=>R("childB"),className:`px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${N==="childB"?"bg-amber-500 text-slate-950 shadow-md":"text-slate-400 hover:text-white"}`,children:"📦 2nd Split (Lot 2 - Remainder)"})]})]}),N==="total"&&c&&e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-3.5 rounded-xl border border-sky-500/40 animate-fadeIn",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"text-xs font-extrabold uppercase text-sky-400",children:["📍 Total Parent Parcel MapCheck (",r.apn,")"]}),e.jsxs("div",{className:"text-[11px] text-slate-300 font-mono",children:["Total Area: ",e.jsxs("strong",{children:[(r.squareFeet||0).toLocaleString()," SF"]})," (",r.acreage," AC) • ",c.courses.length," Boundary Courses"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",children:["MAPCHECK: ",c.status]}),e.jsxs("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono font-extrabold bg-sky-500/20 text-sky-300 border border-sky-500/30",children:["Precision: ",c.precisionRatio]})]})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-2 text-xs font-mono",children:[e.jsxs("div",{className:"bg-slate-950 p-2 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-[9px] text-slate-400 uppercase block",children:"Sum Departures (∑ ΔX)"}),e.jsxs("span",{className:"font-bold text-slate-200",children:[c.sumDeparturesFt>=0?"+":"",c.sumDeparturesFt," FT"]})]}),e.jsxs("div",{className:"bg-slate-950 p-2 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-[9px] text-slate-400 uppercase block",children:"Sum Latitudes (∑ ΔY)"}),e.jsxs("span",{className:"font-bold text-slate-200",children:[c.sumLatitudesFt>=0?"+":"",c.sumLatitudesFt," FT"]})]}),e.jsxs("div",{className:"bg-slate-950 p-2 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-[9px] text-slate-400 uppercase block",children:"Misclosure Vector"}),e.jsxs("span",{className:"font-bold text-sky-400",children:[c.misclosureDistanceFt," FT"]})]}),e.jsxs("div",{className:"bg-slate-950 p-2 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-[9px] text-slate-400 uppercase block",children:"Misclosure Bearing"}),e.jsx("span",{className:"font-bold text-emerald-400",children:c.misclosureBearing})]})]}),e.jsx("div",{className:"overflow-x-auto rounded-lg border border-slate-800",children:e.jsxs("table",{className:"w-full text-[11px] font-mono text-slate-300",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-400 border-b border-slate-800 text-left",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2",children:"Course"}),e.jsx("th",{className:"p-2",children:"Segment"}),e.jsx("th",{className:"p-2",children:"Bearing Call"}),e.jsx("th",{className:"p-2 text-right",children:"Distance (FT)"}),e.jsx("th",{className:"p-2 text-right",children:"Departure ΔX"}),e.jsx("th",{className:"p-2 text-right",children:"Latitude ΔY"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 bg-slate-900/50",children:c.courses.map(t=>e.jsxs("tr",{className:"hover:bg-slate-800/50",children:[e.jsxs("td",{className:"p-2 font-bold text-sky-400",children:["C",t.courseNumber]}),e.jsxs("td",{className:"p-2 text-slate-400",children:[t.fromVertex," ➔ ",t.toVertex]}),e.jsx("td",{className:"p-2 font-bold text-white",children:t.bearingCall}),e.jsxs("td",{className:"p-2 text-right font-bold text-slate-200",children:[t.distanceFt," FT"]}),e.jsxs("td",{className:`p-2 text-right ${t.departureFt>=0?"text-emerald-400":"text-rose-400"}`,children:[t.departureFt>=0?"+":"",t.departureFt]}),e.jsxs("td",{className:`p-2 text-right ${t.latitudeFt>=0?"text-emerald-400":"text-rose-400"}`,children:[t.latitudeFt>=0?"+":"",t.latitudeFt]})]},t.courseNumber))})]})})]}),N==="childA"&&x&&e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-3.5 rounded-xl border border-cyan-500/40 animate-fadeIn",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"text-xs font-extrabold uppercase text-cyan-400",children:["✂️ 1st Subdivided Parcel (Child Lot 1 - ",s.apn,")"]}),e.jsxs("div",{className:"text-[11px] text-slate-300 font-mono",children:["1st Split Area: ",e.jsxs("strong",{children:[s.squareFeet.toLocaleString()," SF"]})," (",s.acreage," AC) • ",x.courses.length," Boundary Courses"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",children:["MAPCHECK: ",x.status]}),e.jsxs("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono font-extrabold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",children:["Precision: ",x.precisionRatio]})]})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-2 text-xs font-mono",children:[e.jsxs("div",{className:"bg-slate-950 p-2 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-[9px] text-slate-400 uppercase block",children:"Sum Departures (∑ ΔX)"}),e.jsxs("span",{className:"font-bold text-slate-200",children:[x.sumDeparturesFt>=0?"+":"",x.sumDeparturesFt," FT"]})]}),e.jsxs("div",{className:"bg-slate-950 p-2 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-[9px] text-slate-400 uppercase block",children:"Sum Latitudes (∑ ΔY)"}),e.jsxs("span",{className:"font-bold text-slate-200",children:[x.sumLatitudesFt>=0?"+":"",x.sumLatitudesFt," FT"]})]}),e.jsxs("div",{className:"bg-slate-950 p-2 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-[9px] text-slate-400 uppercase block",children:"Misclosure Vector"}),e.jsxs("span",{className:"font-bold text-cyan-400",children:[x.misclosureDistanceFt," FT"]})]}),e.jsxs("div",{className:"bg-slate-950 p-2 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-[9px] text-slate-400 uppercase block",children:"Misclosure Bearing"}),e.jsx("span",{className:"font-bold text-emerald-400",children:x.misclosureBearing})]})]}),e.jsx("div",{className:"overflow-x-auto rounded-lg border border-slate-800",children:e.jsxs("table",{className:"w-full text-[11px] font-mono text-slate-300",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-400 border-b border-slate-800 text-left",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2",children:"Course"}),e.jsx("th",{className:"p-2",children:"Segment"}),e.jsx("th",{className:"p-2",children:"Bearing Call"}),e.jsx("th",{className:"p-2 text-right",children:"Distance (FT)"}),e.jsx("th",{className:"p-2 text-right",children:"Departure ΔX"}),e.jsx("th",{className:"p-2 text-right",children:"Latitude ΔY"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 bg-slate-900/50",children:x.courses.map(t=>e.jsxs("tr",{className:"hover:bg-slate-800/50",children:[e.jsxs("td",{className:"p-2 font-bold text-cyan-400",children:["C",t.courseNumber]}),e.jsxs("td",{className:"p-2 text-slate-400",children:[t.fromVertex," ➔ ",t.toVertex]}),e.jsx("td",{className:"p-2 font-bold text-white",children:t.bearingCall}),e.jsxs("td",{className:"p-2 text-right font-bold text-slate-200",children:[t.distanceFt," FT"]}),e.jsxs("td",{className:`p-2 text-right ${t.departureFt>=0?"text-emerald-400":"text-rose-400"}`,children:[t.departureFt>=0?"+":"",t.departureFt]}),e.jsxs("td",{className:`p-2 text-right ${t.latitudeFt>=0?"text-emerald-400":"text-rose-400"}`,children:[t.latitudeFt>=0?"+":"",t.latitudeFt]})]},t.courseNumber))})]})})]}),N==="childB"&&p&&e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-3.5 rounded-xl border border-amber-500/40 animate-fadeIn",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"text-xs font-extrabold uppercase text-amber-400",children:["📦 2nd Subdivided Parcel (Child Lot 2 - Remainder Parcel - ",a.apn,")"]}),e.jsxs("div",{className:"text-[11px] text-slate-300 font-mono",children:["Remainder Area: ",e.jsxs("strong",{children:[a.squareFeet.toLocaleString()," SF"]})," (",a.acreage," AC) • ",p.courses.length," Boundary Courses"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",children:["MAPCHECK: ",p.status]}),e.jsxs("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/30",children:["Precision: ",p.precisionRatio]})]})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-2 text-xs font-mono",children:[e.jsxs("div",{className:"bg-slate-950 p-2 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-[9px] text-slate-400 uppercase block",children:"Sum Departures (∑ ΔX)"}),e.jsxs("span",{className:"font-bold text-slate-200",children:[p.sumDeparturesFt>=0?"+":"",p.sumDeparturesFt," FT"]})]}),e.jsxs("div",{className:"bg-slate-950 p-2 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-[9px] text-slate-400 uppercase block",children:"Sum Latitudes (∑ ΔY)"}),e.jsxs("span",{className:"font-bold text-slate-200",children:[p.sumLatitudesFt>=0?"+":"",p.sumLatitudesFt," FT"]})]}),e.jsxs("div",{className:"bg-slate-950 p-2 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-[9px] text-slate-400 uppercase block",children:"Misclosure Vector"}),e.jsxs("span",{className:"font-bold text-amber-400",children:[p.misclosureDistanceFt," FT"]})]}),e.jsxs("div",{className:"bg-slate-950 p-2 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-[9px] text-slate-400 uppercase block",children:"Misclosure Bearing"}),e.jsx("span",{className:"font-bold text-emerald-400",children:p.misclosureBearing})]})]}),e.jsx("div",{className:"overflow-x-auto rounded-lg border border-slate-800",children:e.jsxs("table",{className:"w-full text-[11px] font-mono text-slate-300",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-400 border-b border-slate-800 text-left",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2",children:"Course"}),e.jsx("th",{className:"p-2",children:"Segment"}),e.jsx("th",{className:"p-2",children:"Bearing Call"}),e.jsx("th",{className:"p-2 text-right",children:"Distance (FT)"}),e.jsx("th",{className:"p-2 text-right",children:"Departure ΔX"}),e.jsx("th",{className:"p-2 text-right",children:"Latitude ΔY"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 bg-slate-900/50",children:p.courses.map(t=>e.jsxs("tr",{className:"hover:bg-slate-800/50",children:[e.jsxs("td",{className:"p-2 font-bold text-amber-400",children:["C",t.courseNumber]}),e.jsxs("td",{className:"p-2 text-slate-400",children:[t.fromVertex," ➔ ",t.toVertex]}),e.jsx("td",{className:"p-2 font-bold text-white",children:t.bearingCall}),e.jsxs("td",{className:"p-2 text-right font-bold text-slate-200",children:[t.distanceFt," FT"]}),e.jsxs("td",{className:`p-2 text-right ${t.departureFt>=0?"text-emerald-400":"text-rose-400"}`,children:[t.departureFt>=0?"+":"",t.departureFt]}),e.jsxs("td",{className:`p-2 text-right ${t.latitudeFt>=0?"text-emerald-400":"text-rose-400"}`,children:[t.latitudeFt>=0?"+":"",t.latitudeFt]})]},t.courseNumber))})]})})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-slate-950 to-sky-950/40 border border-sky-500/40 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-sky-400 uppercase tracking-wider",children:"Subdivided Child Lot 1 (Primary Split)"}),e.jsx("span",{className:`text-[10px] font-extrabold px-2 py-0.5 rounded ${s.isCompliant?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-rose-500/20 text-rose-300 border border-rose-500/30"}`,children:s.isCompliant?"✓ R-1 COMPLIANT":"⚠️ VARIANCE REQUIRED"})]}),e.jsxs("div",{className:"text-xl font-extrabold text-white",children:[s.squareFeet.toLocaleString()," ",e.jsxs("span",{className:"text-xs text-sky-300 font-mono font-normal",children:["SQFT (",s.acreage," AC)"]})]}),e.jsxs("div",{className:"text-xs font-mono text-slate-300",children:["Frontage: ",s.frontageFt," FT • Depth: ",s.depthFt," FT"]}),e.jsxs("div",{className:"text-[11px] font-mono text-slate-400",children:["Assigned APN: ",e.jsx("strong",{className:"text-sky-300",children:s.apn})]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-slate-950 to-amber-950/40 border border-amber-500/40 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider",children:"Subdivided Child Lot 2 (Remainder Parcel)"}),e.jsx("span",{className:`text-[10px] font-extrabold px-2 py-0.5 rounded ${a.isCompliant?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-rose-500/20 text-rose-300 border border-rose-500/30"}`,children:a.isCompliant?"✓ R-1 COMPLIANT":"⚠️ VARIANCE REQUIRED"})]}),e.jsxs("div",{className:"text-xl font-extrabold text-white",children:[a.squareFeet.toLocaleString()," ",e.jsxs("span",{className:"text-xs text-amber-300 font-mono font-normal",children:["SQFT (",a.acreage," AC)"]})]}),e.jsxs("div",{className:"text-xs font-mono text-slate-300",children:["Frontage: ",a.frontageFt," FT • Depth: ",a.depthFt," FT"]}),e.jsxs("div",{className:"text-[11px] font-mono text-slate-400",children:["Assigned APN: ",e.jsx("strong",{className:"text-amber-300",children:a.apn})]})]})]}),e.jsxs("div",{className:"p-3.5 rounded-xl bg-gradient-to-r from-rose-950/80 to-amber-950/80 border border-rose-500/50 text-rose-200 text-xs font-semibold flex items-center gap-3 shadow-lg",children:[e.jsx("span",{className:"text-lg",children:"⚠️"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-white block font-bold",children:"Property may be affected by Flood Hazard Zone."}),e.jsx("span",{className:"text-slate-300 text-[11px]",children:"Please see second page for more accurate information."})]})]})]}),e.jsxs("div",{className:"border-t border-slate-800 px-6 py-4 bg-slate-950/80 flex items-center justify-between",children:[e.jsxs("button",{onClick:re,className:"px-4 py-2.5 rounded-xl bg-sky-600/20 hover:bg-sky-600 border border-sky-500/40 text-sky-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer",children:[e.jsx(W,{className:"w-4 h-4 text-sky-400"}),e.jsx("span",{children:te?"✓ Subdivision Overlay Active on Map":"Overlay Subdivision on Map"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[r&&e.jsxs("button",{onClick:()=>je(r,i),className:"px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 hover:text-emerald-300 border border-emerald-500/40 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-md",title:"Download AutoCAD DXF survey file for Civil 3D",children:[e.jsx(Pe,{className:"w-4 h-4 text-emerald-400"}),e.jsx("span",{children:"Export AutoCAD DXF (.dxf)"})]}),e.jsx("button",{onClick:H,className:"px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-all cursor-pointer",children:"Close"}),e.jsxs("button",{onClick:le,className:"px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white text-xs font-extrabold shadow-lg shadow-sky-500/30 transition-all flex items-center gap-2 ring-1 ring-white/20 cursor-pointer",children:[e.jsx(Le,{className:"w-4 h-4"}),e.jsx("span",{children:"Print Official Subdivision Report (PDF)"})]})]})]})]})})},Xe=n.memo(Ie);export{Xe as ParcelSplitterModal};
