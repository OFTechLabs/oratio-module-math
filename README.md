# oratio-module-math

A module with math related neurons for [Oratio](https://github.com/OFTechLabs/oratio).

## Usage

After adding [Oratio](https://github.com/OFTechLabs/oratio) the math module can be by registering the module like this:

```typescript
    const mind = HiveMindBuilder.createEmpty()
                      .registerModule(MathModule.MATH_MODULE)
                      .build();
```

## Added functionality

The module provides Oratio with functionality to perform calculations, through [MathJS](https://github.com/josdejong/mathjs). Examples include:

```
User: (34 * 2) / 2
Oratio: 34
User: 60 / 30
Oratio: 2
```
Anything that can be evaluated by [MathJS](https://github.com/josdejong/mathjs) can be used through Oratio.