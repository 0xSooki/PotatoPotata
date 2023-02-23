import React, { ChangeEvent } from 'react';

import Button from './Button';
import Input from './Input';
import Slider from './Slider';
import TextArea from './TextArea';

const ProposalModal = (): JSX.Element => {
  const [file, setFile] = React.useState<File | null>(null);
  const [name, setName] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [price, setPrice] = React.useState<number>(0);
  const [fee, setFee] = React.useState<number>(0);

  const createCampaign = (e: { preventDefault: () => void }): void => {
    e.preventDefault();
    console.log(file, name, description, price, fee);
  };
  return (
    <>
      <label htmlFor="my-modal-prop" className="btn btn-primary">
        open proposal modal
      </label>
      <input type="checkbox" id="my-modal-prop" className="modal-toggle" />
      <label htmlFor="my-modal-prop" className="modal">
        <label className="modal-box relative" htmlFor="">
          <h3 className="font-signika text-4xl text-primary font-bold">Create Proposal</h3>
          <form>
            <div className="flex flex-row gap-4">
              <div>
                <input
                  type="file"
                  onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                    if (e.target.files) {
                      setFile(e.target.files[0]);
                    }
                  }}
                />
              </div>
              <div className="flex flex-col w-84">
                <Input
                  size="md"
                  type="text"
                  placeholder="Please enter the name of the campaign"
                  label="Name"
                  onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                    if (e.target.value) {
                      setName(e.target.value);
                    }
                  }}
                />
                <TextArea
                  placeholder="Tell us more about your campaign"
                  label="Description"
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>): void => {
                    if (e.target.value) {
                      setDescription(e.target.value);
                    }
                  }}
                />
                <div className="flex items-center">
                  <Input
                    size="md"
                    type="number"
                    placeholder="Enter price"
                    label="Price"
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                      if (e.target.value) {
                        setPrice(e.target.value);
                      }
                    }}
                  />
                  <Slider
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                      if (e.target.value) {
                        setFee(e.target.value);
                      }
                    }}
                    label="Fee"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button size="md" onClick={createCampaign}>
                Create proposal
              </Button>
            </div>
          </form>
        </label>
      </label>
    </>
  );
};

export default ProposalModal;
