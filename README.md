# Sri Harsha Vardhan Portfolio

A premium, responsive personal portfolio website for Sri Harsha Vardhan, built with HTML5, CSS3, and JavaScript.

## Features

- Modern glassmorphism interface
- Dark and light mode with saved preference
- GSAP entrance and scroll animations
- Particles.js animated background
- Typed.js hero role animation
- AOS scroll reveal animations
- Responsive layout for desktop, tablet, and mobile
- SEO meta tags and JSON-LD structured data
- GitHub Pages ready static project

## Project Structure

```text
.
|-- assets
|   |-- docs
|   |   `-- Sri-Harsha-Vardhan-Resume.pdf
|   `-- images
|       `-- sri-harsha-vardhan.jpg
|-- css
|   |-- animations.css
|   |-- responsive.css
|   `-- style.css
|-- js
|   |-- app.js
|   |-- cursor.js
|   |-- particles.js
|   |-- theme.js
|   `-- typing.js
|-- index.html
`-- README.md
```

## Local Preview

Open `index.html` directly in a browser, or run a local static server:

```bash
python -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

## Deploy To GitHub Pages

1. Create a new GitHub repository.
2. Upload all files from this folder to the repository root.
3. Go to `Settings > Pages`.
4. Set the source to `Deploy from a branch`.
5. Choose the `main` branch and `/root`.
6. Save and wait for GitHub Pages to publish the site.

## Customize

- Update profile content in `index.html`.
- Adjust theme colors in `css/style.css` under `:root`.
- Edit typed hero roles in `js/typing.js`.
- Tune background particles in `js/particles.js`.
