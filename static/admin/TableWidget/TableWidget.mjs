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
