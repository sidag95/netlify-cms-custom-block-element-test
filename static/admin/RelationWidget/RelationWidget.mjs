import React from "react";

export const relationWidgetDefinition = {
  // Internal id of the component
  id: "relation",
  // Visible label
  label: "Relation",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: "relation",
      label: "Relation",
      widget: "relation",
      collection: "partials",
      search_fields: ["title"],
      value_field: "body",
      display_fields: ["title"],
    },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^@include([\s\S]*?)/,
  // Function to extract data elements from the regexp match
  fromBlock: function (match) {
    return {
      data: match[1],
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function (obj) {
    return `@include ${obj.relation}`;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (obj) {
    return <div>{obj.data}</div>;
  },
};
