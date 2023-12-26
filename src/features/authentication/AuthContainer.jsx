import React, {useState} from 'react'
import SendOTPForm from './sendOTPForm';
import CheckOTPForm from './CheckOTPForm';
import {useMutation} from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {getOTP} from '../../services/authService';

function AuthContainer() {
const [step, setStep] = useState (1);
const [phoneNumber, setPhoneNumber] = useState ('');
const {isPending : isSendOTP, error, data : otpResponse, mutateAsync} = useMutation ({
    mutationFn: getOTP,
  });

  const sendOtpHandler = async e => {
    e.preventDefault ();
    try {
      const data = await mutateAsync ({phoneNumber});
      setStep (2);
      console.log (data.message);
      toast.success (data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  };


const renderStep = () => {
    switch (step) {
        case 1:
            return <SendOTPForm isSendOTP={isSendOTP} onSubmit={sendOtpHandler} setStep = {setStep} phoneNumber = {phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
        case 2:
            return <CheckOTPForm otpResponse = {otpResponse} onReSendOtp = {sendOtpHandler} phoneNumber = {phoneNumber} onBack={() => setStep(s => s - 1)}/>
        default : return null
    }
}
  return (
    <div>
        {renderStep()}
    </div>
  )
}

export default AuthContainer