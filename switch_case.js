var empN = "Pasindu";
var jN = "Engineer";

switch (jN.toLocaleLowerCase()) {
    case 'teacher':
        console.log(empN + " is a Teacher");
        break;
    case 'doctor':
        console.log(empN + " is a Docter");
        break;
    case 'engineer':
        console.log(empN + " is a Engineer");
        break;
    default:
        console.log(empN + " is a Donkey");
        break;
}