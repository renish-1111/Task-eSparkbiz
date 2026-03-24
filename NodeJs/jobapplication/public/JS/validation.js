

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
            rule:"number",
        }
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
                console.log(age);
                
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