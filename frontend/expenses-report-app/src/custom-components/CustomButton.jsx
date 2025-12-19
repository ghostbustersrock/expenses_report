function CustomButton({ buttonText, secondaryClass }) {
    return (
        <button className={`app-button ${secondaryClass}`}>
            {buttonText}
        </button>
    )
}

export default CustomButton