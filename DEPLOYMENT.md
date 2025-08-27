# How to Deploy Your Portfolio Website

## Option 1: GitHub Pages (Recommended for Static Sites)

1. **Create a GitHub Repository**
   - Go to [github.com](https://github.com/) and create a new public repository (e.g., `portfolio`).

2. **Add Your Files**
   - Upload all files from your `portfolio` folder (`index.html`, `style.css`, `script.js`, etc.) to the repository.
   - You can drag and drop files on GitHub or use Git:
     ```sh
     git init
     git add .
     git commit -m "Initial portfolio"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
     git push -u origin main
     ```

3. **Enable GitHub Pages**
   - Go to your repository's **Settings** > **Pages**.
   - Under "Source", select the `main` branch and `/ (root)` folder.
   - Click "Save".  
   - After a minute, your site will be live at:  
     `https://YOUR_USERNAME.github.io/portfolio/`

---

## Option 2: Vercel or Netlify (Alternative, also free)

- Go to [vercel.com](https://vercel.com/) or [netlify.com](https://netlify.com/).
- Sign in with GitHub and import your repository.
- Follow the prompts to deploy.  
- You will get a live link (e.g., `https://your-portfolio.vercel.app`).

---

## Tips

- After deployment, test your site on mobile and desktop.
- Update your resume with your new portfolio link!
