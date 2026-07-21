import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DvlgmmzG.js";import{l as r,n as i,t as a,u as o}from"./themeProps-DlHa58hS.js";import{_ as s,t as c,y as l}from"./utils-SBEvDdeo.js";import{b as u,v as d,y as f}from"./Text-c5LWyKai.js";import{t as p}from"./jsx-runtime-cM__dR4X.js";import{n as m,t as h}from"./useIsomorphicLayoutEffect-sjqaHMjg.js";function g(e,t={}){let{gap:n=0,minVisibleItems:r=0,collapseFrom:i=`end`,behavior:a=`observeSelf`}=t,o=a===`observeParent`,[s,c]=(0,_.useState)(e),l=(0,_.useRef)(null),d=(0,_.useRef)(null),p=(0,_.useRef)(null),h=(0,_.useCallback)(()=>{let t=l.current,a=d.current;if(!t||!a)return;let s;if(o&&t.parentElement){let e=t.parentElement,n=getComputedStyle(e);s=e.clientWidth-parseFloat(n.paddingLeft)-parseFloat(n.paddingRight)}else s=t.offsetWidth;let u=Array.from(a.children),f=u.length>e,p=f?u.slice(0,e):u,m=f?u[u.length-1].offsetWidth:0;if(p.length===0){c(0);return}let h=p.map(e=>e.offsetWidth),g=0,_=0,v=i===`end`?h:[...h].reverse();for(let e=0;e<v.length;e++){let t=v[e],i=e>0?n:0,a=g+t+i;if(a+(e===v.length-1?0:m+(_>0||m>0?n:0))>s&&_>=r)break;g=a,_++}c(Math.max(Math.min(_,e),r))},[e,n,r,i,o]),g=(0,_.useCallback)(e=>{if(l.current=e,p.current&&=(u(p.current),null),e){let t=o&&e.parentElement?e.parentElement:e;f(t,()=>{h()}),p.current=t}},[h,o]),v=(0,_.useCallback)(e=>{d.current=e,e&&h()},[h]);return m(()=>{h()},[h]),{containerRef:g,measureRef:v,visibleCount:s,hasOverflow:s<e}}var _,v=t((()=>{_=e(n(),1),h(),d()}));function y({children:e,gap:t=2,minVisibleItems:n=0,collapseFrom:r=`end`,behavior:a=`observeSelf`,overflowRenderer:c,xstyle:u,className:d,style:f,ref:p,...m}){let h=b.Children.toArray(e),_=h.length,v=w[t],y=a===`observeParent`,{containerRef:T,measureRef:E,visibleCount:D,hasOverflow:O}=g(_,{gap:v,minVisibleItems:n,collapseFrom:r,behavior:a}),k=h.map((e,t)=>({child:e,index:t})),A,j;r===`end`?(A=k.slice(0,D),j=k.slice(D)):(A=k.slice(_-D),j=k.slice(0,_-D));let M=c?.(k);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`div`,{ref:E,"aria-hidden":`true`,inert:!0,...o(S.measureContainer,C[t]),children:[h,M!=null&&(0,x.jsx)(`div`,{className:`astryx3nfvp2`,children:M})]}),(0,x.jsxs)(`div`,{ref:s(p,T),...l(i(`overflow-list`),o(S.container,C[t],y&&O&&S.fillParent,u),d,f),...m,children:[r===`start`&&O&&c?.(j),A.map(({child:e})=>e),r===`end`&&O&&c?.(j)]})]})}var b,x,S,C,w,T=t((()=>{b=e(n(),1),r(),c(),v(),a(),x=p(),S={container:{k1xSpc:`astryx78zum5`,kGNEyG:`astryx6s0dn4`,kVQacm:`astryxb3r6kr`,khDVqt:`astryxuxw1ft`,k7Eaqz:`astryxeuugli`,$$css:!0},fillParent:{kzqmXN:`astryxh8yej3`,$$css:!0},measureContainer:{kVAEAm:`astryx10l6tqk`,k33iCy:`astryxlshs6z`,kZKoxP:`astryxqtp20y`,kVQacm:`astryxb3r6kr`,k1xSpc:`astryx78zum5`,kGNEyG:`astryx6s0dn4`,khDVqt:`astryxuxw1ft`,kfzvcC:`astryx47corl`,$$css:!0}},C={0:{kOIVth:`astryxsn7fz1`,khm7nJ:null,k1C7PZ:null,$$css:!0},1:{kOIVth:`astryxzye2dw`,khm7nJ:null,k1C7PZ:null,$$css:!0},2:{kOIVth:`astryx1txdalj`,khm7nJ:null,k1C7PZ:null,$$css:!0},3:{kOIVth:`astryxjcht0a`,khm7nJ:null,k1C7PZ:null,$$css:!0},4:{kOIVth:`astryx18g69wz`,khm7nJ:null,k1C7PZ:null,$$css:!0},5:{kOIVth:`astryx9mgr7n`,khm7nJ:null,k1C7PZ:null,$$css:!0},6:{kOIVth:`astryx1qh66ti`,khm7nJ:null,k1C7PZ:null,$$css:!0},8:{kOIVth:`astryx4t41sb`,khm7nJ:null,k1C7PZ:null,$$css:!0},10:{kOIVth:`astryx3hoi3v`,khm7nJ:null,k1C7PZ:null,$$css:!0},"0.5":{kOIVth:`astryx1lsbc85`,khm7nJ:null,k1C7PZ:null,$$css:!0},"1.5":{kOIVth:`astryx1s4dlld`,khm7nJ:null,k1C7PZ:null,$$css:!0}},w={0:0,.5:2,1:4,1.5:6,2:8,3:12,4:16,5:20,6:24,8:32,10:40},y.displayName=`OverflowList`,y.__docgenInfo={description:`A horizontal list that hides items that don't fit and shows an overflow indicator.

Uses a hidden measurement container to determine which items fit without
causing visual flickering. The overflow indicator is also measured
automatically so no manual width value is needed.

@example
\`\`\`
<OverflowList
  gap={2}
  overflowRenderer={(items) => (
    <Button label={\`+\${items.length} more\`} variant="ghost" />
  )}>
  <Button label="Action 1" />
  <Button label="Action 2" />
  <Button label="Action 3" />
  <Button label="Action 4" />
</OverflowList>
\`\`\``,methods:[],displayName:`OverflowList`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the visible container element`},children:{required:!0,tsType:{name:`ReactNode`},description:`The items to render. Each child should be a single element.`},gap:{required:!1,tsType:{name:`union`,raw:`0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:`0.5`},{name:`literal`,value:`1`},{name:`literal`,value:`1.5`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`},{name:`literal`,value:`8`},{name:`literal`,value:`10`}]},description:`Gap between items as a spacing token step.
Accepts: 0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10
@default 2`,defaultValue:{value:`2`,computed:!1}},minVisibleItems:{required:!1,tsType:{name:`number`},description:`Minimum number of items to always show.
@default 0`,defaultValue:{value:`0`,computed:!1}},collapseFrom:{required:!1,tsType:{name:`union`,raw:`'start' | 'end'`,elements:[{name:`literal`,value:`'start'`},{name:`literal`,value:`'end'`}]},description:`Which end to collapse items from.
@default 'end'`,defaultValue:{value:`'end'`,computed:!1}},behavior:{required:!1,tsType:{name:`union`,raw:`'observeParent' | 'observeSelf'`,elements:[{name:`literal`,value:`'observeParent'`},{name:`literal`,value:`'observeSelf'`}]},description:`Which element to observe for overflow calculations.
- \`'observeSelf'\`: uses the container's own width (default)
- \`'observeParent'\`: observes the parent element's content width
  for overflow calculations. This keeps the overflow list
  content-sized while still detecting available space for
  grow-back. Siblings that don't fit can wrap and be clipped by
  the parent's overflow.
@default 'observeSelf'`,defaultValue:{value:`'observeSelf'`,computed:!1}},overflowRenderer:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(overflowItems: OverflowItem[]) => ReactNode`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`OverflowItem`}],raw:`OverflowItem[]`},name:`overflowItems`}],return:{name:`ReactNode`}}},description:`Render function for the overflow indicator. Receives the list of
items that are not visible, each with its original index. Only called
when there are overflowing items.

The indicator is automatically measured in a hidden container to
reserve the correct amount of space.

@example
\`\`\`
const labels = ['Save', 'Edit', 'Share'];
<OverflowList
  overflowRenderer={(overflowItems) => (
    <DropdownMenu
      button={{label: \`+\${overflowItems.length}\`, variant: 'ghost'}}
      items={overflowItems.map(({index}) => ({ label: labels[index] }))}
    />
  )}>
  {labels.map(l => <Button key={l} label={l} />)}
</OverflowList>
\`\`\``}},composes:[`Omit`]}})),E=t((()=>{T()}));export{y as n,T as r,E as t};