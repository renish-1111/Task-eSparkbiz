let tech = ["PHP", "MYSQL", "Laravel", "Oracle"]

for (let i = 0; i < tech.length; i++) {
    let html = `
            <div class="grid flex" id="${tech[i]}">
              <span>${tech[i]}</span>
              <input type="text" name="${tech[i]}_name" id="${tech[i]}_name" value="${tech[i]}" hidden/>
              <input type="radio" name="${tech[i]}" id="${tech[i]}_beginer" value="beginer" />
              <input type="radio" name="${tech[i]}" id="${tech[i]}_mideator" value="mideator" />
              <input type="radio" name="${tech[i]}" id="${tech[i]}_expert" value="expert" />
            </div>
            <div id="${tech[i]}_error">
            </div>
  `

    document.getElementById("tech").innerHTML += html

}
if (window.validator) {
    for (let i = 0; i < tech.length; i++) {
        window.validator.addRequiredGroup(`#${tech[i]}`, "Select option", [
            {
                tooltip: {
                    position: '',
                },
            }
        ])
    }
}

