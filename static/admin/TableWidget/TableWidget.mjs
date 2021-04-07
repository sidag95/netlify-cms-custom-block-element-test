import React from "react";

export function TableWidgetPreivew(props) {
  const { value } = props;
  console.log(value);
  return <div>{JSON.stringify(value)}</div>;
}

export function TableWidgetControl(props) {
  const { value, onChange } = props;

  function handleOnChange(event) {
    onChange(event.target.value);
  }

  return (
    <div
      style={{
        border: "2px solid lightgrey",
        padding: "16px",
        borderRadius: "4px",
      }}
    >
      <input value={value} onChange={handleOnChange} />
    </div>
  );
}
