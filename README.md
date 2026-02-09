# Procedural Real-Time Facial Avatar (Browser)

This project is a **fully in-browser** real-time facial avatar suitable for an academic thesis:

- **Webcam** → **MediaPipe FaceMesh** (468 landmarks)
- **Procedural triangulated mesh** (no external 3D models)
- **Real-time vertex deformation** (landmark-driven + audio-driven jaw/lip + landmark-driven blinking)
- **Procedural eyeballs** (depth cues; no external assets)
- **Three.js (WebGL 2.0)** rendering
- **WebRTC-ready architecture** (single local user implemented; remote users can be added by streaming landmarks over DataChannels)

## WebRTC-ready design (implemented architecture, single-user runtime)

The avatar renderer is fed by a generic landmark stream interface:

- Local user: `FaceTracker` implements `LandmarkStream` (MediaPipe producer).
- Remote users (future): implement `LandmarkStream` using WebRTC DataChannels to fill a `Float32Array` landmark buffer.

This keeps avatar deformation/rendering logic independent from capture/MediaPipe.

## Local run instructions

Prerequisites:
- Node.js (LTS recommended)

Install and run:

```bash
cd facial-avatar-thesis
npm install
npm run dev
```

Then open the local URL printed by Vite (typically `http://localhost:5173`).

Notes:
- Browsers require **HTTPS or localhost** for camera/microphone.
- Click **Start** in the page to grant permissions (required for Web Audio autoplay policy).

## GitHub Pages deployment

### Automatic deployment (recommended)

1. Push changes to `main` or `master` branch
2. GitHub Actions will automatically build and deploy to `https://your-username.github.io/facial-avatar-thesis-/`

**Setup required (one time):**
- Go to repository Settings → Pages
- Set Source to "GitHub Actions" (recommended for modern deployments)
- The workflow file (`.github/workflows/deploy.yml`) will handle the rest

### Manual deployment

Build locally:
```bash
npm run build
```

Then deploy the `docs/` folder to GitHub Pages using your preferred method.

### Configuration notes

- **Build output**: `vite.config.ts` is configured to output to `docs/` (GitHub Pages standard)
- **Base path**: `base: '/facial-avatar-thesis-/'` for deployment to the project repository
- **User/Org site**: If deploying to `your-username.github.io/`, change `base: '/'` in `vite.config.ts`
- **HTTPS**: GitHub Pages provides HTTPS automatically, which is required for camera and microphone access

## Build

```bash
npm run build  # Outputs to docs/
npm run preview  # Preview production build locally
```
