import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DvlgmmzG.js";import{t as r}from"./Text-c5LWyKai.js";import{t as i}from"./jsx-runtime-cM__dR4X.js";import{t as a}from"./Button-D16xsf4E.js";import{t as o}from"./Button-Ncr6y4Fk.js";import{n as s,t as c}from"./Badge-B_PS94vK.js";import{t as l}from"./Text-_h16ESYs.js";import{E as u,S as d,t as f,w as p}from"./Chat-C0EaVkdi.js";import{r as m,t as h}from"./ListItem-Bp5tadU1.js";import{t as g}from"./List-B0ZxDOB4.js";import{n as _,t as v}from"./Token-BuWY5dHJ.js";import{D as y,E as b}from"./iframe-D7pkj8qc.js";var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;t((()=>{f(),v(),o(),b(),g(),l(),c(),x=e(n()),S=i(),C=(0,S.jsxs)(`svg`,{width:`1em`,height:`1em`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,S.jsx)(`circle`,{cx:`12`,cy:`12`,r:`4`}),(0,S.jsx)(`path`,{d:`M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8`})]}),w=(0,S.jsx)(`svg`,{width:`1em`,height:`1em`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,S.jsx)(`path`,{d:`m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48`})}),T=(0,S.jsxs)(`svg`,{width:`1em`,height:`1em`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,S.jsx)(`path`,{d:`M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z`}),(0,S.jsx)(`path`,{d:`M19 10v2a7 7 0 0 1-14 0v-2`}),(0,S.jsx)(`line`,{x1:`12`,x2:`12`,y1:`19`,y2:`22`})]}),E={title:`Core/ChatComposer`,component:p,tags:[`autodocs`],parameters:{layout:`centered`},decorators:[e=>(0,S.jsx)(`div`,{style:{width:600,padding:40},children:(0,S.jsx)(e,{})})]},D={render:()=>(0,S.jsx)(p,{onSubmit:e=>{console.log(`Submit:`,e),alert(`Sent: ${e}`)}})},O={render:()=>{let[e,t]=(0,x.useState)(!0);return(0,S.jsx)(p,{onSubmit:e=>{console.log(`Submit:`,e),t(!0)},isStopShown:e,onStop:()=>{console.log(`Stopped`),t(!1)}})}},k={render:()=>(0,S.jsx)(p,{onSubmit:e=>console.log(`Submit:`,e),footerActions:(0,S.jsx)(a,{label:`GPT-4`,variant:`ghost`,size:`md`}),sendActions:(0,S.jsx)(a,{label:`Microphone`,variant:`ghost`,size:`md`,icon:T,isIconOnly:!0})})},A={render:()=>(0,S.jsx)(p,{onSubmit:e=>console.log(`Submit:`,e),drawer:(0,S.jsxs)(d,{children:[(0,S.jsx)(_,{label:`report.pdf`,onRemove:()=>{}}),(0,S.jsx)(_,{label:`data.csv`,onRemove:()=>{}})]}),headerActions:(0,S.jsx)(a,{label:`Attach file`,variant:`ghost`,size:`sm`,icon:w,isIconOnly:!0}),headerContext:(0,S.jsx)(y,{label:`Context window`,value:3,isLabelHidden:!0})})},j={render:()=>{let[e,t]=(0,x.useState)(!1);return(0,S.jsx)(p,{onSubmit:e=>{console.log(`Submit:`,e),t(!0),setTimeout(()=>t(!1),3e3)},isStopShown:e,onStop:()=>t(!1),placeholder:`Ask me anything...`,drawer:(0,S.jsx)(d,{children:(0,S.jsx)(_,{label:`design-spec.pdf`,onRemove:()=>{}})}),headerActions:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a,{label:`Mention`,variant:`ghost`,size:`sm`,icon:C,isIconOnly:!0}),(0,S.jsx)(a,{label:`Attach file`,variant:`ghost`,size:`sm`,icon:w,isIconOnly:!0})]}),headerContext:(0,S.jsx)(y,{label:`Context window`,value:3,isLabelHidden:!0}),footerActions:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a,{label:`Auto`,variant:`ghost`,size:`md`}),(0,S.jsx)(a,{label:`Settings`,variant:`ghost`,size:`md`})]}),sendActions:(0,S.jsx)(a,{label:`Microphone`,variant:`ghost`,size:`md`,icon:T,isIconOnly:!0})})}},M={render:()=>(0,S.jsx)(p,{onSubmit:()=>{},isDisabled:!0,placeholder:`Composer is disabled`})},N={render:()=>(0,S.jsx)(p,{onSubmit:e=>console.log(`Submit:`,e),drawer:(0,S.jsxs)(d,{count:6,children:[(0,S.jsx)(_,{label:`new_feature_prd.docx`,onRemove:()=>{}}),(0,S.jsx)(_,{label:`2026_roadmap.docx`,onRemove:()=>{}}),(0,S.jsx)(_,{label:`user_flow.pdf`,onRemove:()=>{}}),(0,S.jsx)(_,{label:`launch_plan.docx`,onRemove:()=>{}}),(0,S.jsx)(_,{label:`user_feedback.csv`,onRemove:()=>{}}),(0,S.jsx)(_,{label:`kpis.csv`,onRemove:()=>{}})]})})},P={render:()=>(0,S.jsx)(p,{onSubmit:e=>console.log(`Submit:`,e),status:{type:`error`,message:`Failed to send message. Please try again.`}})},F={render:()=>(0,S.jsx)(p,{onSubmit:e=>console.log(`Submit:`,e),statusPosition:`top`,status:{type:`warning`,message:`Context window is 90% full.`}})},I={render:()=>(0,S.jsx)(p,{onSubmit:e=>console.log(`Submit:`,e),status:{type:`error`,message:`Failed to send message. Please try again.`}})},L={render:()=>(0,S.jsx)(p,{onSubmit:e=>{console.log(`Submit:`,e),alert(`Sent: ${e}`)},placeholder:`Type to enable the send button...`})},R={render:()=>(0,S.jsx)(p,{onSubmit:e=>console.log(`Submit:`,e),sendButton:(0,S.jsx)(u,{size:`sm`,onSend:()=>alert(`Custom send!`)})})},z={render:()=>{let[e,t]=(0,x.useState)(!1);return(0,S.jsx)(p,{onSubmit:e=>{console.log(`Submit:`,e),t(!0),setTimeout(()=>t(!1),5e3)},isStopShown:e,onStop:()=>{console.log(`Stopped`),t(!1)},placeholder:`Send a message to start streaming...`})}},B={render:()=>{let e=[{key:`A`,label:`Yes`},{key:`B`,label:"Yes, and don’t ask again for `git add` commands"},{key:`C`,label:`No, and tell me what to do differently`}],[t,n]=(0,x.useState)(null);return(0,S.jsx)(p,{onSubmit:e=>{console.log(`Submit:`,e,`| Answer:`,t),alert(`Sent: "${e}"\nAnswer: ${t}`)},drawer:(0,S.jsx)(d,{count:1,label:`User feedback requested`,children:(0,S.jsx)(`div`,{style:{width:`100%`},children:(0,S.jsxs)(m,{children:[(0,S.jsx)(h,{label:(0,S.jsx)(r,{weight:`bold`,children:`Do you want to proceed?`})}),e.map(e=>(0,S.jsx)(h,{label:e.label,startContent:(0,S.jsx)(s,{variant:t===e.key?`info`:`neutral`,label:e.key}),isSelected:t===e.key,onClick:()=>n(e.key)},e.key))]})})})})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <ChatComposer onSubmit={value => {
    console.log('Submit:', value);
    alert(\`Sent: \${value}\`);
  }} />
}`,...D.parameters?.docs?.source},description:{story:`Simplest usage — just onSubmit`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isStreaming, setIsStreaming] = useState(true);
    return <ChatComposer onSubmit={value => {
      console.log('Submit:', value);
      setIsStreaming(true);
    }} isStopShown={isStreaming} onStop={() => {
      console.log('Stopped');
      setIsStreaming(false);
    }} />;
  }
}`,...O.parameters?.docs?.source},description:{story:`With streaming state and stop button`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <ChatComposer onSubmit={value => console.log('Submit:', value)} footerActions={<Button label="GPT-4" variant="ghost" size="md" />} sendActions={<Button label="Microphone" variant="ghost" size="md" icon={MicIcon} isIconOnly />} />
}`,...k.parameters?.docs?.source},description:{story:`With footer actions (model selector) and mic button`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <ChatComposer onSubmit={value => console.log('Submit:', value)} drawer={<ChatComposerDrawer>
          <Token label="report.pdf" onRemove={() => {}} />
          <Token label="data.csv" onRemove={() => {}} />
        </ChatComposerDrawer>} headerActions={<Button label="Attach file" variant="ghost" size="sm" icon={PaperclipIcon} isIconOnly />} headerContext={<ProgressBar label="Context window" value={3} isLabelHidden />} />
}`,...A.parameters?.docs?.source},description:{story:`With attachment chips and a context toolbar`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isStreaming, setIsStreaming] = useState(false);
    return <ChatComposer onSubmit={value => {
      console.log('Submit:', value);
      setIsStreaming(true);
      setTimeout(() => setIsStreaming(false), 3000);
    }} isStopShown={isStreaming} onStop={() => setIsStreaming(false)} placeholder="Ask me anything..." drawer={<ChatComposerDrawer>
            <Token label="design-spec.pdf" onRemove={() => {}} />
          </ChatComposerDrawer>} headerActions={<>
            <Button label="Mention" variant="ghost" size="sm" icon={AtSignIcon} isIconOnly />
            <Button label="Attach file" variant="ghost" size="sm" icon={PaperclipIcon} isIconOnly />
          </>} headerContext={<ProgressBar label="Context window" value={3} isLabelHidden />} footerActions={<>
            <Button label="Auto" variant="ghost" size="md" />
            <Button label="Settings" variant="ghost" size="md" />
          </>} sendActions={<Button label="Microphone" variant="ghost" size="md" icon={MicIcon} isIconOnly />} />;
  }
}`,...j.parameters?.docs?.source},description:{story:`Full featured — all slots populated`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <ChatComposer onSubmit={() => {}} isDisabled placeholder="Composer is disabled" />
}`,...M.parameters?.docs?.source},description:{story:`Disabled state`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <ChatComposer onSubmit={value => console.log('Submit:', value)} drawer={<ChatComposerDrawer count={6}>
          <Token label="new_feature_prd.docx" onRemove={() => {}} />
          <Token label="2026_roadmap.docx" onRemove={() => {}} />
          <Token label="user_flow.pdf" onRemove={() => {}} />
          <Token label="launch_plan.docx" onRemove={() => {}} />
          <Token label="user_feedback.csv" onRemove={() => {}} />
          <Token label="kpis.csv" onRemove={() => {}} />
        </ChatComposerDrawer>} />
}`,...N.parameters?.docs?.source},description:{story:`With many attachments and collapsible drawer`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <ChatComposer onSubmit={value => console.log('Submit:', value)} status={{
    type: 'error',
    message: 'Failed to send message. Please try again.'
  }} />
}`,...P.parameters?.docs?.source},description:{story:`With error status`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <ChatComposer onSubmit={value => console.log('Submit:', value)} statusPosition="top" status={{
    type: 'warning',
    message: 'Context window is 90% full.'
  }} />
}`,...F.parameters?.docs?.source},description:{story:`With status on top`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <ChatComposer onSubmit={value => console.log('Submit:', value)} status={{
    type: 'error',
    message: 'Failed to send message. Please try again.'
  }} />
}`,...I.parameters?.docs?.source},description:{story:`With status on bottom`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <ChatComposer onSubmit={value => {
    console.log('Submit:', value);
    alert(\`Sent: \${value}\`);
  }} placeholder="Type to enable the send button..." />
}`,...L.parameters?.docs?.source},description:{story:`Default send button — reads from composer context automatically`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <ChatComposer onSubmit={value => console.log('Submit:', value)} sendButton={<ChatSendButton size="sm" onSend={() => alert('Custom send!')} />} />
}`,...R.parameters?.docs?.source},description:{story:`Custom send button via sendButton slot`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isStreaming, setIsStreaming] = useState(false);
    return <ChatComposer onSubmit={value => {
      console.log('Submit:', value);
      setIsStreaming(true);
      setTimeout(() => setIsStreaming(false), 5000);
    }} isStopShown={isStreaming} onStop={() => {
      console.log('Stopped');
      setIsStreaming(false);
    }} placeholder="Send a message to start streaming..." />;
  }
}`,...z.parameters?.docs?.source},description:{story:`Send/stop toggle — type text and submit to start streaming, click stop to end`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      key: 'A',
      label: 'Yes'
    }, {
      key: 'B',
      label: 'Yes, and don\\u2019t ask again for \`git add\` commands'
    }, {
      key: 'C',
      label: 'No, and tell me what to do differently'
    }];
    const [selected, setSelected] = useState<string | null>(null);
    return <ChatComposer onSubmit={value => {
      console.log('Submit:', value, '| Answer:', selected);
      alert(\`Sent: "\${value}"\\nAnswer: \${selected}\`);
    }} drawer={<ChatComposerDrawer count={1} label="User feedback requested">
            <div style={{
        width: '100%'
      }}>
              <List>
                <ListItem label={<Text weight="bold">Do you want to proceed?</Text>} />
                {options.map(opt => <ListItem key={opt.key} label={opt.label} startContent={<Badge variant={selected === opt.key ? 'info' : 'neutral'} label={opt.key} />} isSelected={selected === opt.key} onClick={() => setSelected(opt.key)} />)}
              </List>
            </div>
          </ChatComposerDrawer>} />;
  }
}`,...B.parameters?.docs?.source},description:{story:`Drawer with a feedback prompt, warning badge, and selectable options`,...B.parameters?.docs?.description}}},V=[`Simplest`,`WithStreaming`,`WithFooterActions`,`WithAttachments`,`FullFeatured`,`Disabled`,`WithManyAttachments`,`WithError`,`WithStatusTop`,`WithStatusBottom`,`DefaultSendButton`,`CustomSendButton`,`SendStopToggle`,`Feedback`]}))();export{R as CustomSendButton,L as DefaultSendButton,M as Disabled,B as Feedback,j as FullFeatured,z as SendStopToggle,D as Simplest,A as WithAttachments,P as WithError,k as WithFooterActions,N as WithManyAttachments,I as WithStatusBottom,F as WithStatusTop,O as WithStreaming,V as __namedExportsOrder,E as default};