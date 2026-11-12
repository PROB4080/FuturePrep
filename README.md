# FuturePrep Learning — redesign concept

A responsive, multi-section website concept built as a lightweight static front-end. The visual direction is premium, warm, education-focused, and designed to speak to both institutional buyers and families.

## Preview
Open `index.html` in a browser. No build step or package installation is required.

## Included
- Responsive homepage with mobile navigation
- Program cards for Personal Finance, Business & Entrepreneurship, and AI Foundations
- Two school delivery pathways: We Teach It / You Teach It
- Dedicated audience pathways for schools/districts and families
- About, approach, and conversion sections
- Responsive layouts and reduced-motion support
- SEO title and description basics

## Important launch requirements
This is a front-end concept, not a production-connected website. Before launch:
1. Confirm the official business email, phone, address, and legal entity details.
2. Replace the placeholder email and legal/footer links with verified details.
3. Connect a real inquiry form to the company's CRM/email workflow and test delivery.
4. Add verified founder/educator biographies, school partnerships, testimonials, outcomes, and approved photography. No credentials, endorsements, or performance statistics have been fabricated here.
5. Review the privacy policy, cookie/analytics disclosures, student-data practices, accessibility, and any applicable state/federal education privacy requirements with qualified counsel.
6. Confirm grade bands, program duration, delivery locations, curriculum standards alignment, safeguarding policies, and service availability before publishing those specifics.
7. Replace remote Unsplash photography with licensed brand-approved imagery. Google Fonts and image URLs currently load from third-party services.
8. Run Lighthouse, cross-browser, keyboard, screen-reader, and mobile-device tests.

## Platform recommendation
For this marketing site, WordPress is the practical default if nontechnical staff need to edit program pages, resources, and articles. A Next.js build is preferable if the roadmap includes custom portals, student/teacher accounts, or interactive learning products. This prototype deliberately avoids locking the client into either CMS.

## Pages included
- `index.html` — homepage
- `programs.html` — program overview
- `personal-finance.html` — personal finance program
- `entrepreneurship.html` — business and entrepreneurship program
- `ai-foundations.html` — AI foundations program
- `schools.html` — school and district buyer journey
- `families.html` — family and learner pathway
- `about.html` — mission and approach
- `resources.html` — planned resource hub structure
- `contact.html` — inquiry form prototype

## Inquiry forms
The forms validate required fields in the browser and prepare an email using `mailto:`. They do not securely store or transmit leads to a server. Replace the placeholder `hello@futurepreplearning.com` address and connect a production form/CRM integration before launch.

## Interactive polish update
This version adds a premium interaction layer across the site: sticky glass navigation with a scroll-progress indicator, reveal-on-scroll transitions, animated hero details, richer program and delivery-card hover states, subtle button sheen, mobile-safe motion, a back-to-top control, and reduced-motion accessibility support. All effects are implemented with CSS and lightweight vanilla JavaScript; no framework or build step is required.
