import React, {useState} from 'react';
import TextField from '../../ui/TextField';
import {useMutation} from '@tanstack/react-query';
import {getOTP} from '../../services/authService';
import toast from 'react-hot-toast';
import Laoding from '../../ui/Laoding';

function SendOTPForm({onSubmit , isSendOTP , phoneNumber , onChange}) {
  // const [phoneNumber, setPhoneNumber] = useState ('');

  return (
    <div>
      <form className="space-y-6" onSubmit={onSubmit}>
        <TextField
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
          label="شماره موبایل"
        />
        <div>
          {isSendOTP
            ? <Laoding />
            : <button type="submit" className="btn btn--primary w-full">
                ارسال کد تایید
              </button>}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
