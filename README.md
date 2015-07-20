# ember-cli-susy

Include [susy](https://github.com/ericam/susy) in an ember-cli app.

When the addon is installed, it will add susy as a bower dependency.

## Dependencies

Your project should already be set up to handle sass/scss builds. If you're not, do so by running:

    ember install ember-cli-sass

## Usage

In your ember-cli, run:

    ember install ember-cli-susy

The generator will create an `app.scss` with the sole contents being:

    @import "susy";

If you already have content in your `app.scss`, you can just choose "n" and add that
line to the top of `app.scss` yourself.

## Developing this Addon

* `ember server`
* Visit the dummy app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
