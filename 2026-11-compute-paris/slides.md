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
2. 5 major changes in SciPy 2.0
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

- "Fundamental algorithms for scientific computing in Python"
  - optimisation, statistics, linear algebra, integration, differentiation, interpolation, image processing, signal processing, Fast Fourier Transforms, <br>sparse data structures, & much more
- [Used in 1.4+ million GitHub repos](https://github.com/scipy/scipy/network/dependents)
- 25 years old, started in 2001
- Open source, permissive BSD-3-Clause license

---

# SciPy Contributors

<div class="flex gap-10 items-start">
<div style="flex: 0 0 64%">

<img src="/scipy_contributors.png" alt="Bar chart of SciPy contributors and new contributors per release, from 0.10.0 (2011) to 1.18.0 (2026): roughly 100 to 180 contributors per release since 1.0, peaking at 1.10.0 in 2023" class="w-full" />

<p class="text-sm mt-2">Credit: Evgeni Burovski</p>

</div>
<div class="flex-1 [&_ul]:mt-0 [&_li:first-child]:mt-0">

- 56 total maintainers<br>(22 now emeritus)
- Working on SciPy has never been anyone's full-time job
- Most contributions have happened on evenings/weekends

</div>
</div>

---

# Before SciPy 1.0

<div class="columns-2 gap-12 text-lg [&_li]:my-1 [&_li]:break-inside-avoid">

- 2001: the first SciPy release
- 2005: transition to NumPy
- 2007: creation of scikits
- 2008: scipy.spatial module and first Cython code added
- 2010: moving to a 6-monthly release cycle
- 2011: SciPy development moves to GitHub
- 2011: Python 3 support
- 2012: adding a sparse graph module and unified optimization interface
- 2012: removal of scipy.maxentropy
- 2013: continuous integration with TravisCI
- 2015: adding Cython interface for BLAS/LAPACK and a benchmark suite
- 2017: adding a unified C API with scipy.LowLevelCallable; removal of scipy.weave
- 2017: SciPy 1.0 release

</div>

<p class="text-sm mt-4">Credit: Ralf Gommers, <a href="https://docs.scipy.org/doc/scipy/release/1.0.0-notes.html#some-history-and-perspectives">SciPy 1.0 Release Notes</a></p>

---

# SciPy 1.0

- https://pypi.org/project/scipy/1.0.0/ released in 2017 (with Windows wheels!)
- [*Nature Methods* paper](https://www.nature.com/articles/s41592-019-0686-2) published in 2020

<img src="/1.0-paper.png" alt="Title and author list of the Nature Methods paper 'SciPy 1.0: fundamental algorithms for scientific computing in Python'" class="mx-auto mt-6 rounded-lg" style="height: 14rem" />

---

# SciPy 1.1 -> 1.18 (at a glance)

- Free-threaded Python support (see [Ralf Gommers' PyData Paris 2025 keynote](https://youtu.be/rHWCygZQgsw?si=TCc8cp3VsQiyN0ao))
- Support for ARM CPU platforms + Apple's Accelerate BLAS/LAPACK
- New modules: `differentiate`, `fft`, `optimize.cython_optimize`, `optimize.elementwise`, `spatial.transform`, `stats.qmc`, `stats.sampling`
- [HiGHS](https://highs.dev/) solvers for `optimize.linprog`
- [`Boost.Math`](https://www.boost.org/library/latest/math/) library backing `special` and `stats`
- New docs theme + interactive examples
- *Many, many* new functions, classes, and methods!

---

# Then vs. Now

<div class="flex justify-center gap-10 items-start">
  <figure class="m-0 flex flex-col items-center">
    <img src="/old-docs.png" alt="Screenshot of the SciPy 1.0.0 reference documentation" class="rounded-lg" style="height: 16rem" />
    <figcaption class="text-sm text-center mt-2"><a href="https://docs.scipy.org/doc/scipy-1.0.0/reference/">https://docs.scipy.org/doc/scipy-1.0.0/reference/</a></figcaption>
  </figure>
  <figure class="m-0 flex flex-col items-center">
    <img src="/new-docs.png" alt="Screenshot of the current SciPy development documentation" class="rounded-lg" style="height: 16rem" />
    <figcaption class="text-sm text-center mt-2"><a href="https://docs.scipy.org/doc/scipy/index.html">https://docs.scipy.org/doc/scipy/index.html</a></figcaption>
  </figure>
</div>

---
layout: section
label: Part 2
---

# 5 major changes in SciPy 2.0

---

# 1. Array API Standard support

TODO
- key points from my talk
- key points from Evgeni's slides
- key points from https://discuss.scientific-python.org/t/making-array-types-support-public-scipy-2-0/2355/37
  - including 'why 2.0 now?'
- coverage
- (xp-bench-plots.png)
- for more info: [My PyData Paris 2025 talk](https://lucascolley.github.io/talks/pydata-paris-25-array-api/)

---

# 2. Sparse matrices -> arrays

- `scipy.sparse.spmatrix` (`numpy.matrix`-esque API) is deprecated in 2.0
- Replacement: `scipy.sparse.sparray` classes, like `scipy.sparse.csr_array`
  - `numpy.ndarray`-esque API instead, close to the array API
- No longer just 2-D
  - 1-D support for COO, CSR, and DOK arrays
  - N-D (up to 64 dimensions) for COO
- See [the migration guide](https://scipy.github.io/devdocs/reference/sparse.migration_to_sparray.html)

---

# 3. Language choices

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

# 3. Fortran 77 no longer (1/2)

- SciPy 2.0 removes a Fortran compiler as a build requirement
- Early SciPy success was driven by convenient interfaces to state-of-the-art Fortran libraries like ODEPACK, QUADPACK, FITPACK, MINPACK, ARPACK
- Now translated into C, some further into C++
- How?
  - "a herculean effort of line-by-line translation" by Ilhan Polat
  - started at a time when LLMs were certainly NOT good enough to be trusted blindly
  - only `scipy.odr` has been deprecated and removed, the rest translated

---

# 3. Fortran 77 no longer (2/2)

- Why?
  - Undermaintained code, a shortage of Fortran 77 open source contributors
  - Build system problems
    - ['Why SciPy builds for Python 3.12 on Windows are a minor miracle'](https://labs.quansight.org/blog/building-scipy-with-flang) blog post
  - Fortran-C interface boilerplate
- Converting to modernised Fortran was an alternative option, <br>but was judged to be a riskier path given uncertainty regarding maintainer expertise and compiler toolchains

---

# 3. `scipy.special` -> `xsf`, `Boost.Math`

- `scipy.special` used to be backed by Fortran 77 libraries:
  - `amos`, `cephes`, `CDFLIB`, `SPECFUN`
- Translations -> C -> C++ are now developed in the separate [`scipy/xsf`](https://github.com/scipy/xsf) project
  - parts of `xsf` support conditional compilation for CUDA devices
- Also, `Boost.Math` now backs many functions instead of the Fortran libraries

---

# 4. New-style probability distributions

- TODO: transition guide
- old distributions are no longer under active development

---

# 5. `stats.mstats` -> MArray

- The `scipy.stats.mstats` module is deprecated in 2.0
- This module replicated some of `scipy.stats` for [`numpy.ma` masked arrays](https://numpy.org/doc/stable/reference/maskedarray.generic.html)
- Now recommended to use [MArray](https://mdhaber.github.io/marray/tutorial.html) with `scipy.stats` functions themselves
  - support achieved via the array API standard
- See [the tutorial page on working with missing data](https://scipy.github.io/devdocs/tutorial/stats/missing_data.html)

---

# Ecosystem impact

TODO
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

- Four quick honourable mentions...

---

# 1. ILP64 BLAS/LAPACK support

- Low-level LAPACK providers (MKL, Accelerate, OpenBLAS) come in two ABI flavors: 32-bit integers (LP64) or 64-bit integers (ILP64)
- LP64 is limited by the integer overflow (N~46000).
- 2.0 brings complete and robust ILP64 support, where it is safe to mix LP64 and ILP64 libraries in the same env
- This can be enabled when building from source
- https://scipy.github.io/devdocs/dev/building/blas_lapack.html
<p class="text-sm mt-4">Credit: Evgeni Burovski</p>

---

# 2. Linear algebra batching support

TODO
- ...
- also `scipy.sparse.linalg.LinearOperator`, see [my EuroSciPy 2026 talk](https://lucascolley.github.io/talks/euroscipy-26-linop/)

---

# 3. Deprecations across minor versions

- The ability to make a major release that isn't *hugely* breaking comes from significant work on incremental, smaller deprecations across minor versions
- Our policy for medium-sized breaks:
  - announce deprecation and emit `DeprecationWarning`s
  - make the breaking change after 2 minor releases (1 year)
- See [the deprecation tracker](https://github.com/scipy/scipy/issues/15765)

---

# 4. Build system / developer experience

- Build system moved from `setuptools` to `meson`
- Improved code vendoring practices ([tracker](https://github.com/scipy/scipy/issues/21232))
- A Pixi workspace serves the needs of development across many environments
- TODO: show a `pixi task list` excerpt

<img src="/sci-paxton.png" alt="Paxton, the Pixi mascot, holding two bubbling lab flasks" class="absolute" style="right: var(--prefix-slide-padding-inline); bottom: var(--prefix-slide-padding-bottom); height: 13rem" />

---

# What's next?

- We're still finalising some features and fixes before branching
- Expected period of about a month from branch point to final release
- We're writing a paper!
  - ['SciPy 2.0: A Stronger Foundation for Scientific Computing in Python'](https://github.com/scipy/scipy-articles/tree/main/scipy-2.0)

---

# For future versions

- More array API coverage (+ experimenting with `jax.jit` & `torch.compile`)
- Support for emergent platforms: RISC-V, WASM, Android/iOS
- Support for [Python limited API](https://docs.python.org/3/c-api/stable.html#limited-c-api) / [stable ABI](https://github.com/scipy/scipy/issues/23791)?


---

# SciPy 3.0?

- *SciPy 3.0 might not take so long to come around!*
- Putting off all major breakages for up to a decade then breaking a lot in one go (like NumPy 2.0) doesn't seem like a great habit
- Some of us would like to move towards more frequent but smaller major releases that contain significant (*but justified!*) breakages

---

# What can you do?

- Please get involved in testing!
  - First release candidate tentatively targeting December 9th, 2026
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

- all SciPy contributors
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
