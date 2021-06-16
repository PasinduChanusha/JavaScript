var marks;

marks = prompt("Enter Your Marks: ");
if (marks > 90) {
    console.log("A+");
} else if (marks > 80) {
    console.log("A");
} else if (marks > 70) {
    console.log("A-");
} else if (marks > 65) {
    console.log("B+");
} else if (marks > 60) {
    console.log("B");
} else if (marks > 55) {
    console.log("B-");
} else if (marks > 50) {
    console.log("C");
} else {
    console.log("F");
}