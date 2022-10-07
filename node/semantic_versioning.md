## Semantic Versioning
Versions of the npm packages in the dependencies section of your package.json file follow what’s called Semantic Versioning (SemVer), an industry standard for software versioning aiming to make it easier to manage dependencies. Libraries, frameworks or other tools published on npm should use SemVer in order to clearly communicate what kind of changes projects can expect if they update.

```
"package": "MAJOR.MINOR.PATCH"
```

- The MAJOR version should increment when you make incompatible API changes. 
- The MINOR version should increment when you add functionality in a backwards-compatible manner. 
- The PATCH version should increment when you make backwards-compatible bug fixes. This means that PATCHes are bug fixes and MINORs add new features but neither of them break what worked before. 
- Finally, MAJORs add changes that won’t work with earlier versions.

```
"package": "MAJOR.MINOR.PATCH"
```

- `~` allow an npm dependency to update to the latest PATCH version

