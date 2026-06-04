import React from "react";
import { createRoot } from "react-dom/client";
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
  ["Community", "#community"]
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
  [FileText, "Startup Templates", "100+ Templates", "blue"],
  [TrendingUp, "Pitch Deck Examples", "50+ Decks", "purple"],
  [Landmark, "Funding Guides", "Step-by-step guides", "green"],
  [CheckCircle2, "Legal Checklists", "Essential for Startups", "teal"],
  [FileText, "Market Research Reports", "Industry Insights", "red"]
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
  return (
    <header className="site-header">
      <Logo />
      <nav className="main-nav" aria-label="Primary navigation">
        {navItems.map(([item, href]) => (
          <a className={(pathname === href || (href === "/people" && pathname.startsWith("/people")) || (href === "/groups" && pathname.startsWith("/groups")) || (href === "/events" && pathname.startsWith("/events")) || (href === "/resources" && pathname.startsWith("/resources")) || (href === "/service-providers" && pathname.startsWith("/service-providers")) || (pathname === "/" && item === "Home")) ? "active" : ""} href={href} key={item}>
            {item}{item === "Community" && <ArrowUpRight size={13} />}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <button aria-label="Search"><Search size={22} /></button>
        <button className="bell" aria-label="Notifications"><Bell size={21} /><span>5</span></button>
        <a className="profile" href="/my-profile" aria-label="Open my profile">A</a>
        <button className="language">A~ <ChevronDown size={14} /></button>
        <button className="mobile-menu" aria-label="Open menu"><Menu /></button>
      </div>
    </header>
  );
}

const resourceCategories = [
  ["📚", "All Resources", 124],
  ["📘", "eBooks", 28],
  ["📄", "Whitepapers", 19],
  ["🖼️", "Infographics", 15],
  ["🎬", "Videos", 22],
  ["🎙️", "Webinars", 18],
  ["📋", "Case Studies", 14],
  ["🎧", "Podcasts", 8]
];

const resourceCards = [
  ["eBook", "The Founder's Fundraising Handbook", "A practical playbook for preparing, pitching, and closing early-stage capital.", "Mundhe Banni Team", "Jan 2025", ["Fundraising", "Finance"], "3.8K", "4.9", "Open"],
  ["Whitepaper", "Karnataka Startup Ecosystem Report 2025", "Funding trends, sector growth, and founder insights across Karnataka.", "KCG Research", "Feb 2025", ["Ecosystem", "Strategy"], "3.2K", "4.8", "Gated"],
  ["Video", "How to Build a Pitch Deck That Converts", "A focused walkthrough of deck structure, narrative, and investor questions.", "Ravi Shenoy", "Mar 2025", ["Fundraising", "Product"], "2.1K", "4.7", "Open"],
  ["Case Study", "Agritech Scale-Up: From 0 to 10K Farmers", "How an agritech team built trust, operations, and distribution at scale.", "GreenRoot Team", "Dec 2024", ["Agritech", "Operations"], "1.4K", "4.6", "Open"],
  ["Infographic", "India Startup Funding Map 2024", "A visual snapshot of startup funding by region, stage, and sector.", "Mundhe Banni Research", "Nov 2024", ["Fundraising", "Ecosystem"], "5.1K", "4.5", "Open"],
  ["Webinar", "ESOP Basics for Early Stage Founders", "Legal and HR essentials founders should understand before issuing ESOPs.", "LegalEdge Associates", "Mar 2025", ["Legal", "HR"], "980", "4.8", "Gated"],
  ["Podcast", "Building in Bharat — Episode 12: SaaS GTM", "A founder conversation on selling SaaS from India to global customers.", "Mundhe Banni FM", "Apr 2025", ["Product", "Marketing"], "760", "4.6", "Open"],
  ["eBook", "Legal Checklist for Startups — India Edition", "Company, compliance, contracts, and IP checkpoints for Indian startups.", "LegalEdge", "Feb 2025", ["Legal", "Compliance"], "2.9K", "4.9", "Open"],
  ["Case Study", "How FinTax Helped 3 Startups Raise Series A", "Finance hygiene, investor readiness, and reporting practices that worked.", "FinTax Team", "Jan 2025", ["Finance", "Fundraising"], "1.1K", "4.7", "Gated"]
];

const typeIcons = {
  eBook: BookOpen,
  Whitepaper: FileText,
  Video,
  Webinar: Users,
  "Case Study": CheckCircle2,
  Infographic: TrendingUp,
  Podcast: Mic
};

const roleMeta = {
  Founder: { className: "founder", icon: "R", color: "#2456A0" },
  Expert: { className: "expert", icon: "✓", color: "#1A7A4A" },
  "Service Provider": { className: "service-provider", icon: "B", color: "#9B3BB5" },
  Moderator: { className: "moderator", icon: "M", color: "#B8760A" }
};

const memberSpotlight = [
  ["Vikram Anand", "Founder", "Bengaluru", 842, 4],
  ["Dr. Ravi Kumar", "Expert", "Mysuru", 1240, 5],
  ["Sneha Patil", "Founder", "Bengaluru", 621, 4],
  ["Ananya Krishnan", "Service Provider", "Bengaluru", 540, 3],
  ["Rohit Shenoy", "Expert", "Mangaluru", 980, 4]
];

const peopleDirectory = [
  ["Vikram Anand", "Founder", "Founder @ NovaPay", "Bengaluru", ["Fintech", "SaaS"], 842, 4],
  ["Dr. Ravi Kumar", "Expert", "Legal · LegalEdge Associates", "Mysuru", ["Legal", "Compliance"], 1240, 5],
  ["Sneha Patil", "Founder", "Co-Founder @ AgriStack", "Bengaluru", ["Agritech", "Operations"], 621, 4],
  ["Ananya Krishnan", "Service Provider", "CEO · GrowthHackers", "Bengaluru", ["Marketing", "SaaS"], 540, 3],
  ["Rohit Shenoy", "Expert", "CFO Advisory · FinTax", "Mangaluru", ["Finance", "Fundraising"], 980, 4],
  ["Meera Shetty", "Founder", "Founder @ EduBridge", "Bengaluru", ["Edtech", "Product"], 312, 2],
  ["Karthik Rao", "Founder", "CTO @ HealthNest", "Bengaluru", ["Healthcare", "Technology"], 187, 2],
  ["Priya Kamath", "Moderator", "Founder @ LogiRoute", "Bengaluru", ["Logistics", "Operations"], 724, 4],
  ["Arun Hegde", "Expert", "Partner · StartupCounsel India", "Bengaluru", ["Legal", "Fundraising"], 1102, 5],
  ["Divya Nair", "Founder", "Founder @ CleanHarvest", "Hubballi", ["Agritech", "D2C"], 445, 3],
  ["Siddharth Bhat", "Founder", "Co-Founder @ DataVerse", "Bengaluru", ["SaaS", "Technology"], 268, 2],
  ["Kavitha Murthy", "Service Provider", "HR · TalentFirst", "Bengaluru", ["HR", "Recruitment"], 398, 3]
];

const levelProgress = (xp, level) => {
  const ranges = { 1: [0, 199], 2: [200, 499], 3: [500, 999], 4: [500, 999], 5: [1000, 2000] };
  const [start, end] = ranges[level] || [0, 1000];
  return Math.min(100, Math.max(18, ((xp - start) / (end - start)) * 100));
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
          <p>Curated guides, templates, whitepapers and videos to help your startup grow.</p>
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
        ["Type:", ["All Types", "eBook", "Whitepaper", "Infographic", "Video", "Webinar", "Case Study", "Podcast", "Datasheet"]],
        ["Topic:", ["All Topics", "Fundraising", "Product", "Legal", "Marketing", "Operations", "Technology", "Finance", "HR"]],
        ["Language:", ["All Languages", "English", "Kannada"]],
        ["Sort:", ["Relevance", "Newest First", "Most Downloaded", "Top Rated"]]
      ].map(([label, options]) => (
        <label className="select-filter" key={label}><span>{label}</span><select>{options.map((option) => <option key={option}>{option}</option>)}</select></label>
      ))}
      <button className="mobile-filter"><Filter size={16} />Filter & Sort</button>
      <div className="view-toggle"><button className="active" aria-label="Grid view"><Grid3X3 size={17} /></button><button aria-label="List view"><List size={18} /></button></div>
      <p>Showing 124 resources</p>
    </section>
  );
}

function FeaturedResource() {
  return (
    <section className="featured-resource">
      <div>
        <span className="featured-pill">★ Featured Resource</span>
        <h2>Karnataka Startup Ecosystem Report 2025</h2>
        <p>A comprehensive analysis of funding trends, sector growth, and founder insights from Karnataka's startup ecosystem over the last 12 months.</p>
        <div className="featured-meta"><span>📄 Whitepaper</span><span>⬇ 3,240 Downloads</span><span>★ 4.8 Rating</span></div>
        <div className="featured-actions"><button className="button primary"><Download size={17} />Download Free</button><button className="button ghost"><Eye size={17} />Quick Preview</button></div>
      </div>
      <div className="report-cover">
        <small>Mundhe Banni Research</small>
        <strong>Karnataka Startup Ecosystem Report 2025</strong>
        <div className="cover-chart"><span></span><span></span><span></span><span></span></div>
      </div>
    </section>
  );
}

function ResourceSidebar() {
  return (
    <aside className="resource-sidebar">
      <FilterGroup title="Format" items={["PDF", "Video", "Audio"]} checked={["PDF"]} />
      <FilterGroup title="Topic" items={["Fundraising", "Product Building", "Legal & Compliance", "Marketing & Growth", "Operations", "Technology", "Finance", "Human Resources"]} checked={["Fundraising", "Legal & Compliance"]} showMore />
      <div className="filter-group"><h3>Date Published</h3>{["Any time", "Last 30 days", "Last 3 months", "Last year"].map((item, index) => <label key={item}><input type="radio" name="date" defaultChecked={index === 0} />{item}</label>)}</div>
      <div className="filter-group"><h3>Minimum Rating</h3><div className="rating-select">★★★★<span>★</span></div><p>4★ & above</p></div>
      <FilterGroup title="Language" items={["English", "Kannada"]} checked={["English"]} />
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
  const [type, title, description, author, date, tags, downloads, rating, access] = resource;
  const Icon = typeIcons[type] || FileText;
  return (
    <article className="library-card">
      <div className={`resource-thumb ${type.toLowerCase().replaceAll(" ", "-")}`}>
        <span className={`type-badge ${type.toLowerCase().replaceAll(" ", "-")}`}>{type}</span>
        <Bookmark size={18} />
        <Icon size={54} />
      </div>
      <div className="library-card-body">
        <a href="/resources/the-founders-fundraising-handbook"><h3>{title}</h3></a>
        <p>{description}</p>
        <div className="resource-byline"><span>{author}</span><time>{date}</time></div>
        <div className="tag-row">{tags.slice(0, 2).map((tag) => <span key={tag}>{tag}</span>)}{tags.length > 2 && <small>+{tags.length - 2} more</small>}</div>
        <div className="resource-card-footer">
          <div><span>⬇ {downloads}</span><span>★ {rating}</span></div>
          {access === "Gated" ? <button className="access-outline" onClick={() => onGate(title)}><Lock size={13} />Get Access</button> : <button className="access-filled"><Download size={13} />Download</button>}
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
            <div className="library-grid">{resourceCards.map((resource) => <ResourceCard key={resource[1]} resource={resource} onGate={setGatedResource} />)}</div>
            <nav className="pagination" aria-label="Resources pagination">
              {["‹", "1", "2", "3", "...", "11", "›"].map((item) => <button className={item === "1" ? "active" : ""} key={item}>{item}</button>)}
            </nav>
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

function PeopleHeader() {
  return (
    <section className="people-header">
      <Breadcrumb items={["People"]} />
      <div className="people-title-row">
        <div>
          <h1>Community Members</h1>
          <p>Discover founders, experts, mentors, and service providers building Karnataka's startup ecosystem.</p>
        </div>
        <div className="people-header-stats">
          {[
            ["5,200+", "Founders"],
            ["320+", "Experts & Mentors"],
            ["140+", "Service Providers"],
            ["82+", "Active Groups"]
          ].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </div>
    </section>
  );
}

function MemberAvatar({ name, role, size = "regular" }) {
  const meta = roleMeta[role] || roleMeta.Founder;
  return (
    <span className={`member-avatar ${size} ${meta.className}`}>
      <strong>{name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</strong>
      <i>{meta.icon}</i>
    </span>
  );
}

function RoleBadge({ role }) {
  const meta = roleMeta[role] || roleMeta.Founder;
  return <small className={`role-badge ${meta.className}`}>{role}</small>;
}

function SpotlightCard({ member }) {
  const [name, role, city, xp, level] = member;
  const [followed, setFollowed] = React.useState(false);
  return (
    <article className="spotlight-card">
      <MemberAvatar name={name} role={role} size="large" />
      <h3>{name}</h3>
      <RoleBadge role={role} />
      <p>📍 {city}</p>
      <div className="xp-meter"><span style={{ width: `${levelProgress(xp, level)}%` }}></span></div>
      <em>★ {xp.toLocaleString()} XP · Level {level}</em>
      <button className={followed ? "following" : ""} onClick={() => setFollowed(!followed)}>{followed ? "✓ Following" : "Follow"}</button>
    </article>
  );
}

function MemberSpotlight() {
  return (
    <section className="member-spotlight">
      <div className="spotlight-head">
        <div><h2>★ Member Spotlight</h2><p>Top contributors and recently active members</p></div>
        <div><button aria-label="Previous spotlight">‹</button><button aria-label="Next spotlight">›</button></div>
      </div>
      <div className="spotlight-row">{memberSpotlight.map((member) => <SpotlightCard key={member[0]} member={member} />)}</div>
    </section>
  );
}

function PeopleToolbar() {
  return (
    <>
      <section className="people-toolbar">
        <div className="resource-search"><Search size={16} /><input placeholder="Search by name, expertise, or company..." /></div>
        {[
          ["Role:", ["All Roles", "Founder", "Expert / SME", "Service Provider", "Moderator"]],
          ["City:", ["All Cities", "Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi"]],
          ["Expertise:", ["All Areas", "SaaS", "Fintech", "Agritech", "Edtech", "Healthcare", "Legal", "Finance", "Marketing", "Technology", "Operations"]],
          ["Sort:", ["Most Active", "Newest Members", "Top XP", "A-Z"]]
        ].map(([label, options]) => (
          <label className="select-filter" key={label}><span>{label}</span><select>{options.map((option) => <option key={option}>{option}</option>)}</select></label>
        ))}
        <button className="mobile-filter"><Filter size={16} />Filter & Sort</button>
        <div className="view-toggle"><button className="active" aria-label="Grid view"><Grid3X3 size={17} /></button><button aria-label="List view"><List size={18} /></button></div>
        <p>Showing 5,200 members</p>
      </section>
      <section className="role-pill-row">
        {[
          ["All Members", "5,200", "all"],
          ["Founders", "4,720", "founder"],
          ["Experts & SMEs", "320", "expert"],
          ["Service Providers", "140", "service-provider"],
          ["Moderators", "20", "moderator"]
        ].map(([label, count, tone], index) => <button className={`${tone} ${index === 0 ? "active" : ""}`} key={label}>{label} ({count})</button>)}
      </section>
    </>
  );
}

function PersonCard({ person }) {
  const [name, role, company, city, tags, xp, level] = person;
  const [followed, setFollowed] = React.useState(false);
  const meta = roleMeta[role] || roleMeta.Founder;
  return (
    <article className={`person-card ${meta.className}`}>
      <div className="person-cover"></div>
      <div className="person-card-body">
        <MemberAvatar name={name} role={role} />
        <h3>{name}</h3>
        <RoleBadge role={role} />
        <p className="person-company">{company}</p>
        <p className="person-city">📍 {city}</p>
        <div className="person-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className={`xp-strip level-${level}`}>
          <div><span style={{ width: `${levelProgress(xp, level)}%` }}></span></div>
          <p><span>★ {xp.toLocaleString()} XP</span><span>Level {level}</span></p>
        </div>
      </div>
      <div className="person-actions">
        <a href="/my-profile">View Profile</a>
        <button className={followed ? "following" : ""} onClick={() => setFollowed(!followed)}>{followed ? "✓ Following" : "Follow"}</button>
      </div>
    </article>
  );
}

function PeoplePage() {
  return (
    <>
      <Header />
      <main>
        <PeopleHeader />
        <MemberSpotlight />
        <PeopleToolbar />
        <section className="people-grid">
          {peopleDirectory.map((person) => <PersonCard key={person[0]} person={person} />)}
        </section>
        <nav className="pagination people-pagination" aria-label="People pagination">{["‹", "1", "2", "3", "...", "52", "›"].map((item) => <button className={item === "1" ? "active" : ""} key={item}>{item}</button>)}</nav>
      </main>
      <Footer />
    </>
  );
}

function MyProfilePage() {
  return (
    <>
      <Header />
      <main className="my-profile-page">
        <section className="profile-cover">
          <button>Edit Cover</button>
        </section>
        <section className="profile-intro">
          <MemberAvatar name="Vikram Anand" role="Founder" size="profile" />
          <div className="profile-info-row">
            <div>
              <h1>Vikram Anand <RoleBadge role="Founder" /></h1>
              <p className="username">@vikramanand</p>
              <p>Building NovaPay for small business collections across Bharat. Active in fintech, SaaS GTM, and founder fundraising conversations.</p>
              <div className="profile-meta"><span>📍 Bengaluru, Karnataka</span><a href="#site">novapay.in</a><a href="#linkedin">LinkedIn</a><span>Joined January 2024</span></div>
            </div>
            <aside className="completion-card">
              <h2>Profile Completion</h2>
              <div className="completion-ring"><span>70%</span></div>
              <p>Add your LinkedIn to reach 85%</p>
              <a href="#complete">Complete Profile →</a>
            </aside>
          </div>
        </section>
        <section className="profile-stats">{[["48", "Discussions"], ["312", "Replies"], ["5", "Groups"], ["8", "Events Attended"], ["842", "XP Points"]].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>
        <section className="profile-xp">
          <div><strong>★ Level 4 - Top Contributor</strong><div className="xp-meter wide"><span style={{ width: "72%" }}></span></div><small>842 / 1000 XP to Level 5</small></div>
          <div className="badge-strip"><strong>Badges</strong>{["Top Contributor", "Best Answer x12", "Event Speaker", "Resource Author"].map((badge) => <span key={badge}>{badge}</span>)}</div>
        </section>
        <section className="profile-actions"><button>Edit Profile</button><button>Settings</button><button>Share Profile</button></section>
        <nav className="profile-tabs">{["Feed", "Contributions", "Groups", "Events", "Settings"].map((tab, index) => <button className={index === 0 ? "active" : ""} key={tab}>{tab}</button>)}</nav>
        <section className="profile-feed-layout">
          <div className="activity-feed">
            <h2>Recent Activity</h2>
            {[
              ["💬", "Started a discussion:", "How SaaS founders navigate sales in 2025", "2 hours ago", "+10 XP"],
              ["✓", "Received Best Answer on:", "Best approach for pre-seed fundraising", "1 day ago", "+25 XP"],
              ["📅", "RSVPd Going to:", "Bengaluru Founder Meetup - May 24", "2 days ago", "+5 XP"],
              ["👥", "Joined group:", "Fintech Builders", "1 week ago", "+5 XP"],
              ["📄", "Uploaded resource:", "Startup Legal Checklist 2025", "2 weeks ago", "+20 XP"]
            ].map(([icon, action, title, time, xp]) => (
              <article key={title}><i>{icon}</i><div><p>{action} <a href="#activity">{title}</a></p><small>{time}</small><em>{xp}</em></div></article>
            ))}
            <a className="load-more-link" href="#more">Load More Activity →</a>
          </div>
          <aside className="profile-sidebar">
            <ProfileWidget title="Interests">{["SaaS", "Fintech", "Fundraising", "Product", "Legal"].map((tag) => <span key={tag}>{tag}</span>)}</ProfileWidget>
            <ProfileWidget title="My Groups (5)">{["Bengaluru Founders", "Fintech Builders", "Startup Funding"].map((group) => <p key={group}><strong>{group}</strong><small>Active</small></p>)}</ProfileWidget>
            <ProfileWidget title="Community Leaderboard"><h3>#12 in Karnataka</h3><p>Top 1% of all members</p><p><strong>Vikram Anand</strong><small>842 XP</small></p></ProfileWidget>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
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

const eventsDirectory = [
  ["Group Meetup", "MAY", "24", "Bengaluru Founder Meetup", "Sat, 24 May · 5:00 PM", "Koramangala Social, Bangalore", "+42", "Bengaluru Founders Group", "RSVP Free", "meetup"],
  ["Community Conference", "MAY", "25", "Startup Funding Workshop", "Sun, 25 May · 10:00 AM", "91springboard, Bangalore", "+86", "Mundhe Banni", "RSVP Free", "conference"],
  ["Virtual", "MAY", "27", "Women Founders Circle", "Tue, 27 May · 7:00 PM", "Online", "+63", "Women Entrepreneurs Group", "RSVP Free", "women"],
  ["Flagship Event", "MAY", "30", "Karnataka Startup Summit 2025", "Fri-Sat, 30-31 May · 9:30 AM", "NIMHANS Convention Centre", "+428", "Mundhe Banni", "Get Tickets", "flagship"],
  ["Community Conference", "JUN", "05", "Agritech Karnataka Conclave", "Thu, 5 Jun · 11:00 AM", "UAS Campus, Bengaluru", "+54", "Agritech Karnataka", "RSVP Free", "agri"],
  ["Group Meetup", "JUN", "08", "Fintech Builders Monthly Sync", "Sun, 8 Jun · 4:00 PM", "BHIVE Workspace, Bangalore", "+38", "Fintech Builders Group", "RSVP Free", "fintech"],
  ["Virtual", "JUN", "12", "SaaS Founders AMA Session", "Thu, 12 Jun · 6:30 PM", "Online", "+29", "Bengaluru Founders Group", "RSVP Free", "saas"],
  ["Community Conference", "JUN", "15", "Investor Connect Mysuru", "Sun, 15 Jun · 10:00 AM", "Mysuru, Karnataka", "+71", "Mundhe Banni", "RSVP Free", "investor"]
];

const eventTypeClass = (type) => type.toLowerCase().replaceAll(" ", "-");

function EventsHeader() {
  return (
    <section className="events-page-header">
      <Breadcrumb items={["Events"]} />
      <div className="events-title-row">
        <div><h1>Events</h1><p>Founder meetups, community conferences, and flagship Mundhe Banni events across Karnataka.</p></div>
        <div className="events-header-side">
          <div className="events-header-stats"><div><strong>250+</strong><span>Events Conducted</span></div><div><strong>12</strong><span>Upcoming Events</span></div><div><strong>82+</strong><span>Active Groups</span></div></div>
          <a className="button primary" href="/events/create">＋ Create Event</a>
        </div>
      </div>
    </section>
  );
}

function FlagshipEventHero() {
  return (
    <section className="flagship-event-hero">
      <div>
        <div className="flagship-top"><span>🚀 Flagship Event</span><div className="countdown"><small>Starts in:</small><strong>14<em>Days</em></strong><b>:</b><strong>08<em>Hours</em></strong><b>:</b><strong>32<em>Mins</em></strong></div></div>
        <h2>Karnataka Startup Summit 2025</h2>
        <div className="flagship-meta"><span>📅 Fri-Sat, 30-31 May 2025</span><span>📍 NIMHANS Convention Centre, Bangalore</span><span>🎥 In-Person + Live Stream</span></div>
        <div className="flagship-attendees"><AvatarStack count="+ 428 registered" /></div>
        <div className="featured-actions"><a className="button primary" href="/events/bengaluru-founder-meetup">Register Now</a><a className="button ghost" href="#schedule">View Full Schedule</a></div>
      </div>
      <div className="speaker-preview">{[["KM", "Kiran Mazumdar Shaw", "Building Karnataka's Next Unicorn"], ["ST", "Sachin Taparia", "Community-Led Growth for Startups"], ["VK", "Vani Kola", "What Investors Look for in 2025"]].map(([initials, name, talk]) => <article key={name}><span>{initials}</span><div><strong>{name}</strong><small>{talk}</small></div></article>)}<a href="#speakers">+ 8 more speakers →</a></div>
    </section>
  );
}

function EventsToolbar() {
  return (
    <>
      <section className="events-tabs">
        <nav>{["All Events", "Upcoming", "My RSVPs", "Past Events"].map((tab, index) => <button className={index === 0 ? "active" : ""} key={tab}>{tab}</button>)}</nav>
        <div className="view-toggle"><button className="active" aria-label="Grid view"><Grid3X3 size={17} /></button><button aria-label="List view"><List size={18} /></button></div>
        <div className="events-filter-row">
          <div className="resource-search"><Search size={16} /><input placeholder="Search events by name or keyword..." /></div>
          <label className="select-filter"><span>Type:</span><select><option>All Types</option><option>Group Meetup</option><option>Community Conference</option><option>Flagship Event</option></select></label>
          <label className="select-filter"><span>Format:</span><select><option>All Formats</option><option>In-Person</option><option>Virtual</option><option>Hybrid</option></select></label>
          <label className="select-filter"><span>City:</span><select><option>All Cities</option><option>Bengaluru</option><option>Mysuru</option><option>Mangaluru</option></select></label>
          <label className="select-filter date-filter"><span>Date:</span><input value="May 2025 - Jun 2025" readOnly /></label>
          <button className="mobile-filter"><Filter size={16} />Filter & Sort</button>
          <p>Showing 12 upcoming events</p>
        </div>
      </section>
      <section className="event-pills">{["🗓 All Events", "👥 Group Meetups", "🌍 Community Conferences", "🚀 Flagship Events", "💻 Virtual Only"].map((pill, index) => <button className={index === 0 ? "active" : ""} key={pill}>{pill}</button>)}</section>
    </>
  );
}

function EventDirectoryCard({ event }) {
  const [type, month, day, title, date, location, attendees, organiser, cta, tone] = event;
  return (
    <article className={`event-directory-card ${tone === "flagship" ? "featured" : ""}`}>
      <a className={`event-directory-image ${tone}`} href="/events/bengaluru-founder-meetup">
        <div className="event-date"><span>{month}</span><strong>{day}</strong></div><span className={`event-type-badge ${eventTypeClass(type)}`}>{type}</span><Bookmark size={18} />
      </a>
      <div className="event-directory-body">
        <a href="/events/bengaluru-founder-meetup"><h3>{title}</h3></a>
        <p><CalendarDays size={14} />{date}</p><p><MapPin size={14} />{location}</p>
        <AvatarStack count={`${attendees} attending`} />
        <div className="event-directory-footer"><span>👤 {organiser}</span><button className={cta === "Get Tickets" ? "filled" : ""}>{cta}</button></div>
        {title === "Investor Connect Mysuru" && <small className="spots-left">32 spots left</small>}
      </div>
    </article>
  );
}

function EventsPage() {
  return (
    <><Header /><main><EventsHeader /><FlagshipEventHero /><EventsToolbar /><section className="events-directory-grid">{eventsDirectory.map((event) => <EventDirectoryCard event={event} key={event[3]} />)}<button className="load-more">Load More Events</button></section></main><Footer /></>
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

const groupsDirectory = [
  ["Founder / General", "Bengaluru Founders", "Public", "🔥 Active", "Bengaluru", "Bengaluru's largest founder community for early and growth-stage startups.", "1.2K", "2h ago", 48, "Joined", "#2456A0", "🏙️"],
  ["Agritech", "Agritech Karnataka", "Public", "🔥 Active", "Bengaluru", "Building the future of farming and rural commerce across Karnataka.", "860", "5h ago", 21, "Join Group", "#1A7A4A", "🌿"],
  ["Fintech", "Fintech Builders", "Public", "🔥 Active", "Bengaluru", "Fintech founders, product managers, and engineers building financial products.", "1.1K", "1h ago", 32, "Join Group", "#374151", "💰"],
  ["Women Founders", "Women Entrepreneurs", "Public", "🔥 Active", "Karnataka", "A safe, supportive space for women building businesses across Karnataka.", "950", "3h ago", 28, "Join Group", "#9B3BB5", "👩"],
  ["SaaS / Tech", "SaaS Builders Karnataka", "Public", "Active", "Bengaluru", "Product founders and engineers building SaaS for global and Indian markets.", "840", "6h ago", 19, "Join Group", "#5B3DB5", "💻"],
  ["Founder / General", "Mysuru Founders", "Public", "Active", "Mysuru", "Founders and early-stage entrepreneurs building from Mysuru.", "320", "1d ago", 8, "Join Group", "#2456A0", "🏙️"],
  ["Edtech", "Edtech Karnataka", "Public", "Quiet", "Karnataka", "Founders working on education products for K-12, higher ed, and skilling.", "280", "3d ago", 5, "Join Group", "#B8760A", "📚"],
  ["Healthcare", "HealthTech Founders", "Private", "Active", "Bengaluru", "A private community for founders building in healthcare and medtech.", "190", "8h ago", 14, "Join Group", "#C84B2F", "🏥"],
  ["Founder / General", "Startup Legal & Finance Circle", "Invite-Only", "Active", "Karnataka", "Closed group for founders navigating fundraising, legal, and finance issues.", "145", "4h ago", 11, "Pending", "#2456A0", "⚖️"]
];

const groupClass = (value) => value.toLowerCase().replaceAll(" / ", "-").replaceAll(" ", "-");

function GroupsHeader() {
  return <section className="groups-page-header"><Breadcrumb items={["Groups"]} /><div className="groups-title-row"><div><h1>Founder Groups</h1><p>Join focused communities of Karnataka founders, operators, and builders working in the same space as you.</p></div><div className="groups-header-side"><div className="groups-header-stats"><div><strong>82+</strong><span>Active Groups</span></div><div><strong>5,200+</strong><span>Members</span></div><div><strong>340+</strong><span>Discussions This Week</span></div></div><a className="button primary" href="/groups/create">＋ Create Group</a></div></div></section>;
}

function FeaturedGroupBanner() {
  return <section className="featured-group-banner"><div><span className="featured-pill">🔥 Featured Group of the Week</span><h2>Bengaluru Founders</h2><p>The largest founder community in Bengaluru - a space for early and growth-stage founders to share wins, ask hard questions, and connect with peers.</p><div className="featured-meta"><span>👥 1.2K Members</span><span>💬 Active discussions</span><span>📍 Bengaluru</span><span className="public-meta">🔓 Public Group</span></div><div className="featured-actions"><button className="button primary">Join Group</button><a className="button ghost" href="/groups/bengaluru-founders">View Group →</a></div></div><div className="featured-group-side"><div className="member-cluster">{["VA","SP","RK","AN","PK","RD"].map((item) => <span key={item}>{item}</span>)}</div><small>+ 1,180 members</small><article><b>💬 Latest Discussion</b><strong>How SaaS founders are navigating sales cycles in 2025</strong><small>24 replies · 2h ago</small></article></div></section>;
}

function RecommendedGroups() {
  const recs = [["🏙️","Bengaluru Founders","1.2K Members · 🔥 Active","Near you: Bengaluru"],["💻","SaaS Builders Karnataka","840 Members · 🔥 Active","Matches: SaaS"],["💰","Fintech Builders","1.1K Members · 🔥 Active","Matches: Fintech"],["🌿","Agritech Karnataka","860 Members · Active","Matches: Agritech"]];
  return <section className="recommended-groups"><div className="recommended-header"><div><h2>Recommended for You</h2><p>Based on your interests and location</p></div><a href="#all">Browse All →</a></div><div className="recommended-row">{recs.map(([icon,name,meta,why]) => <article key={name}><div><span>{icon}</span><h3>{name}</h3></div><p>{meta}</p><small>{why}</small><button>Join Group</button></article>)}</div></section>;
}

function GroupsToolbar() {
  return <section className="groups-tabs"><div className="groups-tab-row"><nav>{["Featured","My Groups (3)","Browse All","Recommended"].map((tab,index) => <button className={index===0 ? "active" : ""} key={tab}>{tab}</button>)}</nav><label className="select-filter"><span>Sort:</span><select><option>Most Active</option><option>Newest</option><option>Most Members</option><option>A-Z</option></select></label></div><div className="groups-filter-row"><div className="resource-search"><Search size={16}/><input placeholder="Search groups by name or keyword..." /></div>{[["Category:",["All Categories","Sector-based","Geography-based","Women Founders"]],["Location:",["All Cities","Bengaluru","Mysuru","Mangaluru"]],["Privacy:",["All","Public","Private","Invite-Only"]],["Activity:",["All","🔥 Active","Quiet","New"]]].map(([label,opts]) => <label className="select-filter" key={label}><span>{label}</span><select>{opts.map(o => <option key={o}>{o}</option>)}</select></label>)}<button className="mobile-filter"><Filter size={16}/>Filter & Sort</button><p>Showing 82 groups</p></div></section>;
}

function TrendingGroups() {
  return <section className="trending-groups"><div><h2>🔥 Trending This Week</h2><span><button>‹</button><button>›</button></span></div><div className="trending-row">{[["🏙️","Bengaluru Founders","48 new posts"],["💰","Fintech Builders","32 new posts"],["👩","Women Entrepreneurs","28 new posts"],["🌿","Agritech Karnataka","21 new posts"],["💻","SaaS Builders Karnataka","19 new posts"]].map(([icon,name,posts],index) => <article key={name}><b>{index+1}</b><span>{icon}</span><div><strong>{name}</strong><small>{posts} this week</small></div></article>)}</div></section>;
}

function GroupDirectoryCard({ group }) {
  const [category,name,privacy,activity,location,description,members,lastActive,discussions,button,color,icon] = group;
  const [state,setState] = React.useState(button);
  return <article className="group-directory-card" style={{"--group-color":color}}><a className={`group-banner ${groupClass(category)}`} href="/groups/bengaluru-founders"><span className={`privacy-badge ${groupClass(privacy)}`}>{privacy === "Public" ? "🔓" : privacy === "Private" ? "🔒" : "🔑"} {privacy}</span><small>{activity === "🔥 Active" ? activity : activity}</small></a><div className="group-directory-body"><span className="group-directory-logo">{icon}</span><a href="/groups/bengaluru-founders"><h3>{name}</h3></a><span className={`group-category-badge ${groupClass(category)}`}>{category}</span><p>{description}</p><small>📍 {location}</small><div className="group-member-row"><AvatarStack count={`${members} Members`}/><span>Active {lastActive}</span></div><div className="group-card-footer"><span>💬 {discussions} discussions</span><button className={state === "Joined" ? "joined" : state === "Pending" ? "pending" : ""} onClick={() => state === "Join Group" && setState("Joined")}>{state === "Joined" ? "✓ Joined" : state}</button></div></div></article>;
}

function GroupsPage() {
  return <><Header/><main><GroupsHeader/><FeaturedGroupBanner/><RecommendedGroups/><GroupsToolbar/><TrendingGroups/><section className="groups-directory-grid">{groupsDirectory.map(group => <GroupDirectoryCard group={group} key={group[1]}/>)}<button className="load-more">Load More Groups</button></section></main><Footer/></>;
}

const groupDiscussions = [
  ["?","How SaaS founders are navigating sales cycles in 2025?",["SaaS","Sales"],"Arjun N.","2h ago","24","18","✓ Answered","question"],
  ["📢","Our next meetup is confirmed - May 24th at Koramangala Social",["Events"],"Admin","5h ago","56","12","📌 Pinned","announcement"],
  ["💡","What if we did monthly pitch practice sessions?",["Community"],"Priya K.","1d ago","32","21","","idea"],
  ["💬","Looking for a co-founder in the logistics space",["Co-founder"],"Rahul D.","2d ago","15","7","","general"],
  ["?","Best approach for pre-seed fundraising in India 2025?",["Fundraising"],"Meera S.","3d ago","41","29","","question"]
];

function GroupDetailPage() {
  return <><Header/><main className="group-detail-page"><Breadcrumb items={["Groups","Bengaluru Founders"]}/><section className="group-detail-banner"><div><span className="group-directory-logo">🏙️</span><h1>Bengaluru Founders</h1><span className="privacy-badge public">🔓 Public</span><small>🔥 Active</small><p>1,200 Members · Managed by Vikram Anand</p></div></section><section className="group-action-bar"><div><strong>✓ You're a member</strong><button>Leave Group</button></div><div><button>🔔 Notifications</button><button>👤 Invite Members</button><button>↗</button></div></section><nav className="group-detail-tabs">{["Discussions","Events","Members","Files","About"].map((tab,index) => <button className={index===0?"active":""} key={tab}>{tab}</button>)}</nav><section className="group-discussion-layout"><div className="discussion-feed"><article className="pinned-post"><span>📌 Pinned</span><h3>Our next meetup is confirmed - May 24th at Koramangala Social</h3><p>Join us for an evening of founder conversations and networking.</p><small>Admin · 5h ago</small></article><div className="discussion-sort"><div><button className="active">Latest</button><button>Most Liked</button><button>Unanswered</button></div><span>Unread (3)</span></div><button className="start-discussion">＋ Start Discussion in This Group</button><div className="discussion-list">{groupDiscussions.map(([icon,title,tags,author,time,votes,replies,badge,tone]) => <article key={title}><i className={tone}>{icon}</i><div><h3>{title}{badge && <span>{badge}</span>}</h3><div className="tag-row">{tags.map(tag => <span key={tag}>{tag}</span>)}</div><small>{author} · {time}</small></div><aside><span>▲ {votes}</span><span>💬 {replies}</span></aside></article>)}</div><a className="load-discussions" href="#more">Load More Discussions</a></div><aside className="group-detail-sidebar"><GroupWidget title="About This Group"><p>Bengaluru's largest founder community for early and growth-stage startups.</p><small>👥 1,200 Members</small><small>💬 48 posts/week</small><small>🗓 Est. Jan 2024</small></GroupWidget><GroupWidget title="Admins & Moderators"><div className="admin-row"><span>VA</span><strong>Vikram Anand</strong><small>Admin</small></div><div className="admin-row"><span>SP</span><strong>Sneha Patil</strong><small>Moderator</small></div></GroupWidget><GroupWidget title="Recently Joined"><AvatarStack count="+ 1,194 more members"/><a href="#members">View All Members →</a></GroupWidget></aside></section></main><button className="group-admin-fab">⚙️</button></>;
}

function GroupWidget({title,children}) {
  return <section className="group-widget"><h3>{title}</h3>{children}</section>;
}

function CreateGroupPage() {
  return <><Header/><main className="create-group-page"><Breadcrumb items={["Groups","Create Group"]}/><h1>Create a New Group</h1><p>Groups are reviewed and approved by the Mundhe Banni admin team before going live.</p><div className="info-note">ℹ️ Your group submission will be reviewed. You'll receive an email once approved. You can use the platform normally while your group is pending review.</div><form className="upload-form"><UploadSection title="Group Identity"><label>Group Name *<input placeholder="e.g. Bengaluru SaaS Founders"/></label><label>Short Description *<input placeholder="One line - what is this group about?"/></label><label>Full Description<textarea placeholder="Describe the group's purpose, who should join, and what members can expect."/></label><label>Category *<select><option>Select...</option><option>Sector-based</option><option>Geography-based</option><option>Women Founders</option></select></label><label>City / Region<select><option>Karnataka-wide</option><option>Bengaluru</option><option>Mysuru</option></select></label></UploadSection><UploadSection title="Branding"><label>Group Logo<div className="dropzone compact">Upload a square logo (PNG, min 200x200px)</div></label><label>Banner Image<div className="dropzone compact">Upload a banner (JPG or PNG, min 1200x300px)</div></label></UploadSection><UploadSection title="Privacy & Settings"><div className="privacy-selector">{[["🔓","Public","Anyone can find and join"],["🔒","Private","Approval required to join"],["🔑","Invite Only","Join by invitation only"]].map(([icon,title,desc],index)=><label className={index===0?"selected":""} key={title}><input type="radio" name="privacy" defaultChecked={index===0}/>{icon}<strong>{title}</strong><small>{desc}</small></label>)}</div><label>Who can upload files?<div className="format-radios"><label><input type="radio" name="files" defaultChecked/>Group Admin only</label><label><input type="radio" name="files"/>All members</label></div></label><label>Interest Tags<div className="industry-pills selectable">{["SaaS","Fintech","Agritech","Edtech","D2C","Healthcare","Deep Tech"].map((tag,index)=><span className={index<2?"selected":""} key={tag}>{tag}</span>)}</div></label></UploadSection><UploadSection title="Community Rules (Optional)">{["Be respectful and constructive in all discussions.","No spam, self-promotion, or unsolicited DMs.","Keep discussions relevant to the group's focus area."].map((rule,index)=><div className="rule-row" key={rule}><span>{index+1}.</span><input defaultValue={rule}/><button type="button">×</button></div>)}</UploadSection><div className="submit-row"><button type="button">Save as Draft</button><button type="button">Submit for Review →</button><small>By creating a group you agree to Mundhe Banni's <a href="#guidelines">Community Guidelines</a>.</small></div></form></main></>;
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>Build Your Startup<br />Faster. <span>Together.</span></h1>
        <p>Mundhe Banni is Karnataka's most trusted network of founders, experts, investors and service providers.</p>
        <div className="hero-actions">
          <a className="button primary" href="#community"><Users size={17} />Join Community</a>
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
  return <div className="section-header"><h2>{title}</h2>{link && <a href="#view">{link} <ChevronRight size={15} /></a>}</div>;
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

function Cta() {
  return <section className="cta"><Users size={58} /><div><h2>Be a part of Karnataka's most active founder network.</h2><p>Connect, collaborate and grow together.</p></div><a className="button primary" href="#join">Join Community</a></section>;
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
  return <><Header /><main><Hero /><Stats /><EventCards /><CommunityPulse /><Groups /><Providers /><Resources /><Cta /></main><Footer /><a className="sticky-join" href="#join">Join Community</a></>;
}

function App() {
  if (window.location.pathname === "/my-profile") return <MyProfilePage />;
  if (window.location.pathname === "/people") return <PeoplePage />;
  if (window.location.pathname === "/groups/create") return <CreateGroupPage />;
  if (window.location.pathname === "/groups/bengaluru-founders") return <GroupDetailPage />;
  if (window.location.pathname === "/groups") return <GroupsPage />;
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

createRoot(document.getElementById("root")).render(<App />);
