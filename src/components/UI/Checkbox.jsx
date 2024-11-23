import { CheckboxOption } from "./CheckboxStyles";

function Checkbox({ checked, onChange, children }) {
  return (
    <CheckboxOption>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {children}
    </CheckboxOption>
  );
}

export default Checkbox;