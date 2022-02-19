import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import GPButton from '../components/GPButton'
import {useForm, SubmitHandler} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import Logo from '../resources/Images/LogoDark.svg'
import {sendPasswordResetLink} from '../actions'
import {RootState} from '../store'
import {GPLoader} from '../components/GPLoader'
import {GPMessage} from '../components/GPMessage'
type PasswordResetInput = {
    emailAddress: string
}
const PasswordReset = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<PasswordResetInput>()
    const dispatch = useDispatch()
    const {response, error, loading}: any = useSelector(
        (state: RootState) => state.resetPassword
    )
    const sendPasswordResetMail: SubmitHandler<PasswordResetInput> = data => {
        const {emailAddress}: PasswordResetInput = data
        dispatch(sendPasswordResetLink({emailAddress}))
    }
    return (
        <div>
            <div className="ui three column grid">
                <div className="row">
                    <div className="column"></div>
                    <div className="column">
                        <div className="ui segment AuthContainer">
                            <div className="Logo">
                                <img src={Logo} alt="logo" />
                            </div>
                            <div className="ui divider"></div>
                            <form
                                className="LoginBody"
                                onSubmit={handleSubmit(sendPasswordResetMail)}
                            >
                                <h2 className="ui header">
                                    <div className="content">
                                        Forgot Password?
                                        <div className="sub header">
                                            Enter your email address and we'll
                                            email you a link to reset your
                                            password
                                        </div>
                                    </div>
                                </h2>
                                <div>
                                    <p
                                        className="sub header"
                                        style={{marginTop: 5, marginBottom: 5}}
                                    >
                                        Email or Username
                                    </p>
                                    <div className="ui input textInput">
                                        <input
                                            type={'text'}
                                            placeholder={
                                                'Email or Phone Number'
                                            }
                                            className="textInputInner"
                                            {...register('emailAddress', {
                                                required: true,
                                                validate: {
                                                    validateUsernameOrEmail:
                                                        data => {
                                                            let valid = false
                                                            if (
                                                                data.includes(
                                                                    '@'
                                                                )
                                                            ) {
                                                                if (
                                                                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                                                                        data
                                                                    )
                                                                ) {
                                                                    valid = true
                                                                }
                                                            } else {
                                                                if (
                                                                    data.length >=
                                                                    6
                                                                )
                                                                    valid = true
                                                            }
                                                            return valid
                                                        },
                                                },
                                            })}
                                        />
                                    </div>
                                    {errors.emailAddress?.type ===
                                        'required' && (
                                        <div className="ui negative mini message">
                                            <div className="header">
                                                We&#x27;re sorry
                                            </div>
                                            <p>
                                                please provide either username
                                                or password to continue
                                            </p>
                                        </div>
                                    )}
                                    {errors.emailAddress?.type !== 'required' &&
                                        errors.emailAddress && (
                                            <div className="ui negative mini message">
                                                <div className="header">
                                                    We&#x27;re sorry
                                                </div>
                                                <p>
                                                    Phone Number or email
                                                    provided is invalid
                                                </p>
                                            </div>
                                        )}
                                </div>
                                <div style={{marginTop: 20}}>
                                    <GPButton
                                        btnText={loading ? '' : 'sendLink'}
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
                                    </GPButton>
                                </div>
                                <div style={{marginTop: 20}}>
                                    {error && !response ? (
                                        <GPMessage
                                            visible={true}
                                            error
                                            headerText="Howdy,"
                                            message="Email does not exist, Please provide your account email"
                                        />
                                    ) : (
                                        ''
                                    )}
                                    {response ? (
                                        <GPMessage
                                            visible={true}
                                            info
                                            headerText="Howdy,"
                                            message="Password  reset link has been sent to your mail"
                                        />
                                    ) : (
                                        ''
                                    )}
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
                                        <Link to={'/'}>signIn</Link>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="column"></div>
                </div>
            </div>
        </div>
    )
}
export default PasswordReset
