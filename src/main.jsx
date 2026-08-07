import React, {useEffect, useMemo, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Search, Plus, CheckCircle2, Clock3, Circle, Trash2, Pencil, LayoutDashboard, ListTodo, X} from 'lucide-react';
import './styles.css';

const seed=[
 {id:1,title:'Design dashboard wireframe',description:'Create the first dashboard layout and review spacing.',status:'In Progress',priority:'High',due:'2026-08-10'},
 {id:2,title:'Prepare project README',description:'Document setup, features, and development decisions.',status:'To Do',priority:'Medium',due:'2026-08-12'},
 {id:3,title:'Test task filters',description:'Verify search, status, and priority filters.',status:'Completed',priority:'Low',due:'2026-08-07'}
];

function App(){
 const [tasks,setTasks]=useState(()=>JSON.parse(localStorage.getItem('taskflow-tasks')||'null')||seed);
 const [query,setQuery]=useState(''); const [status,setStatus]=useState('All'); const [priority,setPriority]=useState('All');
 const [modal,setModal]=useState(false); const [editing,setEditing]=useState(null);
 useEffect(()=>localStorage.setItem('taskflow-tasks',JSON.stringify(tasks)),[tasks]);
 const filtered=useMemo(()=>tasks.filter(t=>(status==='All'||t.status===status)&&(priority==='All'||t.priority===priority)&&`${t.title} ${t.description}`.toLowerCase().includes(query.toLowerCase())),[tasks,status,priority,query]);
 const stats={total:tasks.length,todo:tasks.filter(t=>t.status==='To Do').length,progress:tasks.filter(t=>t.status==='In Progress').length,done:tasks.filter(t=>t.status==='Completed').length};
 function save(data){ if(editing)setTasks(ts=>ts.map(t=>t.id===editing.id?{...editing,...data}:t)); else setTasks(ts=>[{id:Date.now(),...data},...ts]); setModal(false);setEditing(null); }
 function remove(id){setTasks(ts=>ts.filter(t=>t.id!==id));}
 function cycle(id){setTasks(ts=>ts.map(t=>t.id===id?{...t,status:t.status==='To Do'?'In Progress':t.status==='In Progress'?'Completed':'To Do'}:t));}
 return <div className="app"><aside><div className="brand"><div className="logo">T</div><span>TaskFlow</span></div><nav><button className="nav active"><LayoutDashboard size={18}/>Dashboard</button><button className="nav"><ListTodo size={18}/>Tasks</button></nav><div className="side-note"><b>Stay on track</b><span>Small steps, visible progress.</span></div></aside>
 <main><header><div><p className="eyebrow">WORKSPACE</p><h1>Task Dashboard</h1><p className="muted">Plan, prioritize, and finish your work.</p></div><button className="primary" onClick={()=>setModal(true)}><Plus size={18}/> Add Task</button></header>
 <section className="stats"><Stat label="Total Tasks" value={stats.total} icon={<ListTodo/>}/><Stat label="To Do" value={stats.todo} icon={<Circle/>}/><Stat label="In Progress" value={stats.progress} icon={<Clock3/>}/><Stat label="Completed" value={stats.done} icon={<CheckCircle2/>}/></section>
 <section className="toolbar"><div className="search"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search tasks..."/></div><select value={status} onChange={e=>setStatus(e.target.value)}><option>All</option><option>To Do</option><option>In Progress</option><option>Completed</option></select><select value={priority} onChange={e=>setPriority(e.target.value)}><option>All</option><option>High</option><option>Medium</option><option>Low</option></select></section>
 <section className="task-grid">{filtered.map(t=><TaskCard key={t.id} task={t} onCycle={()=>cycle(t.id)} onEdit={()=>{setEditing(t);setModal(true)}} onDelete={()=>remove(t.id)}/>)}{!filtered.length&&<div className="empty">No tasks match your filters.</div>}</section>
 </main>{modal&&<Modal initial={editing} onClose={()=>{setModal(false);setEditing(null)}} onSave={save}/>}</div>
}
function Stat({label,value,icon}){return <div className="stat"><div className="stat-icon">{icon}</div><div><span>{label}</span><strong>{value}</strong></div></div>}
function TaskCard({task,onCycle,onEdit,onDelete}){return <article className="task-card"><div className="task-top"><button className="status-btn" title="Change status" onClick={onCycle}>{task.status==='Completed'?<CheckCircle2/>:task.status==='In Progress'?<Clock3/>:<Circle/>}</button><div className="task-actions"><button onClick={onEdit} aria-label="Edit task"><Pencil size={16}/></button><button onClick={onDelete} aria-label="Delete task"><Trash2 size={16}/></button></div></div><h3>{task.title}</h3><p>{task.description||'No description.'}</p><div className="task-meta"><span className={`pill ${task.priority.toLowerCase()}`}>{task.priority}</span><span>Due {task.due}</span></div><div className="status-text">{task.status}</div></article>}
function Modal({initial,onClose,onSave}){const [form,setForm]=useState(initial||{title:'',description:'',status:'To Do',priority:'Medium',due:''});const [error,setError]=useState('');function submit(e){e.preventDefault();if(!form.title.trim()){setError('Task title is required.');return}if(!form.due){setError('Please select a due date.');return}setError('');onSave({...form,title:form.title.trim()})}return <div className="overlay"><form className="modal" onSubmit={submit}><div className="modal-head"><div><p className="eyebrow">TASK</p><h2>{initial?'Edit task':'Add a new task'}</h2></div><button type="button" onClick={onClose}><X/></button></div><label>Title<input value={form.title} onChange={e=>setForm({...form,title:e.target.value})} placeholder="e.g. Finish portfolio case study"/></label><label>Description<textarea value={form.description} onChange={e=>setForm({...form,description:e.target.value})} placeholder="What needs to be done?"/></label><div className="two"><label>Status<select value={form.status} onChange={e=>setForm({...form,status:e.target.value})}><option>To Do</option><option>In Progress</option><option>Completed</option></select></label><label>Priority<select value={form.priority} onChange={e=>setForm({...form,priority:e.target.value})}><option>Low</option><option>Medium</option><option>High</option></select></label></div><label>Due date<input type="date" value={form.due} onChange={e=>setForm({...form,due:e.target.value})}/></label>{error&&<p className="error">{error}</p>}<div className="modal-actions"><button type="button" className="secondary" onClick={onClose}>Cancel</button><button className="primary">{initial?'Save changes':'Create task'}</button></div></form></div>}

createRoot(document.getElementById('root')).render(<App/>);
