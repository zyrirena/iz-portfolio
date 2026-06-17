---
title: "Why I keep coming back to static sites"
slug: "why-i-keep-coming-back-to-static-sites"
excerpt: "After years of shipping dynamic apps, I keep choosing static sites for the things that matter most to me. Here's why."
category: "Technology"
tags:
  - "web"
  - "tools"
  - "next.js"
date: "2024-10-04"
author: "Irena"
---

There's a certain kind of joy that comes from a static site. It's not nostalgia — though I understand the temptation. It's that the simplest version of the thing tends to be the most reliable, the fastest, and the longest-lived.

## The pitch

A static site is just files. HTML, CSS, a bit of JavaScript. You build it once and serve it from anywhere — a CDN, a USB stick, your laptop. No database to migrate, no server to patch, no runtime to monitor at 3 a.m.

This stack — Next.js with static export, deployed to GitHub Pages — gives me 95% of what a dynamic app could give me, with about 5% of the operational surface area.

## What you give up

You can't *do* things on the server in response to a user request. No login, no per-request personalization, no live API calls from within the page render.

For a personal portfolio, those are not features I need.

## What you get

- **Performance.** Pre-rendered HTML is the fastest thing the web can serve.
- **Reliability.** GitHub Pages has been serving static files since 2008. It will be serving them in 2030.
- **Free hosting.** GitHub Pages is free for public repos.
- **Source-controlled content.** Blog posts and projects live in version control, beside the code. You can diff a draft.

## When this stack is wrong

If your site needs auth, server-side personalization, or live data, this stack will fight you. Don't force it. Use Vercel, Cloudflare Workers, or a regular backend.

But if your site is content + code + a small dose of interaction — which describes most personal sites and most marketing sites — static is hard to beat.
