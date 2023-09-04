// console.log("hello");

const contestFeed = document.getElementById("contest-feed");

//fetch the data from API
fetch("https://kontests.net/api/v1/all")
 .then((response)=> response.json())
 .then((data)=>{
    console.log(data);
    data.forEach((contest)=>{
        const contestCard = document.createElement("div");
        contestCard.classList.add("contest-card")

        const contestTitle = document.createElement("div");
        contestTitle.classList.add("contest-title");
        contestTitle.textContent = contest.name;

        const contestDetails = document.createElement("div");
        contestDetails.classList.add("contest-details");
        contestDetails.innerHTML = 
        `<p>Start: ${formatDate(contest.start_time)}</p>
        <p>End: ${formatDate(contest.end_time)}</p>
        `

        const contestLink = document.createElement("a")
        contestLink.classList.add("contest-link");
        contestLink.href = contest.url;
        contestLink.target="_blank";
        contestLink.textContent = "Join Contest";


        contestCard.appendChild(contestTitle);
        contestCard.append(contestDetails)
        contestCard.append(contestLink)

        contestFeed.appendChild(contestCard)
    })
 })
 .catch((error)=>{
    console.error("Error in fetching contest data", error);
 });


 function formatDate(inputDate){
    const options = {
        year: 'numeric',
        month: 'numeric',
        day:'numeric',
        hour:'numeric',
        minute:'numeric',
        second:'numeric',
        hour12:true
    }
    const formattedDate = new Intl.DateTimeFormat('en-us', options).format(new Date(inputDate));
    return formattedDate;
 }