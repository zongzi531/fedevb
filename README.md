# fedevb

>A front-end webpack development template in front-end and back-end project

## What is fedevb

First, this project based on webpack.

Second, this project is used to developing in java project.

So, this project is called fe-dev-b (*front-end developing in back-end*).

## Install

You can `git clone` this project to java project.

```bash
# For example: this is java project tree structure
│  .gitignore
│  .project
│  pom.xml
├─.settings
├─project-api
├─project-biz
├─project-dao
├─project-web
├─fedevb  # You can clone to here
└─logs
```

```bash
# switch to java project
cd java-project

# clone this project
git clone https://github.com/zongzi531/fedevb.git

# switch to this project
cd fedevb

# install dependencies
npm install

# build for developing with webpack watch mode
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## How to use

### How to setting building file output position

```javascript
/**
 * /config/index.js
 * Default building to ../project-web/src/main/webapp/
 * You can based on your java project to setting.
 */
module.exports = {
  ...
  buildingPath: '../project-web/',
  ...
}
```

### How to deepen the folder level

```javascript
/**
 * /build/utils.js
 * You need to modify getEntry and getToHTML and keep them at the same depth.
 */
patternArray.forEach((value, index) => {
  const valueArray = value.split('/')
  const { length } = valueArray
  const [, i2, i3, i4, ...i(x)] = valueArray
  switch (length) {
    ...
    case (x):
      // do something
      break
  }
  ...
})
```
