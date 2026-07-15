function searchJob() {
    let input = document.getElementById("search").value.toLowerCase();
    let jobs = document.querySelectorAll("#jobList li");

    let found = false;

    jobs.forEach(function(job) {
        if (job.innerText.toLowerCase().includes(input)) {
            job.style.display = "block";
            found = true;
        } else {
            job.style.display = "none";
        }
    });

    if (!found && input !== "") {
        alert("No matching job found.");
    }

    if (input === "") {
        jobs.forEach(function(job) {
            job.style.display = "block";
        });
    }
}