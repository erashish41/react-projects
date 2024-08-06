##  to make Toggle Switch App    ##
- First make repo in Git than connect that repo to your local machine.
- create app with bun and vite as: bun create vite
- Now give app name 01_toggle_switch
- than install bun as: bun install
- now run app with bun command: bun run dev  (we can run app with npm also if we install app with npm)


1. Make ToogleSwitch.jsx
2. make ToogleSwitch.css

1. ToogleSwitch.jsx
- make parent div for whole button and again make child div for circle and in last make span for OFF 

- handleToggleSwitch is a function that toggles the state of isOn between true and false. When called, 
    it inverts the current value of isOn.  (from on to off and vise versa)
- buttonIsOnOff is a string that determines the class name for styling based on whether the switch 
    is on or off.
- The outer div with the class toggle-switch represents the entire switch. It has an inline style for 
    the background color that changes based on isOn. If isOn is true, the background color is green 
    (#4caf50), and if false, it is red (#f44336).
- onClick={handleToggleSwitch} attaches the handleToggleSwitch function to the click event of the 
    outer div, which toggles the switch when clicked.
- Inside the outer div, there’s another div with a dynamic class name based on buttonIsOnOff. This 
    inner div represents the switch itself.
- The span inside this inner div displays the current state of the switch (either "on" or "off").