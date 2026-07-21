import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DvlgmmzG.js";import{l as r,n as i,t as a,u as o}from"./themeProps-DlHa58hS.js";import{_ as s,m as c,t as l,y as u}from"./utils-SBEvDdeo.js";import{t as d}from"./jsx-runtime-cM__dR4X.js";import{i as f,r as p}from"./Button-D16xsf4E.js";import{n as m,r as h,t as g}from"./SizeContext-DYIY50ln.js";import{n as _,t as v}from"./useListFocus-BSYb4Dxp.js";function y({children:e,label:t,orientation:n=`horizontal`,size:r,isDisabled:a=!1,xstyle:l,className:d,style:f,ref:m,"data-testid":v,onKeyDown:y,...C}){let w=h(r,`md`),{listRef:T,handleKeyDown:E}=_({itemSelector:`button, [tabindex="0"]`,orientation:n});return(0,x.jsx)(p,{value:(0,b.useMemo)(()=>({orientation:n,isDisabled:a}),[n,a]),children:(0,x.jsx)(g,{value:w,children:(0,x.jsx)(`div`,{ref:s(m,T),...C,...u(i(`button-group`,{size:w,orientation:n}),o(S.group,n===`vertical`&&S.vertical,l),d,f),role:`group`,"aria-label":t,onKeyDown:c(y,E),"aria-disabled":a||void 0,"data-testid":v,children:e})})})}var b,x,S,C=t((()=>{b=e(n(),1),r(),m(),v(),l(),f(),a(),x=d(),S={group:{k1xSpc:`astryx3nfvp2`,kGNEyG:`astryx1qjc9v5`,$$css:!0},vertical:{kXwgrk:`astryxdt5ytf`,$$css:!0}},y.displayName=`ButtonGroup`,y.__docgenInfo={description:`Groups buttons with connected styling — shared borders, proper border-radius
handling (only on outer edges), and horizontal or vertical orientation.

Children automatically detect the group via context and apply position-aware
styles in pure CSS.

Members that render their own layer — a Button with a \`tooltip\`, or a
DropdownMenu — compose correctly, including as the trailing member.

@example
\`\`\`
<ButtonGroup label="Actions">
  <Button label="Copy" />
  <Button label="Cut" />
  <Button label="Paste" />
</ButtonGroup>
\`\`\`

@example
\`\`\`
<ButtonGroup label="Approve action">
  <Button label="Allow once" variant="primary" />
  <DropdownMenu
    button={{label: 'Allow options', variant: 'primary', isIconOnly: true, icon: <Icon icon="chevronDown" />}}
    items={[{label: 'Allow for 30 minutes'}, {label: 'Always allow'}]}
  />
</ButtonGroup>
\`\`\``,methods:[],displayName:`ButtonGroup`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element.`},children:{required:!0,tsType:{name:`ReactNode`},description:`Button or IconButton children.`},label:{required:!0,tsType:{name:`string`},description:`Accessible label for the group (used as aria-label).`},orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:`Orientation of the button group.
@default 'horizontal'`,defaultValue:{value:`'horizontal'`,computed:!1}},size:{required:!1,tsType:{name:`unknown`},description:`Default size for buttons in the group.
Individual buttons can override this with their own \`size\` prop.
@default 'md'`},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether all buttons in the group are disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},"data-testid":{required:!1,tsType:{name:`string`},description:`Test ID for testing frameworks.`}},composes:[`Omit`]}})),w=t((()=>{C()}));export{y as n,C as r,w as t};