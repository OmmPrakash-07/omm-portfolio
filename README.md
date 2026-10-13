# Omm Portfolio

A modern, responsive, and animated developer portfolio built with **Next.js, TypeScript, Tailwind CSS, Framer Motion, Lucide React, and React Icons**.

🌐 **Live Website:** [omm-portfolio-sigma.vercel.app](https://omm-portfolio-sigma.vercel.app/)

## 🚀 Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS and custom CSS
- **Animations:** Framer Motion and CSS animations
- **Icons:** Lucide React and React Icons
- **PDF Preview:** React PDF
- **AI Integration:** Google Gemini API
- **Deployment:** Vercel
- **Version Control:** Git and GitHub

## ✨ Features

- Modern, developer-focused user interface
- Responsive desktop and mobile layouts
- Animated navigation bar with mobile menu
- Hero section with developer introduction and animated roles
- About section and technical skills showcase
- Interactive Technology Solar System with animated orbits
- Real technology logos with recognizable brand colors
- Clickable technology logos with descriptions
- Pause and resume controls for orbit animations
- Featured projects with GitHub and live demo links
- Contact section with email and LinkedIn
- Social media links and resume PDF integration
- Certificate showcase with PDF first-page previews
- Automatic certificate preview rendering without manually creating PNG files
- Original certificate PDFs available through external links
- Animated certificate cards with hover effects
- Horizontally scrolling certificate showcase with hidden scrollbar
- Dark-themed interface with ambient background effects
- Smooth animations and interactive components
- SEO metadata and canonical URL
- Open Graph and Twitter/X metadata
- Custom social preview image
- Accessible interactive controls and reduced-motion support

## 🌌 Interactive Technology Solar System

The portfolio features an animated solar system that showcases my technology stack around my profile photo.

### Features

- **Four animated orbits:** Languages, frontend, backend, and AI and development tools.
- **Real technology logos:** Recognizable technology logos instead of text abbreviations.
- **Interactive planets:** Click a technology logo to view its name and description.
- **Hover tooltips:** Identify technologies by hovering over their logos.
- **Animation controls:** Pause or resume the orbit animation.
- **Responsive design:** Adapts to desktop and mobile screens.
- **Accessibility:** Includes accessible button labels and reduced-motion support.

### Technologies Showcased

- **Programming Languages:** Python, Java, JavaScript, TypeScript
- **Frontend:** React, Next.js, HTML5, Tailwind CSS
- **Backend:** Node.js, Express.js, Spring Boot, FastAPI, C# / .NET
- **Databases:** PostgreSQL, MongoDB
- **AI and Development Tools:** OpenAI, LangChain, GitHub, Docker

### Implementation

- React components and TypeScript
- React Icons for technology logos
- CSS keyframe animations for orbital motion
- React state for technology selection and animation controls
- Custom CSS for orbit styling, hover effects, and responsiveness

## 🏆 Certificates

The portfolio includes a certificate showcase for professional learning and achievements.

### Features

- PDF-based certificate previews rendered directly in the browser
- First-page previews without the standard PDF viewer toolbar
- No need to manually create a separate PNG image for every certificate
- Original certificate PDFs remain accessible through external links
- Consistent certificate card dimensions
- Smooth hover scaling and subtle glow effects
- Horizontal auto-sliding certificate cards
- Hidden scrollbar for a cleaner interface
- Responsive layout for desktop and mobile
- Loading and error states for certificate previews

### Adding a Certificate

1. Add the certificate PDF to `public/certificates/`.
2. Add its title, issuer, date, PDF path, and unique ID to `src/data/certificates.ts`.
3. The preview component renders the first page automatically.
4. No manually generated PNG preview is required.

Example project structure:

```text
public/
└── certificates/
    ├── MERN.pdf
    └── eduvate.pdf

src/
├── components/
│   ├── CertificatePreview.tsx
│   └── Certificates.tsx
└── data/
    └── certificates.ts
```

**Note:** Adding a PDF to the folder alone does not automatically register it in the certificate list. Add its details to the certificate data file as well.

## 🧑‍💻 Featured Projects

| Project | Live Demo / Repository |
|---|---|
| DevTeam AI | [Live Demo](https://devteam-ai.vercel.app/) |
| SmartServiceX | [GitHub Repository](https://github.com/OmmPrakash-07/SmartServiceX) |
| AI Resume Analyzer | [Live Demo](https://ai-resume-analyzer-ommprakash07.streamlit.app/) |
| Restaurant Ordering App | [Live Demo](https://restaurant-ordering-app-xi.vercel.app/) |
| Bike Rental | [Live Demo](https://bike-rental-phi.vercel.app/) |

## 📂 Project Structure

```text
omm-portfolio/
├── public/
│   ├── certificates/
│   │   ├── MERN.pdf
│   │   └── eduvate.pdf
│   ├── images/
│   │   └── Omm.jpg
│   ├── resume.pdf
│   └── opengraph-image.png
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── ai-omm/
│   │   │       └── chat/
│   │   │           └── route.ts
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TechnologySolarSystem.tsx
│   │   ├── TechnologySolarSystem.css
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Certificates.tsx
│   │   ├── CertificatePreview.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── AIOmmChat.tsx
│   ├── data/
│   │   ├── certificates.ts
│   │   └── ai-omm-knowledge.ts
│   └── lib/
├── .env.local
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

*Note: This illustrates the main project files. Your actual directory may contain additional files.*

## 🔍 SEO & Social Sharing

- [x] Page title and meta description
- [x] SEO keywords and author metadata
- [x] Canonical URL
- [x] Open Graph metadata
- [x] Twitter/X card metadata
- [x] Social preview image
- [x] Search engine indexing directives
- [x] Production build verification

## 🤖 AI Omm — Personal AI Assistant

AI Omm is a portfolio assistant designed to help visitors learn about Omm Prakash Parida, his projects, technologies, and professional interests.

### Current Capabilities

- Portfolio knowledge base containing profile and project information
- Server-side chat API using the Google Gemini API
- Configurable Gemini model
- Conversation context sent to the AI API
- Responsive chat interface component
- Loading indicators and error handling

### Knowledge Base

The portfolio knowledge base is maintained in:

`src/data/ai-omm-knowledge.ts`

It contains profile information, project descriptions, technology lists, public links, and conversation guidelines.

### Environment Configuration

Create a `.env.local` file in the project root and configure your Gemini API credentials:

```env
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=your_supported_gemini_model
```

Replace the placeholders with valid values supported by your integration. Never commit `.env.local` or expose your API key in frontend code, public repositories, or screenshots.

Keep `.env.local` listed in `.gitignore`. Configure environment variables separately in Vercel before deploying the AI functionality.

### AI Omm Implementation Status

- [x] Initial portfolio knowledge base
- [x] Server-side AI text-chat API
- [x] Gemini API integration tested
- [x] Initial chat interface component
- [ ] Verify complete end-to-end chat functionality
- [ ] Voice input and spoken AI responses
- [ ] Animated avatar
- [ ] Production security, rate limiting, and usage controls

## 📈 Project Status

- [x] Project setup and design system
- [x] Animated navbar and mobile navigation
- [x] Hero section with animated roles
- [x] About section
- [x] Skills section
- [x] Projects showcase
- [x] Contact section
- [x] Footer
- [x] SEO and social sharing metadata
- [x] Resume PDF integration
- [x] Interactive Technology Solar System
- [x] Animated technology orbits and real logos
- [x] Clickable technology descriptions
- [x] Orbit animation pause and resume controls
- [x] Certificate showcase and PDF previews
- [x] Certificate hover animations
- [x] Responsive certificate cards
- [x] Deployment to Vercel
- [x] Production build verification
- [x] AI Omm backend API implementation
- [ ] Verify complete AI Omm frontend integration and end-to-end functionality

## ⚙️ Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/OmmPrakash-07/omm-portfolio.git
cd omm-portfolio
npm install
```

Create `.env.local` if you plan to run AI Omm locally, then configure the environment variables described above.

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### TypeScript Check

```bash
npx tsc --noEmit
```

### Production Build

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## 👨‍💻 Author

**Omm Prakash Parida**

- **Portfolio:** [omm-portfolio-sigma.vercel.app](https://omm-portfolio-sigma.vercel.app/)
- **GitHub:** [OmmPrakash-07](https://github.com/OmmPrakash-07)
- **LinkedIn:** [Omm Prakash Parida](https://www.linkedin.com/in/omm-prakash-parida/)
- **Email:** [ommprakashparida114@gmail.com](mailto:ommprakashparida114@gmail.com)

---

Built with ❤️ using Next.js, TypeScript, React, and modern web technologies.
