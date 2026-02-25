'use client'

import CountrySelectFiels from "@/components/forms/CountrySelectFiels";
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from "@/lib/constants";
import { useForm } from "react-hook-form";

const SignUp = () => {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            country: "US",
            investmentGoals: 'Growth',
            riskTolerance: 'Medium',
            preferredIndustry: 'Technology'
        },
        mode: 'onBlur'
    })

    const onSubmit = async (data: SignUpFormData) => {
        try {
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h1 className="form-title">Sign Up & Personalize</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <InputField
                    name="fullName"
                    label="Full Name"
                    placeholder="John Doe"
                    register={register}
                    error={errors.fullName}
                    validation={{required: 'Full Name is required', minLength: 3}}
                />
                <InputField
                    name="email"
                    label="Email"
                    placeholder="e.g. mail@gmail.com"
                    register={register}
                    error={errors.email}
                    validation={{required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }}}
                />
                <InputField
                    name="password"
                    label="Password"
                    placeholder="Enter a strong password"
                    type="password"
                    register={register}
                    error={errors.fullName}
                    validation={{required: 'Password is required', minLength: 3}}
                />
                
                {/* Country */}
                {/* <CountrySelectFiels /> */}

                <SelectField
                    name="investmentGoals"
                    label="Investment Goals"
                    placeholder="Select your investment goal"
                    options={INVESTMENT_GOALS}
                    control={control}
                    error={errors.investmentGoals}
                    required
                />
                <SelectField
                    name="ristTolerance"
                    label="Risk Tollerance"
                    placeholder="Select your risk level"
                    options={RISK_TOLERANCE_OPTIONS}
                    control={control}
                    error={errors.riskTolerance}
                    required
                />
                <SelectField
                    name="preferredIndustery"
                    label="Preferred Industery"
                    placeholder="Select your preferred industery"
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    error={errors.preferredIndustry}
                    required
                />

                <button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Creating Account' : 'Start Your Investment Journey'}
                </button>

                <FooterLink
                    text="Already have an account?"
                    linkText="Sing In"
                    href="/sign-in"
                />
            </form>
        </>
    );
};

export default SignUp;
