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
      value_field: "path",
      display_fields: ["title"],
    },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^@include\s([^\n]+)/,
  // Function to extract data elements from the regexp match
  fromBlock: function (match) {
    console.log("match", JSON.stringify(match));
    return {
      relation: match[1],
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function (obj) {
    console.log(JSON.stringify(obj));
    return `@include ${obj.relation}`;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (obj) {
    return <div>Content from Partial {obj.relation} will be included</div>;
  },
};
