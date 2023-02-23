import { ChangeEvent, FC } from 'react';

interface Props {
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  label?: string;
}

const TextArea: FC<Props> = ({ placeholder, label, className = '', onChange }): JSX.Element => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label pb-1">
        <span className="label-text font-signika text-primary font-medium text-base">{label}</span>
      </label>
      <textarea
        placeholder={placeholder}
        onChange={onChange}
        className={`textarea textarea-md resize-none w-full max-w-xs focus:outline-none border-primary border-1.5 font-signika border-opacity-20 placeholder-primary placeholder:opacity-20 ${className}`}
      />
    </div>
  );
};

export default TextArea;
