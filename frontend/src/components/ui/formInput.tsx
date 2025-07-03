interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FormInput = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <label htmlFor={name} className="text-sm font-semibold">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="outline-none border border-muted-foreground rounded-sm px-2 py-3 bg-foreground text-sm focus-visible:border-ring placeholder:text-muted-foreground"
      />
    </div>
  );
};

export default FormInput;
