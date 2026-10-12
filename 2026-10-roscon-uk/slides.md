---
theme: ./theme
layout: cover
eyebrow: ROSCon UK 2026
speaker: Lucas Colley
image: /Paxton_Robotics_Dog.svg
imageAlt: Pixi's mascot Paxton with a robotics dog
highlighter: shiki
lineNumbers: false
fonts:
  sans: IBM Plex Sans
  mono: JetBrains Mono
  weights: "300,400,500,600"
colorSchema: light
themeConfig:
  primary: "#001d38"
title: Pixi for ROS — Why?
occasion: ROSCon UK 2026
---

# <span class="cover-title-lead">Pixi for ROS —</span> Why?

---
layout: center
---

<div class="flex items-center gap-16">
  <img src="/paxton-vector-art.svg" alt="Pixi's mascot, Paxton" style="width: 20rem" />
  <img src="/ros-airport-apple-store.png" alt="installing ROS Jazzy desktop with Pixi on an unprepared MacBook at an airport Apple Store" style="height: 31rem" />
</div>

---

# A modern package manager for robotics: `pixi`

- Easy ROS installation across Linux/Windows/macOS, powered by [RoboStack](https://robostack.github.io/index.html) <img src="/robostack-icon.svg" alt="" style="display: inline; height: 1em; vertical-align: -0.125em" />
  - replaces `apt`/`brew`/`winget`/`docker`/`pip`/`conda`/`mamba`, works alongside `cargo`/`npm`
- Handles multiple distros _on the same machine_ — `lyrical`/`rolling`/`jazzy`/etc.
- [`pixi-ros`](https://github.com/ruben-arts/pixi-ros) — `package.xml` bridge, replaces `rosdep`
- Super fast! Powered by Rust (`rattler`), shares underlying tools with `uv`
- You/colleagues/students can use the same tool for ROS as for Data Science / Web Dev / Rust
  - Mix your ROS envs with e.g. new `pytorch`/`scipy` builds, or your own non-ROS Python packages

<img src="/paxton-python.svg" alt="Paxton charming a Python" class="absolute" style="top: 15.5rem; right: 5rem; height: 9rem" />

<style>
/* Spread the bullets down the whole slide, with a little more air between lines */
.slidev-layout {
  display: flex;
  flex-direction: column;
}

.slidev-layout > ul {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0;

  li {
    line-height: 1.7;
  }

  /* The theme's gaps after a nested list would double up with the even spacing */
  ul,
  ul > li:last-child {
    margin-bottom: 0;
  }
}
</style>

---

# Cool stuff in the works!

- [`pixi-build-ros`](https://pixi.prefix.dev/latest/build/ros/) — to replace `colcon` / `catkin_tools`
- [`pixi-audit`](https://prefix.dev/blog/pixi-audit-beta) — scan environments for security vulnerabilities
- [`pixi-sbom`](https://millsks.github.io/pixi-sbom/latest/) — Software Bill of Materials: analyse _all_ of your dependencies, vet licenses
- [`pixi-gui`](https://prefix.dev/blog/introducing-pixi-gui) — interactive environment management

<div style="height: 2rem"></div>

## Find out more!

<Bubbles>
  <Bubble href="https://pixi.sh/latest/robotics">https://pixi.sh/latest/robotics</Bubble>
  <Bubble href="mailto:lucas@prefix.dev">lucas@prefix.dev</Bubble>
</Bubbles>
