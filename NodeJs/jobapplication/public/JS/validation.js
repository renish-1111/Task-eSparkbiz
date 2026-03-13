

window.validator =  new window.JustValidate("#jobForm",{
    submitFormAutomatically:false,
    validateBeforeSubmitting:true
}) 

window.validator.onSuccess((event) => {
    event.currentTarget.submit();
})

window.validator
    .addField("#fname", [
        {
            rule: "required",
            errorMessage: "First Name is required",
        },
        {
            rule: "customRegexp",
            value: "^\\D*$",
            errorMessage: "Don't INsert Number in First Name",
        }
    ])

    .addField("#designation", [
        {
            rule: "required",
            errorMessage: "Designation is required",
        }])

    .addField("#email", [
        {
            rule: "required",
            errorMessage: "Email is required",
        },
        {
            rule: "email",
            errorMessage: "Email is invalid",
        }])

    .addField("#phone", [
        {
            rule: "required",
            errorMessage: "Phone number is required",
        },
        {
            rule: "number",
            errorMessage: "Phone number must be a number",
        },
        {
            rule: "minLength",
            value: 10,
            errorMessage: "Phone number must be at least 10 digits",
        },
        {
            rule: "maxLength",
            value: 10,
            errorMessage: "Phone number must be no more than 10 digits",
        }])
    .addField("#relationshipstatus", [
        {
            rule: "required",
            errorMessage: "Relationship status is required",
        },
        {
            validator: (value, fields) => {
                let validOptions = ["single", "marride", "widowed", "divorced"];
                return validOptions.includes(value);
            },
            errorMessage: "Relationship status invalid",

        },
    ])
    .addField("#lname", [
        {
            rule: "required",
            errorMessage: "Last Name is required",
        },
        {
            rule: "customRegexp",
            value: "^\\D*$",
            errorMessage: "Don't Insert Number in Last Name",
        }
    ])
    .addField("#address1", [
        {
            rule: "required",
            errorMessage: "Address 1 is required",
        },
        {
            rule: "maxLength",
            value: 100,
            errorMessage: "max length of address is 100"
        },
    ])
    .addField("#address2", [
        {
            rule: "required",
            errorMessage: "Address 2 is required",
        },
        {
            rule: "maxLength",
            value: 100,
            errorMessage: "max length of address is 100"
        },
    ])
    .addField("#city", [
        {
            rule: "required",
            errorMessage: "City is required",
        },
    ])
    .addField("#state", [
        {
            rule: "required",
            errorMessage: "State is required",
        },
        {
            validator: (value, fields) => {
                let validOptions = ["gujarat", "maharashtra", "rajasthan", "madhya pradesh"];
                return validOptions.includes(value);
            },
            errorMessage: "State is invalid",
        }
    ])
    .addField("#zipcode", [
        {
            rule: "required",
            errorMessage: "Zipcode is required",
        },
        {
            rule: "number",
        },
        {
            rule: "minLength",
            value: 6,
            errorMessage: "Zipcode length must 6"
        },
        {
            rule: "maxLength",
            value: 6,
            errorMessage: "Zipcode length must 6"
        }
    ])
    .addField("#bod", [
        {
            rule: "required",
            errorMessage: "Birth of Date is required",
        },
        {
            validator: (value, fields) => {
                let curr = new Date()
                let bod = new Date(value);
                let age = (curr - bod) / (1000 * 60 * 60 * 364 * 24)

                if (age >= 18) {

                    return true
                }
                else {
                    return false
                }

            },
            errorMessage: "Age must be 18",
        }
    ])
    .addRequiredGroup("#radio_gender", errorMessage = "Select any option")

window.validator
    .addField("#board_ssc", [
        {
            rule: "required",
            errorMessage: "Board Name is required",
        },
        {
            rule: "customRegexp",
            value: "^\\D*$",
            errorMessage: "Don't Insert Number in First Name",
        }
    ])
    .addField("#pass_year_ssc", [
        {
            rule: "required",
            errorMessage: "Passing Year is required",
        },
        {
            rule: "number",
            errorMessage: "Enter Year in Numaric",
        },
        {
            rule: "minNumber",
            value: 1950,
            errorMessage: "Invalid Year"
        },
        {
            validator: (value) => {
                let curr = new Date().getFullYear()
                let enterValue = value

                if (curr + 1 >= enterValue) {
                    return true
                }
                else {
                    return false
                }

            },
            errorMessage: "Future date inserted",
        }
    ])
    .addField("#percentage_ssc", [
        {
            rule: "required",
            errorMessage: "Percentage is required",
        },
        {
            rule: "number",
            errorMessage: "Enter Year in Numaric",
        },
        {
            rule: "minNumber",
            value: 0,
            errorMessage: "Not be nagative"
        },
        {
            rule: "maxNumber",
            value: 100,
            errorMessage: "Not more than 100"
        }
    ])
    .addField("#board_hsc_diploma", [
        {
            rule: "required",
            errorMessage: "Board Name is required",
        },
        {
            rule: "customRegexp",
            value: "^\\D*$",
            errorMessage: "Don't INsert Number in First Name",
        }
    ])
    .addField("#pass_year_hsc_diploma", [
        {
            rule: "required",
            errorMessage: "Passing Year is required",
        },
        {
            rule: "number",
            errorMessage: "Enter Year in Numaric",
        },
        {
            rule: "minNumber",
            value: 1950,
            errorMessage: "Invalid Year"
        },
        {
            validator: (value) => {
                let curr = new Date().getFullYear()
                let enterValue = value

                if (curr + 1 >= enterValue) {
                    return true
                }
                else {
                    return false
                }

            },
            errorMessage: "Future date inserted",
        }
    ])
    .addField("#percentage_hsc_diploma", [
        {
            rule: "required",
            errorMessage: "Percentage is required",
        },
        {
            rule: "number",
            errorMessage: "Enter Year in Numaric",
        },
        {
            rule: "minNumber",
            value: 0,
            errorMessage: "Not be nagative"
        },
        {
            rule: "maxNumber",
            value: 100,
            errorMessage: "Not more than 100"
        }
    ])
    .addField("#course_bachelor", [
        {
            rule: "required",
            errorMessage: "Bachelor Degree Name is required",
        },
        {
            rule: "customRegexp",
            value: "^\\D*$",
            errorMessage: "Don't Insert Number in Bachelor Degree Name",
        }
    ])
    .addField("#university_bachelor", [
        {
            rule: "required",
            errorMessage: "University Name is required",
        },
        {
            rule: "customRegexp",
            value: "^\\D*$",
            errorMessage: "Don't Insert Number in University Name",
        }
    ])
    .addField("#pass_year_bachelor", [
        {
            rule: "required",
            errorMessage: "Passing Year is required",
        },
        {
            rule: "number",
            errorMessage: "Enter Year in Numaric",
        },
        {
            rule: "minNumber",
            value: 1950,
            errorMessage: "Invalid Year"
        },
        {
            validator: (value) => {
                let curr = new Date().getFullYear()
                console.log(curr);

                let enterValue = value

                if (curr + 1 >= enterValue) {
                    return true
                }
                else {
                    return false
                }

            },
            errorMessage: "Future date inserted",
        }
    ])
    .addField("#percentage_bachelor", [
        {
            rule: "required",
            errorMessage: "Percentage is required",
        },
        {
            rule: "number",
            errorMessage: "Enter Year in Numaric",
        },
        {
            rule: "minNumber",
            value: 0,
            errorMessage: "Not be nagative"
        },
        {
            rule: "maxNumber",
            value: 100,
            errorMessage: "Not more than 100"
        }
    ])
    .addField("#course_master", [
        {
            rule: "required",
            errorMessage: "Master Degree Name is required",
        },
        {
            rule: "customRegexp",
            value: "^\\D*$",
            errorMessage: "Don't Insert Number in master Degree Name",
        }
    ])
    .addField("#university_master", [
        {
            rule: "required",
            errorMessage: "University Name is required",
        },
        {
            rule: "customRegexp",
            value: "^\\D*$",
            errorMessage: "Don't Insert Number in University Name",
        }
    ])
    .addField("#pass_year_master", [
        {
            rule: "required",
            errorMessage: "Passing Year is required",
        },
        {
            rule: "number",
            errorMessage: "Enter Year in Numaric",
        },
        {
            rule: "minNumber",
            value: 1950,
            errorMessage: "Invalid Year"
        },
        {
            validator: (value) => {
                let curr = new Date().getFullYear()
                let enterValue = value

                if (curr + 1 >= enterValue) {
                    return true
                }
                else {
                    return false
                }

            },
            errorMessage: "Future date inserted",
        }
    ])
    .addField("#percentage_master", [
        {
            rule: "required",
            errorMessage: "Percentage is required",
        },
        {
            rule: "number",
            errorMessage: "Enter Year in Numaric",
        },
        {
            rule: "minNumber",
            value: 0,
            errorMessage: "Not be nagative"
        },
        {
            rule: "maxNumber",
            value: 100,
            errorMessage: "Not more than 100"
        }
    ])

window.validator
    .addField("#company_name_1", [
        {
            rule: "required",
            errorMessage: "Comapny Name is required",
        }
    ])
    .addField("#company_designation_1", [
        {
            rule: "required",
            errorMessage: "Designation is required",
        }
    ])
    .addField("#company_from_1", [
        {
            rule: "required",
            errorMessage: "Date is required",
        },
        {
            validator: (value) => {
                let curr = new Date()
                let enterValue = new Date(value)

                if (curr >= enterValue) {
                    return true
                }
                else {
                    return false
                }

            },
            errorMessage: "Future date inserted",
        }
    ])
    .addField("#company_to_1", [
        {
            rule: "required",
            errorMessage: "Date is required",
        },
        {
            validator: (value) => {
                let curr = new Date()
                let enterValue = new Date(value)

                if (curr >= enterValue) {
                    return true
                }
                else {
                    return false
                }

            },
            errorMessage: "Future date inserted",
        }
    ])


window.validator
    .addField("#referance_name_1", [
        {
            rule: "required",
            errorMessage: "Referance Name is required",
        },
        {
            rule: "customRegexp",
            value: "^\\D*$",
            errorMessage: "Don't Insert Number in Referance Name",
        }
    ])
    .addField("#company_contact_1", [
        {
            rule: "required",
            errorMessage: "Phone number is required",
        },
        {
            rule: "number",
            errorMessage: "Phone number must be a number",
        },
        {
            rule: "minLength",
            value: 10,
            errorMessage: "Phone number must be at least 10 digits",
        },
        {
            rule: "maxLength",
            value: 10,
            errorMessage: "Phone number must be no more than 10 digits",
        }
    ])
    .addField("#company_relation_1", [
        {
            rule: "required",
            errorMessage: "Relation is required",
        },
        {
            rule: "customRegexp",
            value: "^\\D*$",
            errorMessage: "Don't Insert Number in Relation",
        }
    ])
window.validator
    .addField("#preferd_location", [
        {
            rule: "required",
            errorMessage: "Preferd location is required",
        }
    ])
    .addField("#notice_period", [
        {
            rule: "required",
            errorMessage: "Notice period is required",
        },
        {
            rule: "number",
            errorMessage: "Notice period must be a number",
        },
        {
            rule: "minLength",
            value: 0,
            errorMessage: "Not Nagative",
        },
    ])
    .addField("#expacted_ctc", [
        {
            rule: "required",
            errorMessage: "Expacted CTC is required",
        },
        {
            rule: "number",
            errorMessage: "Expacted CTC must be a number",
        },
        {
            rule: "minNumber",
            value: 0,
            errorMessage: "Not Nagative",
        },
    ])
    .addField("#current_ctc", [
        {
            rule: "required",
            errorMessage: "Current CTC is required",
        },
        {
            rule: "number",
            errorMessage: "Current CTC must be a number",
        },
        {
            rule: "minNumber",
            value: 0,
            errorMessage: "Not Nagative",
        },
    ])
    .addField("#department", [
        {
            rule: "required",
            errorMessage: "Department is required",
        },

    ])

window.validator.onSuccess((event) => {
    event.currentTarget.submit();
})
window.validator.onFail((fields) => {
    console.log("Validation failed",fields);
    
})