import './SubmitButton.css';

const SubmitButton = ({ onClick }) => {
    return (
        <button className='form-submit-button' type='submit' onClick={onClick} >Submit</button>
    )
}


export default SubmitButton;