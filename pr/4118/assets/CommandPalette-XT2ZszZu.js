import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DvlgmmzG.js";import{l as r,n as i,t as a,u as o}from"./themeProps-DlHa58hS.js";import{r as s,t as c}from"./LayoutContent-lQi8c66T.js";import{t as l}from"./LayoutHeader-BJVK-iiV.js";import{_ as u,t as d,y as f}from"./utils-SBEvDdeo.js";import{t as p}from"./jsx-runtime-cM__dR4X.js";import{n as m,t as h}from"./Spinner-Bzf6Av5g.js";import{n as g,t as _}from"./Icon-oqVupEXg.js";import{r as v,t as y}from"./i18n-BoAc2267.js";import{n as b,t as x}from"./Kbd-9NBaAJhg.js";import{i as ee,o as S,s as C,t as w}from"./Dialog-Di5POXDr.js";import{t as te}from"./LayoutFooter-B26-U5J1.js";import{t as ne}from"./Layout-BbT8IvUw.js";import{s as re,t as ie}from"./Selector-DG-gKOkd.js";function T(){return(0,E.use)(D)}var E,D,O=t((()=>{E=e(n(),1),D=(0,E.createContext)(null),D.displayName=`CommandPaletteContext`}));function k({children:e,label:t,ref:n,xstyle:r,className:a,style:s,...c}){let l=v(),u=t??l(`@astryx.commandPalette.list.label`);return(0,ae.jsx)(`div`,{ref:n,id:T()?.listId,role:`listbox`,"aria-label":u,...f(i(`command-palette-list`),o(A.list,r),a,s),...c,children:e})}var ae,A,j=t((()=>{r(),d(),O(),a(),y(),ae=p(),A={list:{kORKVm:`astryx1odjw0f`,kskxy:`astryxmz0i5r`,kmVPX3:`astryx9epnlk`,kUk6DE:`astryx98rzlu`,k1xSpc:`astryx78zum5`,kXwgrk:`astryxdt5ytf`,kOIVth:`astryx1lsbc85`,$$css:!0}},k.displayName=`CommandPaletteList`,k.__docgenInfo={description:`Scrollable results container for the command palette.
Renders as a listbox for ARIA compliance.

When used inside CommandPalette, automatically gets the correct
ID for aria-controls linking with the input.

@compositionHint Place inside CommandPalette, after CommandPaletteInput.
  Contains CommandPaletteItem and CommandPaletteGroup children.

@example
\`\`\`
<CommandPaletteList>
  <CommandPaletteItem value="home" onSelect={goHome}>
    Go Home
  </CommandPaletteItem>
</CommandPaletteList>
\`\`\``,methods:[],displayName:`CommandPaletteList`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element.`},children:{required:!0,tsType:{name:`ReactNode`},description:`Command palette items, groups, empty states, etc.`},label:{required:!1,tsType:{name:`string`},description:`Accessible label for the listbox.
@default 'Commands'`}},composes:[`Omit`]}}));function M({value:e,onSelect:t,isHighlighted:n,isSelected:r,isDisabled:a=!1,children:s,ref:c,xstyle:l,className:d,style:p,...m}){let h=T(),g=C()?.isInline===!0,_=(0,N.useRef)(null),v=(0,N.useRef)(!1),y=(0,N.useMemo)(()=>h?.selectableItems.findIndex(t=>t.value===e)??-1,[h?.selectableItems,e]),b=n??(h?h.highlightedIndex===y&&y>=0:!1),x=r??(h?h.value===e:!1);(0,N.useEffect)(()=>{let e=g&&!v.current;v.current=!0,!e&&b&&_.current&&_.current.scrollIntoView?.({block:`nearest`})},[b,g]);let ee=(0,N.useCallback)(()=>{a||(t?.(e),h&&(h.selectItem(e),h.onClose()))},[a,e,t,h]),S=(0,N.useCallback)(()=>{a||!h||y<0||h.setHighlightedIndex(y)},[a,y,h]);return(0,P.jsx)(`div`,{ref:u(c,_),id:h&&y>=0?h.getItemId(y):void 0,role:`option`,"aria-selected":x,"aria-disabled":a||void 0,"data-value":e,onClick:ee,onMouseEnter:S,...f(i(`command-palette-item`),o(F.item,!a&&F.itemHover,b&&F.itemHighlighted,x&&F.itemSelected,a&&F.itemDisabled,l),d,p),...m,children:s})}var N,P,F,I=t((()=>{N=e(n(),1),r(),d(),O(),S(),a(),P=p(),F={item:{k1xSpc:`astryx78zum5`,kGNEyG:`astryx6s0dn4`,kOIVth:`astryx1txdalj`,kzqmXN:`astryxh8yej3`,kg3NbH:`astryxrrkdod`,k8WAf4:`astryxce4md1`,kaIpWk:`astryxx3sua9`,kMv6JI:`astryx9ynric`,kGuDYH:`astryxcr08ib`,kMwMTN:`astryx1tgivj0`,kWkggS:`astryxjbqb8w`,kQgIW9:`astryx1gs6z28`,kkrTdU:`astryx1ypdohk`,k9WMMc:`astryxdpxx8g`,kI3sdo:`astryx1a2a7pz`,kfSwDN:`astryx87ps6o`,$$css:!0},itemHover:{kHE3J0:`astryxe9uy6x`,kSReZ0:`astryxyxi2l3`,$$css:!0},itemHighlighted:{kWkggS:`astryx1lmrjuc`,$$css:!0},itemDisabled:{kSiTet:`astryxbyyjgo`,kkrTdU:`astryx1h6gzvc`,$$css:!0},itemSelected:{kWkggS:`astryxgcxg3y`,$$css:!0}},M.displayName=`CommandPaletteItem`,M.__docgenInfo={description:`A selectable item in the command palette.
Accepts arbitrary children for full rendering control.

When used inside CommandPalette, registers with context for
keyboard navigation and selection. Can also be used
standalone with explicit isHighlighted/isSelected props.

@compositionHint Place inside CommandPaletteList or CommandPaletteGroup.

@example
\`\`\`
<CommandPaletteItem value="settings" onSelect={() => navigate('/settings')}>
  Settings
</CommandPaletteItem>
\`\`\``,methods:[],displayName:`CommandPaletteItem`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element.`},value:{required:!0,tsType:{name:`string`},description:`Unique value for identification and selection.`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Called when this item is selected (via click or Enter).`},isHighlighted:{required:!1,tsType:{name:`boolean`},description:`Whether this item is visually highlighted (keyboard focus).
When omitted inside CommandPalette, derived from context.
@default false`},isSelected:{required:!1,tsType:{name:`boolean`},description:`Whether this item is currently selected (picker mode).
@default false`},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the item is disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:`Item content. Fully custom — render icons, descriptions, shortcuts, etc.`}},composes:[`Omit`]}}));function L({heading:e,children:t,ref:n,xstyle:r,className:a,style:s,...c}){return(0,R.jsxs)(`div`,{ref:n,role:`group`,"aria-label":e,...f(i(`command-palette-group`),o(z.group,r),a,s),...c,children:[(0,R.jsx)(`div`,{"aria-hidden":`true`,className:`astryxrrkdod astryxu0wf1k astryx9ynric astryx141an7d astryx1ltkj2j astryxv1l7n4 astryx87ps6o`,children:e}),t]})}var R,z,B=t((()=>{r(),d(),a(),R=p(),z={group:{k1xSpc:`astryx78zum5`,kXwgrk:`astryxdt5ytf`,kOIVth:`astryx1lsbc85`,k8WAf4:`astryxu0wf1k`,$$css:!0}},L.displayName=`CommandPaletteGroup`,L.__docgenInfo={description:`Visual grouping for command palette items with a heading label.

Heading style matches DropdownMenu section headings:
supporting-size (12px), secondary color, no uppercase/letterSpacing.

@compositionHint Place inside CommandPaletteList.
  Contains CommandPaletteItem children.

@example
\`\`\`
<CommandPaletteGroup heading="Navigation">
  <CommandPaletteItem value="home" onSelect={goHome}>
    Home
  </CommandPaletteItem>
</CommandPaletteGroup>
\`\`\``,methods:[],displayName:`CommandPaletteGroup`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element.`},heading:{required:!0,tsType:{name:`string`},description:`Group heading text.`},children:{required:!0,tsType:{name:`ReactNode`},description:`Items within this group.`}},composes:[`Omit`]}}));function V({value:e,onValueChange:t,placeholder:n,hasAutoFocus:r=!0,endContent:a,onChange:s,onKeyDown:c,ref:l,xstyle:d,...p}){let h=v(),_=n??h(`@astryx.commandPalette.input.placeholder`),y=T(),b=C(),x=(0,H.useRef)(null),ee=e??y?.search,S=t??y?.setSearch,w=r&&b?.isInline!==!0;(0,H.useEffect)(()=>{w&&x.current&&requestAnimationFrame(()=>{x.current?.focus()})},[w]);let te=(0,H.useCallback)(e=>{c?.(e),!e.defaultPrevented&&y?.onKeyDown(e)},[y,c]);return(0,U.jsxs)(`div`,{...f(i(`command-palette-input`),o(W.wrapper,d)),children:[(0,U.jsx)(`span`,{className:`astryx78zum5 astryx6s0dn4 astryx2lah0s astryxv1l7n4`,children:(0,U.jsx)(g,{icon:`search`,size:`sm`,color:`inherit`})}),(0,U.jsx)(`input`,{ref:u(l,x),type:`text`,role:`combobox`,"aria-expanded":y?.isOpen??!0,"aria-autocomplete":`list`,"aria-controls":y?.listId,"aria-activedescendant":y&&y.highlightedIndex>=0?y.getItemId(y.highlightedIndex):void 0,placeholder:_,value:ee,"data-autofocus":w||void 0,onChange:e=>{S?.(e.target.value),s?.(e)},onKeyDown:te,className:`astryx98rzlu astryxeuugli astryx1gs6z28 astryx1a2a7pz astryxjbqb8w astryx1tgivj0 astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1717udv astryxeyghm5`,...p}),(y?.isBusy||a)&&(0,U.jsxs)(`span`,{className:`astryx78zum5 astryx6s0dn4 astryxzye2dw astryx2lah0s`,children:[y?.isBusy&&(0,U.jsx)(`span`,{className:`astryx78zum5 astryx6s0dn4 astryx2lah0s astryxv1l7n4 astryx1hc1fzr astryx19991ni astryxjd9b36 astryx5h36tt astryx4itv7f`,children:(0,U.jsx)(m,{size:`sm`})}),a]}),` `]})}var H,U,W,G=t((()=>{H=e(n(),1),r(),_(),h(),d(),O(),S(),a(),y(),U=p(),W={wrapper:{k1xSpc:`astryx78zum5`,kGNEyG:`astryx6s0dn4`,kOIVth:`astryx1txdalj`,kg3NbH:`astryx1pzlopt`,k8WAf4:`astryx8o8v82`,kmuXW:`astryx2lah0s`,$$css:!0}},V.displayName=`CommandPaletteInput`,V.__docgenInfo={description:`Search input for the command palette.

Renders a search icon and a text input. Auto-focuses when mounted
so users can start typing immediately.

When used inside CommandPalette, automatically wires to the
context for search state and keyboard navigation (via useCombobox).
Can also be used standalone with explicit value/onValueChange props.

@compositionHint Place as the first child of CommandPalette.

@example
\`\`\`
<CommandPalette isOpen={isOpen} onOpenChange={setIsOpen}>
  <CommandPaletteInput placeholder="Search commands..." />
</CommandPalette>
\`\`\``,methods:[],displayName:`CommandPaletteInput`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},description:`Ref forwarded to the input element (for focus management).`},value:{required:!1,tsType:{name:`string`},description:`The current search value.
When omitted inside CommandPalette, reads from context.`},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Called when the search value changes.
When omitted inside CommandPalette, writes to context.`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text for the input.
@default 'Search...'`},hasAutoFocus:{required:!1,tsType:{name:`boolean`},description:`Whether to auto-focus the input when mounted.
@default true`,defaultValue:{value:`true`,computed:!1}},endContent:{required:!1,tsType:{name:`ReactNode`},description:`Content rendered at the trailing end of the input, after the spinner.
Use for clear buttons, keyboard shortcuts, or other trailing actions.
The spinner (when busy) appears immediately before this content with a 4px gap.`},onChange:{required:!1,tsType:{name:`ReactChangeEventHandler`,raw:`React.ChangeEventHandler<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},description:`Native onChange handler for the input element.`}},composes:[`Omit`]}}));function K({children:e,ref:t,xstyle:n,className:r,style:a,...s}){return(0,q.jsx)(`div`,{ref:t,...f(i(`command-palette-footer`),o(oe.footer,n),r,a),...s,children:e??(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(`span`,{className:`astryx78zum5 astryx6s0dn4 astryxzye2dw`,children:[(0,q.jsx)(b,{keys:`up`}),(0,q.jsx)(b,{keys:`down`}),`Navigate`]}),(0,q.jsxs)(`span`,{className:`astryx78zum5 astryx6s0dn4 astryxzye2dw`,children:[(0,q.jsx)(b,{keys:`enter`}),`Select`]}),(0,q.jsxs)(`span`,{className:`astryx78zum5 astryx6s0dn4 astryxzye2dw`,children:[(0,q.jsx)(b,{keys:`escape`}),`Close`]})]})})}var q,oe,J=t((()=>{r(),d(),x(),a(),q=p(),oe={footer:{k1xSpc:`astryx78zum5`,kGNEyG:`astryx6s0dn4`,kOIVth:`astryx18g69wz`,kg3NbH:`astryx1pzlopt`,k8WAf4:`astryxce4md1`,kmuXW:`astryx2lah0s`,kMv6JI:`astryx9ynric`,kGuDYH:`astryx141an7d`,kLWn49:`astryx1ltkj2j`,kMwMTN:`astryxv1l7n4`,$$css:!0}},K.displayName=`CommandPaletteFooter`,K.__docgenInfo={description:`Footer for the command palette showing keyboard navigation hints.

When no children are provided, renders default hints using Kbd
for arrow keys, Enter to select, and Escape to close.

@compositionHint Pass to CommandPalette's \`footer\` slot.

@example
\`\`\`
<CommandPalette
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  input={<CommandPaletteInput />}
  footer={<CommandPaletteFooter />}>
  <CommandPaletteList>...</CommandPaletteList>
</CommandPalette>
\`\`\``,methods:[],displayName:`CommandPaletteFooter`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the footer element.`},children:{required:!1,tsType:{name:`ReactNode`},description:`Footer content. When provided, renders custom content instead of default hints.
Custom children inherit the footer font treatment (supporting/12px, secondary color).
When omitted, renders default keyboard navigation hints using Kbd.`}},composes:[`Omit`]}}));function Y({ref:e,children:t,xstyle:n,className:r,style:a,...s}){return(0,se.jsx)(`div`,{ref:e,...f(i(`command-palette-empty`),o(X.empty,n),r,a),...s,children:t})}var se,X,ce=t((()=>{n(),r(),d(),a(),se=p(),X={empty:{k1xSpc:`astryx78zum5`,kGNEyG:`astryx6s0dn4`,kjj79g:`astryxl56j7k`,k8WAf4:`astryxmfvnks`,kg3NbH:`astryx1pzlopt`,kMv6JI:`astryx9ynric`,kGuDYH:`astryx141an7d`,kLWn49:`astryx1ltkj2j`,kMwMTN:`astryxv1l7n4`,k9WMMc:`astryx2b8uid`,$$css:!0}},Y.displayName=`CommandPaletteEmpty`,Y.__docgenInfo={description:`Empty state for the command palette list area.

Rendered automatically by CommandPalette in two situations:
- \`emptyBootstrapText\`: no search term and bootstrap() returns nothing
- \`emptySearchText\`: a search query returned no results

Can also be composed manually inside a custom render function.

@example
\`\`\`
<CommandPalette
  emptyBootstrapText={<CommandPaletteEmpty>Start typing to search</CommandPaletteEmpty>}
  emptySearchText={<CommandPaletteEmpty>No results found</CommandPaletteEmpty>}
  searchSource={source}
/>
\`\`\``,methods:[],displayName:`CommandPaletteEmpty`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:`The message or content to display.`}},composes:[`Omit`]}}));function Z(e){let t=e.auxiliaryData;return typeof t?.group==`string`?t.group:void 0}function le(e){if(!e.some(e=>Z(e)!=null))return e.map(e=>({value:e.id,label:e.label}));let t=[],n=new Map,r=[];for(let i of e){let e=Z(i);e==null?r.push(i):(n.has(e)||(t.push(e),n.set(e,[])),n.get(e)?.push(i))}let i=[];for(let e of t)for(let t of n.get(e)??[])i.push({value:t.id,label:t.label});for(let e of r)i.push({value:e.id,label:e.label});return i}function ue({items:e,value:t,renderItem:n}){let r=e=>(0,$.jsx)(M,{value:e.id,children:n?n(e,e.id===t):e.label},e.id);if(!e.some(e=>Z(e)!=null))return(0,$.jsx)($.Fragment,{children:e.map(r)});let i=[],a=new Map,o=[];for(let t of e){let e=Z(t);e==null?o.push(t):(a.has(e)||(i.push(e),a.set(e,[])),a.get(e)?.push(t))}return(0,$.jsxs)($.Fragment,{children:[i.map(e=>(0,$.jsx)(L,{heading:e,children:(a.get(e)??[]).map(r)},e)),o.map(r)]})}function de({ref:e,isOpen:t,isInline:n,onOpenChange:r,searchSource:i,input:a,footer:o,renderItem:u,emptySearchText:d,emptyBootstrapText:f,value:p,onValueChange:m,label:h,width:g=640,maxHeight:_=480}){let y=v(),b=h??y(`@astryx.commandPalette.label`),x=d??y(`@astryx.commandPalette.emptySearch`),S=f??y(`@astryx.commandPalette.emptyBootstrap`),C=(0,Q.useId)(),[w,ne]=(0,Q.useState)(``),[ie,T]=(0,Q.useState)(``),[E,O]=(0,Q.useState)([]),[ae,A]=(0,Q.useTransition)(),[j,M]=(0,Q.useOptimistic)(w),[N,P]=(0,Q.useOptimistic)(E),F=ae,I=(0,Q.useRef)(0),L=p??ie,R=(0,Q.useCallback)(e=>{p===void 0&&T(e),m?.(e)},[p,m]),z=(0,Q.useMemo)(()=>le(N),[N]),B=(0,Q.useCallback)(()=>{ne(``),O([]),p===void 0&&T(``),i.cancel?.(),r(!1)},[r,i,p]),H=(0,Q.useCallback)(e=>{R(e)},[R]),U=re({selectableItems:z,value:L,isOpen:!0,onOpen:()=>{},onClose:()=>{},onSelect:e=>{H(e),B()},listboxId:C}),W=(0,Q.useCallback)(e=>{i.cancel?.();let t=++I.current;A(async()=>{let n=e===``;if(!n&&E.length>0){let t=e.toLowerCase().trim();P(E.filter(e=>e.label.toLowerCase().includes(t)))}let r=n?i.bootstrap():i.search(e),a=await Promise.resolve(r);if(I.current===t&&(ne(e),P(a),O(a),n&&L!=null&&L!==``)){let e=a.findIndex(e=>e.id===L);e>=0&&U.setHighlightedIndex(e)}})},[i,E,A,L,U,P]),G=(0,Q.useRef)(W);G.current=W,(0,Q.useEffect)(()=>{t&&G.current(``)},[t]);let q=(0,Q.useCallback)(e=>{if(e.key===`Escape`){e.preventDefault(),B();return}if(e.key===`Enter`){if(e.preventDefault(),U.highlightedIndex>=0&&U.highlightedIndex<z.length){let e=z[U.highlightedIndex];e&&!e.disabled&&(H(e.value),B())}return}e.key!==` `&&U.onKeyDown(e)},[U,B,z,H]),oe=(0,Q.useMemo)(()=>({search:j,setSearch:e=>{A(()=>{M(e)}),W(e)},value:L,setValue:R,listId:C,highlightedIndex:U.highlightedIndex,setHighlightedIndex:U.setHighlightedIndex,getItemId:U.getItemId,selectableItems:z,searchResults:N,selectItem:H,onKeyDown:q,onClose:B,isOpen:t,isBusy:F}),[j,M,W,L,R,C,U.highlightedIndex,U.setHighlightedIndex,U.getItemId,z,N,H,q,B,t,F]),J=w===``&&N.length===0,se=w!==``&&N.length===0,X;return X=J?(0,$.jsx)(Y,{children:S}):se?(0,$.jsx)(Y,{children:x}):(0,$.jsx)(ue,{items:N,value:L,renderItem:u}),(0,$.jsx)(ee,{ref:e,isOpen:t,isInline:n,onOpenChange:e=>{e?r(!0):B()},width:g,maxHeight:_,purpose:`info`,"aria-label":b,children:(0,$.jsx)(D,{value:oe,children:(0,$.jsx)(s,{defaultHasDividers:!0,header:(0,$.jsx)(l,{hasDivider:!0,padding:0,children:a??(0,$.jsx)(V,{})}),content:(0,$.jsx)(c,{padding:0,children:(0,$.jsx)(k,{children:X})}),footer:(0,$.jsx)(te,{hasDivider:!0,padding:0,children:o??(0,$.jsx)(K,{})})})})})}var Q,$,fe=t((()=>{Q=e(n(),1),w(),ne(),ie(),O(),j(),I(),B(),G(),J(),ce(),y(),$=p(),de.displayName=`CommandPalette`,de.__docgenInfo={description:`Command palette root component.

Uses \`searchSource\` for all search logic — same interface as Typeahead.
For static lists, use \`createStaticSource\` from \`@astryxdesign/core/Typeahead\`.

Keyboard navigation is handled by \`useCombobox\` from Selector,
ensuring consistent arrow key, Home/End, Enter, and Escape behavior
across all combobox-pattern components.

Input and footer are rendered by default — only pass them to replace the defaults.

@compositionHint
  - \`input\` slot: CommandPaletteInput (default)
  - \`footer\` slot: CommandPaletteFooter (default)
  - \`renderItem(item, isSelected)\`: custom per-item content (grouping preserved)

@example
\`\`\`
<CommandPalette
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  searchSource={createStaticSource(commands)}
/>
\`\`\``,methods:[],displayName:`CommandPalette`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDialogElement>`,elements:[{name:`HTMLDialogElement`}]},description:``},isOpen:{required:!0,tsType:{name:`boolean`},description:`Whether the command palette is open.`},isInline:{required:!1,tsType:{name:`boolean`},description:`Renders command palette content inline without modal behavior.
Suppresses input auto-focus and initial highlighted-item auto-scroll.
For documentation previews and showcases only.
@default false`},onOpenChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(isOpen: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`isOpen`}],return:{name:`void`}}},description:`Called when the command palette visibility changes.`},searchSource:{required:!0,tsType:{name:`SearchSource`,elements:[{name:`T`}],raw:`SearchSource<T>`},description:"Search source providing items. Implements `search(query)` and `bootstrap()`.\nSame interface as Typeahead's searchSource.\nUse `createStaticSource` for simple static lists."},input:{required:!1,tsType:{name:`ReactNode`},description:`The search input slot.
@default <CommandPaletteInput />`},footer:{required:!1,tsType:{name:`ReactNode`},description:`The footer slot.
@default <CommandPaletteFooter />`},renderItem:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: T, isSelected: boolean) => ReactNode`,signature:{arguments:[{type:{name:`T`},name:`item`},{type:{name:`boolean`},name:`isSelected`}],return:{name:`ReactNode`}}},description:"Per-item render function. Receives the item and whether it is currently selected.\nAuto-grouping by `auxiliaryData.group` is preserved.\nWhen omitted, renders each item's `label` text."},emptySearchText:{required:!1,tsType:{name:`ReactNode`},description:`Content shown when a search query returns no results.
@default 'No results'`},emptyBootstrapText:{required:!1,tsType:{name:`ReactNode`},description:`Content shown when there is no search query and bootstrap() returns nothing.
@default 'Type to search'`},value:{required:!1,tsType:{name:`string`},description:`Controlled selected value (for picker mode).`},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Called when the selected value changes.`},label:{required:!1,tsType:{name:`string`},description:`Accessible label for the command palette dialog.
@default 'Command palette'`},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Width of the command palette dialog.
@default 640`,defaultValue:{value:`640`,computed:!1}},maxHeight:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Maximum height of the command palette dialog.
@default 480`,defaultValue:{value:`480`,computed:!1}}},composes:[`Omit`]}})),pe=t((()=>{fe(),G(),j(),I(),B(),J(),ce(),O()}));export{J as a,K as i,de as n,V as o,fe as r,G as s,pe as t};