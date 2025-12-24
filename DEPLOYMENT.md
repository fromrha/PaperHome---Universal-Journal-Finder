# Deployment Guide to Vercel

PaperHome is a Next.js application designed to be deployed effortlessly on [Vercel](https://vercel.com), the creators of Next.js.

## Prerequisites

1.  A [Vercel Account](https://vercel.com/signup).
2.  Your project code pushed to a remote Git repository (GitHub, GitLab, or Bitbucket).

## Deployment Steps

1.  **Dashboard**: Log in to your Vercel Dashboard and click **"Add New..."** > **"Project"**.
2.  **Import Repository**: Select your Git provider and import the `PaperHome` repository.
3.  **Configure Project**:
    *   **Framework Preset**: Next.js (should be auto-detected).
    *   **Root Directory**: `paperhome-web` (IMPORTANT: Since the app is in a subdirectory, you must click "Edit" next to Root Directory and select `paperhome-web`).
4.  **Environment Variables**:
    *   Expand the **"Environment Variables"** section.
    *   Add your Gemini API Key:
        *   Key: `GEMINI_API_KEY`
        *   Value: `Your_Actual_Gemini_API_Key_Here`
5.  **Deploy**: Click **"Deploy"**.

## Post-Deployment

*   Vercel will build your application and assign a production URL (e.g., `paperhome-web.vercel.app`).
*   Verify functionality by uploading a sample PDF and checking journal search results.

## Local Development vs. Production

*   The local build uses `master_journals.json` which is bundled with the application. This ensures fast SINTA journal lookups without an external database.
*   Crossref and DOAJ searches are performed via external APIs in real-time.
