let degreeCount = 1
function educationAdd() {

    html = `
    <div>
            <div>Degree</div>
            <div class="flex">
              <div>
                <label for="course_degree_${degreeCount}">Course Name</label>
                <input type="text" id="course_degree_${degreeCount}" name="course_degree_${degreeCount}" />
              </div>
              <div>
                <label for="university_degree_${degreeCount}">University</label>
                <input
                  type="text"
                  id="university_degree_${degreeCount}"
                  name="university_degree_${degreeCount}"
                />
              </div>
              <div>
                <label for="pass_year_degree_${degreeCount}">Passing Year</label>
                <input
                  type="text"
                  id="pass_year_degree_${degreeCount}"
                  name="pass_year_degree_${degreeCount}"
                />
              </div>
              <div>
                <label for="percentage_degree_${degreeCount}">Percentage</label>
                <input
                  type="text"
                  id="percentage_degree_${degreeCount}"
                  name="percentage_degree_${degreeCount}"
                />
              </div>
            </div>
          </div>
    `
    degreeCount++
    document.getElementById("addDegree").innerHTML += html
}

