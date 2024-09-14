export const FAQTwo = ({currData, onToggle, isActive }) => {

    const {question, answer} = currData;

    return (
        <>
            <li >
                <div className="accordion-grid">
                    <p>{question}</p>
                    <button 
                        onClick={onToggle}
                        className={isActive ? "false" : ""}
                    >
                            {isActive ? "Close" : "Show"}
                    </button>
                </div>                        
                <p>{isActive && answer}</p>
            </li>
        </>
    )
}