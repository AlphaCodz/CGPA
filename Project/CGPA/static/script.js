const form = document.querySelector("form");
const wrapper = document.getElementsByClassName("container");
const courseContainer = document.querySelector(".courses");
const [...inputs] = document.getElementsByTagName("input")

inputs.forEach(element =>{
  element.value=""
})


// course credits
function credistOptions() {
  const [...credits] = document.getElementsByClassName("credits");
  credits.forEach((el) => {
    el.innerHTML = ` <option value="">credits</option>`;
  });
  let optionValue, options;
  for (let i = 4; i > -1; i--) {
    optionValue = `${i}.00`;
    options = `<option value="${optionValue}">${optionValue}</option>`;
    credits.forEach((el) => {
      el.insertAdjacentHTML("beforeend", options);
    });
  }
}
credistOptions();

form.addEventListener("click", (e) => {
  // prevent default behaviour on all target elements
  e.preventDefault();

  // remove a course if and only if the cousrse is greater than 4
  if (
    e.target.classList.contains("fa-solid") &&
    e.target.parentElement.parentElement.children.length > 4
  ) {
    e.target.closest(".course_info").remove();
  }

  // add a new course with max course length === 6
  if (e.target.classList.contains("addCourse")) {
    if (
      e.target.parentElement.parentElement.previousElementSibling.children
        .length >= 6
    )
      return;
    const html = `<section class="course_info">
    <input type="text" placeholder="course title" />
    <select class="gradeOption">
      <option value="">grade</option>
      <option value="A+">A+</option>
      <option value="A-">A-</option>
      <option value="B+">B+</option>
      <option value="B-">B-</option>
      <option value="C+">C+</option>
      <option value="C-">C-</option>
      <option value="D">D</option>
      <option value="E">E</option>
      <option value="F">F</option>
    </select>
    <select class="credits">
      <option value="">credits</option>
    </select>
    <i class="fa-solid fa-xmark"></i>
  </section>`;
    e.target.parentElement.parentElement.previousElementSibling.insertAdjacentHTML(
      "beforeend",
      html
    );
    credistOptions();
    console.log(  e.target.parentElement.parentElement.previousElementSibling.children)
    if (
      e.target.parentElement.parentElement.previousElementSibling.children
        .length > 5
    )
      e.target.style.backgroundColor = "#7c7a7a";
    //console.log( e.target.parentElement.parentElement.previousElementSibling.firstElementChild.children[2]);
  }

  // adding a new semester
  if (e.target.classList.contains("addSemester")) {

    // all semester shoundn't be greater than 2
    if (wrapper.length > 1) return;
    const Html = ` <div class="container">
    <div class="info">
      <h1>2nd Semester</h1>
      <p>NB: min, of 4 courses, max. of 6 courses</p>
    </div>
    <div class="courses">
      <section class="course_info">
        <input type="text" placeholder="course title" />
        <select class="gradeOption">
          <option value="">grade</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="C+">C+</option>
          <option value="C-">C-</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
        <select class="credits">
          <option value="">credits</option>   
        </select>
        <i class="fa-solid fa-xmark"></i>
      </section>
      <section class="course_info">
        <input type="text" placeholder="course title" />
        <select class="gradeOption">
          <option value="">grade</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="C+">C+</option>
          <option value="C-">C-</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
        <select class="credits">
          <option value="">credits</option>
        </select>
        <i class="fa-solid fa-xmark"></i>
      </section>
      <section class="course_info">
        <input type="text" placeholder="course title" />
        <select class="gradeOption">
          <option value="">grade</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="C+">C+</option>
          <option value="C-">C-</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
        <select class="credits">
          <option value="">credits</option>
        </select>
        <i class="fa-solid fa-xmark"></i>
      </section>
      <section class="course_info">
        <input type="text" placeholder="course title" />
        <select class="gradeOption">
          <option value="">grade</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="C+">C+</option>
          <option value="C-">C-</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
        <select class="credits">
          <option value="">credits</option>
        </select>
        <i class="fa-solid fa-xmark"></i>
      </section>
    </div>
    <div class="wrapper">
      <h3>gpa:0.00</h3>
      <div class="btn">
      <button class="addCourse">add course</button>
      </div>
    </div>
  </div>`;
    form.insertAdjacentHTML("beforeend", Html);
    credistOptions();
  }
});
