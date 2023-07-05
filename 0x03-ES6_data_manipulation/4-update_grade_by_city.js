/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
export default function updateStudentGradeByCity(list, city, newGrades) {
  return list.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    // eslint-disable-next-line no-param-reassign
    if (matchingGrade) {
      student.grade = matchingGrade.grade;
    } else {
      student.grade = 'N/A';
    }

    return student;
  }).filter((student) => student.location === city);
}
