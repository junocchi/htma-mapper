type Props = {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const UserInput = ({ label, value, onChange }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    // Ensure that the value is positive
    if (parseFloat(inputValue) >= 0 || inputValue === "") {
      onChange(event);
    }
  };

  return (
    <div key={label} className="flex items-center mb-3 -mr-4 justify-end">
      <label htmlFor={label} className="font-bold pr-2">
        {label}:
      </label>
      <input
        className="remove-arrow p-1 pl-3 border-gray-300 w-32 focus:ring-blue-500 focus:border-blue-500"
        type="number"
        min="0.00000001"
        step="any"
        required
        id={label}
        name={label}
        placeholder="0.013"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
