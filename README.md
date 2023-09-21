# Title validator

This action validates the title of commit and pull request.

## Inputs

### `pattern`

The RegExp pattern.

See [RegExp() constructor - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp#parameters){:target="_blank"}

### `flags`

The RegExp flags.  
Optional.

See [RegExp() constructor - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp#parameters){:target="_blank"}

## Example usage

```yaml
uses: itou0104jp/title-validator@v1
with:
  pattern: '^(?:(?:feat!?|fix!?|refactor|docs|test|chore)(?:\([^)]+\))?: [A-Z].*[^ ]|release: v[0-9]+\.[0-9]+\.[0-9]+|revert: ".+") \(#[1-9][0-9]*\)$'
```
