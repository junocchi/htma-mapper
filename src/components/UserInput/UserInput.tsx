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
    <div
      key={label}
      className="flex w-[256px] gap-2 justify-end items-center mx-auto"
    >
      <label htmlFor={label} className="font-bold ">
        {label}:
      </label>
      <input
        className="remove-arrow p-1 px-3 border-gray-300 w-32 focus:ring-blue-500 focus:border-blue-500"
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
