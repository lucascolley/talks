---
theme: ./theme
layout: cover
highlighter: shiki
lineNumbers: false
fonts:
  sans: IBM Plex Sans
  mono: JetBrains Mono
  weights: "300,400,500,600"
colorSchema: light
themeConfig:
  primary: "#001d38"
title: The road(map) towards SciPy 2.0
occasion: Compute! Paris 2026
---

# <span class="cover-title-lead">WORK IN PROGRESS</span>

---
layout: cover
eyebrow: Compute! Paris 2026
speaker: Lucas Colley
image: /scipy.svg
imageAlt: SciPy logo
qr: /slides-qr-code.png
qrLabel: link to the slides
qrHref: https://lucascolley.github.io/talks/2026-11-compute-paris/
---

# <span class="cover-title-lead">The road(map) towards SciPy 2.0</span>

---

# The News

- SciPy 2.0 is coming!
- Targeting:
  - pre-releases in December 2026
  - final release in January 2027
- First major release since SciPy 1.0 in 2017
  - *over 9 years in the making!*

---

# Agenda
  
1. A brief history of SciPy since 1.0
2. Major changes in SciPy 2.0
3. Closing remarks

---

# About me

<div class="flex gap-10 items-start">
<div class="flex-1">











- Core maintainer of [SciPy](https://scipy.org) <img src="/scipy.svg" alt="" style="display: inline; height: 1em; vertical-align: -0.125em" /> and [Pixi](https://pixi.prefix.dev/latest/) <img src="/paxton-vector-art.svg" alt="" style="display: inline; height: 1em; vertical-align: -0.125em" />
- Working on SciPy since 2023
- Graduated from the University of Oxford this year,<br>
with a Master's in Computer Science & Philosophy
- Now: core team at [prefix.dev](https://prefix.dev) <img src="/prefix-logo.svg" alt="" style="display: inline; margin-left: 0.25em; height: 1em; vertical-align: -0.125em" />

</div>

<div class="shrink-0 flex flex-col items-center gap-2">
  <img src="/headshot.png" alt="Lucas Colley" class="rounded-lg" style="height: 12rem" />
  <a href="https://lucascolley.github.io/" target="_blank" class="text-sm">https://lucascolley.github.io</a>
</div>

</div>

---
layout: section
label: Part 1
---

# A brief history of SciPy since 1.0

---

# The SciPy project

- SciPy project summary
  - what is it about? how widely is it used?
  - who works on it? how many contributors does it have? (scipy_contributors.png, credit: )
    - <p class="text-sm mt-4">Credit: Evgeni Burovski</p>
    - 56 total maintainers (22 now emeritus)
    - working on SciPy has never been anyone's full-time job — most contributions have happened on evenings/weekends

---

# SciPy 1.0

- https://pypi.org/project/scipy/1.0.0/
  - Nature Methods paper published in 2020: https://www.nature.com/articles/s41592-019-0686-2 (1.0-paper.png)

---

# SciPy 1.1 -> 1.18

- 18 minor releases; their highlights

---

# Then vs. Now

- some striking then vs. now comparison
  - support for linux-arm64, osx-arm64, and win-arm64 platforms
  - support for free-threaded Python (for more info: [Ralf Gommers' PyData Paris 2025 keynote](https://youtu.be/rHWCygZQgsw?si=TCc8cp3VsQiyN0ao))

---
layout: section
label: Part 2
---

# Major changes in SciPy 2.0

---

# Array API standard support

- array API
  - for more info: [My PyData Paris 2025 talk](https://lucascolley.github.io/talks/pydata-paris-25-array-api/)

---

# Sparse matrices -> arrays

...

---

# Language choices

SciPy source lines of code by language, since 1.0

<div class="flex gap-8 items-start">
  <figure class="m-0 flex-1">
    <img src="/sloc-scipy.png" alt="Stacked area chart of SciPy source lines of code by language from 1.0 to 2.0, excluding vendored code: grows from about 350k to 650k, mostly Python, with Fortran 77 disappearing by 2.0" />
    <figcaption class="text-center text-base mt-2">~maintained by SciPy team</figcaption>
  </figure>
  <figure class="m-0 flex-1">
    <img src="/sloc-all.png" alt="Stacked area chart of SciPy source lines of code by language from 1.0 to 2.0, including vendored dependencies: grows from about 0.4M to 1.5M, driven largely by C++" />
    <figcaption class="text-center text-base mt-2">including vendored dependencies</figcaption>
  </figure>
</div>

<p class="text-sm mt-4">Credit: Jake Bowhay</p>

---

# Language choices — Fortran no longer

- SciPy 2.0 removes a Fortran compiler as a build requirement
- Lots of early SciPy adoption was driven by the convenient interfaces it provided to state-of-the-art Fortran libraries like ODEPACK, QUADPACK, FITPACK, MINPACK, ARPACK.


---

# ILP64 BLAS/LAPACK support

- Low-level LAPACK providers (MKL, Accelerate, OpenBLAS) come in two ABI flavors: 32-bit integers (LP64) or 64-bit integers (ILP64)
- LP64 is limited by the integer overflow (N~46000).
- 2.0 brings complete and robust ILP64 support, where it is safe to mix LP64 and ILP64 libraries in the same env
- this can be enabled when building from source
- https://scipy.github.io/devdocs/dev/building/blas_lapack.html
<p class="text-sm mt-4">Credit: Evgeni Burovski</p>

---

# New-style probability distributions

...

---

# Ecosystem impact

- what does this mean for downstream projects?
- what might break / what changes might be needed?
- what opportunities are created?

---
layout: section
label: Part 3
---

# Closing remarks

---

# What we didn't cover

- linear algebra batching support
- deprecations across minor versions
- build system and developer experience improvements
- improved code vendoring practices

---

# What's next?

- still finalising some features and fixes before branching
- a period of about a month from branch point to final release
  - making any fixes for issues discovered with downstream testing of pre-releases
- we're writing a paper!
  - ['SciPy 2.0: A Stronger Foundation for Scientific Computing in Python' source](https://github.com/scipy/scipy-articles/tree/main/scipy-2.0)

---

# Future versions

- more array API coverage (incl. JIT)
- support for emergent platforms: RISC-V, WASM
- support for [Python limited API](https://docs.python.org/3/c-api/stable.html#limited-c-api) / [stable ABI](https://github.com/scipy/scipy/issues/23791)?

---

# SciPy 3.0?

- *SciPy 3.0 might not take so long to come around!*
- Putting off all major breakages for up to a decade then breaking a lot in one go (like NumPy 2.0) doesn't seem like a great habit
- Tentatively, we would like to move towards more frequent but smaller major releases that contain significant (*but justified!*) breakages

---

# What can you do?

- Please get involved in testing!
  - First release candidate targeting December 9th, 2026
  - Until then, nightly packages are available:
    - [conda packages on prefix.dev](https://prefix.dev/channels/@scientific-python/scientific-python-nightly/packages/scipy)
    - [wheels on anaconda.org](https://anaconda.org/channels/scientific-python-nightly-wheels/packages/scipy/)
  - Try your regular workflows, try new features, and try using PyTorch / JAX / CuPy!

---

# Credit

SciPy 1.0 -> 2.0 contributors 

<div class="flex justify-center gap-8 items-start">
  <img style="height: 17rem" src="/lfx-contrib-1.png" alt="SciPy top contributors 1–10 since 1.0: mdhaber, rgommers, tylerjereddy, lucascolley, j-bowhay, ev-br, tupui, ilayn, WarrenWeckesser, andyfaff" />
  <img style="height: 17rem" src="/lfx-contrib-2.png" alt="SciPy top contributors 11–20 since 1.0: steppi, dschmitz89, larsoner, pv, h-vetinari, tirthasheshpatel, AtsushiSakai, peterbell10, lobpcg, dschult" />
</div>

<p class="text-sm text-center mt-4">Data: <a href="https://insights.linuxfoundation.org/project/scipy/contributors?timeRange=custom&amp;start=2017-10-25&amp;end=2026-11-17">https://insights.linuxfoundation.org/project/scipy/contributors?timeRange=custom&amp;start=2017-10-25&amp;end=2026-11-17</a></p>

---

# With thanks to:

- all SciPy contributors!
- Julian Hofer for this Slidev talk template
- the Compute! Paris organisers and volunteers
- <img src="/prefix-logo.svg" alt="" style="display: inline; margin-left: 0.25em; height: 1em; vertical-align: -0.125em" /> for time to work on these slides
- everyone for your attention!

<SlidesQr
  class="absolute"
  style="right: var(--prefix-slide-padding-inline); bottom: var(--prefix-slide-padding-bottom)"
  src="/slides-qr-code.png"
  label="link to the slides"
  href="https://lucascolley.github.io/talks/2026-11-compute-paris/"
/>
