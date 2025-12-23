# Personal Portfolio

Simple static portfolio site for Allan Nabule. Contains an about section, projects, and a contact form that uses Netlify Forms for submissions.

## Contents
- `index.html` — main site HTML
- `style.css` — styles
- `script.js` — site behavior (navigation + contact form AJAX)
- `images/` — assets used in the site

## Local testing
1. Open `index.html` in your browser (double-click or use a local static server).
2. The navigation and UI should work without any build step.

To run a quick local server (optional, recommended for testing fetch/form behavior):
```powershell
# from the project directory
# Python 3.x
python -m http.server 8000
``` 
Then open http://localhost:8000/portfolio.html

## Netlify deployment and contact form
This project is configured to use Netlify Forms. I added the required form markup and a small AJAX handler in `script.js` so Netlify can detect submissions at build time and your visitors get immediate feedback.

Deployment steps:
1. Commit and push this repo to a Git provider (GitHub, GitLab, Bitbucket).
2. Create a new site on Netlify and connect your repository (or drag-and-drop the output folder for a simple deploy).
3. On build, Netlify will detect the form defined in `script.html` and start collecting submissions.
4. To view submissions: Netlify Dashboard → Sites → Your site → Forms.
5. Configure notifications or integrations (email, Slack, Zapier) from the Netlify Forms settings.

Testing the form locally:
- Netlify only captures form submissions from deployed sites because it parses HTML at build time. To fully test the Netlify dashboard integration, deploy the site to Netlify.
- You can still test the client-side behavior locally using the quick server above; the AJAX handler will show success/error messages but Netlify won't record the submission until deployed.

## Notes & next steps
- If you prefer email delivery directly (without using Netlify), I can add a serverless function or integrate a third-party service (EmailJS, Formspree).
- I can also add a dedicated success page, confirmation modal, or email notifications once submissions arrive.

## Contact
- Site owner: Allan Nabule — nabuleallan1@gmail.com
# personal

