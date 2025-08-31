

// import React, * as react from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Mic,
//   Send,
//   Sparkles,
//   Activity,
//   HeartPulse,
//   Shield,
//   PhoneCall,
//   Menu,
//   X,
//   UserCircle2,
//   CheckCircle2,
//   Flame,
//   BookOpen,
//   PenLine,
//   Brain,
//   Wind,
//   SmilePlus,
//   Bot,
//   BellRing,
//   ChevronRight,
//   Home,
//   MessageSquare,
//   BarChart3,
//   LayoutGrid,
//   Info,
//   Mail,
//   Moon,
//   Sun,
//   AlertTriangle,
//   SendHorizontal,
//   Bookmark,
//   Plus
// } from "lucide-react";
// import {
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   AreaChart,
//   Area,
// } from "recharts";

// // Helper: classNames
// function cn(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

// // Fake data for charts
// const moodData = [
//   { day: "Mon", mood: 5 },
//   { day: "Tue", mood: 6 },
//   { day: "Wed", mood: 4 },
//   { day: "Thu", mood: 7 },
//   { day: "Fri", mood: 6 },
//   { day: "Sat", mood: 8 },
//   { day: "Sun", mood: 7 },
// ];

// const checkins = [
//   { date: "Aug 19", score: 5 },
//   { date: "Aug 20", score: 6 },
//   { date: "Aug 21", score: 7 },
//   { date: "Aug 22", score: 7 },
//   { date: "Aug 23", score: 6 },
//   { date: "Aug 24", score: 8 },
//   { date: "Aug 25", score: 7 },
// ];

// const dailyQuotes = [
//   "The only way out is through. You've got this.",
//   "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
//   "You are the only one who can control your future.",
//   "Breathe. It's just a bad day, not a bad life.",
//   "Progress, not perfection.",
// ];

// // Floating typing dots
// function TypingDots() {
//   return (
//     <div className="flex items-center gap-1">
//       {[0, 1, 2].map((i) => (
//         <motion.span
//           key={i}
//           className="inline-block h-2 w-2 rounded-full bg-slate-400 dark:bg-slate-500"
//           animate={{ y: [0, -3, 0], opacity: [0.7, 1, 0.7] }}
//           transition={{ repeat: Infinity, duration: 0.9, delay: i * 0.15 }}
//         />
//       ))}
//     </div>
//   );
// }

// // Animated AI avatar
// function AwaazAvatar({ size = 56 }) {
//   return (
//     <motion.div
//       className="relative"
//       animate={{ rotate: [0, 2, -2, 0] }}
//       transition={{ repeat: Infinity, duration: 6 }}
//       style={{ width: size, height: size }}
//       aria-label="Awaaz AI avatar"
//     >
//       <div className="w-full h-full rounded-full bg-gradient-to-br from-sky-300 via-teal-300 to-indigo-300 shadow-[0_10px_30px_rgba(56,189,248,0.35)] dark:from-sky-700 dark:via-teal-700 dark:to-indigo-700 grid place-items-center">
//         <motion.div
//           className="rounded-full bg-white/70 backdrop-blur p-2"
//           animate={{ scale: [1, 1.06, 1] }}
//           transition={{ repeat: Infinity, duration: 3 }}
//         >
//           <Bot className="w-6 h-6 text-slate-700" />
//         </motion.div>
//       </div>
//       <motion.span
//         className="absolute -bottom-1 -right-1 rounded-full bg-emerald-400 shadow p-1"
//         animate={{ scale: [1, 1.2, 1] }}
//         transition={{ repeat: Infinity, duration: 2 }}
//       >
//         <Sparkles className="w-3 h-3 text-white" />
//       </motion.span>
//     </motion.div>
//   );
// }

// // Navigation definition
// const PAGES = [
//   { key: "home", label: "Home", icon: Home },
//   { key: "login", label: "Login", icon: UserCircle2 },
//   { key: "chat", label: "Chat", icon: MessageSquare },
//   { key: "dashboard", label: "Dashboard", icon: BarChart3 },
//   { key: "modules", label: "Modules", icon: LayoutGrid },
//   { key: "about", label: "About", icon: Info },
//   { key: "contact", label: "Contact", icon: Mail },
// ];

// function FloatingChat({ open, onClose, theme }: { open: boolean; onClose: () => void; theme: string }) {
//   const [messages, setMessages] = react.useState([
//     { id: 1, from: "ai", text: "Hi, I'm Awaaz. How are you feeling right now?" },
//   ]);
//   const [input, setInput] = react.useState("");
//   const [thinking, setThinking] = react.useState(false);
//   const nextId = react.useRef(2);

//   function send() {
//     if (!input.trim()) return;
//     const userMsg = { id: nextId.current++, from: "user", text: input.trim() };
//     setMessages((m) => [...m, userMsg]);
//     setInput("");
//     setThinking(true);
//     setTimeout(() => {
//       setMessages((m) => [
//         ...m,
//         {
//           id: nextId.current++,
//           from: "ai",
//           text: "Thanks for sharing. Let’s take a slow 4-7-8 breath together. Inhale 4, hold 7, exhale 8. Want to try a 2‑minute breathing session?",
//         },
//       ]);
//       setThinking(false);
//     }, 900);
//   }

//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.aside
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 30 }}
//           className={cn(
//             "fixed bottom-24 right-6 z-50 w-[420px] max-w-[95vw] overflow-hidden rounded-2xl border border-slate-200 shadow-2xl",
//             theme === "light" ? "bg-white" : "bg-slate-900 border-slate-700"
//           )}
//           role="dialog"
//           aria-label="Awaaz chat"
//         >
//           <div
//             className={cn(
//               "flex items-center gap-3 border-b p-3",
//               theme === "light" ? "bg-gradient-to-r from-sky-100 via-teal-100 to-indigo-100 border-slate-200" : "bg-gradient-to-r from-sky-800 via-teal-800 to-indigo-800 border-slate-700"
//             )}
//           >
//             <AwaazAvatar size={40} />
//             <div className="flex-1">
//               <p className={cn("text-sm font-semibold", theme === "light" ? "text-slate-800" : "text-white")}>
//                 Awaaz
//               </p>
//               <p className={cn("text-xs", theme === "light" ? "text-slate-600" : "text-slate-300")}>
//                 Friendly & confidential support
//               </p>
//             </div>
//             <button
//               onClick={onClose}
//               className={cn("rounded-full p-1", theme === "light" ? "hover:bg-white/60" : "hover:bg-slate-800")}
//               aria-label="Close chat"
//             >
//               <X className={cn("h-5 w-5", theme === "light" ? "text-slate-700" : "text-slate-300")} />
//             </button>
//           </div>

//           <div className={cn("max-h-[50vh] overflow-y-auto space-y-3 p-4", theme === "light" ? "bg-slate-50/60" : "bg-slate-800/60")}>
//             {messages.map((m) => (
//               <div
//                 key={m.id}
//                 className={cn("flex", m.from === "user" ? "justify-end" : "justify-start")}
//               >
//                 <div
//                   className={cn(
//                     "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
//                     m.from === "user"
//                       ? "bg-indigo-600 text-white rounded-br-sm"
//                       : "bg-white text-slate-800 border border-slate-200 rounded-bl-sm dark:bg-slate-700 dark:text-white dark:border-slate-600"
//                   )}
//                 >
//                   {m.text}
//                 </div>
//               </div>
//             ))}
//             {thinking && (
//               <div className="flex items-center gap-2 text-xs text-slate-500">
//                 <AwaazAvatar size={20} /> <TypingDots />
//               </div>
//             )}
//           </div>

//           <div className={cn("flex items-center gap-2 border-t p-3", theme === "light" ? "bg-white border-slate-200" : "bg-slate-900 border-slate-700")}>
//             <button
//               className={cn(
//                 "rounded-xl border px-3 py-2 text-xs",
//                 theme === "light" ? "border-slate-200 text-slate-700 hover:bg-slate-50" : "border-slate-700 text-slate-300 hover:bg-slate-800"
//               )}
//               title="Voice input"
//             >
//               <Mic className="h-4 w-4" />
//             </button>
//             <input
//               className={cn(
//                 "flex-1 rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300",
//                 theme === "light" ? "border-slate-200 bg-white text-slate-800" : "border-slate-700 bg-slate-800 text-white"
//               )}
//               placeholder="Type a message…"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && send()}
//               aria-label="Message input"
//             />
//             <button
//               onClick={send}
//               className="inline-flex items-center gap-1 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700"
//               aria-label="Send message"
//             >
//               <Send className="h-4 w-4" /> Send
//             </button>
//           </div>
//         </motion.aside>
//       )}
//     </AnimatePresence>
//   );
// }

// function EmergencyStrip() {
//   return (
//     <div className="flex items-center gap-2 rounded-xl bg-rose-50 dark:bg-rose-900 px-3 py-2 text-rose-700 dark:text-rose-200 ring-1 ring-rose-200 dark:ring-rose-800">
//       <AlertTriangle className="h-4 w-4" />
//       <p className="text-xs">
//         If you are in danger or considering self-harm, call your local helpline immediately.
//       </p>
//       <a
//         href="tel:112"
//         className="ml-auto inline-flex items-center gap-1 rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-rose-700"
//       >
//         <PhoneCall className="h-4 w-4" /> Call 112
//       </a>
//     </div>
//   );
// }

// // Page Sections
// function HomePage({ onNavigate }: { onNavigate: (page: string) => void }) {
//   const [dailyQuote, setDailyQuote] = react.useState('');

//   react.useEffect(() => {
//     // Select a random quote from the array
//     const randomIndex = Math.floor(Math.random() * dailyQuotes.length);
//     setDailyQuote(dailyQuotes[randomIndex]);
//   }, []);

//   return (
//     <div className="space-y-6">
//       <div className="rounded-3xl bg-gradient-to-br from-sky-100 via-teal-100 to-indigo-100 dark:from-sky-900 dark:via-teal-900 dark:to-indigo-900 p-6 ring-1 ring-slate-200 dark:ring-slate-700">
//         <div className="flex items-center gap-4">
//           <AwaazAvatar size={64} />
//           <div>
//             <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Welcome to Awaaz</h2>
//             <p className="text-slate-600 dark:text-slate-300">
//               AI‑powered emotional support — friendly, confidential, and always here for you.
//             </p>
//           </div>
//         </div>
//         <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
//           <button onClick={() => alert(dailyQuote)} className="flex items-center gap-2 rounded-2xl bg-white dark:bg-slate-700 p-4 text-left shadow ring-1 ring-slate-200 dark:ring-slate-600 hover:shadow-md dark:hover:bg-slate-600">
//             <SmilePlus className="h-5 w-5 text-slate-800 dark:text-white" />
//             <span className="text-slate-800 dark:text-white">Daily Check‑in</span>
//           </button>
//           <button onClick={() => onNavigate('breathingPage')} className="flex items-center gap-2 rounded-2xl bg-white dark:bg-slate-700 p-4 text-left shadow ring-1 ring-slate-200 dark:ring-slate-600 hover:shadow-md dark:hover:bg-slate-600">
//             <Wind className="h-5 w-5 text-slate-800 dark:text-white" />
//             <span className="text-slate-800 dark:text-white">2‑min Breathing</span>
//           </button>
//           <button onClick={() => onNavigate('journalingPage')} className="flex items-center gap-2 rounded-2xl bg-white dark:bg-slate-700 p-4 text-left shadow ring-1 ring-slate-200 dark:ring-slate-600 hover:shadow-md dark:hover:bg-slate-600">
//             <PenLine className="h-5 w-5 text-slate-800 dark:text-white" />
//             <span className="text-slate-800 dark:text-white">Quick Journal</span>
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="col-span-2 rounded-3xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
//           <div className="mb-3 flex items-center justify-between">
//             <h3 className="font-semibold text-slate-800 dark:text-white">Weekly Mood Trend</h3>
//             <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
//               <Activity className="h-4 w-4" /> Mood score (1–10)
//             </div>
//           </div>
//           <div className="h-60">
//             <ResponsiveContainer width="100%" height="100%">
//               <AreaChart data={moodData}>
//                 <defs>
//                   <linearGradient id="mood" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.4} />
//                     <stop offset="95%" stopColor="#818cf8" stopOpacity={0.05} />
//                   </linearGradient>
//                 </defs>
//                 <CartesianGrid strokeDasharray="3 3" stroke={document.documentElement.classList.contains('dark') ? '#475569' : '#e2e8f0'}/>
//                 <XAxis dataKey="day" stroke={document.documentElement.classList.contains('dark') ? '#94a3b8' : '#64748b'} />
//                 <YAxis domain={[0, 10]} stroke={document.documentElement.classList.contains('dark') ? '#94a3b8' : '#64748b'} />
//                 <Tooltip />
//                 <Area type="monotone" dataKey="mood" stroke="#6366f1" fill="url(#mood)" />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//         <div className="rounded-3xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
//           <h3 className="mb-3 font-semibold text-slate-800 dark:text-white">Streaks & Badges</h3>
//           <div className="space-y-3">
//             <div className="flex items-center gap-3 rounded-2xl bg-indigo-50 dark:bg-indigo-900 p-3 text-indigo-700 dark:text-indigo-200">
//               <Flame className="h-5 w-5" /> <span className="font-medium">7‑day check‑in streak</span>
//             </div>
//             <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 dark:bg-emerald-900 p-3 text-emerald-700 dark:text-emerald-200">
//               <CheckCircle2 className="h-5 w-5" /> Completed “Calm Breathing x5”
//             </div>
//             <div className="flex items-center gap-3 rounded-2xl bg-sky-50 dark:bg-sky-900 p-3 text-sky-700 dark:text-sky-200">
//               <Shield className="h-5 w-5" /> Privacy‑first account
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ChatPage() {
//   return (
//     <div className="grid grid-rows-[1fr_auto] h-[70vh] rounded-3xl bg-white dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700 overflow-hidden">
//       <div className="overflow-y-auto p-6 space-y-3 bg-slate-50/60 dark:bg-slate-800/60">
//         <div className="flex items-start gap-3">
//           <AwaazAvatar size={36} />
//           <div className="rounded-2xl rounded-bl-sm bg-white dark:bg-slate-700 px-4 py-2 text-slate-800 dark:text-white shadow ring-1 ring-slate-200 dark:ring-slate-600">
//             Hey, I’m Awaaz. What would you like to talk about today?
//           </div>
//         </div>
//         <div className="flex justify-end">
//           <div className="max-w-[70%] rounded-2xl rounded-br-sm bg-indigo-600 px-4 py-2 text-white shadow">
//             I’m feeling stressed about exams and deadlines.
//           </div>
//         </div>
//         <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
//           <AwaazAvatar size={18} /> <TypingDots />
//         </div>
//       </div>
//       <div className="flex items-center gap-2 border-t p-3 bg-white dark:bg-slate-900 dark:border-slate-700">
//         <button
//           className="rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
//           title="Voice input"
//         >
//           <Mic className="h-4 w-4" />
//         </button>
//         <input
//           className="flex-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300 dark:text-white"
//           placeholder="Message Awaaz…"
//         />
//         <button
//           className="inline-flex items-center gap-1 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700"
//           aria-label="Send message"
//         >
//           <Send className="h-4 w-4" /> Send
//         </button>
//       </div>
//     </div>
//   );
// }

// function DashboardPage() {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//       <div className="col-span-2 rounded-3xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
//         <div className="mb-3 flex items-center justify-between">
//           <h3 className="font-semibold text-slate-800 dark:text-white">Check‑ins (last 7 days)</h3>
//           <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
//             <HeartPulse className="h-4 w-4" /> Average mood: 6.6
//           </div>
//         </div>
//         <div className="h-64">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={checkins}>
//               <CartesianGrid strokeDasharray="3 3" stroke={document.documentElement.classList.contains('dark') ? '#475569' : '#e2e8f0'} />
//               <XAxis dataKey="date" stroke={document.documentElement.classList.contains('dark') ? '#94a3b8' : '#64748b'} />
//               <YAxis domain={[0, 10]} stroke={document.documentElement.classList.contains('dark') ? '#94a3b8' : '#64748b'} />
//               <Tooltip />
//               <Line type="monotone" dataKey="score" stroke="#10b981" strokeWidth={2} dot={false} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//       <div className="rounded-3xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
//         <h3 className="mb-3 font-semibold text-slate-800 dark:text-white">Journal Stats</h3>
//         <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
//           <li className="flex items-center justify-between">
//             <span>Entries this week</span>
//             <span className="font-semibold">5</span>
//           </li>
//           <li className="flex items-center justify-between">
//             <span>Avg. sentiment</span>
//             <span className="font-semibold">Positive</span>
//           </li>
//           <li className="flex items-center justify-between">
//             <span>Most used tag</span>
//             <span className="font-semibold">#focus</span>
//           </li>
//         </ul>
//         <div className="mt-4 rounded-2xl bg-sky-50 dark:bg-sky-900 p-3 text-sky-700 dark:text-sky-200">
//           <BellRing className="mr-2 inline h-4 w-4" /> Tip: Try a 2‑minute breathing break.
//         </div>
//       </div>
//       <div className="rounded-3xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
//         <h3 className="mb-3 font-semibold text-slate-800 dark:text-white">Confidentiality</h3>
//         <p className="text-sm text-slate-600 dark:text-slate-300">
//           Your conversations are private and stored securely. This is a demo; no real data is saved.
//         </p>
//         <a
//           className="mt-3 inline-flex items-center gap-1 rounded-xl bg-teal-600 px-3 py-2 text-sm font-semibold text-white hover:bg-teal-700"
//           href="#privacy"
//         >
//           <Shield className="h-4 w-4" /> Privacy Policy
//         </a>
//       </div>
//       <div className="rounded-3xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
//         <h3 className="mb-3 font-semibold text-slate-800 dark:text-white">Achievements</h3>
//         <div className="grid grid-cols-2 gap-3 text-slate-700 dark:text-slate-300">
//           <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-900 p-3 text-emerald-700 dark:text-emerald-200">
//             🌤 Morning Mindfulness
//           </div>
//           <div className="rounded-2xl bg-indigo-50 dark:bg-indigo-900 p-3 text-indigo-700 dark:text-indigo-200">
//             📝 3‑Day Journaling
//           </div>
//           <div className="rounded-2xl bg-sky-50 dark:bg-sky-900 p-3 text-sky-700 dark:text-sky-200">
//             💧 Breath Master
//           </div>
//           <div className="rounded-2xl bg-teal-50 dark:bg-teal-900 p-3 text-teal-700 dark:text-teal-200">
//             🛡 Privacy Pro
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ModulesPage({ onNavigate }: { onNavigate: (pageKey: string) => void }) {
//   const modules = [
//     { key: "mood", label: "Mood", icon: SmilePlus, desc: "Track & reflect" },
//     { key: "journalingPage", label: "Journaling", icon: PenLine, desc: "Guided prompts" },
//     { key: "breathingPage", label: "Breathing", icon: Wind, desc: "4‑7‑8, box breath" },
//     { key: "meditationPage", label: "Meditation", icon: Brain, desc: "2–10 min sessions" },
//     { key: "copingPage", label: "Coping", icon: HeartPulse, desc: "Grounding, CBT" },
//     { key: "learnPage", label: "Learn", icon: BookOpen, desc: "Articles & tips" },
//   ];
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {modules.map((m) => (
//         <button
//           key={m.key}
//           onClick={() => onNavigate(m.key)}
//           className="group flex items-start gap-4 rounded-3xl bg-white dark:bg-slate-800 p-5 text-left shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 transition hover:-translate-y-0.5 hover:shadow-md dark:hover:bg-slate-700"
//         >
//           <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-200 via-teal-200 to-indigo-200 dark:from-sky-900 dark:via-teal-900 dark:to-indigo-900">
//             <m.icon className="h-6 w-6 text-slate-700 dark:text-white" />
//           </div>
//           <div>
//             <div className="flex items-center gap-2">
//               <h4 className="font-semibold text-slate-800 dark:text-white">{m.label}</h4>
//               <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition" />
//             </div>
//             <p className="text-sm text-slate-600 dark:text-slate-300">{m.desc}</p>
//           </div>
//         </button>
//       ))}
//     </div>
//   );
// }

// function JournalingPage() {
//     const [journalEntry, setJournalEntry] = react.useState('');

//     const saveEntry = () => {
//         alert("Journal entry saved!");
//         setJournalEntry('');
//     };

//     return (
//         <div className="space-y-6">
//             <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Daily Journaling 📝</h2>
//             <div className="rounded-3xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
//                 <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
//                     Write down your thoughts and feelings. No need to be perfect, just let it flow.
//                 </p>
//                 <textarea
//                     className="w-full h-48 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-sky-300"
//                     placeholder="Today, I feel..."
//                     value={journalEntry}
//                     onChange={(e) => setJournalEntry(e.target.value)}
//                 />
//                 <button
//                     onClick={saveEntry}
//                     className="mt-4 w-full rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-lg hover:bg-indigo-700 transition"
//                 >
//                     <SendHorizontal className="inline-block h-4 w-4 mr-2" /> Save Entry
//                 </button>
//             </div>
//         </div>
//     );
// }

// function BreathingPage() {
//     const youtubeLink = "https://www.youtube.com/watch?v=Ty_H05p0u7E";
//     return (
//         <div className="space-y-6">
//             <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">2-Minute Breathing 🌬️</h2>
//             <div className="rounded-3xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
//                 <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
//                     Breathing exercises can help calm your nervous system. Try this guided 2-minute breathing video.
//                 </p>
//                 <a
//                     href={youtubeLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-4 rounded-3xl bg-red-50 dark:bg-red-900 p-5 text-red-700 dark:text-red-200 shadow-sm ring-1 ring-red-200 dark:ring-red-800 transition hover:-translate-y-0.5 hover:shadow-md"
//                 >
//                     <div className="grid h-12 w-12 place-items-center rounded-2xl bg-red-200 dark:bg-red-800">
//                         <Wind className="h-6 w-6 text-red-700 dark:text-red-200" />
//                     </div>
//                     <div>
//                         <h4 className="font-semibold">Guided Breathing Exercise</h4>
//                         <p className="text-sm">Source: YouTube</p>
//                     </div>
//                     <ChevronRight className="ml-auto h-5 w-5 text-red-400" />
//                 </a>
//             </div>
//         </div>
//     );
// }


// function MeditationPage() {
//     const meditationLinks = [
//         { title: "5-Minute Guided Meditation", link: "https://www.youtube.com/watch?v=inpVhS4t4eU", icon: 'youtube', source: 'YouTube' },
//         { title: "Body Scan for Stress Relief", link: "https://www.mindful.org/meditation/body-scan-meditation/", icon: 'web', source: 'Mindful.org' },
//         { title: "Sleep Meditation for Beginners", link: "https://www.headspace.com/meditation/sleep-meditation", icon: 'web', source: 'Headspace' },
//     ];

//     return (
//         <div className="space-y-6">
//             <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Meditation 🧘‍♀️</h2>
//             <p className="text-slate-600 dark:text-slate-300">
//                 Here are some popular, guided meditation resources to help you relax and focus.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {meditationLinks.map((item, index) => (
//                     <a
//                         key={index}
//                         href={item.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-4 rounded-3xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 transition hover:-translate-y-0.5 hover:shadow-md"
//                     >
//                         <div className="grid h-12 w-12 place-items-center rounded-2xl bg-purple-100 dark:bg-purple-900">
//                             <Brain className="h-6 w-6 text-purple-700 dark:text-purple-200" />
//                         </div>
//                         <div>
//                             <h4 className="font-semibold text-slate-800 dark:text-white">{item.title}</h4>
//                             <p className="text-sm text-slate-600 dark:text-slate-300">Source: {item.source}</p>
//                         </div>
//                         <ChevronRight className="ml-auto h-5 w-5 text-slate-400" />
//                     </a>
//                 ))}
//             </div>
//         </div>
//     );
// }

// function CopingPage() {
//     const copingLinks = [
//         { title: "Grounding Exercises for Anxiety", link: "https://www.verywellmind.com/grounding-techniques-for-anxiety-4178657", icon: 'web', source: 'Verywell Mind' },
//         { title: "Cognitive Behavioral Therapy (CBT) Tips", link: "https://www.helpguide.org/articles/therapy-counseling/cognitive-behavioral-therapy-cbt.htm", icon: 'web', source: 'HelpGuide.org' },
//         { title: "Stress Management Techniques", link: "https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/stress-relief/art-20046040", icon: 'web', source: 'Mayo Clinic' },
//     ];

//     return (
//         <div className="space-y-6">
//             <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Coping Strategies 🧠</h2>
//             <p className="text-slate-600 dark:text-slate-300">
//                 Explore these resources to learn and practice effective coping strategies.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {copingLinks.map((item, index) => (
//                     <a
//                         key={index}
//                         href={item.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-4 rounded-3xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 transition hover:-translate-y-0.5 hover:shadow-md"
//                     >
//                         <div className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-100 dark:bg-teal-900">
//                             <HeartPulse className="h-6 w-6 text-teal-700 dark:text-teal-200" />
//                         </div>
//                         <div>
//                             <h4 className="font-semibold text-slate-800 dark:text-white">{item.title}</h4>
//                             <p className="text-sm text-slate-600 dark:text-slate-300">Source: {item.source}</p>
//                         </div>
//                         <ChevronRight className="ml-auto h-5 w-5 text-slate-400" />
//                     </a>
//                 ))}
//             </div>
//         </div>
//     );
// }

// function LearnPage() {
//     const psychologyLinks = [
//         {
//             title: "PositivePsychology.com",
//             link: "https://positivepsychology.com/",
//             desc: "Evidence-based psychology articles, tools, and resources for practitioners and individuals.",
//         },
//         {
//             title: "Simply Psychology",
//             link: "https://www.simplypsychology.org/",
//             desc: "An educational resource on various psychology topics, theories, and research.",
//         },
//         {
//             title: "Mindful.org",
//             link: "https://www.mindful.org/",
//             desc: "Articles and resources on mindfulness and meditation.",
//         },
//     ];

//     return (
//         <div className="space-y-6">
//             <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Learn & Grow 🌱</h2>
//             <p className="text-slate-600 dark:text-slate-300">
//                 Expand your knowledge of mental well-being with these trusted psychology resources.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {psychologyLinks.map((item, index) => (
//                     <a
//                         key={index}
//                         href={item.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-4 rounded-3xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 transition hover:-translate-y-0.5 hover:shadow-md"
//                     >
//                         <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-100 dark:bg-blue-900">
//                             <BookOpen className="h-6 w-6 text-blue-700 dark:text-blue-200" />
//                         </div>
//                         <div>
//                             <h4 className="font-semibold text-slate-800 dark:text-white">{item.title}</h4>
//                             <p className="text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
//                         </div>
//                         <ChevronRight className="ml-auto h-5 w-5 text-slate-400" />
//                     </a>
//                 ))}
//             </div>
//         </div>
//     );
// }

// function AboutPage() {
//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">About Awaaz</h2>
//       <div className="rounded-3xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
//         <p className="text-slate-600 dark:text-slate-300">
//           Awaaz, meaning "voice" in Hindi, is an AI-powered emotional support companion designed to help you navigate your feelings. We believe that everyone deserves a safe space to express themselves. Our mission is to provide **friendly, confidential, and always-available support** through guided journaling, mood tracking, and proven coping strategies.
//         </p>
//       </div>
//       <div className="rounded-3xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
//         <h3 className="mb-2 text-xl font-semibold text-slate-800 dark:text-white">How Awaaz Works</h3>
//         <p className="text-slate-600 dark:text-slate-300">
//           Awaaz uses a conversational AI model to understand your concerns and provide helpful, non-judgmental responses. It's a tool to help you reflect on your emotions, build healthy habits, and connect with helpful resources. **Please remember, Awaaz is not a substitute for professional therapy or medical advice.**
//         </p>
//       </div>
//     </div>
//   );
// }

// function ContactPage() {
//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Contact & Emergency</h2>
//       <div className="rounded-3xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
//         <h3 className="mb-2 text-xl font-semibold text-slate-800 dark:text-white">Emergency Helplines</h3>
//         <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
//           If you or someone you know is in immediate danger, please use these resources.
//         </p>
//         <ul className="space-y-3">
//           <li className="flex items-center justify-between rounded-xl bg-rose-50 dark:bg-rose-900 p-4 text-rose-700 dark:text-rose-200 ring-1 ring-rose-200 dark:ring-rose-800">
//             <span className="font-medium">Police & General Emergency</span>
//             <a href="tel:112" className="inline-flex items-center gap-2 rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-rose-700">
//               <PhoneCall className="h-4 w-4" /> Call 112
//             </a>
//           </li>
//           <li className="flex items-center justify-between rounded-xl bg-orange-50 dark:bg-orange-900 p-4 text-orange-700 dark:text-orange-200 ring-1 ring-orange-200 dark:ring-orange-800">
//             <span className="font-medium">Hospital & Ambulance</span>
//             <a href="tel:108" className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-orange-700">
//               <PhoneCall className="h-4 w-4" /> Call 108
//             </a>
//           </li>
//           <li className="flex items-center justify-between rounded-xl bg-sky-50 dark:bg-sky-900 p-4 text-sky-700 dark:text-sky-200 ring-1 ring-sky-200 dark:ring-sky-800">
//             <span className="font-medium">Suicide Prevention Hotline</span>
//             <a href="tel:988" className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-sky-700">
//               <PhoneCall className="h-4 w-4" /> Call 988
//             </a>
//           </li>
//         </ul>
//       </div>
//       <div className="rounded-3xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
//         <h3 className="mb-2 text-xl font-semibold text-slate-800 dark:text-white">General Inquiries</h3>
//         <p className="text-slate-600 dark:text-slate-300">
//           For non-emergency questions or support, you can reach out to us at support@awaaz.com.
//         </p>
//       </div>
//     </div>
//   );
// }

// function Login() {
//   const [email, setEmail] = react.useState('');
//   const [password, setPassword] = react.useState('');

//   const handleLogin = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     alert(`Logged in with email: ${email}`);
//   };

//   return (
//     <div className="mx-auto grid max-w-md gap-6 rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 shadow-sm">
//       <div className="text-center">
//         <h2 className="mt-2 text-2xl font-semibold text-slate-800 dark:text-white">Log In</h2>
//         <p className="text-sm text-slate-600 dark:text-slate-400">Welcome back — your voice matters.</p>
//       </div>
//       <form onSubmit={handleLogin} className="grid gap-4">
//         <input
//           type="email"
//           className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-4 py-3 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-sky-400 dark:text-white"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-4 py-3 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-sky-400 dark:text-white"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button
//           type="submit"
//           className="mt-2 rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400 transition"
//         >
//           Log in
//         </button>
//       </form>
//       <p className="text-center text-sm text-slate-400">
//         Don’t have an account?{" "}
//         <span className="cursor-pointer text-sky-300 hover:underline">Sign up</span>
//       </p>
//     </div>
//   );
// }

// function AwaazApp() {
//   const [theme, setTheme] = react.useState("light");
//   const [active, setActive] = react.useState("home");
//   const [chatOpen, setChatOpen] = react.useState(true);
//   const [navOpen, setNavOpen] = react.useState(false);
//   const [activeModulePage, setActiveModulePage] = react.useState<string | null>(null);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   react.useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [theme]);

//   const handleNavigate = (pageKey: string) => {
//     if (["journalingPage", "meditationPage", "copingPage", "breathingPage", "learnPage"].includes(pageKey)) {
//       setActive("modules");
//       setActiveModulePage(pageKey);
//     } else {
//       setActive(pageKey);
//       setActiveModulePage(null);
//     }
//   };

//   const renderPage = () => {
//     switch (active) {
//       case "home":
//         return <HomePage onNavigate={handleNavigate} />;
//       case "chat":
//         return <ChatPage />;
//       case "dashboard":
//         return <DashboardPage />;
//       case "modules":
//         switch (activeModulePage) {
//           case "journalingPage":
//             return <JournalingPage />;
//           case "breathingPage":
//             return <BreathingPage />;
//           case "meditationPage":
//             return <MeditationPage />;
//           case "copingPage":
//             return <CopingPage />;
//           case "learnPage":
//               return <LearnPage />;
//           default:
//             return <ModulesPage onNavigate={handleNavigate} />;
//         }
//       case "about":
//         return <AboutPage />;
//       case "contact":
//         return <ContactPage />;
//       case "login":
//         return <Login />;
//       default:
//         return <HomePage onNavigate={handleNavigate} />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50 dark:from-slate-900 dark:via-sky-900 dark:to-indigo-900 text-slate-800 dark:text-white transition-colors duration-300">
//       {/* Top bar */}
//       <header className="sticky top-0 z-40 border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur">
//         <div className="mx-auto max-w-7xl px-4 py-3">
//           <div className="flex items-center gap-3">
//             <button className="rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-700 lg:hidden" onClick={() => setNavOpen((s) => !s)} aria-label="Toggle navigation">
//               {navOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//             </button>
//             <div className="flex items-center gap-2">
//               <AwaazAvatar size={36} />
//               <div className="leading-tight">
//                 <div className="text-lg font-extrabold tracking-tight">Awaaz</div>
//                 <div className="text-[11px] text-slate-500 dark:text-slate-400">Your voice matters. Talk to Awaaz.</div>
//               </div>
//             </div>

//             <nav className="ml-6 hidden gap-1 lg:flex">
//               {PAGES.map((p) => (
//                 <button
//                   key={p.key}
//                   onClick={() => handleNavigate(p.key)}
//                   className={cn(
//                     "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm",
//                     active === p.key ? "bg-sky-100 dark:bg-sky-900 text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
//                   )}
//                 >
//                   <p.icon className="h-4 w-4" /> {p.label}
//                 </button>
//               ))}
//             </nav>

//             <div className="ml-auto flex items-center gap-2">
//                 <button
//                     onClick={toggleTheme}
//                     className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700"
//                     aria-label="Toggle dark mode"
//                 >
//                     {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
//                 </button>
//               <button className="hidden rounded-xl bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700 md:inline-flex">
//                 <Shield className="mr-1 h-4 w-4" /> Privacy
//               </button>
//               <button className="rounded-xl bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-rose-700">
//                 <PhoneCall className="mr-1 h-4 w-4" /> Helpline
//               </button>
//               <button onClick={() => handleNavigate("login")} className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700">
//                 <UserCircle2 className="mr-1 h-4 w-4" /> Login
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main content */}
//       <main className="mx-auto max-w-7xl px-4 py-8">
//         <div className="mb-6">
//           <EmergencyStrip />
//         </div>
//         <AnimatePresence mode="wait">
//           <motion.div key={active + activeModulePage} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="min-h-[50vh]">
//             {renderPage()}
//           </motion.div>
//         </AnimatePresence>

//         <footer id="privacy" className="mt-10 rounded-3xl bg-white dark:bg-slate-800 p-6 text-sm text-slate-600 dark:text-slate-300 ring-1 ring-slate-200 dark:ring-slate-700">
//           <div className="mb-2 font-semibold text-slate-800 dark:text-white">Privacy & Confidentiality</div>
//           <p>
//             Awaaz is a demo interface. For real deployments, include clear consent, data handling practices, and emergency resources based on region. This UI is designed with psychiatric color psychology (calming blues/teals) and engaging micro‑interactions.
//           </p>
//         </footer>
//       </main>

//       {/* Floating Chat Launcher (visible on every page) */}
//       <button
//         onClick={() => setChatOpen((s) => !s)}
//         className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-3 text-white shadow-2xl hover:bg-indigo-700"
//         aria-haspopup="dialog"
//         aria-expanded={chatOpen}
//       >
//         <AwaazAvatar size={28} />
//         <span className="hidden md:inline">Chat with Awaaz</span>
//       </button>

//       <FloatingChat open={chatOpen} onClose={() => setChatOpen(false)} theme={theme} />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <AwaazApp />
//     </>
//   );
// }





import React, * as react from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  Send,
  Sparkles,
  Activity,
  HeartPulse,
  Shield,
  PhoneCall,
  Menu,
  X,
  UserCircle2,
  CheckCircle2,
  Flame,
  BookOpen,
  PenLine,
  Brain,
  Wind,
  SmilePlus,
  Bot,
  BellRing,
  ChevronRight,
  Home,
  MessageSquare,
  BarChart3,
  LayoutGrid,
  Info,
  Mail,
  Moon,
  Sun,
  AlertTriangle,
  SendHorizontal,
  Bookmark,
  Plus
} from "lucide-react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

// Helper: classNames
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

// Fake data for charts
const moodData = [
  { day: "Mon", mood: 5 },
  { day: "Tue", mood: 6 },
  { day: "Wed", mood: 4 },
  { day: "Thu", mood: 7 },
  { day: "Fri", mood: 6 },
  { day: "Sat", mood: 8 },
  { day: "Sun", mood: 7 },
];

const checkins = [
  { date: "Aug 19", score: 5 },
  { date: "Aug 20", score: 6 },
  { date: "Aug 21", score: 7 },
  { date: "Aug 22", score: 7 },
  { date: "Aug 23", score: 6 },
  { date: "Aug 24", score: 8 },
  { date: "Aug 25", score: 7 },
];

const dailyQuotes = [
  "The only way out is through. You've got this.",
  "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
  "You are the only one who can control your future.",
  "Breathe. It's just a bad day, not a bad life.",
  "Progress, not perfection.",
];

// Floating typing dots
function TypingDots() {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="inline-block h-2 w-2 rounded-full bg-slate-400 dark:bg-slate-500"
          animate={{ y: [0, -3, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 0.9, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

// Animated AI avatar
function AwaazAvatar({ size = 56 }) {
  return (
    <motion.div
      className="relative"
      animate={{ rotate: [0, 2, -2, 0] }}
      transition={{ repeat: Infinity, duration: 6 }}
      style={{ width: size, height: size }}
      aria-label="Awaaz AI avatar"
    >
      <div className="w-full h-full rounded-full bg-gradient-to-br from-sky-300 via-teal-300 to-indigo-300 shadow-[0_10px_30px_rgba(56,189,248,0.35)] dark:from-sky-700 dark:via-teal-700 dark:to-indigo-700 grid place-items-center">
        <motion.div
          className="rounded-full bg-white/70 backdrop-blur p-2"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <Bot className="w-6 h-6 text-slate-700" />
        </motion.div>
      </div>
      <motion.span
        className="absolute -bottom-1 -right-1 rounded-full bg-emerald-400 shadow p-1"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Sparkles className="w-3 h-3 text-white" />
      </motion.span>
    </motion.div>
  );
}

// Navigation definition
const PAGES = [
  { key: "home", label: "Home", icon: Home },
  { key: "login", label: "Login", icon: UserCircle2 },
  { key: "chat", label: "Chat", icon: MessageSquare },
  { key: "dashboard", label: "Dashboard", icon: BarChart3 },
  { key: "modules", label: "Modules", icon: LayoutGrid },
  { key: "about", label: "About", icon: Info },
  { key: "contact", label: "Contact", icon: Mail },
];

function FloatingChat({ open, onClose, theme }: { open: boolean; onClose: () => void; theme: string }) {
  const [messages, setMessages] = react.useState([
    { id: 1, from: "ai", text: "Hi, I'm Awaaz. How are you feeling right now?" },
  ]);
  const [input, setInput] = react.useState("");
  const [thinking, setThinking] = react.useState(false);
  const nextId = react.useRef(2);

  function send() {
    if (!input.trim()) return;
    const userMsg = { id: nextId.current++, from: "user", text: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          id: nextId.current++,
          from: "ai",
          text: "Thanks for sharing. Let’s take a slow 4-7-8 breath together. Inhale 4, hold 7, exhale 8. Want to try a 2‑minute breathing session?",
        },
      ]);
      setThinking(false);
    }, 900);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className={cn(
            "fixed bottom-24 right-6 z-50 w-[420px] max-w-[95vw] overflow-hidden rounded-2xl border border-slate-200 shadow-2xl",
            theme === "light" ? "bg-white" : "bg-slate-900 border-slate-700"
          )}
          role="dialog"
          aria-label="Awaaz chat"
        >
          <div
            className={cn(
              "flex items-center gap-3 border-b p-3",
              theme === "light" ? "bg-gradient-to-r from-sky-100 via-teal-100 to-indigo-100 border-slate-200" : "bg-gradient-to-r from-sky-800 via-teal-800 to-indigo-800 border-slate-700"
            )}
          >
            <AwaazAvatar size={40} />
            <div className="flex-1">
              <p className={cn("text-sm font-semibold", theme === "light" ? "text-slate-800" : "text-white")}>
                Awaaz
              </p>
              <p className={cn("text-xs", theme === "light" ? "text-slate-600" : "text-slate-300")}>
                Friendly & confidential support
              </p>
            </div>
            <button
              onClick={onClose}
              className={cn("rounded-full p-1", theme === "light" ? "hover:bg-white/60" : "hover:bg-slate-800")}
              aria-label="Close chat"
            >
              <X className={cn("h-5 w-5", theme === "light" ? "text-slate-700" : "text-slate-300")} />
            </button>
          </div>

          <div className={cn("max-h-[50vh] overflow-y-auto space-y-3 p-4", theme === "light" ? "bg-slate-50/60" : "bg-slate-800/60")}>
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn("flex", m.from === "user" ? "justify-end" : "justify-start")}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                    m.from === "user"
                      ? "bg-indigo-600 text-white rounded-br-sm"
                      : "bg-white text-slate-800 border border-slate-200 rounded-bl-sm dark:bg-slate-700 dark:text-white dark:border-slate-600"
                  )}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {thinking && (
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <AwaazAvatar size={20} /> <TypingDots />
              </div>
            )}
          </div>

          <div className={cn("flex items-center gap-2 border-t p-3", theme === "light" ? "bg-white border-slate-200" : "bg-slate-900 border-slate-700")}>
            <button
              className={cn(
                "rounded-xl border px-3 py-2 text-xs",
                theme === "light" ? "border-slate-200 text-slate-700 hover:bg-slate-50" : "border-slate-700 text-slate-300 hover:bg-slate-800"
              )}
              title="Voice input"
            >
              <Mic className="h-4 w-4" />
            </button>
            <input
              className={cn(
                "flex-1 rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300",
                theme === "light" ? "border-slate-200 bg-white text-slate-800" : "border-slate-700 bg-slate-800 text-white"
              )}
              placeholder="Type a message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              aria-label="Message input"
            />
            <button
              onClick={send}
              className="inline-flex items-center gap-1 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" /> Send
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

function EmergencyStrip() {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-rose-50 dark:bg-rose-900 px-3 py-2 text-rose-700 dark:text-rose-200 ring-1 ring-rose-200 dark:ring-rose-800">
      <AlertTriangle className="h-4 w-4" />
      <p className="text-xs">
        If you are in danger or considering self-harm, call your local helpline immediately.
      </p>
      <a
        href="tel:112"
        className="ml-auto inline-flex items-center gap-1 rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-rose-700"
      >
        <PhoneCall className="h-4 w-4" /> Call 112
      </a>
    </div>
  );
}

// Modal for Daily Check-in and Journaling
type DailyCheckinModalProps = {
    open: boolean;
    onClose: () => void;
    onSave: (data: { mood: number | null; journalEntry: string }) => void;
};

function DailyCheckinModal({ open, onClose, onSave }: DailyCheckinModalProps) {
    const [mood, setMood] = react.useState<number | null>(null);
    const [journalEntry, setJournalEntry] = react.useState('');
    const [dailyQuote, setDailyQuote] = react.useState('');

    react.useEffect(() => {
      const randomIndex = Math.floor(Math.random() * dailyQuotes.length);
      setDailyQuote(dailyQuotes[randomIndex]);
    }, []);

    const handleSave = () => {
        onSave({ mood, journalEntry });
        setMood(null);
        setJournalEntry('');
        onClose();
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="rounded-3xl bg-white dark:bg-slate-800 p-8 shadow-2xl ring-1 ring-slate-200 dark:ring-slate-700 max-w-lg w-full"
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Daily Check-in</h3>
                    <button onClick={onClose} className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-700">
                        <X className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                    </button>
                </div>
                
                <div className="mb-6 rounded-2xl bg-sky-50 dark:bg-sky-900 p-4 text-sky-700 dark:text-sky-200 text-center">
                    <p className="font-semibold mb-2">Quote of the Day:</p>
                    <p className="italic text-sm">"{dailyQuote}"</p>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">How are you feeling today?</label>
                    <div className="flex justify-around">
                        {[1, 2, 3, 4, 5].map(score => (
                            <button
                                key={score}
                                onClick={() => setMood(score)}
                                className={cn(
                                    "w-10 h-10 rounded-full grid place-items-center transition-transform",
                                    mood === score ? "scale-125 bg-sky-500 text-white shadow-lg" : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 hover:scale-110"
                                )}
                            >
                                {score}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Journal your thoughts:</label>
                    <textarea
                        className="w-full h-32 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-sky-300"
                        placeholder="What's on your mind?"
                        value={journalEntry}
                        onChange={(e) => setJournalEntry(e.target.value)}
                    />
                </div>

                <button
                    onClick={handleSave}
                    className="w-full rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-lg hover:bg-indigo-700 transition"
                >
                    Save Check-in
                </button>
            </motion.div>
        </div>
    );
}


// Page Sections
function HomePage({ onNavigate, openCheckinModal }: { onNavigate: (pageKey: string) => void; openCheckinModal: () => void }) {
  const [dailyQuote, setDailyQuote] = react.useState('');

  react.useEffect(() => {
    // Select a random quote from the array
    const randomIndex = Math.floor(Math.random() * dailyQuotes.length);
    setDailyQuote(dailyQuotes[randomIndex]);
  }, []);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-gradient-to-br from-sky-100 via-teal-100 to-indigo-100 dark:from-sky-900 dark:via-teal-900 dark:to-indigo-900 p-6 ring-1 ring-slate-200 dark:ring-slate-700">
        <div className="flex items-center gap-4">
          <AwaazAvatar size={64} />
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Welcome to Awaaz</h2>
            <p className="text-slate-600 dark:text-slate-300">
              AI‑powered emotional support — friendly, confidential, and always here for you.
            </p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button onClick={openCheckinModal} className="flex items-center gap-2 rounded-2xl bg-white dark:bg-slate-700 p-4 text-left shadow ring-1 ring-slate-200 dark:ring-slate-600 hover:shadow-md dark:hover:bg-slate-600">
            <SmilePlus className="h-5 w-5 text-slate-800 dark:text-white" />
            <span className="text-slate-800 dark:text-white">Daily Check‑in</span>
          </button>
          <button onClick={() => onNavigate('breathingPage')} className="flex items-center gap-2 rounded-2xl bg-white dark:bg-slate-700 p-4 text-left shadow ring-1 ring-slate-200 dark:ring-slate-600 hover:shadow-md dark:hover:bg-slate-600">
            <Wind className="h-5 w-5 text-slate-800 dark:text-white" />
            <span className="text-slate-800 dark:text-white">2‑min Breathing</span>
          </button>
          <button onClick={() => onNavigate('journalingPage')} className="flex items-center gap-2 rounded-2xl bg-white dark:bg-slate-700 p-4 text-left shadow ring-1 ring-slate-200 dark:ring-slate-600 hover:shadow-md dark:hover:bg-slate-600">
            <PenLine className="h-5 w-5 text-slate-800 dark:text-white" />
            <span className="text-slate-800 dark:text-white">Quick Journal</span>
          </button>
        </div>
      </div>
        <div className="rounded-3xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 text-center">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Daily Inspiration</h3>
            <p className="italic text-slate-600 dark:text-slate-300 text-lg">"{dailyQuote}"</p>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 rounded-3xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold text-slate-800 dark:text-white">Weekly Mood Trend</h3>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <Activity className="h-4 w-4" /> Mood score (1–10)
            </div>
          </div>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={moodData}>
                <defs>
                  <linearGradient id="mood" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#818cf8" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={document.documentElement.classList.contains('dark') ? '#475569' : '#e2e8f0'}/>
                <XAxis dataKey="day" stroke={document.documentElement.classList.contains('dark') ? '#94a3b8' : '#64748b'} />
                <YAxis domain={[0, 10]} stroke={document.documentElement.classList.contains('dark') ? '#94a3b8' : '#64748b'} />
                <Tooltip />
                <Area type="monotone" dataKey="mood" stroke="#6366f1" fill="url(#mood)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-3xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
          <h3 className="mb-3 font-semibold text-slate-800 dark:text-white">Streaks & Badges</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-2xl bg-indigo-50 dark:bg-indigo-900 p-3 text-indigo-700 dark:text-indigo-200">
              <Flame className="h-5 w-5" /> <span className="font-medium">7‑day check‑in streak</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 dark:bg-emerald-900 p-3 text-emerald-700 dark:text-emerald-200">
              <CheckCircle2 className="h-5 w-5" /> Completed “Calm Breathing x5”
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-sky-50 dark:bg-sky-900 p-3 text-sky-700 dark:text-sky-200">
              <Shield className="h-5 w-5" /> Privacy‑first account
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatPage() {
  return (
    <div className="grid grid-rows-[1fr_auto] h-[70vh] rounded-3xl bg-white dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700 overflow-hidden">
      <div className="overflow-y-auto p-6 space-y-3 bg-slate-50/60 dark:bg-slate-800/60">
        <div className="flex items-start gap-3">
          <AwaazAvatar size={36} />
          <div className="rounded-2xl rounded-bl-sm bg-white dark:bg-slate-700 px-4 py-2 text-slate-800 dark:text-white shadow ring-1 ring-slate-200 dark:ring-slate-600">
            Hey, I’m Awaaz. What would you like to talk about today?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[70%] rounded-2xl rounded-br-sm bg-indigo-600 px-4 py-2 text-white shadow">
            I’m feeling stressed about exams and deadlines.
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <AwaazAvatar size={18} /> <TypingDots />
        </div>
      </div>
      <div className="flex items-center gap-2 border-t p-3 bg-white dark:bg-slate-900 dark:border-slate-700">
        <button
          className="rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
          title="Voice input"
        >
          <Mic className="h-4 w-4" />
        </button>
        <input
          className="flex-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300"
          placeholder="Message Awaaz…"
        />
        <button
          className="inline-flex items-center gap-1 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700"
          aria-label="Send message"
        >
          <Send className="h-4 w-4" /> Send
        </button>
      </div>
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="col-span-2 rounded-3xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-semibold text-slate-800 dark:text-white">Check‑ins (last 7 days)</h3>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <HeartPulse className="h-4 w-4" /> Average mood: 6.6
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={checkins}>
              <CartesianGrid strokeDasharray="3 3" stroke={document.documentElement.classList.contains('dark') ? '#475569' : '#e2e8f0'} />
              <XAxis dataKey="date" stroke={document.documentElement.classList.contains('dark') ? '#94a3b8' : '#64748b'} />
              <YAxis domain={[0, 10]} stroke={document.documentElement.classList.contains('dark') ? '#94a3b8' : '#64748b'} />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#10b981" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="rounded-3xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
        <h3 className="mb-3 font-semibold text-slate-800 dark:text-white">Journal Stats</h3>
        <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li className="flex items-center justify-between">
            <span>Entries this week</span>
            <span className="font-semibold">5</span>
          </li>
          <li className="flex items-center justify-between">
            <span>Avg. sentiment</span>
            <span className="font-semibold">Positive</span>
          </li>
          <li className="flex items-center justify-between">
            <span>Most used tag</span>
            <span className="font-semibold">#focus</span>
          </li>
        </ul>
        <div className="mt-4 rounded-2xl bg-sky-50 dark:bg-sky-900 p-3 text-sky-700 dark:text-sky-200">
          <BellRing className="mr-2 inline h-4 w-4" /> Tip: Try a 2‑minute breathing break.
        </div>
      </div>
      <div className="rounded-3xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
        <h3 className="mb-3 font-semibold text-slate-800 dark:text-white">Confidentiality</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Your conversations are private and stored securely. This is a demo; no real data is saved.
        </p>
        <a
          className="mt-3 inline-flex items-center gap-1 rounded-xl bg-teal-600 px-3 py-2 text-sm font-semibold text-white hover:bg-teal-700"
          href="#privacy"
        >
          <Shield className="h-4 w-4" /> Privacy Policy
        </a>
      </div>
      <div className="rounded-3xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
        <h3 className="mb-3 font-semibold text-slate-800 dark:text-white">Achievements</h3>
        <div className="grid grid-cols-2 gap-3 text-slate-700 dark:text-slate-300">
          <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-900 p-3 text-emerald-700 dark:text-emerald-200">
            🌤 Morning Mindfulness
          </div>
          <div className="rounded-2xl bg-indigo-50 dark:bg-indigo-900 p-3 text-indigo-700 dark:text-indigo-200">
            📝 3‑Day Journaling
          </div>
          <div className="rounded-2xl bg-sky-50 dark:bg-sky-900 p-3 text-sky-700 dark:text-sky-200">
            💧 Breath Master
          </div>
          <div className="rounded-2xl bg-teal-50 dark:bg-teal-900 p-3 text-teal-700 dark:text-teal-200">
            🛡 Privacy Pro
          </div>
        </div>
      </div>
    </div>
  );
}

function ModulesPage({ onNavigate }: { onNavigate: (pageKey: string) => void }) {
  const modules = [
    { key: "mood", label: "Mood", icon: SmilePlus, desc: "Track & reflect" },
    { key: "journalingPage", label: "Journaling", icon: PenLine, desc: "Guided prompts" },
    { key: "breathingPage", label: "Breathing", icon: Wind, desc: "4‑7‑8, box breath" },
    { key: "meditationPage", label: "Meditation", icon: Brain, desc: "2–10 min sessions" },
    { key: "copingPage", label: "Coping", icon: HeartPulse, desc: "Grounding, CBT" },
    { key: "learnPage", label: "Learn", icon: BookOpen, desc: "Articles & tips" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {modules.map((m) => (
        <button
          key={m.key}
          onClick={() => onNavigate(m.key)}
          className="group flex items-start gap-4 rounded-3xl bg-white dark:bg-slate-800 p-5 text-left shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 transition hover:-translate-y-0.5 hover:shadow-md dark:hover:bg-slate-700"
        >
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-200 via-teal-200 to-indigo-200 dark:from-sky-900 dark:via-teal-900 dark:to-indigo-900">
            <m.icon className="h-6 w-6 text-slate-700 dark:text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-slate-800 dark:text-white">{m.label}</h4>
              <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">{m.desc}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

function JournalingPage() {
    const [journalEntry, setJournalEntry] = react.useState('');

    const saveEntry = () => {
        alert("Journal entry saved!");
        setJournalEntry('');
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Daily Journaling 📝</h2>
            <div className="rounded-3xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                    Write down your thoughts and feelings. No need to be perfect, just let it flow.
                </p>
                <textarea
                    className="w-full h-48 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-sky-300"
                    placeholder="Today, I feel..."
                    value={journalEntry}
                    onChange={(e) => setJournalEntry(e.target.value)}
                />
                <button
                    onClick={saveEntry}
                    className="mt-4 w-full rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-lg hover:bg-indigo-700 transition"
                >
                    <SendHorizontal className="inline-block h-4 w-4 mr-2" /> Save Entry
                </button>
            </div>
        </div>
    );
}

function BreathingPage() {
  const youtubeLink = "https://www.youtube.com/watch?v=9tOJZQhO_Uw";
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">2-Minute Breathing 🌬️</h2>
            <div className="rounded-3xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                    Breathing exercises can help calm your nervous system. Try this guided 2-minute breathing video.
                </p>
                <a
                    href={youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-3xl bg-red-50 dark:bg-red-900 p-5 text-red-700 dark:text-red-200 shadow-sm ring-1 ring-red-200 dark:ring-red-800 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-red-200 dark:bg-red-800">
                        <Wind className="h-6 w-6 text-red-700 dark:text-red-200" />
                    </div>
                    <div>
                        <h4 className="font-semibold">Guided Breathing Exercise</h4>
                        <p className="text-sm">Source: YouTube</p>
                    </div>
                    <ChevronRight className="ml-auto h-5 w-5 text-red-400" />
                </a>
            </div>
        </div>
    );
}


function MeditationPage() {
    const meditationLinks = [
        { title: "5-Minute Guided Meditation", link: "https://www.youtube.com/watch?v=inpVhS4t4eU", icon: 'youtube', source: 'YouTube' },
        { title: "Body Scan for Stress Relief", link: "https://www.mindful.org/meditation/body-scan-meditation/", icon: 'web', source: 'Mindful.org' },
        { title: "Sleep Meditation for Beginners", link: "https://www.headspace.com/meditation/sleep-meditation", icon: 'web', source: 'Headspace' },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Meditation 🧘‍♀️</h2>
            <p className="text-slate-600 dark:text-slate-300">
                Here are some popular, guided meditation resources to help you relax and focus.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {meditationLinks.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 rounded-3xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-purple-100 dark:bg-purple-900">
                            <Brain className="h-6 w-6 text-purple-700 dark:text-purple-200" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-800 dark:text-white">{item.title}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300">Source: {item.source}</p>
                        </div>
                        <ChevronRight className="ml-auto h-5 w-5 text-slate-400" />
                    </a>
                ))}
            </div>
        </div>
    );
}

function CopingPage() {
    const copingLinks = [
        { title: "Grounding Exercises for Anxiety", link: "https://www.verywellmind.com/grounding-techniques-for-anxiety-4178657", icon: 'web', source: 'Verywell Mind' },
        { title: "Cognitive Behavioral Therapy (CBT) Tips", link: "https://www.helpguide.org/articles/therapy-counseling/cognitive-behavioral-therapy-cbt.htm", icon: 'web', source: 'HelpGuide.org' },
        { title: "Stress Management Techniques", link: "https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/stress-relief/art-20046040", icon: 'web', source: 'Mayo Clinic' },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Coping Strategies 🧠</h2>
            <p className="text-slate-600 dark:text-slate-300">
                Explore these resources to learn and practice effective coping strategies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {copingLinks.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 rounded-3xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-100 dark:bg-teal-900">
                            <HeartPulse className="h-6 w-6 text-teal-700 dark:text-teal-200" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-800 dark:text-white">{item.title}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300">Source: {item.source}</p>
                        </div>
                        <ChevronRight className="ml-auto h-5 w-5 text-slate-400" />
                    </a>
                ))}
            </div>
        </div>
    );
}

function LearnPage() {
    const psychologyLinks = [
        {
            title: "PositivePsychology.com",
            link: "https://positivepsychology.com/",
            desc: "Evidence-based psychology articles, tools, and resources for practitioners and individuals.",
        },
        {
            title: "Simply Psychology",
            link: "https://www.simplypsychology.org/",
            desc: "An educational resource on various psychology topics, theories, and research.",
        },
        {
            title: "Mindful.org",
            link: "https://www.mindful.org/",
            desc: "Articles and resources on mindfulness and meditation.",
        },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Learn & Grow 🌱</h2>
            <p className="text-slate-600 dark:text-slate-300">
                Expand your knowledge of mental well-being with these trusted psychology resources.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {psychologyLinks.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 rounded-3xl bg-white dark:bg-slate-800 p-5 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-100 dark:bg-blue-900">
                            <BookOpen className="h-6 w-6 text-blue-700 dark:text-blue-200" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-800 dark:text-white">{item.title}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
                        </div>
                        <ChevronRight className="ml-auto h-5 w-5 text-slate-400" />
                    </a>
                ))}
            </div>
        </div>
    );
}

function AboutPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">About Awaaz</h2>
      <div className="rounded-3xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
        <p className="text-slate-600 dark:text-slate-300">
          Awaaz, meaning "voice" in Hindi, is an AI-powered emotional support companion designed to help you navigate your feelings. We believe that everyone deserves a safe space to express themselves. Our mission is to provide **friendly, confidential, and always-available support** through guided journaling, mood tracking, and proven coping strategies.
        </p>
      </div>
      <div className="rounded-3xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
        <h3 className="mb-2 text-xl font-semibold text-slate-800 dark:text-white">How Awaaz Works</h3>
        <p className="text-slate-600 dark:text-slate-300">
          Awaaz uses a conversational AI model to understand your concerns and provide helpful, non-judgmental responses. It's a tool to help you reflect on your emotions, build healthy habits, and connect with helpful resources. **Please remember, Awaaz is not a substitute for professional therapy or medical advice.**
        </p>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">Contact & Emergency</h2>
      <div className="rounded-3xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
        <h3 className="mb-2 text-xl font-semibold text-slate-800 dark:text-white">Emergency Helplines</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          If you or someone you know is in immediate danger, please use these resources.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center justify-between rounded-xl bg-rose-50 dark:bg-rose-900 p-4 text-rose-700 dark:text-rose-200 ring-1 ring-rose-200 dark:ring-rose-800">
            <span className="font-medium">Police & General Emergency</span>
            <a href="tel:112" className="inline-flex items-center gap-2 rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-rose-700">
              <PhoneCall className="h-4 w-4" /> Call 112
            </a>
          </li>
          <li className="flex items-center justify-between rounded-xl bg-orange-50 dark:bg-orange-900 p-4 text-orange-700 dark:text-orange-200 ring-1 ring-orange-200 dark:ring-orange-800">
            <span className="font-medium">Hospital & Ambulance</span>
            <a href="tel:108" className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-orange-700">
              <PhoneCall className="h-4 w-4" /> Call 108
            </a>
          </li>
          <li className="flex items-center justify-between rounded-xl bg-sky-50 dark:bg-sky-900 p-4 text-sky-700 dark:text-sky-200 ring-1 ring-sky-200 dark:ring-sky-800">
            <span className="font-medium">Suicide Prevention Hotline</span>
            <a href="tel:988" className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-sky-700">
              <PhoneCall className="h-4 w-4" /> Call 988
            </a>
          </li>
        </ul>
      </div>
      <div className="rounded-3xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700">
        <h3 className="mb-2 text-xl font-semibold text-slate-800 dark:text-white">General Inquiries</h3>
        <p className="text-slate-600 dark:text-slate-300">
          For non-emergency questions or support, you can reach out to us at support@awaaz.com.
        </p>
      </div>
    </div>
  );
}

function Login() {
  const [email, setEmail] = react.useState('');
  const [password, setPassword] = react.useState('');

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert(`Logged in with email: ${email}`);
  };

  return (
    <div className="mx-auto grid max-w-md gap-6 rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 shadow-sm">
      <div className="text-center">
        <h2 className="mt-2 text-2xl font-semibold text-slate-800 dark:text-white">Log In</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">Welcome back — your voice matters.</p>
      </div>
      <form onSubmit={handleLogin} className="grid gap-4">
        <input
          type="email"
          className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-4 py-3 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-sky-400 dark:text-white"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-4 py-3 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-sky-400 dark:text-white"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="mt-2 rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400 transition"
        >
          Log in
        </button>
      </form>
      <p className="text-center text-sm text-slate-400">
        Don’t have an account?{" "}
        <span className="cursor-pointer text-sky-300 hover:underline">Sign up</span>
      </p>
    </div>
  );
}

function AwaazApp() {
  const [theme, setTheme] = react.useState("light");
  const [active, setActive] = react.useState("home");
  const [chatOpen, setChatOpen] = react.useState(true);
  const [navOpen, setNavOpen] = react.useState(false);
  const [activeModulePage, setActiveModulePage] = react.useState<string | null>(null);
  const [isCheckinModalOpen, setIsCheckinModalOpen] = react.useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  react.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleNavigate = (pageKey: string | null) => {
    if (typeof pageKey === "string" && ["journalingPage", "meditationPage", "copingPage", "breathingPage", "learnPage"].includes(pageKey)) {
      setActive("modules");
      setActiveModulePage(pageKey);
    } else if (typeof pageKey === "string") {
      setActive(pageKey);
      setActiveModulePage(null);
    }
    setNavOpen(false); // Close mobile nav
  };

  const handleSaveCheckin = (data: { mood: any; journalEntry: any; }) => {
    console.log("Check-in saved:", data);
    alert(`Mood score: ${data.mood}, Journal entry: "${data.journalEntry}"`);
  };

  const newLocal = "journalingPage";
  const renderPage = () => {
    switch (active) {
      case "home":
        return <HomePage onNavigate={handleNavigate} openCheckinModal={() => setIsCheckinModalOpen(true)} />;
      case "chat":
        return <ChatPage />;
      case "dashboard":
        return <DashboardPage />;
      case "modules":
        switch (activeModulePage) {
          case "Journaling":
            return <JournalingPage />;
          case "breathingPage":
            return <BreathingPage />;
          case "meditationPage":
            return <MeditationPage />;
          case "copingPage":
            return <CopingPage />;
          case "learnPage":
              return <LearnPage />;
          default:
            return <ModulesPage onNavigate={handleNavigate} />;
        }
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      case "login":
        return <Login />;
      default:
        return <HomePage onNavigate={handleNavigate} openCheckinModal={() => setIsCheckinModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50 dark:from-slate-900 dark:via-sky-900 dark:to-indigo-900 text-slate-800 dark:text-white transition-colors duration-300">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center gap-3">
            <button className="rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-700 lg:hidden" onClick={() => setNavOpen((s) => !s)} aria-label="Toggle navigation">
              {navOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <div className="flex items-center gap-2">
              <AwaazAvatar size={36} />
              <div className="leading-tight">
                <div className="text-lg font-extrabold tracking-tight">Awaaz</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Your voice matters. Talk to Awaaz.</div>
              </div>
            </div>

            <nav className="ml-6 hidden gap-1 lg:flex">
              {PAGES.map((p) => (
                <button
                  key={p.key}
                  onClick={() => handleNavigate(p.key)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm",
                    active === p.key ? "bg-sky-100 dark:bg-sky-900 text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                  )}
                >
                  <p.icon className="h-4 w-4" /> {p.label}
                </button>
              ))}
            </nav>

            <div className="ml-auto flex items-center gap-2">
                <button
                    onClick={toggleTheme}
                    className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700"
                    aria-label="Toggle dark mode"
                >
                    {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                </button>
              <button className="hidden rounded-xl bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700 md:inline-flex">
                <Shield className="mr-1 h-4 w-4" /> Privacy
              </button>
              <button className="rounded-xl bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-rose-700">
                <PhoneCall className="mr-1 h-4 w-4" /> Helpline
              </button>
              <button onClick={() => handleNavigate("login")} className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700">
                <UserCircle2 className="mr-1 h-4 w-4" /> Login
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile nav */}
      <AnimatePresence>
        {navOpen && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-3 grid gap-1 border-t pt-3 lg:hidden">
            {PAGES.map((p) => (
              <button key={p.key} onClick={() => handleNavigate(p.key)} className={cn("inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm", active === p.key ? "bg-sky-100 text-slate-900" : "text-slate-600 hover:bg-slate-100")}> <p.icon className="h-4 w-4" /> {p.label}</button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-6">
          <EmergencyStrip />
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={active + activeModulePage} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="min-h-[50vh]">
            {renderPage()}
          </motion.div>
        </AnimatePresence>

        <footer id="privacy" className="mt-10 rounded-3xl bg-white dark:bg-slate-800 p-6 text-sm text-slate-600 dark:text-slate-300 ring-1 ring-slate-200 dark:ring-slate-700">
          <div className="mb-2 font-semibold text-slate-800 dark:text-white">Privacy & Confidentiality</div>
          <p>
            Awaaz is a demo interface. For real deployments, include clear consent, data handling practices, and emergency resources based on region. This UI is designed with psychiatric color psychology (calming blues/teals) and engaging micro‑interactions.
          </p>
        </footer>
      </main>

      <AnimatePresence>
        {isCheckinModalOpen && (
            <DailyCheckinModal
                open={isCheckinModalOpen}
                onClose={() => setIsCheckinModalOpen(false)}
                onSave={handleSaveCheckin}
            />
        )}
      </AnimatePresence>

      {/* Floating Chat Launcher (visible on every page) */}
      <button
        onClick={() => setChatOpen((s) => !s)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-3 text-white shadow-2xl hover:bg-indigo-700"
        aria-haspopup="dialog"
        aria-expanded={chatOpen}
      >
        <AwaazAvatar size={28} />
        <span className="hidden md:inline">Chat with Awaaz</span>
      </button>

      <FloatingChat open={chatOpen} onClose={() => setChatOpen(false)} theme={theme} />
    </div>
  );
}

export default function App() {
  return (
    <>
      <AwaazApp />
    </>
  );
}
