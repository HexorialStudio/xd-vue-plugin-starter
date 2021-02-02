# Adobe XD Vue Plugin Starter

A starter template or repository to immediately get started in Adobe XD plugin development using Vue.js

## Features

- Using standard Adobe XD starter project for plugin development
- `Vue` for better development and integration
- `mixpanel` for user action tracking to improve the overall usability
- `webpack` configuration for realtime reload in development and build publishable package

## Steps

1. Follow the [recommended development setup](#recommended-development-setup) for setting up the project
2. Follow the [development](#development) for developing the plugin
3. Build plugin and select the files and directories that are needed for build to work and then create a `.zip` file and change the extension of the `.zip` to `.xd`. Install the new plugin by double clicking `.xd` file. Follow official [Adobe XD's Packaging your plugin guide](https://adobexdplatform.com/plugin-docs/distribution/packaging.html)

## Recommended development setup

1. Go to the directory that stores your development plugin folder:

    - Mac: `~/Library/Application\ Support/Adobe/Adobe\ XD/`
    - Windows: `C:\Users\%USERNAME%\AppData\Local\Packages\Adobe.CC.XD_adky2gkssdxte\LocalState\`

2. Rename the `develop` directory, if it already exists:

    - Mac: `mv plugins oldplugins`
    - Windows: (use Windows Explorer)
If you don't have a develop directory yet, simply create one.

3. Clone this repository in the `develop` directory:

    ```bash
    git clone git@github.com:HexorialStudio/xd-vue-plugin-starter.git develop
    ```

4. Run the plugin in visual studio code. [follow development instructions](#development)

5. Launch XD, or if already open, use COMMAND+SHIFT+R to reload plugins.

6. Run the plugins from Adobe XD's Plugins menu.

Make sure to check out [XD Plugin Tutorials](https://adobexdplatform.com/plugin-docs/tutorials/) and [XD Plugin References](https://adobexdplatform.com/plugin-docs/reference).

## Development

```bash
# install dependencies
yarn install # or
yarn


# development
yarn run watch

# build
yarn run build
```
