import { ChangeEvent, FC } from 'react';

import { CompConfig } from '~~/helpers/types/components';

interface Props {
  placeholder: string;
  type: 'text' | 'number';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label?: string;
}

const inputConfig: CompConfig = {
  xs: 'input-xs',
  sm: 'input-sm',
  md: 'input-md',
  lg: 'input-lg',
};

const labelConfig: CompConfig = {
  xs: 'text-xs',
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

const Input: FC<Props> = ({ size = 'sm', type, placeholder, label, className = '', onChange }): JSX.Element => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label pb-1">
        <span className={`label-text text-primary font-medium ${labelConfig[size]}`}>{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={`input focus:outline-none border-primary border-opacity-20 border-1.5 font-signika placeholder:opacity-50 w-full max-w-xs ${inputConfig[size]} ${className}`}
      />
    </div>
  );
};

export default Input;
