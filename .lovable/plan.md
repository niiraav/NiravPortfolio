
# Fix 404 Error on /cv Page for GitHub Pages

## The Problem
Your site is a Single Page Application (SPA) using React Router. When you visit `https://www.nirav.work/cv` directly (or refresh on that page), GitHub Pages tries to find a file at `/cv/index.html`. Since that doesn't exist, it returns a 404 error.

## The Solution
Create a custom `404.html` file that redirects all unknown routes back to your React app. This is a well-known workaround for SPAs on GitHub Pages.

---

## Implementation Steps

### Step 1: Create a 404.html redirect page
Create `public/404.html` with a script that:
- Captures the current URL path (e.g., `/cv`)
- Redirects to the main page while preserving the path in a query parameter
- Allows React Router to handle the routing

### Step 2: Update index.html
Add a small script to `index.html` that:
- Checks if there's a redirect path in the URL
- Restores the original URL using the History API
- This happens before React loads, so the router sees the correct path

---

## How It Works
1. User visits `https://www.nirav.work/cv`
2. GitHub Pages doesn't find `/cv/index.html`, serves `404.html` instead
3. `404.html` redirects to `/?p=/cv`
4. `index.html` loads and restores the URL to `/cv` using History API
5. React Router sees `/cv` and renders the CV page

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `public/404.html` | Create - Redirect script for GitHub Pages |
| `index.html` | Modify - Add URL restoration script |

This is the standard solution for SPAs hosted on GitHub Pages and will make `https://www.nirav.work/cv` work correctly.
