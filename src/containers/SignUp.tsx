import React from 'react'
import {Link} from 'react-router-dom'
import GPButton from '../components/GPButton'
import Countries from '../resources/Images/countries.json'
import {useForm, SubmitHandler} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {registerUserInfo} from '../actions/index'
import {useNavigate} from 'react-router-dom'
import {RootState} from '../store'
import logo from '../resources/Images/LogoDark.svg'
type InputType = {
    fullName: string
    emailAddress: string
    phoneNumber: string
    businessName: string
    password: string
    businessType: string
    location: string
    countryCode: string
}
const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<InputType>()
    const {loading, response, error} = useSelector(
        (state: RootState) => state.register
    )
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const countries = Countries.map((country, index) => {
        return (
            <option value={country.dial_code} key={index}>
                {country.dial_code}
            </option>
        )
    })
    const registerUser: SubmitHandler<InputType> = async data => {
        const {
            fullName,
            password,
            businessName,
            location,
            phoneNumber,
            countryCode,
            emailAddress,
            businessType,
        }: InputType = data
        const {payload}: any = await dispatch(
            registerUserInfo({
                fullName: fullName,
                password: password,
                businessName: businessName,
                location: location,
                phoneNumber: phoneNumber,
                emailAddress: emailAddress,
                active: false,
                businessType: businessType,
            })
        )
        if (payload.data) {
            navigate('/')
        }
    }
    const {message}: any = error
    return (
        <div className="ui three column grid">
            <div className="row">
                <div className="column"></div>
                <div className="column">
                    <div className="ui segment AuthContainer">
                        <div className="Logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="ui divider"></div>
                        <form
                            className="LoginBody"
                            onSubmit={handleSubmit(registerUser)}
                        >
                            <h2 className="ui header">
                                <div className="content">
                                    Let's create an account
                                    <div className="sub header">
                                        Explore the world's most powerful POS
                                        for your business
                                    </div>
                                </div>
                            </h2>
                            <div>
                                <div className="ui input textInput">
                                    <input
                                        type={'text'}
                                        placeholder={'Full Name'}
                                        className="textInputInner"
                                        {...register('fullName', {
                                            required: true,
                                        })}
                                    />
                                </div>
                                {errors.fullName?.type === 'required' && (
                                    <div className="ui negative mini message">
                                        <div className="header">
                                            We&#x27;re sorry
                                        </div>
                                        <p>Fullname field is required</p>
                                    </div>
                                )}
                            </div>
                            <div>
                                <div className="ui input textInput">
                                    <input
                                        type={'text'}
                                        placeholder={'Email Adress'}
                                        className="textInputInner"
                                        {...register('emailAddress', {
                                            required: true,
                                            pattern:
                                                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        })}
                                    />
                                </div>
                                {errors.emailAddress?.type === 'required' && (
                                    <div className="ui negative mini message">
                                        <div className="header">
                                            We&#x27;re sorry
                                        </div>
                                        <p>Email field is required</p>
                                    </div>
                                )}
                                {errors.emailAddress?.type === 'pattern' && (
                                    <div className="ui negative mini message">
                                        <div className="header">
                                            We&#x27;re sorry
                                        </div>
                                        <p>Invalid email address</p>
                                    </div>
                                )}
                            </div>
                            <div className="ui action input textInput">
                                <select className="ui compact selection dropdown selectDropDown textInputBorderRightNone">
                                    {countries}
                                </select>
                                <input
                                    type={'text'}
                                    placeholder={'Phone Number'}
                                    className="textPhoneInput"
                                    {...register('phoneNumber')}
                                />
                            </div>
                            <div>
                                <div className="ui input textInput">
                                    <input
                                        type={'text'}
                                        placeholder={'Business Name'}
                                        className="textInputInner"
                                        {...register('businessName', {
                                            required: true,
                                        })}
                                    />
                                </div>
                                {errors.businessName?.type === 'required' && (
                                    <div className="ui negative mini message">
                                        <div className="header">
                                            We&#x27;re sorry
                                        </div>
                                        <p>Business name field is required</p>
                                    </div>
                                )}
                            </div>
                            <div>
                                <div className="ui input textInput">
                                    <input
                                        type={'password'}
                                        placeholder={'Password'}
                                        className="textInputInner"
                                        {...register('password', {
                                            required: true,
                                        })}
                                    />
                                </div>
                                {errors.password?.type === 'required' && (
                                    <div className="ui negative mini message">
                                        <div className="header">
                                            We&#x27;re sorry
                                        </div>
                                        <p>Password field is required</p>
                                    </div>
                                )}
                            </div>
                            <div>
                                <div className="ui input textInput">
                                    <select
                                        className="ui dropdown selectDropDown"
                                        {...register('businessType', {
                                            required: true,
                                        })}
                                    >
                                        <option value="">Business type</option>
                                        <option value="retail_seller">
                                            Retail
                                        </option>
                                        <option value="whole_seller">
                                            Whole sale
                                        </option>
                                    </select>
                                </div>
                                {errors.businessType?.type === 'required' && (
                                    <div className="ui negative mini message">
                                        <div className="header">
                                            We&#x27;re sorry
                                        </div>
                                        <p>Location field is required</p>
                                    </div>
                                )}
                            </div>
                            <div
                                className="ui four column grid"
                                style={{marginBottom: 5}}
                            >
                                <div className="column BnessCount"> 1</div>
                                <div className="column BnessCount"> 2</div>
                                <div className="column BnessCount"> 3</div>
                                <div className="column BnessCount"> 4</div>
                            </div>
                            {Object.keys(error).length > 0 && (
                                <div className="ui negative mini message">
                                    <div className="header">
                                        We&#x27;re sorry
                                    </div>
                                    <p>{message}</p>
                                </div>
                            )}
                            <div style={{marginTop: 20}}>
                                <GPButton
                                    btnText="SignUp"
                                    backgroundColor="#35B858"
                                    borderColor="#35B858"
                                    borderRadius={3}
                                    color="#FFFF"
                                    width={350}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="ui two column grid">
                        <div className="column">
                            <p style={{textAlign: 'center'}}>
                                Question?{' '}
                                <span style={{color: '#4189CD'}}>
                                    visit help
                                </span>
                            </p>
                        </div>
                        <div className="column">
                            <p style={{textAlign: 'start'}}>
                                New to GOLDPOS?{''}
                                <span style={{color: '#4189CD'}}>
                                    <Link to="/">signIn</Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="column"></div>
            </div>
        </div>
    )
}
export default SignUp
