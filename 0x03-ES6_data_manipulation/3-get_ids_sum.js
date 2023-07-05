export default function  getStudentIdsSum(students) {
    return students.reduce((student, current) => student + current.id,0);
}
