import { ChangeEvent, FC } from 'react';

interface Props {
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Slider: FC<Props> = ({ onChange, label }): JSX.Element => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label pb-1">
        <span className={`label-text text-primary font-medium`}>{label}</span>
      </label>
      <input onChange={onChange} type="range" min="0" max="100" className="range range-primary" />
    </div>
  );
};

export default Slider;
