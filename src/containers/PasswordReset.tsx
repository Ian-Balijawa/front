import React, {useState} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import {useMutation} from '@apollo/client'
import {useForm, SubmitHandler} from 'react-hook-form'
import GPButton from '../components/GPButton'
import Logo from '../resources/Images/LogoDark.svg'
// import {GPMessage} from '../components/GPMessage'
import {CHANGE_PASSWORD} from '../gql/registerUser'
// import {GPLoader} from '../components/GPLoader'
type PasswordResetinput = {
    password: string
    confirmPassword: string
}
export const PasswordReset = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<PasswordResetinput>()
    const [passwordInfo, setPassword] = useState<PasswordResetinput>({
        password: '',
        confirmPassword: '',
    })
    const {token} = useParams()
    const [changePassword, {data, loading, error}] =
        useMutation(CHANGE_PASSWORD)
    const navigate = useNavigate()
    const submitCurrentPassword: SubmitHandler<PasswordResetinput> = data => {
        changePassword({
            variables: {
                input: {
                    password: data.password,
                    confirmPassword: data.confirmPassword,
                    resetToken: token,
                },
            },
        })
        if (data) {
            setTimeout(() => {
                navigate('/')
            }, 5000)
        }
    }
    return (
        <div className=" ui three column grid">
            <div className="row">
                <div className="column"></div>
                <div className="column">
                    <div className="ui segment AuthContainer">
                        <div className="Logo">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className="ui divider"></div>
                        <form
                            className=" LoginBody"
                            onSubmit={handleSubmit(submitCurrentPassword)}
                        >
                            <h2 className="ui header">
                                <div className="content">
                                    Reset Password?
                                    <div className="sub header">
                                        Enter your new passwords in the field
                                        below
                                    </div>
                                </div>
                            </h2>
                            <div>
                                <p
                                    className="sub header"
                                    style={{marginTop: 5, marginBottom: 5}}
                                >
                                    Password
                                </p>
                                <div className="ui input textInput">
                                    <input
                                        type={'text'}
                                        placeholder={'Password'}
                                        className="textInputInner"
                                        {...register('password', {
                                            minLength: 5,
                                            validate: {
                                                validatePassword: data => {
                                                    setPassword(prevState => {
                                                        return {
                                                            ...prevState,
                                                            password: data,
                                                        }
                                                    })
                                                    return true
                                                },
                                            },
                                        })}
                                    />
                                </div>
                                <div style={{marginTop: 5}}>
                                    {/* {errors.password && (
                                        <GPMessage
                                            error
                                            size="tiny"
                                            message="Please provide a valid password"
                                        />
                                    )} */}
                                </div>
                            </div>
                            <div>
                                <p
                                    className="sub header"
                                    style={{marginTop: 5, marginBottom: 0}}
                                >
                                    Confirm Password
                                </p>
                                <div className="ui input textInput">
                                    <input
                                        type={'text'}
                                        placeholder={'Confirm Password'}
                                        className="textInputInner"
                                        {...register('confirmPassword', {
                                            required: true,
                                            validate: {
                                                validateconfirmPassword:
                                                    data => {
                                                        let valid = false
                                                        if (
                                                            passwordInfo.password ===
                                                            data
                                                        ) {
                                                            valid = true
                                                        }
                                                        return valid
                                                    },
                                            },
                                        })}
                                    />
                                </div>
                                <div style={{marginTop: 5}}>
                                    {/* {errors.confirmPassword && (
                                        <GPMessage
                                            error
                                            message="Your password do not match"
                                        />
                                    )} */}
                                </div>
                            </div>
                            <div style={{marginTop: 20}}>
                                {/* <GPButton
                                    btnText={loading ? '' : 'Reset Password'}
                                    backgroundColor="#35B858"
                                    borderColor="#35B858"
                                    borderRadius={3}
                                    color="#FFFF"
                                    width={350}
                                >
                                    {loading && (
                                        <GPLoader
                                            size="tiny"
                                            inline="centered"
                                            active={true}
                                            className="GPLoader"
                                            inverted={true}
                                        />
                                    )}
                                </GPButton> */}
                                {/* {data && (
                                    <GPMessage
                                        info
                                        headerText="Howdy"
                                        message="Your Password was reset successfully"
                                    />
                                )} */}
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
                                New to GOLDPOS?{' '}
                                <span style={{color: '#4189CD'}}>
                                    <Link to={'register'}>signup</Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PasswordReset
