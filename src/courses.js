export default class courses {
  constructor() {
    this._title = '';
    this._description = '';
    this._courses = [];
  }

  get title() {
    return this._title;
  }
  set title(title) {
    this._title = title;
  }

  get description() {
    return this._description;
  }

  set description(description) {
    this._description = description;
  }

  addCourse() {

    this._courses.push({ title: this._title, description: this._description });
  }

  get courses() {
    for (var i = 0; i <= 5; i++) {
      this._courses.push({ title: "title " + i, description: "description " + i });
    }
    return this._courses;
  }


}
