const styles = require("./assets/styles.css");
const Vue = require("vue").default;

// const { Text, Rectangle, Color } = require("scenegraph");
// const commands = require("commands");
// const { editDocument } = require("application");
// const Clipboard = require("clipboard");
// const Viewport = require("viewport");

// Analytics
// var mixpanel = require("./mixpanel-tracks").default;

// window.analytics = {
//   mixpanel: mixpanel,
// };

const index = require("./index.vue").default;

let panel;

function getPanel() {
  if (panel == null) {
    document.body.innerHTML = `<panel><div id="container"></div></panel>`;
    panel = document.querySelector("panel");
    var app4 = new Vue({
      el: "#container",
      components: {
        index,
      },
      render(h) {
        return h(index, {
          props: {
            panel,
          },
        });
      },
    });
  }
  return panel;
}

function show(event) {
  if (!panel) {
    let uiPanel = getPanel();
    event.node.appendChild(uiPanel);
  }
  //how to do proper cleanup here ?
}

function hide(event) {
  // anything needed here ?
}

async function update() {
  // does anything should be done here ?
}

module.exports = {
  panels: {
    colors: {
      show,
      hide,
      update,
    },
  },
};
