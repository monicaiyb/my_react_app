import PropTypes from 'prop-types'

function Button(props) {
    const enabled = false;
    const text = 'Enter Name';
    const placeholder = 'input value...';
    const size = 50;

    return (
        <section>

            <button style={buttonStyle} disabled={!enabled}>{text}</button>
            <input style={inputStyle} placeholder={placeholder} size={size} />

        </section >

    )
    // Add CSS to the button and input

}
const buttonStyle = {
    color: 'yelllow',
    backgroundColor: 'green',
}
const inputStyle = {
    color: 'yelllow',
    backgroundColor: 'white',
}



export default Button
