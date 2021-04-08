import React from "react";
import CMS from "netlify-cms-app";
import {
  TableWidgetControl,
  TableWidgetPreivew,
} from "./TableWidget/TableWidget.mjs";

export default function PagePreview(props) {
  console.log(props.entry.getIn(["data"]).toJS());
  return <div className="preview">Preview</div>;
}

const tableWidgetDefinition = {
  // Internal id of the component
  id: "table",
  // Visible label
  label: "Table",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{ name: "tableName", label: "Table", widget: "table" }],
  // Pattern to identify a block as being an instance of this component
  pattern: /^<table>([\s\S]*?)<\/table>/,
  // Function to extract data elements from the regexp match
  fromBlock: function (match) {
    return {
      data: match[1],
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function (obj) {
    return `<table>${obj.tableName}</table>`;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (obj) {
    return <TableWidgetPreivew value={obj.data} />;
  },
};

// CMS.registerPreviewTemplate("post", PagePreview);
CMS.registerWidget("table", TableWidgetControl, TableWidgetPreivew);
CMS.registerEditorComponent(tableWidgetDefinition);
CMS.init();
