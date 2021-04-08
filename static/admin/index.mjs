import React from "react";
import CMS from "netlify-cms-app";
import {
  TableWidgetControl,
  TableWidgetPreivew,
  tableWidgetDefinition,
} from "./TableWidget/TableWidget.mjs";

// CMS.registerPreviewTemplate("post", PagePreview);
CMS.registerWidget("table", TableWidgetControl, TableWidgetPreivew);
CMS.registerEditorComponent(tableWidgetDefinition);
CMS.init();
