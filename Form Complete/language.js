let language = ["hindi", "gujarati"]

for (let i = 0; i < language.length; i++) {
    let html = `
            <div class="grid" id="${language[i]}">
              <span>${language[i]}</span>
              <input type="text" name="${language[i]}_name" id="${language[i]}" value="${language[i]}" hidden/>
              <input type="checkbox" name="${language[i]}_read" id="${language[i]}_read" value="read" />
              <input type="checkbox" name="${language[i]}_write" id="${language[i]}_write" value="write" />
              <input type="checkbox" name="${language[i]}_speak" id="${language[i]}_speak" value="speak" />
            </div>
  `

    document.getElementById("lang").innerHTML += html
}


