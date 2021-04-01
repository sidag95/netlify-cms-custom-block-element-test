import React from "react";
import CMS from "netlify-cms-app";

export default function PagePreview(props) {
  console.log(props.entry.getIn(["data"]).toJS());
  return <div className="preview">Preview</div>;
}

// CMS.registerPreviewTemplate("post", PagePreview);
CMS.init();
