import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstInput: '',
    lastInput: '',
    showFirstError: false,
    showLastError: false,
    isFormSubmitted: false,
  }

  onFirstName = event => {
    this.setState({firstInput: event.target.value})
  }

  onLastName = event => {
    this.setState({lastInput: event.target.value})
  }

  onFirstBlur = () => {
    const isFirstValid = this.validateFirst()
    this.setState({showFirstError: !isFirstValid})
  }

  onLastBlur = () => {
    const isLastValid = this.validateLast()
    this.setState({showLastError: !isLastValid})
  }

  validateFirst = () => {
    const {firstInput} = this.state

    const isValid = firstInput !== ''

    return isValid
  }

  renderFirstName = () => {
    const {firstInput, showFirstError} = this.state

    const className = showFirstError ? 'input-one error-field' : 'input-one'

    return (
      <div className="name-con">
        <label htmlFor="firstname" className="first-label">
          FIRST NAME
        </label>
        <input
          id="firstname"
          placeholder="First name"
          value={firstInput}
          type="text"
          className={className}
          onBlur={this.onFirstBlur}
          onChange={this.onFirstName}
        />
      </div>
    )
  }

  renderLastName = () => {
    const {lastInput, showLastError} = this.state

    const className = showLastError ? 'input-one error-field' : 'input-one'

    return (
      <div className="name-con">
        <label htmlFor="lastname" className="first-label">
          LAST NAME
        </label>
        <input
          id="lastname"
          placeholder="Last name"
          type="text"
          value={lastInput}
          className={className}
          onBlur={this.onLastBlur}
          onChange={this.onLastName}
        />
      </div>
    )
  }

  validateLast = () => {
    const {lastInput} = this.state

    const isValids = lastInput !== ''

    return isValids
  }

  onSubmit = event => {
    event.preventDefault()

    const isFirstValid = this.validateFirst()
    const isLastValid = this.validateLast()

    if (isFirstValid && isLastValid) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstError: !isFirstValid,
        showLastError: !isLastValid,
        isFormSubmitted: false,
      })
    }
  }

  renderRegistration = () => {
    const {showFirstError, showLastError} = this.state

    return (
      <div className="registration-con">
        <form className="input-container" onSubmit={this.onSubmit}>
          {this.renderFirstName()}
          {showFirstError && <p className="error-m">Required</p>}
          {this.renderLastName()}
          {showLastError && <p className="error-m">Required</p>}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    )
  }

  renderAnotherResponse = () => (
    <div className="another-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-icon"
      />
      <p className="success-head">Submitted Successfully</p>
      <button
        type="button"
        className="another-btn"
        onClick={this.onSubmitAnother}
      >
        Submit Another Response
      </button>
    </div>
  )

  onSubmitAnother = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstInput: '',
      lastInput: '',
    }))
  }

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="bg-container">
        <div className="sub-con">
          <h1 className="main-head">Registration</h1>
          <div className="view-con">
            {isFormSubmitted
              ? this.renderAnotherResponse()
              : this.renderRegistration()}
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
