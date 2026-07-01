import React from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { isSupabaseConfigured, supabase } from "./lib/supabase";
import {
  ArrowUpRight,
  Bell,
  Bookmark,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Copy,
  Download,
  Eye,
  Filter,
  FileText,
  Grid3X3,
  GraduationCap,
  Landmark,
  Leaf,
  Linkedin,
  List,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Mic,
  Search,
  Star,
  TrendingUp,
  Upload,
  Users,
  Video,
  X,
  Youtube
} from "lucide-react";
import "./styles/app.css";

const navItems = [
  ["Home", "/"],
  ["People", "/people"],
  ["Groups", "/groups"],
  ["Events", "/events"],
  ["Service Providers", "/service-providers"],
  ["Resources", "/resources"],
  ["Community", "/community"]
];

const stats = [
  [Users, "5,200+", "Founders"],
  [GraduationCap, "320+", "Experts & Mentors"],
  [BriefcaseBusiness, "140+", "Service Providers"],
  [Users, "82", "Active Groups"],
  [CalendarDays, "250+", "Events Conducted"]
];

const events = [
  ["Bengaluru Founder Meetup", "Sat, 24 May · 5:00 PM", "Bangalore, Karnataka", "+42", "RSVP Free", "meetup"],
  ["Startup Funding Workshop", "Sun, 25 May · 10:00 AM", "Bangalore, Karnataka", "+28", "RSVP Free", "workshop"],
  ["Women Founders Circle", "Tue, 27 May · 7:00 PM", "Online", "+63", "RSVP Free", "circle"],
  ["Startup Summit 2025", "Fri, 30 May · 9:30 AM", "Bangalore, Karnataka", "+120", "Get Tickets", "summit"]
];

const pulses = [
  [MessageCircle, "Most Active Discussion", "How SaaS founders are navigating sales in 2024?", "24 replies · 2h ago", "orange"],
  [CheckCircle2, "Most Answered Question", "Best way to approach investors for pre-seed funding?", "18 replies · 4h ago", "green"],
  [TrendingUp, "Trending Topic", "AI tools every founder should try in 2024", "15 replies · 6h ago", "purple"]
];

const groups = [
  ["Bengaluru Founders", "1.2K Members", "+28", "city"],
  ["Agritech Karnataka", "860 Members", "+18", "agri"],
  ["Fintech Builders", "1.1K Members", "+35", "fintech"],
  ["Women Entrepreneurs", "950 Members", "+22", "women"]
];

const providers = [
  ["LegalEdge Associates", "Legal Services", "4.8 (120)", "Bangalore", "legal"],
  ["FinTax Consultants", "CA & Taxation", "4.7 (98)", "Bangalore", "fin"],
  ["CodeCraft Technologies", "Technology Services", "4.9 (76)", "Bangalore", "tech"],
  ["GrowthHackers Agency", "Growth Marketing", "4.6 (54)", "Bangalore", "growth"]
];

const resources = [
  [Landmark, "DPIIT Recognition", "Register as a startup", "green"],
  [FileText, "Founder Checklists", "Legal, tax and GTM", "blue"],
  [TrendingUp, "Funding & Grants", "Startup India and Elevate", "purple"],
  [CheckCircle2, "Compliance Basics", "MCA, GST and Udyam", "teal"],
  [BookOpen, "Kannada Learning", "Beginner-friendly guides", "red"]
];

function Logo() {
  return (
    <a className="logo" href="/" aria-label="Mundhe Banni home">
      <span className="rocket">↗</span>
      <strong>munde</strong>
      <strong>banni<span className="mic">◖</span></strong>
    </a>
  );
}

function AvatarStack({ count }) {
  return (
    <div className="avatar-stack">
      {["AK", "SM", "RV", "PN"].map((label) => <span key={label}>{label}</span>)}
      <small>{count}</small>
    </div>
  );
}

function Header() {
  const pathname = window.location.pathname;
  const { user, profile, loading, signOut } = useAuth();
  const [accountOpen, setAccountOpen] = React.useState(false);
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const displayName = profile?.display_name || user?.email?.split("@")[0] || "Member";
  const initial = displayName.charAt(0).toUpperCase();
  const logout = async () => {
    await signOut();
    setAccountOpen(false);
    if (window.location.pathname === "/my-profile") window.location.assign("/");
  };
  return (
    <header className="site-header">
      <Logo />
      <nav className="main-nav" aria-label="Primary navigation">
        {navItems.map(([item, href]) => (
          <a className={(pathname === href || (href === "/community" && pathname.startsWith("/community")) || (href === "/people" && pathname.startsWith("/people")) || (href === "/groups" && pathname.startsWith("/groups")) || (href === "/events" && pathname.startsWith("/events")) || (href === "/resources" && pathname.startsWith("/resources")) || (href === "/service-providers" && pathname.startsWith("/service-providers")) || (pathname === "/" && item === "Home")) ? "active" : ""} href={href} key={item}>
            {item}{item === "Community" && <ArrowUpRight size={13} />}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <button aria-label="Search"><Search size={22} /></button>
        <button className="bell" aria-label="Notifications"><Bell size={21} /><span>5</span></button>
        {!loading && !user && <a className="auth-login" href="/login">Log In</a>}
        {!loading && user && <div className="auth-account"><button className="auth-avatar" onClick={() => setAccountOpen((open) => !open)} aria-label="Open account menu">{profile?.avatar_url ? <img src={profile.avatar_url} alt="" /> : initial}</button>{accountOpen && <div className="auth-menu"><strong>{displayName}</strong><small>{user.email}</small><a href="/my-profile">My Profile</a><button onClick={logout}>Log Out</button></div>}</div>}
        {loading && <span className="auth-loading"></span>}
        <button className="language">A~ <ChevronDown size={14} /></button>
        <button className="mobile-menu" aria-label="Open menu" onClick={() => setMobileNavOpen((open) => !open)}>{mobileNavOpen ? <X /> : <Menu />}</button>
      </div>
      {mobileNavOpen && <nav className="mobile-nav-panel" aria-label="Mobile navigation">{navItems.map(([item, href]) => <a className={(pathname === href || (href !== "/" && pathname.startsWith(href))) ? "active" : ""} href={href} key={item}>{item}{item === "Community" && <ArrowUpRight size={13} />}</a>)}{user ? <a href="/my-profile">My Profile</a> : <a href="/login">Log In</a>}</nav>}
    </header>
  );
}

const resourceCategories = [
  ["📚", "All Resources", 12],
  ["🚀", "Startup Basics", 3],
  ["🏛️", "Govt Schemes", 3],
  ["⚖️", "Legal & Tax", 3],
  ["📈", "Growth", 2],
  ["ಕ", "Kannada", 1]
];

const resourceCards = [
  ["Official Guide", "DPIIT Startup Recognition", "Apply for Startup India recognition so your venture can access tax, tender, IPR and scheme benefits.", "Startup India", "Official", ["Startup Basics", "DPIIT"], "Official portal", "Beginner", "Open", "https://www.startupindia.gov.in/content/sih/en/startup-scheme.html"],
  ["Scheme", "Startup India Seed Fund Scheme", "Understand eligibility and application flow for seed funding support through approved incubators.", "Startup India", "Official", ["Funding", "Seed"], "Government scheme", "Early stage", "Open", "https://seedfund.startupindia.gov.in/"],
  ["Scheme", "Karnataka Startup Cell", "Official state startup portal for Karnataka founders looking for programs, grants, events and ecosystem support.", "Government of Karnataka", "Official", ["Funding", "Karnataka"], "State portal", "Karnataka", "Open", "https://startup.karnataka.gov.in/"],
  ["Checklist", "Company Incorporation Checklist", "What founders should prepare before private limited or LLP registration: name, directors, DSC, DIN and documents.", "Mundhe Banni Curated", "Checklist", ["Legal", "MCA"], "Founder checklist", "Beginner", "Open", "https://www.mca.gov.in/content/mca/global/en/mca/e-filing/incorporation.html"],
  ["Official Guide", "Udyam MSME Registration", "Register eligible micro and small businesses under Udyam for MSME recognition and related benefits.", "Ministry of MSME", "Official", ["MSME", "Registration"], "Official portal", "Small business", "Open", "https://udyamregistration.gov.in/"],
  ["Official Guide", "GST Registration Basics", "Use the GST registration page to start the registration flow and understand what business details are required.", "GST Portal", "Official", ["GST", "Tax"], "Registration page", "Compliance", "Open", "https://services.gst.gov.in/services/quicklinks/registration"],
  ["Guide", "Startup India Guidebook", "A broad founder guide covering ideation, registration, tax, funding, incubation and support programs in India.", "Startup India", "Official", ["Startup Basics", "Guidebook"], "Founder guide", "Beginner", "Open", "https://www.startupindia.gov.in/content/sih/en/reources/knowledge-bank.html"],
  ["Template", "Pitch Deck Structure", "A practical deck outline covering problem, solution, market, traction, business model, team and ask.", "Mundhe Banni Curated", "Template", ["Fundraising", "Pitch"], "Template guide", "Fundraising", "Open", "https://www.ycombinator.com/library/4T-how-to-create-your-seed-round-pitch-deck"],
  ["Checklist", "India Go-To-Market Guide", "A practical launch guide for choosing a market, validating channels and planning early customer acquisition.", "Startup India", "Official", ["Marketing", "Sales"], "Action guide", "Growth", "Open", "https://www.startupindia.gov.in/content/sih/en/international/go-to-market-guide.html"],
  ["Official Guide", "Intellectual Property for Startups", "Learn the basics of patents, trademarks, copyright and Startup India IPR support options.", "Startup India", "Official", ["IPR", "Legal"], "Official guide", "Founder", "Open", "https://www.startupindia.gov.in/content/sih/en/intellectual-property-rights.html"],
  ["Guide", "Financial Model Basics", "Understand what to track before fundraising: revenue, gross margin, burn, runway, CAC, payback and hiring plan.", "Mundhe Banni Curated", "Guide", ["Finance", "Planning"], "Founder guide", "Beginner", "Open", "https://www.score.org/resource/template/financial-projections-template"],
  ["Kannada Guide", "Business Basics in Kannada", "Kannada founder conversations and practical business stories from the Mundhe Banni community.", "Mundhe Banni", "Kannada", ["Kannada", "Basics"], "Kannada-friendly", "Beginner", "Open", "https://www.youtube.com/@MundheBanni"]
];

const typeIcons = {
  eBook: BookOpen,
  Whitepaper: FileText,
  "Official Guide": Landmark,
  Scheme: Landmark,
  Checklist: CheckCircle2,
  Template: FileText,
  Guide: BookOpen,
  "Kannada Guide": BookOpen,
  Video,
  Webinar: Users,
  "Case Study": CheckCircle2,
  Infographic: TrendingUp,
  Podcast: Mic
};

const roleMeta = {
  founder: { label: "Founder", className: "founder", icon: "R", color: "#2456A0" },
  sme: { label: "Expert", className: "expert", icon: "✓", color: "#1A7A4A" },
  expert: { label: "Expert", className: "expert", icon: "✓", color: "#1A7A4A" },
  service_provider: { label: "Service Provider", className: "service-provider", icon: "B", color: "#9B3BB5" },
  moderator: { label: "Moderator", className: "moderator", icon: "M", color: "#B8760A" },
  admin: { label: "Admin", className: "admin", icon: "A", color: "#C84B2F" }
};

const normalizeRole = (role = "founder") => role.toLowerCase().replaceAll(" ", "_");
const getRoleMeta = (role) => roleMeta[normalizeRole(role)] || roleMeta.founder;
const loginRedirect = () => {
  const next = new URLSearchParams(window.location.search).get("next");
  window.location.assign(next && next.startsWith("/") ? next : "/");
};
const getXpLevel = (xpValue = 0) => {
  const xp = Number(xpValue) || 0;
  if (xp >= 2000) return 5;
  if (xp >= 1000) return 4;
  if (xp >= 500) return 3;
  if (xp >= 200) return 2;
  return 1;
};
const levelProgress = (xpValue, level = getXpLevel(xpValue)) => {
  const xp = Number(xpValue) || 0;
  const ranges = { 1: [0, 200], 2: [200, 500], 3: [500, 1000], 4: [1000, 2000], 5: [2000, 2000] };
  const [start, end] = ranges[level] || ranges[1];
  if (level === 5) return 100;
  return Math.min(100, Math.max(0, ((xp - start) / (end - start)) * 100));
};

const fallbackCommunityCategories = [
  { id: 1, slug: "fundraising", name: "Fundraising", color_hex: "#2456A0", topic_count: 0, description: "Term sheets, investor outreach, valuations, and raising capital." },
  { id: 2, slug: "product", name: "Product", color_hex: "#5B3DB5", topic_count: 0, description: "Product strategy, roadmaps, user feedback, and building MVPs." },
  { id: 3, slug: "legal", name: "Legal", color_hex: "#1A7A4A", topic_count: 0, description: "Incorporation, compliance, contracts, and IP for startups." },
  { id: 4, slug: "marketing", name: "Marketing", color_hex: "#C84B2F", topic_count: 0, description: "Growth, branding, SEO, and customer acquisition." },
  { id: 5, slug: "operations", name: "Operations", color_hex: "#374151", topic_count: 0, description: "Hiring, processes, vendor management, and scaling ops." },
  { id: 6, slug: "technology", name: "Technology", color_hex: "#9B3BB5", topic_count: 0, description: "Engineering, architecture, AI tools, and tech stack decisions." },
  { id: 7, slug: "general", name: "General", color_hex: "#888888", topic_count: 0, description: "Events, meetups, announcements, and general community chatter." }
];

const fallbackCommunityTopics = [
  { id: "demo-1", title: "How are Karnataka SaaS founders approaching outbound sales in 2026?", slug: "karnataka-saas-outbound-sales", body: "Share what is working for outbound sales, first demos, and early conversion in Karnataka SaaS companies.", reply_count: 24, view_count: 820, like_count: 48, category_id: 2, topic_type: "question", is_pinned: true, created_at: "2026-06-10T10:00:00Z", last_activity_at: "2026-06-12T15:00:00Z", profiles: { display_name: "Vikram Anand", username: "vikram" }, forum_categories: { id: 2, name: "Product", color_hex: "#5B3DB5" }, forum_topic_tags: [{ interest_tags: { label: "saas" } }, { interest_tags: { label: "sales" } }] },
  { id: "demo-2", title: "Checklist for closing your first angel round in Karnataka", slug: "first-angel-round-checklist", body: "What documents, metrics, and investor updates should founders prepare before starting angel conversations?", reply_count: 18, view_count: 640, like_count: 36, category_id: 1, topic_type: "general", created_at: "2026-06-08T09:00:00Z", last_activity_at: "2026-06-12T11:30:00Z", profiles: { display_name: "Dr. Ravi Kumar", username: "ravi" }, forum_categories: { id: 1, name: "Fundraising", color_hex: "#2456A0" }, forum_topic_tags: [{ interest_tags: { label: "fundraising" } }, { interest_tags: { label: "legal" } }] },
  { id: "demo-3", title: "Share your best low-cost hiring channels for early startup teams", slug: "low-cost-hiring-channels", body: "Founders can add practical hiring channels, campus networks, referrals, and communities that worked for early teams.", reply_count: 31, view_count: 940, like_count: 55, category_id: 5, topic_type: "idea", created_at: "2026-06-06T09:00:00Z", last_activity_at: "2026-06-11T18:30:00Z", profiles: { display_name: "Meera Shetty", username: "meera" }, forum_categories: { id: 5, name: "Operations", color_hex: "#374151" }, forum_topic_tags: [{ interest_tags: { label: "hiring" } }, { interest_tags: { label: "operations" } }] },
  { id: "demo-4", title: "Community update: Bengaluru founder breakfast moves to July", slug: "bengaluru-founder-breakfast-july", body: "The next Bengaluru founder breakfast is moving to July so more members can join after the current meetup cycle.", reply_count: 9, view_count: 420, like_count: 22, category_id: 7, topic_type: "announcement", created_at: "2026-06-05T09:00:00Z", last_activity_at: "2026-06-10T08:10:00Z", profiles: { display_name: "Mundhe Banni Team", username: "admin" }, forum_categories: { id: 7, name: "General", color_hex: "#888888" }, forum_topic_tags: [{ interest_tags: { label: "events" } }] }
];

const stripHtml = (value = "") => value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
const stripMarkdown = (value = "") => stripHtml(value).replace(/[#>*_`[\]()!-]/g, " ").replace(/\s+/g, " ").trim();
const relativeTime = (value) => {
  if (!value) return "recently";
  const diff = Date.now() - new Date(value).getTime();
  const hours = Math.max(1, Math.round(diff / 3600000));
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  if (days < 30) return `${days}d ago`;
  return `${Math.round(days / 30)}mo ago`;
};
const categoryColor = (category) => category?.color_hex || `#${(category?.color || "888888").replace("#", "")}`;
const topicUrl = (topic) => `/community/t/${topic.slug || "topic"}`;
const topicTags = (topic) => (topic?.forum_topic_tags || []).map((tag) => tag?.interest_tags?.label || tag?.interest_tags?.slug).filter(Boolean);
const forumAuthorName = (record) => record?.profiles?.display_name || record?.profiles?.username || "Community member";
const forumInitials = (name = "Member") => {
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length <= 1) return (parts[0] || "MB").slice(0, 2).toUpperCase();
  return parts.map((part) => part[0]).join("").slice(0, 2).toUpperCase();
};
const topicTypeIcon = (type) => ({ question: "?", announcement: "📢", idea: "💡", general: "💬" }[type] || "💬");
const forumSlugify = (value = "") => {
  const slug = value
    .normalize("NFC")
    .toLowerCase()
    .trim()
    .replace(/[^\p{Letter}\p{Mark}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
    .replace(/-+$/g, "");
  return slug || "discussion";
};
const forumSlugSuffix = (seed = "") => String(seed || Math.random().toString(36).slice(2, 10)).replace(/[^a-z0-9]/gi, "").slice(0, 8).toLowerCase();
const createForumSlug = (title, seed) => `${forumSlugify(title)}-${forumSlugSuffix(seed)}`;
const isGenericForumSlug = (slug = "") => slug === "topic" || /^topic-[a-z0-9]{4,}$/i.test(slug);
const hasKannadaText = (value = "") => /[\u0C80-\u0CFF]/.test(value);
const shouldRepairForumSlug = (topic) => Boolean(topic?.title && (isGenericForumSlug(topic.slug) || (hasKannadaText(topic.title) && topic.slug !== createForumSlug(topic.title, topic.id))));
const escapeHtml = (value = "") => value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char]));
const renderMarkdown = (value = "") => {
  const lines = escapeHtml(value).split("\n");
  let inList = false;
  const html = lines.map((line) => {
    const listMatch = line.match(/^\s*[-*]\s+(.+)/);
    if (listMatch) {
      const item = `<li>${inlineMarkdown(listMatch[1])}</li>`;
      if (!inList) {
        inList = true;
        return `<ul>${item}`;
      }
      return item;
    }
    const close = inList ? "</ul>" : "";
    inList = false;
    if (!line.trim()) return `${close}<br />`;
    if (line.startsWith("### ")) return `${close}<h3>${inlineMarkdown(line.slice(4))}</h3>`;
    if (line.startsWith("## ")) return `${close}<h2>${inlineMarkdown(line.slice(3))}</h2>`;
    if (line.startsWith("# ")) return `${close}<h1>${inlineMarkdown(line.slice(2))}</h1>`;
    return `${close}<p>${inlineMarkdown(line)}</p>`;
  }).join("");
  return `${html}${inList ? "</ul>" : ""}`;
};
const inlineMarkdown = (value = "") => value
  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  .replace(/\*(.*?)\*/g, "<em>$1</em>")
  .replace(/`([^`]+)`/g, "<code>$1</code>")
  .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
const isAdminProfile = (profile) => profile?.role === "admin";
const awardXp = async (payload) => {
  if (!supabase) return;
  const { error } = await supabase.from("xp_events").insert(payload);
  if (error) console.warn("XP event skipped", error.message);
};

function Breadcrumb({ items }) {
  return (
    <div className="breadcrumb">
      <a href="/">Home</a>
      {items.map((item) => <React.Fragment key={item}><span>&gt;</span><small>{item}</small></React.Fragment>)}
    </div>
  );
}

function ResourcePageHeader() {
  const role = "Founder";
  return (
    <section className="resources-header">
      <Breadcrumb items={["Resources"]} />
      <div className="resources-title-row">
        <div>
          <h1>Resource Library</h1>
          <p>Practical official links, checklists and founder guides for building a business in Karnataka.</p>
        </div>
        {["SME", "Admin"].includes(role) && <a className="button primary" href="/resources/upload"><Upload size={17} />Upload Resource</a>}
      </div>
    </section>
  );
}

function ResourceCategories() {
  return (
    <section className="category-strip">
      {resourceCategories.map(([icon, label, count], index) => (
        <button className={index === 0 ? "active" : ""} key={label}><span>{icon}</span>{label}<small>{count}</small></button>
      ))}
    </section>
  );
}

function ResourceToolbar() {
  return (
    <section className="resource-toolbar">
      <div className="resource-search"><Search size={16} /><input placeholder="Search resources, topics, authors..." /></div>
      {[
        ["Type:", ["All Types", "Official Guide", "Scheme", "Checklist", "Template", "Guide", "Kannada Guide"]],
        ["Topic:", ["All Topics", "Startup Basics", "Funding", "Legal", "GST", "MSME", "Marketing", "Finance", "Kannada"]],
        ["Language:", ["All Languages", "English", "Kannada"]],
        ["Stage:", ["All Stages", "Idea", "Early Stage", "Compliance", "Growth", "Fundraising"]]
      ].map(([label, options]) => (
        <label className="select-filter" key={label}><span>{label}</span><select>{options.map((option) => <option key={option}>{option}</option>)}</select></label>
      ))}
      <button className="mobile-filter"><Filter size={16} />Filter & Sort</button>
      <div className="view-toggle"><button className="active" aria-label="Grid view"><Grid3X3 size={17} /></button><button aria-label="List view"><List size={18} /></button></div>
      <p>Showing {resourceCards.length} curated resources</p>
    </section>
  );
}

function FeaturedResource() {
  return (
    <section className="featured-resource">
      <div>
        <span className="featured-pill">★ Featured Resource</span>
        <h2>Founder Starter Kit for Karnataka</h2>
        <p>Start here if you are setting up a business: DPIIT recognition, Udyam, GST, incorporation, seed funding and founder checklists in one curated library.</p>
        <div className="featured-meta"><span>📄 Official links</span><span>✅ Founder checklists</span><span>ಕ Kannada-friendly</span></div>
        <div className="featured-actions"><a className="button primary" href="https://www.startupindia.gov.in/content/sih/en/startup-scheme.html" target="_blank" rel="noreferrer"><ArrowUpRight size={17} />Open DPIIT Guide</a><a className="button ghost" href="#resources-list"><Eye size={17} />Browse Kit</a></div>
      </div>
      <div className="report-cover">
        <small>Mundhe Banni Curated</small>
        <strong>Founder Starter Kit</strong>
        <div className="cover-chart"><span></span><span></span><span></span><span></span></div>
      </div>
    </section>
  );
}

function ResourceSidebar() {
  return (
    <aside className="resource-sidebar">
      <FilterGroup title="Resource Type" items={["Official Guide", "Scheme", "Checklist", "Template", "Guide"]} checked={["Official Guide", "Checklist"]} />
      <FilterGroup title="Topic" items={["Startup Basics", "Funding", "Legal & Compliance", "GST & Tax", "MSME", "Marketing & Sales", "Finance", "Kannada"]} checked={["Startup Basics", "Funding"]} showMore />
      <div className="filter-group"><h3>Founder Stage</h3>{["Idea", "Registration", "Early Stage", "Fundraising", "Growth"].map((item, index) => <label key={item}><input type="radio" name="stage" defaultChecked={index === 0} />{item}</label>)}</div>
      <FilterGroup title="Source" items={["Official", "Mundhe Banni Curated", "External Expert"]} checked={["Official"]} />
      <button className="clear-filters">Clear all filters</button>
    </aside>
  );
}

function FilterGroup({ title, items, checked = [], showMore = false }) {
  return (
    <div className="filter-group">
      <h3>{title}</h3>
      {items.map((item) => <label key={item}><input type="checkbox" defaultChecked={checked.includes(item)} />{item}</label>)}
      {showMore && <button>Show more</button>}
    </div>
  );
}

function ResourceCard({ resource, onGate }) {
  const [type, title, description, author, sourceLabel, tags, primaryMeta, secondaryMeta, access, url] = resource;
  const Icon = typeIcons[type] || FileText;
  return (
    <article className="library-card">
      <div className={`resource-thumb ${type.toLowerCase().replaceAll(" ", "-")}`}>
        <span className={`type-badge ${type.toLowerCase().replaceAll(" ", "-")}`}>{type}</span>
        <Bookmark size={18} />
        <Icon size={54} />
      </div>
      <div className="library-card-body">
        <a href={url} target="_blank" rel="noreferrer"><h3>{title}</h3></a>
        <p>{description}</p>
        <div className="resource-byline"><span>{author}</span><time>{sourceLabel}</time></div>
        <div className="tag-row">{tags.slice(0, 2).map((tag) => <span key={tag}>{tag}</span>)}{tags.length > 2 && <small>+{tags.length - 2} more</small>}</div>
        <div className="resource-card-footer">
          <div><span>{primaryMeta}</span><span>{secondaryMeta}</span></div>
          {access === "Gated" ? <button className="access-outline" onClick={() => onGate(title)}><Lock size={13} />Get Access</button> : <a className="access-filled" href={url} target="_blank" rel="noreferrer"><ArrowUpRight size={13} />Open</a>}
        </div>
      </div>
    </article>
  );
}

function GatedResourceModal({ resource, onClose }) {
  if (!resource) return null;
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="unlock-title">
      <div className="access-modal">
        <button className="modal-close" onClick={onClose} aria-label="Close"><X /></button>
        <i><Lock size={28} /></i>
        <h2 id="unlock-title">Unlock This Resource</h2>
        <p><em>{resource}</em></p>
        <form>
          <input placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <small>🔒 Your information is safe. We do not share your data with third parties.</small>
          <button type="button">Get Free Access →</button>
        </form>
        <a href="#login">Login to download instantly</a>
      </div>
    </div>
  );
}

function ResourceLibraryPage() {
  const [gatedResource, setGatedResource] = React.useState("");
  return (
    <>
      <Header />
      <main>
        <ResourcePageHeader />
        <ResourceCategories />
        <ResourceToolbar />
        <FeaturedResource />
        <section className="resource-main">
          <ResourceSidebar />
          <div className="resource-results">
            <div className="library-grid" id="resources-list">{resourceCards.map((resource) => <ResourceCard key={resource[1]} resource={resource} onGate={setGatedResource} />)}</div>
          </div>
        </section>
      </main>
      <Footer />
      <GatedResourceModal resource={gatedResource} onClose={() => setGatedResource("")} />
    </>
  );
}

function UploadResourcePage() {
  return (
    <>
      <Header />
      <main className="upload-page">
        <Breadcrumb items={["Resources", "Upload Resource"]} />
        <h1>Upload a Resource</h1>
        <p>Share your knowledge with the Mundhe Banni community. Your submission will be reviewed before publishing.</p>
        <div className="review-note">⏳ After submission, your resource will be reviewed by a platform admin before going live. You'll receive an email notification once approved.</div>
        <form className="upload-form">
          <UploadSection title="Basic Details">
            <label>Title *<input placeholder="e.g. The Founder's Guide to Fundraising" /></label>
            <label>Resource Type *<select><option>Select type</option><option>eBook</option><option>Whitepaper</option><option>Video</option></select></label>
            <label>Description *<textarea placeholder="Provide a clear description of what this resource covers and who it's for." /></label>
            <label>Author / Publisher<input defaultValue="Anand Kumar" /></label>
          </UploadSection>
          <UploadSection title="Topic & Tags">
            <label>Primary Topic *<select><option>All Topics</option><option>Fundraising</option><option>Product Building</option><option>Legal & Compliance</option></select></label>
            <label>Tags (up to 5)<input placeholder="Type a tag and press Enter" /></label>
            <div className="selected-tags"><span>Fundraising ×</span><span>Startup ×</span></div>
          </UploadSection>
          <UploadSection title="Files & Media">
            <label>Upload File *<div className="dropzone">📁<strong>Drag & drop your file here or click to browse</strong><small>Supported: PDF, MP4, MP3. Max size: 50MB</small></div></label>
            <label>Cover Image<div className="dropzone compact">Upload a cover thumbnail (PNG or JPG, min 400x300px)</div></label>
            <div className="access-choice"><label><input type="radio" name="access" defaultChecked />🌐 Open Access<small>Anyone can download without a form</small></label><label><input type="radio" name="access" />🔒 Gated Access<small>Visitors submit name and email</small></label></div>
          </UploadSection>
          <div className="submit-row"><button type="button">Save as Draft</button><button type="button">Submit for Review →</button><small>Submitting will notify the admin team for review. You'll receive an email update.</small></div>
        </form>
      </main>
    </>
  );
}

function UploadSection({ title, children }) {
  return <fieldset><legend>{title}</legend>{children}</fieldset>;
}

function LoginPage() {
  const { user, profile, loading, configured } = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [submitting, setSubmitting] = React.useState(false);

  const describeLoginError = (loginError) => {
    const code = loginError?.code || "unknown";
    const status = loginError?.status;
    const rawMessage = typeof loginError?.message === "string" ? loginError.message : "";
    const messages = {
      invalid_credentials: "Invalid email or password. Confirm that this email exists in Supabase Auth and that its password was set correctly.",
      email_not_confirmed: "This email address has not been confirmed in Supabase Auth.",
      user_banned: "This account is currently suspended.",
      validation_failed: "Enter a valid email address and password.",
      unexpected_failure: "Supabase could not complete the login request. Check the Auth logs for this account."
    };
    return {
      message: messages[code] || (rawMessage && rawMessage !== "{}" ? rawMessage : "Login failed. Supabase returned an empty error response."),
      detail: `Error code: ${code}${status ? ` · HTTP ${status}` : ""}`
    };
  };

  const submit = async (event) => {
    event.preventDefault();
    setError(null);
    if (!configured || !supabase) {
      setError({ message: "Supabase is not configured for this environment.", detail: "Error code: client_not_configured" });
      return;
    }
    setSubmitting(true);
    try {
      const { error: loginError } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
      if (loginError) {
        console.error("Supabase login failed", { code: loginError.code, status: loginError.status, message: loginError.message });
        setError(describeLoginError(loginError));
        return;
      }
      loginRedirect();
    } catch (loginError) {
      console.error("Supabase login request failed", { name: loginError?.name, message: loginError?.message });
      setError({ message: "Could not reach Supabase Auth. Check your connection and try again.", detail: `Error code: ${loginError?.name || "network_error"}` });
    } finally {
      setSubmitting(false);
    }
  };

  return <><Header /><main className="login-page"><section className="login-panel"><Logo /><div><span>Admin testing access</span><h1>Welcome back</h1><p>Log in with your Mundhe Banni admin account.</p></div>{!loading && user ? <div className="already-signed-in"><strong>You're signed in as {profile?.display_name || user.email}.</strong><a className="button primary" href="/">Continue to Home</a></div> : <form onSubmit={submit}><label>Email address<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" required /></label><label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required /></label>{error && <div className="login-error" role="alert"><strong>{error.message}</strong><small>{error.detail}</small></div>}<button type="submit" disabled={submitting}>{submitting ? "Logging In..." : "Log In"}</button></form>}</section><aside className="login-context"><div><h2>Build Karnataka's founder network, together.</h2><p>Access member profiles, community conversations, events, and admin tools with one account.</p><div><span>5,200+</span><small>Founder connections</small></div></div></aside></main></>;
}

const PEOPLE_PAGE_SIZE = 20;

const getMemberCity = (member) => {
  const city = Array.isArray(member?.cities) ? member.cities[0] : member?.cities;
  return city?.name || "Karnataka";
};

const getMemberInterests = (member) => (member?.profile_interests || [])
  .map((item) => item?.interest_tags?.label || item?.interest_tags?.name)
  .filter(Boolean);

async function queryMembers(page) {
  const from = (page - 1) * PEOPLE_PAGE_SIZE;
  const to = from + PEOPLE_PAGE_SIZE - 1;
  const columns = `
    id, username, display_name, role, bio, avatar_url, xp_points,
    profile_visibility, account_status, onboarding_completed,
    cities ( name ),
    profile_interests ( interest_tags ( label ) )
  `;
  let result = await supabase
    .from("profiles")
    .select(columns, { count: "exact" })
    .eq("profile_visibility", "public")
    .eq("account_status", "active")
    .is("deleted_at", null)
    .order("xp_points", { ascending: false })
    .range(from, to);

  if (result.error && ["PGRST200", "PGRST201"].includes(result.error.code)) {
    result = await supabase
      .from("profiles")
      .select("id, username, display_name, role, bio, avatar_url, xp_points, profile_visibility, account_status, onboarding_completed", { count: "exact" })
      .eq("profile_visibility", "public")
      .eq("account_status", "active")
      .is("deleted_at", null)
      .order("xp_points", { ascending: false })
      .range(from, to);
  }
  return result;
}

function usePeopleData(page, reloadKey) {
  const [state, setState] = React.useState({ members: [], stats: null, roleCounts: {}, total: 0, loading: true, error: null });

  React.useEffect(() => {
    let cancelled = false;
    if (!isSupabaseConfigured || !supabase) {
      setState({ members: [], stats: null, roleCounts: {}, total: 0, loading: false, error: new Error("Supabase environment variables are not configured.") });
      return undefined;
    }

    setState((current) => ({ ...current, loading: true, error: null }));
    Promise.all([
      queryMembers(page),
      supabase
        .from("profiles")
        .select("role")
        .eq("profile_visibility", "public")
        .eq("account_status", "active")
        .is("deleted_at", null),
      supabase.from("platform_stats").select("*").single()
    ]).then(([memberResult, rolesResult, statsResult]) => {
      if (cancelled) return;
      if (memberResult.error) throw memberResult.error;

      const roleCounts = (rolesResult.data || []).reduce((counts, profile) => {
        const role = normalizeRole(profile.role);
        counts[role] = (counts[role] || 0) + 1;
        return counts;
      }, {});
      setState({
        members: memberResult.data || [],
        stats: statsResult.data || null,
        roleCounts,
        total: memberResult.count ?? memberResult.data?.length ?? 0,
        loading: false,
        error: null
      });
    }).catch((error) => {
      if (!cancelled) setState({ members: [], stats: null, roleCounts: {}, total: 0, loading: false, error });
    });

    return () => { cancelled = true; };
  }, [page, reloadKey]);

  return state;
}

function PeopleHeader({ stats, roleCounts, loading }) {
  const values = [
    [stats?.total_founders ?? roleCounts.founder ?? 0, "Founders"],
    [stats?.total_experts ?? ((roleCounts.sme || 0) + (roleCounts.expert || 0)), "Experts & Mentors"],
    [stats?.total_providers ?? roleCounts.service_provider ?? 0, "Service Providers"],
    [stats?.total_active_groups ?? 0, "Active Groups"]
  ];
  return (
    <section className="people-header">
      <Breadcrumb items={["People"]} />
      <div className="people-title-row">
        <div>
          <h1>Community Members</h1>
          <p>Discover founders, experts, mentors, and service providers building Karnataka's startup ecosystem.</p>
        </div>
        <div className="people-header-stats">
          {values.map(([value, label]) => <div key={label}>{loading ? <i className="people-stat-skeleton"></i> : <strong>{value}</strong>}<span>{label}</span></div>)}
        </div>
      </div>
    </section>
  );
}

function MemberAvatar({ name, role, avatarUrl, size = "regular" }) {
  const meta = getRoleMeta(role);
  return (
    <span className={`member-avatar ${size} ${meta.className}`}>
      {avatarUrl ? <img src={avatarUrl} alt="" /> : <strong>{(name || "Member").split(" ").map((part) => part[0]).join("").slice(0, 2)}</strong>}
      <i>{meta.icon}</i>
    </span>
  );
}

function RoleBadge({ role }) {
  const meta = getRoleMeta(role);
  return <small className={`role-badge ${meta.className}`}>{meta.label}</small>;
}

const loadFollowedProfiles = (userId) => {
  if (!userId) return {};
  try {
    return JSON.parse(localStorage.getItem(`mb_following_${userId}`) || "{}");
  } catch {
    return {};
  }
};

const saveFollowedProfiles = (userId, followed) => {
  if (userId) localStorage.setItem(`mb_following_${userId}`, JSON.stringify(followed));
};

function SpotlightCard({ member, followed, onFollow }) {
  const name = member.display_name || member.username || "Community Member";
  const xp = Number(member.xp_points) || 0;
  const level = getXpLevel(xp);
  return (
    <article className="spotlight-card">
      <MemberAvatar name={name} role={member.role} avatarUrl={member.avatar_url} size="large" />
      <h3>{name}</h3>
      <RoleBadge role={member.role} />
      <p>📍 {getMemberCity(member)}</p>
      <div className="xp-meter"><span style={{ width: `${levelProgress(xp, level)}%` }}></span></div>
      <em>★ {xp.toLocaleString()} XP · Level {level}</em>
      <button className={followed ? "following" : ""} onClick={() => onFollow?.(member)}>{followed ? "✓ Following" : "Follow"}</button>
    </article>
  );
}

function MemberSpotlight({ members, followedProfiles, onFollow }) {
  return (
    <section className="member-spotlight">
      <div className="spotlight-head">
        <div><h2>★ Member Spotlight</h2><p>Top contributors and recently active members</p></div>
        <div><button aria-label="Previous spotlight">‹</button><button aria-label="Next spotlight">›</button></div>
      </div>
      <div className="spotlight-row">{members.slice(0, 5).map((member) => <SpotlightCard key={member.id} member={member} followed={Boolean(followedProfiles[member.id])} onFollow={onFollow} />)}</div>
    </section>
  );
}

function PeopleToolbar({ total, roleCounts, query, onQuery, roleFilter, onRoleFilter }) {
  const pills = [
    ["All Members", total, "all", "all"],
    ["Founders", roleCounts.founder || 0, "founder", "founder"],
    ["Experts & SMEs", (roleCounts.sme || 0) + (roleCounts.expert || 0), "expert", "sme"],
    ["Service Providers", roleCounts.service_provider || 0, "service-provider", "service_provider"],
    ["Moderators", roleCounts.moderator || 0, "moderator", "moderator"],
    ["Admins", roleCounts.admin || 0, "admin", "admin"]
  ];
  return (
    <>
      <section className="people-toolbar">
        <div className="resource-search"><Search size={16} /><input value={query} onChange={(event) => onQuery(event.target.value)} placeholder="Search by name, expertise, or bio..." /></div>
        {[
          ["Role:", ["All Roles", "Founder", "Expert / SME", "Service Provider", "Moderator", "Admin"]],
          ["City:", ["All Cities", "Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi"]],
          ["Expertise:", ["All Areas", "SaaS", "Fintech", "Agritech", "Edtech", "Healthcare", "Legal", "Finance", "Marketing", "Technology", "Operations"]],
          ["Sort:", ["Most Active", "Newest Members", "Top XP", "A-Z"]]
        ].map(([label, options]) => (
          <label className="select-filter" key={label}><span>{label}</span><select>{options.map((option) => <option key={option}>{option}</option>)}</select></label>
        ))}
        <button className="mobile-filter"><Filter size={16} />Filter & Sort</button>
        <div className="view-toggle"><button className="active" aria-label="Grid view"><Grid3X3 size={17} /></button><button aria-label="List view"><List size={18} /></button></div>
        <p>Showing {total} {total === 1 ? "member" : "members"}</p>
      </section>
      <section className="role-pill-row">
        {pills.map(([label, count, tone, value]) => <button className={`${tone} ${roleFilter === value ? "active" : ""}`} onClick={() => onRoleFilter(value)} key={label}>{label} ({count})</button>)}
      </section>
    </>
  );
}

function PersonCard({ person, isOwnProfile = false, followed = false, onFollow }) {
  const name = person.display_name || person.username || "Community Member";
  const tags = getMemberInterests(person);
  const visibleTags = tags.slice(0, 2);
  const xp = Number(person.xp_points) || 0;
  const level = getXpLevel(xp);
  const meta = getRoleMeta(person.role);
  return (
    <article className={`person-card ${meta.className}`}>
      <div className="person-cover"></div>
      <div className="person-card-body">
        <MemberAvatar name={name} role={person.role} avatarUrl={person.avatar_url} />
        <h3>{name}</h3>
        <RoleBadge role={person.role} />
        <p className="person-company">{person.bio || `@${person.username || "member"}`}</p>
        <p className="person-city">📍 {getMemberCity(person)}</p>
        <div className="person-tags">{visibleTags.map((tag) => <span key={tag}>{tag}</span>)}{tags.length > 2 && <span>+{tags.length - 2}</span>}{tags.length === 0 && <span>New member</span>}</div>
        <div className={`xp-strip level-${level}`}>
          <div><span style={{ width: `${levelProgress(xp, level)}%` }}></span></div>
          <p><span>★ {xp.toLocaleString()} XP</span><span>Level {level}</span></p>
        </div>
      </div>
      <div className="person-actions">
        <a href={isOwnProfile ? "/my-profile" : `/people/${person.username || person.id}`}>{isOwnProfile ? "My Profile" : "View Profile"}</a>
        {!isOwnProfile && <button className={followed ? "following" : ""} onClick={() => onFollow?.(person)}>{followed ? "✓ Following" : "Follow"}</button>}
      </div>
    </article>
  );
}

function PeoplePage() {
  const { user } = useAuth();
  const [page, setPage] = React.useState(1);
  const [reloadKey, setReloadKey] = React.useState(0);
  const [query, setQuery] = React.useState("");
  const [roleFilter, setRoleFilter] = React.useState("all");
  const [inviteOpen, setInviteOpen] = React.useState(false);
  const [followedProfiles, setFollowedProfiles] = React.useState({});
  const { members, stats, roleCounts, total, loading, error } = usePeopleData(page, reloadKey);
  React.useEffect(() => {
    setFollowedProfiles(loadFollowedProfiles(user?.id));
  }, [user?.id]);
  const toggleFollow = async (person) => {
    if (!user) {
      window.location.href = `/login?next=${encodeURIComponent("/people")}`;
      return;
    }
    if (person.id === user.id) return;
    const nextFollowed = !followedProfiles[person.id];
    const next = { ...followedProfiles, [person.id]: nextFollowed };
    if (!nextFollowed) delete next[person.id];
    setFollowedProfiles(next);
    saveFollowedProfiles(user.id, next);
    if (supabase) {
      const request = nextFollowed
        ? supabase.from("profile_follows").insert({ follower_id: user.id, following_id: person.id })
        : supabase.from("profile_follows").delete().eq("follower_id", user.id).eq("following_id", person.id);
      try {
        await request;
      } catch {
        // Keep the UI responsive even before persistent follows are fully wired in Supabase.
      }
    }
  };
  const filteredMembers = members.filter((member) => {
    const role = normalizeRole(member.role);
    const matchesRole = roleFilter === "all" || role === roleFilter || (roleFilter === "sme" && role === "expert");
    const haystack = `${member.display_name || ""} ${member.username || ""} ${member.bio || ""} ${getMemberCity(member)} ${getMemberInterests(member).join(" ")}`.toLowerCase();
    return matchesRole && haystack.includes(query.trim().toLowerCase());
  });
  const totalPages = Math.max(1, Math.ceil(total / PEOPLE_PAGE_SIZE));
  const showEmptyState = !loading && !error && total <= 1;
  const ownMember = members.find((member) => member.id === user?.id) || members[0];

  return (
    <>
      <Header />
      <main>
        <PeopleHeader stats={stats} roleCounts={roleCounts} loading={loading} />
        {!loading && !error && members.length >= 3 && <MemberSpotlight members={members} followedProfiles={followedProfiles} onFollow={toggleFollow} />}
        <PeopleToolbar total={total} roleCounts={roleCounts} query={query} onQuery={setQuery} roleFilter={roleFilter} onRoleFilter={setRoleFilter} />
        {loading && <PeopleLoadingState />}
        {error && <PeopleErrorState error={error} onRetry={() => setReloadKey((key) => key + 1)} />}
        {showEmptyState && <PeopleEmptyState member={ownMember} user={user} onInvite={() => setInviteOpen(true)} />}
        {!loading && !error && !showEmptyState && <section className="people-grid">{filteredMembers.map((person) => <PersonCard key={person.id} person={person} isOwnProfile={person.id === user?.id} followed={Boolean(followedProfiles[person.id])} onFollow={toggleFollow} />)}{filteredMembers.length === 0 && <p className="people-no-results">No members match these filters.</p>}</section>}
        {!loading && !error && !showEmptyState && totalPages > 1 && <nav className="pagination people-pagination" aria-label="People pagination"><button disabled={page === 1} onClick={() => setPage((value) => Math.max(1, value - 1))}>‹</button>{Array.from({ length: totalPages }, (_, index) => index + 1).slice(0, 7).map((number) => <button className={number === page ? "active" : ""} onClick={() => setPage(number)} key={number}>{number}</button>)}<button disabled={page === totalPages} onClick={() => setPage((value) => Math.min(totalPages, value + 1))}>›</button></nav>}
      </main>
      <Footer />
      {inviteOpen && <InviteFoundersModal onClose={() => setInviteOpen(false)} />}
    </>
  );
}

function PeopleLoadingState() {
  return <section className="people-grid people-loading" aria-label="Loading members">{Array.from({ length: 8 }, (_, index) => <article className="person-card" key={index}><div className="person-cover"></div><div className="people-card-skeleton"><i></i><span></span><span></span><span></span></div></article>)}</section>;
}

function PeopleErrorState({ error, onRetry }) {
  const schemaError = error?.code === "PGRST106" || error?.message?.includes("Invalid schema");
  return <section className="people-error"><strong>Could not load community members.</strong><p>{schemaError ? "The mundhe_banni schema must be added to Supabase API exposed schemas." : error?.message || "Check the Supabase connection and try again."}</p><button onClick={onRetry}>Try Again</button></section>;
}

function PeopleEmptyState({ member, user, onInvite }) {
  return <section className="people-empty"><div><i>👥</i><h2>You're the first member here</h2><p>Invite founders to join the Mundhe Banni community.</p><button onClick={onInvite}>Invite Founders</button></div>{member && <aside><h3>Here's your profile so far:</h3><PersonCard person={member} isOwnProfile={Boolean(user && member.id === user.id)} /></aside>}</section>;
}

function InviteFoundersModal({ onClose }) {
  const [copied, setCopied] = React.useState(false);
  const inviteUrl = `${window.location.origin}/people`;
  const copyInvite = async () => {
    await navigator.clipboard.writeText(inviteUrl);
    setCopied(true);
  };
  return <div className="modal-overlay"><div className="invite-founders-modal"><button className="modal-close" onClick={onClose}><X /></button><h2>Invite Founders</h2><p>Share this link with founders you want to welcome into Mundhe Banni.</p><div><input readOnly value={inviteUrl} /><button onClick={copyInvite}>{copied ? "Copied" : "Copy Link"}</button></div></div></div>;
}

function useMyProfileSupplement(userId) {
  const [state, setState] = React.useState({ groups: "—", events: "—", interests: [], discussions: "—", replies: "—", forumActivity: [], loading: false });
  React.useEffect(() => {
    if (!userId || !supabase) return undefined;
    let cancelled = false;
    setState((current) => ({ ...current, loading: true }));
    Promise.all([
      supabase.from("group_members").select("*", { count: "exact", head: true }).eq("profile_id", userId),
      supabase.from("event_rsvps").select("*, events!inner(status)", { count: "exact", head: true }).eq("profile_id", userId).eq("rsvp_status", "going").eq("events.status", "completed"),
      supabase.from("profile_interests").select("interest_tags ( label )").eq("profile_id", userId),
      supabase.from("forum_topics").select("id, title, slug, created_at, reply_count", { count: "exact" }).eq("author_id", userId).is("deleted_at", null).order("created_at", { ascending: false }).limit(3),
      supabase.from("forum_replies").select("id, body, created_at, forum_topics!forum_replies_topic_id_fkey ( id, title, slug )", { count: "exact" }).eq("author_id", userId).is("deleted_at", null).order("created_at", { ascending: false }).limit(3)
    ]).then(([groupsResult, eventsResult, interestsResult, topicsResult, repliesResult]) => {
      if (cancelled) return;
      const topicActivity = (topicsResult.data || []).map((topic) => ({ id: `topic-${topic.id}`, type: "Started discussion", title: topic.title, href: topicUrl(topic), meta: `${topic.reply_count || 0} replies · ${relativeTime(topic.created_at)}`, created_at: topic.created_at }));
      const replyActivity = (repliesResult.data || []).map((reply) => ({ id: `reply-${reply.id}`, type: "Replied", title: reply.forum_topics?.title || stripMarkdown(reply.body).slice(0, 60), href: reply.forum_topics ? topicUrl(reply.forum_topics) : "/community", meta: relativeTime(reply.created_at), created_at: reply.created_at }));
      setState({
        groups: groupsResult.error ? "—" : groupsResult.count ?? 0,
        events: eventsResult.error ? "—" : eventsResult.count ?? 0,
        interests: (interestsResult.data || []).map((item) => item.interest_tags?.label).filter(Boolean),
        discussions: topicsResult.error ? "—" : topicsResult.count ?? 0,
        replies: repliesResult.error ? "—" : repliesResult.count ?? 0,
        forumActivity: [...topicActivity, ...replyActivity].sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0)).slice(0, 5),
        loading: false
      });
    });
    return () => { cancelled = true; };
  }, [userId]);
  return state;
}

function MyProfilePage() {
  const { user, profile, loading, profileLoading } = useAuth();
  const supplement = useMyProfileSupplement(user?.id);
  if (loading || profileLoading) return <><Header /><main className="my-profile-page"><div className="profile-page-loading">Loading your profile...</div></main></>;
  if (!user) return <><Header /><main className="profile-signed-out"><Lock size={34} /><h1>Log in to view your profile</h1><p>Your profile is connected to your Mundhe Banni account.</p><a className="button primary" href="/login">Log In</a></main><Footer /></>;
  if (!profile) return <><Header /><main className="profile-signed-out"><h1>Profile unavailable</h1><p>We could not load the profile connected to {user.email}.</p><a className="button secondary" href="/people">Back to People</a></main><Footer /></>;

  const name = profile.display_name || profile.username || user.email;
  const xp = Number(profile.xp_points) || 0;
  const level = getXpLevel(xp);
  const nextThreshold = { 1: 200, 2: 500, 3: 1000, 4: 2000, 5: 2000 }[level];
  const city = getMemberCity(profile);
  const completionFields = [profile.display_name, profile.username, profile.bio, profile.avatar_url, profile.website_url, profile.linkedin_url];
  const completion = Math.round((completionFields.filter(Boolean).length / completionFields.length) * 100);
  const joined = profile.created_at ? new Date(profile.created_at).toLocaleDateString("en-IN", { month: "long", year: "numeric" }) : "Recently";

  return <><Header /><main className="my-profile-page"><section className="profile-cover"><button>Edit Cover</button></section><section className="profile-intro"><MemberAvatar name={name} role={profile.role} avatarUrl={profile.avatar_url} size="profile" /><div className="profile-info-row"><div><h1>{name} <RoleBadge role={profile.role} /></h1><p className="username">@{profile.username || "member"}</p><p>{profile.bio || "This member has not added a bio yet."}</p><div className="profile-meta"><span>📍 {city}</span>{profile.website_url && <a href={profile.website_url}>Website</a>}{profile.linkedin_url && <a href={profile.linkedin_url}>LinkedIn</a>}<span>Joined {joined}</span></div></div><aside className="completion-card"><h2>Profile Completion</h2><div className="completion-ring" style={{ background: `conic-gradient(var(--accent) 0 ${completion}%, var(--line) ${completion}% 100%)` }}><span>{completion}%</span></div><p>{completion === 100 ? "Your profile is complete." : "Add more profile details to help members connect."}</p></aside></div></section><section className="profile-stats">{[[supplement.discussions, "Discussions"], [supplement.replies, "Replies"], [supplement.groups, "Groups"], [supplement.events, "Events Attended"], [xp.toLocaleString(), "XP Points"]].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section><section className="profile-xp"><div><strong>★ Level {level}{level === 5 ? " - Top Contributor" : ""}</strong><div className="xp-meter wide"><span style={{ width: `${levelProgress(xp, level)}%` }}></span></div><small>{level === 5 ? `${xp.toLocaleString()} XP` : `${xp.toLocaleString()} / ${nextThreshold.toLocaleString()} XP to Level ${level + 1}`}</small></div></section><section className="profile-actions"><button>Edit Profile</button><button>Settings</button><button>Share Profile</button></section><nav className="profile-tabs"><button className="active">Profile</button><button>Groups</button><button>Events</button><button>Settings</button></nav><section className="profile-feed-layout"><div className="profile-real-content"><h2>About</h2><p>{profile.bio || "Add a bio to tell the community what you're building and where you can help."}</p><div className="profile-forum-activity"><h2>Forum Activity</h2>{supplement.forumActivity.length ? supplement.forumActivity.map((item) => <a href={item.href} key={item.id}><span>{item.type}</span><strong>{item.title}</strong><small>{item.meta}</small></a>) : <p>No forum activity yet.</p>}</div></div><aside className="profile-sidebar"><ProfileWidget title={`Interests (${supplement.interests.length})`}>{supplement.interests.length ? supplement.interests.map((tag) => <span key={tag}>{tag}</span>) : <p>No interests added yet.</p>}</ProfileWidget><ProfileWidget title="Account"><p><strong>Email</strong><small>{user.email}</small></p><p><strong>Role</strong><small>{getRoleMeta(profile.role).label}</small></p></ProfileWidget></aside></section></main><Footer /></>;
}

function ProfileWidget({ title, children }) {
  return <div className="profile-widget"><h2>{title}</h2><div>{children}</div></div>;
}

const providerCategories = [
  ["⚖️", "Legal", "28 providers"],
  ["💰", "Finance", "24 providers"],
  ["💻", "Technology", "38 providers"],
  ["📣", "Marketing", "22 providers"],
  ["👥", "HR & Talent", "14 providers"],
  ["⚙️", "Operations", "10 providers"],
  ["🏢", "All Categories", "140 providers"]
];

const providerDirectory = [
  ["LegalEdge Associates", "Legal", "LE", "Startup legal counsel — incorporation, ESOP, contracts.", "Bangalore", true, ["Incorporation", "ESOP", "IP"], 312, "#1D2B53"],
  ["FinTax Consultants", "Finance", "FT", "CA firm specialising in startup accounting and tax compliance.", "Bangalore", true, ["Accounting", "Taxation", "CFO Advisory"], 248, "#1A7A4A"],
  ["CodeCraft Technologies", "Technology", "CC", "Product engineering and MVP development for early-stage startups.", "Bangalore", true, ["Web Dev", "Mobile Apps", "AI/ML"], 421, "#5B3DB5"],
  ["GrowthHackers Agency", "Marketing", "GH", "Full-funnel digital marketing for B2B and D2C startups.", "Bangalore", true, ["SEO", "Paid Ads", "Content"], 189, "#C84B2F"],
  ["TalentFirst HR", "HR & Talent", "TF", "Recruitment and HR policy setup for seed-stage companies.", "Bangalore", false, ["Recruitment", "HR Compliance", "Payroll"], 98, "#B8760A"],
  ["StartupCounsel India", "Legal", "SC", "SEBI-registered legal team for term sheets and investor agreements.", "Mysuru", true, ["Term Sheets", "VC Agreements", "Compliance"], 176, "#2456A0"],
  ["OpsXpert", "Operations", "OX", "Process design and vendor management for scaling startups.", "Bangalore", false, ["Process Design", "Supply Chain", "Vendor Mgmt"], 64, "#374151"],
  ["HireRight Consultants", "HR & Talent", "HR", "Experienced CHRO-as-a-service for Series A and beyond.", "Hubballi", true, ["CHRO Advisory", "Culture", "ESOP Admin"], 112, "#B8760A"],
  ["DevVerse Studio", "Technology", "DV", "Design systems and frontend engineering for SaaS products.", "Mangaluru", true, ["UI/UX", "Frontend", "Design Systems"], 203, "#5B3DB5"]
];

const categoryClass = (category) => category.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-");

function ServiceProviderHeader() {
  return (
    <section className="sp-header">
      <Breadcrumb items={["Service Providers"]} />
      <div className="sp-title-row">
        <div>
          <h1>Service Provider Directory</h1>
          <p>Discover verified legal, finance, technology, and marketing experts trusted by Karnataka's founder community.</p>
        </div>
        <div className="sp-header-side">
          <div className="sp-header-stats">
            <div><strong>140+</strong><span>Active Providers</span></div>
            <div><strong>6</strong><span>Categories</span></div>
            <div><strong className="verified-text">✓ Verified</strong><span>All Listings Reviewed</span></div>
          </div>
          <a className="button primary" href="/service-providers/list-your-business">📋 Apply to be listed</a>
        </div>
      </div>
    </section>
  );
}

function ProviderCategoryTiles() {
  return (
    <section className="sp-category-strip">
      {providerCategories.map(([icon, label, count]) => (
        <button className={label === "All Categories" ? "active" : ""} key={label}><span>{icon}</span><strong>{label}</strong><small>{count}</small></button>
      ))}
    </section>
  );
}

function ProviderToolbar() {
  return (
    <section className="sp-toolbar">
      <div className="resource-search"><Search size={16} /><input placeholder="Search by company name, service, or keyword..." /></div>
      <label className="select-filter"><span>Category:</span><select><option>All Categories</option><option>Legal</option><option>Finance</option><option>Technology</option><option>Marketing</option><option>HR & Talent</option><option>Operations</option></select></label>
      <label className="select-filter"><span>City:</span><select><option>All Cities</option><option>Bengaluru</option><option>Mysuru</option><option>Mangaluru</option><option>Hubballi</option><option>Belagavi</option></select></label>
      <label className="verified-toggle"><span>Verified Only</span><input type="checkbox" /><i></i></label>
      <button className="mobile-filter"><Filter size={16} />Filter & Sort</button>
      <label className="select-filter sort-filter"><span>Sort:</span><select><option>Featured</option><option>Newest</option><option>A-Z</option><option>Most Enquired</option></select></label>
      <div className="view-toggle"><button className="active" aria-label="Grid view"><Grid3X3 size={17} /></button><button aria-label="List view"><List size={18} /></button></div>
      <p>Showing 140 service providers</p>
    </section>
  );
}

function FeaturedProviderBanner({ onEnquiry }) {
  return (
    <section className="featured-provider">
      <div>
        <span className="featured-pill">★ Featured Provider</span>
        <h2>LegalEdge Associates</h2>
        <p>Trusted startup legal counsel for 200+ Karnataka founders.</p>
        <div className="featured-meta"><span>⚖️ Legal Services</span><span>📍 Bangalore</span><span className="verified-meta">✓ Verified Partner</span></div>
        <div className="featured-actions"><button className="button primary" onClick={() => onEnquiry(providerDirectory[0])}><Mail size={17} />Send Enquiry</button><a className="button ghost" href="/service-providers/legaledge-associates">View Profile</a></div>
      </div>
      <div className="featured-provider-logo"><span>LE</span><strong>★ 4.8</strong><small>(120 reviews)</small></div>
    </section>
  );
}

function ProviderSidebar() {
  return (
    <aside className="provider-sidebar">
      <ProviderFilterGroup title="Category" items={["All Categories (140)", "Legal (28)", "Finance (24)", "Technology (38)", "Marketing (22)", "HR & Talent (14)", "Operations (10)"]} checked={["All Categories (140)"]} />
      <ProviderFilterGroup title="City" items={["Bengaluru (98)", "Mysuru (16)", "Mangaluru (12)", "Hubballi (8)", "Belagavi (6)"]} />
      <div className="filter-group"><h3>Verification Status</h3>{["All Providers", "✓ Verified Only"].map((item, index) => <label key={item}><input type="radio" name="verify" defaultChecked={index === 0} />{item}</label>)}</div>
      <ProviderFilterGroup title="Industries Served" items={["SaaS / Technology", "Agritech", "Fintech", "Edtech", "Healthcare", "D2C / E-commerce"]} showMore />
      <ProviderFilterGroup title="Provider Size" items={["Solo / Freelancer", "Small (2-10 people)", "Mid-size (11-50 people)", "Large (50+ people)"]} />
      <button className="clear-filters">Clear all filters</button>
    </aside>
  );
}

function ProviderFilterGroup({ title, items, checked = [], showMore = false }) {
  return (
    <div className="filter-group">
      <h3>{title}</h3>
      {items.map((item) => <label key={item}><input type="checkbox" defaultChecked={checked.includes(item)} />{item}</label>)}
      {showMore && <button>Show more</button>}
    </div>
  );
}

function ProviderDirectoryCard({ provider, onEnquiry }) {
  const [name, category, initials, tagline, city, verified, services, views, color] = provider;
  const badge = categoryClass(category);
  return (
    <article className={`provider-directory-card ${badge}`} style={{ "--provider-color": color }}>
      <span className="provider-accent"></span>
      <div className="provider-card-inner">
        <div className="provider-card-head">
          <span className="directory-logo">{initials}</span>
          <div><h3>{name}</h3><small className={`provider-badge ${badge}`}>{category}</small></div>
          <Bookmark size={18} />
        </div>
        <p>{tagline}</p>
        <div className="provider-meta-row"><span>📍 {city}</span>{verified && <small>✓ Verified</small>}</div>
        <div className="provider-service-tags">{services.slice(0, 3).map((service) => <span key={service}>{service}</span>)}</div>
        <div className="provider-card-actions">
          <span>👁 {views} views</span>
          <div><a href="/service-providers/legaledge-associates">View Profile</a><button onClick={() => onEnquiry(provider)}>Send Enquiry</button></div>
        </div>
      </div>
    </article>
  );
}

function EnquiryModal({ provider, onClose }) {
  const [sent, setSent] = React.useState(false);
  if (!provider) return null;
  const [name, category, initials] = provider;
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="enquiry-title">
      <div className="enquiry-modal">
        <button className="modal-close" onClick={onClose} aria-label="Close"><X /></button>
        <div className="enquiry-context"><span className="directory-logo small">{initials}</span><div><strong>{name}</strong><small className={`provider-badge ${categoryClass(category)}`}>{category}</small></div><em>✓ Verified</em></div>
        {sent ? (
          <div className="enquiry-success"><i><CheckCircle2 size={34} /></i><h2>Enquiry Sent!</h2><p>{name} has been notified. Expect a response within 1-2 business days. A confirmation has been sent to your email.</p><button onClick={onClose}>Close</button></div>
        ) : (
          <>
            <h2 id="enquiry-title">Send Your Enquiry</h2>
            <p>The provider will be notified by email and will respond directly to you.</p>
            <form className="enquiry-form">
              <label>Full Name *<input defaultValue="Anand Kumar" /></label>
              <label>Email Address *<input type="email" defaultValue="anand@example.com" /></label>
              <label>I need help with *<select><option>Select requirement type...</option><option>Company Incorporation</option><option>Fundraising Documentation</option><option>ESOP & Employee Equity</option><option>Tax & Accounting</option><option>Technology Development</option></select></label>
              <label>Describe your requirement *<textarea placeholder="Please share relevant details - stage of your startup, timeline, specific challenges, or questions." /></label>
              <small>🔒 Your enquiry is sent directly to the provider. Your contact details are shared only with them and are not made public.</small>
              <button type="button" onClick={() => setSent(true)}>Send Enquiry →</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function ServiceProvidersPage() {
  const [enquiryProvider, setEnquiryProvider] = React.useState(null);
  return (
    <>
      <Header />
      <main>
        <ServiceProviderHeader />
        <ProviderCategoryTiles />
        <ProviderToolbar />
        <FeaturedProviderBanner onEnquiry={setEnquiryProvider} />
        <section className="provider-main">
          <ProviderSidebar />
          <div className="provider-results">
            <div className="provider-directory-grid">{providerDirectory.map((provider) => <ProviderDirectoryCard key={provider[0]} provider={provider} onEnquiry={setEnquiryProvider} />)}</div>
            <nav className="pagination" aria-label="Service provider pagination">{["‹", "1", "2", "3", "...", "12", "›"].map((item) => <button className={item === "1" ? "active" : ""} key={item}>{item}</button>)}</nav>
          </div>
        </section>
      </main>
      <Footer />
      <EnquiryModal provider={enquiryProvider} onClose={() => setEnquiryProvider(null)} />
    </>
  );
}

function ProviderDetailPage() {
  const [enquiryProvider, setEnquiryProvider] = React.useState(null);
  const provider = providerDirectory[0];
  const services = [
    ["Company Incorporation", "End-to-end Private Limited company registration, MOA/AOA drafting, and DPIIT recognition filing."],
    ["Fundraising Documentation", "Term sheet review, SHA drafting, SAFE/CCD structuring, and investor due diligence support."],
    ["ESOP Structuring", "ESOP plan design, board resolution drafting, vesting schedule creation, and employee grant letters."],
    ["Intellectual Property", "Trademark registration, patent filing, and IP assignment agreements for founders."],
    ["Regulatory Compliance", "Annual ROC filings, GST registration, FEMA compliance for foreign investments."]
  ];
  return (
    <>
      <Header />
      <main className="provider-detail-page">
        <Breadcrumb items={["Service Providers", "Legal", "LegalEdge Associates"]} />
        <div className="provider-detail-layout">
          <section className="provider-detail-main">
            <div className="provider-profile-head">
              <span className="directory-logo large">LE</span>
              <div><h1>LegalEdge Associates</h1><p>Startup legal counsel — incorporation, ESOP, contracts.</p><div className="provider-meta-row"><small className="provider-badge legal">Legal</small><small>✓ Verified</small><span>📍 Bangalore</span></div></div>
            </div>
            <div className="detail-stats"><div><strong>312</strong><span>Profile Views</span></div><div><strong>48</strong><span>Enquiries Received</span></div><div><strong>Since 2022</strong><span>On Platform</span></div></div>
            <DetailBlock title="About LegalEdge Associates">
              <p>LegalEdge Associates is a Bangalore-based law firm specialising in startup and venture capital law. Founded in 2018, we have advised over 200 founders across Karnataka on entity formation, fundraising documentation, ESOP structuring, IP protection, and regulatory compliance.</p>
              <p>Our team of 8 legal professionals brings deep expertise in SEBI regulations, Companies Act compliance, and cross-border investment structures. We work exclusively with startups and have a transparent, founder-friendly fee model.</p>
              <p>We are empanelled advisors to three incubators in Karnataka and are recognized by DPIIT as a trusted startup services provider.</p>
            </DetailBlock>
            <DetailBlock title="Services Offered">
              <div className="service-accordion">{services.map(([title, text], index) => <details open={index === 0} key={title}><summary>{title}<ChevronDown size={16} /></summary><p>{text}</p></details>)}</div>
            </DetailBlock>
            <DetailBlock title="Industries Served"><div className="industry-pills">{["SaaS", "Fintech", "Agritech", "Edtech", "Healthcare", "D2C"].map((item) => <span key={item}>{item}</span>)}</div></DetailBlock>
            <DetailBlock title="Founder Reviews">
              <div className="review-summary"><strong>4.8</strong><span>★★★★★</span><small>Based on 120 reviews</small></div>
              {["LegalEdge handled our Series A documentation flawlessly. Turnaround was fast and the team was available on weekends during our closing crunch.", "We used them for ESOP structuring. Very thorough, explained everything clearly, and the pricing was transparent from day one.", "Great for incorporation and compliance. Wish they had a mobile-friendly portal for tracking, but overall highly recommended."].map((text, index) => <article className="review-card" key={text}><div><span className="profile">{["A", "P", "R"][index]}</span><strong>{["Arjun Nair", "Priya Kamath", "Rahul Desai"][index]}</strong><small>{["Founder · March 2025", "Founder · Jan 2025", "Co-Founder · Dec 2024"][index]}</small></div><em>★★★★★ {index === 2 ? "4.0" : "5.0"}</em><p>{text}</p></article>)}
              <button className="join-outline detail-button">Write a Review</button>
            </DetailBlock>
          </section>
          <aside className="contact-panel">
            <span className="directory-logo">LE</span><h3>LegalEdge Associates</h3><small>✓ Verified Partner</small>
            <button className="button primary" onClick={() => setEnquiryProvider(provider)}><Mail size={16} />Send Enquiry</button><button className="join-outline">🌐 Visit Website</button>
            <hr /><h4>Contact Details</h4><p>📍 Bangalore, Karnataka</p><p><a href="#site">legaledge.in</a></p><p>📧 hello@legaledge.in</p>
            <hr /><h4>Provider Stats</h4><p>👁 312 Profile Views</p><p>✉ 48 Enquiries Received</p>
            <hr /><h4>Share This Profile</h4><div className="share-row"><button><Linkedin size={16} /></button><button>𝕏</button><button><Copy size={16} /></button></div><button className="join-outline">🔖 Save Provider</button>
          </aside>
        </div>
      </main>
      <EnquiryModal provider={enquiryProvider} onClose={() => setEnquiryProvider(null)} />
    </>
  );
}

function DetailBlock({ title, children }) {
  return <section className="detail-block"><h2>{title}</h2>{children}</section>;
}

function ListBusinessPage() {
  return (
    <>
      <Header />
      <main className="listing-form-page">
        <Breadcrumb items={["Service Providers", "List Your Business"]} />
        <h1>List Your Business</h1><p>Join 140+ trusted providers on Karnataka's leading founder community platform. Your listing will be reviewed and approved before going live.</p>
        <div className="lifecycle">{["Submit Details", "Under Review", "Admin Approval", "Listing Live"].map((step, index) => <div className={index === 0 ? "active" : ""} key={step}><span>{index + 1}</span><small>{step}</small></div>)}</div>
        <div className="info-note">ℹ️ Your listing will be reviewed by the Mundhe Banni admin team. You'll receive an email when your listing is approved or if changes are needed.</div>
        <form className="upload-form">
          <UploadSection title="Company Profile">
            <label>Company Name *<input placeholder="e.g. LegalEdge Associates" /></label><label>Tagline *<input placeholder="A one-line description of what you do" /></label><label>Company Logo<div className="dropzone compact">🖼️ Drag & drop logo here or click to browse</div></label><label>About Your Company *<textarea placeholder="Share your background, founding story, team size, and what makes you the right partner for founders." /></label><label>Primary Category *<select><option>Legal</option><option>Finance</option><option>Technology</option><option>Marketing</option></select></label><label>City *<select><option>Bengaluru</option><option>Mysuru</option><option>Mangaluru</option><option>Hubballi</option></select></label>
          </UploadSection>
          <UploadSection title="Services Catalogue"><div className="service-row"><input placeholder="Company Incorporation" /><input placeholder="One line description" /><button type="button">×</button></div><button className="add-service" type="button">＋ Add Another Service</button></UploadSection>
          <UploadSection title="Contact & Links"><label>Website<input type="url" placeholder="https://yourcompany.com" /></label><label>Contact Email *<input type="email" /></label><label className="inline-check"><input type="checkbox" />Show this email publicly on my listing</label></UploadSection>
          <UploadSection title="Industries Served"><div className="industry-pills selectable">{["SaaS", "Fintech", "Agritech", "Edtech", "Healthcare", "D2C / E-commerce", "CleanTech", "Logistics"].map((item, index) => <span className={index < 3 ? "selected" : ""} key={item}>{item}</span>)}</div></UploadSection>
          <div className="submit-row"><button type="button">Save as Draft</button><button type="button">Submit for Review →</button><small>By submitting, you agree to the <a href="#guidelines">Mundhe Banni Marketplace Guidelines</a>.</small></div>
        </form>
      </main>
    </>
  );
}

function MyListingPage() {
  return (
    <>
      <Header />
      <main className="my-listing-page">
        <Breadcrumb items={["My Listing"]} /><h1>My Listing</h1>
        <div className="listing-status">✅ Your listing is Live and visible to all founders on the platform. <a href="/service-providers/legaledge-associates">View Live Listing →</a></div>
        <div className="my-listing-layout">
          <section><h2>Listing Preview</h2><ProviderDirectoryCard provider={providerDirectory[0]} onEnquiry={() => {}} /><button className="join-outline detail-button">Edit Listing</button></section>
          <aside><h2>Listing Analytics</h2>{[["👁 312", "Profile Views", "Last 30 days"], ["✉ 48", "Enquiries Received", "Last 30 days"], ["⭐ 4.8", "Average Rating", "120 reviews"]].map(([value, label, sub]) => <div className="analytics-card" key={label}><strong>{value}</strong><span>{label}</span><small>{sub}</small></div>)}<h2>Recent Enquiries</h2>{["Need ESOP setup for a 12-member team.", "Looking for term sheet review this week.", "Can you help with DPIIT recognition?"].map((msg, index) => <div className="enquiry-row" key={msg}><strong>{["Meera Rao", "Vikram Hegde", "Sana Khan"][index]}</strong><small>{["New", "Responded", "Closed"][index]}</small><p>{msg}</p></div>)}<a className="clear-filters" href="#all">View All Enquiries</a></aside>
        </div>
      </main>
    </>
  );
}

const pastMundheBanniMeetups = [
  {
    date: "4:00 PM to 7:00 PM, June 5, 2026",
    month: "JUN",
    day: "05",
    status: "upcoming",
    city: "Mysuru",
    imageTone: "mysuru",
    attendees: "250+",
    title: "6th Mundhe Banni Meetup @ Mysuru",
    collaboration: "In collaboration with SJCE STEP",
    location: "JSS Technical Institutions Campus, Mysuru",
    summary: "A landmark evening at SJCE STEP, Mysuru - 250+ founders, students, and ecosystem enablers from across Karnataka came together for keynotes, a GTM strategy masterclass, a panel on Mysuru's startup ecosystem, and a founder spotlight featuring local entrepreneurs."
  },
  {
    date: "10:00 AM to 1:30 PM, April 17, 2026",
    month: "APR",
    day: "17",
    status: "upcoming",
    city: "Tumkur",
    imageTone: "tumkur-fifth",
    attendees: "120+",
    title: "5th Mundhe Banni Meetup @ Tumkur",
    collaboration: "In collaboration with Siddhaganga Incubation Foundation",
    location: "Media Centre, SIT Tumkur",
    summary: "An impactful morning featuring a powerful entrepreneurial journey by Shashi Kumar from Akshayakalpa and a highly practical session on e-commerce growth by Sachin Naik from Cuzor Labs. 120+ participants from Tumkur and nearby regions."
  },
  {
    date: "4pm to 7.30pm, February 28, 2026",
    month: "FEB",
    day: "28",
    status: "past",
    city: "Bengaluru",
    imageTone: "bengaluru-fourth",
    attendees: "100+",
    title: "4th Mundhe Banni Meetup @ Bengaluru",
    location: "Bengaluru Design Centre (Cobalt), Church Street",
    summary: "A highly successful evening featuring expert sessions on fundraising by Vittal Ramakrishna and go-to-market strategy by Jyothirmayee, plus a competitive pitchathon judged by Kailashnath MS from Ideaspring Capital."
  },
  {
    date: "December 19, 2025",
    month: "DEC",
    day: "19",
    status: "past",
    city: "Hubballi",
    imageTone: "hubballi",
    attendees: "250+",
    title: "3rd Mundhe Banni Meetup @ Hubballi",
    location: "KLE Technological University, CTIE Campus, Hubballi",
    summary: "Celebrating the spirit of entrepreneurship in North Karnataka with sessions on brand building and venture funding."
  },
  {
    date: "October 31, 2025",
    month: "OCT",
    day: "31",
    status: "past",
    city: "Bengaluru",
    imageTone: "bengaluru",
    attendees: "100+",
    title: "2nd Mundhe Banni Meetup @ Bengaluru",
    location: "Samagata Foundation, M G Road, Bengaluru",
    summary: "Mundhe Banni celebrated Karnataka Rajyotsava with 100+ entrepreneurs from across Karnataka. The event featured an insightful panel discussion on branding for startups and a competitive pitch competition with five innovative ventures."
  },
  {
    date: "September 19, 2025",
    month: "SEP",
    day: "19",
    status: "past",
    city: "Bengaluru",
    imageTone: "bengaluru-first",
    attendees: "50+",
    title: "Meetup #1 - Bengaluru",
    location: "Green Path Organic Hotel, Malleshwaram, Bengaluru",
    summary: "Our inaugural meetup brought together entrepreneurs from across Karnataka."
  }
];

function EventsHeader({ featured }) {
  const totalAttendees = pastMundheBanniMeetups.reduce((sum, meetup) => sum + Number.parseInt(meetup.attendees, 10), 0);
  return (
    <section className="events-page-header">
      <Breadcrumb items={["Events"]} />
      <div className="events-title-row">
        <div>
          <span className="events-eyebrow">Mundhe Banni Meetups</span>
          <h1>Founder gatherings across Karnataka</h1>
          <p>Meet entrepreneurs, students, operators, investors, and ecosystem builders through city-led community events.</p>
          <div className="events-hero-actions">
            <a className="button primary" href="#meetups">Explore Meetups</a>
            <a className="button secondary" href="/community">Discuss Events</a>
          </div>
        </div>
        <article className="events-featured-card">
          <div className={`event-directory-image ${featured.imageTone}`}>
            <div className="event-date"><span>{featured.month}</span><strong>{featured.day}</strong></div>
            <span className={`event-type-badge ${featured.status === "upcoming" ? "group-meetup" : "past-meetup"}`}>{featured.status === "upcoming" ? "Next Meetup" : "Featured Meetup"}</span>
          </div>
          <div>
            <small>{featured.date}</small>
            <h2>{featured.title}</h2>
            <p><MapPin size={16} />{featured.location}</p>
          </div>
        </article>
      </div>
      <div className="events-header-stats">
        <div><strong>{pastMundheBanniMeetups.length}</strong><span>Total Meetups</span></div>
        <div><strong>{new Set(pastMundheBanniMeetups.map((meetup) => meetup.city)).size}</strong><span>Karnataka Cities</span></div>
        <div><strong>{totalAttendees}+</strong><span>People Reached</span></div>
        <div><strong>{pastMundheBanniMeetups.filter((meetup) => meetup.status === "upcoming").length}</strong><span>Upcoming</span></div>
      </div>
    </section>
  );
}

function EventsToolbar({ activeFilter, onFilter, cityFilter, onCity, query, onQuery, total }) {
  const filters = [["all", "All"], ["upcoming", "Upcoming"], ["past", "Previous"]];
  const cities = ["All Cities", ...Array.from(new Set(pastMundheBanniMeetups.map((meetup) => meetup.city)))];
  return (
    <section className="events-toolbar" id="meetups">
      <div className="events-toolbar-head">
        <div>
          <h2>Mundhe Banni Meetups</h2>
          <p>{total} {total === 1 ? "event" : "events"} matching your filters</p>
        </div>
        <nav>{filters.map(([value, label]) => <button className={activeFilter === value ? "active" : ""} onClick={() => onFilter(value)} key={value}>{label}</button>)}</nav>
      </div>
      <div className="events-filter-row">
        <div className="resource-search"><Search size={16} /><input value={query} onChange={(event) => onQuery(event.target.value)} placeholder="Search by city, venue, session, or speaker..." /></div>
        <label className="select-filter"><span>City</span><select value={cityFilter} onChange={(event) => onCity(event.target.value)}>{cities.map((city) => <option key={city}>{city}</option>)}</select></label>
      </div>
      <div className="event-pills">{[["all", "All Meetups"], ["upcoming", "Upcoming"], ["past", "Previous"], ["Bengaluru", "Bengaluru"], ["Mysuru", "Mysuru"], ["Tumkur", "Tumkur"], ["Hubballi", "Hubballi"]].map(([value, label], index) => <button className={(activeFilter === value || cityFilter === value || (index === 0 && activeFilter === "all" && cityFilter === "All Cities")) ? "active" : ""} onClick={() => {
        if (value === "all") {
          onFilter("all");
          onCity("All Cities");
          onQuery("");
          return;
        }
        pastMundheBanniMeetups.some((meetup) => meetup.city === value) ? onCity(value) : onFilter(value);
      }} key={value}>{label}</button>)}</div>
    </section>
  );
}

function PastMeetupCard({ meetup }) {
  const isUpcoming = meetup.status === "upcoming";
  return (
    <article className={`past-meetup-card ${isUpcoming ? "upcoming" : "past"}`}>
      <div className={`event-directory-image ${meetup.imageTone}`}>
        <div className="event-date"><span>{meetup.month}</span><strong>{meetup.day}</strong></div>
        <span className={`event-type-badge ${isUpcoming ? "group-meetup" : "past-meetup"}`}>{isUpcoming ? "Current Event" : "Previous Event"}</span>
        <Bookmark size={18} />
      </div>
      <div className="past-meetup-body">
        <div className="past-meetup-meta"><span>{meetup.date}</span><small><Users size={18} />{meetup.attendees}</small><small><MapPin size={17} />{meetup.city}</small></div>
        <h3>{meetup.title}</h3>
        {meetup.collaboration && <em>{meetup.collaboration}</em>}
        <p><MapPin size={18} />{meetup.location}</p>
        <p>{meetup.summary}</p>
        <div className="event-card-footer"><span>{isUpcoming ? "Open for planning" : "Community archive"}</span><button>{isUpcoming ? "View Details" : "View Recap"}</button></div>
      </div>
    </article>
  );
}

function PastMeetupsSection() {
  const [activeFilter, setActiveFilter] = React.useState("all");
  const [cityFilter, setCityFilter] = React.useState("All Cities");
  const [query, setQuery] = React.useState("");
  const filteredMeetups = pastMundheBanniMeetups.filter((meetup) => {
    const statusMatch = activeFilter === "all" || meetup.status === activeFilter;
    const cityMatch = cityFilter === "All Cities" || meetup.city === cityFilter;
    const searchText = `${meetup.title} ${meetup.city} ${meetup.location} ${meetup.summary} ${meetup.collaboration || ""}`.toLowerCase();
    const searchMatch = !query.trim() || searchText.includes(query.trim().toLowerCase());
    return statusMatch && cityMatch && searchMatch;
  });
  return (
    <>
      <EventsToolbar activeFilter={activeFilter} onFilter={setActiveFilter} cityFilter={cityFilter} onCity={setCityFilter} query={query} onQuery={setQuery} total={filteredMeetups.length} />
      <section className="past-meetups-section">
        <div className="past-meetups-grid">
          {filteredMeetups.map((meetup) => <PastMeetupCard meetup={meetup} key={meetup.title} />)}
          {filteredMeetups.length === 0 && <div className="events-empty-state"><CalendarDays size={32} /><h3>No meetups match these filters.</h3><p>Try clearing search or choosing another city.</p></div>}
        </div>
      </section>
    </>
  );
}

function EventsPage() {
  const featured = pastMundheBanniMeetups.find((meetup) => meetup.status === "upcoming") || pastMundheBanniMeetups[0];
  return (
    <><Header /><main className="events-page"><EventsHeader featured={featured} /><PastMeetupsSection /></main><Footer /></>
  );
}

function EventDetailPage() {
  const [rsvp, setRsvp] = React.useState("going");
  const [feedbackOpen, setFeedbackOpen] = React.useState(false);
  return (
    <>
      <Header />
      <main className="event-detail-page">
        <Breadcrumb items={["Events", "Group Meetup", "Bengaluru Founder Meetup"]} />
        <div className="event-detail-layout">
          <section>
            <div className="event-detail-hero"><span className="event-type-badge group-meetup">Group Meetup</span></div>
            <h1>Bengaluru Founder Meetup</h1>
            <div className="event-detail-meta"><span>📅 Sat, 24 May 2025 · 5:00 PM - 8:00 PM IST</span><span>📍 Koramangala Social, Bangalore</span><span>👥 Group Meetup · Bengaluru Founders Group</span><span>👁 312 views</span></div>
            <DetailBlock title="About This Event"><p>Join us for our monthly Bengaluru Founder Meetup - a casual evening of conversations, connections, and community for early-stage founders across the city.</p><p>This month's session will feature an open AMA with two founders who recently closed their seed rounds. Bring your questions, bring your pitch deck, or just come to meet fellow builders.</p><p>The format is informal - 30 minutes of structured conversation followed by open networking over drinks and snacks. Capped at 80 attendees to keep it intimate and high-quality.</p></DetailBlock>
            <DetailBlock title="Event Schedule"><div className="event-timeline">{[["5:00 PM", "Doors Open & Networking", ""], ["5:30 PM", "Founder Introductions", "Each founder gets 60 seconds"], ["6:00 PM", "AMA: Lessons from closing our seed round", "With 2 guest founders"], ["7:00 PM", "Open Networking", "Food and drinks provided"], ["8:00 PM", "Wrap Up", ""]].map(([time, title, desc]) => <div key={time}><time>{time}</time><span></span><section><strong>{title}</strong><small>{desc}</small></section></div>)}</div></DetailBlock>
            <DetailBlock title="Featured Guests"><div className="guest-grid">{[["AK", "Ananya Krishnan", "Founder, GreenRoute Labs", "Lessons from our ₹2Cr seed round"], ["RS", "Rohit Shenoy", "Co-Founder, AgroStack", "Finding your first 100 customers"]].map(([initials, name, role, talk]) => <article key={name}><span>{initials}</span><div><strong>{name}</strong><small>{role}</small><p>{talk}</p></div><Linkedin size={16} /></article>)}</div></DetailBlock>
            <DetailBlock title="Venue"><p>Koramangala Social, 118, Koramangala Industrial Layout, Bangalore 560034</p><div className="venue-map">📍<strong>Koramangala Social</strong><a href="#maps">Get Directions →</a></div></DetailBlock>
            <div className="survey-box"><span>This event has ended. Share your feedback to help us improve future events.</span><button onClick={() => setFeedbackOpen(true)}>Rate This Event →</button></div>
          </section>
          <aside className="rsvp-panel">
            <strong className="availability">🟢 Spots Available</strong><p>42 / 80 registered</p><div className="capacity-bar"><span></span></div>
            {["going", "interested", "not-going"].map((choice) => <button className={rsvp === choice ? `active ${choice}` : ""} onClick={() => setRsvp(choice)} key={choice}>{choice === "going" ? "✅ Going" : choice === "interested" ? "⭐ Interested" : "❌ Not Going"}</button>)}
            {rsvp === "going" && <div className="registered-note">🎉 You're registered! A confirmation has been sent to your email.</div>}
            <hr /><h4>Add to Calendar</h4><div className="calendar-buttons"><button>📅 Google Calendar</button><button>📥 Download .ics</button></div>
            <hr /><h4>Share Event</h4><div className="share-row"><button><Linkedin size={16} /></button><button>𝕏</button><button><Copy size={16} /></button></div>
            <hr /><h4>Organised by</h4><p>👥 Bengaluru Founders Group</p><a href="#group">View Group →</a>
          </aside>
        </div>
      </main>
      <div className="mobile-rsvp-bar"><span>42 / 80 spots</span><button onClick={() => setRsvp("going")}>RSVP Going</button></div>
      <FeedbackModal open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
    </>
  );
}

function FeedbackModal({ open, onClose }) {
  const [sent, setSent] = React.useState(false);
  if (!open) return null;
  return <div className="modal-overlay"><div className="feedback-modal"><button className="modal-close" onClick={onClose}><X /></button>{sent ? <div className="enquiry-success"><i><CheckCircle2 size={34} /></i><h2>Thank you for your feedback!</h2><a href="#certificate">📄 Download Certificate of Participation</a><button onClick={onClose}>Close</button></div> : <><h2>How was the event?</h2><div className="feedback-context"><span className="event-type-badge group-meetup">Group Meetup</span><strong>Bengaluru Founder Meetup</strong><small>May 24, 2025</small></div><label>Overall Experience</label><div className="feedback-stars">★★★★★</div><label>Any comments or suggestions?<textarea placeholder="What did you enjoy? What could be better?" /></label><button className="feedback-submit" onClick={() => setSent(true)}>Submit Feedback</button></>}</div></div>;
}

function CreateEventPage() {
  return (
    <><Header /><main className="create-event-page"><Breadcrumb items={["Events", "Create Event"]} /><h1>Create New Event</h1><p>Fill in the details below. Group Meetups are visible only to group members.</p><form className="upload-form"><UploadSection title="Event Type"><div className="event-type-selector">{[["👥", "Group Meetup", "Visible only to members of a specific group."], ["🌍", "Community Conference", "Open to founders in your city."], ["🚀", "Flagship Platform Event", "Platform-wide event for all members."]].map(([icon, title, desc], index) => <label className={index === 0 ? "selected" : ""} key={title}><input type="radio" name="event-type" defaultChecked={index === 0} />{icon}<strong>{title}</strong><small>{desc}</small></label>)}</div></UploadSection><UploadSection title="Event Details"><label>Event Title *<input placeholder="e.g. Bengaluru Founder Meetup - May 2025" /></label><label>Description *<textarea placeholder="Tell founders what to expect, who should attend, and what they'll learn." /></label><label>Associated Group *<select><option>Bengaluru Founders</option><option>Women Entrepreneurs</option><option>Agritech Karnataka</option></select></label></UploadSection><UploadSection title="Date & Time"><div className="event-form-row"><label>Start Date *<input type="date" /></label><label>Start Time *<input type="time" /></label><label>End Time *<input type="time" /></label></div><label>Timezone<select><option>IST - Asia/Kolkata</option></select></label></UploadSection><UploadSection title="Location & Format"><div className="format-radios"><label><input type="radio" name="format" defaultChecked />In-Person</label><label><input type="radio" name="format" />Virtual</label><label><input type="radio" name="format" />Hybrid</label></div><label>Venue Name *<input placeholder="e.g. 91springboard, Koramangala" /></label><label>Full Address<textarea placeholder="Street, area, city, pincode" /></label></UploadSection><UploadSection title="Capacity & RSVP"><label>Attendee Cap<input type="number" placeholder="80" /></label><label>RSVP Cut-off Time<select><option>1 hour before</option><option>24 hours before</option><option>No cut-off</option></select></label></UploadSection><UploadSection title="Cover Image"><div className="dropzone">📁<strong>Upload a cover photo for your event</strong><small>JPG or PNG, min 1200x600px</small></div></UploadSection><div className="submit-row"><button type="button">Save as Draft</button><button type="button">Publish Event →</button></div></form></main></>
  );
}

const GROUPS_PAGE_SIZE = 9;
const GROUP_CATEGORY_OPTIONS = [
  ["sector_based", "Sector-based"],
  ["geography_based", "Geography-based"],
  ["women_founders", "Women Founders"],
  ["students", "Students"],
  ["investors", "Investors"],
  ["founder_general", "Founder / General"]
];
const GROUP_COLORS = ["#2456A0", "#1A7A4A", "#374151", "#9B3BB5", "#5B3DB5", "#B8760A", "#C84B2F"];
const GROUP_BANNERS = [
  [["bengaluru-founders", "bengaluru founders"], "/assets/group-bengaluru-founders.png"],
  [["ai-tech-founders", "ai tech founders", "ai founders"], "/assets/group-ai-tech-founders.png"],
  [["saas-tech-founders", "saas tech founders", "saas founders"], "/assets/group-saas-tech-founders.png"],
  [["agri-founders", "agri founders", "agritech"], "/assets/group-agri-founders.png"],
  [["d2c-e-commerce-founders", "d2c/e-commerce founders", "d2c ecommerce founders", "e-commerce"], "/assets/group-d2c-ecommerce-founders.png"],
  [["edtech-founders", "edtech founders"], "/assets/group-edtech-founders.png"]
];
const GROUP_ICONS = [
  ["agri", "🌿"],
  ["ai", "🤖"],
  ["saas", "💻"],
  ["d2c", "🛒"],
  ["commerce", "🛒"],
  ["edtech", "📚"],
  ["fintech", "💰"],
  ["women", "👩"],
  ["bengaluru", "🏙️"],
  ["founder", "🚀"]
];

const groupClass = (value = "") => value.toLowerCase().replaceAll("/", "").replaceAll("&", "and").replaceAll(" ", "-").replaceAll("_", "-");
const groupMemberCount = (group) => {
  const relation = group?.group_members;
  if (Array.isArray(relation)) return Number(relation[0]?.count ?? relation.length) || 0;
  return Number(relation?.count) || 0;
};
const groupTags = (group) => (group?.group_interests || []).map((item) => item.interest_tags?.label || item.interest_tags?.slug).filter(Boolean);
const groupIcon = (group) => {
  const text = `${group?.slug || ""} ${group?.name || ""} ${group?.category || ""}`.toLowerCase();
  return GROUP_ICONS.find(([key]) => text.includes(key))?.[1] || "👥";
};
const groupColor = (group) => GROUP_COLORS[Math.abs((group?.name || "").split("").reduce((sum, char) => sum + char.charCodeAt(0), 0)) % GROUP_COLORS.length];
const groupPrivacyLabel = (privacy = "public") => privacy === "invite_only" ? "Invite Only" : privacy.charAt(0).toUpperCase() + privacy.slice(1);
const groupPrivacyIcon = (privacy = "public") => privacy === "private" ? "🔒" : privacy === "invite_only" ? "🔑" : "🔓";
const groupLocation = (group) => group?.cities?.name || "Karnataka-wide";
const groupCategoryLabel = (category) => GROUP_CATEGORY_OPTIONS.find(([value]) => value === category)?.[1] || category || "Founder Group";
const groupBanner = (group) => {
  if (group?.banner_url) return group.banner_url;
  const haystack = `${group?.slug || ""} ${group?.name || ""}`.toLowerCase();
  return GROUP_BANNERS.find(([keys]) => keys.some((key) => haystack.includes(key)))?.[1] || "/assets/founder-meetup.png";
};
const slugify = (value) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function useGroupsPageData(page, reloadKey, userId) {
  const [state, setState] = React.useState({ groups: [], stats: null, featured: null, recommended: [], trending: [], memberships: {}, total: 0, loading: true, error: null });
  React.useEffect(() => {
    if (!supabase) {
      setState({ groups: [], stats: null, featured: null, recommended: [], trending: [], memberships: {}, total: 0, loading: false, error: new Error("Supabase is not configured.") });
      return undefined;
    }
    let cancelled = false;
    const from = (page - 1) * GROUPS_PAGE_SIZE;
    const to = page * GROUPS_PAGE_SIZE - 1;
    setState((current) => ({ ...current, loading: true, error: null }));
    Promise.all([
      supabase.from("platform_stats").select("*").single(),
      supabase.from("groups").select("id, slug, name, short_description, banner_url, logo_url, privacy_type, status, group_members ( count )").eq("status", "active").eq("is_featured", true).limit(1).maybeSingle(),
      supabase.from("groups").select("id, slug, name, short_description, category, city_id, privacy_type, logo_url, banner_url, status, created_at, cities ( name ), group_members ( count ), group_interests ( interest_tags ( label, slug ) )").eq("status", "active").order("created_at", { ascending: false }).limit(4),
      supabase.from("groups").select("id, slug, name, logo_url, category, group_members ( count )").eq("status", "active").order("created_at", { ascending: false }).limit(5),
      supabase.from("groups").select("id, slug, name, short_description, category, privacy_type, logo_url, banner_url, status, created_at, cities ( name ), group_members ( count ), group_interests ( interest_tags ( label ) )", { count: "exact" }).eq("status", "active").order("created_at", { ascending: false }).range(from, to)
    ]).then(async ([statsResult, featuredResult, recommendedResult, trendingResult, groupsResult]) => {
      if (cancelled) return;
      if (groupsResult.error) throw groupsResult.error;
      const groups = groupsResult.data || [];
      let memberships = {};
      if (userId && groups.length) {
        const membershipResult = await supabase.from("group_members").select("group_id, group_role").eq("profile_id", userId).in("group_id", groups.map((group) => group.id));
        if (!membershipResult.error) memberships = Object.fromEntries((membershipResult.data || []).map((membership) => [membership.group_id, membership.group_role]));
      }
      setState({
        groups,
        stats: statsResult.error ? null : statsResult.data,
        featured: featuredResult.error ? null : featuredResult.data,
        recommended: recommendedResult.error ? [] : recommendedResult.data || [],
        trending: trendingResult.error ? [] : trendingResult.data || [],
        memberships,
        total: groupsResult.count ?? groups.length,
        loading: false,
        error: null
      });
    }).catch((error) => {
      if (!cancelled) setState((current) => ({ ...current, loading: false, error }));
    });
    return () => { cancelled = true; };
  }, [page, reloadKey, userId]);
  return state;
}

function GroupsHeader({ stats, total, loading }) {
  const values = [
    [stats?.total_active_groups ?? total ?? 0, "Active Groups"],
    [stats?.total_founders ?? 0, "Members"],
    ["—", "Discussions This Week"]
  ];
  return <section className="groups-page-header"><Breadcrumb items={["Groups"]} /><div className="groups-title-row"><div><h1>Founder Groups</h1><p>Join focused communities of Karnataka founders, operators, and builders working in the same space as you.</p></div><div className="groups-header-side"><div className="groups-header-stats">{values.map(([value, label]) => <div key={label}>{loading ? <i className="people-stat-skeleton"></i> : <strong>{value}</strong>}<span>{label}</span></div>)}</div><a className="button primary" href="/groups/create">＋ Create Group</a></div></div></section>;
}

function FeaturedGroupBanner({ group, onJoin, membership }) {
  if (!group) return null;
  const joined = Boolean(membership);
  return <section className="featured-group-banner"><div><span className="featured-pill">🔥 Featured Group of the Week</span><h2>{group.name}</h2><p>{group.short_description}</p><div className="featured-meta"><span>👥 {groupMemberCount(group)} Members</span><span>💬 Discussions pending</span><span className="public-meta">{groupPrivacyIcon(group.privacy_type)} {groupPrivacyLabel(group.privacy_type)} Group</span></div><div className="featured-actions"><button className="button primary" onClick={() => onJoin(group)}>{joined ? "✓ Joined" : group.privacy_type === "invite_only" ? "Request to Join" : "Join Group"}</button><a className="button ghost" href={`/groups/${group.slug}`}>View Group →</a></div></div><div className="featured-group-side"><div className="member-cluster">{Array.from({ length: Math.min(6, Math.max(1, groupMemberCount(group))) }, (_, index) => <span key={index}>{groupIcon(group)}</span>)}</div><small>{groupMemberCount(group)} members</small></div></section>;
}

function RecommendedGroups({ groups, memberships, onJoin }) {
  if (!groups.length) return null;
  return <section className="recommended-groups"><div className="recommended-header"><div><h2>Recommended for You</h2><p>Based on available active groups</p></div><a href="#all">Browse All →</a></div><div className="recommended-row">{groups.map((group) => <article key={group.id}><div><span>{groupIcon(group)}</span><h3>{group.name}</h3></div><p>{groupMemberCount(group)} Members · {groupPrivacyIcon(group.privacy_type)} {groupPrivacyLabel(group.privacy_type)}</p><small>{groupLocation(group)}</small><button className={memberships[group.id] ? "joined" : ""} onClick={() => onJoin(group)}>{memberships[group.id] ? "✓ Joined" : "Join Group"}</button></article>)}</div></section>;
}

function GroupsToolbar({ total, query, onQuery }) {
  return <section className="groups-tabs"><div className="groups-tab-row"><nav>{["Browse All", "Recommended", "My Groups", "Featured"].map((tab, index) => <button className={index === 0 ? "active" : ""} key={tab}>{tab}</button>)}</nav><label className="select-filter"><span>Sort:</span><select><option>Newest</option><option>Most Members</option><option>A-Z</option></select></label></div><div className="groups-filter-row"><div className="resource-search"><Search size={16}/><input value={query} onChange={(event) => onQuery(event.target.value)} placeholder="Search groups by name or keyword..." /></div>{[["Category:",["All Categories","Sector-based","Geography-based","Women Founders"]],["Location:",["All Cities","Bengaluru","Karnataka-wide"]],["Privacy:",["All","Public","Private","Invite-Only"]]].map(([label,opts]) => <label className="select-filter" key={label}><span>{label}</span><select>{opts.map(o => <option key={o}>{o}</option>)}</select></label>)}<button className="mobile-filter"><Filter size={16}/>Filter & Sort</button><p>Showing {total} {total === 1 ? "group" : "groups"}</p></div></section>;
}

function TrendingGroups({ groups }) {
  if (!groups.length) return null;
  return <section className="trending-groups"><div><h2>🔥 Trending Groups</h2><span><button>‹</button><button>›</button></span></div><div className="trending-row">{groups.map((group,index) => <article key={group.id}><b>{index+1}</b><span>{groupIcon(group)}</span><div><strong>{group.name}</strong><small>{groupMemberCount(group)} members</small></div></article>)}</div></section>;
}

function GroupDirectoryCard({ group, membership, onJoin, onLeave, busy }) {
  const joined = Boolean(membership);
  const privacy = group.privacy_type || "public";
  const memberCount = groupMemberCount(group);
  const tags = groupTags(group).slice(0, 3);
  return <article className="group-directory-card" style={{"--group-color":groupColor(group)}}><a className={`group-banner ${groupClass(group.category || group.slug)}`} style={{ backgroundImage: `linear-gradient(to top, rgba(29,43,83,.6), transparent), url("${groupBanner(group)}")` }} href={`/groups/${group.slug}`}><span className={`privacy-badge ${groupClass(groupPrivacyLabel(privacy))}`}>{groupPrivacyIcon(privacy)} {groupPrivacyLabel(privacy)}</span><small>Active</small></a><div className="group-directory-body"><span className="group-directory-logo">{group.logo_url ? <img src={group.logo_url} alt="" /> : groupIcon(group)}</span><a href={`/groups/${group.slug}`}><h3>{group.name}</h3></a><span className={`group-category-badge ${groupClass(group.category || "Founder")}`}>{groupCategoryLabel(group.category)}</span><p>{group.short_description || "A focused community for Karnataka founders."}</p><small>📍 {groupLocation(group)}</small><div className="person-tags group-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}{!tags.length && <span>Community</span>}</div><div className="group-member-row"><AvatarStack count={`${memberCount} Members`}/><span>Created {relativeTime(group.created_at)}</span></div><div className="group-card-footer"><span>💬 Discussions pending</span>{joined ? <button className="joined" disabled={busy} onClick={() => onLeave(group)}>✓ Joined</button> : <button disabled={busy} onClick={() => onJoin(group)}>{privacy === "invite_only" ? "Request to Join" : "Join Group"}</button>}</div></div></article>;
}

function GroupsLoadingState() {
  return <section className="groups-directory-grid">{Array.from({ length: 6 }, (_, index) => <article className="group-directory-card groups-card-skeleton" key={index}><div className="group-banner"></div><div className="group-directory-body"><i></i><span></span><span></span><span></span></div></article>)}</section>;
}

function GroupsErrorState({ error, onRetry }) {
  return <section className="people-error groups-message"><strong>Could not load groups.</strong><p>{error?.message || "Check the Supabase connection and try again."}</p><button onClick={onRetry}>Try Again</button></section>;
}

function GroupsEmptyState() {
  return <section className="people-empty groups-empty"><div><i>👥</i><h2>No groups yet</h2><p>Be the first founder to create a group and bring people together.</p><a className="button primary" href="/groups/create">Create Group</a></div></section>;
}

function GroupsPage() {
  const { user } = useAuth();
  const [page, setPage] = React.useState(1);
  const [query, setQuery] = React.useState("");
  const [reloadKey, setReloadKey] = React.useState(0);
  const [busyGroupId, setBusyGroupId] = React.useState(null);
  const { groups, stats, featured, recommended, trending, memberships, total, loading, error } = useGroupsPageData(page, reloadKey, user?.id);
  const visibleGroups = groups.filter((group) => `${group.name || ""} ${group.short_description || ""} ${group.category || ""} ${groupLocation(group)} ${groupTags(group).join(" ")}`.toLowerCase().includes(query.trim().toLowerCase()));
  const joinGroup = async (group) => {
    if (!user) {
      window.location.href = "/login";
      return;
    }
    setBusyGroupId(group.id);
    if (group.privacy_type === "invite_only") {
      await supabase.from("notifications").insert({ profile_id: user.id, notification_type: "group_join_request", title: "Group join request", message: `Requested to join ${group.name}`, reference_table: "groups", reference_id: group.id });
    } else {
      const { error } = await supabase.from("group_members").insert({ group_id: group.id, profile_id: user.id, group_role: "member" });
      if (!error) await supabase.from("xp_events").insert({ profile_id: user.id, action_type: "group_joined", points: 5, reference_table: "groups", reference_id: group.id });
    }
    setBusyGroupId(null);
    setReloadKey((key) => key + 1);
  };
  const leaveGroup = async (group) => {
    if (!user) return;
    setBusyGroupId(group.id);
    await supabase.from("group_members").delete().eq("group_id", group.id).eq("profile_id", user.id);
    setBusyGroupId(null);
    setReloadKey((key) => key + 1);
  };
  const totalPages = Math.max(1, Math.ceil(total / GROUPS_PAGE_SIZE));
  return <><Header/><main><GroupsHeader stats={stats} total={total} loading={loading}/>{!loading && !error && <FeaturedGroupBanner group={featured} memberships={memberships} membership={featured ? memberships[featured.id] : null} onJoin={joinGroup}/>}<RecommendedGroups groups={recommended} memberships={memberships} onJoin={joinGroup}/><GroupsToolbar total={total} query={query} onQuery={setQuery}/><TrendingGroups groups={trending}/>{loading && <GroupsLoadingState/>}{error && <GroupsErrorState error={error} onRetry={() => setReloadKey((key) => key + 1)}/>} {!loading && !error && groups.length === 0 && <GroupsEmptyState/>}{!loading && !error && groups.length > 0 && <section className="groups-directory-grid" id="all">{visibleGroups.map(group => <GroupDirectoryCard group={group} membership={memberships[group.id]} onJoin={joinGroup} onLeave={leaveGroup} busy={busyGroupId === group.id} key={group.id}/>)}{visibleGroups.length === 0 && <p className="people-no-results">No groups match these filters.</p>}{totalPages > 1 && <button className="load-more" onClick={() => setPage((value) => Math.min(totalPages, value + 1))} disabled={page === totalPages}>{page === totalPages ? "All Groups Loaded" : "Load More Groups"}</button>}</section>}</main><Footer/></>;
}

function useGroupDetail(slug, userId, reloadKey) {
  const [state, setState] = React.useState({ group: null, members: [], events: [], files: [], myRole: null, loading: true, error: null });
  React.useEffect(() => {
    if (!supabase || !slug) return undefined;
    let cancelled = false;
    setState((current) => ({ ...current, loading: true, error: null }));
    Promise.all([
      supabase.from("groups").select("*, cities ( name ), group_rules ( rule_text, rule_order ), group_interests ( interest_tags ( label ) ), group_members ( count )").eq("slug", slug).maybeSingle()
    ]).then(async ([groupResult]) => {
      if (cancelled) return;
      if (groupResult.error) throw groupResult.error;
      const group = groupResult.data;
      const pendingRoleResult = group && userId ? await supabase.from("group_members").select("group_role").eq("group_id", group.id).eq("profile_id", userId).maybeSingle() : { data: null };
      const pendingRole = pendingRoleResult.data?.group_role || null;
      if (!group || (group.status !== "active" && group.created_by !== userId && pendingRole !== "admin")) {
        setState({ group: null, members: [], events: [], files: [], myRole: null, loading: false, error: null });
        return;
      }
      const [membersResult, eventsResult, filesResult, roleResult] = await Promise.all([
        supabase.from("group_members").select("profile_id, group_role, joined_at, profiles ( id, username, display_name, role, avatar_url, bio )").eq("group_id", group.id).order("joined_at", { ascending: true }),
        supabase.from("events").select("id, title, start_at, status").eq("group_id", group.id).order("start_at", { ascending: true }).limit(6),
        supabase.from("group_files").select("*").eq("group_id", group.id).order("created_at", { ascending: false }).limit(12),
        userId ? supabase.from("group_members").select("group_role").eq("group_id", group.id).eq("profile_id", userId).maybeSingle() : Promise.resolve({ data: null })
      ]);
      setState({ group, members: membersResult.error ? [] : membersResult.data || [], events: eventsResult.error ? [] : eventsResult.data || [], files: filesResult.error ? [] : filesResult.data || [], myRole: roleResult.data?.group_role || pendingRole, loading: false, error: null });
    }).catch((error) => {
      if (!cancelled) setState((current) => ({ ...current, loading: false, error }));
    });
    return () => { cancelled = true; };
  }, [slug, userId, reloadKey]);
  return state;
}

function GroupDetailPage({ slug }) {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = React.useState("Discussions");
  const [reloadKey, setReloadKey] = React.useState(0);
  const { group, members, events, files, myRole, loading, error } = useGroupDetail(slug, user?.id, reloadKey);
  const isAdmin = myRole === "admin";
  const removeMember = async (profileId) => {
    if (!group || !isAdmin || profileId === user?.id) return;
    await supabase.from("group_members").delete().eq("group_id", group.id).eq("profile_id", profileId);
    setReloadKey((key) => key + 1);
  };
  if (loading) return <><Header/><main className="group-detail-page"><section className="profile-page-loading">Loading group...</section></main><Footer/></>;
  if (error) return <><Header/><main className="group-detail-page"><GroupsErrorState error={error} onRetry={() => setReloadKey((key) => key + 1)}/></main><Footer/></>;
  if (!group) return <><Header/><main className="profile-signed-out"><h1>Group unavailable</h1><p>This group is not active or does not exist.</p><a className="button secondary" href="/groups">Back to Groups</a></main><Footer/></>;
  const rules = (group.group_rules || []).slice().sort((a, b) => (a.rule_order || 0) - (b.rule_order || 0));
  const admins = members.filter((member) => member.group_role === "admin");
  return <><Header/><main className="group-detail-page"><Breadcrumb items={["Groups", group.name]}/><section className="group-detail-banner" style={{ backgroundImage: `linear-gradient(to top, rgba(29,43,83,.85), transparent), url("${groupBanner(group)}")` }}><div><span className="group-directory-logo" style={{"--group-color":groupColor(group)}}>{group.logo_url ? <img src={group.logo_url} alt="" /> : groupIcon(group)}</span><h1>{group.name}</h1><span className={`privacy-badge ${groupClass(groupPrivacyLabel(group.privacy_type))}`}>{groupPrivacyIcon(group.privacy_type)} {groupPrivacyLabel(group.privacy_type)}</span><small>Active</small><p>{groupMemberCount(group)} Members · {groupLocation(group)}</p></div></section><section className="group-action-bar"><div><strong>{myRole ? `✓ You're a ${myRole}` : "Join this group to participate"}</strong></div><div><button>🔔 Notifications</button><button>👤 Invite Members</button><a className="button secondary" href="/groups">↗</a></div></section><nav className="group-detail-tabs">{["Discussions","Events","Members","Files","About"].map((tab) => <button className={activeTab===tab?"active":""} onClick={() => setActiveTab(tab)} key={tab}>{tab}</button>)}</nav><section className="group-discussion-layout"><div className="discussion-feed"><GroupTabContent tab={activeTab} group={group} members={members} events={events} files={files} rules={rules} isAdmin={isAdmin} onRemoveMember={removeMember}/></div><aside className="group-detail-sidebar"><GroupWidget title="About This Group"><p>{group.short_description || group.full_description || "A focused founder group on Mundhe Banni."}</p><small>👥 {groupMemberCount(group)} Members</small><small>📍 {groupLocation(group)}</small><small>🗓 Est. {group.created_at ? new Date(group.created_at).toLocaleDateString("en-IN", { month: "short", year: "numeric" }) : "Recently"}</small></GroupWidget><GroupWidget title="Admins & Moderators">{admins.length ? admins.map((member) => <div className="admin-row" key={member.profile_id}><span>{(member.profiles?.display_name || member.profiles?.username || "A").slice(0,2).toUpperCase()}</span><strong>{member.profiles?.display_name || member.profiles?.username || "Admin"}</strong><small>{member.group_role}</small></div>) : <p>No admins listed.</p>}</GroupWidget><GroupWidget title="Recently Joined"><AvatarStack count={`${Math.max(0, members.length - 4)} more members`}/><button className="text-action" onClick={() => setActiveTab("Members")}>View All Members →</button></GroupWidget></aside></section></main>{isAdmin && <button className="group-admin-fab">⚙️</button>}</>;
}

function GroupTabContent({ tab, group, members, events, files, rules, isAdmin, onRemoveMember }) {
  if (tab === "Discussions") {
    return <GroupForumTopics group={group} />;
  }
  if (tab === "Members") return <div className="group-member-list">{members.map((member) => <article className="group-member-card" key={member.profile_id}><MemberAvatar name={member.profiles?.display_name || member.profiles?.username} role={member.profiles?.role} avatarUrl={member.profiles?.avatar_url}/><div><strong>{member.profiles?.display_name || member.profiles?.username || "Member"}</strong><RoleBadge role={member.profiles?.role}/><small>Joined {member.joined_at ? relativeTime(member.joined_at) : "recently"}</small></div>{isAdmin && member.group_role !== "admin" && <button onClick={() => onRemoveMember(member.profile_id)}>Remove</button>}</article>)}</div>;
  if (tab === "Events") return events.length ? <div className="group-simple-list">{events.map((event) => <article key={event.id}><strong>{event.title}</strong><small>{event.start_at ? new Date(event.start_at).toLocaleString("en-IN") : "Date pending"}</small></article>)}</div> : <div className="group-tab-empty"><CalendarDays size={30}/><h3>No events yet for this group.</h3></div>;
  if (tab === "Files") return files.length ? <div className="group-simple-list">{files.map((file) => <article key={file.id}><strong>{file.file_name || file.title || "Group file"}</strong><small>{file.created_at ? relativeTime(file.created_at) : "recently"}</small></article>)}</div> : <div className="group-tab-empty"><FileText size={30}/><h3>No files shared yet.</h3></div>;
  return <div className="group-about-tab"><h2>About {group.name}</h2><p>{group.full_description || group.short_description || "No full description has been added yet."}</p><h3>Community Rules</h3>{rules.length ? <ol>{rules.map((rule) => <li key={`${rule.rule_order}-${rule.rule_text}`}>{rule.rule_text}</li>)}</ol> : <p>No rules added yet.</p>}</div>;
}

function GroupForumTopics({ group }) {
  const [state, setState] = React.useState({ topics: [], loading: true, error: null });
  React.useEffect(() => {
    if (!supabase || !group?.id) {
      setState({ topics: [], loading: false, error: supabase ? null : new Error("Supabase is not configured.") });
      return undefined;
    }
    let cancelled = false;
    supabase
      .from("forum_topics")
      .select("*, profiles!forum_topics_author_id_fkey ( id, username, display_name, avatar_url, role ), forum_categories ( id, slug, name, color_hex ), forum_topic_tags ( interest_tags ( id, label, slug ) )")
      .eq("group_id", group.id)
      .is("deleted_at", null)
      .order("last_activity_at", { ascending: false })
      .then(({ data, error }) => {
        if (!cancelled) setState({ topics: data || [], loading: false, error });
      });
    return () => { cancelled = true; };
  }, [group?.id]);
  if (state.loading) return <SkeletonList />;
  if (state.error) return <div className="group-tab-empty"><MessageCircle size={30}/><h3>Could not load group discussions.</h3><p>{state.error.message}</p></div>;
  return <div><div className="discussion-sort"><strong>{state.topics.length} discussions</strong><a href={`/community/new?group_id=${group.id}`}>+ Start Discussion in This Group</a></div>{state.topics.length ? <div className="community-topic-list">{state.topics.map((topic) => <CommunityTopicRow topic={topic} category={topic.forum_categories} key={topic.id}/>)}</div> : <div className="group-tab-empty"><MessageCircle size={30}/><h3>No discussions yet.</h3><p>Start the first discussion for {group.name}.</p><a className="button primary" href={`/community/new?group_id=${group.id}`}>Start Discussion</a></div>}</div>;
}

function GroupWidget({title,children}) {
  return <section className="group-widget"><h3>{title}</h3>{children}</section>;
}

function CreateGroupPage() {
  const { user, loading } = useAuth();
  const [meta, setMeta] = React.useState({ cities: [], tags: [] });
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [privacy, setPrivacy] = React.useState("public");
  const [filePermission, setFilePermission] = React.useState("admin_only");
  const [rules, setRules] = React.useState(["Be respectful and constructive in all discussions.", "No spam, self-promotion, or unsolicited DMs.", "Keep discussions relevant to the group's focus area."]);
  const [form, setForm] = React.useState({ name: "", short_description: "", full_description: "", category: "", city_id: "" });
  const [submitting, setSubmitting] = React.useState(false);
  const [message, setMessage] = React.useState(null);

  React.useEffect(() => {
    if (!supabase) return undefined;
    let cancelled = false;
    Promise.all([
      supabase.from("cities").select("id, name").order("name", { ascending: true }),
      supabase.from("interest_tags").select("id, label, slug").order("label", { ascending: true })
    ]).then(([citiesResult, tagsResult]) => {
      if (!cancelled) setMeta({ cities: citiesResult.error ? [] : citiesResult.data || [], tags: tagsResult.error ? [] : tagsResult.data || [] });
    });
    return () => { cancelled = true; };
  }, []);

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));
  const toggleTag = (tagId) => setSelectedTags((current) => current.includes(tagId) ? current.filter((id) => id !== tagId) : [...current, tagId]);
  const createGroupRecord = async (basePayload) => {
    const fallbacksByCategory = {
      sector_based: ["sector_based", "sector", "industry", "general", null],
      geography_based: ["geography_based", "geography", "location", "city", "general", null],
      women_founders: ["women_founders", "women", "general", null],
      students: ["students", "student", "general", null],
      investors: ["investors", "investor", "general", null],
      founder_general: ["founder_general", "general", null]
    };
    const candidates = [...new Set(fallbacksByCategory[basePayload.category] || [basePayload.category, "general", null])];
    let lastError = null;
    for (const category of candidates) {
      const payload = { ...basePayload, category };
      const result = await supabase.from("groups").insert(payload).select().single();
      if (!result.error) return result;
      lastError = result.error;
      const isCategoryCheck = result.error.message?.includes("groups_category_check") || result.error.code === "23514";
      if (!isCategoryCheck) return result;
    }
    return { data: null, error: lastError };
  };
  const submit = async (event) => {
    event.preventDefault();
    if (!user) {
      window.location.href = "/login";
      return;
    }
    setSubmitting(true);
    setMessage(null);
    const baseSlug = slugify(form.name);
    const slug = `${baseSlug}-${Date.now().toString(36).slice(-4)}`;
    const { data: newGroup, error } = await createGroupRecord({
      slug,
      name: form.name,
      short_description: form.short_description,
      full_description: form.full_description,
      category: form.category,
      city_id: form.city_id || null,
      logo_url: null,
      banner_url: null,
      privacy_type: privacy,
      file_upload_permission: filePermission,
      created_by: user.id,
      status: "pending"
    });
    if (error) {
      setMessage({ type: "error", text: error.message || "Could not submit this group." });
      setSubmitting(false);
      return;
    }
    const cleanRules = rules.map((rule) => rule.trim()).filter(Boolean);
    await Promise.all([
      selectedTags.length ? supabase.from("group_interests").insert(selectedTags.map((tagId) => ({ group_id: newGroup.id, tag_id: tagId }))) : Promise.resolve(),
      cleanRules.length ? supabase.from("group_rules").insert(cleanRules.map((rule_text, index) => ({ group_id: newGroup.id, rule_order: index, rule_text }))) : Promise.resolve(),
      supabase.from("group_members").insert({ group_id: newGroup.id, profile_id: user.id, group_role: "admin" })
    ]);
    setSubmitting(false);
    setMessage({ type: "success", text: "Your group has been submitted for review. You'll be notified once it's approved." });
    window.setTimeout(() => { window.location.href = "/groups"; }, 1600);
  };

  if (loading) return <><Header/><main className="create-group-page"><p>Loading...</p></main><Footer/></>;
  if (!user) return <><Header/><main className="profile-signed-out"><Lock size={34}/><h1>Log in to create a group</h1><p>Group submissions are tied to your Mundhe Banni profile.</p><a className="button primary" href="/login">Log In</a></main><Footer/></>;

  return <><Header/><main className="create-group-page"><Breadcrumb items={["Groups","Create Group"]}/><h1>Create a New Group</h1><p>Groups are reviewed and approved by the Mundhe Banni admin team before going live.</p><div className="info-note">ℹ️ Your group submission will be reviewed. You'll receive an email once approved. You can use the platform normally while your group is pending review.</div><form className="upload-form" onSubmit={submit}><UploadSection title="Group Identity"><label>Group Name *<input value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="e.g. Bengaluru SaaS Founders" required/></label><label>Short Description *<input value={form.short_description} onChange={(event) => update("short_description", event.target.value)} placeholder="One line - what is this group about?" required/></label><label>Full Description<textarea value={form.full_description} onChange={(event) => update("full_description", event.target.value)} placeholder="Describe the group's purpose, who should join, and what members can expect."/></label><label>Category *<select value={form.category} onChange={(event) => update("category", event.target.value)} required><option value="">Select...</option>{GROUP_CATEGORY_OPTIONS.map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label><label>City / Region<select value={form.city_id} onChange={(event) => update("city_id", event.target.value)}><option value="">Karnataka-wide</option>{meta.cities.map((city) => <option value={city.id} key={city.id}>{city.name}</option>)}</select></label></UploadSection><UploadSection title="Branding"><label>Group Logo<div className="dropzone compact">Storage upload will be connected next. Submit without a logo for now.</div></label><label>Banner Image<div className="dropzone compact">Storage upload will be connected next. Submit without a banner for now.</div></label></UploadSection><UploadSection title="Privacy & Settings"><div className="privacy-selector">{[["🔓","public","Public","Anyone can find and join"],["🔒","private","Private","Auto-approved for this testing phase"],["🔑","invite_only","Invite Only","Request notification sent to admins"]].map(([icon,value,title,desc])=><label className={privacy===value?"selected":""} key={value}><input type="radio" name="privacy" checked={privacy===value} onChange={() => setPrivacy(value)}/>{icon}<strong>{title}</strong><small>{desc}</small></label>)}</div><label>Who can upload files?<div className="format-radios"><label><input type="radio" name="files" checked={filePermission==="admin_only"} onChange={() => setFilePermission("admin_only")}/>Group Admin only</label><label><input type="radio" name="files" checked={filePermission==="members"} onChange={() => setFilePermission("members")}/>All members</label></div></label><label>Interest Tags<div className="industry-pills selectable">{meta.tags.slice(0, 14).map((tag)=><button type="button" className={selectedTags.includes(tag.id)?"selected":""} onClick={() => toggleTag(tag.id)} key={tag.id}>{tag.label}</button>)}</div></label></UploadSection><UploadSection title="Community Rules (Optional)">{rules.map((rule,index)=><div className="rule-row" key={index}><span>{index+1}.</span><input value={rule} onChange={(event) => setRules((current) => current.map((item, itemIndex) => itemIndex === index ? event.target.value : item))}/><button type="button" onClick={() => setRules((current) => current.filter((_, itemIndex) => itemIndex !== index))}>×</button></div>)}<button className="button secondary" type="button" onClick={() => setRules((current) => [...current, ""])}>Add Rule</button></UploadSection>{message && <div className={`form-message ${message.type}`}>{message.text}</div>}<div className="submit-row"><button type="button">Save as Draft</button><button type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Submit for Review →"}</button><small>By creating a group you agree to Mundhe Banni's <a href="#guidelines">Community Guidelines</a>.</small></div></form></main></>;
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>Build Your Startup<br />Faster. <span>Together.</span></h1>
        <p>Mundhe Banni is Karnataka's most trusted network of founders, experts, investors and service providers.</p>
        <div className="hero-actions">
          <a className="button primary" href="/community"><Users size={17} />Join Community</a>
          <a className="button secondary" href="#events"><CalendarDays size={17} />Explore Events</a>
          <a className="button secondary" href="/people"><Search size={17} />Find People</a>
        </div>
      </div>
      <div className="hero-media">
        <img src="/assets/hero-networking.png" alt="Kannada entrepreneurs collaborating at a startup networking table" />
        <div className="hero-note connect">Connect</div>
        <div className="hero-note collaborate">Collaborate</div>
        <div className="hero-note grow">Grow</div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats-bar" aria-label="Community statistics">
      {stats.map(([Icon, value, label]) => (
        <div className="stat" key={label}><Icon /><div><strong>{value}</strong><span>{label}</span></div></div>
      ))}
    </section>
  );
}

function SectionHeader({ title, link }) {
  const href = link === "Go to Community" ? "/community" : "#view";
  return <div className="section-header"><h2>{title}</h2>{link && <a href={href}>{link} <ChevronRight size={15} /></a>}</div>;
}

function EventCards() {
  return (
    <section id="events" className="content-section">
      <SectionHeader title="Upcoming Events" link="View all events" />
      <div className="card-row carousel-row">
        {events.map(([title, date, location, count, cta, tone], index) => (
          <article className="event-card" key={title}>
            <div className={`event-image ${tone}`}>
              <div className="date-badge"><span>MAY</span><strong>{[24,25,27,30][index]}</strong></div>
              <Bookmark className="bookmark" size={20} />
            </div>
            <div className="card-body">
              <h3>{title}</h3>
              <p><CalendarDays size={14} />{date}</p>
              <p><MapPin size={14} />{location}</p>
              <div className="card-bottom"><AvatarStack count={count} /><button className={cta === "Get Tickets" ? "mini filled" : "mini"}>{cta}</button></div>
            </div>
          </article>
        ))}
        <button className="round-next" aria-label="Next events"><ChevronRight /></button>
      </div>
    </section>
  );
}

function CommunityPulse() {
  return (
    <section id="community" className="pulse-section">
      <SectionHeader title="Community Pulse" link="Go to Community" />
      <div className="pulse-grid">
        {pulses.map(([Icon, label, title, meta, tone]) => (
          <article className="pulse-card" key={title}>
            <span>{label}</span>
            <div><i className={tone}><Icon size={24} /></i><h3>{title}</h3></div>
            <p>{meta}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Groups() {
  return (
    <section id="groups" className="content-section">
      <SectionHeader title="Featured Groups" link="View all groups" />
      <div className="card-row carousel-row">
        {groups.map(([name, members, count, tone]) => (
          <article className="group-card" key={name}>
            <div className={`group-icon ${tone}`}>{tone === "agri" ? <Leaf /> : <Users />}</div>
            <h3>{name}</h3><p>{members}</p><p>Active discussions</p>
            <AvatarStack count={count} />
            <button className="join-outline">Join Group</button>
          </article>
        ))}
        <button className="round-next" aria-label="Next groups"><ChevronRight /></button>
      </div>
    </section>
  );
}

function Providers() {
  return (
    <section id="service-providers" className="content-section">
      <div className="provider-top">
        <h2>Top Rated Service Providers</h2>
        <div className="filters">{["All", "Legal", "Finance", "Technology", "Marketing", "HR", "More"].map((f) => <button className={f === "All" ? "selected" : ""} key={f}>{f}{f === "More" && <ChevronDown size={13} />}</button>)}</div>
      </div>
      <div className="card-row carousel-row">
        {providers.map(([name, category, rating, city, tone]) => (
          <article className="provider-card" key={name}>
            <div className="provider-head"><span className={`provider-logo ${tone}`}>{tone === "legal" ? "⚖" : tone === "fin" ? "fin" : "A"}</span><div><h3>{name}</h3><p>{category}</p></div><Bookmark size={18} /></div>
            <p className="rating"><Star size={15} fill="#E58A2B" />{rating}</p>
            <p><MapPin size={14} />{city}</p>
          </article>
        ))}
        <button className="round-next" aria-label="Next providers"><ChevronRight /></button>
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section id="resources" className="content-section">
      <SectionHeader title="Helpful Resources" link="View all resources" />
      <div className="resource-grid">
        {resources.map(([Icon, title, subtitle, tone]) => (
          <article className="resource-card" key={title}><i className={tone}><Icon size={22} /></i><div><h3>{title}</h3><p>{subtitle}</p></div></article>
        ))}
      </div>
    </section>
  );
}

function useForumCategories() {
  const [state, setState] = React.useState({ categories: fallbackCommunityCategories, loading: true, error: null });
  React.useEffect(() => {
    if (!supabase) {
      setState({ categories: fallbackCommunityCategories, loading: false, error: new Error("Supabase is not configured.") });
      return undefined;
    }
    let cancelled = false;
    supabase.from("forum_categories").select("*").eq("is_active", true).order("display_order", { ascending: true }).then(({ data, error }) => {
      if (!cancelled) setState({ categories: data?.length ? data : fallbackCommunityCategories, loading: false, error });
    });
    return () => { cancelled = true; };
  }, []);
  return state;
}

function useForumStats(userId) {
  const [state, setState] = React.useState({ stats: {}, loading: true, error: null });
  React.useEffect(() => {
    if (!supabase) {
      setState({ stats: {}, loading: false, error: new Error("Supabase is not configured.") });
      return undefined;
    }
    let cancelled = false;
    Promise.all([
      supabase.from("forum_topics").select("*", { count: "exact", head: true }).is("deleted_at", null),
      supabase.from("forum_replies").select("*", { count: "exact", head: true }).is("deleted_at", null),
      supabase.from("profiles").select("*", { count: "exact", head: true }),
      userId ? supabase.from("forum_bookmarks").select("*", { count: "exact", head: true }).eq("profile_id", userId) : Promise.resolve({ count: 0 })
    ]).then(([topics, replies, members, bookmarks]) => {
      if (!cancelled) setState({ stats: { topics: topics.count || 0, replies: replies.count || 0, members: members.count || 0, bookmarks: bookmarks.count || 0 }, loading: false, error: topics.error || replies.error || members.error || bookmarks.error });
    });
    return () => { cancelled = true; };
  }, [userId]);
  return state;
}

const fallbackContributors = [
  { id: "fallback-umesh", name: "Umesh", initials: "UM", score: 0 },
  { id: "fallback-prajwal", name: "Prajwal", initials: "PR", score: 0 },
  { id: "fallback-vasant", name: "Vasant", initials: "VA", score: 0 },
  { id: "fallback-shreelakshmee", name: "Shreelakshmee", initials: "SH", score: 0 }
];

const fallbackActiveMembers = fallbackContributors.map((member) => ({ ...member, activity: "recently" }));

function useForumContributors(reloadKey) {
  const [state, setState] = React.useState({ contributors: fallbackContributors, loading: true, error: null });
  React.useEffect(() => {
    if (!supabase) {
      setState({ contributors: fallbackContributors, loading: false, error: new Error("Supabase is not configured.") });
      return undefined;
    }
    let cancelled = false;
    const addContributor = (map, profile, points) => {
      if (!profile?.id) return;
      const name = profile.display_name || profile.username || "Community member";
      const current = map.get(profile.id) || { id: profile.id, name, initials: forumInitials(name), score: 0 };
      current.score += points;
      map.set(profile.id, current);
    };
    const load = async () => {
      const [topicsResult, repliesResult] = await Promise.all([
        supabase
          .from("forum_topics")
          .select("author_id, like_count, profiles!forum_topics_author_id_fkey ( id, username, display_name, avatar_url, role )")
          .is("deleted_at", null)
          .limit(200),
        supabase
          .from("forum_replies")
          .select("author_id, like_count, profiles!forum_replies_author_id_fkey ( id, username, display_name, avatar_url, role )")
          .is("deleted_at", null)
          .limit(500)
      ]);
      if (topicsResult.error || repliesResult.error) throw topicsResult.error || repliesResult.error;
      const contributorMap = new Map();
      (topicsResult.data || []).forEach((topic) => addContributor(contributorMap, topic.profiles, 10 + (topic.like_count || 0) * 2));
      (repliesResult.data || []).forEach((reply) => addContributor(contributorMap, reply.profiles, 3 + (reply.like_count || 0) * 2));
      const contributors = [...contributorMap.values()].sort((a, b) => b.score - a.score).slice(0, 5);
      if (!cancelled) setState({ contributors: contributors.length ? contributors : fallbackContributors, loading: false, error: null });
    };
    setState((current) => ({ ...current, loading: true, error: null }));
    load().catch((error) => {
      if (!cancelled) setState({ contributors: fallbackContributors, loading: false, error });
    });
    return () => { cancelled = true; };
  }, [reloadKey]);
  return state;
}

const inferForumTagSlugs = (topic) => {
  const text = `${topic.title || ""} ${topic.body || ""} ${topic.forum_categories?.slug || ""} ${topic.forum_categories?.name || ""}`.toLowerCase();
  const tags = new Set();
  if (topic.forum_categories?.slug) tags.add(topic.forum_categories.slug);
  if (text.includes("ai")) tags.add("ai");
  if (text.includes("fund") || text.includes("investor") || text.includes("angel")) tags.add("fundraising");
  if (text.includes("legal") || text.includes("compliance")) tags.add("legal");
  if (text.includes("product") || text.includes("onboarding")) tags.add("product");
  if (text.includes("hiring") || text.includes("operations")) tags.add("operations");
  if (text.includes("agri")) tags.add("agritech");
  if (text.includes("saas")) tags.add("saas");
  if (text.includes("marketing") || text.includes("customer")) tags.add("marketing");
  return [...tags].slice(0, 4);
};

async function backfillForumTopicTags(topics, userId) {
  if (!supabase || !userId || !topics.length) return;
  const missingTagTopics = topics.filter((topic) => !(topic.forum_topic_tags || []).length);
  if (!missingTagTopics.length) return;
  const neededSlugs = [...new Set(missingTagTopics.flatMap(inferForumTagSlugs))];
  if (!neededSlugs.length) return;
  const { data: tags, error } = await supabase.from("interest_tags").select("id, slug, label").in("slug", neededSlugs);
  if (error || !tags?.length) return;
  const tagBySlug = new Map(tags.map((tag) => [tag.slug, tag.id]));
  const rows = missingTagTopics.flatMap((topic) => inferForumTagSlugs(topic).map((slug) => tagBySlug.get(slug)).filter(Boolean).map((tagId) => ({ topic_id: topic.id, tag_id: tagId })));
  if (rows.length) await supabase.from("forum_topic_tags").insert(rows);
}

function useForumActiveMembers(reloadKey) {
  const [state, setState] = React.useState({ members: fallbackActiveMembers, loading: true, error: null });
  React.useEffect(() => {
    if (!supabase) {
      setState({ members: fallbackActiveMembers, loading: false, error: new Error("Supabase is not configured.") });
      return undefined;
    }
    let cancelled = false;
    const load = async () => {
      const [topicsResult, repliesResult] = await Promise.all([
        supabase
          .from("forum_topics")
          .select("created_at, profiles!forum_topics_author_id_fkey ( id, username, display_name, avatar_url, role )")
          .is("deleted_at", null)
          .order("created_at", { ascending: false })
          .limit(20),
        supabase
          .from("forum_replies")
          .select("created_at, profiles!forum_replies_author_id_fkey ( id, username, display_name, avatar_url, role )")
          .is("deleted_at", null)
          .order("created_at", { ascending: false })
          .limit(40)
      ]);
      if (topicsResult.error || repliesResult.error) throw topicsResult.error || repliesResult.error;
      const activeMap = new Map();
      [...(topicsResult.data || []), ...(repliesResult.data || [])].forEach((item) => {
        const profile = item.profiles;
        if (!profile?.id) return;
        const current = activeMap.get(profile.id);
        if (current && new Date(current.created_at) >= new Date(item.created_at)) return;
        const name = profile.display_name || profile.username || "Community member";
        activeMap.set(profile.id, { id: profile.id, name, initials: forumInitials(name), created_at: item.created_at, activity: relativeTime(item.created_at) });
      });
      const members = [...activeMap.values()].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 6);
      if (!cancelled) setState({ members: members.length ? members : fallbackActiveMembers, loading: false, error: null });
    };
    setState((current) => ({ ...current, loading: true, error: null }));
    load().catch((error) => {
      if (!cancelled) setState({ members: fallbackActiveMembers, loading: false, error });
    });
    return () => { cancelled = true; };
  }, [reloadKey]);
  return state;
}

function useForumNeedsAnswers(reloadKey) {
  const [state, setState] = React.useState({ topics: [], loading: true, error: null });
  React.useEffect(() => {
    if (!supabase) {
      setState({ topics: fallbackCommunityTopics.filter((topic) => topic.topic_type === "question" && !topic.best_answer_reply_id), loading: false, error: new Error("Supabase is not configured.") });
      return undefined;
    }
    let cancelled = false;
    supabase
      .from("forum_topics")
      .select("id, slug, title, reply_count, like_count, last_activity_at, created_at, topic_type, best_answer_reply_id")
      .eq("topic_type", "question")
      .is("best_answer_reply_id", null)
      .is("deleted_at", null)
      .order("reply_count", { ascending: true })
      .order("last_activity_at", { ascending: false })
      .limit(5)
      .then(({ data, error }) => {
        if (!cancelled) setState({ topics: data || [], loading: false, error });
      });
    return () => { cancelled = true; };
  }, [reloadKey]);
  return state;
}

const FORUM_PAGE_SIZE = 8;

function buildForumTopicRequest() {
  return supabase
    .from("forum_topics")
    .select("*, profiles!forum_topics_author_id_fkey ( id, username, display_name, avatar_url, role ), forum_categories ( id, slug, name, color_hex ), forum_topic_tags ( interest_tags ( id, label, slug ) )", { count: "exact" })
    .is("deleted_at", null)
    .is("group_id", null);
}

function applyForumTopicFilters(request, { activeCategory, activeTab, activePostType, sort, bookmarkIds }) {
  let nextRequest = request;
  if (activeCategory !== "All") nextRequest = nextRequest.eq("category_id", activeCategory);
  if (activeTab === "Featured") nextRequest = nextRequest.eq("is_pinned", true);
  if (activePostType) nextRequest = nextRequest.eq("topic_type", activePostType);
  if (bookmarkIds) nextRequest = nextRequest.in("id", bookmarkIds);
  if (sort === "likes") nextRequest = nextRequest.order("like_count", { ascending: false });
  else if (sort === "unanswered") nextRequest = nextRequest.eq("topic_type", "question").eq("reply_count", 0).order("created_at", { ascending: false });
  else nextRequest = nextRequest.order("is_pinned", { ascending: false }).order("last_activity_at", { ascending: false });
  return nextRequest;
}

function useForumTopics({ activeCategory, activeTab, activeTag, activeTagCategorySlug, activePostType, query, sort, userId, page, reloadKey }) {
  const [state, setState] = React.useState({ topics: fallbackCommunityTopics, total: 0, loading: true, error: null, usedFallbackSearch: false });
  React.useEffect(() => {
    if (!supabase) {
      setState({ topics: fallbackCommunityTopics, total: fallbackCommunityTopics.length, loading: false, error: new Error("Supabase is not configured."), usedFallbackSearch: false });
      return undefined;
    }
    let cancelled = false;
    const load = async () => {
      const cleanQuery = query.trim();
      const from = 0;
      const to = page * FORUM_PAGE_SIZE - 1;
      let bookmarkIds = null;
      if (activeTab === "Following" && userId) {
        const { data: bookmarks, error: bookmarkError } = await supabase.from("forum_bookmarks").select("topic_id").eq("profile_id", userId);
        if (bookmarkError) throw bookmarkError;
        bookmarkIds = (bookmarks || []).map((bookmark) => bookmark.topic_id);
        if (!bookmarkIds.length) {
          if (!cancelled) setState({ topics: [], total: 0, loading: false, error: null, usedFallbackSearch: false });
          return;
        }
      }
      let tagTopicIds = null;
      let tagCategoryIds = null;
      let useTagTextFallback = false;
      if (activeTag) {
        const [taggedResult, categoryResult] = await Promise.all([
          supabase
            .from("forum_topic_tags")
            .select("topic_id, interest_tags!inner ( slug, label )")
            .or(`slug.eq.${activeTag},label.eq.${activeTag}`, { foreignTable: "interest_tags" }),
          activeTagCategorySlug ? supabase.from("forum_categories").select("id").eq("slug", activeTagCategorySlug) : Promise.resolve({ data: [] })
        ]);
        const { data: taggedTopics, error: taggedError } = taggedResult;
        const { data: taggedCategories, error: categoryError } = categoryResult;
        if (taggedError) throw taggedError;
        if (categoryError) throw categoryError;
        tagTopicIds = [...new Set((taggedTopics || []).map((item) => item.topic_id).filter(Boolean))];
        tagCategoryIds = [...new Set((taggedCategories || []).map((category) => category.id).filter(Boolean))];
        useTagTextFallback = !tagTopicIds.length && !tagCategoryIds.length;
      }
      let request = applyForumTopicFilters(buildForumTopicRequest(), { activeCategory, activeTab, activePostType, sort, bookmarkIds }).range(from, to);
      if (tagCategoryIds?.length) request = request.in("category_id", tagCategoryIds);
      if (tagTopicIds?.length) request = request.in("id", tagTopicIds);
      if (useTagTextFallback) request = request.or(`title.ilike.%${activeTag}%,body.ilike.%${activeTag}%`);
      if (cleanQuery) request = request.textSearch("body_search", cleanQuery, { type: "websearch" });
      let { data, error, count } = await request;
      let usedFallbackSearch = false;
      if (!error && cleanQuery && (!data || data.length === 0)) {
        const escaped = cleanQuery.replaceAll("%", "\\%").replaceAll("_", "\\_");
        let fallbackRequest = applyForumTopicFilters(buildForumTopicRequest(), { activeCategory, activeTab, activePostType, sort, bookmarkIds })
          .or(`title.ilike.%${escaped}%,body.ilike.%${escaped}%`)
          .range(from, to);
        if (tagCategoryIds?.length) fallbackRequest = fallbackRequest.in("category_id", tagCategoryIds);
        if (tagTopicIds?.length) fallbackRequest = fallbackRequest.in("id", tagTopicIds);
        if (useTagTextFallback) fallbackRequest = fallbackRequest.or(`title.ilike.%${activeTag}%,body.ilike.%${activeTag}%`);
        const fallbackResult = await fallbackRequest;
        data = fallbackResult.data;
        error = fallbackResult.error;
        count = fallbackResult.count;
        usedFallbackSearch = true;
      }
      if (error) throw error;
      const topics = data || [];
      const repairedTopics = userId
        ? await Promise.all(topics.map(async (topic) => {
          if (!shouldRepairForumSlug(topic)) return topic;
          const readableSlug = createForumSlug(topic.title, topic.id);
          const { data: updatedTopic, error: repairError } = await supabase
            .from("forum_topics")
            .update({ slug: readableSlug })
            .eq("id", topic.id)
            .select("slug")
            .single();
          return repairError || !updatedTopic?.slug ? topic : { ...topic, slug: updatedTopic.slug };
        }))
        : topics;
      if (userId) backfillForumTopicTags(repairedTopics, userId).catch((error) => console.warn("Forum tag backfill skipped", error.message));
      const displayTopics = repairedTopics.map((topic) => {
        if ((topic.forum_topic_tags || []).length) return topic;
        return { ...topic, forum_topic_tags: inferForumTagSlugs(topic).map((slug) => ({ interest_tags: { slug, label: slug } })) };
      });
      if (!cancelled) setState({ topics: displayTopics, total: count || 0, loading: false, error: null, usedFallbackSearch });
    };
    setState((current) => ({ ...current, loading: true, error: null }));
    load().catch((error) => {
      if (!cancelled) setState({ topics: fallbackCommunityTopics, total: fallbackCommunityTopics.length, loading: false, error, usedFallbackSearch: false });
    });
    return () => { cancelled = true; };
  }, [activeCategory, activeTab, activeTag, activeTagCategorySlug, activePostType, query, sort, userId, page, reloadKey]);
  return state;
}

function CommunityPage() {
  const { user } = useAuth();
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [activeTab, setActiveTab] = React.useState("All");
  const [activeTag, setActiveTag] = React.useState("");
  const [activePostType, setActivePostType] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState("latest");
  const [page, setPage] = React.useState(1);
  const [reloadKey, setReloadKey] = React.useState(0);
  const { categories, loading: categoriesLoading, error: categoriesError } = useForumCategories();
  const { stats, loading: statsLoading, error: statsError } = useForumStats(user?.id);
  const { contributors, loading: contributorsLoading } = useForumContributors(reloadKey);
  const { members: activeMembers, loading: activeMembersLoading } = useForumActiveMembers(reloadKey);
  const { topics: needsAnswerTopics, loading: needsAnswersLoading } = useForumNeedsAnswers(reloadKey);
  const tagCategoryAliases = { ai: "technology", funding: "fundraising", finance: "fundraising" };
  const tagCategorySlug = tagCategoryAliases[activeTag] || activeTag;
  const categorySlugs = new Set(["fundraising", "product", "legal", "marketing", "operations", "technology", "general"]);
  const activeTagCategorySlug = activeTag && categorySlugs.has(tagCategorySlug) ? tagCategorySlug : "";
  const { topics, total, loading: topicsLoading, error: topicsError, usedFallbackSearch } = useForumTopics({ activeCategory, activeTab, activeTag, activeTagCategorySlug, activePostType, query, sort, userId: user?.id, page, reloadKey });
  const categoryMap = new Map(categories.map((category) => [category.id, category]));
  const activeCategoryName = activeCategory === "All" ? "" : categories.find((category) => category.id === activeCategory)?.name || "selected category";
  const activeFilterLabels = [activeCategoryName, activeTag && `#${activeTag}`, activePostType && `${topicTypeIcon(activePostType)} ${activePostType}`, query.trim() && `"${query.trim()}"`, activeTab !== "All" && activeTab].filter(Boolean);
  const clearCommunityFilters = () => {
    setActiveCategory("All");
    setActiveTag("");
    setActivePostType("");
    setQuery("");
    setActiveTab("All");
    setSort("latest");
  };
  const offline = Boolean(categoriesError || topicsError || statsError);
  const forumError = categoriesError || topicsError || statsError;
  React.useEffect(() => {
    if (forumError) console.error("Native forum query failed", forumError);
  }, [forumError]);
  React.useEffect(() => {
    setPage(1);
  }, [activeCategory, activeTab, activeTag, activePostType, query, sort]);
  const startDiscussion = () => {
    if (!user) window.location.href = `/login?next=${encodeURIComponent("/community/new")}`;
    else window.location.href = "/community/new";
  };
  return (
    <>
      <Header />
      <main>
        <section className="community-header">
          <Breadcrumb items={["Community"]} />
          <div className="community-title-row">
            <div><h1>Community Discussions</h1><p>Ask questions, share ideas, and learn from Karnataka founders inside Mundhe Banni.</p></div>
            <div className="community-actions">
              <button onClick={startDiscussion}>+ Start Discussion</button>
              <small className={offline ? "offline" : ""}><i></i>{offline ? "Forum schema unavailable - showing sample content" : "Native Mundhe Banni forum"}</small>
            </div>
          </div>
        </section>
        {offline && <div className="community-warning">The custom forum tables are not available yet or Supabase returned an error. <strong>{forumError?.message || "Check Supabase table grants, RLS, and relationships."}</strong></div>}
        <CommunityStats stats={stats} loading={statsLoading} offline={offline} />
        <section className="community-tabs">
          <nav>{["All", "Featured", "My Groups", "Following"].map((tab) => <button className={activeTab === tab ? "active" : ""} key={tab} onClick={() => tab === "My Groups" ? window.location.href = "/groups" : !user && tab === "Following" ? window.location.href = `/login?next=${encodeURIComponent("/community")}` : setActiveTab(tab)}>{tab}{tab === "Following" && stats.bookmarks > 0 && <span>{stats.bookmarks}</span>}</button>)}</nav>
          <label className="select-filter"><span>Sort:</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="latest">Latest</option><option value="likes">Most Liked</option><option value="unanswered">Unanswered</option></select></label>
          <div className="view-toggle"><button aria-label="Grid view"><Grid3X3 size={16} /></button><button className="active" aria-label="List view"><List size={17} /></button></div>
        </section>
        <section className="community-search-row">
          <div className="community-search"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search discussions, questions, Kannada topics..." /></div>
          <div className="filter-chips">{query.trim() || activeTag || activePostType ? <>{query.trim() && <span>{query.trim()} ×</span>}{activeTag && <span>#{activeTag} ×</span>}{activePostType && <span>{topicTypeIcon(activePostType)} {activePostType} ×</span>}<button onClick={() => { setQuery(""); setActiveTag(""); setActivePostType(""); }}>Clear</button></> : <><span>native forum</span><span>Supabase</span></>}</div>
        </section>
        <CommunityCategoryFilter categories={categories} activeCategory={activeCategory} onCategory={setActiveCategory} loading={categoriesLoading} />
        <CommunityTagFilter activeTag={activeTag} onTag={setActiveTag} />
        <CommunityPostTypeFilter activePostType={activePostType} onPostType={setActivePostType} />
        {usedFallbackSearch && <div className="community-search-note">Showing broader title/body matches for this search.</div>}
        <section className="community-layout">
          <CommunityLeftRail categories={categories} activeCategory={activeCategory} onCategory={setActiveCategory} activeTag={activeTag} onTag={setActiveTag} activePostType={activePostType} onPostType={setActivePostType} loading={categoriesLoading} />
          <CommunityFeed topics={topics} total={total} page={page} onLoadMore={() => setPage((value) => value + 1)} categories={categoryMap} loading={topicsLoading} offline={Boolean(topicsError)} activeFilterLabels={activeFilterLabels} onClearFilters={clearCommunityFilters} onReload={() => setReloadKey((key) => key + 1)} />
          <CommunityRightRail topics={topics.length ? topics : fallbackCommunityTopics} activeMembers={activeMembers} activeMembersLoading={activeMembersLoading} needsAnswerTopics={needsAnswerTopics} needsAnswersLoading={needsAnswersLoading} contributors={contributors} contributorsLoading={contributorsLoading} />
        </section>
      </main>
      <Footer />
      <button className="community-mobile-start" onClick={startDiscussion}>+ Start Discussion</button>
    </>
  );
}

function CommunityStats({ stats, loading, offline }) {
  const values = [
    [MessageCircle, stats?.topics ?? "—", "Total Discussions"],
    [FileText, stats?.replies ?? "—", "Total Replies"],
    [Users, stats?.members ?? "—", "Members"],
    [TrendingUp, "v1", "Native Forum"],
    [CheckCircle2, offline ? "Setup" : "Live", "Forum Status"]
  ];
  return <section className="community-stats">{values.map(([Icon, value, label]) => <div key={label}>{loading ? <span className="skeleton short"></span> : <><Icon size={22} /><p><strong>{value}</strong><span>{label}</span></p></>}</div>)}</section>;
}

function CommunityCategoryFilter({ categories, activeCategory, onCategory, loading }) {
  if (loading) return null;
  return <div className="community-category-strip"><button className={activeCategory === "All" ? "active" : ""} onClick={() => onCategory("All")}><span style={{ background: "#e58a2b" }}></span>All</button>{categories.map((category) => <button className={activeCategory === category.id ? "active" : ""} onClick={() => onCategory(category.id)} key={category.id}><span style={{ background: categoryColor(category) }}></span>{category.name}</button>)}</div>;
}

function CommunityLeftRail({ categories, activeCategory, onCategory, activeTag, onTag, activePostType, onPostType, loading }) {
  const postTypes = [["general", "💬", "General"], ["question", "❓", "Questions"], ["announcement", "📢", "Announcements"], ["idea", "💡", "Ideas"]];
  return (
    <aside className="community-left-rail">
      <h2>Categories</h2>
      {loading ? <SkeletonList /> : <div className="community-category-list"><button className={activeCategory === "All" ? "active" : ""} onClick={() => onCategory("All")}><i style={{ background: "#e58a2b" }}></i><span>All</span><small>{categories.reduce((sum, category) => sum + (category.topic_count || 0), 0)}</small></button>{categories.map((category) => <button className={activeCategory === category.id ? "active" : ""} key={category.id} onClick={() => onCategory(category.id)} style={{ "--category-color": categoryColor(category) }}><i></i><span>{category.name}</span><small>{category.topic_count || 0}</small></button>)}</div>}
      <a href="/community/new">Start in a category →</a>
      <hr />
      <h2>Popular Tags</h2>
      <CommunityTagFilter activeTag={activeTag} onTag={onTag} compact />
      <hr />
      <h2>Post Type</h2>
      {postTypes.map(([value, icon, label]) => <button className={`type-check ${activePostType === value ? "active" : ""}`} onClick={() => onPostType(activePostType === value ? "" : value)} key={value}><span>{icon}</span>{label}</button>)}
      <hr />
      <h2>My Activity</h2>
      <p className="login-note">Bookmarks appear in Following.</p>
    </aside>
  );
}

function CommunityTagFilter({ activeTag, onTag, compact = false }) {
  const tags = ["saas", "fundraising", "legal", "product", "agritech", "operations", "hiring", "ai"];
  return <div className={compact ? "community-tags compact" : "community-tag-strip"}>{tags.map((tag) => <button className={activeTag === tag ? "active" : ""} onClick={() => onTag(activeTag === tag ? "" : tag)} key={tag}>#{tag}</button>)}</div>;
}

function CommunityPostTypeFilter({ activePostType, onPostType }) {
  const postTypes = [["general", "💬", "General"], ["question", "❓", "Questions"], ["announcement", "📢", "Announcements"], ["idea", "💡", "Ideas"]];
  return <div className="community-post-type-strip">{postTypes.map(([value, icon, label]) => <button className={activePostType === value ? "active" : ""} onClick={() => onPostType(activePostType === value ? "" : value)} key={value}><span>{icon}</span>{label}</button>)}</div>;
}

function CommunityFeed({ topics, total, onLoadMore, categories, loading, offline, activeFilterLabels, onClearFilters }) {
  const pinned = topics.find((topic) => topic.is_pinned) || topics[0];
  const hasMore = topics.length < total;
  const hasFilters = activeFilterLabels?.length > 0;
  return (
    <section className="community-feed">
      {offline && <div className="feed-warning">Could not load live forum topics. Showing sample content until the forum schema is ready.</div>}
      {loading ? <SkeletonList rows={5} /> : <>
        {pinned && <article className="pinned-discourse-post"><small>📌 Featured</small><a href={topicUrl(pinned)}>{pinned.title}</a><p>{stripMarkdown(pinned.body).slice(0, 180)}</p><CommunityTopicMeta topic={pinned} category={pinned.forum_categories || categories.get(pinned.category_id)} /></article>}
        <div className="community-topic-list">{topics.length ? topics.map((topic) => <CommunityTopicRow topic={topic} category={topic.forum_categories || categories.get(topic.category_id)} key={topic.id} />) : <div className="group-tab-empty forum-empty-state"><MessageCircle size={30}/><h3>{hasFilters ? "No discussions match these filters." : "No discussions yet."}</h3><p>{hasFilters ? `Active filters: ${activeFilterLabels.join(", ")}` : "Start the first topic for this view."}</p>{hasFilters ? <button className="button secondary" onClick={onClearFilters}>Clear Filters</button> : <a className="button primary" href="/community/new">Start Discussion</a>}</div>}</div>
        {topics.length > 0 && <div className="community-feed-footer"><span>Showing {topics.length} of {total || topics.length} discussions</span>{hasMore && <button className="load-more" onClick={onLoadMore}>Load More Discussions</button>}</div>}
      </>}
    </section>
  );
}

function CommunityTopicRow({ topic, category }) {
  const tags = topicTags(topic).slice(0, 3);
  return (
    <article className={`community-topic-row ${topic.topic_type || "general"}`}>
      <i>{topicTypeIcon(topic.topic_type)}</i>
      <div>
        <div className="topic-badges"><span style={{ "--category-color": categoryColor(category) }}>{category?.name || "General"}</span>{topic.best_answer_reply_id && <em>✓ Answered</em>}{topic.is_pinned && <em>📌 Pinned</em>}</div>
        <a className="topic-title" href={topicUrl(topic)}>{topic.title}</a>
        <p>{stripMarkdown(topic.body || "").slice(0, 150)}{(topic.body || "").length > 150 ? "..." : ""}</p>
        <div className="topic-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <small><b>{forumAuthorName(topic)}</b> · {relativeTime(topic.last_activity_at || topic.created_at)}</small>
      </div>
      <aside><span>💬 {topic.reply_count || 0}</span><span>👁 {topic.view_count || 0}</span><span>▲ {topic.like_count || 0}</span><a href={topicUrl(topic)} aria-label="Open topic"><Bookmark size={16} /></a></aside>
    </article>
  );
}

function CommunityTopicMeta({ topic, category }) {
  return <div className="community-topic-meta"><span style={{ "--category-color": categoryColor(category) }}>{category?.name || "General"}</span><small>{topicTags(topic).slice(0, 2).join(" · ") || topic.topic_type || "general"}</small><small>{topic.reply_count || 0} replies · {relativeTime(topic.last_activity_at || topic.created_at)}</small></div>;
}

function CommunityRightRail({ topics, activeMembers, activeMembersLoading, needsAnswerTopics, needsAnswersLoading, contributors, contributorsLoading }) {
  return (
    <aside className="community-right-rail">
      <CommunityWidget title="🔥 Trending">{topics.slice(0, 5).map((topic, index) => <a className="trend-row" href={topicUrl(topic)} key={topic.id}><b>{index + 1}</b><span>{topic.title}<small>▲ {topic.like_count || 0} · 💬 {topic.reply_count || 0}</small></span></a>)}</CommunityWidget>
      <CommunityWidget title="👥 Active Today">{activeMembersLoading ? <SkeletonList rows={3} /> : <><div className="active-avatars">{activeMembers.map((member) => <span title={`${member.name} · ${member.activity}`} key={member.id}>{member.initials}</span>)}</div><div className="active-member-list">{activeMembers.slice(0, 3).map((member) => <p key={member.id}><strong>{member.name}</strong><small>{member.activity}</small></p>)}</div></>}</CommunityWidget>
      <CommunityWidget title="❓ Needs Answers">{needsAnswersLoading ? <SkeletonList rows={3} /> : needsAnswerTopics.length ? needsAnswerTopics.map((topic) => <a className="need-row" href={topicUrl(topic)} key={topic.id}>{topic.title}<small>{topic.reply_count || 0} replies · needs accepted answer</small></a>) : <p>No unanswered questions right now.</p>}</CommunityWidget>
      <CommunityWidget title="⭐ Top Contributors">{contributorsLoading ? <SkeletonList rows={3} /> : contributors.map((contributor, index) => <div className="contributor-row" key={contributor.id}><b>{index + 1}</b><span>{contributor.initials}</span><strong>{contributor.name}</strong><em>★ {contributor.score}</em></div>)}</CommunityWidget>
    </aside>
  );
}

function CommunityWidget({ title, children }) {
  return <div className="community-widget"><h2>{title}</h2>{children}</div>;
}

function CommunityNewTopicPage() {
  const { user } = useAuth();
  const { categories, loading } = useForumCategories();
  const [groups, setGroups] = React.useState([]);
  const [tags, setTags] = React.useState([]);
  const [topicType, setTopicType] = React.useState("question");
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [categoryId, setCategoryId] = React.useState("");
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [groupId, setGroupId] = React.useState(new URLSearchParams(window.location.search).get("group_id") || "");
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (!categoryId && categories.length) setCategoryId(String(categories.find((category) => category.slug === "general")?.id || categories[0].id));
  }, [categories, categoryId]);

  React.useEffect(() => {
    if (!supabase || !user) return undefined;
    let cancelled = false;
    Promise.all([
      supabase.from("group_members").select("group_id, groups ( id, name )").eq("profile_id", user.id),
      supabase.from("interest_tags").select("id, label, slug").order("label", { ascending: true }).limit(30)
    ]).then(([groupResult, tagResult]) => {
      if (!cancelled) {
        setGroups((groupResult.data || []).map((membership) => membership.groups).filter(Boolean));
        setTags(tagResult.data || []);
      }
    });
    return () => { cancelled = true; };
  }, [user]);

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    if (!user) {
      window.location.href = `/login?next=${encodeURIComponent(window.location.pathname + window.location.search)}`;
      return;
    }
    if (!supabase) {
      setError("Supabase is not configured.");
      return;
    }
    if (title.trim().length < 12 || body.trim().length < 20 || !categoryId) {
      setError("Add a clear title, useful body, and category before posting.");
      return;
    }
    setSubmitting(true);
    const slug = createForumSlug(title);
    const payload = {
      slug,
      title: title.trim(),
      body: body.trim(),
      topic_type: topicType,
      category_id: Number(categoryId),
      author_id: user.id,
      group_id: groupId || null
    };
    const { data, error: topicError } = await supabase.from("forum_topics").insert(payload).select("id, slug").single();
    if (topicError) {
      setError(topicError.message);
      setSubmitting(false);
      return;
    }
    if (selectedTags.length) await supabase.from("forum_topic_tags").insert(selectedTags.map((tagId) => ({ topic_id: data.id, tag_id: Number(tagId) })));
    await awardXp({ profile_id: user.id, action_type: "discussion_started", points: 10, reference_table: "forum_topics", reference_id: data.id });
    window.location.href = `/community/t/${data.slug}`;
  };

  if (!user) return <><Header/><main className="profile-signed-out"><Lock size={34}/><h1>Log in to start a discussion</h1><p>Forum posts are tied to your Mundhe Banni profile.</p><a className="button primary" href={`/login?next=${encodeURIComponent(window.location.pathname + window.location.search)}`}>Log In</a></main><Footer/></>;

  return (
    <>
      <Header />
      <main className="community-compose-page">
        <Breadcrumb items={["Community", "New Topic"]} />
        <section className="community-compose-card">
          <div><span className="featured-pill">Native Forum</span><h1>Start a Discussion</h1><p>Use markdown for simple formatting. Keep the question specific so other founders can help quickly.</p></div>
          <form className="discussion-composer-page" onSubmit={submit}>
            <label>Topic Type<div className="topic-type-picker">{[["question", "Question"], ["announcement", "Announcement"], ["idea", "Idea"], ["general", "General"]].map(([value, label]) => <button type="button" className={topicType === value ? "active" : ""} onClick={() => setTopicType(value)} key={value}>{topicTypeIcon(value)} {label}</button>)}</div></label>
            <label>Title<input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="What do you want to discuss?" required /></label>
            <label>Category<select value={categoryId} onChange={(event) => setCategoryId(event.target.value)} disabled={loading}>{categories.map((category) => <option value={category.id} key={category.id}>{category.name}</option>)}</select></label>
            <label>Scope<select value={groupId} onChange={(event) => setGroupId(event.target.value)}><option value="">Platform-wide</option>{groups.map((group) => <option value={group.id} key={group.id}>{group.name}</option>)}</select></label>
            <label>Tags<div className="tag-picker">{tags.map((tag) => <button type="button" className={selectedTags.includes(String(tag.id)) ? "active" : ""} onClick={() => setSelectedTags((current) => current.includes(String(tag.id)) ? current.filter((id) => id !== String(tag.id)) : [...current, String(tag.id)])} key={tag.id}>{tag.label || tag.slug}</button>)}</div></label>
            <label>Body<textarea value={body} onChange={(event) => setBody(event.target.value)} placeholder="Add context, what you tried, what kind of help you need, or the idea you want feedback on..." required /></label>
            <small>Markdown supported: **bold**, *italic*, bullet lists, links, and headings.</small>
            {error && <div className="login-error" role="alert"><strong>{error}</strong></div>}
            <button className="primary-login" type="submit" disabled={submitting}>{submitting ? "Posting..." : "Post Topic"}</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CommunityTopicDetailPage({ slug }) {
  const { user, profile } = useAuth();
  const [state, setState] = React.useState({ topic: null, replies: [], liked: false, bookmarked: false, likedReplies: new Set(), loading: true, error: null });
  const [replyBody, setReplyBody] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [replyError, setReplyError] = React.useState("");
  const [confirmDelete, setConfirmDelete] = React.useState(null);
  const isAdmin = isAdminProfile(profile);

  const loadTopic = React.useCallback(async () => {
    if (!supabase) {
      setState({ topic: null, replies: [], liked: false, bookmarked: false, likedReplies: new Set(), loading: false, error: new Error("Supabase is not configured.") });
      return;
    }
    setState((current) => ({ ...current, loading: true, error: null }));
    const { data: topic, error } = await supabase
      .from("forum_topics")
      .select("*, profiles!forum_topics_author_id_fkey ( id, username, display_name, avatar_url, role ), forum_categories ( id, slug, name, color_hex ), forum_topic_tags ( interest_tags ( id, label, slug ) )")
      .eq("slug", slug)
      .is("deleted_at", null)
      .maybeSingle();
    if (error || !topic) {
      setState({ topic: null, replies: [], liked: false, bookmarked: false, likedReplies: new Set(), loading: false, error: error || new Error("Topic not found.") });
      return;
    }
    if (shouldRepairForumSlug(topic) && (topic.author_id === user?.id || isAdminProfile(profile))) {
      const readableSlug = createForumSlug(topic.title, topic.id);
      if (readableSlug !== topic.slug) {
        const { data: repairedTopic, error: repairError } = await supabase
          .from("forum_topics")
          .update({ slug: readableSlug })
          .eq("id", topic.id)
          .select("slug")
          .single();
        if (!repairError && repairedTopic?.slug) {
          topic.slug = repairedTopic.slug;
          window.history.replaceState(null, "", `/community/t/${topic.slug}`);
        }
      }
    }
    await supabase.from("forum_topics").update({ view_count: (topic.view_count || 0) + 1 }).eq("id", topic.id);
    const [repliesResult, likedResult, bookmarkResult, likedRepliesResult] = await Promise.all([
      supabase.from("forum_replies").select("*, profiles!forum_replies_author_id_fkey ( id, username, display_name, avatar_url, role )").eq("topic_id", topic.id).is("deleted_at", null).order("created_at", { ascending: true }),
      user ? supabase.from("forum_likes").select("id").eq("profile_id", user.id).eq("topic_id", topic.id).maybeSingle() : Promise.resolve({ data: null }),
      user ? supabase.from("forum_bookmarks").select("topic_id").eq("profile_id", user.id).eq("topic_id", topic.id).maybeSingle() : Promise.resolve({ data: null }),
      user ? supabase.from("forum_likes").select("reply_id").eq("profile_id", user.id).not("reply_id", "is", null) : Promise.resolve({ data: [] })
    ]);
    const replies = repliesResult.data || [];
    const best = topic.best_answer_reply_id ? replies.find((reply) => reply.id === topic.best_answer_reply_id) : null;
    const orderedReplies = best ? [best, ...replies.filter((reply) => reply.id !== best.id)] : replies;
    setState({ topic, replies: orderedReplies, liked: Boolean(likedResult.data), bookmarked: Boolean(bookmarkResult.data), likedReplies: new Set((likedRepliesResult.data || []).map((like) => like.reply_id)), loading: false, error: repliesResult.error || likedRepliesResult.error || null });
  }, [slug, user, profile]);

  React.useEffect(() => { loadTopic(); }, [loadTopic]);

  const toggleTopicLike = async () => {
    if (!user) {
      window.location.href = `/login?next=${encodeURIComponent(window.location.pathname)}`;
      return;
    }
    const result = state.liked
      ? await supabase.from("forum_likes").delete().eq("profile_id", user.id).eq("topic_id", state.topic.id)
      : await supabase.from("forum_likes").insert({ profile_id: user.id, topic_id: state.topic.id });
    if (result.error) setReplyError(result.error.message);
    loadTopic();
  };
  const toggleReplyLike = async (reply) => {
    setReplyError("");
    if (!user) {
      window.location.href = `/login?next=${encodeURIComponent(window.location.pathname)}`;
      return;
    }
    const isLiked = state.likedReplies.has(reply.id);
    const result = isLiked
      ? await supabase.from("forum_likes").delete().eq("profile_id", user.id).eq("reply_id", reply.id)
      : await supabase.from("forum_likes").insert({ profile_id: user.id, reply_id: reply.id });
    if (result.error) setReplyError(result.error.message);
    loadTopic();
  };
  const toggleBookmark = async () => {
    if (!user) {
      window.location.href = `/login?next=${encodeURIComponent(window.location.pathname)}`;
      return;
    }
    if (state.bookmarked) await supabase.from("forum_bookmarks").delete().eq("profile_id", user.id).eq("topic_id", state.topic.id);
    else await supabase.from("forum_bookmarks").insert({ profile_id: user.id, topic_id: state.topic.id });
    loadTopic();
  };
  const submitReply = async (event) => {
    event.preventDefault();
    setReplyError("");
    if (!user) {
      window.location.href = `/login?next=${encodeURIComponent(window.location.pathname)}`;
      return;
    }
    if (replyBody.trim().length < 5) {
      setReplyError("Add a little more detail before posting.");
      return;
    }
    setSubmitting(true);
    const { data, error } = await supabase.from("forum_replies").insert({ topic_id: state.topic.id, author_id: user.id, body: replyBody.trim() }).select("id").single();
    if (!error && data) {
      await awardXp({ profile_id: user.id, action_type: "reply_posted", points: 3, reference_table: "forum_replies", reference_id: data.id });
      setReplyBody("");
      loadTopic();
    } else {
      setReplyError(error?.message || "Could not post reply.");
    }
    setSubmitting(false);
  };
  const markBestAnswer = async (reply) => {
    await supabase.from("forum_topics").update({ best_answer_reply_id: reply.id }).eq("id", state.topic.id);
    await awardXp({ profile_id: reply.author_id, action_type: "best_answer_received", points: 25, reference_table: "forum_replies", reference_id: reply.id });
    loadTopic();
  };
  const togglePin = async () => {
    setReplyError("");
    const { error } = await supabase.from("forum_topics").update({ is_pinned: !state.topic.is_pinned }).eq("id", state.topic.id);
    if (error) {
      console.error("Could not update pinned state", error);
      setReplyError(error.message);
      return;
    }
    loadTopic();
  };
  const softDeleteTopic = async () => {
    setReplyError("");
    const { error } = await supabase.from("forum_topics").update({ deleted_at: new Date().toISOString() }).eq("id", state.topic.id);
    if (error) {
      console.error("Could not delete topic", error);
      setReplyError(error.message);
      return;
    }
    window.location.href = "/community";
  };
  const softDeleteReply = async (reply) => {
    setReplyError("");
    const { error } = await supabase.from("forum_replies").update({ deleted_at: new Date().toISOString() }).eq("id", reply.id);
    if (error) {
      console.error("Could not delete reply", error);
      setReplyError(error.message);
      return;
    }
    setConfirmDelete(null);
    loadTopic();
  };

  if (state.loading) return <><Header/><main className="community-detail-page"><SkeletonList rows={6}/></main><Footer/></>;
  if (state.error || !state.topic) return <><Header/><main className="profile-signed-out"><MessageCircle size={34}/><h1>Topic not found</h1><p>{state.error?.message || "This discussion may have been deleted."}</p><a className="button primary" href="/community">Back to Community</a></main><Footer/></>;

  const topic = state.topic;
  const canMarkBest = user?.id === topic.author_id && topic.topic_type === "question";
  return (
    <>
      <Header />
      <main className="community-detail-page">
        <Breadcrumb items={["Community", topic.title]} />
        <article className="topic-detail-card">
          <div className="topic-detail-head">
            <div><div className="topic-badges"><span style={{ "--category-color": categoryColor(topic.forum_categories) }}>{topic.forum_categories?.name || "General"}</span><em>{topicTypeIcon(topic.topic_type)} {topic.topic_type}</em>{topic.is_pinned && <em>📌 Pinned</em>}</div><h1>{topic.title}</h1><p>By {forumAuthorName(topic)} · {relativeTime(topic.created_at)}</p></div>
            <aside><button className={state.liked ? "active" : ""} onClick={toggleTopicLike}>▲ {topic.like_count || 0}</button><button className={state.bookmarked ? "active" : ""} onClick={toggleBookmark}>{state.bookmarked ? "★ Saved" : "☆ Save"}</button></aside>
          </div>
          <div className="markdown-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(topic.body) }} />
          <div className="topic-tags">{topicTags(topic).map((tag) => <span key={tag}>{tag}</span>)}</div>
          {isAdmin && <div className="admin-topic-actions"><button onClick={togglePin}>{topic.is_pinned ? "Unpin" : "Pin"}</button><button onClick={() => setConfirmDelete({ type: "topic" })}>Delete Topic</button></div>}
        </article>
        <section className="reply-section">
          <h2>{state.replies.length} Replies</h2>
          {state.replies.map((reply) => <article className={`reply-card ${reply.id === topic.best_answer_reply_id ? "best-answer" : ""}`} key={reply.id}>{reply.id === topic.best_answer_reply_id && <strong className="best-answer-badge">✓ Best Answer</strong>}<div><span className="reply-avatar">{forumAuthorName(reply).slice(0, 2).toUpperCase()}</span><p><b>{forumAuthorName(reply)}</b><small>{relativeTime(reply.created_at)}</small></p></div><div className="markdown-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(reply.body) }} /><footer><button className={`reply-upvote ${state.likedReplies.has(reply.id) ? "active" : ""}`} onClick={() => toggleReplyLike(reply)}>▲ {reply.like_count || 0}</button>{canMarkBest && reply.id !== topic.best_answer_reply_id && <button onClick={() => markBestAnswer(reply)}>Mark as Best Answer</button>}{isAdmin && <button onClick={() => setConfirmDelete({ type: "reply", reply })}>Delete</button>}</footer></article>)}
          <form className="reply-composer" onSubmit={submitReply}>
            <label>Reply<textarea value={replyBody} onChange={(event) => setReplyBody(event.target.value)} placeholder="Add your reply. Markdown supported." /></label>
            {replyError && <div className="login-error" role="alert"><strong>{replyError}</strong></div>}
            <button className="primary-login" disabled={submitting}>{submitting ? "Posting..." : "Post Reply"}</button>
          </form>
        </section>
      </main>
      {confirmDelete && <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="delete-confirm-title">
        <div className="delete-confirm-modal">
          <button className="modal-close" onClick={() => setConfirmDelete(null)} aria-label="Close"><X /></button>
          <h2 id="delete-confirm-title">Delete {confirmDelete.type === "topic" ? "topic" : "reply"}?</h2>
          <p>This will hide it from public forum views. The action can still be reviewed in the database if needed.</p>
          <div>
            <button onClick={() => setConfirmDelete(null)}>Cancel</button>
            <button className="danger" onClick={() => confirmDelete.type === "topic" ? softDeleteTopic() : softDeleteReply(confirmDelete.reply)}>Delete</button>
          </div>
        </div>
      </div>}
      <Footer />
    </>
  );
}

function SkeletonList({ rows = 3 }) {
  return <div className="skeleton-list">{Array.from({ length: rows }).map((_, index) => <div key={index}><span></span><span></span><span></span></div>)}</div>;
}

function LoginPlaceholderModal({ onClose }) {
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="community-login-title">
      <div className="community-login-modal">
        <button className="modal-close" onClick={onClose} aria-label="Close"><X /></button>
        <h2 id="community-login-title">Login to continue</h2>
        <p>Log in with your Mundhe Banni account to post topics, reply, like, and bookmark discussions.</p>
        <button>Continue with Google</button>
        <button>Continue with LinkedIn</button>
        <div><span></span>or<span></span></div>
        <input placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button className="primary-login">Login →</button>
        <a href="#join">New to Mundhe Banni? Join free →</a>
      </div>
    </div>
  );
}

const adminNav = [
  ["Overview", [["📊", "Dashboard", "/admin", ""]]],
  ["Moderation", [["🚩", "Content Moderation", "/admin/moderation", "12"], ["📚", "Resource Approvals", "/admin/resources", "9"], ["💼", "Provider Approvals", "/admin/providers", "8"], ["👥", "Group Approvals", "/admin/groups", "5"], ["🎭", "Role Requests", "/admin/roles", "5"]]],
  ["Management", [["👤", "Users", "/admin/users", ""], ["📅", "Events", "/admin/events", ""], ["🏷", "Categories & Tags", "/admin/taxonomy", ""]]],
  ["Insights", [["📈", "Analytics", "/admin/analytics", ""], ["📋", "Audit Log", "/admin/audit-log", ""]]],
  ["Configuration", [["⚙️", "Platform Settings", "/admin/settings", ""], ["🎌", "Banners & Features", "/admin/banners", ""]]]
];

const adminTitles = {
  "/admin": "Dashboard",
  "/admin/moderation": "Content Moderation",
  "/admin/resources": "Resource Approvals",
  "/admin/providers": "Service Provider Approvals",
  "/admin/groups": "Group Management",
  "/admin/roles": "Role Upgrade Requests",
  "/admin/users": "User Management",
  "/admin/events": "Event Management",
  "/admin/taxonomy": "Categories & Tags",
  "/admin/analytics": "Analytics",
  "/admin/audit-log": "Audit Log",
  "/admin/settings": "Platform Settings",
  "/admin/banners": "Banners & Features"
};

const adminMetrics = [
  ["Total Members", "5,247", "▲ 8.2%", "positive"],
  ["Active This Week", "1,842", "▲ 4.1%", "positive"],
  ["Pending Approvals", "28", "▼ 15%", "warning"],
  ["New Discussions", "312", "▲ 22%", "positive"],
  ["Flagged Content", "6", "▼ 40%", "danger"]
];

const moderationRows = [
  ["Check out this amazing investment opportunity", "Promotional copy with repeated links and aggressive claims.", "user_8821", "New", "Spam", "12 min ago", "Review"],
  ["How SaaS founders are navigating sales cycles in 2025?", "Possible duplicate of an older thread reported by Priya K.", "Arjun Nair", "Founder", "User-Reported", "1 hour ago", "Review"],
  ["Best legal firm for startup incorporation?", "Auto-flagged for external contact info pattern.", "Rohit Mehta", "Founder", "Off-Topic", "3 hours ago", "Review"]
];

const adminTables = {
  resources: {
    subtitle: "Review resources submitted by SMEs and Admins before they go live.",
    tabs: ["Pending (9)", "Published", "Rejected", "Archived"],
    columns: ["Resource", "Submitted By", "Type", "Access", "Submitted", "Status", "Actions"],
    rows: [
      ["Startup Fundraising Playbook 2025", "Dr. Ravi Kumar", "Whitepaper", "Open", "2h ago", "Review"],
      ["Karnataka Compliance Checklist", "LegalEdge Associates", "eBook", "Gated", "5h ago", "Review"],
      ["GTM Strategies for B2B SaaS", "Ananya K.", "Video", "Open", "1d ago", "Review"]
    ]
  },
  providers: {
    subtitle: "Review new listings and manage verified status for the marketplace.",
    tabs: ["Pending (8)", "Live", "Rejected"],
    columns: ["Company", "Category", "City", "Submitted", "Status", "Verified", "Actions"],
    rows: [
      ["BrightPath Legal", "Legal", "Bengaluru", "5h ago", "Pending", "Off"],
      ["QuantEdge Analytics", "Technology", "Mysuru", "1d ago", "Pending", "Off"],
      ["CFO Bridge Consulting", "Finance", "Bengaluru", "2d ago", "Pending", "Off"]
    ]
  },
  groups: {
    subtitle: "Approve new groups, manage existing communities, and assign admins.",
    tabs: ["Pending Approval (5)", "Active Groups", "Archived"],
    columns: ["Group Name", "Category", "Created By", "Privacy", "Submitted", "Actions"],
    rows: [
      ["Logistics Founders Karnataka", "Operations", "Karthik R.", "Public", "3h ago"],
      ["AI Builders Bengaluru", "Technology", "Divya N.", "Public", "1d ago"],
      ["Founders Over 40", "Founder/General", "Suresh M.", "Invite-Only", "2d ago"]
    ]
  },
  roles: {
    subtitle: "Review requests from Founders to become an SME/Expert or Service Provider.",
    tabs: ["Pending (5)", "Approved", "Rejected"],
    columns: ["User", "Requested Role", "Reason/Bio Submitted", "Submitted", "Actions"],
    rows: [
      ["Dr. Ravi Kumar", "SME/Expert", "15 years in startup legal advisory...", "2h ago"],
      ["Ananya Krishnan", "Service Provider", "Founder of GrowthHackers Agency...", "1d ago"],
      ["Suresh Iyer", "SME/Expert", "Ex-VC, now angel investing...", "2d ago"]
    ]
  },
  users: {
    subtitle: "Search, manage roles, and moderate platform members.",
    columns: ["User", "Role", "City", "Joined", "Last Active", "XP", "Status", "Actions"],
    rows: [
      ["Vikram Anand", "Founder", "Bengaluru", "Jan 2024", "Today", "842", "Active"],
      ["Dr. Ravi Kumar", "SME/Expert", "Mysuru", "Feb 2024", "2h ago", "1,240", "Active"],
      ["user_8821", "Founder", "Unknown", "Today", "12m ago", "0", "Suspended"]
    ]
  },
  events: {
    subtitle: "Manage all platform events, RSVPs, and flagship event logistics.",
    columns: ["Event", "Type", "Organiser", "Date", "RSVPs", "Status", "Actions"],
    rows: [
      ["Karnataka Startup Summit 2025", "Flagship", "Mundhe Banni", "May 30", "428 / 500", "Live"],
      ["Bengaluru Founder Meetup", "Group Meetup", "Bengaluru Founders", "May 24", "42 / 80", "Live"],
      ["SaaS AMA Session", "Group Meetup", "Bengaluru Founders", "Jun 8", "29 / 100", "Live"]
    ]
  }
};

function AdminShell({ children }) {
  const pathname = window.location.pathname;
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand"><Logo /><span>Admin</span></div>
        <nav>
          {adminNav.map(([section, items]) => (
            <div className="admin-nav-section" key={section}>
              <h2>{section}</h2>
              {items.map(([icon, label, href, badge]) => <a className={pathname === href ? "active" : ""} href={href} key={href}><span>{icon}</span><strong>{label}</strong>{badge && <em>{badge}</em>}</a>)}
            </div>
          ))}
        </nav>
        <div className="admin-profile"><span>VA</span><div><strong>Vikram A.</strong><small>Platform Admin</small></div><a href="/">← Back to Site</a></div>
      </aside>
      <header className="admin-topbar">
        <h1>{adminTitles[pathname] || "Dashboard"}</h1>
        <div className="admin-top-actions"><div><Search size={15} /><input placeholder="Search users, posts, listings..." /></div><button aria-label="Admin notifications"><Bell size={20} /><i></i></button><span>VA</span></div>
      </header>
      <main className="admin-content">{children}</main>
    </div>
  );
}

function AdminPageHeader({ title, subtitle, action }) {
  return <div className="admin-page-header"><div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>{action || <select><option>Last 30 Days</option><option>Last 90 Days</option></select>}</div>;
}

function AdminDashboard() {
  return (
    <AdminShell>
      <AdminPageHeader title="Dashboard" subtitle="Platform health and activity at a glance." />
      <section className="admin-metric-grid">{adminMetrics.map(([label, value, trend, tone]) => <article className={tone} key={label}><div><span>{label}</span><em>{trend}</em></div><strong>{value}</strong><small>vs last period</small></article>)}</section>
      <section className="admin-chart-row">
        <article className="admin-card growth-card"><div className="admin-card-head"><h3>User Growth</h3><span><button>Daily</button><button className="active">Weekly</button><button>Monthly</button></span></div><div className="line-chart"><svg viewBox="0 0 600 230" preserveAspectRatio="none"><path d="M0 190 L55 178 L110 156 L165 162 L220 132 L275 126 L330 96 L385 110 L440 72 L495 58 L550 42 L600 26" fill="none" stroke="#e58a2b" strokeWidth="5"/><path d="M0 190 L55 178 L110 156 L165 162 L220 132 L275 126 L330 96 L385 110 L440 72 L495 58 L550 42 L600 26 L600 230 L0 230 Z" fill="rgba(229,138,43,.12)"/></svg></div></article>
        <article className="admin-card role-card"><h3>Members by Role</h3><div className="donut"><span>5,247</span></div><div className="role-legend">{[["Founder", "68%", "#2456A0"], ["Service Provider", "12%", "#9B3BB5"], ["SME/Expert", "6%", "#1A7A4A"], ["Moderator", "1%", "#B8760A"], ["Admin", "<1%", "#C84B2F"]].map(([role, percent, color]) => <p key={role}><i style={{ background: color }}></i>{role}<b>{percent}</b></p>)}</div></article>
      </section>
      <section className="admin-card city-card"><h3>Members by City</h3>{[["Bengaluru", 3420], ["Mysuru", 640], ["Mangaluru", 480], ["Hubballi", 380], ["Belagavi", 210], ["Other", 117]].map(([city, count]) => <div className="city-row" key={city}><span>{city}</span><div><i style={{ width: `${Math.max(8, count / 34)}%` }}></i></div><b>{count}</b></div>)}</section>
      <section className="admin-bottom-row"><AdminActivity /><AdminAttention /></section>
    </AdminShell>
  );
}

function AdminActivity() {
  const rows = [["🚩", "Post flagged for spam: 'Check out this amazing deal...'", "12 min ago"], ["✓", "Approved listing: CodeCraft Technologies", "1 hour ago"], ["👤", "New SME role request: Dr. Ravi Kumar", "2 hours ago"], ["📝", "New group created: Logistics Founders Karnataka", "3 hours ago"], ["💼", "New provider submission: BrightPath Legal", "5 hours ago"], ["✓", "Resource approved: ESOP Guide 2025", "6 hours ago"]];
  return <article className="admin-card"><h3>Recent Activity</h3><div className="admin-activity">{rows.map(([icon, text, time]) => <p key={text}><i>{icon}</i><span>{text}</span><small>{time}</small></p>)}</div><a className="admin-link" href="/admin/audit-log">View Full Audit Log →</a></article>;
}

function AdminAttention() {
  return <article className="admin-card"><h3>Needs Your Attention</h3>{[["🚩 6 flagged posts", "/admin/moderation"], ["📚 9 resources pending", "/admin/resources"], ["💼 8 provider listings pending", "/admin/providers"], ["🎭 5 role requests pending", "/admin/roles"]].map(([label, href]) => <a className="attention-row" href={href} key={label}><span>{label}</span><em>Review →</em></a>)}</article>;
}

function AdminModerationPage() {
  const [preview, setPreview] = React.useState(null);
  const [state, setState] = React.useState({ topics: [], loading: true, error: null });
  React.useEffect(() => {
    if (!supabase) {
      setState({ topics: [], loading: false, error: new Error("Supabase is not configured.") });
      return undefined;
    }
    let cancelled = false;
    supabase
      .from("forum_topics")
      .select("id, slug, title, body, topic_type, is_pinned, deleted_at, reply_count, like_count, created_at, profiles!forum_topics_author_id_fkey ( id, username, display_name, role ), forum_categories ( name )")
      .order("created_at", { ascending: false })
      .limit(30)
      .then(({ data, error }) => {
        if (!cancelled) setState({ topics: data || [], loading: false, error });
      });
    return () => { cancelled = true; };
  }, []);
  return (
    <AdminShell>
      <AdminPageHeader title="Discussion Moderation" subtitle="Review native forum topics, pinned posts, deleted content, and unanswered discussions." />
      <AdminTabs tabs={["Recent Topics", "Pinned", "Deleted", "Questions"]} />
      <AdminFilters search="Search topic title or author..." filters={["Post Type", "Category", "Date Range"]} />
      <section className="admin-table-card">
        <div className="admin-table moderation"><div>Topic</div><div>Author</div><div>Type</div><div>Activity</div><div>Status</div><div>Actions</div>{state.loading ? <div className="admin-table-loading">Loading discussions...</div> : state.error ? <div className="admin-table-loading">Could not load discussions: {state.error.message}</div> : state.topics.map((topic) => <React.Fragment key={topic.id}><button className="admin-post-cell" onClick={() => setPreview(topic)}><strong>{topic.title}</strong><small>{stripMarkdown(topic.body).slice(0, 110)}</small><span>{topic.forum_categories?.name || "General"}</span></button><AdminUserCell name={forumAuthorName(topic)} role={topic.profiles?.role || "member"} /><div><span className="admin-pill review">{topicTypeIcon(topic.topic_type)} {topic.topic_type}</span></div><div>{relativeTime(topic.created_at)}<small>{topic.reply_count || 0} replies · ▲ {topic.like_count || 0}</small></div><div><span className={`admin-pill ${topic.deleted_at ? "danger" : topic.is_pinned ? "review" : "approved"}`}>{topic.deleted_at ? "Deleted" : topic.is_pinned ? "Pinned" : "Live"}</span></div><div className="admin-actions"><a className="admin-outline" href={topicUrl(topic)}>Open</a></div></React.Fragment>)}</div>
      </section>
      <nav className="pagination admin-pagination">{["‹", "1", "›"].map((item) => <button className={item === "1" ? "active" : ""} key={item}>{item}</button>)}</nav>
      {preview && <AdminPreviewModal row={preview} onClose={() => setPreview(null)} />}
    </AdminShell>
  );
}

function AdminGenericTablePage({ type, title }) {
  const config = adminTables[type];
  return (
    <AdminShell>
      <AdminPageHeader title={title} subtitle={config.subtitle} action={type === "users" ? <button className="admin-outline">📤 Bulk Import Users</button> : type === "events" ? <button className="admin-primary">+ Create Flagship Event</button> : null} />
      {config.tabs && <AdminTabs tabs={config.tabs} />}
      {(type === "users" || type === "events") && <AdminFilters search={type === "users" ? "Search by name, email, or username..." : "Search events..."} filters={type === "users" ? ["Role", "Status", "City"] : ["Type", "Status", "Date"]} />}
      <AdminDataTable columns={config.columns} rows={config.rows} type={type} />
      {type === "providers" && <AdminEnquiries />}
      {type === "groups" && <AdminFeaturedGroup />}
    </AdminShell>
  );
}

function AdminTabs({ tabs }) {
  return <nav className="admin-tabs">{tabs.map((tab, index) => <button className={index === 0 ? "active" : ""} key={tab}>{tab}</button>)}</nav>;
}

function AdminFilters({ search, filters }) {
  return <section className="admin-filters">{filters.map((filter) => <select key={filter}><option>{filter}</option><option>All</option></select>)}<div><Search size={15} /><input placeholder={search} /></div></section>;
}

function AdminDataTable({ columns, rows, type }) {
  return (
    <section className="admin-table-card">
      <div className="admin-data-table" style={{ "--admin-cols": `repeat(${columns.length}, minmax(120px, 1fr))` }}>
        {columns.map((column) => <div className="admin-th" key={column}>{column}</div>)}
        {rows.map((row) => row.map((cell, index) => <div className="admin-td" key={`${row[0]}-${index}`}>{index === 0 ? <strong>{cell}</strong> : cell === "Review" || cell === "Pending" || cell === "Live" || cell === "Active" ? <span className={`admin-pill ${cell.toLowerCase()}`}>{cell}</span> : index === row.length - 1 && columns.at(-1) === "Actions" ? <AdminActions compact /> : cell}</div>))}
        {rows.map((row) => columns.length > row.length && <div className="admin-td" key={`${row[0]}-actions`}><AdminActions compact /></div>)}
      </div>
    </section>
  );
}

function AdminUserCell({ name, role }) {
  return <div className="admin-user-cell"><span>{name.slice(0, 2).toUpperCase()}</span><div><strong>{name}</strong><small>{role}</small></div></div>;
}

function AdminActions({ compact = false }) {
  return <div className="admin-actions"><button className="approve">✓ {compact ? "" : "Approve"}</button><button>✎ {compact ? "" : "Edit"}</button><button className="reject">✕ {compact ? "" : "Reject"}</button></div>;
}

function AdminPreviewModal({ row, onClose }) {
  const isTopic = !Array.isArray(row);
  const title = isTopic ? row.title : row[0];
  const body = isTopic ? row.body : row[1];
  const author = isTopic ? forumAuthorName(row) : row[2];
  const role = isTopic ? row.profiles?.role || "member" : row[3];
  const status = isTopic ? row.deleted_at ? "Deleted" : row.is_pinned ? "Pinned" : "Live" : row[4];
  return <div className="modal-overlay"><div className="admin-preview-modal"><button className="modal-close" onClick={onClose}><X /></button><h2>{title}</h2><AdminUserCell name={author} role={role} /><p>{stripMarkdown(body)} {isTopic ? "" : "This is the full post content preview shown to the platform admin before taking a moderation action."}</p><div className="flag-box"><strong>Status: {status}</strong><small>{isTopic ? `${row.reply_count || 0} replies · ${row.like_count || 0} likes · ${row.topic_type}` : "Auto-detected or reported by community moderation."}</small></div>{isTopic && <a className="admin-link" href={topicUrl(row)}>Open discussion →</a>}<div className="admin-modal-actions"><button>✓ Mark Reviewed</button><button>📌 Pin/Unpin in Topic</button><button>Open Detail</button></div></div></div>;
}

function AdminEnquiries() {
  return <section className="admin-card admin-secondary-section"><div className="admin-card-head"><h3>All Enquiry Submissions</h3><button className="admin-outline">⬇ Export CSV</button></div><AdminDataTable columns={["Provider", "Founder Name", "Requirement Type", "Date", "Status"]} rows={[["LegalEdge Associates", "Meera Rao", "ESOP Setup", "Today", "New"], ["FinTax Consultants", "Arjun Nair", "Tax Planning", "Yesterday", "Responded"]]} type="enquiries" /></section>;
}

function AdminFeaturedGroup() {
  return <section className="admin-card admin-secondary-section"><h3>Homepage Featured Group</h3><div className="featured-admin-card"><span>🏙️</span><div><strong>Bengaluru Founders</strong><small>1,200 members · Active discussions</small></div><select><option>Change Featured Group</option></select><button className="admin-primary">Update</button></div><label className="admin-switch"><input type="checkbox" defaultChecked />Auto-rotate weekly</label></section>;
}

function AdminTaxonomyPage() {
  return <AdminShell><AdminPageHeader title="Categories & Tags" subtitle="Manage the discussion taxonomy used across the Community page." action={<button className="admin-primary">+ New Category</button>} /><p className="admin-note">Changes here manage the native Mundhe Banni forum taxonomy.</p><AdminTabs tabs={["Categories", "Tags"]} /><AdminDataTable columns={["Color", "Name", "Description", "Topics", "Actions"]} rows={[["🔵", "Fundraising", "Term sheets, investors, valuations", "12"], ["🟣", "Product", "Product strategy, roadmaps, MVPs", "8"], ["🟢", "Legal", "Incorporation, compliance, contracts", "15"], ["🔴", "Marketing", "Growth, SEO, branding", "6"], ["⚫", "Operations", "Hiring, processes, vendor mgmt", "4"], ["🟪", "Technology", "Engineering, AI tools, stack", "19"]]} type="taxonomy" /></AdminShell>;
}

function AdminAnalyticsPage() {
  return <AdminShell><AdminPageHeader title="Analytics" subtitle="Growth, engagement, content, events, and marketplace reporting." action={<button className="admin-outline">⬇ Export Report</button>} /><AdminTabs tabs={["Growth", "Engagement", "Content", "Events", "Marketplace"]} /><section className="admin-card analytics-deep"><h3>New Users Over Time</h3><div className="line-chart tall"><svg viewBox="0 0 800 260" preserveAspectRatio="none"><path d="M0 220 L80 210 L160 190 L240 170 L320 180 L400 130 L480 120 L560 80 L640 70 L720 48 L800 30" fill="none" stroke="#e58a2b" strokeWidth="5"/></svg></div></section><section className="admin-metric-grid four">{[["Total Users", "5,247"], ["New This Period", "428"], ["Churn Rate", "2.1%"], ["Growth Rate", "8.2%"]].map(([label, value]) => <article key={label}><span>{label}</span><strong>{value}</strong></article>)}</section></AdminShell>;
}

function AdminAuditPage() {
  return <AdminShell><AdminPageHeader title="Audit Log" subtitle="Complete history of all moderation and administrative actions." action={<button className="admin-outline">⬇ Export CSV</button>} /><AdminFilters search="Search by user or content..." filters={["Action Type", "Admin", "Date Range"]} /><AdminDataTable columns={["Timestamp", "Admin", "Action", "Target", "Details"]} rows={[["2025-05-20 14:32", "Vikram A.", "Approved", "Startup Fundraising Playbook", "Marked as Featured Resource"], ["2025-05-20 13:08", "Sneha P.", "Rejected", "user_8821's post", "Reason: Spam"], ["2025-05-20 11:45", "Vikram A.", "Role Change", "Dr. Ravi Kumar", "Founder → SME/Expert"], ["2025-05-19 18:20", "Sneha P.", "Suspended", "user_7732", "30 days - harassment"]]} type="audit" /></AdminShell>;
}

function AdminSettingsPage() {
  return <AdminShell><AdminPageHeader title="Platform Settings" /><section className="admin-settings-layout"><nav>{["General", "Notifications", "Feature Flags", "SEO", "Integrations"].map((item, index) => <button className={index === 0 ? "active" : ""} key={item}>{item}</button>)}</nav><div className="admin-card settings-card"><label>Platform name<input defaultValue="Mundhe Banni" /></label><label>Support email<input defaultValue="support@mundhebanni.com" /></label><label>Default timezone<select><option>Asia/Kolkata</option></select></label><label className="admin-switch"><input type="checkbox" />Maintenance mode</label><h3>Integrations</h3><p>🟢 Native forum enabled via Supabase</p><button className="admin-outline">Test Connection</button></div></section></AdminShell>;
}

function AdminBannersPage() {
  return <AdminShell><AdminPageHeader title="Banners & Featured Content" subtitle="Manage promotional banners and featured content slots across the platform." /><section className="admin-banner-grid">{["Homepage Hero Banner", "Featured Resource", "Featured Provider", "Site-wide Announcement Bar"].map((title) => <article className="admin-card" key={title}><h3>{title}</h3><p>Current slot preview and controls for platform admins.</p><button className="admin-outline">Edit</button></article>)}</section></AdminShell>;
}

function AdminApp() {
  const pathname = window.location.pathname;
  if (pathname === "/admin/moderation") return <AdminModerationPage />;
  if (pathname === "/admin/resources") return <AdminGenericTablePage type="resources" title="Resource Approvals" />;
  if (pathname === "/admin/providers") return <AdminGenericTablePage type="providers" title="Service Provider Approvals" />;
  if (pathname === "/admin/groups") return <AdminGenericTablePage type="groups" title="Group Management" />;
  if (pathname === "/admin/roles") return <AdminGenericTablePage type="roles" title="Role Upgrade Requests" />;
  if (pathname === "/admin/users") return <AdminGenericTablePage type="users" title="User Management" />;
  if (pathname === "/admin/events") return <AdminGenericTablePage type="events" title="Event Management" />;
  if (pathname === "/admin/taxonomy") return <AdminTaxonomyPage />;
  if (pathname === "/admin/analytics") return <AdminAnalyticsPage />;
  if (pathname === "/admin/audit-log") return <AdminAuditPage />;
  if (pathname === "/admin/settings") return <AdminSettingsPage />;
  if (pathname === "/admin/banners") return <AdminBannersPage />;
  return <AdminDashboard />;
}

function Cta() {
  return <section className="cta"><Users size={58} /><div><h2>Be a part of Karnataka's most active founder network.</h2><p>Connect, collaborate and grow together.</p></div><a className="button primary" href="/community">Join Community</a></section>;
}

function Footer() {
  const columns = {
    Platform: ["People", "Groups", "Events", "Service Providers", "Community"],
    Resources: ["Resource Library", "Guides", "Templates", "Blog"],
    Company: ["About Us", "Contact Us", "Careers", "Privacy Policy", "Terms of Use"]
  };
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div><Logo /><p>Building the future of Bharat, together.</p><div className="socials"><Linkedin /><span>𝕏</span><Youtube /><span>◎</span></div></div>
        {Object.entries(columns).map(([heading, links]) => <div key={heading}><h3>{heading}</h3>{links.map((link) => <a key={link} href="#footer">{link}</a>)}</div>)}
        <div className="newsletter"><h3>Subscribe to our newsletter</h3><p>Get the latest updates and events delivered to your inbox.</p><form><input placeholder="Enter your email" /><button>Subscribe</button></form></div>
      </div>
      <small>© 2025 Mundhe Banni. All rights reserved.</small>
    </footer>
  );
}

function HomePage() {
  return <><Header /><main><Hero /><Stats /><EventCards /><CommunityPulse /><Groups /><Providers /><Resources /><Cta /></main><Footer /><a className="sticky-join" href="/community">Join Community</a></>;
}

function App() {
  if (window.location.pathname.startsWith("/admin")) return <AdminApp />;
  if (window.location.pathname === "/login") return <LoginPage />;
  if (window.location.pathname === "/community/new") return <CommunityNewTopicPage />;
  if (window.location.pathname.startsWith("/community/t/")) return <CommunityTopicDetailPage slug={decodeURIComponent(window.location.pathname.split("/")[3] || "")} />;
  if (window.location.pathname === "/community") return <CommunityPage />;
  if (window.location.pathname === "/my-profile") return <MyProfilePage />;
  if (window.location.pathname === "/people") return <PeoplePage />;
  if (window.location.pathname === "/groups/create") return <CreateGroupPage />;
  if (window.location.pathname === "/groups") return <GroupsPage />;
  if (window.location.pathname.startsWith("/groups/")) return <GroupDetailPage slug={decodeURIComponent(window.location.pathname.split("/")[2] || "")} />;
  if (window.location.pathname === "/events/create") return <CreateEventPage />;
  if (window.location.pathname === "/events/bengaluru-founder-meetup") return <EventDetailPage />;
  if (window.location.pathname === "/events") return <EventsPage />;
  if (window.location.pathname === "/resources/upload") return <UploadResourcePage />;
  if (window.location.pathname === "/resources") return <ResourceLibraryPage />;
  if (window.location.pathname === "/service-providers/list-your-business") return <ListBusinessPage />;
  if (window.location.pathname === "/service-providers/legaledge-associates") return <ProviderDetailPage />;
  if (window.location.pathname === "/service-providers") return <ServiceProvidersPage />;
  if (window.location.pathname === "/my-listing") return <MyListingPage />;
  return <HomePage />;
}

createRoot(document.getElementById("root")).render(<AuthProvider><App /></AuthProvider>);
