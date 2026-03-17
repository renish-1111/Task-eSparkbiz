
let degreeCount = 1

function educationAdd() {

  let html = `
    <div id="degree_${degreeCount}">
            <div>Degree</div>
            <div class="flex">
              <div>
                <label for="course_degree_${degreeCount}">Course Name</label>
                <input type="text" id="course_degree_${degreeCount}" name="course_name[]" />
              </div>
              <div>
                <label for="university_degree_${degreeCount}">University</label>
                <input
                  type="text"
                  id="university_degree_${degreeCount}"
                  name="university[]"
                />
              </div>
              <div>
                <label for="pass_year_degree_${degreeCount}">Passing Year</label>
                <input
                  type="text"
                  id="pass_year_degree_${degreeCount}"
                  name="course_pass[]"
                />
              </div>
              <div>
                <label for="percentage_degree_${degreeCount}">Percentage</label>
                <input
                  type="text"
                  id="percentage_degree_${degreeCount}"
                  name="course_percentage[]"
                />
              </div>
            </div>
          </div>
        <div class="line-bold" id="line_degree_${degreeCount}"></div>

    `
  
    document.getElementById("addDegree").insertAdjacentHTML("beforeend", html)
    
    const i = degreeCount

    // window.validator
    //   .addField(`#course_degree_${i}`, [
    //         {
    //             rule: "required",
    //             errorMessage: "Degree Name is required",
    //         },
    //         {
    //             rule: "customRegexp",
    //             value: "^\\D*$",
    //             errorMessage: "Don't Insert Number in Degree Name",
    //         }
    //     ])
    //     .addField(`#university_degree_${i}`, [
    //         {
    //             rule: "required",
    //             errorMessage: "University Name is required",
    //         },
    //         {
    //             rule: "customRegexp",
    //             value: "^\\D*$",
    //             errorMessage: "Don't Insert Number in University Name",
    //         }
    //     ])
    //     .addField(`#pass_year_degree_${i}`, [
    //         {
    //             rule: "required",
    //             errorMessage: "Passing Year is required",
    //         },
    //         {
    //             rule: "number",
    //             errorMessage: "Enter Year in Numaric",
    //         },
    //         {
    //             rule: "minNumber",
    //             value: 1950,
    //             errorMessage: "Invalid Year"
    //         },
    //         {
    //             rule: "maxNumber",
    //             value: 2026,
    //             errorMessage: "Must complete in 2026"
    //         }
    //     ])
    //     .addField(`#percentage_degree_${i}`, [
    //         {
    //             rule: "required",
    //             errorMessage: "Percentage is required",
    //         },
    //         {
    //             rule: "number",
    //             errorMessage: "Enter Year in Numaric",
    //         },
    //         {
    //             rule: "minNumber",
    //             value: 0,
    //             errorMessage: "Not be nagative"
    //         },
    //         {
    //             rule: "maxNumber",
    //             value: 100,
    //             errorMessage: "Not more than 100"
    //         }
    //     ])

    degreeCount++
}

function educationRemove() {
  if (degreeCount > 1) {
    degreeCount--
    // window.validator.removeField(`#course_degree_${degreeCount}`)
    // window.validator.removeField(`#university_degree_${degreeCount}`)
    // window.validator.removeField(`#pass_year_degree_${degreeCount}`)
    // window.validator.removeField(`#percentage_degree_${degreeCount}`)
    const degreeElement = document.getElementById(`degree_${degreeCount}`)
    const degreeLine = document.getElementById(`line_degree_${degreeCount}`)
    if (degreeElement) {
      degreeElement.remove()
      degreeLine.remove()
    }
}
}


let experienceCount = 1
function experienceAdd() {
  let html = `

  <div class="flex" id="experience_${experienceCount}">
            <div>
              <label for="company_name_${experienceCount}">Comapny Name</label>
              <input type="text" id="company_name_${experienceCount}" name="company_name[]" />
            </div>
            <div>
              <label for="company_designation_${experienceCount}"> Designation</label>
              <input type="text" id="company_designation_${experienceCount}" name="company_designation[]" />
            </div>
            <div>
              <label for="company_from_${experienceCount}">From</label>
              <input type="date" id="company_from_${experienceCount}" name="company_from[]" />
            </div>
            <div>
              <label for="company_to_${experienceCount}">To</label>
              <input type="date" id="company_to_${experienceCount}" name="company_to[]" />
            </div>
          </div>
        <div class="line-bold" id="line_experience_${experienceCount}"></div>

  `
  document.getElementById("addExperience").insertAdjacentHTML("beforeend", html)

  const i = experienceCount
  // window.validator
  //   .addField(`#company_name_${i}`, [
  //       {
  //           rule: "required",
  //           errorMessage: "Comapny Name is required",
  //       }
  //   ])
  //   .addField(`#company_designation_${i}`, [
  //       {
  //           rule: "required",
  //           errorMessage: "Designation is required",
  //       }
  //   ])
  //   .addField(`#company_from_${i}`, [
  //       {
  //           rule: "required",
  //           errorMessage: "Date is required",
  //       },
  //       {
  //           validator: (value, fields) => {
  //               let curr = new Date()
  //               let enterValue = new Date(value)

  //               if (curr >= enterValue) {
  //                   return true
  //               }
  //               else {
  //                   return false
  //               }

  //           },
  //           errorMessage: "Future date inserted",
  //       }

  //   ])
  //   .addField(`#company_to_${i}`, [
  //       {
  //           rule: "required",
  //           errorMessage: "Date is required",
  //       }, 
  //       {
  //           validator: (value, fields) => {
  //               let curr = new Date()
  //               let enterValue = new Date(value)

  //               if (curr >= enterValue) {
  //                   return true
  //               }
  //               else {
  //                   return false
  //               }

  //           },
  //           errorMessage: "Future date inserted",
  //       }
  //   ])

  experienceCount++

}

function experienceRemove() {
  if (experienceCount > 1) {
    experienceCount--

    // window.validator.removeField(`#company_name_${experienceCount}`)
    // window.validator.removeField(`#company_designation_${experienceCount}`)
    // window.validator.removeField(`#company_from_${experienceCount}`)
    // window.validator.removeField(`#company_to_${experienceCount}`)

    const experienceElement = document.getElementById(`experience_${experienceCount}`)

    const experienceLine = document.getElementById(`line_experience_${experienceCount}`)
    if (experienceElement) {
      experienceElement.remove()
      experienceLine.remove()
    }
  }
}

let referanceCount = 1
function referanceAdd() {
  let html = `

  <div class="flex" id="referance_${referanceCount}">
          <div>
            <label for="referance_name_${referanceCount}">Referance Name</label>
            <input type="text" id="referance_name_${referanceCount}" name="referance_name[]" />
          </div>
          <div>
            <label for="company_contact_${referanceCount}">Referance Contact</label>
            <input type="text" id="company_contact_${referanceCount}" name="company_contact[]" />
          </div>
          <div>
            <label for="company_relation_${referanceCount}">Relation</label>
            <input type="text" id="company_relation_${referanceCount}" name="company_relation[]" />
          </div>
        </div>
        <div class="line-bold" id="line_referance_${referanceCount}"></div>

  `
  document.getElementById("AddReferance").insertAdjacentHTML("beforeend", html)

const i = referanceCount
  // window.validator
  //   .addField(`#referance_name_${i}`, [
  //       {
  //           rule: "required",
  //           errorMessage: "Referance Name is required",
  //       },
  //       {
  //           rule: "customRegexp",
  //           value: "^\\D*$",
  //           errorMessage: "Don't Insert Number in Referance Name",
  //       }
  //   ])
  //   .addField(`#company_contact_${i}`, [
  //       {
  //           rule: "required",
  //           errorMessage: "Phone number is required",
  //       },
  //       {
  //           rule: "number",
  //           errorMessage: "Phone number must be a number",
  //       },
  //       {
  //           rule: "minLength",
  //           value: 10,
  //           errorMessage: "Phone number must be at least 10 digits",
  //       },
  //       {
  //           rule: "maxLength",
  //           value: 10,
  //           errorMessage: "Phone number must be no more than 10 digits",
  //       }
  //   ])
  //   .addField(`#company_relation_${i}`, [
  //       {
  //           rule: "required",
  //           errorMessage: "Relation is required",
  //       },
  //       {
  //           rule: "customRegexp",
  //           value: "^\\D*$",
  //           errorMessage: "Don't Insert Number in Relation",
  //       }
  //   ])
    

  referanceCount++

}
function referanceRemove() {
  if (referanceCount > 1) {
    referanceCount--

    // window.validator.removeField(`#referance_name_${referanceCount}`)
    // window.validator.removeField(`#company_contact_${referanceCount}`)
    // window.validator.removeField(`#company_relation_${referanceCount}`)
    
    const referanceElement = document.getElementById(`referance_${referanceCount}`)
    const referanceLine = document.getElementById(`line_referance_${referanceCount}`)
    if (referanceElement) {
      referanceElement.remove()
      referanceLine.remove()
    }
  }
}

// function validation() {
//  let fname = document.getElementById("fname")
//   let designation = document.getElementById("designation")
//   let email = document.getElementById("email")
//   let phone = document.getElementById("phone")
//   let male = document.getElementById("male").checked
//   let female = document.getElementById("female").checked
//   let relationshipstatus = document.getElementById("relationshipstatus").value
//   let lname = document.getElementById("lname")
//   let address1 = document.getElementById("address1")
//   let address2 = document.getElementById("address2")
//   let city = document.getElementById("city")
//   let state = document.getElementById("state").value
//   let zipcode = document.getElementById("zipcode")
//   let bod = document.getElementById("bod")
  
//   console.log("W1");
  
//   const validation = new window.JustValidate('#jobForm');
//   validation
//     .addField('#fname', [
//       {
//         rule: 'required',
//         errorMessage: 'First name is required',
//       }]);
// }


