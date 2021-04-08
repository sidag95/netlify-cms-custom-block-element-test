import React from "react";

export function TableWidgetPreivew(props) {
  const { value } = props;
  console.log("Prev -->", value);
  return (
    <table>
      <tbody>
        <td>{JSON.stringify(value)}</td>
      </tbody>
    </table>
  );
}

export function TableWidgetControl(props) {
  const { value, onChange } = props;

  function handleOnChange(event) {
    onChange(event.target.value);
  }

  return (
    <table
      style={{
        border: "2px solid lightgrey",
        padding: "16px",
        borderRadius: "4px",
      }}
    >
      <tbody>
        <td>
          <input value={value} onChange={handleOnChange} />
        </td>
      </tbody>
    </table>
  );
}

export const tableWidgetDefinition = {
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