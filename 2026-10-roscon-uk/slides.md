---
theme: ./theme
layout: cover
eyebrow: ROSCon UK 2026
speaker: Lucas Colley
image: /paxton-robotics-dog-transparent.svg
imageAlt: Pixi's mascot Paxton with a robotics dog
qr: /slides-qr-code.png
qrLabel: link to the slides
qrHref: https://lucascolley.github.io/talks/2026-10-roscon-uk/
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
layout: code-left
split: 33rem 1fr  # left column matches the try-it terminal in global-bottom.vue
class: code-dense
tryIt: true
---

::left::

<Terminal>
    <TermLine>pixi init --channel robostack-jazzy</TermLine>
    <TermLine output>✔ Created /Users/lucascolley/sandbox/rviz/pixi.toml</TermLine>
    <TermLine output></TermLine>
    <TermLine>pixi add ros2-rviz2 ros2-ros2run</TermLine>
    <TermLine output>✔ Added ros2-rviz2 >=14.1.23,&lt;15</TermLine>
    <TermLine output>✔ Added ros2-ros2run >=0.32.11,&lt;0.33</TermLine>
    <TermLine output></TermLine>
    <TermLine>pixi run ros2 run rviz2 rviz2</TermLine>
    <TermLine output># on an unprepared airport store Macbook! ->></TermLine>
</Terminal>

::right::

<img src="/rviz-airport.gif" alt="RViz launching after installing ROS Jazzy desktop with Pixi on an unprepared MacBook at an airport Apple Store" class="mx-auto" style="height: 27rem" />

---
tryIt: true
---

# A modern package manager for robotics

- Linux/Windows/macOS support, powered by [RoboStack](https://robostack.github.io/index.html) <img src="/robostack-icon.svg" alt="" style="display: inline; height: 1em; vertical-align: -0.125em" />
  - replaces `apt`/`brew`/`winget`/`pip`/`conda`/`mamba`
- Multiple distros _on the same machine_ — `lyrical`/`rolling`/`jazzy`/etc.
- [`pixi-ros`](https://github.com/ruben-arts/pixi-ros) — `package.xml` bridge, replaces `rosdep`
- Same tool for ROS as for Data Science / Web Dev / Rust
  - e.g. mix your ROS envs with new `pytorch`/`scipy` builds, or your own packages

<img src="/paxton-python.svg" alt="Paxton charming a rattler snake" class="absolute" style="bottom: 4rem; right: 5rem; height: 9rem" />

---
tryIt: true
---

# Cool stuff in the works!

<img src="/paxton-vector-art.svg" alt="Paxton, the Pixi mascot" class="absolute" style="top: 4rem; right: 5rem; height: 9rem" />

- [`pixi-build-ros`](https://pixi.prefix.dev/latest/build/ros/) — to replace `colcon` / `catkin_tools`
- [`pixi-audit`](https://prefix.dev/blog/pixi-audit-beta) — scan environments for security vulnerabilities

<div style="height: 1rem"></div>

## Find out more!

<Bubbles>
  <Bubble href="https://pixi.sh/latest/robotics">https://pixi.sh/latest/robotics</Bubble>
  <Bubble href="mailto:lucas@prefix.dev">lucas@prefix.dev</Bubble>
</Bubbles>

<SlidesQr
  small
  class="absolute"
  style="right: var(--prefix-slide-padding-inline); bottom: var(--prefix-slide-padding-bottom)"
  src="/slides-qr-code.png"
  label="link to the slides"
  href="https://lucascolley.github.io/talks/2026-10-roscon-uk/"
/>
