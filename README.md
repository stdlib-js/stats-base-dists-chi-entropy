<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Entropy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Chi][chi-distribution] distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] (in [nats][nats]) for a [chi][chi-distribution] random variable is

<!-- <equation class="equation" label="eq:chi_entropy" align="center" raw="h\left( X \right) = \ln(\Gamma(k/2)) + {\tfrac{1}{2}}(k\!-\!\ln(2)\!-\!(k\!-\!1)\psi(k/2))" alt="Differential entropy for a chi distribution."> -->

<div class="equation" align="center" data-raw-text="h\left( X \right) = \ln(\Gamma(k/2)) + {\tfrac{1}{2}}(k\!-\!\ln(2)\!-\!(k\!-\!1)\psi(k/2))" data-equation="eq:chi_entropy">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/stats/base/dists/chi/entropy/docs/img/equation_chi_entropy.svg" alt="Differential entropy for a chi distribution.">
    <br>
</div>

<!-- </equation> -->

where `k > 0` is the degrees of freedom and `Γ` and `Ψ` denote the [gamma][gamma-function] and [digamma][digamma] functions, respectively.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-chi-entropy
```

</section>

<section class="usage">

## Usage

```javascript
var entropy = require( '@stdlib/stats-base-dists-chi-entropy' );
```

#### entropy( k )

Returns the [differential entropy][entropy] of a [chi][chi-distribution] distribution with degrees of freedom `k` (in [nats][nats]).

```javascript
var v = entropy( 9.0 );
// returns ~1.052

v = entropy( 0.5 );
// returns ~0.135
```

If provided `k <= 0`, the function returns `NaN`.

```javascript
var v = entropy( -1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var entropy = require( '@stdlib/stats-base-dists-chi-entropy' );

var k;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    k = randu() * 20.0;
    v = entropy( k );
    console.log( 'k: %d, h(X,k): %d', k.toFixed( 4 ), v.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-chi-entropy.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-chi-entropy

[test-image]: https://github.com/stdlib-js/stats-base-dists-chi-entropy/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-chi-entropy/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-chi-entropy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-chi-entropy?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-chi-entropy
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-chi-entropy/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-chi-entropy/main/LICENSE

[chi-distribution]: https://en.wikipedia.org/wiki/Chi_distribution

[digamma]: https://en.wikipedia.org/wiki/Digamma_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

</section>

<!-- /.links -->
